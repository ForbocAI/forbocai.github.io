#!/usr/bin/env python3
"""Dead-code guard for the site: what nothing reaches, and what nothing wears.

On a static page the dead code is mostly CSS. Copy gets distilled, a section
moves to its own route, a class stops appearing in any template — and the
rules for it stay behind, still shipped to every reader, still read by every
person who edits the stylesheet next. So the guard walks the reference graph
in both directions:

  DEAD-CSS-CLASS   a class selector in styles/ that no template in src/, no
                   string in a script, and index.html itself never produces.
                   A class composed at runtime (`sigil-${tone}`) counts as
                   produced for every class that starts with that prefix.
  DEAD-CSS-FILE    a stylesheet under styles/ that index.html does not link.
  DEAD-JS          a module under src/ that nothing imports and the page
                   does not load as its entry.
  DEAD-SCRIPT      a script under scripts/ that no verify step, package
                   script, document or other script names.
  DEAD-FILE        a backup or scratch file (.bak, .orig, .old, .tmp) in the
                   deploy root.

Root images that nothing in the repo references are listed but do not fail
the guard: a logo can be linked from outside this repository, and the guard
only knows this repository.

No path-narrowing arguments are accepted.

    python3 scripts/check_dead_code.py
"""

from __future__ import annotations

from functools import lru_cache
from pathlib import Path
import re
import sys


ROOT = Path(__file__).resolve().parent.parent
EXCLUDED_DIRS = {".git", "node_modules", "__pycache__", ".dream-loop"}
SOURCE_SUFFIXES = {".js", ".mjs", ".cjs"}
SCRIPT_SUFFIXES = {".js", ".mjs", ".cjs", ".py", ".sh"}
DOC_SUFFIXES = {".md", ".json", ".html", ".yml", ".yaml", ".sh", ".py", ".js", ".mjs", ".cjs"}
SCRATCH_SUFFIXES = {".bak", ".orig", ".old", ".tmp"}
IMAGE_SUFFIXES = {".png", ".webp", ".jpg", ".jpeg", ".gif", ".svg", ".ico"}

CLASS_IN_SELECTOR = re.compile(r"\.(-?[_a-zA-Z][\w-]*)")
TOKEN = re.compile(r"[A-Za-z_][\w-]*")
COMPOSED_PREFIX = re.compile(r"([a-z][\w-]*-)\$\{")
IMPORT_SPECIFIER = re.compile(r"""(?:\bfrom\s*|\bimport\s*\(?\s*)['"]([^'"]+)['"]""")


def excluded(path: Path) -> bool:
    return any(part in EXCLUDED_DIRS for part in path.parts)


def files_under(folder: Path, suffixes: set[str]) -> list[Path]:
    if not folder.is_dir():
        return []
    return sorted(p for p in folder.rglob("*") if p.is_file() and p.suffix in suffixes and not excluded(p))


@lru_cache(maxsize=None)
def read(path: Path) -> str:
    try:
        return path.read_text(encoding="utf-8", errors="replace")
    except OSError:
        return ""


def rel(path: Path) -> str:
    return path.relative_to(ROOT).as_posix()


# --------------------------------------------------------------- css classes --

def strip_comments(css: str) -> str:
    return re.sub(r"/\*.*?\*/", "", css, flags=re.S)


def selector_preludes(css: str) -> list[str]:
    """Every text run that precedes a `{`, reset at `}` and `;` so a
    declaration never leaks into the next prelude. At-rule preludes are
    dropped; their nested rule preludes are still collected."""
    preludes, buf = [], ""
    for ch in strip_comments(css):
        if ch == "{":
            preludes.append(buf.strip())
            buf = ""
        elif ch in "};":
            buf = ""
        else:
            buf += ch
    return [p for p in preludes if p and not p.startswith("@")]


def styled_classes() -> dict[str, set[Path]]:
    classes: dict[str, set[Path]] = {}
    for sheet in files_under(ROOT / "styles", {".css"}):
        for prelude in selector_preludes(read(sheet)):
            for match in CLASS_IN_SELECTOR.finditer(prelude):
                classes.setdefault(match.group(1), set()).add(sheet)
    return classes


def produced_tokens() -> tuple[set[str], set[str]]:
    text = "\n".join(read(p) for p in files_under(ROOT / "src", SOURCE_SUFFIXES))
    text += "\n" + read(ROOT / "index.html")
    return set(TOKEN.findall(text)), set(COMPOSED_PREFIX.findall(text))


def dead_classes() -> list[tuple[str, set[Path]]]:
    tokens, prefixes = produced_tokens()
    dead = []
    for name, sheets in styled_classes().items():
        if name in tokens:
            continue
        if any(name.startswith(prefix) for prefix in prefixes):
            continue
        dead.append((name, sheets))
    return sorted(dead)


# ---------------------------------------------------------------- css files --

def linked_sheets() -> set[Path]:
    html = read(ROOT / "index.html")
    return {(ROOT / href.split("?")[0]).resolve() for href in re.findall(r'href="(styles/[^"?]+)', html)}


def dead_sheets() -> list[Path]:
    linked = linked_sheets()
    return [p for p in files_under(ROOT / "styles", {".css"}) if p.resolve() not in linked]


# ------------------------------------------------------------------ modules --

def resolve_import(base: Path, specifier: str, candidates: set[Path]) -> set[Path]:
    if not specifier.startswith("."):
        return set()
    raw = (base / specifier).resolve()
    options = [raw, *(raw.with_suffix(s) for s in SOURCE_SUFFIXES), *(raw / f"index{s}" for s in SOURCE_SUFFIXES)]
    return {p for p in options if p in candidates}


def dead_modules() -> list[Path]:
    modules = {p.resolve() for p in files_under(ROOT / "src", SOURCE_SUFFIXES)}
    live: set[Path] = set()
    html = read(ROOT / "index.html")
    for src in re.findall(r'<script[^>]+src="([^"]+)"', html):
        live.update(resolve_import(ROOT, "./" + src.split("?")[0], modules))
    for module in modules:
        for specifier in IMPORT_SPECIFIER.findall(read(module)):
            live.update(resolve_import(module.parent, specifier, modules))
    return sorted(p for p in modules if p not in live)


# ------------------------------------------------------------------ scripts --

def reference_corpus() -> list[Path]:
    corpus = [ROOT / "readme.md", ROOT / "style-guide.md", ROOT / "index.html"]
    corpus += files_under(ROOT / "scripts", DOC_SUFFIXES)
    corpus += files_under(ROOT / "src", SOURCE_SUFFIXES)
    corpus += [p for p in ROOT.glob("*.json")]
    return [p for p in corpus if p.is_file()]


# The root of the script graph: verify.sh names the gates, nothing names it.
ENTRY_SCRIPTS = {"scripts/verify.sh"}


def dead_scripts() -> list[Path]:
    scripts = files_under(ROOT / "scripts", SCRIPT_SUFFIXES)
    corpus = reference_corpus()
    dead = []
    for script in scripts:
        if rel(script) in ENTRY_SCRIPTS:
            continue
        name = script.name
        referenced = any(name in read(doc) for doc in corpus if doc.resolve() != script.resolve())
        if not referenced:
            dead.append(script)
    return dead


# --------------------------------------------------------------- root files --

def scratch_files() -> list[Path]:
    return sorted(p for p in ROOT.iterdir() if p.is_file() and p.suffix in SCRATCH_SUFFIXES)


def unreferenced_images() -> list[Path]:
    images = sorted(p for p in ROOT.iterdir() if p.is_file() and p.suffix in IMAGE_SUFFIXES)
    corpus = reference_corpus() + files_under(ROOT / "styles", {".css"}) + files_under(ROOT / "posts", {".md", ".txt"})
    text = "\n".join(read(p) for p in corpus)
    return [p for p in images if p.name not in text]


# --------------------------------------------------------------------- main --

def main() -> int:
    if len(sys.argv) > 1:
        print("check_dead_code.py takes no arguments: the graph is repo-wide.", file=sys.stderr)
        return 2

    classes = dead_classes()
    sheets = dead_sheets()
    modules = dead_modules()
    scripts = dead_scripts()
    scratch = scratch_files()
    images = unreferenced_images()
    total = len(classes) + len(sheets) + len(modules) + len(scripts) + len(scratch)

    for name, where in classes:
        print(f"DEAD-CSS-CLASS  .{name}  in {', '.join(sorted(rel(s) for s in where))}")
    for path in sheets:
        print(f"DEAD-CSS-FILE   {rel(path)}  not linked from index.html")
    for path in modules:
        print(f"DEAD-JS         {rel(path)}  imported by nothing")
    for path in scripts:
        print(f"DEAD-SCRIPT     {rel(path)}  named by no verify step, package script, document or script")
    for path in scratch:
        print(f"DEAD-FILE       {rel(path)}  a backup in the deploy root")
    for path in images:
        print(f"note            {rel(path)}  no reference in this repository (left alone: may be linked from outside)")

    styled = len(styled_classes())
    if total == 0:
        print(f"dead-code: nothing dead — {styled} styled classes all produced, every sheet linked, every module imported, every script named.")
        return 0
    print()
    print(
        f"dead-code: {total} dead item(s) — {len(classes)} class(es) of {styled} styled, "
        f"{len(sheets)} sheet(s), {len(modules)} module(s), {len(scripts)} script(s), {len(scratch)} scratch file(s)."
    )
    print("Delete what is dead, or wire it in: a class into a template, a sheet into index.html, a script into a document that says how to run it.")
    return 1


if __name__ == "__main__":
    sys.exit(main())
