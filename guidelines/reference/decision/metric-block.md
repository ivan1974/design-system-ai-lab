# MetricBlock Guidelines

## Purpose

`MetricBlock` displays one quantitative signal with optional trend, description and supporting metadata.

It is the v0.8 target replacement for generated metric cards and compact metric tiles.

## Use this component when

- A screen needs one measurable value.
- The value supports scanability or prioritization.
- A metric needs optional trend or context.
- The metric is part of a decision structure but is not itself a recommendation.

## Do not use this component when

- The content is a recommendation or alert; use `DecisionBlock`.
- The content is evidence, source or validation context; use `EvidenceBlock`.
- The content is a required action; use `ActionBlock` or `ActionRow`.
- The metric is only decorative or unsupported by data.

## Prefer this component over

```txt
MetricCard
MetricStrip item
CompactMetric for new generation
MetricTile
local KPI cards
```

## Never generate

- local metric cards
- card variants only because the metric label changes
- metric blocks without a clear label
- metric claims without context when trust depends on the data source

## Required props

```txt
label
value
```

## Optional props

```txt
description
meta
trend
tone
```

## Controlled values

```txt
tone: neutral | primary | success | warning | danger
```

## GenAI generation rules

1. Use `MetricBlock` for single quantitative summaries.
2. Keep the value short and readable.
3. Use `meta` for source, period, calculation or freshness when useful.
4. Do not use `MetricBlock` as a recommendation container.
5. Do not create a local card for each metric type.

## Common generation failures

Failure: Make generates `MetricCard` for every KPI.
Why it fails: It preserves card proliferation.
Fix: Use `MetricBlock` and group with layout components.

Failure: Make uses a metric to imply proof.
Why it fails: Proof requires source and validation context.
Fix: Add `EvidenceBlock` or visible metadata.

## Related contracts

```txt
contracts/components.contract.json
contracts/v0.8-target-surface.contract.json
contracts/v0.8-regeneration-plan.contract.json
```
