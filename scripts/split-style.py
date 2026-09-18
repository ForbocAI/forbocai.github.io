#!/usr/bin/env python3
"""Split style.css into subdomain files, none longer than the line ceiling.

The cascade is source order, so the split has to be lossless and ordered: the
files concatenated back together must equal the original byte for byte, and the
page must link them in the same sequence. This script asserts both, so a future
edit that breaks the ordering fails here rather than in a browser.

Sections come from the banner comments already in the file — reset, typography,
hero, mission, servitor and so on — because those are the subdomains the
stylesheet was already written in. A section longer than the ceiling is split
again at top-level block boundaries, never inside a rule.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "style.css"
OUT_DIR = ROOT / "styles"
LINE_CEILING = 300

BANNER = re.compile(r"^/\* -+ ?([a-z][a-z ]*?) ?-+ \*/\s*$")
# A bare relative asset reference — not data:, not http:, not an anchor.
# The quote, if any, has to stay outside the hop: url('logo.png') becomes
# url('../logo.png'), never url(../'logo.png') — which silently voids a mask
# and leaves the element painting its bare background colour.
ASSET_URL = re.compile(
    r"url\((?P<q>['\"]?)(?!data:|https?:|//|#|\.\./)(?P<path>[^)'\"]+)(?P=q)\)"
)


def slug(name: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", name.strip().lower()).strip("-")


def top_level_blocks(lines: list[str]) -> list[tuple[int, int]]:
    """Spans of complete top-level constructs, so a split never lands in a rule."""
    spans: list[tuple[int, int]] = []
    start = 0
    depth = 0
    in_comment = False
    for index, line in enumerate(lines):
        text = line
        scan = 0
        while scan < len(text):
            if in_comment:
                close = text.find("*/", scan)
                if close < 0:
                    scan = len(text)
                else:
                    in_comment = False
                    scan = close + 2
                continue
            opening = text.find("/*", scan)
            brace_open = text.find("{", scan)
            brace_close = text.find("}", scan)
            candidates = [p for p in (opening, brace_open, brace_close) if p >= 0]
            if not candidates:
                break
            position = min(candidates)
            if position == opening:
                in_comment = True
                scan = opening + 2
            elif position == brace_open:
                depth += 1
                scan = brace_open + 1
            else:
                depth -= 1
                scan = brace_close + 1
        if depth == 0 and not in_comment and line.strip() == "":
            spans.append((start, index + 1))
            start = index + 1
    if start < len(lines):
        spans.append((start, len(lines)))
    return [s for s in spans if s[1] > s[0]]


def chunk(spans: list[tuple[int, int]], lines: list[str]) -> list[tuple[int, int]]:
    """Group whole blocks into parts that each stay under the ceiling."""
    parts: list[tuple[int, int]] = []
    current_start = spans[0][0]
    for index, (start, end) in enumerate(spans):
        length = end - current_start
        next_length = (spans[index + 1][1] - current_start) if index + 1 < len(spans) else None
        at_end = index + 1 == len(spans)
        if at_end:
            parts.append((current_start, end))
        elif next_length is not None and next_length > LINE_CEILING and length > 0:
            parts.append((current_start, end))
            current_start = spans[index + 1][0]
    return parts


def main() -> int:
    source = SOURCE.read_text(encoding="utf-8")
    lines = source.splitlines(keepends=True)

    # Section boundaries from the banners the stylesheet already carries.
    boundaries: list[tuple[int, str]] = [(0, "tokens")]
    for index, line in enumerate(lines):
        match = BANNER.match(line)
        if match:
            boundaries.append((index, slug(match.group(1))))
    boundaries.append((len(lines), ""))

    OUT_DIR.mkdir(exist_ok=True)
    for stale in OUT_DIR.glob("*.css"):
        stale.unlink()

    written: list[str] = []
    order = 0
    for position, (start, name) in enumerate(boundaries[:-1]):
        end = boundaries[position + 1][0]
        section = lines[start:end]
        if not section:
            continue
        parts = chunk(top_level_blocks(section), section) if len(section) > LINE_CEILING else [(0, len(section))]
        multiple = len(parts) > 1
        for part_index, (part_start, part_end) in enumerate(parts, start=1):
            body = "".join(section[part_start:part_end])
            if not body.strip():
                continue
            # These files live in styles/, so a bare url(logo.png) would resolve
            # against that folder. Assets stay where they are; the reference
            # gains the hop out. Verified by the 404 the browser check raised
            # the first time this ran.
            body = ASSET_URL.sub(r"url(\g<q>../\g<path>\g<q>)", body)
            suffix = f"-{part_index}" if multiple else ""
            filename = f"{name}{suffix}.css"
            (OUT_DIR / filename).write_text(body, encoding="utf-8")
            written.append(filename)
            order += 1

    # Losslessness is the whole contract: concatenation must reproduce the file.
    rebuilt = "".join((OUT_DIR / name).read_text(encoding="utf-8") for name in written)
    if rebuilt != ASSET_URL.sub(r"url(\g<q>../\g<path>\g<q>)", source):
        print("split-style: concatenation does not reproduce style.css", file=sys.stderr)
        return 1

    oversized = [
        (name, len((OUT_DIR / name).read_text(encoding="utf-8").splitlines()))
        for name in written
        if len((OUT_DIR / name).read_text(encoding="utf-8").splitlines()) > LINE_CEILING
    ]
    for name, count in oversized:
        print(f"split-style: {name} is {count} lines, over {LINE_CEILING}", file=sys.stderr)

    for name in written:
        count = len((OUT_DIR / name).read_text(encoding="utf-8").splitlines())
        print(f"{count:5d}  styles/{name}")
    print(f"\n{len(written)} files, lossless against style.css")
    return 1 if oversized else 0


if __name__ == "__main__":
    raise SystemExit(main())
