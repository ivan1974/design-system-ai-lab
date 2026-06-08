# ValueProofCard Guidelines

## Purpose

Use `ValueProofCard` to show customer-ready proof points and service outcomes.

A value proof card should help the user explain what value has been delivered,
what proof is available and what still needs to be prepared before a customer
review, QBR or renewal discussion.

It should distinguish customer-ready proof from internal proof, expected
outcomes, proof gaps and proof that still needs validation.

A value proof card is not a generic card.

A value proof card is not a metric grid.

A value proof card is not an alert list.

A value proof card is not a recommendation rationale.

A value proof card is not an action plan.

A value proof card is not a place to claim AI validation or automatic value
proof.

In generated screens, use `ValueProofCard` when the user needs to turn service
activity, completed actions or operational outcomes into a clear customer value
story.

---

## Import

Import `ValueProofCard` from the package root:

```tsx
import { ValueProofCard } from "design-system-ai-lab";
```

If other screen components are needed, import them from the same package root:

```tsx
import {
  ActionList,
  MetricGrid,
  PriorityList,
  RenewalRiskSummary,
  ValueProofCard,
} from "design-system-ai-lab";
```

Do not import `ValueProofCard` from internal package paths.

Do not recreate `ValueProofCard` locally.

Do not create custom value proof wrappers.

Do not manually rebuild value proof sections with raw `Card`, `StatusSummary`,
`MetricCard`, `dl`, `dt`, `dd` or `div` markup when `ValueProofCard` fits the
need.

---

## Component role

Use `ValueProofCard` when the user needs to understand or prepare proof of value
such as:

- service outcomes
- completed actions
- avoided risks
- resolved issues
- recommendations delivered
- customer objectives supported
- customer-ready proof status
- proof points for QBR or renewal
- value gaps that still need preparation
- proof readiness
- proof gaps
- source context when it affects proof trust
- validation status when proof needs review before customer use
- expected outcomes that are not yet proven

It should help the user move from operational activity to a customer-ready value
narrative.

It should not overstate value. If proof is internal, partial, expected or not
validated, that limitation should remain visible.

---

## Props

Use the component with these props:

```tsx
<ValueProofCard
  period="Last 90 days"
  customerObjective="Improve service visibility before renewal"
  proofStatus="Customer-ready summary incomplete"
  proofReadiness="Internal proof, not customer-ready"
  validationStatus="Proof review needed"
  sourceContext="Closed service actions from the last 90 days"
  expectedOutcome="Reduced renewal risk after proof consolidation"
  badges={[
    { label: "Value proof incomplete", tone: "warning" },
    { label: "Renewal support needed", tone: "danger" },
  ]}
  proofPoints={[
    {
      label: "Closed actions",
      value: "12 service actions closed, including 3 high-priority actions linked to monitoring coverage.",
    },
    {
      label: "Resolved risks",
      value: "Two recurring connectivity issues were resolved before they affected the customer review.",
    },
  ]}
/>
```

Expected props:

```txt
title
description
period
customerObjective
proofStatus
proofReadiness
validationStatus
sourceContext
expectedOutcome
badges
proofPoints
className
```

Use `title` only when the default section title needs to be customized.

Use `description` only when the default section description needs to be
customized.

Use `period` to clarify the time window covered by the proof.

Use `customerObjective` to connect proof to what the customer cares about.

Use `proofStatus` to show whether the proof is ready, incomplete or under
review.

Use `proofReadiness` to distinguish customer-ready proof from internal proof,
draft proof or proof that needs review.

Use `validationStatus` when proof needs review before customer use.

Use `sourceContext` when the source scope, source strength or freshness affects
trust in the proof.

Use `expectedOutcome` only to label an expected value outcome that has not yet
been proven. Do not present expected outcomes as proven value.

Use `badges` for short proof status labels.

Use `proofPoints` for the main value evidence.

Use `className` only for layout adjustments, not to redefine the pattern styling.

---

## Required information

`proofPoints` should always be provided.

A strong `ValueProofCard` should usually include:

- period
- customer objective
- proof status
- proof readiness when proof is not fully customer-ready
- validation status when proof needs review
- source context when it affects trust
- two or more proof points

Good minimum example:

```tsx
<ValueProofCard
  period="Last 90 days"
  customerObjective="Improve service visibility before renewal"
  proofStatus="Draft"
  proofReadiness="Internal proof, not customer-ready"
  validationStatus="Proof review needed"
  proofPoints={[
    {
      label: "Closed actions",
      value: "12 service actions closed during the period.",
    },
    {
      label: "Recommendations reviewed",
      value: "5 of 12 recommendations reviewed with the customer team.",
    },
  ]}
/>
```

Avoid generating a value proof card without concrete proof points.

---

## Proof readiness rules

Proof readiness and proof status should not create false confidence.

Use proof readiness to distinguish:

```txt
Customer-ready proof
Internal proof, not customer-ready
Draft proof
Proof review needed
Expected outcome, not proven
```

Do not present internal proof as customer-ready proof without validation.

Do not present expected outcomes as proven value.

Do not use AI confidence as proof readiness.

If proof is partial, internal, expected or not validated, keep that limitation
visible.

---

## Source and validation rules

Use source and validation context when proof trust depends on where the evidence
comes from or whether it has been reviewed.

Good source and validation context:

```txt
Source context: Closed service actions from the last 90 days
Validation status: Proof review needed
Source strength: Medium
Freshness: Last QBR period
```

Do not use `ValueProofCard` to claim that AI validated proof.

Do not hide source limitations when proof is based on partial data, internal
notes, manual records or unreviewed service activity.

Use `StatusSummary` only for generic source metadata when proof narrative is not
needed.

---

## Proof point rules

Each proof point should include:

- a short label
- a customer-relevant value statement

Good proof point labels:

```txt
Closed actions
Resolved risks
Recommendations delivered
Monitoring coverage improved
Customer-ready outcomes
Avoided escalation
Service continuity
Operational visibility
```

Bad proof point labels:

```txt
Data
Info
Thing
Update
Details
Value
```

Proof point values should explain why the point matters.

Proof points should distinguish delivered value from expected value. When an
outcome is expected but not yet proven, label it as expected.

Proof points should be written in language that could support a customer
discussion.

---

## Badge rules

Use badges for short value proof status labels.

Good badges:

```txt
Customer-ready
Draft
Proof incomplete
Review needed
Renewal support needed
QBR-ready
Outcomes validated
Internal proof
Proof review needed
Expected outcome
Customer-ready proof missing
Source partial
```

Use tones consistently:

```txt
success
warning
danger
neutral
primary
```

Examples:

```tsx
badges={[
  { label: "Proof incomplete", tone: "warning" },
  { label: "Review needed", tone: "warning" },
]}
```

Do not use badges as buttons.

Do not write long sentence badges.

Do not duplicate the same information in too many badges and proof points.

Do not use badges to claim AI validation, automatic approval or proven value.

Use badges for concise proof state only. Use proof points and proof metadata for
the supporting context.

---

## Expected outcome rules

Expected outcomes can be useful, but they are not proof.

Use `expectedOutcome` when the screen needs to show the intended value of a
follow-up action or proof consolidation.

Example:

```txt
Expected outcome: Reduced renewal risk after proof consolidation
```

Do not write expected outcomes as if the value has already been delivered.

Use `ActionCard` or `ActionList` when the expected outcome requires assigned
follow-up work.

---

## When to use ValueProofCard

Use `ValueProofCard` for:

- value proof preparation screens
- renewal risk review screens
- QBR preparation screens
- customer review screens
- service outcome summaries
- renewal mitigation screens
- executive service summaries
- customer-ready value narratives
- screens where completed work must be translated into customer value
- screens where proof readiness affects customer communication
- screens where internal proof must be prepared before customer use
- screens where expected outcomes must be separated from proven value
- trust-sensitive screens where source or validation context affects proof confidence

---

## When not to use ValueProofCard

Do not use `ValueProofCard` for:

- generic customer context when `CustomerStatusCard` is more appropriate
- renewal context when `RenewalRiskSummary` is more appropriate
- connectivity coverage detail when `ConnectivityCoverageCard` is more appropriate
- standalone metrics
- risks or blockers
- action plans
- forms
- generic notes
- raw activity logs
- long reports
- value proof content that is not relevant to the screen decision
- recommendation rationale
- assigned proof preparation work
- prioritized proof blockers without proof narrative
- generic source metadata where `StatusSummary` is enough
- AI validation claims
- expected outcomes presented as proven value

Use other components instead:

| Need | Use |
| --- | --- |
| Customer context | `CustomerStatusCard` |
| Renewal risk context | `RenewalRiskSummary` |
| Connectivity coverage detail | `ConnectivityCoverageCard` |
| Generic structured context | `StatusSummary` |
| Generic source or validation metadata | `StatusSummary` |
| Single metric | `MetricCard` |
| Group metrics | `MetricGrid` |
| Value proof blocker or risk | `AlertCard` |
| Recommendation rationale | `RecommendationCard` |
| Group blockers or risks | `PriorityList` |
| Value proof preparation action | `ActionCard` |
| Group preparation actions | `ActionList` |
| Create an action | `CreateActionDialog` |
| Generic grouped explanation | `Card` |
| Editable form field | `Field` |

---

## Placement rules

Place `ValueProofCard` after the relevant customer or renewal context and before
proof gaps, blockers or mitigation actions.

Recommended renewal risk review structure:

```txt
PageHeader
→ RenewalRiskSummary
→ ValueProofCard
→ ConnectivityCoverageCard when coverage affects proof credibility
→ MetricGrid with MetricCard items
→ PriorityList with AlertCard items
→ ActionList with ActionCard items
```

Recommended QBR preparation structure:

```txt
PageHeader
→ CustomerStatusCard
→ ValueProofCard
→ MetricGrid with MetricCard items
→ PriorityList with AlertCard items
→ ActionList with ActionCard items
```

Recommended recommendation review structure when value proof affects priority:

```txt
PageHeader
→ CustomerStatusCard or RenewalRiskSummary for context
→ ValueProofCard for proof readiness and proof points
→ RecommendationCard for recommendation rationale
→ PriorityList with proof blockers when needed
→ ActionList with proof follow-up actions
```

Do not place value proof actions before the user understands the current proof
status.

Do not bury value proof when the screen is about renewal, QBR or customer-ready
outcomes.

---

## Relationship with RenewalRiskSummary

Renewal risk is strongly linked to whether value can be proven before the
customer discussion.

Use `RenewalRiskSummary` for renewal timing and readiness.

Use `ValueProofCard` for customer-ready proof points and outcomes.

Good flow:

```txt
RenewalRiskSummary
→ ValueProofCard
→ PriorityList with proof gaps
→ ActionList with mitigation actions
```

Do not use `RenewalRiskSummary` to list detailed proof points.

Use `ValueProofCard` for that.

---

## Relationship with CustomerStatusCard

Use `CustomerStatusCard` for overall customer context.

Use `ValueProofCard` for value evidence and service outcomes.

Good flow:

```txt
CustomerStatusCard
→ ValueProofCard
→ PriorityList with value proof gaps
→ ActionList with preparation actions
```

Avoid repeating customer metadata inside `ValueProofCard` when
`CustomerStatusCard` already provides it.

---

## Relationship with ConnectivityCoverageCard

Connectivity coverage can affect value proof credibility.

Use `ConnectivityCoverageCard` when monitoring gaps weaken the proof story or
need recovery before a customer discussion.

Good flow:

```txt
ValueProofCard
→ ConnectivityCoverageCard
→ PriorityList with coverage blockers
→ ActionList with recovery actions
```

Avoid repeating the same coverage numbers in both the value proof and
connectivity sections unless necessary for clarity.

---

## Relationship with RecommendationCard

Use `ValueProofCard` to show proof readiness, proof points and proof gaps.

Use `RecommendationCard` to explain why a recommendation should be made and what
priority or readiness applies.

Example:

```txt
ValueProofCard: Internal proof, not customer-ready
RecommendationCard: Prepare customer-ready proof before renewal discussion
```

Do not put recommendation rationale, priority or customer-readiness decision
logic inside `ValueProofCard`.

---

## Relationship with MetricGrid

Use `MetricGrid` to show a small set of measurable signals.

Use `ValueProofCard` to turn those signals into customer-relevant proof.

Example:

```txt
MetricGrid: Closed actions = 12, Recommendations reviewed = 42%
ValueProofCard: closed actions, resolved risks, recommendations delivered as customer proof points
```

Do not replace `ValueProofCard` with disconnected metrics when the user needs a
customer-ready value narrative.

---

## Relationship with PriorityList and ActionList

Use `ValueProofCard` before proof gaps and preparation actions.

Use `PriorityList` for proof blockers or gaps.

Use `ActionList` for assigned proof preparation or mitigation actions.

Recommended flow:

```txt
ValueProofCard
→ PriorityList with AlertCard items
→ ActionList with ActionCard items
```

Do not place `AlertCard` or `ActionCard` items inside `ValueProofCard`.

---

## Good example

```tsx
<ValueProofCard
  period="Last 90 days"
  customerObjective="Improve service visibility before renewal"
  proofStatus="Customer-ready summary incomplete"
  proofReadiness="Internal proof, not customer-ready"
  validationStatus="Proof review needed"
  sourceContext="Closed service actions from the last 90 days"
  expectedOutcome="Reduced renewal risk after proof consolidation"
  badges={[
    { label: "Proof incomplete", tone: "warning" },
    { label: "Review needed", tone: "warning" },
  ]}
  proofPoints={[
    {
      label: "Closed actions",
      value: "12 service actions closed, including 3 high-priority actions linked to monitoring coverage.",
    },
    {
      label: "Resolved risks",
      value: "Two recurring connectivity issues were resolved before they affected the customer review.",
    },
    {
      label: "Recommendations delivered",
      value: "5 recommendations were reviewed with the customer team and linked to their service objectives.",
    },
  ]}
/>
```

This is good because:

- the time period is clear
- the proof is connected to a customer objective
- readiness status is visible
- proof readiness and validation context are visible
- expected outcome is not presented as proven value
- proof points are customer-relevant
- badges summarize the proof state

---

## QBR preparation example

```tsx
<ValueProofCard
  period="Current quarter"
  customerObjective="Show service progress and clarify next priorities"
  proofStatus="QBR-ready draft"
  proofReadiness="Draft proof, not final customer-ready proof"
  validationStatus="Review before customer use"
  badges={[
    { label: "QBR draft", tone: "primary" },
    { label: "Review needed", tone: "warning" },
  ]}
  proofPoints={[
    {
      label: "Service continuity",
      value: "Critical alerts were reviewed and linked to follow-up actions before the customer review.",
    },
    {
      label: "Operational visibility",
      value: "Monitoring coverage and disconnected assets are now visible for the customer discussion.",
    },
  ]}
/>
```

---

## Trust-sensitive proof example

```tsx
<ValueProofCard
  period="Last 90 days"
  customerObjective="Confirm service value before renewal decision"
  proofStatus="Customer-ready summary incomplete"
  proofReadiness="Internal proof, not customer-ready"
  validationStatus="Proof review needed"
  sourceContext="Closed service actions from the last 90 days"
  expectedOutcome="Reduced renewal risk after proof consolidation"
  badges={[
    { label: "Proof review needed", tone: "warning" },
    { label: "Internal proof", tone: "warning" },
  ]}
  proofPoints={[
    {
      label: "Closed actions",
      value: "12 service actions closed during the period, pending customer-ready synthesis.",
    },
    {
      label: "Expected renewal impact",
      value: "Expected to support renewal confidence after proof review; not yet validated as proven value.",
    },
  ]}
/>
```

This is good because:

- proof readiness is explicit
- validation status is visible
- expected outcome is clearly labeled as expected
- customer-ready proof is not claimed before review

---

## Bad examples

Do not manually recreate the value proof section:

```tsx
<Card title="Value proof">
  <div>
    <p>Closed actions</p>
    <p>12 actions closed.</p>
  </div>
</Card>
```

Use `ValueProofCard` instead:

```tsx
<ValueProofCard
  period="Last 90 days"
  customerObjective="Improve service visibility before renewal"
  proofStatus="Draft"
  proofPoints={[
    {
      label: "Closed actions",
      value: "12 service actions closed during the period.",
    },
  ]}
/>
```

Do not use the pattern with no proof points:

```tsx
<ValueProofCard proofPoints={[]} />
```

Add concrete proof points that support the customer discussion.

Do not place alerts inside the value proof card:

```tsx
<ValueProofCard proofPoints={[...]}>
  <AlertCard ... />
</ValueProofCard>
```

Use `PriorityList` after the card instead.

Do not use value proof to claim AI validation or automatic proof:

```tsx
<ValueProofCard
  proofStatus="Customer-ready"
  badges={[{ label: "AI validated", tone: "success" }]}
  proofPoints={[
    {
      label: "Value proven",
      value: "AI confirmed that value was delivered.",
    },
  ]}
/>
```

Use reviewed evidence, source-aware wording and validation-aware proof status
instead.

---

## Content quality rules

A value proof card should answer:

1. What period does the proof cover?
2. Which customer objective does the proof support?
3. Is the proof customer-ready, internal, draft or still under review?
4. What source or validation context affects proof trust?
5. What concrete proof points can be discussed?
6. Are there proof gaps that need attention?
7. Are any outcomes expected rather than proven?
8. What should be prepared before the customer discussion?

If the card does not answer these questions, add the missing context or use a
more appropriate component.

---

## Anti-patterns

Do not generate:

- manually rebuilt value proof cards
- generic `Card` or `StatusSummary` replacements when `ValueProofCard` fits
- value proof cards without proof points
- value proof cards with vague proof labels
- proof points that are only raw counts without meaning
- value proof cards overloaded with metrics
- value proof cards containing alerts
- value proof cards containing actions
- value proof cards containing form fields
- long reports that should be separate content
- vague badges such as `Info` or `Status`
- custom value proof components
- local value proof implementations
- local value proof wrappers
- internal imports from package files
- value proof cards that claim AI validation or automatic approval
- value proof cards that present expected outcomes as proven value
- value proof cards that present internal proof as customer-ready proof without validation
- value proof cards that hide source context when source context affects trust
- value proof cards that hide validation status when proof needs review before customer use
- value proof cards that contain recommendation rationale that belongs in `RecommendationCard`
- value proof cards that contain assigned proof preparation work that belongs in `ActionList`

---

## Review checklist

After generation, verify:

- `ValueProofCard` is imported from `design-system-ai-lab`
- no local value proof replacement was created
- no local value proof wrapper was created
- no internal package import is used
- `proofPoints` are provided
- proof point labels are specific
- proof point values explain customer-relevant meaning
- period is provided when timing matters
- customer objective is provided when proof needs business context
- proof status is clear
- proof readiness is visible when proof is not fully customer-ready
- validation status is visible when proof needs review
- source context is visible when it affects proof trust
- expected outcomes are not presented as proven value
- the card appears before proof blockers or preparation actions
- `PriorityList` is used for proof blockers after the card
- `ActionList` is used for proof preparation actions after the card
- the card does not contain alerts, actions or form fields
- the card does not contain recommendation rationale
- the card does not replace assigned proof preparation actions
- `StatusSummary` is not used to recreate value proof
- the card helps the user prepare a customer-ready value story

---

## Final principle

A `ValueProofCard` should turn service activity into customer-relevant proof
without overstating what is customer-ready, validated or proven.
