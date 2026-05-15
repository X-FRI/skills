# Conventions

Use this chapter for body formatting and cross-command formatting rules that apply to `gh` commands.

## Multiline Body Safety

- For multiline bodies, use heredoc with `--body-file -` or `--raw-field body="$(cat <<'EOF' ... EOF)"`.
- Never pass literal `\n` inside quoted strings for `gh pr comment`, `gh issue comment`, `gh pr review`, or `gh api` bodies.
- Plain `--body "..."` is only for single-line text.
- If a body is easier to write in a file, keep it in a file and pass the file.

### Recommended patterns

```bash
# gh commands that accept --body-file
gh pr comment 123 --body-file - <<'EOF'
First line
Second line
EOF

# gh api bodies
gh api --method POST /repos/owner/repo/pulls/123/comments \
  --raw-field body="$(cat <<'EOF'
First line
Second line
EOF
)"
```

## Review Severity Badges

- If a review comment carries a severity label like `P0`, `P1`, `P2`, or `P3`, render the label with a Shields badge.
- Use `https://img.shields.io/badge/<level>-<color>?style=flat`.
- Recommended mapping: `P0 -> red`, `P1 -> orange`, `P2 -> yellow`, `P3 -> blue`.
- Do not output plain severity text alone when severity is being explicitly labeled.

## Comment Shape

- Use real newlines, not escaped ones.
- Keep review bodies factual and compact.
- Include file and line references when the comment is tied to diff context.
- Prefer the shortest command surface that preserves the right target: top-level discussion, review summary, or inline thread.
