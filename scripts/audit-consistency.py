#!/usr/bin/env python3
"""Fail when one route makes a claim another route falsifies.

`audit-claims.py` catches a sentence that is wrong against the product. This
catches a sentence that is wrong against *the rest of the site* — which is the
harder failure, because every sentence involved reads fine on its own.

Three rounds of copy review found nothing else. The pattern each time was a
promise about our own discipline, kept everywhere except one page:

  * "Ghost coverage is the only one we are dating" — while the go-to-market
    slide dated the account portal to Q4.
  * "We put this here rather than in front of developers" — while the identical
    market figure sat on the home page.
  * "four orthogonal axes" on one route and "four independent dials" on another,
    for one mechanism.

A reader who notices any of these stops believing the undated items, the
editorial judgement, and the vocabulary. The boast is what makes the slip cost
something, so the checks below are keyed to the boasts.

    python3 scripts/audit-consistency.py          # check, exit 1 on any hit
    python3 scripts/audit-consistency.py --list   # show what it looks for

Run it against the rendered copy dump when there is one (it covers what a
reader actually sees, including the deck), and against source otherwise.
"""
from __future__ import annotations

import re
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DUMP = ROOT / ".dream-loop" / "copy.txt"
SOURCE = ROOT / "src" / "components"

# Prose long enough that two routes sharing it verbatim is a copy-paste, not a
# coincidence of common words.
TIC_MIN_WORDS = 12
TIC_LIMIT = 2


def strip_markup(text: str) -> str:
    text = re.sub(r"<[^>]+>", " ", text)
    text = text.replace("&nbsp;", " ").replace("&amp;", "&")
    return text


def load() -> tuple[str, str]:
    """Prefer the rendered dump; fall back to component source."""
    if DUMP.exists():
        return DUMP.read_text(encoding="utf-8"), str(DUMP.relative_to(ROOT))
    parts = [strip_markup(p.read_text(encoding="utf-8")) for p in sorted(SOURCE.glob("*.js"))]
    return "\n".join(parts), str(SOURCE.relative_to(ROOT))


def sentences(text: str) -> list[str]:
    flat = re.sub(r"\s+", " ", strip_markup(text))
    return [s.strip() for s in re.split(r"(?<=[.!?])\s+", flat) if s.strip()]


def check_single_date(text: str) -> list[str]:
    """If the copy says one thing is dated, only one subject may carry a date."""
    boast = re.search(r"only (?:one we are dating|date on this|thing we are dating)", text, re.I)
    if not boast:
        return []
    # Checked per line, not per sentence: the dump keeps a paragraph or bullet on
    # one line, and the subject is routinely named in the clause before the date
    # ("hand back coverage. Reporting lands Q4 2026.").
    subject = re.compile(r"ghost|coverage", re.I)
    bad = []
    for line in strip_markup(text).splitlines():
        for q in re.finditer(r"\bQ[1-4]\s*20\d\d\b", line):
            if not subject.search(line):
                bad.append(
                    f"{q.group(0)} attached to something other than Ghost coverage: {line.strip()[:110]!r}"
                )
    return bad


def check_placement_promise(text: str) -> list[str]:
    """A claim about where we chose to put something must be true."""
    bad = []
    if re.search(r"we put this here rather than in front of developers", text, re.I):
        # The market argument it refers to is the collectible-spend figure.
        home = text.split("ROUTE: #pitch")[0] if "ROUTE: #pitch" in text else ""
        if re.search(r"\$?1\.25\s*billion|TCG Pocket", home, re.I):
            bad.append(
                "the Market slide says this material is kept away from developers, "
                "but the same figure appears on a non-deck route"
            )
    return bad


def check_vocabulary(text: str) -> list[str]:
    """One mechanism, one name for it."""
    bad = []
    if re.search(r"\borthogonal\b", text, re.I) and re.search(r"independent dials", text, re.I):
        bad.append("the four axes are called both 'orthogonal' and 'independent dials'")
    if re.search(r"\brake\b", text, re.I):
        bad.append("'rake' is gambling register in a storybook voice — say 'platform fee'")
    return bad


def check_answered_promises(text: str) -> list[str]:
    """If a section says it answers a list, it has to answer all of it."""
    if not re.search(r"(?:All three|each) are architecture problems", text, re.I):
        return []
    # Each trap is answered by its argument, not by repeating its label — §3
    # answers incoherence without ever using the word.
    answers = {
        "latency": r"deadline|round trip|misses it",
        "cost": r"priced by request|metered at the|per[- ]token|tokens spoken",
        "incoherence": r"cannot be validated|invented dialogue|grounded|proposes.*never mutates",
    }
    tail = text.lower().split("architecture problems", 1)[-1][:12000]
    return [
        f"section promises to answer three traps but never argues {trap}"
        for trap, pattern in answers.items()
        if not re.search(pattern, tail, re.I)
    ]


def check_verbatim_repeats(text: str) -> list[str]:
    """A signature line is memorable once and a mannerism by the fourth time."""
    counts = Counter(
        s.lower().rstrip(".")
        for s in sentences(text)
        if len(s.split()) >= TIC_MIN_WORDS
    )
    return [
        f"repeated verbatim {n} times: {s[:90]!r}"
        for s, n in counts.most_common()
        if n > TIC_LIMIT
    ]


CHECKS = [
    ("single dated deliverable", check_single_date),
    ("placement promise", check_placement_promise),
    ("one name per mechanism", check_vocabulary),
    ("promised answers delivered", check_answered_promises),
    ("verbatim repeats", check_verbatim_repeats),
]


def main() -> int:
    if "--list" in sys.argv:
        for name, fn in CHECKS:
            print(f"{name}\n  {(fn.__doc__ or '').strip()}\n")
        return 0

    text, source = load()
    hits = 0
    for name, fn in CHECKS:
        for problem in fn(text):
            hits += 1
            print(f"[{name}] {problem}")

    if hits:
        print(f"\n{hits} cross-route contradiction(s) in {source}.")
        print("Each of these reads fine on its own page. That is why it needs a script.")
        return 1

    print(f"No cross-route contradictions in {source}.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
