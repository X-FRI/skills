# Interface Design

Use this only after the user chooses a deepening candidate and wants concrete interface alternatives.

## Frame The Problem

Before designing interfaces, restate:

- constraints the deepened module must satisfy
- caller knowledge the interface should remove
- dependencies behind the seam
- adapters that are real versus hypothetical
- tests that should exercise the interface

Use a small illustrative code sketch only to ground constraints. Do not treat it as the recommendation.

## Generate Alternatives

Produce at least three meaningfully different interface designs:

- **Minimal**: 1-3 entry points, maximum leverage per entry point.
- **Flexible**: supports extension and less common use cases.
- **Caller-optimized**: makes the dominant caller path trivial.
- **Adapter-focused**: use when the seam crosses storage, network, runtime, or third-party dependencies.

For each design, include:

- interface shape, including invariants, ordering, error modes, and config
- usage example
- what the implementation hides
- dependency strategy and adapters
- trade-offs in depth, locality, leverage, and risk

## Compare

Compare designs by:

- depth at the interface
- locality of future changes
- seam placement
- adapter reality
- test surface quality

End with an opinionated recommendation or a hybrid if combining designs is clearly stronger.
