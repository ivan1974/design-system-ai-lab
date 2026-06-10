# Make Minimal Contract v0.5.1

## Purpose

Read this first in Figma Make.

This file is the shortest blocking contract. It does not replace `Guidelines.md` or `setup.md`.

Use:

```txt
make-minimal-contract.md → blocking rules
Guidelines.md → full generation router
setup.md → package setup and approved vocabulary
guidelines/prompts/* → reusable generation guidance
benchmarks/figma-make/cases/* → fixed scoring cases
contracts/ → machine-readable rules
```

Reusable prompts may be adapted to a user scenario.

Benchmark cases are fixed scoring scenarios. Do not rewrite benchmark facts unless the scoring objective changes.

---

## 1. Required imports

Only import components from the package root:

```tsx
import { ... } from "design-system-ai-lab";
import "design-system-ai-lab/styles.css";
```

Never import from:

```txt
design-system-ai-lab/dist/*
design-system-ai-lab/src/*
./components/ui/*
packages/design-system-ai-lab/*
```

Never create a local design system.

---

## 2. Required screen model

Generate one decision workspace.

Default hierarchy:

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

Do not generate a generic dashboard or a long stack of equal cards.

---

## 3. Generation preferences

Use preferred components for new screens.

```txt
Page intent → PageHeading
Selected item detail → WorkspaceDetailPanel
Compact signal group → MetricStrip with CompactMetric
Asset hierarchy → ComponentHierarchy
Repeated review objects → ListContainer with approved row components
Follow-through actions → ActionRow or StickyActionBar
```

Use with care:

```txt
PageHeader → legacy page header, not the default for new decision workspaces
DetailPanel → lower-level primitive, not the default selected-item detail panel
ComponentHierarchyItem → use only inside ComponentHierarchy
Card → emphasis container, not the default repeated-object layout
```

Do not use low-level or legacy components when a preferred component matches the user decision.

---

## 4. Use business patterns first

Use available business patterns before rebuilding known sections manually.

Examples:

```txt
CustomerStatusCard
ConnectivityCoverageCard
AssetIntelligenceSummary
ComponentHierarchy
RenewalRiskSummary
ValueProofCard
ServiceRiskSummary
RecommendationReviewPanel
CustomerReviewReadinessCard
CreateActionDialog
```

---

## 5. Facts before interpretation

Show observable facts before interpretation, prioritization or recommendation.

Separate:

```txt
source-system facts
→ health or service signals
→ intelligence interpretation
→ recommendation
→ owned action
```

---

## 6. Evidence rules

Never invent evidence, sources, telemetry, proof or validation.

Do not present:

- expected outcomes as proven value
- partial visibility as complete asset knowledge
- AI confidence as source strength
- internal proof as customer-ready proof without validation

Keep source scope, source strength, proof readiness and validation visible when trust matters.

---

## 7. Action rules

Every action must have:

```txt
owner
due date
priority
```

Use `ActionRow` or `ActionCard` for assigned actions.

Every `AlertCard` must include a recommendation.

---

## 8. Reject and repair

If any blocking rule fails, revise before acceptance.

Use:

```txt
review/blocking-checklist.md
review/repair-routing.md
review/review-loop.md
```

A screen is not acceptable if it breaks imports, creates local components, invents evidence or hides action ownership.
