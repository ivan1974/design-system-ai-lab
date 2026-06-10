# Repair Prompt — Too Many Metrics

## When to use

Use this repair prompt when a generated screen becomes metric-heavy or dashboard-like.

Common symptoms:

```txt
too many KPI cards
metrics without a user decision
metrics repeated across sections
metrics used as decoration
metrics shown without source, freshness or validation context
```

---

## Repair prompt

```txt
Revise the generated screen so metrics support the user decision.

Keep only the metrics that affect what the user should review or do next.
Use MetricStrip with CompactMetric for compact signal groups.
Use MetricCard only for one emphasized metric.
Use MetricGrid only for a small set of decision-relevant metrics.

Do not create a generic KPI dashboard.
Do not add decorative metrics.
Do not use metrics as proof unless proof readiness and validation are visible.
Do not hide source scope, freshness or validation when trust depends on the metric.

Prefer business patterns before metric composition when a pattern fits.
Keep actions, evidence and recommendations visible around metrics.
```

---

## Acceptance criteria

The repaired screen is acceptable only if:

- metrics are limited and decision-relevant
- metrics do not dominate the screen
- source, freshness or validation is visible when trust matters
- proof claims use proof patterns instead of metrics alone
- the next action remains visible

---

## Related repair prompts

```txt
generic-dashboard.md
card-saturation.md
missing-evidence.md
expected-outcomes-as-proven-value.md
```
