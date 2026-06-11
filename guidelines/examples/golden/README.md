# Golden Examples

## Purpose

This folder contains v0.6.0 golden `App.tsx` examples for Figma Make.

Golden examples show what a good generated screen should look like when using `design-system-ai-lab`.

They are not production application demos.

They are Make-ready reference outputs and generation-rule fixtures.

Use them to help Make understand:

- the expected public package import pattern
- the expected workspace structure
- the right business patterns for each screen intent
- how much density is appropriate
- how to keep evidence and validation context visible
- how to avoid generic dashboards
- how to avoid local component recreation
- how to keep the interface sober, B2B and action-oriented

---

## Required Make Kit context

Before using a golden example, Figma Make should read the v0.6.0 runtime path:

```txt
guidelines/Guidelines.md
guidelines/setup.md
guidelines/tokens.md
guidelines/styles.md
guidelines/runtime/generation-contract.md
guidelines/runtime/generation-flow.md
guidelines/runtime/component-selection.md
guidelines/runtime/trust-action-rules.md
guidelines/runtime/visual-rules.md
guidelines/runtime/progressive-decision-disclosure.md
```

Do not use a golden example alone as the full instruction set.

---

## Active golden examples

The active v0.6.0 golden fixture set is intentionally small:

```txt
customer-monitoring.App.tsx
renewal-risk-review.App.tsx
asset-recommendation-review.App.tsx
```

These examples align with the three active first-generation benchmark cases.

---

## Customer monitoring

Use this when the screen intent is:

```txt
Customer monitoring
```

Main decision:

```txt
Decide which customer, asset or service risk needs action before the next customer touchpoint.
```

Expected flow:

```txt
Customer context
→ decision signals
→ monitoring visibility limits
→ service risk synthesis
→ priority risks
→ owned actions
```

Key components and patterns:

```txt
WorkspaceShell
PageHeading
FilterBar
MasterDetailLayout
ListContainer
WorkspaceDetailPanel
CustomerStatusCard
ConnectivityCoverageCard
ServiceRiskSummary
MetricStrip
AlertCard
ActionRow
```

---

## Renewal risk review

Use this when the screen intent is:

```txt
Renewal risk review
```

Main decision:

```txt
Decide which renewal blockers require mitigation before the renewal discussion.
```

Expected flow:

```txt
Renewal context
→ proof readiness
→ value proof status
→ decision signals
→ renewal blockers
→ recommendation review
→ mitigation actions
```

Key components and patterns:

```txt
WorkspaceShell
PageHeading
FilterBar
MasterDetailLayout
ListContainer
WorkspaceDetailPanel
RenewalRiskSummary
ValueProofCard
CustomerReviewReadinessCard
RecommendationReviewPanel
RecommendationCard
AlertCard
ActionRow
```

---

## Asset recommendation review

Use this when the screen intent is:

```txt
Asset recommendation review
```

Main decision:

```txt
Decide whether asset recommendations are ready for customer communication.
```

Expected flow:

```txt
Customer context
→ asset source facts
→ observed signals
→ intelligence interpretation
→ service or communication risk
→ recommendation review
→ validation actions
```

Key components and patterns:

```txt
WorkspaceShell
PageHeading
FilterBar
MasterDetailLayout
ListContainer
WorkspaceDetailPanel
AssetIntelligenceSummary
ServiceRiskSummary
RecommendationReviewPanel
RecommendationCard
ComponentHierarchy
EvidenceRow
ActionRow
```

---

## Removed examples

The following examples were removed from the active v0.6.0 golden fixture set:

```txt
qbr-readiness.App.tsx
installed-base-explorer.App.tsx
```

Reason:

- they are not part of the active v0.6.0 first-generation benchmark contract;
- their reusable prompts were removed during prompts cleanup;
- keeping them as golden fixtures would preserve an older broader example set.

They can be recreated later as v0.7.0 progressive disclosure examples if needed.

---

## Storybook

The active golden examples are also rendered in Storybook.

If a golden example is removed, remove or update its Storybook story at the same time.

This prevents Storybook build failures caused by stale imports.
