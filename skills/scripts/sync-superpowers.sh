#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo_root"

remote_name="${1:-obra}"
remote_ref="${2:-main}"

if ! git remote get-url "$remote_name" >/dev/null 2>&1; then
  echo "Remote '$remote_name' is not configured."
  echo "Add it first with:"
  echo "  git remote add $remote_name https://github.com/obra/superpowers.git"
  exit 1
fi

git subtree pull --prefix=vendor/superpowers "$remote_name" "$remote_ref" --squash
rsync -a --delete vendor/superpowers/skills/ superpowers/

echo
echo "Synced local superpowers/ from vendor/superpowers/skills"
echo "Review changes with:"
echo "  git status --short"
