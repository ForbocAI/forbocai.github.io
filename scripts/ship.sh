#!/usr/bin/env bash
# Verify, then commit and push — and nothing at all if verify fails.
#
# main is the deploy, so a failing build must never reach it. It did once: a
# commit command chained with `;` after verify.sh ran regardless of the result,
# and a stem-contact failure went to main. This is the only path to a push, and
# it cannot be reached by a failing verify.
#
#   scripts/ship.sh <commit-message-file>
set -euo pipefail
cd "$(dirname "$0")/.."

msg="${1:?usage: scripts/ship.sh <commit-message-file>}"
[ -s "$msg" ] || { echo "ship: $msg is empty or missing — nothing committed"; exit 1; }

if ! bash scripts/verify.sh; then
    echo
    echo "ship: verify failed — nothing committed, nothing pushed"
    exit 1
fi

git add -A
git commit -q -F "$msg"

# GitHub answers a push with a transient 500 now and then. Retry it; if it
# still fails, say so loudly — a commit that exists only here is not shipped.
for attempt in 1 2 3; do
    if git push -q origin main; then
        git log --oneline -1
        exit 0
    fi
    echo "ship: push attempt $attempt failed" >&2
    sleep $((attempt * 5))
done
echo "ship: committed locally but NOT pushed — run 'git push origin main'" >&2
exit 1
