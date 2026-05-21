# Evidence Gate

Architecture candidates must be grounded in codebase evidence. Do not include a candidate just because it is aesthetically plausible.

## Minimum Evidence

Each candidate needs at least two evidence items. Prefer three when the recommendation is `Strong`.

Valid evidence includes:

- Same invariant, ordering rule, config rule, or error mapping repeated across callers.
- Same call sequence repeated in multiple places.
- Callers importing internals or knowing details that should sit behind the module's interface.
- Tests mocking internal pieces instead of exercising the module through the interface.
- A module whose deletion would remove pass-through code without moving real complexity elsewhere.
- A seam with only one adapter and no real variation.
- Git history, issue history, or recent commits showing repeated change in scattered files for one concept.
- Runtime or operational evidence that a concept is hard to verify through the current interface.

## Evidence Wording

Write evidence as observations, not interpretations:

- Good: "`OrderPage` and `OrderJob` both call validate -> price -> reserve -> notify and each handles retry errors."
- Weak: "The order flow feels coupled."

When using file references, include the file and line when available. If line numbers are not cheap to gather, include exact file paths and function/module names.

## Recommendation Strength

- `Strong`: three or more concrete evidence items, clear locality/leverage gain, low ADR conflict.
- `Worth exploring`: at least two evidence items, plausible gain, some uncertainty around seam placement.
- `Speculative`: evidence is thin, mostly inferred, or domain terms are not yet confirmed.

Omit candidates below `Speculative`.
