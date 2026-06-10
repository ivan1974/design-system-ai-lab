# Guidelines — Design System AI Lab

## Purpose

This file is the main entry point for Figma Make.

Before generating, read the minimal blocking contract first:

```txt
make-minimal-contract.md
```

Then use this file for full generation guidance, `setup.md` for package setup and approved vocabulary, and specific guideline files when needed.

---

## Read order

```txt
make-minimal-contract.md
→ Guidelines.md
→ setup.md
→ specific guideline files when needed
→ contracts/ for machine-readable checks
```

`Guidelines.md` remains the mandatory entry point.

`make-minimal-contract.md` is the shortest blocking contract. It does not replace `Guidelines.md` or `setup.md`.

---

## Non-negotiable generation contract

1. Render a complete visible screen in `App.tsx`.
2. Import components only from `design-system-ai-lab`.
3. Import styles once from `design-system-ai-lab/styles.css`.
4. Never import from internal paths or local UI folders.
5. Never create a local design system.
6. Use business patterns before rebuilding known sections manually.
7. Generate one decision-oriented screen, not a generic dashboard.
8. Prefer a decision workspace over a long stack of cards.
9. Show visible facts before AI interpretation.
10. Never invent evidence, sources, asset facts, telemetry, citations or value proof.
11. Every `AlertCard` must include a recommendation.
12. Every `ActionCard` or `ActionRow` must include owner, due date and priority.
13. Expected outcomes must not be presented as proven value.
14. Sensitive decisions must keep human validation visible.

---

## Required package

```tsx
import { ... } from "design-system-ai-lab";
import "design-system-ai-lab/styles.css";
```

Do not import from:

```txt
design-system-ai-lab/dist/*
design-system-ai-lab/src/*
./components/ui/*
packages/design-system-ai-lab/*
```

More detail:

```txt
setup.md
contracts/package.contract.json
```

---

## Preferred generation vocabulary

Use the vocabulary in:

```txt
contracts/components.contract.json
contracts/props.contract.json
```

For new decision workspaces, prefer:

```txt
PageHeading over PageHeader
WorkspaceDetailPanel over DetailPanel for selected-item detail
MetricStrip with CompactMetric for compact signal groups
ComponentHierarchy for asset hierarchy
ListContainer with approved row components for repeated objects
SectionStack and SectionBlock for dense grouped sections
ActionRow or StickyActionBar for follow-through
```

Use with care:

```txt
PageHeader → legacy page header, not the default for new decision workspaces
DetailPanel → lower-level primitive, not the default selected-item detail panel
ComponentHierarchyItem → use only inside ComponentHierarchy
Card → emphasis container, not the default repeated-object layout
```

If a component is listed as use with care, Make must have a specific reason to use it.

---

## Decision workspace principle

Use this default hierarchy when the user needs to compare, review evidence or act:

```txt
WorkspaceShell
→ PageHeading
→ FilterBar or SecondaryNavigation
→ MasterDetailLayout when list/detail is needed
→ ListContainer with approved QueueRows
→ WorkspaceDetailPanel for selected item detail
→ Tabs if detail has several views
→ ActionRow or StickyActionBar for follow-through
```

Do not make every fact, signal, action or proof point into a separate card.

---

## Screen intent router

Use one primary user decision per screen.

Use business patterns before low-level components when a pattern fits:

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
Dense action list → ActionRow items
Evidence list → EvidenceRow items
Signal list → SignalRow items
Generic structured metadata → KeyValueList or StatusSummary
Asset hierarchy → ComponentHierarchy
Compact signal strip → MetricStrip with CompactMetric
```

Customer monitoring: use `WorkspaceShell`, `PageHeading`, `FilterBar`, `MasterDetailLayout`, `CustomerStatusCard`, `ConnectivityCoverageCard`, `ServiceRiskSummary`, `AlertCard`, `ActionRow`.

Renewal risk review: use `WorkspaceShell`, `PageHeading`, `FilterBar`, `MasterDetailLayout`, `RenewalRiskSummary`, `CustomerReviewReadinessCard`, `ValueProofCard`, `RecommendationReviewPanel`, `AlertCard`, `ActionRow`.

Asset recommendation review: use `WorkspaceShell`, `PageHeading`, `FilterBar`, `MasterDetailLayout`, `WorkspaceDetailPanel`, `AssetIntelligenceSummary`, `ServiceRiskSummary`, `RecommendationReviewPanel`, `RecommendationCard`, `EvidenceRow`, `ActionRow`.

QBR or customer review readiness: use `WorkspaceShell`, `PageHeading`, `FilterBar`, `MasterDetailLayout`, `WorkspaceDetailPanel`, `CustomerReviewReadinessCard`, `ValueProofCard`, `ServiceRiskSummary`, `RecommendationReviewPanel`, `AlertCard`, `ActionRow`.

Installed base exploration: use `WorkspaceShell`, `PageHeading`, `FilterBar`, `MasterDetailLayout`, `WorkspaceDetailPanel`, `KeyValueList`, `MetricStrip`, `ComponentHierarchy`, `EvidenceRow`, `Timeline`, `DocumentRow`, `ActionRow`.

---

## Approved vocabulary

Use the public package vocabulary from:

```txt
setup.md
contracts/components.contract.json
contracts/props.contract.json
```

Do not invent enum-like prop values for `variant`, `tone`, `severity`, `priority`, `strength`, `mode`, `size`, `status`, `readiness`, `riskLevel`, `proofReadiness`, `validationStatus`, `sourceStrength` or `density`.

---

## Transversal principles

Apply:

```txt
principles/accessibility.md
principles/eco-design.md
principles/ai-usage.md
principles/evidence-and-trust.md
```

Use BI, APIs, databases or business tools for structured facts.

Use GenAI only for synthesis, explanation, prioritization, recommendation, drafting or reformulation after visible facts are shown.

Show observed facts, source scope, interpreted signals, evidence-aware recommendations, owned actions, expected outcome or proof status, and human validation when needed.

---

## Review and repair

Use after generation:

```txt
review/blocking-checklist.md
review/acceptance-checklist.md
review/review-loop.md
review/repair-routing.md
```

If a screen breaks imports, creates local components, invents evidence or hides action ownership, reject and repair before quality review.
