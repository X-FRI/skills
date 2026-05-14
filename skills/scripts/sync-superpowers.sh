#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
skills_root="$(cd "$script_dir/.." && pwd)"
repo_root="$(git -C "$skills_root" rev-parse --show-toplevel)"
cd "$repo_root"

remote_name="${1:-obra}"
remote_ref="${2:-main}"

if ! git remote get-url "$remote_name" >/dev/null 2>&1; then
  echo "Remote '$remote_name' is not configured."
  echo "Add it first with:"
  echo "  git remote add $remote_name https://github.com/obra/superpowers.git"
  exit 1
fi

tmp_dir="$(mktemp -d "${TMPDIR:-/tmp}/superpowers-upstream.XXXXXX")"
trap 'rm -rf "$tmp_dir"' EXIT

git fetch "$remote_name" "$remote_ref"
git archive --format=tar "FETCH_HEAD" -o "$tmp_dir/upstream.tar"
tar -xf "$tmp_dir/upstream.tar" -C "$tmp_dir"

rsync -a --delete --exclude upstream.tar "$tmp_dir/" "$skills_root/vendor/superpowers/"
rsync -a --delete "$skills_root/vendor/superpowers/skills/" "$skills_root/superpowers/"

echo
echo "Synced local superpowers/ from vendor/superpowers/skills"
echo "Review changes with:"
echo "  git status --short"
