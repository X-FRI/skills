# Review Policy

Use this chapter when leaving feedback on pull requests, especially when the feedback is tied to a specific file and line.

## Choose the Right Surface

- **Inline finding on a diff line**: submit a review with inline comments.
- **Overall stance without line-level findings**: use `gh pr review --comment` or `gh pr review --request-changes`.
- **General conversation or follow-up**: use `gh pr comment`.
- **Reply to an inline thread**: reply in the thread via `gh api repos/{owner}/{repo}/pulls/{pr}/comments/{id}/replies`.

## Inline Review Comments

- The highest-signal path is `gh api --method POST repos/{owner}/{repo}/pulls/{pr}/reviews` with a JSON body containing `commit_id`, `event`, `body`, and `comments[]`.
- One review can carry multiple inline comments.
- Each inline comment should point at a concrete file and line in the diff.
- For a single finding, still submit a review payload instead of falling back to a top-level PR comment.

```bash
cat > /tmp/review.json <<'JSON'
{
  "commit_id": "<HEAD_SHA>",
  "event": "COMMENT",
  "body": "## Review\n\nSummary only; see inline comments.",
  "comments": [
    {
      "path": "apps/api/src/common/http/content-disposition.ts",
      "line": 27,
      "side": "RIGHT",
      "body": "This needs escaping before fallback formatting."
    }
  ]
}
JSON

gh api --method POST repos/OWNER/REPO/pulls/123/reviews --input /tmp/review.json
```

## Review Bodies

- Start with the severity badge when a finding has a severity label.
- Then explain why it matters and what behavior changes.
- Prefer file:line references and exact conditions over general impressions.
- Keep the summary body separate from the inline finding text when both are needed.

## Reply Rules

- When replying to inline review comments, reply in the comment thread.
- Do not answer an inline thread with a fresh top-level PR comment.
- Keep replies factual: state the implemented change, state why something is intentionally unchanged, or state the missing prerequisite.

## Limitations

- `gh pr review --request-changes` cannot be used on your own PR.
- If you are reviewing your own branch, use inline review comments or a regular comment instead.
- If a finding is not tied to the diff, treat it as a conversation comment, not an inline review.
