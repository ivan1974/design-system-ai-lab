# Style Guidelines v0.4

## Purpose

This file defines the visual style rules Figma Make should follow when generating screens with `design-system-ai-lab` v0.4.

The visual style must support operational decision-making. It should not create decoration, false confidence or a competing design system.

---

## Core style principle

v0.4 screens should feel:

```txt
calm
sober
professional
white-first
structured
action-oriented
evidence-aware
B2B operational
```

They should not feel:

```txt
flashy
glassmorphic
marketing-like
consumer-app-like
card-saturated
decorative dashboard-like
```

---

## Required structure

For review, monitoring, QBR, renewal, risk or recommendation work, prefer:

```txt
PageHeading
FilterBar or SecondaryNavigation
MasterDetailLayout
ListContainer with QueueRows
WorkspaceDetailPanel
Tabs inside detail where useful
StickyActionBar or ActionRow follow-through
```

Use business patterns when the section intent is known.

Examples:

```txt
CustomerStatusCard
CustomerReviewReadinessCard
ConnectivityCoverageCard
AssetIntelligenceSummary
RenewalRiskSummary
ValueProofCard
ServiceRiskSummary
RecommendationReviewPanel
```

Do not rebuild these sections with raw cards or styled divs.

---

## Typography hierarchy

Use typography components first:

```txt
PageHeading
SectionHeading
Heading
Text
```

Rules:

- one page-level heading per screen
- major sections use `SectionHeading` when they introduce a new area
- repeated object labels stay compact
- metadata stays readable but secondary
- evidence, freshness, validation and proof status remain visible

Avoid weak hierarchy:

```txt
many equal text blocks
section titles styled as normal paragraphs
all text in the same size and weight
large marketing headlines in operational screens
```

---

## Surface style

Use approved surface primitives:

```txt
Surface
ListContainer
Well
Divider
Toolbar
WorkspaceDetailPanel
SlideOverPanel
```

Use borders and spacing before shadows.

Use white and subtle neutral surfaces.

Avoid:

```txt
glass cards
blurred panels
colored panels for every state
large background gradients
heavy shadows
```

---

## Row and density style

Use row components for repeated operational objects:

```txt
CustomerQueueRow
AssetQueueRow
RiskQueueRow
RecommendationQueueRow
ReviewQueueRow
ActionRow
EvidenceRow
DocumentRow
SignalRow
```

Do not create local rows with flex, border, hover and selected classes.

A good workspace is dense enough for B2B work:

- 2 to 4 key signals
- 2 to 5 priority rows
- 2 to 5 owned actions
- one primary action area
- one clear decision

Avoid decorative whitespace and long unprioritized scrolling layouts.

---

## Navigation style

Use:

```txt
Tabs
HeaderTabs
SegmentedControl
SecondaryNavigation
Breadcrumbs
```

Do not create local tab bars, segmented controls or breadcrumb wrappers.

Use active states from the package, not custom border and color classes.

---

## Decision components

Use decision components for meaning, not decoration.

Use:

```txt
AlertCard for highlighted risk
RecommendationCard for a selected recommendation
RecommendationReviewPanel for recommendation review context
StatusPill for readiness or state
PriorityPill for priority
SourceStrengthPill for evidence strength
SemanticTag for categories and scope
```

Do not use color alone to communicate status.

Do not make a recommendation look authoritative without evidence, source scope and validation context.

---

## Card usage

Use cards only for highlighted objects with one clear purpose.

Do not create one card per fact, signal, action or proof point.

Prefer:

```txt
MetricStrip for metrics
KeyValueList for facts
ListContainer + QueueRows for repeated objects
EvidenceRow for source context
ActionRow for follow-through
Business patterns for known sections
```

---

## Button hierarchy

Use one main action per major area.

Use primary buttons for the main action only.

Use secondary or ghost buttons for supporting actions.

Avoid vague labels:

```txt
OK
Submit
More
Click here
```

Prefer explicit labels:

```txt
Assign validation
Create action
Review risk
Prepare value summary
Validate recommendation
```

---

## Forbidden visual patterns

Do not generate:

- decorative hero sections
- generic SaaS dashboards
- glassmorphism
- gradients for decoration
- glow effects
- heavy shadows
- card-saturated layouts
- custom button systems
- custom badge systems
- custom tab systems
- custom row systems
- custom drawer systems
- custom form systems
- visual treatments that hide uncertainty
- visual treatments that make weak evidence look stronger
- expected outcomes styled as proven value
- internal proof styled as customer-ready proof without validation

---

## Style review checklist

After generation, verify:

- `design-system-ai-lab/styles.css` is imported once
- no local visual system is created
- PageHeading and SectionHeading establish hierarchy
- repeated objects use queue rows or approved rows
- rows are grouped in ListContainer when appropriate
- selected detail uses WorkspaceDetailPanel when interactive detail is needed
- tabs and navigation use package components
- business patterns are used before generic cards
- source scope, source strength, freshness and validation are readable
- status is not communicated by color alone
- the screen remains white-first, sober and operational

---

## Final principle

If a visual choice does not improve clarity, hierarchy, trust or actionability, do not add it.

If a visual choice hides uncertainty or replaces an approved component, remove it.
