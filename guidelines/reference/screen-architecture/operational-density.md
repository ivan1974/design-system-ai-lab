# Operational density

## Status

Reference guidance for v0.7.0 operational intelligence screens.

## Purpose

Operational density helps generated screens show many operational objects without becoming noisy dashboards.

Use this guidance for installed base, asset portfolio, monitoring, service risk and operations screens.

## Principle

```txt
Use density for comparison. Use progressive disclosure for explanation.
```

A dense screen should make the next decision clearer, not expose every fact at once.

Operational density is table-first, white-first and evidence-aware.

## Layout model

Prefer this table-first structure for operational inventories:

```txt
screen context
→ view and filter controls
→ grouped operational list
→ selected object detail panel
→ sticky action area when action is available
```

Avoid replacing the grouped list with card grids.

## Row density

Rows should support fast comparison.

A row should usually expose:

- object name;
- object reference;
- location or scope;
- category or type;
- current status;
- health or readiness;
- coverage or ownership;
- one contextual action.

Move long explanation, full evidence, history and documents into detail.

## Visual treatment

Prefer:

- white-first surfaces;
- table-first alignment;
- subtle borders;
- muted separators;
- compact tags;
- compact pills;
- icon plus label status;
- selected row indicator;
- consistent column alignment.

Avoid:

- decorative gradients;
- heavy shadows;
- large metric cards in inventory contexts;
- local colored panels;
- status shown only by color;
- oversized empty spacing that reduces comparison quality.

## Operational intelligence screen examples

Installed Base Intelligence uses operational density because the user must compare assets, spot attention states, filter quickly and open detail without losing context.

## Relationship to progressive disclosure

Operational density controls the first view.

Progressive decision disclosure controls the information hierarchy:

1. signal first;
2. decision next;
3. evidence on demand.

Do not lower density by expanding every row with full evidence by default.

Do not hide decision-critical signals inside secondary detail.

## Blocking failures

Repair when:

- a grouped list becomes a dashboard grid;
- every fact appears at the same hierarchy level;
- evidence is shown before decision context;
- rows cannot be compared quickly;
- visual decoration competes with operational status;
- action ownership is hidden below long explanations.
