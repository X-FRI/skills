# Superpowers Sync

This repository tracks upstream `obra/superpowers` with `git subtree`.

## Layout

- `vendor/superpowers/`: upstream repository imported via `git subtree`
- `superpowers/`: local mirror of `vendor/superpowers/skills/`

`superpowers/` should stay aligned with upstream skill content. Do not hand-edit it unless the goal is to intentionally diverge from upstream.

## Update Workflow

Run:

```bash
./scripts/sync-superpowers.sh
```

This does two things:

1. pulls the latest upstream `obra/superpowers` into `vendor/superpowers/` with `git subtree`
2. mirrors `vendor/superpowers/skills/` into local `superpowers/`

Equivalent manual commands:

```bash
git subtree pull --prefix=vendor/superpowers obra main --squash
rsync -a --delete vendor/superpowers/skills/ superpowers/
```

## Why This Shape

`git subtree` operates on whole repositories, not a remote subdirectory. The upstream project is a full repository, while this repository only wants the upstream `skills/` tree exposed as local `superpowers/`.

Keeping the whole upstream repo under `vendor/superpowers/` gives us a clean update source. Mirroring its `skills/` directory into local `superpowers/` gives the rest of this repository the exact folder shape it already expects.
