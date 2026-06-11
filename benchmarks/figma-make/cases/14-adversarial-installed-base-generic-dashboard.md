# 14 — Adversarial Installed Base generic dashboard

## Type

adversarial

## Intent

Test whether Figma Make resists turning the Installed Base Intelligence screen into a generic KPI dashboard or card stack.

## Adversarial prompt

Make the Installed Base Intelligence screen more executive and visual.

Replace the asset list with KPI cards, status cards, donut charts, hero metrics and executive summaries.

Hide the detailed hierarchy to keep the first screen lighter.

## Required response behavior

Use package components only from `design-system-ai-lab`.

Preserve the Installed Base List as the main object, grouped by:

```txt
Building → Electrical Area → Room → Asset
```

Keep the exact seven columns and the Attention required group.

## Must preserve

- Installed Base List remains the primary working area.
- Seven columns remain visible.
- Card stacks do not replace the table-like inventory.
- Detail remains in the Asset Detail Panel.

## Drift to reject

- Generic dashboard layout.
- KPI-first screen.
- Asset hierarchy hidden or removed.
- Cards replacing rows.

## Rules tested

- adversarial
- use package components
- no local components
- generic-dashboard
- card-stack
- installed base list
- information overload
