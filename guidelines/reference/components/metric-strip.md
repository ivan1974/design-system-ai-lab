# MetricStrip Guidelines

Status: preferred

## Purpose

`MetricStrip` groups compact, comparable signals.

Use it to show a small set of decision-critical metrics without creating a dashboard grid.

## Use this component when

- The screen needs 2–5 comparable metrics.
- Metrics summarize scope, risk, readiness, activity or proof state.
- The user needs a quick signal before reviewing detail.

## Do not use this component when

- There are too many metrics.
- Metrics are decorative.
- A business pattern already summarizes the decision.

## Prefer this component over

- `MetricGrid` for first-level runtime summaries.
- Multiple standalone `MetricCard` components.
- Custom KPI tiles.

## Never generate

- Large metric dashboards.
- Metrics without helper text or decision relevance.
- Metrics that overstate weak evidence.

## Required props

Use `CompactMetric` children with clear label, value and helper context when needed.

## Controlled values

No controlled values beyond child metric semantics.

Use domain contract values when metric status, risk or readiness is shown.

## GenAI generation rules

- Keep metrics few and comparable.
- Use metrics to support the decision, not decorate the screen.
- Explain why important metrics matter.
- Move secondary metrics to detail if needed.

## Common generation failures

- Too many metrics.
- KPI dashboard instead of decision workspace.
- No helper text.
- Decorative green or status color.

## Repair prompt

Use `guidelines/evaluation/repair/too-many-metrics.md` when metric density is too high.

## Related stories

Story coverage is tracked in the story coverage contract.

## Related contracts

```txt
contracts/component-registry.contract.json#MetricStrip
contracts/visual-rules.contract.json
contracts/domain-model.contract.json
```
