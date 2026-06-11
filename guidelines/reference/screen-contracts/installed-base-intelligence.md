# Installed Base Intelligence screen contract

## Status

v0.7.0 target screen contract.

## Purpose

Generate an Installed Base Intelligence workspace using only Design System AI Lab elements.

The screen contract is the source of truth for this screen. It overrides generic layout suggestions when it defines exact layers, zones, filters, columns, tabs, actions or prohibited content.

## Compliance rule

This is a closed screen contract.

Any behavior, content, interaction, navigation element, filter, view, panel, tab, field, column, card, section, action or visual element not explicitly defined in this contract is not allowed.

Do not create local components.

Do not create additional navigation, filters, columns, tabs, actions or visual elements.

## Required primary layers

The screen MUST contain exactly five primary layers.

The order MUST be preserved:

1. Main Navigation
2. Page Header
3. View & Filter Bar
4. Installed Base List
5. Asset Detail Panel

No additional primary layers are allowed.

## Layer responsibilities

### Main Navigation

Global application navigation only.

Required component mapping:

```txt
MainNavigation
```

Required elements, in order:

1. Schneider Electric Logo
2. Product Name
3. Global Search
4. Help
5. User Menu

Required text:

- Product Name: Installed Base Intelligence
- Search placeholder: Search assets, sites, documents
- User Menu: User Avatar User Name

Forbidden content:

- site information;
- customer information;
- campus information;
- portfolio information;
- asset information;
- filters;
- view selectors;
- KPIs;
- marketing navigation;
- public website navigation.

### Page Header

Installed base context only.

Required component mapping:

```txt
InstalledBaseHeader
```

The reference specification lists five header elements. The v0.7.0 DS contract resolves the source inconsistency by requiring exactly five elements.

Required elements, in order:

1. Context Pill
2. Site Context
3. Portfolio Title
4. Portfolio Scope Summary
5. Asset Intelligence

Required text:

- Context Pill: Reference Campus
- Site Context: Demo Data Center — DC-WE01
- Portfolio Title: Asset Portfolio
- Portfolio Scope Summary: [#] Buildings · [#] Electrical Rooms
- Asset Intelligence: Component hierarchy + intelligence enabled

Forbidden content:

- filters;
- asset information;
- tab navigation;
- actions;
- recommendations;
- health information;
- KPIs.

### View & Filter Bar

View mode and quick filters only.

Required component mapping:

```txt
InstalledBaseViewFilterBar
```

Required zones, in order:

1. Left Zone
2. Right Zone

Left Zone required views, in order:

1. List
2. Geography
3. Electrical

Right Zone required filters, in order:

1. Location
2. Asset Type
3. Contract Type
4. All Filters

Forbidden content:

- additional views;
- additional filters;
- KPIs;
- export actions;
- search fields;
- action buttons other than All Filters.

### Installed Base List

Grouped asset portfolio only.

Required component mapping:

```txt
InstalledBaseList
AssetInventoryRow
```

Required grouping:

```txt
Building → Electrical Area → Room → Asset
```

Required attention group:

```txt
Attention required
```

Assets with active alert or connectivity issue MUST be grouped at the top of the asset list.

Required columns, in order:

1. Asset
2. Type
3. Location
4. Coverage
5. Health
6. Status
7. Action

No additional column is allowed.

#### Asset column

Required elements, in order:

1. Connectivity Label
2. Asset Name
3. Asset Reference
4. Asset Description

#### Type column

Displays the asset family as a tag.

Allowed values:

- MV Switchgear
- LV Switchgear
- UPS
- Cooling
- Transformer
- Busway
- PDU
- Battery System

#### Location column

Required elements:

- Building
- Electrical Area
- Room

#### Coverage column

Required elements:

- Service Coverage
- DPP Status

#### Health column

Displays a health pill.

Allowed values:

- Critical
- Poor
- Fair
- Good
- Excellent
- Unknown

#### Status column

Required elements:

- Status Label
- Status Date

Date appears below the status.

Required icon mapping:

| Status | Icon |
| --- | --- |
| Live telemetry | ✓ |
| Active alert | ⚠ |
| Connectivity issue | ⚠ |
| Last service visit | ◷ |
| No record | — |

The icon color matches the label color.

#### Action column

Displays an allowed contextual action only.

Forbidden list patterns:

- card stack replacing the inventory table;
- generic dashboard layout;
- extra columns;
- invented values;
- unsupported asset families.

### Asset Detail Panel

Selected asset analysis only.

Required component mapping:

```txt
AssetDetailAnalysisPanel
```

Required sections, in order:

1. Panel Header
2. Tab Navigation
3. Tab Content
4. Action Area

Panel Header required fields:

- Location
- Asset Name
- Asset Description

Required tabs, in order:

1. Overview
2. Health
3. Intelligence
4. Passport
5. History
6. Documents

No additional tab is allowed.

Required actions:

1. Schedule Service
2. Download Report
3. Contact Expert

No additional action is allowed.

The Action Area appears at the bottom of the panel and remains visible while panel content scrolls.

## All Filters Panel

Required component mapping:

```txt
AllFiltersPanel
```

Required categories, in order:

1. Health
2. Connectivity
3. Coverage
4. DPP
5. Status
6. Age
7. Location
8. Asset Type
9. Contract Type

Rules:

- filter labels are text only;
- icons are prohibited;
- emojis are prohibited;
- multiple values are selectable;
- Clear All is required.

## Overlay and panel behavior

Applies to All Filters Panel and Asset Detail Panel.

Required behavior:

- full-screen fixed overlay behind the panel;
- black with 45% opacity;
- 4px background blur;
- overlay z-index 200;
- panel z-index 300;
- width 30% of viewport;
- minimum width 360px;
- maximum width 500px;
- slide in from right;
- duration 300ms;
- easing cubic-bezier(0.4, 0, 0.2, 1);
- close icon on top right;
- overlay click closes;
- close icon closes;
- Escape closes.

## Required asset states

The screen MUST support exactly six asset states:

1. connected-schneider
2. connected-schneider-with-alert
3. connected-schneider-with-connectivity-issue
4. non-connected-schneider
5. non-connected-schneider-with-service-history
6. third-party

## Third-party asset rule

A third-party asset MUST display:

| Field | Value |
| --- | --- |
| Connectivity | Unknown |
| Coverage | No Coverage |
| Health | Unknown |
| Status | No record |

No exception is allowed.

## Required interactions

- Selecting an asset row opens the Asset Detail Panel.
- Overlay click closes the active panel.
- Close icon closes the active panel.
- Escape closes the active panel.
- When the Asset Detail Panel is open, background content does not scroll.
- When the Asset Detail Panel is open, the Installed Base List does not scroll.
- Only Asset Detail Panel content scrolls.
- Action Area remains visible while panel content scrolls.
- Multiple filter values are selectable.
- Clear All clears selected filters.

## Required context preservation

The following context MUST remain preserved during navigation:

- Active View
- Active Filters
- Selected Asset
- Selected Tab

## Tab roles

| Tab | Purpose |
| --- | --- |
| Overview | What is this asset? |
| Health | What is the current condition? |
| Intelligence | What should be done? |
| Passport | What is officially known about this product? |
| History | What happened over time? |
| Documents | What supporting evidence exists? |

## Fact / Interpretation separation

Health contains facts, measurements, observations and current condition.

Intelligence contains diagnosis, interpretation, benchmarking, recommendations and action plans.

Content MUST NOT be duplicated between Health and Intelligence.

## Progressive decision disclosure rules

Generated decision screens must reveal decision-critical information first, then expose evidence and explanation progressively.

Required levels:

1. Signal — what requires attention?
2. Decision — what should be done?
3. Evidence — why should the user trust it?

Default view shows signal and next decision.

Evidence is visible when trust matters, but not fully expanded by default.

Source strength and validation must appear close to recommendations.

Proof readiness must not be hidden when expected outcome is displayed.

Action owner, due date and priority must remain visible when an action is available.

## Visual density rules

Installed Base Intelligence is an operational intelligence screen.

Required visual behavior:

- dense rows over repeated cards;
- table-like alignment for inventory data;
- controlled and centered list width;
- white-first surfaces;
- subtle borders;
- tags for categorical values;
- pills for health and state values;
- icon + label for statuses;
- Schneider green only for selected, active, primary or positive state;
- no hero dashboards;
- no card grids replacing the inventory table;
- no decorative gradients;
- no local colored panels.

## Repair routing target

Installed Base contract failures must route to screen-specific repair prompts in later sprints.

Examples:

- Missing required layer → missing-installed-base-layer.md
- Wrong columns → wrong-installed-base-columns.md
- Wrong filters → wrong-installed-base-filters.md
- Invalid asset state → invalid-asset-state.md
- Third-party values wrong → third-party-asset-rule-violation.md
- Health and Intelligence mixed → health-intelligence-mixed.md
