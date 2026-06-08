# RecommendationReviewPanel Guidelines

## Purpose

Use `RecommendationReviewPanel` to frame the review of several
`RecommendationCard` items.

A recommendation review panel should help the user understand the review scope,
readiness, validation status, source context and proof context before comparing
recommendations.

It is designed for situations where recommendations must be prioritized,
reviewed, validated, prepared for customer use or converted into follow-up
actions.

A recommendation review panel is not a recommendation card.

A recommendation review panel is not a generic list.

A recommendation review panel is not an action plan.

A recommendation review panel is not a place to approve recommendations
automatically.

In generated screens, use `RecommendationReviewPanel` when several
recommendations share a review context and the user needs to compare priority,
readiness, validation status or customer-readiness across them.

---

## Import

Import `RecommendationReviewPanel` from the package root:

```tsx
import { RecommendationReviewPanel } from "design-system-ai-lab";
```

Do not import `RecommendationReviewPanel` from internal package paths.

Do not recreate `RecommendationReviewPanel` locally.

Do not create custom recommendation review wrappers.

---

## Component role

Use `RecommendationReviewPanel` when the user needs to understand:

- what recommendation set is being reviewed
- why this review matters now
- which source or proof context applies to the group
- whether recommendations are internal, need review or customer-ready
- whether human validation is required before customer use
- whether proof gaps or source limitations affect customer-readiness
- what section-level action is available, if any

The panel should frame the review.

Each `RecommendationCard` should still carry the individual recommendation,
rationale, evidence, priority, readiness, validation status and action.

The panel should not replace the cards.

---

## Props

Use the component with these props:

```tsx
<RecommendationReviewPanel
  title="Recommendations requiring review"
  description="Review priority, source evidence and readiness before customer use."
  reviewScope="Renewal preparation"
  reviewStatus="Needs review"
  sourceContext="Recommendations based on monitored assets and service history"
  validationStatus="Review before customer use"
  customerReadiness="Not customer-ready"
  proofContext="Internal proof, not customer-ready"
  badges={[
    { label: "Needs review", tone: "warning" },
    { label: "Customer-ready proof missing", tone: "warning" },
  ]}
>
  <RecommendationCard ... />
  <RecommendationCard ... />
</RecommendationReviewPanel>
```

Expected props:

```txt
title
description
reviewScope
reviewStatus
sourceContext
validationStatus
customerReadiness
proofContext
actions
badges
extraItems
children
className
```

Use `title` to name the recommendation review area.

Use `description` to explain the review context.

Use `reviewScope` to clarify the customer, asset, renewal, service or QBR scope.

Use `reviewStatus` to summarize the current review state.

Use `sourceContext` when the group of recommendations depends on shared source
scope, source strength or freshness.

Use `validationStatus` when the recommendation set needs review before customer
use.

Use `customerReadiness` to clarify whether the set is internal, needs review or
customer-ready.

Use `proofContext` when value proof or proof gaps affect recommendation
readiness.

Use `actions` for section-level review actions only.

Use `badges` for short review status labels.

Use `extraItems` for additional concise review metadata.

Use `children` for `RecommendationCard` items.

---

## Review status rules

Use review status to describe the state of the recommendation group.

Good review statuses:

```txt
Needs review
Expert validation needed
Source evidence review needed
Proof review needed
Customer-ready after validation
Customer-ready
```

Avoid review statuses:

```txt
AI approved
Automatically validated
Confirmed by intelligence
Ready because confidence is high
```

Review status should preserve human accountability for critical decisions.

Do not use the panel to approve recommendations.

---

## Customer-readiness rules

Customer-readiness should not create false confidence.

Use customer-readiness to distinguish:

```txt
Internal only
Needs review
Customer-ready after validation
Customer-ready
Not customer-ready
```

Do not mark a recommendation set as customer-ready when:

- source evidence is partial
- source strength is weak or unclear
- validation status is missing
- proof is internal, incomplete or expected rather than proven
- individual recommendations still need expert review

Customer-ready status should be supported by source context, validation status
and proof context.

---

## Source and proof rules

Use source and proof context when they affect how recommendations should be
interpreted.

Good context:

```txt
Source context: Lifecycle registry, service history and partial monitoring data
Validation status: Review before customer use
Proof context: Internal proof, not customer-ready
Customer readiness: Needs review
```

Do not use confidence language as a substitute for source context or validation
status.

Do not present internal proof as customer-ready proof without validation.

Do not present expected outcomes as proven value.

Do not present Intelligence interpretation as source-system truth.

---

## Children rules

`RecommendationReviewPanel` should usually contain `RecommendationCard` children.

Good:

```tsx
<RecommendationReviewPanel title="Recommendations requiring review">
  <RecommendationCard ... />
  <RecommendationCard ... />
</RecommendationReviewPanel>
```

Avoid:

```tsx
<RecommendationReviewPanel title="Recommendations requiring review">
  <ActionCard ... />
  <AlertCard ... />
</RecommendationReviewPanel>
```

Use `PriorityList` for alerts or blockers.

Use `ActionList` for assigned internal actions.

Use `ActionCard` inside `ActionList`, not inside `RecommendationReviewPanel`.

---

## Section action rules

Use `actions` for section-level review actions.

Good section actions:

```txt
Review source evidence
Validate with expert
Review proof gaps
Create follow-up action
Prepare customer-ready summary
```

Avoid section actions:

```txt
Approve recommendations
Confirm AI recommendations
Validate automatically
Mark customer-ready
```

Use `CreateActionDialog` when the panel action creates accountable follow-up
work.

Do not use panel actions to bypass `RecommendationCard` review or human
validation.

---

## When to use RecommendationReviewPanel

Use `RecommendationReviewPanel` for:

- recommendation review screens
- asset recommendation review
- renewal recommendation review
- QBR preparation recommendations
- proof follow-up recommendations
- modernization hypothesis review
- customer-ready recommendation preparation
- source evidence review before customer use
- trust-sensitive recommendation groups where validation status matters

---

## When not to use RecommendationReviewPanel

Do not use `RecommendationReviewPanel` for:

- a single recommendation without shared review context
- generic action lists
- generic alert lists
- customer status summaries
- asset intelligence context without recommendations
- proof maturity explanation without recommendations
- connectivity coverage detail
- AI validation or automatic approval flows

Use other components instead:

| Need | Use |
| --- | --- |
| Single recommendation | `RecommendationCard` |
| Asset intelligence context | `AssetIntelligenceSummary` |
| Customer context | `CustomerStatusCard` |
| Renewal context | `RenewalRiskSummary` |
| Proof maturity and proof gaps | `ValueProofCard` |
| Connectivity coverage and visibility limits | `ConnectivityCoverageCard` |
| Generic source or validation metadata | `StatusSummary` |
| Risk or blocker | `AlertCard` |
| Group risks or blockers | `PriorityList` |
| Assigned internal action | `ActionCard` |
| Group assigned actions | `ActionList` |
| Action creation | `CreateActionDialog` |

---

## Placement rules

Place `RecommendationReviewPanel` after the context needed to understand the
recommendations.

Recommended asset recommendation structure:

```txt
PageHeader
→ CustomerStatusCard when customer context matters
→ AssetIntelligenceSummary for source, Health and Intelligence context
→ RecommendationReviewPanel with RecommendationCard items
→ ActionList with validation or follow-up actions
```

Recommended renewal structure:

```txt
PageHeader
→ CustomerStatusCard when broader customer context matters
→ RenewalRiskSummary for renewal context
→ ValueProofCard when proof readiness affects recommendations
→ RecommendationReviewPanel with RecommendationCard items
→ ActionList with mitigation or proof follow-up actions
```

Do not place recommendations before the user understands the customer, asset,
proof or renewal context that affects interpretation.

---

## Relationship with RecommendationCard

`RecommendationReviewPanel` frames a group of recommendations.

`RecommendationCard` explains each recommendation.

The panel should carry shared review context.

Each card should carry individual recommendation context.

Example:

```txt
RecommendationReviewPanel: review scope, source context, validation status, customer-readiness
RecommendationCard: recommendation, rationale, evidence, priority, readiness, action
```

Do not put individual rationale inside the panel.

Do not put group-level review context redundantly into every card unless the
context is critical for each recommendation.

---

## Relationship with AssetIntelligenceSummary

Use `AssetIntelligenceSummary` before the panel when recommendations depend on
asset scope, Health signals, source strength or Intelligence interpretation.

Example:

```txt
AssetIntelligenceSummary: source strength partial, Health visibility partial, expert review needed
RecommendationReviewPanel: recommendations requiring review before customer use
RecommendationCard: validate modernization option
```

Do not use `RecommendationReviewPanel` to explain the full asset intelligence
context.

---

## Relationship with ValueProofCard

Use `ValueProofCard` before the panel when recommendations depend on proof
readiness or proof gaps.

Example:

```txt
ValueProofCard: internal proof, not customer-ready
RecommendationReviewPanel: recommendations to prepare customer-ready proof
RecommendationCard: prepare renewal value summary
```

Do not use the panel to explain proof maturity in detail.

---

## Relationship with ActionList and CreateActionDialog

Use `ActionList` after the panel for assigned internal follow-up work.

Use `CreateActionDialog` as a section action when a user needs to create a new
follow-up action from the recommendation review.

Example:

```txt
RecommendationReviewPanel: review recommendations
CreateActionDialog: create source review action
ActionList: assigned source review and proof follow-up actions
```

Do not put assigned actions directly inside the panel unless they are passed as a
section-level control.

---

## Good example

```tsx
<RecommendationReviewPanel
  title="Recommendations requiring review"
  description="Review priority, source evidence and readiness before customer use."
  reviewScope="Renewal preparation"
  reviewStatus="Needs review"
  sourceContext="Recommendations based on monitored assets and service history"
  validationStatus="Review before customer use"
  customerReadiness="Not customer-ready"
  proofContext="Internal proof, not customer-ready"
  badges={[
    { label: "Needs review", tone: "warning" },
    { label: "Customer-ready proof missing", tone: "warning" },
  ]}
>
  <RecommendationCard ... />
  <RecommendationCard ... />
</RecommendationReviewPanel>
```

This is good because:

- the review scope is explicit
- shared source context is visible
- validation status is not hidden
- customer-readiness is not overstated
- individual recommendation rationale remains in `RecommendationCard`

---

## Asset recommendation review example

```tsx
<RecommendationReviewPanel
  title="Asset recommendations requiring expert review"
  description="Review source evidence and validation status before customer use."
  reviewScope="Site A > Medium voltage room"
  reviewStatus="Expert validation needed"
  sourceContext="Lifecycle registry, service history and partial monitoring data"
  validationStatus="Validate with Schneider expert before customer use"
  customerReadiness="Needs review"
  badges={[
    { label: "Expert review", tone: "warning" },
    { label: "Source partial", tone: "warning" },
  ]}
>
  <RecommendationCard ... />
</RecommendationReviewPanel>
```

---

## Bad example

Do not use the panel to approve recommendations automatically:

```tsx
<RecommendationReviewPanel
  title="Approved recommendations"
  reviewStatus="AI approved"
  validationStatus="Automatically validated"
  customerReadiness="Customer-ready"
  badges={[{ label: "AI validated", tone: "success" }]}
>
  <RecommendationCard ... />
</RecommendationReviewPanel>
```

This is weak because:

- AI validation is claimed
- human validation is bypassed
- customer-readiness is unsupported
- source and proof context are missing

---

## Content quality rules

A recommendation review panel should answer:

1. What recommendation group is being reviewed?
2. Why does this review matter now?
3. What source or proof context applies to the group?
4. What validation status applies before customer use?
5. Is the group internal, needs review or customer-ready?
6. What section-level action is available, if any?
7. Are individual recommendation rationale and evidence kept inside each card?

If the panel does not answer these questions, add the missing context or use a
more appropriate component.

---

## Anti-patterns

Do not generate:

- manually rebuilt recommendation review panels
- local recommendation review panel components
- local recommendation review panel wrappers
- internal imports from package files
- recommendation review panels without `RecommendationCard` children
- panels that approve recommendations automatically
- panels that claim AI validation or automatic approval
- panels that present expected outcomes as proven value
- panels that present internal proof as customer-ready proof without validation
- panels that present Intelligence interpretation as source-system truth
- panels that hide source context when source affects trust
- panels that hide validation status when customer use is possible
- panels that replace individual recommendation rationale
- panels that replace assigned follow-up actions

---

## Review checklist

After generation, verify:

- `RecommendationReviewPanel` is imported from `design-system-ai-lab`
- no local recommendation review panel replacement was created
- no local recommendation review panel wrapper was created
- no internal package import is used
- the panel contains `RecommendationCard` items
- review scope is explicit when needed
- source context is visible when it affects trust
- validation status is visible when customer use is possible
- customer-readiness is not overstated
- proof context is visible when proof affects readiness
- the panel does not claim AI validation or automatic approval
- the panel does not present expected outcomes as proven value
- the panel does not present internal proof as customer-ready proof without validation
- individual recommendation rationale remains in `RecommendationCard`
- assigned follow-up work remains in `ActionList` or `CreateActionDialog`

---

## Final principle

A `RecommendationReviewPanel` should make the shared review context of several
recommendations visible without replacing the rationale, evidence, priority,
readiness or action carried by each `RecommendationCard`.
