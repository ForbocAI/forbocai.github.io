#!/usr/bin/env python3
"""Reject any authored file over the 300-line ceiling.

A file that keeps growing is hiding several concerns under one name. The
ceiling exists to surface the boundary: when a file crosses it, the answer is
to dissolve it into files named for the concerns it was holding, never to
compact it (collapse rules, strip comments, inline what was named).

Scans src, styles, scripts and the page itself. Generated or vendored trees
(node_modules, __pycache__, the .dream-loop measurement tools) are ignored.
No path-narrowing arguments are accepted: the ceiling is repo-wide.

    python3 scripts/check_line_count.py
"""

from __future__ import annotations

from pathlib import Path
import sys


ROOT = Path(__file__).resolve().parent.parent
SCAN = ["src", "styles", "scripts", "index.html"]
SUFFIXES = {".js", ".mjs", ".cjs", ".css", ".py", ".sh", ".html"}
EXCLUDED_DIRS = {".git", "node_modules", "__pycache__", ".dream-loop"}
MAX_LINES = 300

GUIDANCE = """\
A file over the ceiling is a domain that has grown a hidden boundary. Dissolve
it completely into files named for the concerns it holds, nested in a folder
named for the origin (turn.css -> turn/band.css, turn/counterfactual.css,
turn/climax.css; main.js -> systems/headerTone.js ...), each name a concern,
never a position ("part2") or a role bucket ("misc"). Nothing is compacted and
no comment is dropped: cut at rule boundaries, then prove the pieces
concatenate back to the original before you reassemble them. A stylesheet that
relied on cascade order keeps that order in index.html's link list."""


def excluded(path: Path) -> bool:
    return any(part in EXCLUDED_DIRS for part in path.parts)


def line_count(path: Path) -> int | None:
    try:
        with path.open("r", encoding="utf-8") as handle:
            return sum(1 for _ in handle)
    except (UnicodeDecodeError, OSError):
        return None


def authored_files() -> list[Path]:
    files: list[Path] = []
    for name in SCAN:
        target = ROOT / name
        if target.is_file():
            files.append(target)
        elif target.is_dir():
            files.extend(p for p in target.rglob("*") if p.is_file())
    return sorted(p for p in set(files) if p.suffix in SUFFIXES and not excluded(p))


def over_limit() -> list[tuple[int, Path]]:
    found = []
    for path in authored_files():
        count = line_count(path)
        if count is not None and count > MAX_LINES:
            found.append((count, path))
    return sorted(found, reverse=True)


def main() -> int:
    if len(sys.argv) > 1:
        print("check_line_count.py takes no arguments: the ceiling is repo-wide.", file=sys.stderr)
        return 2
    found = over_limit()
    if not found:
        print(f"line-count: every authored file is within {MAX_LINES} lines ({len(authored_files())} files).")
        return 0
    print(f"line-count: {len(found)} file(s) over {MAX_LINES} lines")
    for count, path in found:
        print(f"  {count:5d}  {path.relative_to(ROOT).as_posix()}")
    print()
    print(GUIDANCE)
    return 1


if __name__ == "__main__":
    sys.exit(main())
