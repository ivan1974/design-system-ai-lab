# Repair prompt — Installed Base generic dashboard

## Use when

The generated screen turns Installed Base Intelligence into a KPI dashboard, card stack or executive overview and loses the asset inventory.

## Repair instruction

Restore the screen as an operational inventory workspace.

The main working area must be `InstalledBaseList`, not KPI cards.

## Required structure

```txt
Main Navigation
Page Header
View & Filter Bar
Installed Base List
Asset Detail Panel
```

## Restore

```txt
Building → Electrical Area → Room → Asset
Attention required
Asset, Type, Location, Coverage, Health, Status, Action
```

## Remove

```txt
hero KPI cards
charts
executive dashboards
card stack replacing rows
summary-only layout
```

## Acceptance

The repaired screen keeps decision-critical information first, with detail available through the Asset Detail Panel.
