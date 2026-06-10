# StatusPill Guidelines

## Purpose

`StatusPill` shows a compact status with a semantic tone.

It is for state communication, not action priority, source strength or proof maturity.

## Use this component when

- A row, card or section needs a visible status.
- The status is short and passive.
- The tone helps scanning without implying an action.

## Do not use this component when

- The value is action priority; use `PriorityPill`.
- The value is source strength; use `SourceStrengthPill`.
- The value is proof readiness; use `ValueProofCard` or proof fields.
- The value is a broad category; use `SemanticTag` or `Badge`.

## Prefer this component over

- generic `Badge` for formal status
- local status pills
- plain text status labels

## Never generate

- `StatusPill` as a button
- status tone as proof of validation
- status pills for source strength
- status pills that hide required human validation

## Required props

```txt
children
tone when semantic state matters
```

## Controlled values

```txt
tone: neutral | success | warning | danger | info
```

## GenAI generation rules

1. Use for short passive statuses.
2. Use `warning` or `danger` only when the state requires attention.
3. Use `info` for neutral informational state that should still be visible.
4. Keep validation status explicit when customer-facing readiness matters.
5. Do not use `StatusPill` to represent source quality.

## Common generation failures

Failure: Make uses `StatusPill` for source strength.
Why it fails: Source basis has a dedicated component.
Fix: Use `SourceStrengthPill`.

Failure: Make uses a green status to imply customer-ready proof.
Why it fails: Proof readiness and validation must remain explicit.
Fix: Use `ValueProofCard` and validation fields.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/ai-confidence-as-source-strength.md
guidelines/repair-prompts/missing-human-validation.md
```

## Related stories

```txt
src/design-system/stories/decision/status-pill.stories.tsx
Story status: component-level proof expected. If absent locally, covered through StatusSummary and ActionCard stories.
```

## Related contracts

```txt
contracts/components.contract.json
contracts/props.contract.json
contracts/evidence-and-trust.contract.json
```
