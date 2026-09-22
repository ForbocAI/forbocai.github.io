#!/usr/bin/env python3
"""Every stylesheet parses, and no rule is silently dropped.

Why this exists, exactly.

styles/deck.css passed 300 lines and was split by concern into four files. The
split was verified by concatenating the parts and running `cmp` against the
original: byte-identical, so it looked proven. It was not. Two of the four cuts
landed in the MIDDLE of a comment, so styles/deck/slide.css and
styles/deck/plate.css each began with an orphaned comment tail and a stray `*/`
and no opening `/*`. The bytes were all still there. The syntax was not.

A browser recovering from that discards the rule that follows, so `.slide` lost
`padding: var(--deck-pad-block) var(--deck-pad)` and every deck slide has been
shipping with zero horizontal padding since. A reviewer found it from the
picture alone: "the deck slide grid runs from x=172 to x=1270 inside a card
whose edges are x=170 and x=1270. Zero interior padding on both sides."

No gate could catch it. check_line_count only counts lines, check_dead_code
only asks whether a class is worn, and the browser checks measure the page they
are given without asking whether the page is the one that was written. A
dropped rule is invisible to all of them: the site still renders, it just
renders something else.

This is the cheapest possible guard against the whole class, and files here
will keep being split, because the 300-line rule guarantees it.

    python3 scripts/check_css_syntax.py
"""
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
SKIP = {"node_modules", ".git", ".dream-loop", "__pycache__"}


def faults_in(text: str) -> list:
    """Comment and brace faults, with the line each one is on."""
    out = []
    depth = 0          # brace nesting
    i = 0
    line = 1
    in_comment = False
    comment_line = 0
    n = len(text)

    while i < n:
        ch = text[i]
        nxt = text[i + 1] if i + 1 < n else ""

        if ch == "\n":
            line += 1
            i += 1
            continue

        if in_comment:
            if ch == "*" and nxt == "/":
                in_comment = False
                i += 2
                continue
            i += 1
            continue

        if ch == "/" and nxt == "*":
            in_comment = True
            comment_line = line
            i += 2
            continue

        # The exact fault that shipped: a comment's tail with no head. Outside
        # a comment, `*/` is not a token CSS has any use for.
        if ch == "*" and nxt == "/":
            out.append(f"line {line}: `*/` with no opening `/*` — the file starts or continues inside a comment that is not here")
            i += 2
            continue

        # Strings can hold braces and comment markers; skip them whole.
        if ch in "\"'":
            quote = ch
            i += 1
            while i < n and text[i] != quote:
                if text[i] == "\\":
                    i += 1
                if text[i] == "\n":
                    line += 1
                i += 1
            i += 1
            continue

        if ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth < 0:
                out.append(f"line {line}: `}}` with no matching `{{`")
                depth = 0
        i += 1

    if in_comment:
        out.append(f"line {comment_line}: a comment opens here and never closes — everything after it is discarded")
    if depth:
        out.append(f"{depth} unclosed `{{` at end of file")
    return out


def main() -> int:
    sheets = sorted(
        p for p in ROOT.rglob("*.css")
        if not any(part in SKIP for part in p.parts)
    )
    if not sheets:
        print("css-syntax: no stylesheets found — that is itself wrong.")
        return 1

    bad = 0
    for sheet in sheets:
        text = sheet.read_text(encoding="utf-8")
        faults = faults_in(text)

        # A stylesheet whose first non-blank line is neither a comment, an
        # at-rule nor a selector is a file that was cut somewhere it should
        # not have been.
        first = next((ln for ln in text.splitlines() if ln.strip()), "")
        if first and not re.match(r"^\s*(/\*|@|[.#\[:a-zA-Z*])", first):
            faults.append(f"line 1: starts with {first.strip()[:48]!r}, which is not a comment, an at-rule or a selector")

        if faults:
            bad += 1
            rel = sheet.relative_to(ROOT)
            print(f"\n  {rel}")
            for f in faults:
                print(f"      {f}")

    if bad:
        print(f"\ncss-syntax: {bad} stylesheet(s) will not parse as written.")
        return 1
    print(f"css-syntax: all {len(sheets)} stylesheets parse, comments balanced, braces closed.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
