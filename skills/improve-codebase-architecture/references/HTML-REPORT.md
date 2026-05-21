# HTML Report Mode

Use HTML report mode only when the user asks for a formal architecture review, visual report, or a larger candidate set.

## Output Location

Write a self-contained HTML file to the OS temp directory so nothing lands in the repo:

- Use `$TMPDIR` if set.
- Fall back to `/tmp` on Linux/macOS.
- Use `%TEMP%` on Windows.
- Name the file `architecture-review-<timestamp>.html`.

Open it for the user only when the environment permits GUI commands. If opening requires approval or is not available, report the absolute path.

## Assets

Use Tailwind and Mermaid from CDNs. Keep the file otherwise static.

- Mermaid: dependency graphs, call flows, and sequences.
- Hand-built HTML/CSS/SVG: mass diagrams, cross sections, collapsed call trees, and before/after editorial visuals.

## Structure

Header:

- repo name
- date
- compact legend: solid box = module, dashed line = seam, red arrow = leakage, thick dark box = deep module

Candidate card:

- title
- recommendation strength badge
- confidence label
- files
- evidence bullets
- before/after diagram
- problem
- solution
- benefits in terms of locality, leverage, and testability
- ADR callout when relevant

End with one top recommendation card.

## Visual Rules

- Every candidate needs before/after visualization.
- Diagrams carry the argument; prose stays sparse.
- Do not use the same diagram pattern for every candidate.
- Keep diagrams compact enough to compare side by side.
- If the explanation needs a long paragraph, redraw the diagram.
