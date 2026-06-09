# Workspace v2 Prompt Guidance

## Purpose

Use this file when a Figma Make prompt needs the new decision workspace standard.

The design system is not a card stack generator.

A generated screen should help the user decide what to do next, not simply show many cards.

---

## Required workspace instruction

Add this block to screen prompts when review, comparison or follow-up is needed:

```txt
Use a decision workspace structure.
Use WorkspaceShell for the page shell.
Use FilterBar for scope and filters.
Use MasterDetailLayout when the user reviews a list and a selected item.
Use WorkspaceDetailPanel for selected-item review when the detail panel should open and close.
Use DetailPanel, DetailPanelTabs and StickyActionBar for static selected-item review only when interactivity is not needed.
Use detailMode="inline" for desktop side detail and detailMode="overlay" when the central workspace should keep full width.
Use SectionStack and SectionBlock for dense grouping.
Use Surface, ListContainer, Well, Divider and Toolbar instead of local styled div wrappers.
Use CustomerQueueRow, AssetQueueRow, RiskQueueRow, RecommendationQueueRow or ReviewQueueRow for repeated review objects.
Use KeyValueList, MetricStrip and rows for repeated facts, signals, evidence and actions.
Use only documented prop values for every design-system component.
Do not invent values for variant, tone, severity, priority, strength or mode props.
Do not create local visual components or local design-system wrappers.
Small local render helpers are acceptable only when they compose approved design-system components and do not introduce their own visual style.
Do not generate a long stack of generic cards.
```

---

## Preferred component choices

Use:

```txt
WorkspaceShell
FilterBar
MasterDetailLayout
WorkspaceDetailPanel
DetailPanel
DetailPanelTabs
StickyActionBar
SectionStack
SectionBlock
Surface
ListContainer
Well
Divider
Toolbar
```

For repeated review objects, use:

```txt
CustomerQueueRow
AssetQueueRow
RiskQueueRow
RecommendationQueueRow
ReviewQueueRow
```

For repeated information, use:

```txt
EvidenceRow
ActionRow
DocumentRow
TimelineItem
SignalRow only for simple observed signals, not customer/asset/risk/recommendation queues
```

For compact facts and signals, use:

```txt
KeyValueList
KeyValueRow
MetricStrip
CompactMetric
SemanticTag
StatusPill
PriorityPill
SourceStrengthPill
```

For primary highlighted items, cards are still valid:

```txt
AlertCard
ActionCard
RecommendationCard
MetricCard
```

But do not use cards for every repeated item.

---

## Interactive panel choices

Use `WorkspaceDetailPanel` when selected-item detail should be closable.

Use `MasterDetailLayout` with:

```txt
detailOpen
detailMode="inline" | "overlay"
onDetailOpenChange
```

Use inline mode when detail is part of the desktop layout.

Use overlay mode when the central workspace should keep full width or the panel should slide from the right.

Do not create local drawer, side panel or slide-over components.

---

## Prop value discipline

Make must use documented enum values only.

Before using values such as these:

```txt
variant
tone
severity
priority
strength
mode
size
```

check the component contract, Storybook story or TypeScript declaration.

Do not guess values such as `outline`, `medium`, `high`, `low`, `muted`, `active` or `ready` unless they are documented for the specific component prop.

If the value is unknown, choose the closest documented value or simplify the component usage.

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
local form components
local design-system wrapper components
local CustomerRow
local AssetRow
local RiskRow
local RecommendationRow
local QueueItem
local Drawer
local SlideOver
local SidePanel
local DetailPanel wrapper
```

Acceptable only when useful:

```txt
small render helpers that compose approved package components
small data-mapping helpers
small tab-content helpers
```

Those helpers must not create their own styles, visual states, tokens or UI primitives.

---

## Prompt wording to use

```txt
Generate a complete visible desktop screen in App.tsx.
Use imports from design-system-ai-lab only.
Import design-system-ai-lab/styles.css once.
Use the decision workspace standard.
Use business patterns when they match the section intent.
Use queue rows for repeated customers, assets, risks and recommendations.
Use WorkspaceDetailPanel for closable selected-item detail.
Use rows and compact primitives for repeated facts, signals, evidence and actions.
Use only documented prop values for package components.
Do not create local visual components or wrappers.
Small local render helpers are acceptable only if they compose approved package components without adding a visual system.
Keep source scope, freshness and validation visible where trust matters.
Do not generate a generic dashboard.
Do not create card saturation.
```

---

## Prompt wording to avoid

Avoid vague requests such as:

```txt
Create a dashboard.
Make a modern analytics page.
Show all customer data.
Add several cards and charts.
Make it look premium.
```

These often produce generic UI, weak hierarchy and card saturation.

---

## Acceptance criteria

A workspace v2 Make output should pass these checks:

- App.tsx renders a complete visible screen.
- Components are imported from `design-system-ai-lab`.
- Styles are imported from `design-system-ai-lab/styles.css`.
- All component props use documented values only.
- No local visual component duplicates package components.
- Small local helpers only compose package components and do not create a visual system.
- The screen supports one clear decision.
- The layout is not a generic dashboard.
- A list/detail task uses `MasterDetailLayout`.
- A selected item review uses `WorkspaceDetailPanel` when detail should open and close.
- Customer, asset, risk and recommendation queues use queue row components.
- Repeated facts use `KeyValueList` or rows.
- Repeated actions use `ActionRow`.
- Repeated evidence uses `EvidenceRow`.
- Source scope, freshness and validation are visible where trust matters.

If prop values or local wrappers drift, use:

```txt
repair-prompts/invalid-props-or-local-visual-components.md
```
