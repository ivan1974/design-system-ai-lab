# Case 12 — Installed Base Intelligence closed specification

## Status

v0.7.0 Sprint 1 benchmark case.

## Purpose

Evaluate whether Figma Make can generate an Installed Base Intelligence screen using only `design-system-ai-lab` components and following the Installed Base Intelligence screen contract.

This is a closed-spec benchmark. The goal is not to produce a visually similar dashboard. The goal is strict compliance with the screen contract.

## Required reading order

Before generation, read:

1. `guidelines/Guidelines.md`
2. `guidelines/runtime/generation-contract.md`
3. `guidelines/reference/screen-contracts/installed-base-intelligence.md`
4. `guidelines/source/domain-models/installed-base.md`
5. `contracts/installed-base-domain.contract.json`
6. `contracts/screen-contracts/installed-base-intelligence.contract.json`

## Prompt

Generate an Installed Base Intelligence prototype using only `design-system-ai-lab` components.

Do not create local components.

Do not create local design-system primitives.

Do not create additional navigation, filters, columns, tabs, actions or visual elements.

Follow the Installed Base Intelligence screen contract.

Use the Installed Base domain contract.

Preserve the exact five primary layers:

1. Main Navigation
2. Page Header
3. View & Filter Bar
4. Installed Base List
5. Asset Detail Panel

Preserve the exact Main Navigation elements:

1. Schneider Electric Logo
2. Product Name
3. Global Search
4. Help
5. User Menu

Use the exact product name:

```txt
Installed Base Intelligence
```

Use the exact search placeholder:

```txt
Search assets, sites, documents
```

Preserve the exact Page Header elements:

1. Context Pill
2. Site Context
3. Portfolio Title
4. Portfolio Scope Summary
5. Asset Intelligence

Use the exact header text:

- Reference Campus
- Demo Data Center — DC-WE01
- Asset Portfolio
- [#] Buildings · [#] Electrical Rooms
- Component hierarchy + intelligence enabled

Preserve the exact View & Filter Bar structure:

- Left Zone: List, Geography, Electrical
- Right Zone: Location, Asset Type, Contract Type, All Filters

Do not add extra views.

Do not add extra filters.

The All Filters Panel must contain exactly nine categories:

1. Health
2. Connectivity
3. Coverage
4. DPP
5. Status
6. Age
7. Location
8. Asset Type
9. Contract Type

Filter labels must be text only.

Icons and emojis are prohibited in filter labels.

Multiple values must be selectable.

A Clear All action is required.

Preserve the exact Installed Base List grouping:

```txt
Building → Electrical Area → Room → Asset
```

Assets with active alert or connectivity issue must be grouped at the top under:

```txt
Attention required
```

Preserve the exact seven columns:

1. Asset
2. Type
3. Location
4. Coverage
5. Health
6. Status
7. Action

Do not add extra columns.

Do not replace the inventory list with card stacks.

Do not transform the screen into a dashboard.

The Asset column must contain exactly:

1. Connectivity Label
2. Asset Name
3. Asset Reference
4. Asset Description

The Type column must use only these asset families:

- MV Switchgear
- LV Switchgear
- UPS
- Cooling
- Transformer
- Busway
- PDU
- Battery System

The Coverage column must contain:

- Service Coverage
- DPP Status

Health must use only:

- Critical
- Poor
- Fair
- Good
- Excellent
- Unknown

Status must use only:

- Live telemetry
- Active alert
- Connectivity issue
- Last service visit
- No record

Status labels must include their required icon:

| Status | Icon |
| --- | --- |
| Live telemetry | ✓ |
| Active alert | ⚠ |
| Connectivity issue | ⚠ |
| Last service visit | ◷ |
| No record | — |

The prototype must represent exactly these six asset states:

1. connected-schneider
2. connected-schneider-with-alert
3. connected-schneider-with-connectivity-issue
4. non-connected-schneider
5. non-connected-schneider-with-service-history
6. third-party

A third-party asset must display:

| Field | Value |
| --- | --- |
| Connectivity | Unknown |
| Coverage | No Coverage |
| Health | Unknown |
| Status | No record |

No exception is allowed.

Selecting an asset row must open the Asset Detail Panel.

The Asset Detail Panel must contain exactly four sections:

1. Panel Header
2. Tab Navigation
3. Tab Content
4. Action Area

The Asset Detail Panel must contain exactly six tabs:

1. Overview
2. Health
3. Intelligence
4. Passport
5. History
6. Documents

No additional tab is allowed.

The Action Area must remain visible while panel content scrolls.

The Action Area must contain exactly these actions:

1. Schedule Service
2. Download Report
3. Contact Expert

No additional action is allowed.

When the panel is open:

- background content must not scroll;
- Installed Base List must not scroll;
- only Asset Detail Panel content must scroll;
- overlay click closes the panel;
- close icon closes the panel;
- Escape closes the panel.

Preserve context during navigation:

- Active View
- Active Filters
- Selected Asset
- Selected Tab

Keep Health and Intelligence separated:

- Health = facts, measurements, observations, current condition, telemetry, alert facts, freshness, source.
- Intelligence = diagnosis, interpretation, benchmarking, recommendations, expected outcome, proof readiness, source strength, validation, action plan.

Do not duplicate content between Health and Intelligence.

Apply progressive decision disclosure:

```txt
Generated decision screens must reveal decision-critical information first, then expose evidence and explanation progressively.
```

Use this hierarchy:

1. Signal — what requires attention?
2. Decision — what should be done?
3. Evidence — why should the user trust it?

Apply operational intelligence visual density:

- dense rows over repeated cards;
- table-like alignment;
- white-first surfaces;
- subtle borders;
- compact tags;
- compact pills;
- icon + label statuses;
- no hero metrics;
- no decorative gradients;
- no local colored panels.

## Scoring guide

Total: 100 points.

### 1. Architecture compliance — 15 points

- exactly five primary layers: 5
- correct layer order: 3
- no additional primary layer: 3
- Main Navigation and Page Header are separated: 2
- no dashboard or marketing layer: 2

### 2. Navigation and header compliance — 10 points

- Main Navigation has exactly five elements: 3
- product name and search placeholder are exact: 2
- Main Navigation contains no forbidden content: 2
- Page Header has exactly five elements: 2
- Page Header contains no forbidden content: 1

### 3. Filter compliance — 10 points

- exactly three views: 2
- exactly four quick filters: 2
- exactly nine advanced filter categories: 3
- Clear All exists: 1
- multiple values selectable: 1
- no extra filters/views: 1

### 4. Installed base list/table compliance — 20 points

- required grouping is used: 3
- Attention required appears first: 3
- exactly seven columns: 5
- Asset column has four required elements: 3
- Coverage and Status columns have required structure: 3
- no card stack replacement: 3

### 5. Asset state compliance — 15 points

- all six asset states represented: 5
- third-party mandatory values respected: 4
- no unsupported asset family: 2
- no unsupported health value: 2
- no unsupported status or coverage value: 2

### 6. Detail panel compliance — 15 points

- row selection opens panel: 2
- exactly four panel sections: 2
- exactly six tabs: 3
- exactly three actions: 2
- action area is sticky: 2
- overlay, close icon and Escape close behavior: 2
- scroll lock behavior: 2

### 7. Progressive decision disclosure — 10 points

- signal visible first: 2
- decision visible before deep evidence: 2
- evidence progressively exposed: 2
- Health and Intelligence separated: 2
- source strength, validation and proof readiness placed near recommendations/outcomes: 2

### 8. Visual density and DS compliance — 5 points

- DS-only implementation: 2
- dense table-first visual system: 1
- white-first subtle surfaces: 1
- no overbranding, gradients, hero metrics or local visual panels: 1

## Blocking failures

The generation fails regardless of score if any of the following is true:

- local components are created;
- the screen has more or fewer than five primary layers;
- the Installed Base List has more or fewer than seven columns;
- the Asset Detail Panel has more or fewer than six tabs;
- third-party asset mandatory values are violated;
- Health and Intelligence content are mixed or duplicated;
- the screen is transformed into a generic dashboard.

## Expected output

A DS-only Installed Base Intelligence screen that is stricter than a generic generated dashboard and more cognitively useful than the reference prototype through progressive decision disclosure.
