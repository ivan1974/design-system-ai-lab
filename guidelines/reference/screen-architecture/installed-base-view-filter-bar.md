# InstalledBaseViewFilterBar

## Status

v0.7.0 Installed Base Intelligence screen layer.

## Purpose

Use `InstalledBaseViewFilterBar` as the View & Filter Bar layer for Installed Base Intelligence.

It contains exactly two zones:

```txt
Left Zone
Right Zone
```

## Left Zone

The left zone contains exactly the view selectors:

```txt
List
Geography
Electrical
```

## Right Zone

The right zone contains exactly the quick filter triggers:

```txt
Location
Asset Type
Contract Type
All Filters
```

## Composition

`InstalledBaseViewFilterBar` reuses DS primitives:

```txt
SegmentedControl
Button
```

Do not create local tab, pill, filter or segmented-control primitives.

## Generation rule

Do not add KPIs, asset status, recommendations, search, tabs or undefined filters to this layer.
