# 12 — Installed Base Intelligence closed specification

## Type

first-generation

## Intent

Evaluate whether Figma Make can generate an Installed Base Intelligence screen using only package components from `design-system-ai-lab` and following the closed Installed Base Intelligence screen contract.

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

Generate an Installed Base Intelligence prototype using only package imports from `design-system-ai-lab`.

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

1. Reference Company Logo
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

Do not add extra views or filters.

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

Filter labels must be text only. Multiple values must be selectable. A Clear All action is required.

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

Do not add extra columns. Do not replace the inventory list with card stacks. Do not transform the screen into a dashboard.

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

Coverage must use only:

- Premium Service Plan Advanced
- Premium Service Plan Essential
- Advanced Service Plan
- No Coverage

Health must use only Critical, Poor, Fair, Good, Excellent and Unknown.

Status must use only Live telemetry, Active alert, Connectivity issue, Last service visit and No record.

The prototype must represent exactly these six asset states:

1. connected-oem
2. connected-oem-with-alert
3. connected-oem-with-connectivity-issue
4. non-connected-oem
5. non-connected-oem-with-service-history
6. third-party

A third-party asset must display Unknown connectivity, No Coverage, Unknown health and No record status.

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

The Action Area must remain visible while panel content scrolls.

The Action Area must contain exactly these actions:

1. Schedule Service
2. Download Report
3. Contact Expert

No additional action is allowed.

Preserve context during navigation: Active View, Active Filters, Selected Asset and Selected Tab.

Keep Health and Intelligence separated.

Health equals facts, measurements, observations, current condition, telemetry, alert facts, freshness and source.

Intelligence equals diagnosis, interpretation, benchmarking, recommendations, expected outcome, proof readiness, source strength, validation and action plan.

Do not duplicate content between Health and Intelligence.

Apply progressive decision disclosure:

```txt
Generated decision screens must reveal decision-critical information first, then expose evidence and explanation progressively.
```

Use this hierarchy:

1. Signal — what requires attention?
2. Decision — what should be done?
3. Evidence — why should the user trust it?

Apply operational intelligence visual density: dense rows, table-like alignment, white-first surfaces, subtle borders, compact tags, compact pills and icon + label statuses.

## Scoring

Use `benchmarks/figma-make/scoring/installed-base-intelligence-scoring.md`.

Total: 100 points.

1. Architecture compliance — 15
2. Navigation and header compliance — 10
3. Filter compliance — 10
4. Installed base list/table compliance — 20
5. Asset state compliance — 15
6. Detail panel compliance — 15
7. Progressive decision disclosure — 10
8. Visual density and DS compliance — 5

## Blocking failures

The generation fails regardless of score if any of the following is true:

- local components are created;
- the screen has more or fewer than five primary layers;
- the Installed Base List has more or fewer than seven columns;
- the Asset Detail Panel has more or fewer than six tabs;
- third-party asset mandatory values are violated;
- Health and Intelligence content are mixed or duplicated;
- the screen is transformed into a generic dashboard.

## Rules tested

- first-generation
- use package components
- no internal imports
- no local components
- installed base screen contract
- installed base domain contract
- seven columns
- six asset states
- third-party mandatory values
- Health and Intelligence separation
- progressive decision disclosure
- operational density

## Expected output

A DS-only Installed Base Intelligence screen that is stricter than a generic generated dashboard and more cognitively useful than the reference prototype through progressive decision disclosure.
