# CustomerReviewReadinessCard Guidelines

## Purpose

Use `CustomerReviewReadinessCard` to summarize whether a customer-facing review
is ready before a QBR, renewal discussion, service review or customer meeting.

A customer review readiness card should help the user understand whether the
customer discussion has enough customer context, proof readiness,
recommendation readiness, risk visibility, action readiness and validation
status.

It should make gaps visible before the user communicates with the customer.

A customer review readiness card is not a recommendation rationale.

A customer review readiness card is not a proof maturity explanation.

A customer review readiness card is not a risk list.

A customer review readiness card is not an action plan.

A customer review readiness card is not a place to claim AI validation,
automatic approval or automatic customer-readiness.

In generated screens, use `CustomerReviewReadinessCard` when the user needs to
prepare, review or validate a customer-facing discussion before it is shared.

---

## Import

Import `CustomerReviewReadinessCard` from the package root:

```tsx
import { CustomerReviewReadinessCard } from "design-system-ai-lab";
```

Do not import `CustomerReviewReadinessCard` from internal package paths.

Do not recreate `CustomerReviewReadinessCard` locally.

Do not create custom customer review readiness wrappers.

---

## Component role

Use `CustomerReviewReadinessCard` when the user needs to understand:

- what customer review is being prepared
- what review type applies
- when the review is expected
- which customer objective frames the discussion
- whether value proof is customer-ready
- whether recommendations are reviewed and customer-ready
- whether risks are visible before the discussion
- whether preparation actions are assigned or still open
- whether validation is needed before customer use
- what source context affects trust

It should establish readiness before the screen moves into detailed proof,
recommendations, risks or actions.

It should not replace the dedicated patterns that explain those details.

---

## Props

Use the component with these props:

```tsx
<CustomerReviewReadinessCard
  customerName="Greenfield Industries"
  reviewType="renewal"
  reviewDate="Jun 24, 2026"
  customerObjective="Confirm service value before renewal decision"
  reviewReadiness="Needs review"
  proofReadiness="Internal proof, not customer-ready"
  recommendationReadiness="Recommendations need source review"
  riskStatus="Three renewal blockers need review"
  actionReadiness="Proof follow-up action not assigned"
  validationStatus="Review before customer use"
  sourceContext="Closed service actions and monitored assets from the last 90 days"
  badges={[
    { label: "Needs review", tone: "warning" },
    { label: "Proof review needed", tone: "warning" },
  ]}
/>
```

Expected props:

```txt
title
description
customerName
reviewType
reviewDate
customerObjective
reviewReadiness
proofReadiness
recommendationReadiness
riskStatus
actionReadiness
validationStatus
sourceContext
badges
extraItems
```

Use `customerName` to identify the customer.

Use `reviewType` to clarify whether the review is a QBR, renewal discussion,
service review or customer meeting.

Use `reviewDate` when timing affects preparation.

Use `customerObjective` to show the customer goal that frames the discussion.

Use `reviewReadiness` to summarize overall readiness.

Use `proofReadiness` to show whether proof is customer-ready, internal, draft or
still under review.

Use `recommendationReadiness` to show whether recommendations are reviewed,
need validation or are ready for customer use.

Use `riskStatus` to summarize whether risks or blockers are visible before the
review.

Use `actionReadiness` to show whether preparation, proof or mitigation actions
are assigned.

Use `validationStatus` when content needs review before customer use.

Use `sourceContext` when source scope, source strength or freshness affects
trust.

Use `badges` for short readiness status labels.

Use `extraItems` for additional concise context specific to the generated
screen.

---

## Review type rules

Good review type values:

```txt
QBR
Renewal discussion
Service review
Customer meeting
Executive review
```

Use user-facing labels rather than internal acronyms when the screen is intended
for customer preparation.

---

## Readiness rules

Readiness should not create false confidence.

Good readiness states:

```txt
Needs review
Internal only
Customer-ready after validation
Customer-ready
Proof review needed
Recommendations need review
Actions not assigned
Risks need review
```

Avoid readiness states:

```txt
AI approved
Automatically validated
Ready because confidence is high
Proven automatically
```

Customer-ready status should be supported by proof readiness, recommendation
readiness, risk visibility, action readiness and validation status.

Do not mark a customer review as customer-ready when proof is internal,
recommendations need review, source evidence is partial or validation status is
missing.

---

## Value proof rules

Use `CustomerReviewReadinessCard` to summarize proof readiness.

Use `ValueProofCard` to explain proof points, proof gaps, expected outcomes and
proof maturity.

Do not present expected outcomes as proven value.

Do not present internal proof as customer-ready proof without validation.

Good proof readiness:

```txt
Customer-ready proof available
Internal proof, not customer-ready
Draft proof, review needed
Customer-ready proof missing
```

---

## Recommendation readiness rules

Use `CustomerReviewReadinessCard` to summarize whether recommendations are ready
for the customer discussion.

Use `RecommendationReviewPanel` and `RecommendationCard` to show the detailed
rationale, evidence, priority, readiness and actions.

Do not use the readiness card to approve recommendations.

Do not claim recommendations are customer-ready when validation or source review
is still needed.

---

## Source and validation rules

Use source and validation context when trust depends on the evidence behind the
review.

Good source and validation context:

```txt
Source context: Closed service actions and monitored assets from the last 90 days
Validation status: Review before customer use
```

Do not use AI confidence as source context.

Do not hide partial source, manual source, inferred source or missing validation
when it affects customer-readiness.

---

## When to use CustomerReviewReadinessCard

Use `CustomerReviewReadinessCard` for:

- QBR preparation screens
- renewal discussion preparation
- customer service review preparation
- executive customer review preparation
- screens where proof, recommendations, risks and actions must be checked before
  customer use
- trust-sensitive screens where validation status affects customer-readiness

---

## When not to use CustomerReviewReadinessCard

Do not use `CustomerReviewReadinessCard` for:

- generic customer context
- detailed value proof
- detailed recommendation rationale
- detailed risk lists
- assigned action plans
- connectivity coverage detail
- asset intelligence context
- AI validation or automatic approval flows

Use other components instead:

| Need | Use |
| --- | --- |
| Customer context | `CustomerStatusCard` |
| Renewal context | `RenewalRiskSummary` |
| Value proof and proof gaps | `ValueProofCard` |
| Recommendation review | `RecommendationReviewPanel` |
| Recommendation rationale | `RecommendationCard` |
| Asset intelligence context | `AssetIntelligenceSummary` |
| Connectivity coverage and visibility limits | `ConnectivityCoverageCard` |
| Risk or blocker | `AlertCard` |
| Group risks or blockers | `PriorityList` |
| Assigned internal action | `ActionCard` |
| Group assigned actions | `ActionList` |

---

## Placement rules

Place `CustomerReviewReadinessCard` after customer or renewal context and before
detailed proof, recommendations, risks or actions.

Recommended QBR structure:

```txt
PageHeader
→ CustomerStatusCard for customer context
→ CustomerReviewReadinessCard for review readiness
→ ValueProofCard for proof points and proof gaps
→ RecommendationReviewPanel when recommendations need review
→ PriorityList with blockers
→ ActionList with preparation actions
```

Recommended renewal structure:

```txt
PageHeader
→ CustomerStatusCard for customer context
→ RenewalRiskSummary for renewal context
→ CustomerReviewReadinessCard for discussion readiness
→ ValueProofCard for proof readiness
→ RecommendationReviewPanel for recommendation review
→ ActionList with proof or mitigation actions
```

Do not place detailed recommendations, proof points or actions before the user
understands whether the customer discussion is ready.

---

## Relationship with ValueProofCard

Use `CustomerReviewReadinessCard` to summarize whether proof is ready for the
customer discussion.

Use `ValueProofCard` to explain proof points, proof gaps, source context,
validation status and expected outcomes.

Example:

```txt
CustomerReviewReadinessCard: proof readiness is internal, not customer-ready
ValueProofCard: closed actions, proof gaps and expected renewal impact
```

Do not put detailed proof narrative inside `CustomerReviewReadinessCard`.

---

## Relationship with RecommendationReviewPanel

Use `CustomerReviewReadinessCard` to summarize recommendation readiness.

Use `RecommendationReviewPanel` to review several recommendations and compare
their priority, readiness, evidence and validation status.

Example:

```txt
CustomerReviewReadinessCard: recommendations need source review
RecommendationReviewPanel: recommendations requiring review before customer use
```

Do not put full recommendation rationale inside `CustomerReviewReadinessCard`.

---

## Relationship with PriorityList and ActionList

Use `PriorityList` for detailed risks or blockers.

Use `ActionList` for assigned preparation, proof follow-up or mitigation
actions.

Example:

```txt
CustomerReviewReadinessCard: preparation actions not assigned
ActionList: assigned proof follow-up and review actions
```

Do not put assigned actions inside `CustomerReviewReadinessCard`.

---

## Good example

```tsx
<CustomerReviewReadinessCard
  customerName="Greenfield Industries"
  reviewType="Renewal discussion"
  reviewDate="Jun 24, 2026"
  customerObjective="Confirm service value before renewal decision"
  reviewReadiness="Needs review"
  proofReadiness="Internal proof, not customer-ready"
  recommendationReadiness="Recommendations need source review"
  riskStatus="Three renewal blockers need review"
  actionReadiness="Proof follow-up action not assigned"
  validationStatus="Review before customer use"
  sourceContext="Closed service actions and monitored assets from the last 90 days"
  badges={[
    { label: "Needs review", tone: "warning" },
    { label: "Proof review needed", tone: "warning" },
  ]}
/>
```

This is good because:

- review type and date are visible
- customer objective frames the discussion
- proof readiness is explicit
- recommendation readiness is not overstated
- validation status remains visible
- assigned actions are not hidden in the summary

---

## Customer-ready example

```tsx
<CustomerReviewReadinessCard
  customerName="North Valley Hospital"
  reviewType="QBR"
  reviewDate="Sep 12, 2026"
  customerObjective="Show continuous service value and next priorities"
  reviewReadiness="Customer-ready"
  proofReadiness="Customer-ready proof available"
  recommendationReadiness="Recommendations reviewed for customer use"
  riskStatus="No critical blocker for the review"
  actionReadiness="Preparation actions complete"
  validationStatus="Reviewed for customer use"
  sourceContext="Reviewed service outcomes and recommendations from the last quarter"
  badges={[
    { label: "Customer-ready", tone: "success" },
    { label: "Reviewed", tone: "success" },
  ]}
/>
```

This is good because:

- customer-ready status is supported by validation
- proof and recommendations are reviewed
- no automatic approval is claimed

---

## Bad example

Do not use readiness to claim AI validation or automatic approval:

```tsx
<CustomerReviewReadinessCard
  customerName="Greenfield Industries"
  reviewType="Renewal discussion"
  reviewReadiness="AI approved"
  proofReadiness="Proven automatically"
  recommendationReadiness="Automatically validated"
  validationStatus="AI confirmed"
  badges={[{ label: "AI validated", tone: "success" }]}
/>
```

This is weak because:

- AI validation is claimed
- human validation is bypassed
- expected or internal proof may be presented as proven value
- customer-readiness is unsupported

---

## Content quality rules

A customer review readiness card should answer:

1. Which customer review is being prepared?
2. What customer objective frames the discussion?
3. Is value proof customer-ready, internal, draft or under review?
4. Are recommendations reviewed and ready for customer use?
5. Are risks or blockers visible before the discussion?
6. Are preparation or mitigation actions assigned?
7. What validation status applies before customer use?
8. What source context affects trust?

If the card does not answer these questions, add the missing context or use a
more appropriate component.

---

## Anti-patterns

Do not generate:

- manually rebuilt customer review readiness cards
- local customer review readiness components
- local customer review readiness wrappers
- internal imports from package files
- readiness cards that claim AI validation or automatic approval
- readiness cards that present expected outcomes as proven value
- readiness cards that present internal proof as customer-ready proof without
  validation
- readiness cards that approve recommendations instead of summarizing readiness
- readiness cards that hide missing validation before customer use
- readiness cards that replace value proof details
- readiness cards that replace recommendation rationale
- readiness cards that replace assigned preparation actions

---

## Review checklist

After generation, verify:

- `CustomerReviewReadinessCard` is imported from `design-system-ai-lab`
- no local customer review readiness replacement was created
- no local customer review readiness wrapper was created
- no internal package import is used
- customer name is visible
- review type or review date is visible when relevant
- customer objective is visible when it affects interpretation
- proof readiness is visible
- recommendation readiness is visible when recommendations affect the review
- risk status is visible when risks affect the review
- action readiness is visible when preparation work affects the review
- validation status is visible before customer use
- source context is visible when it affects trust
- the card does not claim AI validation or automatic approval
- the card does not present expected outcomes as proven value
- the card does not present internal proof as customer-ready proof without
  validation
- the card does not contain detailed proof narrative
- the card does not contain recommendation rationale
- the card does not contain assigned actions

---

## Final principle

A `CustomerReviewReadinessCard` should make customer-facing review readiness
visible before the user shares, presents or acts on proof, recommendations,
risks or actions with the customer.
