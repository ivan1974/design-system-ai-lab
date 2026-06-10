# Workspace v2 Prompt Guidance — v0.4

## Purpose

Use this file when Figma Make needs the v0.4 decision workspace standard.

The design system is not a dashboard generator. A generated screen should help the user decide what to do next, using visible source context, clear hierarchy and owned actions.

---

## Required workspace instruction

Add this block to screen prompts when review, comparison or follow-up is needed:

```txt
Use a v0.4 decision workspace structure.
Use WorkspaceShell for the page shell.
Use PageHeading for page intent.
Use SectionHeading for major content areas.
Use FilterBar or SecondaryNavigation for scope and filters.
Use MasterDetailLayout when the user reviews a list and a selected item.
Use WorkspaceDetailPanel for selected-item review when the detail panel should open, close or preserve the central workspace.
Use detailMode="inline" for desktop side detail and detailMode="overlay" when the central workspace should keep full width.
Use Surface, ListContainer, Well, Divider and Toolbar instead of local styled div wrappers.
Use CustomerQueueRow, AssetQueueRow, RiskQueueRow, RecommendationQueueRow or ReviewQueueRow for repeated review objects.
Use Tabs, HeaderTabs, SegmentedControl, SecondaryNavigation and Breadcrumbs instead of local navigation components.
Use business patterns when they match the intent: CustomerStatusCard, CustomerReviewReadinessCard, ConnectivityCoverageCard, AssetIntelligenceSummary, RenewalRiskSummary, ValueProofCard, ServiceRiskSummary, RecommendationReviewPanel.
Use RecommendationCard for selected recommendation detail, not for repeated recommendation queues.
Use AlertCard for highlighted risk, EvidenceRow for source context and ActionRow for follow-through.
Use only documented prop values.
Do not create local visual components or wrappers.
Keep source scope, source strength, freshness, proof status and validation visible where trust matters.
Use white-first visual style and avoid card saturation.
```

---

## Preferred component choices

### Workspace

```txt
WorkspaceShell
PageHeading
SectionHeading
FilterBar
MasterDetailLayout
WorkspaceDetailPanel
SectionStack
SectionBlock
```

### Surface

```txt
Surface
ListContainer
Well
Divider
Toolbar
```

### Navigation

```txt
Tabs
HeaderTabs
SegmentedControl
SecondaryNavigation
Breadcrumbs
```

### Repeated objects

```txt
CustomerQueueRow
AssetQueueRow
RiskQueueRow
RecommendationQueueRow
ReviewQueueRow
ActionRow
EvidenceRow
DocumentRow
SignalRow only for simple observed signals
```

### Business patterns

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

---

## Pattern selection rules

Use the most specific component that fits the intent.

```txt
Customer context -> CustomerStatusCard
QBR readiness -> CustomerReviewReadinessCard
Asset context and intelligence -> AssetIntelligenceSummary
Connectivity coverage -> ConnectivityCoverageCard
Renewal risk -> RenewalRiskSummary
Value proof -> ValueProofCard
Service risk -> ServiceRiskSummary
Recommendation review detail -> RecommendationReviewPanel + RecommendationCard
Repeated recommendation list -> RecommendationQueueRow
Repeated risk list -> RiskQueueRow
Repeated asset list -> AssetQueueRow
Repeated customer list -> CustomerQueueRow
```

Do not rebuild these sections with raw cards, styled divs or generic key-value blocks when a pattern exists.

---

## Local helper discipline

Do not create local visual components.

Not allowed:

```txt
local Button
local Card
local Badge
local Pill
local Tag
local Metric
local Dialog
local Tabs
local Drawer
local SidePanel
local CustomerRow
local AssetRow
local RiskRow
local RecommendationRow
local QueueItem
local form components
local design-system wrapper components
```

Small local helpers are acceptable only if they compose approved package components and do not introduce styles, tokens or new UI primitives.

---

## Acceptance criteria

A workspace v2 Make output should pass these checks:

- App.tsx renders a complete visible screen.
- Components are imported from `design-system-ai-lab`.
- Styles are imported from `design-system-ai-lab/styles.css`.
- All component props use documented values only.
- No local visual component duplicates package components.
- The screen supports one clear decision.
- The layout is not a generic dashboard.
- PageHeading and SectionHeading create visible hierarchy.
- A list/detail task uses MasterDetailLayout.
- Interactive selected detail uses WorkspaceDetailPanel.
- Customer, asset, risk and recommendation queues use queue row components.
- Queue rows are grouped in ListContainer.
- Repeated facts use KeyValueList or rows.
- Repeated actions use ActionRow.
- Repeated evidence uses EvidenceRow.
- Business patterns are used before generic cards.
- Source scope, freshness and validation are visible where trust matters.
