# Superpowers Sync

This repository tracks upstream `obra/superpowers` by mirroring the upstream
tree into `vendor/superpowers/`, then copying upstream `skills/` into the local
`superpowers/` directory.

## Layout

- `vendor/superpowers/`: full upstream repository mirror
- `superpowers/`: local mirror of `vendor/superpowers/skills/`

`superpowers/` should stay aligned with upstream skill content. Do not hand-edit it unless the goal is to intentionally diverge from upstream.

## Update Workflow

Run:

```bash
./scripts/sync-superpowers.sh
```

This does two things:

1. fetches upstream `obra/superpowers` and refreshes `vendor/superpowers/`
2. mirrors `vendor/superpowers/skills/` into local `superpowers/`

Equivalent manual commands:

```bash
git fetch obra main
git archive --format=tar FETCH_HEAD -o /tmp/superpowers-upstream.tar
mkdir -p /tmp/superpowers-upstream
tar -xf /tmp/superpowers-upstream.tar -C /tmp/superpowers-upstream
rsync -a --delete /tmp/superpowers-upstream/ vendor/superpowers/
rsync -a --delete vendor/superpowers/skills/ superpowers/
```

## Why This Shape

The upstream project is a full repository, while this repository only wants the
upstream `skills/` tree exposed as local `superpowers/`.

Keeping the whole upstream repo under `vendor/superpowers/` gives us a clean
update source. Mirroring its `skills/` directory into local `superpowers/` gives
the rest of this repository the exact folder shape it already expects.
