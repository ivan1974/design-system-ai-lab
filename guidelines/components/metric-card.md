# MetricCard Guidelines

## Purpose

`MetricCard` shows one decision-relevant metric with enough context to interpret it.

It is for a single important value, not for decorative KPI noise.

## Use this component when

- One metric affects the user decision.
- The metric needs a label, helper text or trend context.
- The value is important enough to stand alone.
- Trust, freshness or scope should be explained nearby.

## Do not use this component when

- The metric is one of many compact signals; use `MetricStrip` with `CompactMetric`.
- The screen would become a dashboard.
- The metric is not decision-relevant.
- The value is proof readiness or source strength; use the proper trust component.

## Prefer this component over

- generic `Card` for a single metric
- local KPI boxes
- oversized text-only numbers

Prefer alternatives:

```txt
compact metric group → MetricStrip with CompactMetric
many decision metrics → MetricGrid
proof points → ValueProofCard
source strength → SourceStrengthPill
```

## Never generate

- metrics only because data exists
- metric cards without labels
- untrusted values without source or scope context
- metric card grids that replace the decision workspace

## Required props

```txt
label
value
helperText when interpretation matters
trend when change matters
```

## Controlled values

No enum-like controlled values in the contract.

## GenAI generation rules

1. Use `MetricCard` for one important value.
2. Add helper text when the metric needs interpretation.
3. Do not use metrics as proof unless proof readiness is visible elsewhere.
4. Keep metrics below the page or section decision hierarchy.

## Common generation failures

Failure: Make creates many MetricCards as a dashboard.
Why it fails: It hides the decision and prioritization.
Fix: Use fewer metrics or `MetricStrip` for compact signals.

Failure: Make presents expected value as a metric.
Why it fails: Expected outcome is not proven value.
Fix: Use `ValueProofCard` with proof readiness.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/generic-dashboard.md
guidelines/repair-prompts/too-many-metrics.md
guidelines/repair-prompts/expected-outcomes-as-proven-value.md
```

## Related stories

```txt
src/design-system/stories/components/metric-card.stories.tsx
Story title: component-level MetricCard usage
```

## Related contracts

```txt
contracts/components.contract.json
contracts/generation-blockers.contract.json
```
