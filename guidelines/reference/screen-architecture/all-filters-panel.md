# AllFiltersPanel

## Status

v0.7.0 Installed Base Intelligence advanced filter panel.

## Purpose

Use `AllFiltersPanel` for the advanced filter overlay opened from the View & Filter Bar.

It is a screen-specific wrapper over `SidePanel`.

## Required categories

```txt
Health
Connectivity
Coverage
DPP
Status
Age
Location
Asset Type
Contract Type
```

## Required rules

```txt
labels: text-only
icons allowed: false
emojis allowed: false
multiple values selectable: true
clear all required: true
```

## Required values

```txt
Health: Critical, Poor, Fair, Good, Excellent
Connectivity: Connected, Non-connected
Coverage: Premium Service Plan Advanced, Premium Service Plan Essential, Advanced Service Plan, No Coverage
DPP: With Digital Product Passport, Without Digital Product Passport
Status: Live Telemetry, Active Alert, Last Service Visit, No Record
Age: < 5 years, 5–9 years, 10+ years
```

Location, Asset Type and Contract Type values depend on the current installed base context and must remain text-only.

## Composition

`AllFiltersPanel` reuses DS primitives:

```txt
SidePanel
ScrollArea
Checkbox
Button
SectionHeading
```

## Generation rule

Do not replace this panel with a generic Popover when the screen contract requires All Filters.

Do not use icons or emojis for filter labels.
