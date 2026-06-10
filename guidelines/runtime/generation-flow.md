# Runtime Generation Flow

## Purpose

This file gives Figma Make the default reasoning flow for generated screens.

Use it to avoid component stacking and generic dashboards.

---

## Default flow

Before generating, follow this order:

```txt
1. Identify the primary user decision.
2. Select the main domain object.
3. Select the screen type.
4. Use the default workspace architecture.
5. Use business patterns before low-level components.
6. Add decision components only where they support action.
7. Add evidence and trust markers.
8. Add owned next actions.
9. Apply progressive decision disclosure.
10. Apply visual rules.
11. Run blockers before final answer.
```

---

## Primary decision rule

Generate one primary decision per screen.

Good:

```txt
Review renewal risk and decide the next owned action.
Validate an asset recommendation before customer sharing.
Monitor customer service risk and assign follow-through.
```

Avoid:

```txt
Show everything about the customer.
Create a generic dashboard.
Display all metrics, risks, proof and actions equally.
```

---

## Workspace architecture

Use this default architecture for review, monitoring, renewal, recommendation and QBR screens:

```txt
WorkspaceShell
→ PageHeading
→ FilterBar or SecondaryNavigation
→ MasterDetailLayout
→ ListContainer with approved rows
→ WorkspaceDetailPanel
→ Tabs only when useful
→ ActionRow or StickyActionBar
```

If list/detail is not needed, keep the screen simpler.

---

## Business pattern first

If a business pattern matches the intent, use it before rebuilding the section manually.

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

## Final check

Before final answer, ask:

```txt
Is the user decision clear?
Is the screen using package components only?
Are facts shown before interpretation?
Are actions owned, dated and prioritized?
Is evidence available without overwhelming the screen?
Are visual rules respected?
```
