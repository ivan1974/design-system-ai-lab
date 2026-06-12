# Installed Base Intelligence
# Prototype Architecture Specification v1.0

## Compliance Rule

An implementation is considered compliant only if all mandatory elements defined in this specification are present.

The keywords MUST, MUST NOT, ALWAYS, NEVER, EXACTLY, ONLY and REQUIRED are normative.

The keywords MAY, SHOULD, COULD, RECOMMENDED and similar variants are prohibited.

Any behavior, content, interaction, navigation element, filter, view, panel, tab, field, column, card, section, action or visual element not explicitly defined in this specification is not allowed.

---

# 0. General

Button width is defined by text length.

All CTA text must be in one line


# 1. Experience Structure

The prototype MUST contain EXACTLY five primary layers.

The order MUST be preserved.

text 1. Main Navigation 2. Page Header 3. View & Filter Bar 4. Installed Base List 5. Asset Detail Panel 

No additional primary layers are allowed.

---

# 2. Main Navigation

## Purpose

The Main Navigation is the global application navigation layer.

## Structure

The Main Navigation MUST contain EXACTLY five elements.

The order MUST be preserved.

| Position | Element |
|-----------|----------|
| 1 | Schneider Electric Logo |
| 2 | Product Name |
| 3 | Global Search |
| 4 | Help |
| 5 | User Menu |

---

## Product Name

The Product Name MUST be:

text Installed Base Intelligence 

No alternative product title is allowed.

---

## Global Search

The search placeholder MUST be:

text Search assets, sites, documents 

---

## User Menu

The User Menu MUST display:

text User Avatar User Name 

---

## Prohibited Content

The Main Navigation MUST NOT contain:

- Site information
- Customer information
- Campus information
- Portfolio information
- Asset information
- Filters
- View selectors
- KPIs
- Marketing navigation
- Public website navigation

---

# 3. Page Header

## Purpose

The Page Header provides context for the installed base currently displayed.

---

## Structure

The Page Header MUST contain EXACTLY four elements.

The order MUST be preserved.

| Position | Element |
|-----------|----------|
| 1 | Site Context |
| 2 | Context Pill |
| 3 | Portfolio Title |
| 4 | Portfolio Scope Summary |

---

## Site Context

The Site Context MUST display:

text Demo Data Center — DC-WE01 

---

## Context Pill

The Context Pill MUST display:

text Reference Campus 

---

## Portfolio Title

The Portfolio Title MUST display:

text Asset Portfolio 

---

## Portfolio Scope Summary

The Portfolio Scope Summary MUST display:

text 2 Buildings · 3 Electrical Rooms · Component hierarchy + intelligence enabled 

---

## Prohibited Content

The Page Header MUST NOT contain:

- Filters
- Asset information
- Tab navigation
- Actions
- Recommendations
- Health information

---

# 4. View & Filter Bar

## Structure

The View & Filter Bar MUST contain EXACTLY two zones.

text Left Zone Right Zone 

---

## Left Zone

The Left Zone MUST contain EXACTLY three views.

The order MUST be preserved.

text 1. List 2. Geography 3. Electrical 

No additional views are allowed.

Style: Toggle button

---

## Right Zone

The Right Zone MUST contain EXACTLY four filters.

The order MUST be preserved.

text 1. Location 2. Asset Type 3. Contract Type 4. All Filters 

No additional filters are allowed.

Filters are functional

---

# 5. All Filters Panel

## Purpose

The All Filters Panel provides advanced filtering capabilities.

---

## Structure

The panel MUST contain EXACTLY nine filter categories.

The order MUST be preserved.

text 1. Health 2. Connectivity 3. Coverage 4. DPP 5. Status 6. Age 7. Location 8. Asset Type 9. Contract Type 

---

## Health Values

text Critical Poor Fair Good Excellent 

Style: Pill

---

## Connectivity Values

text Connected Non-connected 

---

## Coverage Values

text EcoCare Advanced EcoCare Essential Adv. Service Plan No Coverage 

Style: Tag

---

## DPP Values

text With Digital Product Passport Without Digital Product Passport 

Style: Tag

---

## Status Values

text Live Telemetry Active Alert Last Service Visit No Record 

---

## Age Values

text < 5 years 5–9 years 10+ years 

---

## Rules

Filter labels MUST be text only.

Icons are prohibited.

Emojis are prohibited.

Multiple values MUST be selectable.

A Clear All action is REQUIRED.

---

# 6. Installed Base List

## Structure

Assets MUST be grouped using the following hierarchy.

text Building → Electrical Area → Room → Asset 

Assets with 
No alternative grouping structure is allowed.

---

## Table Structure

The Installed Base List MUST contain EXACTLY seven columns.

The order MUST be preserved.

text 1. Asset 2. Type 3. Location 4. Coverage 5. Health 6. Status 7. Action 

No additional columns are allowed.

---

# 7. Asset Column

## Structure

The Asset column MUST contain EXACTLY four information elements.

The order MUST be preserved.

text 1. Connectivity Label 2. Asset Name 3. Asset Reference 4. Asset Description 

---

## Connectivity Labels

### Schneider Electric Asset

Connected asset:

text Connected 

Non-connected asset:

text Not connected 

### Third-Party Asset

Display:

text Unknown 

---

# 8. Type Column

The Type column MUST display the asset family.

Allowed values:

text MV Switchgear LV Switchgear UPS Cooling 

Style: Tag

---

# 9. Location Column

The Location column MUST contain:

text Building Electrical Area Room 

---

# 10. Coverage Column

The Coverage column MUST contain:

text Service Coverage DPP Status 

---

## Service Coverage Values

text EcoCare Advanced EcoCare Essential Adv. Service Plan No Coverage 

---

## DPP Values

text DPP Enabled No DPP 

---

# 11. Health Column

Allowed values:

text Critical Poor Fair Good Excellent Unknown 

No other health values are allowed.

---

# 12. Status Column

## Structure

The Status column MUST contain:

text Status Label Status Date 

---

## Allowed Status Labels

text Live telemetry Active alert Connectivity issue Last service visit No record 

---

## Status Icons

The Status label MUST include an icon.

| Status | Icon |
|-----------|--------|
| Live telemetry | ✓ |
| Active alert | ⚠ |
| Connectivity issue | ⚠ |
| Last service visit | ◷ |
| No record | — |

The icon color MUST match the label color.

---

# 13. Third-Party Asset Rules

A third-party asset MUST display:

| Field | Value |
|---------|---------|
| Connectivity | Unknown |
| Coverage | No Coverage |
| Health | Unknown |
| Status | No record |

These values are mandatory.

No exceptions are allowed.

---

# 14. Asset Detail Panel

Selecting an asset MUST open the Asset Detail Panel.

The Asset Detail Panel is the primary workspace for asset analysis.

---

## Structure

The Asset Detail Panel MUST contain EXACTLY four sections.

The order MUST be preserved.

text 1. Panel Header 2. Tab Navigation 3. Tab Content 4. Action Area 

---

# 15. Panel Header

The Panel Header MUST display:

text Location Asset Name Asset Description Asset Type Connectivity Coverage DPP Status Health Status 

---

# 16. Tab Navigation

The Asset Detail Panel MUST contain EXACTLY six tabs.

The order MUST be preserved.

text 1. Overview 2. Health 3. Intelligence 4. Passport 5. History 6. Documents 

No additional tabs are allowed.

---

# 17. Tab Roles

| Tab | Purpose |
|--------|--------|
| Overview | What is this asset? |
| Health | What is the current condition? |
| Intelligence | What should be done? |
| Passport | What is officially known about this product? |
| History | What happened over time? |
| Documents | What supporting evidence exists? |

---

# 18. Action Area

The Action Area MUST appear at the bottom of the Asset Detail Panel.

The Action Area MUST remain visible while panel content scrolls.

The Action Area MUST contain contextual actions.

Allowed actions:

text Schedule Service Download Report Contact Expert 

No additional actions are allowed.

---

# 19. Interaction Rules

## Asset Selection

Selecting an asset row MUST open the Asset Detail Panel.

---

## Scroll Behavior

When the Asset Detail Panel is open:

- Background content MUST NOT scroll.
- Installed Base List MUST NOT scroll.
- Only Asset Detail Panel content MUST scroll.

---

## Context Preservation

The following elements MUST remain preserved during navigation:

text Active View Active Filters Selected Asset Selected Tab 

---

# 20. Asset Variations

The prototype MUST support EXACTLY the following asset states.

text Connected Schneider Asset Connected Schneider Asset with Alert Connected Schneider Asset with Connectivity Issue Non-Connected Schneider Asset Non-Connected Schneider Asset with Service History Third-Party Asset 

All subsequent content specifications MUST support these asset states.

---

# 21. Architectural Principles

The prototype MUST follow the following principles.

text Portfolio First Progressive Disclosure Fact / Interpretation Separation Action-Oriented Experience Lifecycle Decision Support 

---

# 22. Fact / Interpretation Separation

The following separation is mandatory.

| Area | Content |
|---------|---------|
| Health | Facts, measurements, observations, current condition |
| Intelligence | Diagnosis, interpretation, benchmarking, recommendations, action plans |

Content MUST NOT be duplicated between Health and Intelligence.

---

# 23. Compliance Checklist

A prototype is compliant only if:

- All required layers exist.
- All required filters exist.
- All required columns exist.
- All required tabs exist.
- All required asset variations exist.
- All required interactions exist.
- All prohibited elements are absent.
- Health and Intelligence remain separated.
- Main Navigation and Page Header remain separated.
- No undefined behavior is introduced.