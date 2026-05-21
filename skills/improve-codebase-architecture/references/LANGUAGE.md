# Architecture Language

Use these terms exactly in architecture-review output. Consistent language is part of the skill.

## Terms

**Module**: anything with an interface and an implementation. It may be a function, class, package, application slice, or tier-spanning workflow. Avoid `component`, `service`, and `unit` when `module` is what you mean.

**Interface**: everything a caller must know to use a module correctly: types, invariants, ordering, error modes, required configuration, performance behavior, and operational assumptions. Avoid reducing this to a type signature.

**Implementation**: the code inside a module. Use this for what the module does internally.

**Depth**: leverage at the interface. A module is **deep** when callers get substantial behavior through a small interface. A module is **shallow** when the interface is nearly as complex as the implementation.

**Seam**: where a module's interface lives; a place behavior can be altered without editing in place. Avoid `boundary`, which is overloaded with DDD language.

**Adapter**: a concrete implementation satisfying an interface at a seam. Use this when the seam and substitutability are the topic.

**Leverage**: what callers get from depth. More useful behavior per unit of interface knowledge.

**Locality**: what maintainers get from depth. Change, bugs, knowledge, and verification concentrate in one module instead of spreading across callers.

## Principles

- Depth is a property of the interface, not a line-count ratio.
- A deep module can contain internal seams that are not exposed to callers.
- Use the deletion test: if deleting a module only removes pass-through code, it was shallow; if deletion spreads complexity to callers, it was earning its keep.
- The interface is the test surface. If tests must reach past the interface, the module may be the wrong shape.
- One adapter is a hypothetical seam; two adapters make the seam real.
