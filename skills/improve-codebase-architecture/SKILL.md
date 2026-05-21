---
name: improve-codebase-architecture
description: Find evidence-backed architecture deepening opportunities in a codebase. Use when the user wants to improve architecture, find refactoring opportunities, consolidate shallow or tightly-coupled modules, improve testability, or make a repository easier for AI agents to navigate.
---

# Improve Codebase Architecture

Surface architecture friction and propose deepening opportunities: refactors that turn shallow modules into deep ones. The aim is better testability, locality, leverage, and AI-navigability.

This skill is adapted from `mattpocock/skills`' `improve-codebase-architecture` skill, with stricter evidence gates, lightweight output, confidence labels, and fallback behavior for repositories without `CONTEXT.md` or ADRs.

## Vocabulary

Use the terms in [references/LANGUAGE.md](references/LANGUAGE.md) exactly. The core terms are:

- **Module**: anything with an interface and an implementation.
- **Interface**: everything a caller must know to use the module correctly, not only the type signature.
- **Implementation**: the code inside a module.
- **Depth**: leverage at the interface. Deep modules hide a lot of behavior behind a small interface.
- **Seam**: where an interface lives; a place behavior can be altered without editing in place.
- **Adapter**: a concrete thing satisfying an interface at a seam.
- **Leverage**: what callers get from depth.
- **Locality**: what maintainers get from depth.

Key checks:

- **Deletion test**: if deleting a module makes complexity vanish, it was a pass-through. If deleting it spreads complexity across callers, it was earning its keep.
- **The interface is the test surface**: callers and tests should exercise behavior through the same seam.
- **One adapter means a hypothetical seam. Two adapters means a real seam**: do not introduce a seam unless something actually varies across it.

## Process

### 1. Establish domain context

Read the project's domain glossary and ADRs before judging architecture.

- If `CONTEXT.md` exists, use its vocabulary for domain concepts.
- If `docs/adr/` exists, read ADRs related to the area under review and do not relitigate decisions without evidence.
- If either file set is missing, use the fallback in [references/MISSING-DOCS-FALLBACK.md](references/MISSING-DOCS-FALLBACK.md) to infer temporary domain vocabulary from README files, schemas, routes, tests, package boundaries, and recent git history. Mark inferred terms as inferred.

### 2. Explore for friction

Walk the codebase with source evidence. Explore organically, but look especially for:

- Understanding one domain concept requires bouncing through many small modules.
- A module is shallow: its interface is nearly as complex as its implementation.
- Test-only pure functions exist, while the bugs hide in orchestration that callers still own.
- Tightly-coupled modules leak invariants, ordering, config, or error handling across seams.
- Current tests bypass the real interface or require too much caller knowledge.

Apply the deletion test to suspected shallow modules. Keep notes on what complexity would disappear, and what complexity would reappear across callers.

### 3. Evidence gate

Do not include a candidate unless it has concrete source evidence. Use [references/EVIDENCE.md](references/EVIDENCE.md).

Each candidate needs at least two evidence items, preferably three:

- repeated call sequence, duplicated invariant, or duplicated error handling
- multiple callers knowing the same ordering/config/performance rule
- tests that mock internals, bypass the public interface, or cannot exercise the real behavior
- churn or bug history around the same scattered concept
- an adapter/seam mismatch, such as one adapter pretending to justify a seam

If evidence is thin, either mark the candidate `Speculative` or omit it.

### 4. Choose output mode

Use the lightest output that answers the user's request.

- **Markdown mode**: default. Produce a concise candidate list in chat or a temporary Markdown file when the user wants quick architecture direction.
- **HTML report mode**: use when the user asks for a formal review, visual report, or many candidates. Follow [references/HTML-REPORT.md](references/HTML-REPORT.md).

Do not propose detailed interfaces in the first pass. You may show an interface outline only to clarify seam placement and caller knowledge reduction.

### 5. Candidate format

For each candidate, include:

- **Title**: names the deepening.
- **Files**: files/modules involved.
- **Evidence**: 2-3 concrete observations with file references when available.
- **Problem**: why the current architecture causes friction.
- **Solution**: what changes, in plain English.
- **Benefits**: locality, leverage, and test improvement.
- **Confidence**: use [references/CONFIDENCE.md](references/CONFIDENCE.md).
- **Recommendation strength**: `Strong`, `Worth exploring`, or `Speculative`.
- **ADR conflict**: only when the friction is real enough to consider reopening the ADR.

End with a top recommendation: the first candidate to explore and why.

### 6. Grilling loop

After presenting candidates, ask: "Which of these would you like to explore?"

When the user picks a candidate, walk the design tree with them:

- constraints any deepened module must satisfy
- dependencies and which adapters sit behind the seam
- what caller knowledge disappears
- what tests survive at the interface
- what remains intentionally outside the module

If the user wants concrete interface alternatives, use [references/INTERFACE-DESIGN.md](references/INTERFACE-DESIGN.md).

Side effects during the loop:

- If a useful domain term is missing from `CONTEXT.md`, offer to add or sharpen it there.
- If the user rejects a candidate for a load-bearing architectural reason, offer to record an ADR so future reviews do not re-suggest it.
- Skip ADR offers for ephemeral reasons such as "not worth it right now."
