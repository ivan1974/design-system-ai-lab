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
1. Identify the primary user decision.
2. Select the main domain object.
3. Select the screen type.
4. Select the workspace architecture.
5. Use a business pattern first when one fits.
6. Add decision components only where they support action.
7. Add evidence and trust markers.
8. Add owned next actions.
9. Apply progressive disclosure.
10. Apply visual rules.
11. Run blockers before final answer.
```

Do not start by choosing random components.

---

## 1. Primary user decision

Generate one primary decision per screen.

Good decisions:

```txt
Review renewal risk and decide the next owned action.
Validate an asset recommendation before customer sharing.
Monitor service risk and assign follow-through.
Prepare a customer review from validated proof points.
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

If list/detail is not needed, keep the screen simpler.

---

## 5. Business pattern first

Use business patterns before rebuilding known sections manually.

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

Do not bury the next action below long evidence detail.

---

## Final blocker check

Before final answer, verify:

```txt
one primary decision
public package imports only
styles imported once
no local design system
business pattern used when available
facts before interpretation
evidence not invented
actions owned, dated and prioritized
evidence available without overload
visual rules respected
```
