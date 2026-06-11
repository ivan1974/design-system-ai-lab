# Repair Prompt — Generic Dashboard

## When to use

Use this repair prompt when Figma Make generates a generic dashboard instead of a
screen that supports a specific user decision.

Common symptoms:

```txt
Dashboard
Overview cards
Many generic KPIs
Large decorative chart
Recent activity
Unrelated sections
No clear next action
```

---

## Repair prompt

Copy and paste this prompt into Figma Make.

```txt
Revise the generated screen.

The screen is too generic and dashboard-like.

Keep one clear user decision.
Use the original screen intent from the prompt.
Do not create a generic analytics dashboard.
Do not create a component gallery.
Do not add unrelated sections only to make the screen feel complete.

Use this decision flow:
Context
→ decision signals
→ risks or readiness gaps
→ recommendations when relevant
→ owned actions

Use business patterns before raw Card sections.
Use MetricStrip and CompactMetric for 2 to 4 decision-relevant secondary metrics.
Remove decorative charts and generic metric cards.
Remove generic sections such as Overview, Activity, Analytics or Insights unless they directly support the user decision.

Every metric must support the user decision.
Every alert must include a recommendation.
Every action must include owner, due date and priority.
Do not invent evidence, sources, asset facts, citations or value proof.
Do not present expected outcomes as proven value.

Keep the screen sober, B2B, readable, evidence-aware and action-oriented.
```

---

## Acceptance check

After repair, verify:

- [ ] The user decision is visible and specific.
- [ ] The screen is not a generic dashboard.
- [ ] The structure follows the runtime generation flow.
- [ ] Metrics are limited and decision-relevant.
- [ ] Business patterns are used when available.
- [ ] Alerts include recommendations.
- [ ] Actions include owner, due date and priority.
