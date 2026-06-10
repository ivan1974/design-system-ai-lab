# CompactMetric Guidelines

Status: allowed

## Purpose

`CompactMetric` shows one compact signal inside a `MetricStrip` or controlled summary area.

Use it to make one number or status understandable in context.

## Use this component when

- A metric has a clear label, value and decision relevance.
- The metric supports scope, risk, readiness, proof or activity review.
- It appears as part of a small metric group.

## Do not use this component when

- The value is decorative.
- The metric has no source or context.
- Many metrics would overwhelm the first level.

## Prefer this component over

- `MetricCard` for compact runtime summaries.
- Local KPI tiles.
- Raw number blocks.

## Never generate

- Metrics without meaning.
- Invented KPI values.
- Color-only status metrics.

## Required props

Use label and value.

Add helper text when the metric affects a decision.

## Controlled values

Use canonical domain values when showing status, risk, readiness or validation.

## GenAI generation rules

- Keep the metric short.
- Do not invent values.
- Pair with context when the number may be ambiguous.
- Prefer `MetricStrip` for groups of compact metrics.

## Common generation failures

- Too many metrics.
- No helper context.
- Generic dashboard KPI use.
- Visual emphasis that overstates evidence.

## Repair prompt

Use `guidelines/evaluation/repair/too-many-metrics.md` when too many metrics are visible.

## Related stories

Story coverage is tracked in the story coverage contract.

## Related contracts

```txt
contracts/component-registry.contract.json#CompactMetric
contracts/visual-rules.contract.json
contracts/domain-model.contract.json
```
