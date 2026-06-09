# Guidelines — Design System AI Lab

## Purpose

This file is the main entry point for Figma Make.

Figma Make should read this file first, then use the more specific guideline
files when needed.

These guidelines define how Make should generate interfaces using the
`design-system-ai-lab` package.

The goal is not to generate free-form UI from a blank canvas.

The goal is to generate coherent, accessible, sober, reviewable and reusable
product interfaces by composing the approved design system package.

Generated screens should be useful first drafts.

They are not production-ready by default.

The designer remains responsible for UX judgment, hierarchy, validation and final
quality.

---

## How this file should be used

`Guidelines.md` is the mandatory entry point for Figma Make.

Keep this file concise, operational and generation-oriented.

Use it to define:

- the non-negotiable generation contract
- the required package usage
- the decision workspace principle
- the screen intent router
- the approved component vocabulary
- the transversal principles that always apply
- the blocking acceptance criteria
- the correction instruction when generation drifts

Use the more specific guideline files only when Make needs deeper detail about a
component, pattern, principle, prompt or review criterion.

Do not turn `Guidelines.md` into the full design system documentation.

The detailed documentation should remain in the linked files.

---

## Non-negotiable generation contract

When generating code, Figma Make must follow these rules.

These rules are blocking.

If one of them is not respected, the generated screen should be revised before it
is accepted.

1. Render a complete visible screen in `App.tsx`.
2. Import components only from `design-system-ai-lab`.
3. Import styles once from `design-system-ai-lab/styles.css`.
4. Never import from `design-system-ai-lab/dist/*`, `design-system-ai-lab/src/*`, `./components/ui/*` or `packages/design-system-ai-lab/*`.
5. Never create a local `packages/design-system-ai-lab` folder.
6. Never recreate `Button`, `Card`, `Badge`, `Dialog`, form components or business patterns locally.
7. Use business patterns before rebuilding known business sections manually.
8. Use decision components for metrics, risks, recommendations and actions.
9. Use form components for every generated form field.
10. Generate one clear decision-oriented screen, not a generic dashboard.
11. Prefer a decision workspace over a long stack of cards when the user must compare, review or act.
12. Show visible facts before AI interpretation.
13. Never invent evidence, sources, asset facts, telemetry, citations or value proof.
14. Every `AlertCard` must include a recommendation.
15. Every `ActionCard` or `ActionRow` must include owner, due date and priority.
16. Expected outcomes must not be presented as proven value.
17. Critical customer, contract, service, renewal, asset or value-proof decisions must keep human validation visible.

Use this package import pattern:

```tsx
import {
  WorkspaceShell,
  FilterBar,
  MasterDetailLayout,
  DetailPanel,
  SectionBlock,
  ActionRow,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";
```

Do not import from:

```txt
design-system-ai-lab/dist/*
design-system-ai-lab/src/*
./components/ui/*
packages/design-system-ai-lab/*
```

Do not create:

```txt
packages/design-system-ai-lab
local Button wrappers
local Card wrappers
local Badge wrappers
local Dialog wrappers
local design-system copies
custom UI primitives that duplicate package components
```

---

## Core principle

Do not generate from imagination.

Generate product interfaces from a governed system:

- accessibility principles
- eco-design principles
- AI usage principles
- evidence and trust principles
- research-informed knowledge
- user needs and design implications
- package components
- form components
- composition components
- compact primitives
- decision components
- business patterns
- CSS styles
- design tokens
- screen architecture rules
- prompt constraints
- acceptance criteria

The design system is the source of truth.

The knowledge layer explains why the system exists and how research should
inform generated screens.

The generated output should be a useful first draft, not a final production
screen.

---

## Decision workspace principle

The design system is not a card stack generator.

When the user needs to compare items, inspect details, review evidence or assign
work, Make should generate a decision workspace.

Prefer this structure:

```txt
WorkspaceShell
→ FilterBar
→ MasterDetailLayout when list/detail review is needed
→ DetailPanel / DetailPanelTabs / StickyActionBar for selected item review
→ SectionStack / SectionBlock for dense readable grouping
→ KeyValueList / MetricStrip / rows for facts, signals, evidence and actions
```

Use cards only when the content is a highlighted object with one purpose.

Do not make every fact, signal, action or proof point into a separate card.

Use rows for dense, repeated information:

```txt
ActionRow
EvidenceRow
SignalRow
DocumentRow
TimelineItem
```

Use compact primitives for secondary facts and signals:

```txt
KeyValueList
KeyValueRow
CompactMetric
MetricStrip
SemanticTag
StatusPill
PriorityPill
SourceStrengthPill
```

Use business patterns in `mode="section"`, `mode="compact"` or `mode="drawer"`
when they are part of a larger workspace.

---

## Mandatory principles

Before generating a screen, apply these four transversal principles:

```txt
principles/accessibility.md
principles/eco-design.md
principles/ai-usage.md
principles/evidence-and-trust.md
```

These principles constrain every component, pattern, prompt and composition.

They are not optional review notes.

They are part of the generation contract.

---

## Knowledge layer

The design system includes a lightweight knowledge layer based on UX research,
customer interviews, internal interviews, service experience insights and asset
intelligence domain knowledge.

Refer to:

```txt
knowledge/ux-insights.md
knowledge/user-needs.md
knowledge/design-implications.md
knowledge/tested-patterns.md
knowledge/open-questions.md
knowledge/asset-intelligence.md
```

Use the knowledge layer to understand:

- why screens should be decision-oriented
- why business patterns exist
- why risks must lead to recommendations
- why recommendations must lead to owned actions
- why evidence, freshness and uncertainty matter
- why asset hierarchy, connectivity and source scope affect trust
- why Health data and Intelligence interpretation must be separated
- why expected outcomes are not proven value until evidenced
- why GenAI should be used only where it adds value
- what still needs validation before becoming a stable rule

Research should not be copied directly into generated screens.

It should be translated into user needs, design implications, prompt constraints,
component rules, pattern guidance and review criteria.

Current evidence status:

```txt
Research-informed
Partially validated
Demo-ready
Not exhaustive
```

Open questions should remain visible in `knowledge/open-questions.md` and should
not be treated as fully validated product standards.

For asset-heavy service screens, use `knowledge/asset-intelligence.md` to
preserve installed base hierarchy, connectivity status, source scope,
recommendation traceability and value proof discipline.

---

## Required package

Use the published npm package:

```txt
design-system-ai-lab
```

Import components and patterns from the package root:

```tsx
import {
  WorkspaceShell,
  FilterBar,
  MasterDetailLayout,
  DetailPanel,
  CustomerStatusCard,
  ActionRow,
} from "design-system-ai-lab";
```

Import styles once:

```tsx
import "design-system-ai-lab/styles.css";
```

Do not import from internal package paths.

Allowed:

```tsx
import { Button } from "design-system-ai-lab";
```

Not allowed:

```tsx
import { Button } from "design-system-ai-lab/dist/components/button";
```

More details:

```txt
handoff/design-system-package.md
setup.md
```

---

## Composition order

Figma Make should compose screens in this order:

1. Mandatory principles.
2. Relevant knowledge-layer guidance when the screen relates to documented user needs or asset intelligence.
3. Screen architecture and workspace structure.
4. Business patterns when they match the screen intent.
5. Decision and compact components for screen structure.
6. Generic components for reusable UI blocks.
7. Form components for dialogs and input flows.
8. Custom markup only when no existing component or pattern fits.

This order is important.

It prevents Figma Make from rebuilding known business sections manually with raw
`Card`, `Badge`, `div`, `dt` and `dd` markup.

It also prevents Make from producing screens that are visually plausible but
inaccessible, noisy, wasteful or AI-first without reason.

Composition details:

```txt
screen-architecture/README.md
screen-architecture/screen-types.md
screen-architecture/navigation-models.md
screen-architecture/panel-structures.md
```

---

## Screen intent router

Use this router before selecting components.

A generated screen must support one primary user decision.

Do not include every available business pattern by default.

Use only the patterns that support the requested screen intent.

### Pattern-first routing map

Use business patterns before low-level components when a pattern fits the section
intent.

```txt
Customer context → CustomerStatusCard
Connectivity coverage → ConnectivityCoverageCard
Renewal context → RenewalRiskSummary
Value proof → ValueProofCard
Asset intelligence → AssetIntelligenceSummary
Service risk overview → ServiceRiskSummary
Recommendation review → RecommendationReviewPanel
Customer review readiness → CustomerReviewReadinessCard
Action creation → CreateActionDialog
Primary metrics → MetricGrid with MetricCard items
Compact signals → MetricStrip with CompactMetric items
Risks and blockers → PriorityList with AlertCard items
Highlighted assigned action → ActionCard
Dense action list → ActionRow items
Evidence list → EvidenceRow items
Signal list → SignalRow items
Generic structured metadata → KeyValueList or StatusSummary
```

Do not rebuild customer context, renewal context, value proof, risk summaries,
recommendation review or action lists with raw `Card` or `div` wrappers when a
dedicated pattern exists.

### Customer monitoring

Use when the user needs to understand customer status, monitoring coverage,
priority service risks and next actions.

Use by default:

- `WorkspaceShell`
- `FilterBar`
- `MasterDetailLayout` when there is an asset, customer or risk list to inspect
- `DetailPanel`, `DetailPanelTabs` and `StickyActionBar` when a selected item needs review
- `CustomerStatusCard` or `KeyValueList` for customer context
- `MetricStrip` with `CompactMetric` for secondary monitoring signals
- `ConnectivityCoverageCard` when monitoring coverage matters
- `ServiceRiskSummary` when a monitoring or service gap needs synthesis
- `AlertCard` for highlighted risks
- `ActionRow` for dense follow-up actions
- `CreateActionDialog` when action creation is part of the flow

Do not use by default:

- `RenewalRiskSummary`
- `ValueProofCard`
- `CustomerReviewReadinessCard`

Use those only when renewal, value proof or customer review readiness is part of
the requested decision.

### Renewal risk review

Use when the user needs to prepare or mitigate a renewal risk.

Use by default:

- `WorkspaceShell`
- `FilterBar`
- `MasterDetailLayout` when blockers need detail review
- `DetailPanel`, `DetailPanelTabs` and `StickyActionBar` for selected blockers
- `RenewalRiskSummary`
- `CustomerReviewReadinessCard` when customer discussion readiness matters
- `ValueProofCard` when service outcomes or proof gaps matter
- `RecommendationReviewPanel` when recommendations need review
- `AlertCard` for highlighted renewal blockers
- `ActionRow` for mitigation actions

Do not use by default:

- `ConnectivityCoverageCard`, unless connectivity affects renewal risk
- `AssetIntelligenceSummary`, unless asset scope affects the review

### Asset recommendation review

Use when the user needs to review asset health, lifecycle, modernization or asset
recommendations.

Use by default:

- `WorkspaceShell`
- `FilterBar`
- `MasterDetailLayout` when reviewing recommendations or assets
- `DetailPanel`, `DetailPanelTabs` and `StickyActionBar` for selected recommendation review
- `CustomerStatusCard` when customer context matters
- `AssetIntelligenceSummary`
- `ServiceRiskSummary` when partial asset visibility creates service risk
- `RecommendationReviewPanel` with `RecommendationCard` items
- `EvidenceRow` for source verification
- `ActionRow` for validation or follow-up actions

Do not use by default:

- `RenewalRiskSummary`
- `ValueProofCard`, unless value proof is explicitly requested

### Customer review readiness or QBR preparation

Use when the user needs to prepare a customer review, QBR, renewal discussion or
service meeting.

Use by default:

- `WorkspaceShell`
- `FilterBar`
- `MasterDetailLayout` when proof gaps or blockers need detail review
- `DetailPanel`, `DetailPanelTabs` and `StickyActionBar` for selected blockers
- `CustomerStatusCard` or `KeyValueList`
- `CustomerReviewReadinessCard`
- `ValueProofCard` when proof readiness or outcomes matter
- `ServiceRiskSummary` when service risk affects the review
- `RecommendationReviewPanel` when recommendations need review
- `AlertCard` for highlighted blockers
- `ActionRow` for preparation actions

### Installed base exploration

Use when the user needs to explore assets, compare source context, inspect an asset
and decide what needs review next.

Use by default:

- `WorkspaceShell`
- `FilterBar`
- `MasterDetailLayout`
- `DetailPanel` and `DetailPanelTabs`
- `KeyValueList` for identity and source scope
- `MetricStrip` for compact Health signals
- `ComponentHierarchy` when hierarchy matters
- `EvidenceRow`, `Timeline`, `DocumentRow` when detail evidence matters
- `ActionRow` for next actions

---

## Approved vocabulary

### Components

Generic UI components:

- `Badge`
- `Button`
- `Card`
- `Dialog`
- `DialogClose`
- `DialogFooter`
- `DocumentRow`
- `KeyValueList`
- `KeyValueRow`
- `MetricCard`
- `PageHeader`
- `Timeline`
- `TimelineItem`

Use these components for foundational UI and simple compositions.

Prefer business patterns when a specific pattern matches the section intent.

### Forms

Form primitives:

- `Field`
- `Input`
- `Label`
- `Select`
- `Textarea`

Use these components for generated forms and dialogs.

Do not generate raw inline-styled form controls.

### Composition components

Workspace structure components:

- `WorkspaceShell`
- `FilterBar`
- `MasterDetailLayout`
- `DetailPanel`
- `DetailPanelHeader`
- `DetailPanelBody`
- `DetailPanelFooter`
- `DetailPanelTabs`
- `StickyActionBar`
- `SectionStack`
- `SectionBlock`

Use these to avoid long scrolling card stacks.

### Compact and decision components

Decision-oriented and compact components:

- `ActionCard`
- `ActionList`
- `ActionRow`
- `AlertCard`
- `CompactMetric`
- `MetricGrid`
- `MetricStrip`
- `PriorityList`
- `PriorityPill`
- `RecommendationCard`
- `SectionHeader`
- `SemanticTag`
- `SignalRow`
- `SourceStrengthPill`
- `StatusPill`
- `StatusSummary`

Use these components to structure screens around context, metrics, signals, risks,
recommendations and next actions.

### Business patterns

Business patterns:

- `AssetIntelligenceSummary`
- `ConnectivityCoverageCard`
- `CreateActionDialog`
- `CustomerReviewReadinessCard`
- `CustomerStatusCard`
- `RecommendationReviewPanel`
- `RenewalRiskSummary`
- `ServiceRiskSummary`
- `ValueProofCard`

Use these patterns first when they match the requested screen.

---

## Screen generation goal

Generated screens should help the user answer four questions:

1. What is happening?
2. Why does it matter?
3. What can I trust?
4. What should I do next?

Do not generate generic dashboards.

Do not display data only because it is available.

Do not use AI only because AI is available.

Prioritize decision support, accessibility, sobriety, evidence, actionability and
clear information hierarchy.

---

## Accessibility principle

Generated screens must be understandable, navigable and actionable.

Figma Make should:

- use package components instead of raw replacements
- keep heading hierarchy clear
- provide visible labels for form controls
- connect `htmlFor` and `id` when possible
- avoid relying only on placeholders
- use explicit button labels
- preserve visible focus states
- avoid communicating status only through color
- use `Dialog` and `CreateActionDialog` with meaningful titles
- keep the reading order logical

Recommended reading order:

```txt
Context
→ Decision signals
→ Risks or readiness gaps
→ Recommendations when needed
→ Actions
```

Do not generate visually correct but inaccessible UI.

Refer to:

```txt
principles/accessibility.md
```

---

## Eco-design principle

Generated screens should be useful, focused and proportionate to the user task.

Figma Make should generate the smallest useful interface that helps the user
understand the situation and decide what to do next.

Prefer:

```txt
Clear context
→ useful decision signals
→ prioritized risks or blockers
→ owned next actions
```

Avoid:

- large dashboards by default
- too many cards
- too many metrics
- too many alerts
- too many actions
- duplicated content
- decorative UI
- unnecessary interactions
- local wrappers
- manual reconstruction of existing patterns
- AI-generated text that does not add decision value

Do not generate more UI than the task requires.

Refer to:

```txt
principles/eco-design.md
```

---

## AI usage principle

Do not use GenAI by default.

Use the right capability for the right job:

```txt
BI shows what is happening.
GenAI helps users understand what it means and what to do next.
Workflow helps users execute.
Human validation protects critical decisions.
```

Use BI, APIs, databases or business tools for:

- retrieval
- filters
- counts
- lists
- dates
- owners
- statuses
- KPIs
- trends
- tables
- structured operational data
- asset hierarchy
- connectivity status
- telemetry values
- lifecycle status
- source scope and source strength

Use GenAI for:

- synthesis
- explanation
- prioritization
- recommendation
- drafting
- reformulation
- summarizing unstructured notes
- proof gap explanation
- grounded action-plan drafting
- customer-ready value narrative drafting after evidence is visible

Do not use GenAI as a SQL engine replacement.

Do not spend GenAI tokens on basic facts that should be retrieved through
structured systems and displayed directly.

Preferred model:

```txt
BI-first, AI-assisted
```

Refer to:

```txt
principles/ai-usage.md
```

---

## Evidence and trust principle

Generated screens must help users understand what is known, what is inferred,
what is recommended and what still needs validation.

Figma Make should distinguish:

```txt
Observed facts
→ source scope and evidence strength
→ interpreted signals
→ evidence-aware recommendations
→ owned actions
→ expected outcome or value proof status when relevant
→ human validation when needed
```

Show facts before interpretation.

Use structured components and business patterns to make evidence visible:

- `CustomerStatusCard` or `KeyValueList` for customer facts
- `ConnectivityCoverageCard` for monitoring coverage and freshness
- `RenewalRiskSummary` for renewal context and readiness
- `CustomerReviewReadinessCard` for customer discussion readiness
- `ValueProofCard` for grounded proof points
- `AssetIntelligenceSummary` for asset context, source limits, Health signals and Intelligence interpretation
- `ServiceRiskSummary` for service risk overview
- `RecommendationReviewPanel` and `RecommendationCard` for recommendation review
- `MetricStrip` and `CompactMetric` for secondary signals
- `MetricGrid` and `MetricCard` for primary KPIs
- `AlertCard` for highlighted risks and recommendations
- `EvidenceRow`, `SignalRow` and `ActionRow` for dense workspaces

Important facts should include source, source strength, freshness or validation
context when it affects trust.

Do not generate:

- unsupported recommendations
- fake evidence
- fake citations
- invented proof points
- false certainty about incomplete data
- false certainty about partial asset visibility
- non-connected assets presented as live-monitored
- expected outcomes presented as proven value
- technical outcomes or internal proof presented as customer-ready proof without validation
- confidence language used as a substitute for source evidence
- embedded components presented as top-level assets unless component-level investigation is required
- AI outputs without visible or auditable facts
- critical decisions without human validation

Refer to:

```txt
principles/evidence-and-trust.md
```

---

## Token and visual style rules

The visual style must remain:

- sober
- B2B
- readable
- structured
- action-oriented
- evidence-aware

Use the design system CSS package and approved utility classes.

Do not create:

- decorative gradients
- glassmorphism
- unrelated color palettes
- arbitrary shadows
- arbitrary border radius values
- decorative charts
- custom card systems
- custom button systems
- custom badge systems
- custom form systems
- decorative images or animations unless they support comprehension

The official token namespace is:

```txt
--ec-*
```

Refer to:

```txt
tokens.md
styles.md
```

---

## Component usage rules

### Workspace components

Use `WorkspaceShell` for decision screens that need filters, detail review or
persistent next actions.

Use `FilterBar` to show active scope and filters.

Use `MasterDetailLayout` when the user needs to inspect an item from a list.

Use `DetailPanel`, `DetailPanelTabs` and `StickyActionBar` for selected-item review.

Use `SectionStack` and `SectionBlock` to group dense sections without turning
each section into a separate card.

### PageHeader

Use `PageHeader` for simple standalone pages.

For v2 workspace screens, prefer a `WorkspaceShell` header so filters and detail
review can sit in the same workspace structure.

### Button

Use `Button` for explicit user actions.

Use only one primary action per main screen section.

Button labels must be action-oriented.

Use `Button` directly as a `Dialog` trigger.

Do not create a local `ForwardedButton` wrapper.

### Badge, SemanticTag and StatusPill

Use `Badge` for compact metadata inside older/simple components.

Use `SemanticTag` for categories, scope labels and business qualifiers.

Use `StatusPill` for state, readiness, validation or risk status.

Do not use tags, pills or badges as buttons.

Do not rely on color alone to communicate status.

### Card

Use `Card` sparingly to group a highlighted object with one clear purpose.

Do not use `Card` as the default layout primitive for every section.

Prefer workspace components, rows and compact primitives when a screen requires
review, comparison or action.

### MetricCard, CompactMetric, MetricGrid and MetricStrip

Use `MetricCard` only for primary decision KPIs.

Use `CompactMetric` for secondary signals inside a workspace or detail panel.

Use `MetricGrid` for a small group of primary metrics.

Use `MetricStrip` for compact signal groups.

### Dialog and CreateActionDialog

Use `Dialog` for short focused creation or confirmation flows.

Use `DialogFooter` and `DialogClose` for custom dialog footers.

Prefer `CreateActionDialog` for action creation flows.

Do not use `Dialog` for complex multi-step workflows.

Do not rebuild action creation manually when `CreateActionDialog` fits.

---

## Form usage rules

Use form components for all generated forms.

Preferred:

```tsx
<Field label="Owner" htmlFor="owner">
  <Input id="owner" placeholder="CSM" />
</Field>
```

Avoid:

```tsx
<input style={{ height: "40px", borderRadius: "6px" }} />
```

Rules:

- use `Field` to group label, control, helper text and errors
- use `Input` for short values
- use `Select` for limited choices
- use `Textarea` for notes and recommendations
- use `Label` directly only for lower-level custom form composition
- connect `htmlFor` and `id` when possible
- do not rely only on placeholders
- do not generate inline-styled `input`, `select` or `textarea` elements

---

## Decision component usage rules

Use `MetricGrid` to arrange primary decision KPIs.

Use `MetricStrip` to arrange compact signals.

Use `PriorityList` to group highlighted alerts, risks or blockers.

Use `ActionList` and `ActionCard` for highlighted assigned work.

Use `ActionRow` for dense follow-up actions in workspaces.

Use `EvidenceRow` for source, evidence and validation context.

Use `SignalRow` for repeated observed signals.

Use `RecommendationCard` for recommendation rationale, evidence, priority and
readiness.

Use `StatusSummary` only for simple structured context when no specific business
pattern or compact primitive fits.

Use `SectionHeader` for simple section titles and section-level actions.

Every `AlertCard` must include:

- severity
- title
- equipment or scope
- description
- recommendation

Alert recommendations should be supported by the alert description or by visible
context shown earlier on the screen.

Every `ActionCard` and `ActionRow` must include:

- title
- owner
- due date
- priority

`ActionCard` is for highlighted assigned internal work.

`ActionRow` is for dense action lists.

`RecommendationCard` is for recommendation rationale, evidence, priority and
readiness.

Do not use one as a substitute for the other.

---

## Business pattern usage rules

Use `CustomerStatusCard` for customer identity, plan or contract context, owner
context, objectives, assets covered and status.

Use `ConnectivityCoverageCard` for monitoring coverage, connected assets,
disconnected assets, critical disconnected assets, recovery context, source
scope, source strength and freshness.

Use `RenewalRiskSummary` for renewal preparation, renewal readiness, value proof
status, recommendations reviewed and overdue actions.

Use `ValueProofCard` for service outcomes, proof gaps, grounded proof points,
completed actions, recommendations followed, renewal or QBR preparation and the
distinction between expected outcomes, internal proof and customer-ready proof.

Use `AssetIntelligenceSummary` for installed base context, asset source limits,
Health signals, Intelligence interpretation, source strength, freshness and
validation status.

Use `ServiceRiskSummary` for the main service risk, affected scope, source
limits, validation needs and next review focus before detailed blockers,
recommendations or actions.

Use `RecommendationReviewPanel` to frame a set of recommendations with shared
review scope, source context, validation status, customer-readiness and proof
context.

Use `CustomerReviewReadinessCard` to summarize readiness before a QBR, renewal
discussion, service review or customer meeting.

Use `CreateActionDialog` for creating follow-up actions, mitigation actions,
assigned ownership and customer-facing next steps.

When patterns are used inside a workspace, prefer:

```txt
mode="section"
mode="compact"
mode="drawer"
```

when the component supports those modes.

---

## Asset intelligence usage rules

Use `knowledge/asset-intelligence.md` when the generated screen involves
installed base, asset health, connectivity coverage, lifecycle modernization,
asset recommendations or value proof linked to assets.

Asset-heavy screens should respect this flow:

```txt
Installed base context
→ connectivity, source scope and source strength
→ raw Health or lifecycle facts
→ interpreted Intelligence
→ evidence-aware recommendation
→ owned or phased actions
→ expected outcomes
→ technical outcome, internal proof or customer-ready proof only when evidenced
```

Rules:

- Level 1 assets should be maintainable physical assets, systems or cabinets.
- Embedded meters, relays, sensors and controllers should remain child components unless component-level investigation is required.
- Brownfield and multi-vendor scope should be visible when it affects trust.
- Source strength should be visible when it affects trust.
- Connectivity status should distinguish connected, partially connected and non-connected assets.
- Non-connected assets must not be presented as live-monitored.
- Health data should show what is observed, sourced and fresh.
- Intelligence should explain what observed facts may mean.
- Recommendations should be traceable to asset context and evidence.
- Expected outcomes are not value proof until actions are completed and evidence is available.
- Technical outcomes and internal proof are not customer-ready proof without validation.
- Customer-ready proof must be distinguished from internal draft proof.

Do not use GenAI to invent asset hierarchy, connectivity status, telemetry,
lifecycle status, data source, source strength, expected outcomes or proven value.

---
