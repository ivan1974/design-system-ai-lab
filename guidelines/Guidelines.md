# Guidelines — Design System AI Lab

## Purpose

This file is the main entry point for Figma Make.

Before generating, read the minimal blocking contract first:

```txt
make-minimal-contract.md
```

Then use this file for full generation guidance and use the more specific guideline files when needed.

These guidelines define how Make should generate interfaces using the `design-system-ai-lab` package.

The goal is not to generate free-form UI from a blank canvas.

The goal is to generate coherent, accessible, sober, reviewable and reusable product interfaces by composing the approved design system package.

Generated screens should be useful first drafts.

They are not production-ready by default.

The designer remains responsible for UX judgment, hierarchy, validation and final quality.

---

## How this file should be used

`Guidelines.md` is the mandatory entry point for Figma Make.

Read order:

```txt
make-minimal-contract.md
→ Guidelines.md
→ setup.md
→ specific guideline files when needed
→ contracts/ for machine-readable checks
```

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

Use the more specific guideline files only when Make needs deeper detail about a component, pattern, principle, prompt or review criterion.

Do not turn `Guidelines.md` into the full design system documentation.

The detailed documentation should remain in the linked files.

---

## Non-negotiable generation contract

When generating code, Figma Make must follow these rules.

These rules are blocking.

If one of them is not respected, the generated screen should be revised before it is accepted.

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

The knowledge layer explains why the system exists and how research should inform generated screens.

The generated output should be a useful first draft, not a final production screen.

---

## Decision workspace principle

The design system is not a card stack generator.

When the user needs to compare items, inspect details, review evidence or assign work, Make should generate a decision workspace.

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

Use business patterns in `mode="section"`, `mode="compact"` or `mode="drawer"` when they are part of a larger workspace.

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

The design system includes a lightweight knowledge layer based on UX research, customer interviews, internal interviews, service experience insights and asset intelligence domain knowledge.

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

It should be translated into user needs, design implications, prompt constraints, component rules, pattern guidance and review criteria.

Current evidence status:

```txt
Research-informed
Partially validated
Demo-ready
Not exhaustive
```

Open questions should remain visible in `knowledge/open-questions.md` and should not be treated as fully validated product standards.

For asset-heavy service screens, use `knowledge/asset-intelligence.md` to preserve installed base hierarchy, connectivity status, source scope, recommendation traceability and value proof discipline.

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

It prevents Figma Make from rebuilding known business sections manually with raw `Card`, `Badge`, `div`, `dt` and `dd` markup.

It also prevents Make from producing screens that are visually plausible but inaccessible, noisy, wasteful or AI-first without reason.

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

Use business patterns before low-level components when a pattern fits the section intent.

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

Do not rebuild customer context, renewal context, value proof, risk summaries, recommendation review or action lists with raw `Card` or `div` wrappers when a dedicated pattern exists.

### Customer monitoring

Use when the user needs to understand customer status, monitoring coverage, priority service risks and next actions.

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

Use those only when renewal, value proof or customer review readiness is part of the requested decision.

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

Use when the user needs to review asset health, lifecycle, modernization or asset recommendations.

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

Use when the user needs to prepare a customer review, QBR, renewal discussion or service meeting.

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

Use when the user needs to explore assets, compare source context, inspect an asset and decide what needs review next.

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
