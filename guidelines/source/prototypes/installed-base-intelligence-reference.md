# Installed Base Intelligence reference prototype

## Status

Source reference for v0.7.0 Sprint 1.

This document captures the reference prototype as a Design System AI Lab source artifact. It is intentionally strict because Installed Base Intelligence is the first screen-specific contract target of the Make Kit.

## Compliance rule

The reference prototype is a closed specification.

An implementation is compliant only if all mandatory elements defined by the screen contract are present.

The keywords MUST, MUST NOT, ALWAYS, NEVER, EXACTLY, ONLY and REQUIRED are normative.

Any behavior, content, interaction, navigation element, filter, view, panel, tab, field, column, card, section, action or visual element not explicitly defined by the Installed Base Intelligence screen contract is not allowed.

## Product purpose

Installed Base Intelligence helps users:

1. understand the installed base perimeter;
2. identify assets requiring attention;
3. filter the installed base quickly;
4. open an asset without losing context;
5. distinguish facts, signals, interpretations and recommendations;
6. act quickly with a clear decision path.

## Required primary layers

The prototype contains exactly five primary layers, in this order:

1. Main Navigation
2. Page Header
3. View & Filter Bar
4. Installed Base List
5. Asset Detail Panel

No additional primary layer is allowed.

## Main Navigation reference

Purpose: global application navigation only.

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

## Page Header reference

Purpose: installed base context only.

The source specification says four elements but lists five. The v0.7.0 DS interpretation defines exactly five header elements:

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
- health information.

## View & Filter Bar reference

The View & Filter Bar contains exactly two zones:

1. Left Zone
2. Right Zone

Left Zone contains exactly three views:

1. List
2. Geography
3. Electrical

Right Zone contains exactly four filters:

1. Location
2. Asset Type
3. Contract Type
4. All Filters

No additional view or filter is allowed.

## All Filters Panel reference

The All Filters Panel contains exactly nine filter categories, in order:

1. Health
2. Connectivity
3. Coverage
4. DPP
5. Status
6. Age
7. Location
8. Asset Type
9. Contract Type

Required values:

- Health: Critical, Poor, Fair, Good, Excellent
- Connectivity: Connected, Non-connected
- Coverage: EcoCare Advanced, EcoCare Essential, Adv. Service Plan, No Coverage
- DPP: With Digital Product Passport, Without Digital Product Passport
- Status: Live Telemetry, Active Alert, Last Service Visit, No Record
- Age: < 5 years, 5–9 years, 10+ years

Rules:

- filter labels are text only;
- icons are prohibited;
- emojis are prohibited;
- multiple values are selectable;
- Clear All is required.

## Overlay and panel behavior reference

All Filters Panel and Asset Detail Panel use the same overlay behavior:

- full-screen fixed overlay behind the panel;
- black 45% opacity overlay;
- 4px blur effect on background;
- overlay z-index 200;
- panel z-index 300;
- panel width 30% viewport width;
- minimum panel width 360px;
- maximum panel width 500px;
- panel slides in from right;
- animation duration 300ms;
- easing cubic-bezier(0.4, 0, 0.2, 1);
- close icon on top right;
- overlay click closes the panel;
- close icon closes the panel;
- Escape closes the panel.

## Installed Base List reference

Assets are grouped exactly as:

```txt
Building → Electrical Area → Room → Asset
```

Assets with active alert or connectivity issue appear first under:

```txt
Attention required
```

The list has exactly seven columns:

1. Asset
2. Type
3. Location
4. Coverage
5. Health
6. Status
7. Action

No additional column is allowed.

## Asset column reference

The Asset column contains exactly four information elements, in order:

1. Connectivity Label
2. Asset Name
3. Asset Reference
4. Asset Description

Connectivity labels:

- Connected
- Not connected
- Unknown for third-party assets

## Type column reference

The Type column displays the asset family.

Allowed values:

- MV Switchgear
- LV Switchgear
- UPS
- Cooling
- Transformer
- Busway
- PDU
- Battery System

## Location column reference

The Location column contains:

- Building
- Electrical Area
- Room

## Coverage column reference

The Coverage column contains:

- Service Coverage
- DPP Status

Service Coverage values:

- EcoCare Advanced
- EcoCare Essential
- Adv. Service Plan
- No Coverage

DPP values:

- DPP Enabled
- No DPP

## Health column reference

Allowed values:

- Critical
- Poor
- Fair
- Good
- Excellent
- Unknown

No other health value is allowed.

## Status column reference

The Status column contains:

- Status Label
- Status Date

The date is displayed below the status label.

Allowed status labels and icons:

| Status | Icon |
| --- | --- |
| Live telemetry | ✓ |
| Active alert | ⚠ |
| Connectivity issue | ⚠ |
| Last service visit | ◷ |
| No record | — |

The icon color matches the label color.

## Third-party asset rule

A third-party asset always displays:

| Field | Value |
| --- | --- |
| Connectivity | Unknown |
| Coverage | No Coverage |
| Health | Unknown |
| Status | No record |

No exception is allowed.

## Asset Detail Panel reference

Selecting an asset opens the Asset Detail Panel.

The panel contains exactly four sections, in order:

1. Panel Header
2. Tab Navigation
3. Tab Content
4. Action Area

Panel Header displays:

- Location
- Asset Name
- Asset Description

The panel contains exactly six tabs:

1. Overview
2. Health
3. Intelligence
4. Passport
5. History
6. Documents

The Action Area appears at the bottom of the panel and remains visible while panel content scrolls.

Allowed actions:

1. Schedule Service
2. Download Report
3. Contact Expert

No additional action is allowed.

## Interaction reference

- Selecting an asset row opens the Asset Detail Panel.
- When the Asset Detail Panel is open, background content does not scroll.
- The Installed Base List does not scroll when the Asset Detail Panel is open.
- Only the Asset Detail Panel content scrolls.
- Active View is preserved.
- Active Filters are preserved.
- Selected Asset is preserved.
- Selected Tab is preserved.

## Asset variations reference

The prototype supports exactly six asset states:

1. Connected Schneider Asset
2. Connected Schneider Asset with Alert
3. Connected Schneider Asset with Connectivity Issue
4. Non-Connected Schneider Asset
5. Non-Connected Schneider Asset with Service History
6. Third-Party Asset

## Architectural principles

The prototype follows:

- Portfolio First
- Progressive Disclosure
- Fact / Interpretation Separation
- Action-Oriented Experience
- Lifecycle Decision Support

## Fact / Interpretation separation

Health contains:

- facts;
- measurements;
- observations;
- current condition.

Intelligence contains:

- diagnosis;
- interpretation;
- benchmarking;
- recommendations;
- action plans.

Content must not be duplicated between Health and Intelligence.

## Target DS improvement

The DS must preserve the closed structure while improving decision hierarchy through progressive decision disclosure:

1. show decision-critical signals first;
2. expose the next decision clearly;
3. make evidence and explanation available progressively.
