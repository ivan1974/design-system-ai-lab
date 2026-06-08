# RenewalRiskSummary Guidelines

## Purpose

Use `RenewalRiskSummary` to show renewal context, renewal readiness and risk
signals before a customer renewal discussion.

A renewal risk summary should help the user understand whether the account is
ready for renewal, what proof is missing and which mitigation areas need
attention.

For trust-sensitive renewal screens, it should also make short renewal-level
context visible when it affects interpretation, such as renewal risk reason,
customer objective, proof readiness, validation status or source context.

A renewal risk summary is not a generic card.

A renewal risk summary is not a metric grid.

A renewal risk summary is not an alert list.

A renewal risk summary is not a recommendation rationale.

A renewal risk summary is not a proof maturity explanation.

A renewal risk summary is not a mitigation action plan.

In generated screens, use `RenewalRiskSummary` when renewal timing, value proof,
recommendation review or overdue actions affect the customer decision.

---

## Import

Import `RenewalRiskSummary` from the package root:

```tsx
import { RenewalRiskSummary } from "design-system-ai-lab";
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

Do not import `RenewalRiskSummary` from internal package paths.

Do not recreate `RenewalRiskSummary` locally.

Do not create custom renewal risk wrappers.

Do not manually rebuild renewal context with raw `Card`, `StatusSummary`, `dl`,
`dt`, `dd` or `div` markup when `RenewalRiskSummary` fits the need.

---

## Component role

Use `RenewalRiskSummary` when the user needs to understand renewal context such
as:

- customer name
- renewal date
- renewal window
- plan
- contract reference
- renewal readiness
- value proof status
- recommendations reviewed
- overdue actions
- short renewal status badges
- additional renewal metadata
- renewal risk reason when it affects interpretation
- customer objective when it affects the renewal decision
- proof readiness when it affects renewal confidence
- validation status when renewal content needs review before customer use
- source context when source scope or strength affects trust

It should establish the renewal context before the screen moves into value proof,
metrics, blockers and mitigation actions.

It should stay at the renewal-context level. Use dedicated components for proof
maturity, recommendation rationale, prioritized blockers or assigned mitigation
actions.

---

## Props

Use the component with these props:

```tsx
<RenewalRiskSummary
  customerName="Greenfield Industries"
  renewalDate="Aug 5, 2026"
  renewalWindow="62 days"
  plan="Advanced service plan"
  contract="#CR-2024-441"
  renewalReadiness="Medium"
  valueProofStatus="Incomplete"
  recommendationsReviewed="5 of 12"
  overdueActions="3 high-priority actions"
  renewalRiskReason="Value proof is incomplete and mitigation actions are overdue"
  customerObjective="Confirm service value before renewal decision"
  proofReadiness="Internal proof, not customer-ready"
  validationStatus="Proof review needed"
  sourceContext="Closed service actions from the last 90 days"
  badges={[
    { label: "Renewal watch", tone: "warning" },
    { label: "Value proof incomplete", tone: "danger" },
  ]}
/>
```

Expected props:

```txt
customerName
renewalDate
renewalWindow
plan
contract
renewalReadiness
valueProofStatus
recommendationsReviewed
overdueActions
renewalRiskReason
customerObjective
proofReadiness
validationStatus
sourceContext
badges
extraItems
title
description
className
```

Use `customerName` as the primary customer identifier.

Use `renewalDate` when the exact renewal date is known.

Use `renewalWindow` when timing is better expressed as a countdown or business
window.

Use `plan` for the current service or support plan.

Use `contract` for the relevant agreement reference.

Use `renewalReadiness` to summarize how prepared the account is for renewal.

Use `valueProofStatus` to show whether outcomes are ready to discuss with the
customer.

Use `recommendationsReviewed` to show adoption or review progress.

Use `overdueActions` to show execution risk.

Use `renewalRiskReason` to state the short reason why renewal readiness is at
risk.

Use `customerObjective` when the customer goal affects how renewal risk should
be interpreted.

Use `proofReadiness` for short proof readiness metadata. Use `ValueProofCard`
for proof maturity, proof gaps and customer-ready value evidence.

Use `validationStatus` when renewal content needs review before customer use.

Use `sourceContext` only for concise renewal-level source context when source
scope or strength affects trust.

Use `badges` for short renewal status labels.

Use `extraItems` for additional label/value context that is not covered by the
standard props.

Use `title` and `description` only when the default section framing needs to be
customized.

Use `className` only for layout adjustments, not to redefine the pattern styling.

---

## Required information

`customerName` should always be provided.

A strong `RenewalRiskSummary` should usually include:

- renewal date or renewal window
- renewal readiness
- value proof status
- recommendations reviewed or overdue actions

Good minimum example:

```tsx
<RenewalRiskSummary
  customerName="Greenfield Industries"
  renewalWindow="62 days"
  renewalReadiness="Medium"
  valueProofStatus="Incomplete"
  renewalRiskReason="Value proof is incomplete"
/>
```

Avoid generating a renewal risk summary with only a customer name and no useful
renewal context.

---

## Renewal-level trust context rules

`RenewalRiskSummary` may show concise trust context when it affects renewal
interpretation.

Good renewal-level trust context:

```txt
Renewal risk reason: Value proof is incomplete and actions are overdue
Customer objective: Confirm service value before renewal decision
Proof readiness: Internal proof, not customer-ready
Validation status: Proof review needed
Source context: Closed service actions from the last 90 days
```

Keep this context short.

Do not use `RenewalRiskSummary` to explain detailed proof maturity, proof gaps,
recommendation rationale, expected outcomes or action ownership.

Use `ValueProofCard` for proof maturity and proof gaps.

Use `RecommendationCard` for recommendation rationale.

Use `ActionList` for assigned mitigation work.

---

## Badge rules

Use badges for short renewal status labels.

Good badges:

```txt
Renewal watch
Renewal at risk
On track
Value proof incomplete
Customer-ready
Mitigation needed
Actions overdue
Proof review needed
Internal proof
Needs validation
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
  { label: "Renewal watch", tone: "warning" },
  { label: "Value proof incomplete", tone: "danger" },
  { label: "Mitigation needed", tone: "warning" },
]}
```

Do not use badges as buttons.

Do not write long sentence badges.

Do not duplicate the same information in too many badges and items.

Do not use badges to claim AI validation, automatic approval or proven value.

Use badges for concise renewal state only. Use dedicated patterns when the state
needs evidence, proof explanation or recommendation rationale.

---

## Extra item rules

Use `extraItems` for renewal context that does not have a dedicated prop.

Good extra items:

```txt
Account owner
Last customer review
Next customer meeting
Commercial owner
Risk reason
Decision maker
Customer objective
Mitigation owner
Renewal risk reason
Proof readiness
Validation status
Source context
Decision context
```

Example:

```tsx
<RenewalRiskSummary
  customerName="Greenfield Industries"
  renewalWindow="62 days"
  renewalReadiness="Medium"
  valueProofStatus="Incomplete"
  extraItems={[
    { label: "Next customer meeting", value: "Jun 24, 2026" },
    { label: "Mitigation owner", value: "CSM" },
  ]}
/>
```

Keep extra item values concise.

Prefer dedicated props for repeated renewal-level context. Use `extraItems` for
additional concise context that is specific to the generated screen.

If the value needs a long explanation, use `ValueProofCard`, `AlertCard`,
`ActionCard`, `Card` or supporting text instead.

---

## When to use RenewalRiskSummary

Use `RenewalRiskSummary` for:

- renewal risk review screens
- renewal preparation screens
- customer review screens before renewal
- QBR preparation screens where renewal matters
- mitigation planning screens
- value proof preparation screens linked to renewal
- customer dashboards with renewal exposure
- account review screens with renewal timing
- recommendation review screens where renewal risk affects prioritization
- trust-sensitive renewal screens where proof readiness, validation status or source context matters

---

## When not to use RenewalRiskSummary

Do not use `RenewalRiskSummary` for:

- generic customer context when `CustomerStatusCard` is more appropriate
- connectivity coverage detail when `ConnectivityCoverageCard` is more appropriate
- service outcome proof when `ValueProofCard` is more appropriate
- metrics that need standalone emphasis
- alerts or blockers
- mitigation actions
- forms
- generic notes
- long explanations
- renewal content that is not relevant to the screen decision
- recommendation rationale
- proof maturity explanation
- customer-ready proof explanation
- prioritized risks or blockers
- assigned mitigation work
- AI validation claims
- expected outcomes presented as proven value

Use other components instead:

| Need | Use |
| --- | --- |
| Customer context | `CustomerStatusCard` |
| Connectivity coverage detail | `ConnectivityCoverageCard` |
| Value proof | `ValueProofCard` |
| Proof maturity and proof gaps | `ValueProofCard` |
| Generic structured context | `StatusSummary` |
| Single metric | `MetricCard` |
| Group metrics | `MetricGrid` |
| Renewal blocker or risk | `AlertCard` |
| Recommendation rationale | `RecommendationCard` |
| Group blockers or risks | `PriorityList` |
| Mitigation action | `ActionCard` |
| Group mitigation actions | `ActionList` |
| Create an action | `CreateActionDialog` |
| Generic grouped explanation | `Card` |
| Editable form field | `Field` |

---

## Placement rules

Place `RenewalRiskSummary` near the top of renewal-centered screens,
immediately after `PageHeader`.

Recommended renewal risk review structure:

```txt
PageHeader
→ RenewalRiskSummary
→ ValueProofCard
→ ConnectivityCoverageCard when coverage affects renewal confidence
→ MetricGrid with MetricCard items
→ PriorityList with AlertCard items
→ ActionList with ActionCard items
```

Recommended customer review structure when customer context is needed first:

```txt
PageHeader
→ CustomerStatusCard
→ RenewalRiskSummary
→ ValueProofCard
→ PriorityList with AlertCard items
→ ActionList with ActionCard items
```

Recommended recommendation review structure when renewal affects priority:

```txt
PageHeader
→ CustomerStatusCard when broader customer context is needed
→ RenewalRiskSummary for renewal context
→ ValueProofCard when proof maturity affects renewal confidence
→ RecommendationCard for recommendation rationale
→ ActionList with mitigation or proof follow-up actions
```

Do not place renewal mitigation actions before the user understands the renewal
risk context.

Do not bury renewal context when the screen is about renewal readiness.

---

## Relationship with CustomerStatusCard

Use `CustomerStatusCard` for overall customer context.

Use `RenewalRiskSummary` for renewal-specific context.

Good flow:

```txt
CustomerStatusCard
→ RenewalRiskSummary
→ ValueProofCard
→ PriorityList with renewal blockers
→ ActionList with mitigation actions
```

Avoid duplicating all customer details inside `RenewalRiskSummary` when
`CustomerStatusCard` already provides them.

Use `customerName` in `RenewalRiskSummary` because renewal risk is customer-bound,
but avoid repeating plan, contract or owner details unnecessarily if they already
appear directly above.

---

## Relationship with ValueProofCard

Renewal risk is strongly linked to whether value can be proven before the
customer discussion.

Use `RenewalRiskSummary` for renewal timing and readiness.

Use `ValueProofCard` for customer-ready proof points and outcomes.

Good flow:

```txt
RenewalRiskSummary
→ ValueProofCard
→ PriorityList with value proof gaps
→ ActionList with mitigation actions
```

Do not use `RenewalRiskSummary` to list detailed proof points.

Use `ValueProofCard` for that.

---

## Relationship with RecommendationCard

Use `RenewalRiskSummary` to establish renewal timing, readiness and renewal risk
context.

Use `RecommendationCard` to explain why a renewal mitigation, proof follow-up or
customer-ready recommendation should be made.

Example:

```txt
RenewalRiskSummary: renewal window, readiness, proof status, overdue actions
RecommendationCard: Prepare customer-ready proof before renewal discussion
```

Do not put recommendation rationale, priority, readiness or evidence
interpretation inside `RenewalRiskSummary`.

---

## Relationship with ConnectivityCoverageCard

Connectivity gaps can weaken renewal confidence and service proof.

Use `ConnectivityCoverageCard` when monitoring coverage affects renewal risk.

Good flow:

```txt
RenewalRiskSummary
→ ValueProofCard
→ ConnectivityCoverageCard
→ PriorityList with blockers
→ ActionList with mitigation actions
```

Do not repeat the same coverage information in both the renewal summary and the
connectivity card unless it is necessary for clarity.

---

## Relationship with MetricGrid

Use `RenewalRiskSummary` to establish renewal context.

Use `MetricGrid` to show measurable renewal-related signals.

Example:

```txt
RenewalRiskSummary: renewal window, readiness, value proof status
MetricGrid: recommendations reviewed, overdue actions, connected equipment
```

Do not place headline metrics inside `RenewalRiskSummary` when they need decision
emphasis.

Use `MetricCard` and `MetricGrid` instead.

---

## Relationship with PriorityList and ActionList

Use `RenewalRiskSummary` before renewal blockers and mitigation actions.

Use `PriorityList` for renewal blockers or risks.

Use `ActionList` for assigned mitigation actions.

Recommended flow:

```txt
RenewalRiskSummary
→ PriorityList with AlertCard items
→ ActionList with ActionCard items
```

Do not place `AlertCard` or `ActionCard` items inside `RenewalRiskSummary`.

---

## Good example

```tsx
<RenewalRiskSummary
  customerName="Greenfield Industries"
  renewalDate="Aug 5, 2026"
  renewalWindow="62 days"
  plan="Advanced service plan"
  contract="#CR-2024-441"
  renewalReadiness="Medium"
  valueProofStatus="Incomplete"
  recommendationsReviewed="5 of 12"
  overdueActions="3 high-priority actions"
  renewalRiskReason="Value proof is incomplete and mitigation actions are overdue"
  customerObjective="Confirm service value before renewal decision"
  proofReadiness="Internal proof, not customer-ready"
  validationStatus="Proof review needed"
  sourceContext="Closed service actions from the last 90 days"
  badges={[
    { label: "Renewal watch", tone: "warning" },
    { label: "Value proof incomplete", tone: "danger" },
  ]}
/>
```

This is good because:

- the customer is clearly identified
- renewal timing is visible
- readiness is explicit
- value proof status is visible
- recommendation review progress is shown
- overdue actions expose execution risk
- proof readiness and validation context are visible without replacing `ValueProofCard`
- badges summarize renewal risk context

---

## Renewal risk review example

```tsx
<PageHeader
  title="Renewal risk review"
  description="Review renewal exposure, value proof gaps and mitigation actions before the customer discussion."
  actions={<CreateActionDialog />}
/>

<RenewalRiskSummary
  customerName="Greenfield Industries"
  renewalDate="Aug 5, 2026"
  renewalWindow="62 days"
  renewalReadiness="Medium"
  valueProofStatus="Incomplete"
  recommendationsReviewed="5 of 12"
  overdueActions="3 high-priority actions"
  renewalRiskReason="Value proof is incomplete and mitigation actions are overdue"
  proofReadiness="Internal proof, not customer-ready"
  validationStatus="Proof review needed"
/>
```

---

## Trust-sensitive renewal context example

```tsx
<RenewalRiskSummary
  customerName="Greenfield Industries"
  renewalDate="Aug 5, 2026"
  renewalWindow="62 days"
  plan="Advanced service plan"
  contract="#CR-2024-441"
  renewalReadiness="Medium"
  valueProofStatus="Incomplete"
  recommendationsReviewed="5 of 12"
  overdueActions="3 high-priority actions"
  renewalRiskReason="Value proof is incomplete and mitigation actions are overdue"
  customerObjective="Confirm service value before renewal decision"
  proofReadiness="Internal proof, not customer-ready"
  validationStatus="Proof review needed"
  sourceContext="Closed service actions from the last 90 days"
  badges={[
    { label: "Renewal watch", tone: "warning" },
    { label: "Proof review needed", tone: "warning" },
  ]}
/>
```

This is good because:

- renewal-level trust context is visible
- proof readiness is concise
- validation status is explicit
- detailed proof maturity remains in `ValueProofCard`
- recommendation rationale remains in `RecommendationCard`

---

## Bad examples

Do not manually recreate the renewal risk section:

```tsx
<Card title="Renewal status">
  <dl>
    <div>
      <dt>Renewal window</dt>
      <dd>62 days</dd>
    </div>
  </dl>
</Card>
```

Use `RenewalRiskSummary` instead:

```tsx
<RenewalRiskSummary
  customerName="Greenfield Industries"
  renewalWindow="62 days"
  renewalReadiness="Medium"
  valueProofStatus="Incomplete"
/>
```

Do not use the pattern with no useful renewal context:

```tsx
<RenewalRiskSummary customerName="Greenfield Industries" />
```

Add the renewal information needed for decision-making.

Do not place alerts inside the renewal risk summary:

```tsx
<RenewalRiskSummary customerName="Greenfield Industries">
  <AlertCard ... />
</RenewalRiskSummary>
```

Use `PriorityList` after the summary instead.

Do not use renewal summary to claim AI validation or proven value:

```tsx
<RenewalRiskSummary
  customerName="Greenfield Industries"
  renewalWindow="62 days"
  valueProofStatus="Proven automatically"
  badges={[{ label: "AI validated", tone: "success" }]}
/>
```

Use source-aware and validation-aware wording, and use dedicated proof or
recommendation patterns when explanation is needed.

---

## Content quality rules

A renewal risk summary should answer:

1. Which customer is at renewal risk or under renewal review?
2. How soon is the renewal?
3. How ready is the account for renewal?
4. Is value proof customer-ready?
5. Why is renewal readiness at risk?
6. Are recommendations or actions creating execution risk?
7. What short proof, source or validation context affects trust?
8. What short status labels affect interpretation?

If the summary does not answer these questions, add the missing context or use a
more appropriate component.

---

## Anti-patterns

Do not generate:

- manually rebuilt renewal risk summaries
- generic `Card` or `StatusSummary` replacements when `RenewalRiskSummary` fits
- renewal summaries with only a customer name
- renewal summaries overloaded with unrelated metrics
- renewal summaries containing alerts
- renewal summaries containing actions
- renewal summaries containing form fields
- detailed proof point lists that belong in `ValueProofCard`
- long values that should be explanatory text
- vague badges such as `Info` or `Status`
- custom renewal risk components
- local renewal risk implementations
- local renewal risk wrappers
- internal imports from package files
- renewal summaries that hide renewal risk reason when it affects interpretation
- renewal summaries that use AI validation claims
- renewal summaries that present expected outcomes as proven value
- renewal summaries that present internal proof as customer-ready proof without validation
- renewal summaries that contain recommendation rationale that belongs in `RecommendationCard`
- renewal summaries that contain proof maturity explanation that belongs in `ValueProofCard`
- renewal summaries that contain assigned mitigation work that belongs in `ActionList`

---

## Review checklist

After generation, verify:

- `RenewalRiskSummary` is imported from `design-system-ai-lab`
- no local renewal risk replacement was created
- no local renewal risk wrapper was created
- no internal package import is used
- `customerName` is provided
- renewal date or renewal window is provided when relevant
- renewal readiness is clear
- value proof status is clear when renewal confidence depends on proof
- recommendations reviewed or overdue actions are provided when relevant
- badges are short and meaningful when used
- extra items are concise when used
- renewal risk reason is visible when it affects interpretation
- proof readiness, validation status or source context are concise when used
- renewal summary does not claim AI validation or automatic approval
- renewal summary does not present expected outcomes as proven value
- renewal summary does not present internal proof as customer-ready proof without validation
- the summary appears near the top of renewal-centered screens
- `ValueProofCard` is used for detailed value proof content
- `PriorityList` is used for renewal blockers after the summary
- `ActionList` is used for mitigation actions after the summary
- the summary does not contain alerts, actions or form fields
- the summary does not contain recommendation rationale
- the summary does not replace proof maturity or mitigation action patterns
- `StatusSummary` is not used to recreate renewal risk context
- the summary helps the user understand renewal readiness before deciding what to do next

---

## Final principle

A `RenewalRiskSummary` should make renewal readiness, renewal risk and short
trust context visible before the user reviews proof gaps, recommendations,
blockers or mitigation actions.

If renewal is central to the screen decision, use this pattern before rebuilding
renewal context manually.
