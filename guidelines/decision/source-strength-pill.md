# SourceStrengthPill Guidelines

## Purpose

`SourceStrengthPill` displays how strong the underlying source basis is.

It prevents Make from confusing AI confidence with real source evidence.

## Use this component when

- A signal, recommendation, evidence row or review queue item depends on source strength.
- The user must know whether evidence is partial, single-source, multi-source or validated.
- Trust limits affect whether the output is customer-ready.

## Do not use this component when

- The value represents AI model confidence.
- No source basis is known.
- A simple status or priority label is needed instead.

## Prefer this component over

- `StatusPill` for source strength
- `SemanticTag` for evidence strength
- free-text source confidence labels

## Never generate

- `validated` unless validation is explicitly provided
- `multi-source` unless multiple real sources are visible
- source strength from AI confidence or generated certainty

## Required props

```txt
strength
```

## Controlled values

```txt
unknown
partial
single-source
multi-source
validated
```

## GenAI generation rules

1. Use this pill only for source basis.
2. Keep it near evidence, signals or recommendations that need trust context.
3. Use `partial` when asset visibility or source scope is incomplete.
4. Use `unknown` when the source basis is not provided.
5. Do not infer `validated` from polished wording.

## Common generation failures

Failure: Make writes `AI confidence: high` as source strength.
Why it fails: AI confidence is not evidence strength.
Fix: Use `SourceStrengthPill` only with real source basis.

Failure: Make marks a recommendation `validated` without validation data.
Why it fails: It overstates trust.
Fix: Use `partial`, `single-source` or `unknown` unless validation is explicit.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/ai-confidence-as-source-strength.md
guidelines/repair-prompts/partial-visibility-overstated.md
```

## Related stories

```txt
src/design-system/stories/v0.5.1-critical-generation.stories.tsx
Story title: Design System / v0.5.1 / Critical Generation Coverage
```

## Related contracts

```txt
contracts/components.contract.json
contracts/props.contract.json
contracts/evidence-and-trust.contract.json
```
