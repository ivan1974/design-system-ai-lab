# MetricGrid Guidelines

## Purpose

`MetricGrid` arranges a small set of decision-relevant metrics.

It is not a generic dashboard layout.

## Use this component when

- Several metrics need to be compared together.
- The metric set supports prioritization or interpretation.
- Each metric is meaningful enough to be shown as a `MetricCard`.
- The surrounding screen still contains evidence, context and actions.

## Do not use this component when

- The screen becomes mostly metrics.
- The metrics are compact context signals; use `MetricStrip`.
- The values are proof points; use `ValueProofCard`.
- The values are source strength, validation status or action priority.

## Prefer this component over

- local metric grids
- generic CSS grids for metrics
- repeated card layouts without metric semantics

Prefer alternatives:

```txt
one metric → MetricCard
compact metrics → MetricStrip with CompactMetric
proof points → ValueProofCard
status summary → StatusSummary
```

## Never generate

- `MetricGrid` as the whole screen
- metric dashboards without a user decision
- metrics that hide source limits or validation status
- local KPI grids

## Required props

```txt
children
columns when grid density matters
```

## Controlled values

```txt
columns: 2 | 3 | 4
```

## GenAI generation rules

1. Use `MetricGrid` for a small set of decision metrics.
2. Prefer three or fewer metrics unless comparison requires more.
3. Keep source, freshness and validation visible around the metric set when trust matters.
4. Do not use metrics as proof unless proof readiness is explicit.
5. Keep the decision workspace structure around the grid.

## Common generation failures

Failure: Make creates a generic metric dashboard.
Why it fails: Metrics alone do not guide a decision.
Fix: Add context, evidence, recommendations and owned actions.

Failure: Make uses metrics for proof claims.
Why it fails: Proof requires proof readiness and validation.
Fix: Use `ValueProofCard`.

Failure: Make uses a local CSS grid.
Why it fails: It bypasses the design-system primitive.
Fix: Use `MetricGrid`.

## Repair prompt

Use:

```txt
guidelines/evaluation/repair/generic-dashboard.md
guidelines/evaluation/repair/too-many-metrics.md
guidelines/evaluation/repair/expected-outcomes-as-proven-value.md
```

## Related stories

```txt
src/design-system/stories/decision/metric-grid.stories.tsx
Story title: component-level MetricGrid usage
```

## Related contracts

```txt
contracts/components.contract.json
contracts/props.contract.json
contracts/generation-blockers.contract.json
```
