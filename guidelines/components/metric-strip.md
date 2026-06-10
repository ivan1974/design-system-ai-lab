# MetricStrip Guidelines

## Purpose

`MetricStrip` groups compact, comparable signals.

It is the preferred container for `CompactMetric` values when the screen needs dense context without dashboard weight.

## Use this component when

- Several short metrics support the same decision.
- The metrics should be scanned together.
- The values are context signals, not full proof or recommendations.

## Do not use this component when

- A metric needs detailed explanation; use `MetricCard`.
- The group becomes the main screen content.
- The values represent proof readiness, source strength or validation status.

## Prefer this component over

- rows of local KPI cards
- repeated `MetricCard` for minor context signals
- custom metric strips

## Never generate

- a metric-only dashboard
- more compact metrics than the user can scan quickly
- proof claims as compact metrics
- local metric group wrappers

## Required props

```txt
children
```

Use `CompactMetric` children.

## Controlled values

No enum-like controlled values.

## GenAI generation rules

1. Use `MetricStrip` with `CompactMetric` children.
2. Keep values short and comparable.
3. Use it near context, queue rows or selected detail.
4. Do not use it to replace `ValueProofCard` or `StatusSummary`.

## Common generation failures

Failure: Make uses a strip of metrics as the whole screen.
Why it fails: The screen becomes a dashboard instead of a decision workspace.
Fix: Add context, evidence, selected detail and actions.

Failure: Make uses `MetricStrip` for proof maturity.
Why it fails: Proof readiness needs explicit controlled values.
Fix: Use `ValueProofCard`.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/too-many-metrics.md
guidelines/repair-prompts/generic-dashboard.md
```

## Related stories

```txt
src/design-system/stories/components/compact-workspace-primitives.stories.tsx
Story title: compact workspace primitives
```

## Related contracts

```txt
contracts/components.contract.json
contracts/screen-architecture.contract.json
```
