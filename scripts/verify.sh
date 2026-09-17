#!/usr/bin/env bash
# Everything that has to be true before the brochure is pushed.
#
# main is the deploy for forboc.ai, so there is no staging step between a commit
# and a reader. These are the checks that have actually caught something:
#
#   audit-claims       a sentence that is wrong against the product
#   audit-consistency  a sentence that is wrong against the rest of the site
#   layout             text collapsed to one word per line
#   contrast           ink that fails WCAG on any of the fourteen routes
#   errors             anything the page throws in a real browser
#
# The browser checks need the measurement tools in .dream-loop and a server on
# 8899; they are skipped with a notice when either is missing, so this stays
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

if [ -f .dream-loop/copy.txt ]; then
  run "cross-route consistency" python3 scripts/audit-consistency.py
else
  printf '\n\033[1mcross-route consistency\033[0m\n  skipped — no .dream-loop/copy.txt (run copydump.mjs first)\n'
fi

if [ -d .dream-loop ] && command -v node >/dev/null; then
  server=""
  if ! curl -sf -o /dev/null http://localhost:8899/ 2>/dev/null; then
    python3 -m http.server 8899 >/dev/null 2>&1 &
    server=$!
    sleep 2
  fi
  for check in layout contrast errors; do
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
