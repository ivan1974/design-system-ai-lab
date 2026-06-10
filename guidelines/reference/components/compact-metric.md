# CompactMetric Guidelines

## Purpose

`CompactMetric` shows one compact signal inside a `MetricStrip`.

It is for dense context, not for standalone KPI emphasis.

## Use this component when

- The metric belongs to a compact group of related signals.
- The user needs quick comparison before detail review.
- The value supports context but is not the main decision object.

## Do not use this component when

- The metric needs explanation, trend or emphasis; use `MetricCard`.
- The metric is proof; use `ValueProofCard`.
- The value is source strength or validation status.

## Prefer this component over

- local compact metric items
- small generic cards inside a row
- raw text fragments for comparable metrics

## Never generate

- `CompactMetric` outside a clear compact metric group
- compact metrics as the only content of a decision screen
- compact metrics that imply proof without proof readiness

## Required props

```txt
label
value
```

## Controlled values

No enum-like controlled values.

## GenAI generation rules

1. Use inside `MetricStrip`.
2. Keep labels short.
3. Use for context signals, not proof claims.
4. Limit to a small number of comparable values.

## Common generation failures

Failure: Make uses many compact metrics as a dashboard.
Why it fails: Compact context becomes metric noise.
Fix: Keep only decision-relevant signals and add detail elsewhere.

Failure: Make uses `CompactMetric` for proof maturity.
Why it fails: Proof readiness has controlled semantics.
Fix: Use `ValueProofCard` or trust fields.

## Repair prompt

Use:

```txt
guidelines/evaluation/repair/too-many-metrics.md
guidelines/evaluation/repair/generic-dashboard.md
```

## Related stories

```txt
src/design-system/stories/components/compact-workspace-primitives.stories.tsx
Story title: compact workspace primitives
```

## Related contracts

```txt
contracts/components.contract.json
contracts/props.contract.json
```
