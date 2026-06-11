# Repair prompt — Installed Base local components

## Use when

The generated Installed Base Intelligence screen creates local tables, rows, tabs, filters, panels, badges, pills or wrappers instead of using package components.

## Repair instruction

Do not reread the full documentation.

Replace local UI with package imports from `design-system-ai-lab`.

Required screen-level components:

```txt
MainNavigation
InstalledBaseHeader
InstalledBaseViewFilterBar
InstalledBaseList
AllFiltersPanel
AssetDetailAnalysisPanel
```

## Remove

```txt
local AssetTable
local AssetRow
local FilterDrawer
local DetailPanel
local Tabs
local Badge
local Pill
local Card stack replacing list
```

## Preserve

```txt
five primary layers
seven list columns
six asset states
six detail tabs
three sticky actions
```

## Acceptance

The repaired screen imports public package components only and does not create local design-system primitives.
