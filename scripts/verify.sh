#!/usr/bin/env bash
# Everything that has to be true before the brochure is pushed.
#
# main is the deploy for forboc.ai, so there is no staging step between a commit
# and a reader. These are the checks that have actually caught something:
#
#   audit-claims       a sentence that is wrong against the product
#   audit-consistency  a sentence that is wrong against the rest of the site
#   line-count         a file past 300 lines, hiding several concerns
#   css-syntax         a stylesheet cut mid-comment, dropping the rule after it
#   dead-code          a class nothing wears, a sheet nothing links, a module
#                      nothing imports, a script nothing names
#   layout             text collapsed to one word per line
#   contrast           ink that fails WCAG on any of the fourteen routes
#   type               body copy running past the measure
#   leadwidth          a paragraph capped far below the column it sits in
#   navcurrent         a chapter that does not mark its own nav link
#   readcount          a chapter the header cannot name by number
#   navwrap            a nav label broken onto two lines, or the bar on two rows
#   stickyoverlap      a pinned chapter title riding over the body beside it
#   stemtouch          the drawn margin sitting on a word instead of behind it
#   headerfalls        a header that stands still while the night descends
#   bruise             a sunset passing through plum or slate, off the palette
#   shelves            a chapter that begins with a lighter band against the last
#   deckfold           a slide that runs past the window or hides its words
#   decktravel         Back and Next moving between slides
#   descent-gate       a night that stops descending, or climbs back out of itself
#   sidehead           a side head that stopped sticking, or a bare margin
#   gates              a gate cited by number that the ledger does not hold
#   errors             anything the page throws in a real browser
#
# The browser checks need the measurement tools in .dream-loop and a server on
# 8777 — the port every probe in .dream-loop asks for; they are skipped with a notice when either is missing, so this stays
# runnable from a clean clone.
#
#   scripts/verify.sh
set -uo pipefail
cd "$(dirname "$0")/.."

fail=0
run() {
  local name=$1; shift
  printf '\n\033[1m%s\033[0m\n' "$name"
  if "$@"; then
    printf '  ok\n'
  else
    printf '  FAILED\n'
    fail=1
  fi
}

run "claims" python3 scripts/audit-claims.py
run "line-count" python3 scripts/check_line_count.py
run "css-syntax" python3 scripts/check_css_syntax.py
run "dead-code" python3 scripts/check_dead_code.py

if [ -f .dream-loop/copy.txt ]; then
  run "cross-route consistency" python3 scripts/audit-consistency.py
else
  printf '\n\033[1mcross-route consistency\033[0m\n  skipped — no .dream-loop/copy.txt (run copydump.mjs first)\n'
fi

if [ -d .dream-loop ] && command -v node >/dev/null; then
  server=""
  if ! curl -sf -o /dev/null http://localhost:8777/ 2>/dev/null; then
    python3 -m http.server 8777 >/dev/null 2>&1 &
    server=$!
    sleep 2
  fi
  for check in layout contrast type leadwidth navcurrent readcount navwrap stickyoverlap stemtouch sidehead headerfalls bruise shelves deckfold decktravel descent-gate gates errors; do
    [ -f ".dream-loop/$check.mjs" ] && run "$check" node ".dream-loop/$check.mjs"
  done
  [ -n "$server" ] && kill "$server" 2>/dev/null
else
  printf '\n  browser checks skipped — .dream-loop or node missing\n'
fi

printf '\n'
if [ "$fail" -ne 0 ]; then
  printf '\033[31mverify failed\033[0m\n'
  exit 1
fi
printf '\033[32mverify passed\033[0m\n'
