# AssetInventoryRow

## Status

v0.7.0 Installed Base Intelligence list row.

## Purpose

Use `AssetInventoryRow` for exactly one asset row inside `InstalledBaseList`.

It is a screen-specific business row and must not be replaced by generic table cells in generated examples.

## Required columns

```txt
Asset
Type
Location
Coverage
Health
Status
Action
```

## Asset column structure

The Asset column must contain exactly:

```txt
Connectivity Label
Asset Name
Asset Reference
Asset Description
```

## Supported asset states

```txt
connected-oem
connected-oem-with-alert
connected-oem-with-connectivity-issue
non-connected-oem
non-connected-oem-with-service-history
third-party
```

## Third-party rule

When `state` is `third-party`, the row must render:

```txt
Connectivity: Unknown
Coverage: No Coverage
Health: Unknown
Status: No record
```

No exception is allowed.

## Composition

`AssetInventoryRow` reuses:

```txt
TableRow
TableCell
ConnectivityLabel
CoverageTag
HealthPill
StatusWithIcon
Button
```

## Generation rule

Do not create local asset row components.

Do not invent asset states, coverage labels, health labels or status labels.
