# Confidence Model

Every candidate must separate recommendation strength from confidence.

## Confidence Labels

Use one of these:

- **High**: backed by multiple source observations, current tests or callers support the claim, and domain vocabulary is confirmed by `CONTEXT.md`, ADRs, schema, or owner-written docs.
- **Medium**: source evidence is real, but some domain naming, seam placement, or dependency behavior needs owner confirmation.
- **Low**: mostly inferred from structure, thin tests, missing docs, or one visible caller. Keep the recommendation `Speculative`.

## Confidence Dimensions

Mention the strongest and weakest dimension when useful:

- **Code evidence**: how directly the files support the claim.
- **Domain fit**: whether the module name and seam match the project's domain language.
- **Testability gain**: whether the proposed deepening produces a clearer interface test surface.
- **Implementation risk**: whether callers, adapters, persistence, or runtime behavior make the refactor risky.

Example:

> Confidence: Medium. Code evidence is strong across three callers, but domain fit needs owner confirmation because `CONTEXT.md` does not define this intake concept.
