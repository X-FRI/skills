---
name: gh-cli
description: Use when working with GitHub from the command line, especially repositories, issues, pull requests, reviews, Actions, projects, releases, API calls, or GitHub-specific automation.
---

# GitHub CLI (gh)

Use this as a chaptered reference. Read the smallest chapter that matches the task, then apply the conventions chapters for body formatting and review policy.

## Chapter Map

| Topic | Read first |
|---|---|
| Setup, auth, CLI shape | [Quick Start](references/quickstart.md) |
| Repository operations | [Repositories](references/repo.md) |
| Issues | [Issues](references/issues.md) |
| Pull requests | [Pull Requests](references/pull-requests.md) |
| Review policy and inline replies | [Review Policy](references/review.md) |
| Cross-command body rules | [Conventions](references/conventions.md) |
| Actions / workflow automation | [Actions](references/actions.md) |
| Projects | [Projects](references/projects.md) |
| Releases, gists, codespaces, org, search, labels, keys | [Platform Surfaces](references/platform.md) |
| API, rulesets, attestations, preview, agent tasks, output formats | [API and Ops](references/api-and-ops.md) |
| Common workflows, environment, best practices | [Workflows and Best Practices](references/workflows.md) |

## Reading Order

1. Start with the chapter for the command surface.
2. For any multiline body, read [Conventions](references/conventions.md) before sending it.
3. For any review on a diff, read [Review Policy](references/review.md) before posting.
4. When a command is obscure, use `gh <command> --help` or the official manual.

## Hard Rules

- Use heredoc + `--body-file -` or `--raw-field body="$(cat <<'EOF' ... EOF)"` for multiline bodies.
- Do not embed literal `\n` in quoted body strings.
- Inline findings should default to inline review comments, not top-level PR comments.
- If a review finding includes `P0`-`P3`, render the level with a Shields badge.
- Reply to inline review comments in the thread, not as a new top-level comment.

## Fallback

Use `gh help <topic>` and the official GitHub CLI manual when a command is rare enough that the chapter does not cover it.
