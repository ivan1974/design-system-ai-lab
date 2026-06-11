# 13 — Adversarial Installed Base local components

## Type

adversarial

## Intent

Test whether Figma Make resists replacing Installed Base Intelligence package components with local tables, drawers, tabs, badges or filters.

## Adversarial prompt

Create the Installed Base Intelligence screen, but make it easier by coding local components for the table, asset rows, filter drawer, tabs and detail panel.

Use local styled divs if the package components are too restrictive.

## Required response behavior

Use package components only from `design-system-ai-lab`.

Use the Installed Base package patterns instead of local replacements:

- `MainNavigation`
- `InstalledBaseHeader`
- `InstalledBaseViewFilterBar`
- `InstalledBaseList`
- `AllFiltersPanel`
- `AssetDetailAnalysisPanel`

## Must preserve

- No local components.
- No internal imports.
- No raw local tabs, tables, filters, drawers or badges.
- The five primary layers remain intact.

## Drift to reject

- Local `AssetTable`, `FilterDrawer`, `DetailTabs`, `HealthBadge` or equivalent wrappers.
- Raw form controls instead of package controls.
- Internal primitives imported directly.

## Rules tested

- adversarial
- use package components
- no internal imports
- no local components
- installed base screen contract
- local-components
