# Runtime Generation Flow

## Status

```txt
ACTIVE RUNTIME / REASONING FLOW / FIGMA MAKE
```

This file gives Figma Make the default reasoning flow for generated screens.

Use it to avoid component stacking, generic dashboards and overloaded decision screens.

---

## Default flow

Before generating, follow this order:

```txt
1. Identify whether a screen contract exists.
2. If a screen contract exists, read it and preserve it exactly.
3. Identify the primary user decision.
4. Select the main domain object.
5. Select the screen type.
6. Select the workspace architecture only when no contract architecture exists.
7. Use a business pattern first when one fits and the contract allows it.
8. Add decision components only where they support action.
9. Add evidence and trust markers.
10. Add owned next actions.
11. Apply progressive disclosure.
12. Apply visual rules.
13. Run blockers before final answer.
```

Do not start by choosing random components.

Do not start from the default architecture when a screen contract defines exact layers.

Do not start by recreating local shadcn primitives.

---

## 0. Screen contract check

A screen contract is the highest-priority generation artifact.

If a screen contract exists, it controls:

```txt
primary layers
layer order
zones
views
filters
filter categories
columns
column internals
grouping
tabs
actions
asset states
interactions
context preservation
forbidden content
```

Closed screen contracts do not allow undefined elements.

Do not add extra filters, columns, tabs, metrics or actions to improve the screen.

Improve hierarchy only inside allowed zones.

---

## 0.5 Primitive implementation boundary

Internal DS primitives may be shadcn-compatible.

Generated screens must still use public `design-system-ai-lab` imports only.

Forbidden generated imports:

```txt
@radix-ui/*
@/components/ui
./components/ui
components/ui
src/design-system/internal
src/design-system/primitives
design-system-ai-lab/src
design-system-ai-lab/dist
```

If a public DS component is missing, report the missing DS capability instead of creating local primitive files.

---

## 1. Primary user decision

Generate one primary decision per screen.

Good decisions:

```txt
Review renewal risk and decide the next owned action.
Validate an asset recommendation before customer sharing.
Monitor service risk and assign follow-through.
Prepare a customer review from validated proof points.
Identify installed base assets that require attention and decide the next action.
```

Bad decisions:

```txt
Show everything about the customer.
Create a management dashboard.
Display all metrics, risks, proof and actions equally.
```

---

## 2. Main domain object

Select the main object before selecting components:

```txt
Customer
Site
Asset
Recommendation
Risk
Evidence
Action
Proof
Installed Base
```

If the object is unclear, choose the simplest screen that supports the user decision.

---

## 3. Screen type

Prefer one of these screen types:

```txt
monitoring workspace
review workspace
recommendation review
renewal risk review
asset intelligence review
customer readiness review
installed base exploration
operational inventory
```

Do not generate a generic dashboard unless explicitly requested.

---

## 4. Workspace architecture

Default architecture:

```txt
WorkspaceShell
→ PageHeading
→ FilterBar or SecondaryNavigation
→ MasterDetailLayout when list/detail is needed
→ ListContainer with approved rows
→ WorkspaceDetailPanel for selected-item detail
→ Tabs only when detail has several views
→ ActionRow or StickyActionBar for follow-through
```

If a screen contract exists, use the contract architecture instead of this default architecture.

If list/detail is not needed, keep the screen simpler.

---

## 5. Business pattern first

Use business patterns before rebuilding known sections manually.

Only use a business pattern if it does not violate the screen contract.

Examples:

```txt
CustomerStatusCard
ConnectivityCoverageCard
RenewalRiskSummary
ValueProofCard
AssetIntelligenceSummary
ServiceRiskSummary
RecommendationReviewPanel
CustomerReviewReadinessCard
```

---

## 6. Evidence and action placement

Place information in this order when possible:

```txt
decision context
→ key facts or signals
→ recommendation or risk
→ confidence reason
→ evidence detail
→ owned action
```

For v0.7.0 decision screens, prefer:

```txt
Signal → Decision → Evidence
```

Do not bury the next action below long evidence detail.

Do not expose every proof point before the user understands the decision.

---

## 7. Operational inventory flow

For operational inventory or installed base exploration:

```txt
1. show scope and screen context;
2. show view and filter controls;
3. show grouped operational rows;
4. show attention-required items first when relevant;
5. open detail without losing context;
6. keep actions visible when action is available;
7. move evidence, history and documents into detail.
```

Do not replace inventory rows with dashboard cards.

---

## 8. Final blockers

Before final output, verify:

```txt
screen contract preserved when present
public DS package imports only
stylesheet import present
no components/ui imports
no @radix-ui direct imports
no internal primitive imports
no local DS recreated
no unsupported enum-like values
```
