# Installed Base Intelligence screen contract

## Status

v0.7.0 target screen contract.

## Purpose

Generate an Installed Base Intelligence workspace using only Design System AI Lab elements.

This is a closed screen contract. Undefined elements are not allowed.

## Required primary layers

1. Main Navigation — `MainNavigation`
2. Page Header — `InstalledBaseHeader`
3. View & Filter Bar — `InstalledBaseViewFilterBar`
4. Installed Base List — `InstalledBaseList`
5. Asset Detail Panel — `AssetDetailAnalysisPanel`

## Main Navigation

Required elements:

1. Reference Company Logo
2. Product Name
3. Global Search
4. Help
5. User Menu

Required product name: Installed Base Intelligence.

Required search placeholder: Search assets, sites, documents.

## Page Header

The Page Header contains exactly five elements:

1. Context Pill
2. Site Context
3. Portfolio Title
4. Portfolio Scope Summary
5. Asset Intelligence

The v0.7.0 contract resolves the reference inconsistency by requiring five Page Header elements.

Required values include Reference Campus, Demo Data Center — DC-WE01, Asset Portfolio and Component hierarchy + intelligence enabled.

## View & Filter Bar

Views: List, Geography, Electrical.

Filter triggers: Location, Asset Type, Contract Type, All Filters.

## All Filters Panel

Required component: `AllFiltersPanel`.

Categories: Health, Connectivity, Coverage, DPP, Status, Age, Location, Asset Type, Contract Type.

Filter labels are text only. Multiple values are selectable. Clear All is required.

## Installed Base List

Required components:

```txt
InstalledBaseList
AssetInventoryRow
```

Grouping: Building → Electrical Area → Room → Asset.

Attention group: Attention required.

Columns: Asset, Type, Location, Coverage, Health, Status, Action.

The Asset column contains Connectivity Label, Asset Name, Asset Reference and Asset Description.

Allowed coverage values: Premium Service Plan Advanced, Premium Service Plan Essential, Advanced Service Plan, No Coverage.

## Required asset states

1. connected-oem
2. connected-oem-with-alert
3. connected-oem-with-connectivity-issue
4. non-connected-oem
5. non-connected-oem-with-service-history
6. third-party

## Third-party asset rule

A third-party asset uses Unknown connectivity, No Coverage, Unknown health and No record status.

## Asset Detail Panel

Required component: `AssetDetailAnalysisPanel`.

Sections: Panel Header, Tab Navigation, Tab Content, Action Area.

Tabs: Overview, Health, Intelligence, Passport, History, Documents.

Actions: Schedule Service, Download Report, Contact Expert.

The Action Area remains visible while panel content scrolls.

## Required context preservation

Active View, Active Filters, Selected Asset and Selected Tab must be preserved.

## Fact / Interpretation separation

Health contains facts, measurements, observations and current condition.

Intelligence contains diagnosis, interpretation, benchmarking, recommendations and action plans.

Content MUST NOT be duplicated between Health and Intelligence.

## Progressive decision disclosure rules

Generated decision screens must reveal decision-critical information first, then expose evidence and explanation progressively.

Levels: Signal, Decision, Evidence.

## Visual density rules

Use dense rows, table-like alignment, white-first surfaces, subtle borders, compact tags, compact pills and icon + label statuses.

Do not use hero dashboards, card grids replacing the inventory table, decorative gradients or local colored panels.
