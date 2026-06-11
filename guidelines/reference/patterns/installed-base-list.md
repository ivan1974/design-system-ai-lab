# InstalledBaseList

## Status

v0.7.0 Installed Base Intelligence list layer.

## Purpose

Use `InstalledBaseList` as the dense tabular core of the Installed Base Intelligence screen.

It is not a generic table. It is a screen-specific wrapper around DS table primitives and `AssetInventoryRow`.

## Required grouping

The list must preserve this hierarchy:

```txt
Building
→ Electrical Area
→ Room
→ Asset
```

## Attention required group

Assets with an active alert or connectivity issue must also appear in an `Attention required` group above the normal hierarchy.

## Required columns

The table must have exactly seven columns:

```txt
Asset
Type
Location
Coverage
Health
Status
Action
```

## Required width

The list should remain centered and use the operational list width:

```txt
80% width
```

## Composition

`InstalledBaseList` reuses:

```txt
Table
TableHeader
TableBody
TableRow
TableHead
AssetInventoryRow
```

## Generation rule

Do not add KPI columns, owner columns, recommendation columns, DPP columns, hidden columns or dashboard cards.

Do not bypass `AssetInventoryRow` for asset rows.
