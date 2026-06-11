# Runtime Operational Intelligence Visual Rules

## Status

```txt
ACTIVE RUNTIME / OPERATIONAL DENSITY / FIGMA MAKE
```

This file defines the visual behavior for dense operational intelligence screens.

Use it when generating inventory, monitoring, asset intelligence, service operations or installed base screens.

## Core rule

```txt
Operational intelligence screens are dense, calm, table-first and white-first.
```

They must help users compare operational objects quickly without turning the screen into a generic dashboard.

## Prefer

Use:

- dense rows;
- table-like alignment;
- grouped list sections;
- sticky headers when needed;
- compact tags for categorical values;
- compact pills for state and health values;
- icon plus label for operational status;
- white-first surfaces;
- subtle borders;
- muted separators;
- controlled list width;
- persistent action area when follow-through is required.

## Avoid

Do not use:

- hero dashboard metrics;
- card grids for inventory data;
- repeated oversized cards;
- decorative gradients;
- glass effects;
- heavy shadows;
- local colored panels;
- decorative accent color;
- color-only status;
- oversized typography in dense lists.

## Density rules

Dense does not mean overloaded.

Use density for comparison, not for exposing everything at once.

The first view should show:

```txt
object identity
operational status
health or priority
coverage or readiness
next contextual action
```

Move explanation, evidence and history into detail panels, tabs or secondary rows.

## Color rules

Use the reference accent color only for:

- primary actions;
- selected states;
- active navigation;
- positive status when evidence supports it;
- validated information when validation is present.

Do not use accent color as decoration.

Do not use color alone to communicate health, priority, evidence strength or uncertainty.

## Table-first inventory rule

When the task is inventory exploration or installed base review, prefer:

```txt
ListContainer or screen-specific table/list pattern
+ approved row component
+ grouped sections
+ detail panel
```

Do not replace the inventory with metric cards or dashboard cards.

## Panel rule

Operational detail panels must remain compact and readable.

Preferred panel behavior:

- side panel from right;
- width between 360px and 500px;
- independent panel scroll;
- sticky action area when actions are available;
- evidence and explanation below the decision summary.

## Blocking visual failures

Repair if the output contains:

```txt
hero dashboard for inventory
card grid replacing operational rows
decorative gradient
heavy glass effect
local visual system
accent color used as decoration
status expressed by color only
all rows expanded with full evidence by default
```
