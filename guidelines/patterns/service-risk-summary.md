# ServiceRiskSummary Guidelines

## Purpose

Use `ServiceRiskSummary` to summarize the service risk context before the user
reviews detailed risks, blockers, recommendations or actions.

A service risk summary should help the user understand the main service risk,
affected scope, customer impact, service impact, source context, validation
status and recommended review direction before moving into `PriorityList`,
`RecommendationReviewPanel` or `ActionList`.

It should make the risk understandable without turning the summary into a full
alert list or action plan.

A service risk summary is not an alert card.

A service risk summary is not a priority list.

A service risk summary is not a recommendation rationale.

A service risk summary is not an action plan.

A service risk summary is not a place to claim AI validation, automatic
approval or confirmed customer impact without evidence.

In generated screens, use `ServiceRiskSummary` when the user needs a concise
service risk overview before reviewing detailed alerts, blockers,
recommendations or assigned actions.

---

## Import

Import `ServiceRiskSummary` from the package root:

```tsx
import { ServiceRiskSummary } from "design-system-ai-lab";
```

Do not import `ServiceRiskSummary` from internal package paths.

Do not recreate `ServiceRiskSummary` locally.

Do not create custom service risk summary wrappers.

---

## Component role

Use `ServiceRiskSummary` when the user needs to understand:

- what the main service risk is
- what severity applies
- which customer, site, asset group or service scope is affected
- what customer impact is possible or observed
- what service impact is possible or observed
- what source context supports the risk view
- whether the source is complete, partial, inferred or needs review
- how fresh the risk context is
- what validation status applies before customer use
- what high-level review direction should follow

It should establish service risk context before the screen moves into detailed
risks, recommendations or actions.

It should not replace the components that carry those details.

---

## Props

Use the component with these props:

```tsx
<ServiceRiskSummary
  riskLevel="critical"
  riskSummary="Critical assets are no longer monitored before the renewal discussion."
  affectedScope="Critical Power > UPS Room A"
  customerImpact="Customer visibility is reduced for critical power assets."
  serviceImpact="Remote monitoring and proactive support are limited."
  sourceContext="Monitoring platform and known installed base"
  sourceStrength="partial"
  freshness="Last update 18 hours ago"
  validationStatus="Review before customer communication"
  recommendedReview="Review connectivity recovery and customer communication before QBR."
  badges={[
    { label: "Critical service risk", tone: "danger" },
    { label: "Review needed", tone: "warning" },
  ]}
/>
```

Expected props:

```txt
title
description
riskLevel
riskSummary
affectedScope
customerImpact
serviceImpact
sourceContext
sourceStrength
freshness
validationStatus
recommendedReview
badges
extraItems
```

Use `riskLevel` to summarize severity.

Use `riskSummary` to describe the main service risk.

Use `affectedScope` to identify the site, asset group, system, service area or
customer scope affected.

Use `customerImpact` to describe observed or possible customer impact. Label it
carefully when the impact is expected rather than proven.

Use `serviceImpact` to describe operational or service delivery impact.

Use `sourceContext` to identify the source behind the risk summary.

Use `sourceStrength` to show whether the source is complete, partial, mixed,
manual, inferred or needs review.

Use `freshness` when timing affects risk interpretation.

Use `validationStatus` when the risk context needs review before customer use.

Use `recommendedReview` to suggest the next review focus, not to assign work.

Use `badges` for short risk status labels.

Use `extraItems` for additional concise context specific to the generated
screen.

---

## Risk level rules

Use these risk levels:

```txt
critical
warning
info
```

Use `critical` for risks that require immediate review, customer communication,
escalation or service recovery.

Use `warning` for risks that need review before they become critical or before
a customer touchpoint.

Use `info` for contextual risks or early signals that should be visible but are
not urgent.

Do not use severity to exaggerate risk.

Do not use `critical` when the source is weak and the impact is only speculative
unless the uncertainty remains visible.

---

## Source and validation rules

Service risk should be source-aware.

Good source and validation context:

```txt
Source context: Monitoring platform and known installed base
Source strength: Partial
Freshness: Last update 18 hours ago
Validation status: Review before customer communication
```

Show source strength when any of these apply:

```txt
source is partial
source combines multiple systems
source includes manual records
source excludes non-connected assets
source is inferred from limited Health signals
source needs expert review
```

Do not use AI confidence as source context.

Do not claim AI validation or automatic approval.

Do not hide validation status when the summary could influence customer,
contract, service, safety, compliance, renewal, value proof, asset intelligence
or modernization decisions.

---

## Customer and service impact rules

Distinguish observed impact from possible impact.

Good impact language:

```txt
Customer visibility is reduced for critical power assets.
Remote monitoring and proactive support are limited.
Possible renewal confidence impact if not addressed before QBR.
Expected customer communication risk if visibility limits are not explained.
```

Avoid impact language:

```txt
Customer churn confirmed.
Value loss proven automatically.
AI confirmed business impact.
Service failure guaranteed.
```

Do not present expected outcomes or possible impacts as proven value or
confirmed business impact.

---

## Recommended review rules

Use `recommendedReview` to guide what should be reviewed next.

Good recommended review values:

```txt
Review connectivity recovery and customer communication before QBR.
Review source evidence before customer update.
Review proof gaps and mitigation actions before renewal discussion.
Validate asset risk with CompanyName expert before customer use.
```

Avoid recommended review values:

```txt
Approve the recommendation.
Confirm AI output.
Validate automatically.
Mark risk as resolved.
```

Use `ActionList` when the next step needs owner, due date and priority.

Use `RecommendationCard` or `RecommendationReviewPanel` when the next step
needs rationale, evidence, readiness or priority.

---

## When to use ServiceRiskSummary

Use `ServiceRiskSummary` for:

- service risk overview screens
- customer monitoring screens before `PriorityList`
- connectivity risk screens before detailed blockers
- renewal or QBR screens where service risk affects readiness
- asset intelligence screens where service risk affects prioritization
- screens where source, validation or freshness affects risk interpretation
- trust-sensitive risk summaries before customer communication

---

## When not to use ServiceRiskSummary

Do not use `ServiceRiskSummary` for:

- detailed alert lists
- individual risk cards
- recommendation rationale
- assigned actions
- proof maturity explanation
- customer review readiness
- connectivity coverage detail
- asset intelligence context without service risk synthesis
- AI validation or automatic approval flows

Use other components instead:

| Need | Use |
| --- | --- |
| Individual risk or blocker | `AlertCard` |
| Group risks or blockers | `PriorityList` |
| Recommendation rationale | `RecommendationCard` |
| Recommendation review | `RecommendationReviewPanel` |
| Assigned internal action | `ActionCard` |
| Group assigned actions | `ActionList` |
| Customer context | `CustomerStatusCard` |
| Customer review readiness | `CustomerReviewReadinessCard` |
| Asset intelligence context | `AssetIntelligenceSummary` |
| Connectivity coverage and visibility limits | `ConnectivityCoverageCard` |
| Value proof and proof gaps | `ValueProofCard` |
| Generic source or validation metadata | `StatusSummary` |

---

## Placement rules

Place `ServiceRiskSummary` before `PriorityList` when risks need detailed
review.

Recommended customer monitoring structure:

```txt
PageHeader
→ CustomerStatusCard for customer context
→ ConnectivityCoverageCard when coverage affects visibility
→ ServiceRiskSummary for service risk overview
→ PriorityList with AlertCard items
→ RecommendationReviewPanel when recommendations need review
→ ActionList with assigned follow-up actions
```

Recommended renewal or QBR structure:

```txt
PageHeader
→ CustomerStatusCard or RenewalRiskSummary
→ CustomerReviewReadinessCard when discussion readiness matters
→ ServiceRiskSummary when service risk affects the review
→ ValueProofCard when proof readiness matters
→ PriorityList with blockers
→ ActionList with mitigation actions
```

Do not place detailed alerts before the user understands the service risk
summary when the screen is complex.

Do not place assigned actions before the user understands service risk,
source context and validation status.

---

## Relationship with PriorityList and AlertCard

Use `ServiceRiskSummary` to summarize the risk context.

Use `PriorityList` to group detailed risk or blocker cards.

Use `AlertCard` for individual risk or blocker details.

Example:

```txt
ServiceRiskSummary: critical monitoring gap affects customer visibility
PriorityList: critical asset disconnected, proof gap, overdue communication
AlertCard: critical equipment no longer monitored
```

Do not put the full alert list inside `ServiceRiskSummary`.

---

## Relationship with RecommendationReviewPanel

Use `ServiceRiskSummary` to summarize the service risk that may drive
recommendations.

Use `RecommendationReviewPanel` to review the recommendations that respond to
the risk.

Example:

```txt
ServiceRiskSummary: service risk requires review before QBR
RecommendationReviewPanel: recommendations requiring source and proof review
```

Do not put recommendation rationale inside `ServiceRiskSummary`.

---

## Relationship with CustomerReviewReadinessCard

Use `CustomerReviewReadinessCard` to summarize whether the customer discussion
is ready.

Use `ServiceRiskSummary` to summarize the service risk affecting that
discussion.

Example:

```txt
CustomerReviewReadinessCard: review is not customer-ready
ServiceRiskSummary: open service risk affects review readiness
```

Do not use `ServiceRiskSummary` to replace customer review readiness.

---

## Relationship with AssetIntelligenceSummary

Use `AssetIntelligenceSummary` to distinguish asset source context, Health
signals and Intelligence interpretation.

Use `ServiceRiskSummary` to summarize the service risk that follows from or is
related to that context.

Example:

```txt
AssetIntelligenceSummary: Health visibility partial and expert review needed
ServiceRiskSummary: partial visibility creates customer communication risk
```

Do not present Intelligence interpretation as service risk fact without source
and validation context.

---

## Good example

```tsx
<ServiceRiskSummary
  riskLevel="critical"
  riskSummary="Critical assets are no longer monitored before the renewal discussion."
  affectedScope="Critical Power > UPS Room A"
  customerImpact="Customer visibility is reduced for critical power assets."
  serviceImpact="Remote monitoring and proactive support are limited."
  sourceContext="Monitoring platform and known installed base"
  sourceStrength="partial"
  freshness="Last update 18 hours ago"
  validationStatus="Review before customer communication"
  recommendedReview="Review connectivity recovery and customer communication before QBR."
  badges={[
    { label: "Critical service risk", tone: "danger" },
    { label: "Review needed", tone: "warning" },
  ]}
/>
```

This is good because:

- risk level is visible
- affected scope is explicit
- customer and service impact are separated
- source strength is visible
- validation status remains visible
- the recommended review does not assign work or approve a recommendation

---

## Warning example

```tsx
<ServiceRiskSummary
  riskLevel="warning"
  riskSummary="Service proof is incomplete before the customer review."
  affectedScope="Renewal preparation"
  customerImpact="The customer may not see completed service outcomes clearly."
  serviceImpact="CSM needs to consolidate proof before the review."
  sourceContext="Closed service actions from the last 90 days"
  sourceStrength="medium"
  validationStatus="Proof review needed"
  recommendedReview="Review proof gaps and assigned follow-up actions before renewal discussion."
  badges={[
    { label: "Proof review needed", tone: "warning" },
    { label: "Renewal watch", tone: "warning" },
  ]}
/>
```

---

## Bad example

Do not use service risk summary to claim AI validation or proven impact:

```tsx
<ServiceRiskSummary
  riskLevel="critical"
  riskSummary="AI confirmed that the customer will churn."
  customerImpact="Churn proven automatically."
  validationStatus="AI validated"
  badges={[{ label: "AI validated", tone: "success" }]}
/>
```

This is weak because:

- AI validation is claimed
- possible impact is presented as proven outcome
- human validation is bypassed
- source context is missing
- the summary overstates risk certainty

---

## Content quality rules

A service risk summary should answer:

1. What is the main service risk?
2. How severe is it?
3. What scope is affected?
4. What customer impact is observed or possible?
5. What service impact is observed or possible?
6. What source context and source strength support the summary?
7. How fresh is the context when freshness matters?
8. What validation status applies before customer use?
9. What should be reviewed next?

If the summary does not answer these questions, add the missing context or use a
more appropriate component.

---

## Anti-patterns

Do not generate:

- manually rebuilt service risk summaries
- local service risk summary components
- local service risk summary wrappers
- internal imports from package files
- service risk summaries without a clear risk summary
- service risk summaries that hide affected scope when scope matters
- service risk summaries that hide source context when source affects trust
- service risk summaries that hide validation status when customer use is possible
- service risk summaries that claim AI validation or automatic approval
- service risk summaries that present expected impact as proven value
- service risk summaries that present Intelligence interpretation as source-system truth
- service risk summaries that replace `PriorityList`
- service risk summaries that replace `RecommendationCard`
- service risk summaries that replace assigned actions

---

## Review checklist

After generation, verify:

- `ServiceRiskSummary` is imported from `design-system-ai-lab`
- no local service risk summary replacement was created
- no local service risk summary wrapper was created
- no internal package import is used
- risk level is visible
- risk summary is clear
- affected scope is visible when it matters
- customer impact and service impact are separated when both matter
- source context is visible when it affects trust
- source strength is visible when the source is partial, mixed, inferred or manual
- freshness is visible when timing affects risk interpretation
- validation status is visible when customer use is possible
- expected impact is not presented as proven value
- the summary does not claim AI validation or automatic approval
- the summary does not replace detailed risks, recommendation rationale or assigned actions

---

## Final principle

A `ServiceRiskSummary` should make the main service risk, affected scope, source
limits, validation needs and next review focus visible before the user reviews
detailed blockers, recommendations or actions.
