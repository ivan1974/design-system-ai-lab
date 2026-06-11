# InstalledBaseHeader

## Status

v0.7.0 Installed Base Intelligence screen layer.

## Purpose

Use `InstalledBaseHeader` as the Page Header layer for Installed Base Intelligence.

It is not a generic page header. It is a screen-specific wrapper over `PageHeading`.

## Required elements

```txt
Context Pill
Site Context
Portfolio Title
Portfolio Scope Summary
Asset Intelligence
```

The source specification listed four elements but named five. v0.7.0 requires exactly five.

## Required default text

```txt
Context Pill: Reference Campus
Site Context: Demo Data Center — DC-WE01
Portfolio Title: Asset Portfolio
Portfolio Scope Summary: [#] Buildings · [#] Electrical Rooms
Asset Intelligence: Component hierarchy + intelligence enabled
```

## Do not include

```txt
Filters
Asset information
Tab navigation
Actions
Recommendations
Health information
KPIs
```

## Composition

`InstalledBaseHeader` reuses DS primitives:

```txt
PageHeading
Text
Badge
```

## Generation rule

Keep this layer contextual. Do not add filters, asset rows, KPIs or recommendations to the header.
