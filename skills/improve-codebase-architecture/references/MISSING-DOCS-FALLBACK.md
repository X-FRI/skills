# Missing Docs Fallback

Use this when `CONTEXT.md` or `docs/adr/` is missing or sparse.

## Build Temporary Domain Vocabulary

Infer candidate domain terms from:

- README, product docs, onboarding docs, and route names
- database schema, migrations, fixtures, seed data, and OpenAPI/FHIR/GraphQL contracts
- package names, bounded application slices, feature directories, and top-level workflows
- tests that describe user or business behavior
- recent commits touching the area under review

Keep the inferred vocabulary small: 5-12 terms is usually enough for one review pass.

## Mark Inference

When using inferred terms, say so:

> Domain vocabulary inferred from routes and schema: Visit, Episode, Work Order.

Do not silently create `CONTEXT.md` during the first review. Offer to create or update it only after the user confirms the vocabulary is useful.

## ADR Absence

If there are no ADRs, do not treat the code as undecided. Use current implementation and tests as the decision record, and flag high-impact suggestions as needing owner confirmation.

## Report Impact

Missing docs usually lowers confidence:

- confirmed source evidence + inferred vocabulary: usually `Medium`
- inferred vocabulary + thin source evidence: `Low` and `Speculative`
