#!/usr/bin/env python3
"""Fail if the brochure site reintroduces a claim the product contradicts.

Three claims were live on forboc.ai and wrong against
`classified/docs/business/business-model.md`:

  * inference described as local, on-device, or locally run — it runs on
    ForbocAI infrastructure
  * "zero per-token cost" — the product is paid from the first API call
  * engine support beyond TypeScript and Unreal Engine 5 presented as shipped

They are easy to write again by accident, because each of them sounds like a
selling point. This check is the thing that notices.

    python3 scripts/audit-claims.py          # check, exit 1 on any hit
    python3 scripts/audit-claims.py --list   # show what it looks for
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

SEARCHED = ("*.html", "*.js", "*.md")
SKIPPED = {".git", "node_modules", ".dream-loop", "design_ref", "posts", "scripts"}

# Docs that name a banned claim in order to forbid it opt out with this marker.
ALLOW = "claims-audit:allow"

# Each rule: (name, pattern, why it is wrong, what to say instead)
RULES = [
    (
        "local inference",
        re.compile(r"local[-\s]?(?:first\s+)?inference|locally[-\s]run|on[-\s]device\s+(?:model|inference)", re.I),
        "Servitor runs on ForbocAI infrastructure, not on the player's machine.",
        "Say the model runs on ForbocAI infrastructure, so studios ship no runtime.",
    ),
    (
        "free or per-token-free",
        re.compile(r"zero\s+per[-\s]token|free\s+tier|no\s+cost\s+per\s+token", re.I),
        "The SDK does not function without the API and is paid from day one.",
        "Say it is one predictable bill, or name the tiered subscription.",
    ),
    (
        "unshipped engine support",
        re.compile(r"(?:Unity|Godot|Python|Rust)\s+(?:plugin|SDK|binding|support)\s+(?:is\s+)?(?:available|shipped|live)", re.I),
        "Only the TypeScript and Unreal Engine 5 SDKs meet the consumer contract.",
        "List Unity and Godot as roadmap or marketplace listings, not as shipped.",
    ),
    (
        "stale fixed quarter",
        re.compile(r"Q[1-3]\s*20(?:2[0-5])\b"),
        "A quarter that has already passed makes the roadmap read as abandoned.",
        "Use shipped / in progress / next with a forward horizon.",
    ),
]


def files() -> list[Path]:
    out: list[Path] = []
    for pattern in SEARCHED:
        for path in ROOT.rglob(pattern):
            if any(part in SKIPPED for part in path.relative_to(ROOT).parts):
                continue
            out.append(path)
    return sorted(out)


def main() -> int:
    if "--list" in sys.argv:
        for name, pattern, why, instead in RULES:
            print(f"{name}\n  pattern: {pattern.pattern}\n  why:     {why}\n  instead: {instead}\n")
        return 0

    hits = 0
    for path in files():
        try:
            lines = path.read_text(encoding="utf-8").splitlines()
        except (UnicodeDecodeError, OSError):
            continue
        for lineno, line in enumerate(lines, 1):
            # A line may quote a banned claim in order to ban it.
            if ALLOW in line:
                continue
            for name, pattern, why, instead in RULES:
                match = pattern.search(line)
                if not match:
                    continue
                hits += 1
                rel = path.relative_to(ROOT)
                print(f"{rel}:{lineno}  [{name}]  {match.group(0)!r}")
                print(f"    {why}")
                print(f"    {instead}")
    if hits:
        print(f"\n{hits} contradicted claim(s). Check classified/docs/business/business-model.md.")
        return 1

    print(f"No contradicted claims in {len(files())} files.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
