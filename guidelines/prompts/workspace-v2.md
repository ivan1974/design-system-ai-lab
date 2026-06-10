# Workspace Prompt Guidance — v0.5.1

## Purpose

Use this file when Figma Make needs reusable guidance for a v0.5.1 decision workspace.

This is reusable generation guidance, not a fixed benchmark case.

Benchmark cases live in:

```txt
benchmarks/figma-make/cases/*
```

A generated screen should help the user decide what to do next, using visible source context, clear hierarchy, business patterns and owned actions.

---

## Required workspace instruction

Add this block to reusable screen prompts when review, comparison or follow-up is needed:

```txt
Use a v0.5.1 decision workspace structure.
Use WorkspaceShell for the page shell.
Use PageHeading for page intent.
Use FilterBar or SecondaryNavigation for scope and navigation.
Use MasterDetailLayout when the user reviews a list and a selected item.
Use ListContainer with approved queue row components for repeated review objects.
Use WorkspaceDetailPanel for selected-item detail.
Use Tabs when selected detail has several local views.
Use StickyActionBar, ActionRow or ActionCard for follow-through.
Use business patterns before rebuilding known sections manually.
Use only documented prop values.
Do not create local visual components or wrappers.
Do not invent evidence, telemetry, proof, sources, customer facts or asset facts.
Keep source scope, source strength, freshness, proof readiness and validation visible where trust matters.
Avoid generic dashboards and card saturation.
```

---

## Preferred component choices

### Workspace

```txt
WorkspaceShell
PageHeading
FilterBar
SecondaryNavigation
MasterDetailLayout
WorkspaceDetailPanel
SectionStack
SectionBlock
```

### Surface and grouping

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
SignalRow only for observed signals
```

### Business patterns

```txt
CustomerStatusCard
CustomerReviewReadinessCard
ConnectivityCoverageCard
AssetIntelligenceSummary
ComponentHierarchy
RenewalRiskSummary
ValueProofCard
ServiceRiskSummary
RecommendationReviewPanel
CreateActionDialog
```

---

## Pattern selection rules

Use the most specific business pattern that fits the user decision.

```txt
Customer context -> CustomerStatusCard
Customer review readiness -> CustomerReviewReadinessCard
Connectivity coverage -> ConnectivityCoverageCard
Asset context and intelligence -> AssetIntelligenceSummary
Asset or component hierarchy -> ComponentHierarchy
Renewal risk -> RenewalRiskSummary
Value proof -> ValueProofCard
Service risk -> ServiceRiskSummary
Recommendation review detail -> RecommendationReviewPanel + RecommendationCard
Action creation -> CreateActionDialog
Repeated recommendation list -> RecommendationQueueRow
Repeated risk list -> RiskQueueRow
Repeated asset list -> AssetQueueRow
Repeated customer list -> CustomerQueueRow
```

Do not rebuild these sections with raw cards, styled divs or generic key-value blocks when a pattern exists.

---

## Prompt versus benchmark case

Reusable prompts:

```txt
guidelines/prompts/*
```

Use them as adaptable generation guidance.

Fixed benchmark cases:

```txt
benchmarks/figma-make/cases/*
```

Use them as stable scoring scenarios. Do not rewrite benchmark facts unless the scoring objective changes.

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

## Evidence and actionability rules

Show facts before interpretation.

Separate:

```txt
source-system facts
→ observed signals
→ interpretation
→ recommendation
→ owned action
```

Keep the following visible when trust matters:

```txt
sourceScope
sourceStrength
freshness
proofReadiness
validationStatus
customerReadiness
human validation
```

Every action must include:

```txt
owner
due date
priority
```

Never present expected outcomes as proven value.

Never present partial visibility as complete knowledge.

Never present internal proof as customer-ready proof without validation.

---

## Acceptance criteria

A v0.5.1 Make output should pass these checks:

- App.tsx renders a complete visible screen.
- Components are imported from `design-system-ai-lab`.
- Styles are imported from `design-system-ai-lab/styles.css`.
- All component props use documented values only.
- No local visual component duplicates package components.
- The screen supports one clear decision.
- The layout is not a generic dashboard.
- PageHeading creates visible page intent.
- A list/detail task uses MasterDetailLayout.
- Selected detail uses WorkspaceDetailPanel.
- Detail views use Tabs.
- Customer, asset, risk and recommendation queues use queue row components.
- Queue rows are grouped in ListContainer.
- Business patterns are used before generic cards.
- Source scope, freshness and validation are visible where trust matters.
- Actions show owner, due date and priority.
