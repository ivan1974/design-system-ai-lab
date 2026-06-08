# CustomerStatusCard Guidelines

## Purpose

Use `CustomerStatusCard` to show the essential customer context at the top of a
customer-facing or customer-related screen.

A customer status card should help the user quickly understand who the customer
is, what service context applies and what coverage or ownership information
matters before reviewing metrics, risks or actions.

For trust-sensitive screens, the customer status card may also show concise
customer-level context that affects interpretation, such as account objective,
source scope, validation status, renewal readiness or customer-facing proof
readiness.

A customer status card is not a generic card.

A customer status card is not a metric grid.

A customer status card is not an action plan.

A customer status card is not a recommendation rationale.

A customer status card is not a proof maturity explanation.

A customer status card is not a connectivity coverage detail view.

In generated screens, use `CustomerStatusCard` before `MetricGrid`,
`PriorityList` and `ActionList` when the screen is centered on a customer.

---

## Import

Import `CustomerStatusCard` from the package root:

```tsx
import { CustomerStatusCard } from "design-system-ai-lab";
```

If other screen components are needed, import them from the same package root:

```tsx
import {
  ActionList,
  CustomerStatusCard,
  MetricGrid,
  PageHeader,
  PriorityList,
} from "design-system-ai-lab";
```

Do not import `CustomerStatusCard` from internal package paths.

Do not recreate `CustomerStatusCard` locally.

Do not create custom customer status wrappers.

Do not manually rebuild customer context with raw `Card`, `StatusSummary`, `dl`,
`dt`, `dd` or `div` markup when `CustomerStatusCard` fits the need.

---

## Component role

Use `CustomerStatusCard` when the user needs to understand customer context such
as:

- customer name
- service plan
- contract reference
- owner or CSM
- renewal date
- assets covered
- coverage status
- short customer status badges
- additional customer metadata
- customer objective when it affects the screen decision
- customer segment or region when relevant
- source or validation context when it affects trust
- renewal or proof readiness when it affects interpretation

It should establish the business context before the screen moves into metrics,
priority risks and recommended actions.

It should stay at the customer-context level. Use more specific patterns for
coverage detail, proof maturity, recommendation rationale, prioritized risks or
assigned actions.

---

## Props

Use the component with these props:

```tsx
<CustomerStatusCard
  customerName="Greenfield Industries"
  plan="Advanced service plan"
  contract="#CR-2024-441"
  csm="Sarah Moreau"
  renewalDate="Aug 5, 2026"
  assetsCovered="25 assets — 3 sites"
  coverage="68% connected"
  badges={[
    { label: "Active plan", tone: "primary" },
    { label: "Connectivity partial", tone: "warning" },
    { label: "Renewal in 62 days", tone: "neutral" },
    { label: "Review needed", tone: "warning" },
  ]}
/>
```

Expected props:

```txt
customerName
description
plan
contract
csm
renewalDate
assetsCovered
coverage
sourceContext
validationStatus
proofReadiness
customerObjective
badges
extraItems
title
className
```

Use `customerName` as the primary required customer identifier.

Use `plan` for the current service or support plan.

Use `contract` for the relevant contract, subscription or agreement reference.

Use `csm` for the accountable owner, customer success contact or service owner.

Use `renewalDate` when renewal timing matters.

Use `assetsCovered` to show service scope.

Use `coverage` to show a concise coverage status.

Use `sourceContext` only for concise customer-level source context when it
affects interpretation.

Use `validationStatus` when customer-level context needs review before customer
use.

Use `proofReadiness` only for short customer-level proof readiness metadata. Use
`ValueProofCard` for proof maturity and proof gaps.

Use `customerObjective` when the customer goal affects how the rest of the
screen should be interpreted.

Use `badges` for short customer status labels.

Use `extraItems` for additional label/value context that is not covered by the
standard props.

Use `title` only when the section title needs to be customized.

Use `className` only for layout adjustments, not to redefine the pattern styling.

---

## Required information

`customerName` should always be provided.

At least two or three additional context props should usually be provided.

Good minimum example:

```tsx
<CustomerStatusCard
  customerName="Greenfield Industries"
  plan="Advanced service plan"
  csm="Sarah Moreau"
  coverage="68% connected"
  customerObjective="Improve service visibility before renewal"
/>
```

Avoid generating a customer status card with only a customer name and no useful
context.

---

## Customer-level trust context rules

`CustomerStatusCard` may show concise trust context when it affects how the user
interprets the screen.

Good customer-level trust context:

```txt
Customer objective: Improve service visibility before renewal
Source context: Schneider monitored assets only
Validation status: Review before customer use
Proof readiness: Internal proof, not customer-ready
```

Keep this context short.

Do not use `CustomerStatusCard` to explain recommendation rationale, proof gaps,
expected outcomes, asset intelligence or connectivity coverage logic.

Use `RecommendationCard` for recommendation rationale.

Use `ValueProofCard` for proof maturity and proof gaps.

Use `ConnectivityCoverageCard` for coverage detail and visibility limits.

---

## Badge rules

Use badges for short customer status labels.

Good badges:

```txt
Active plan
Connectivity partial
Renewal watch
Customer-ready
Review needed
Coverage at risk
Source partial
Human validation needed
Proof review needed
Internal proof
```

Use tones consistently:

```txt
primary
success
warning
danger
neutral
```

Examples:

```tsx
badges={[
  { label: "Active plan", tone: "primary" },
  { label: "Connectivity partial", tone: "warning" },
  { label: "Review needed", tone: "warning" },
]}
```

Do not use badges as buttons.

Do not write long sentence badges.

Do not duplicate the same information in too many badges and items.

Do not use badges to claim AI validation, automatic approval or proven value.

Use badges for concise state only. Use dedicated patterns when the status needs
evidence, proof or recommendation rationale.

---

## Extra item rules

Use `extraItems` for customer context that does not have a dedicated prop.

Good extra items:

```txt
Region
Account segment
Last customer contact
Main site
Installed base status
Customer objective
Service owner
Source context
Validation status
Proof readiness
Decision context
```

Prefer dedicated props for repeated customer-level context. Use `extraItems` for
additional concise context that is specific to the generated screen.

Keep extra item values concise.

Prefer dedicated props for repeated customer-level context. Use `extraItems` for
additional concise context that is specific to the generated screen.

If the value needs a long explanation, use `Card`, `ValueProofCard`, `AlertCard`
or supporting text instead.

---

## When to use CustomerStatusCard

Use `CustomerStatusCard` for:

- customer monitoring screens
- customer dashboards
- service review screens
- customer action planning screens
- alert triage screens focused on a customer
- QBR preparation screens
- renewal preparation screens with customer context
- connectivity review screens with customer context
- value proof screens with customer context
- recommendation review screens where customer context affects interpretation
- trust-sensitive screens where customer-level source, validation or proof readiness context matters

---

## When not to use CustomerStatusCard

Do not use `CustomerStatusCard` for:

- generic structured context that is not customer-specific
- renewal risk detail when `RenewalRiskSummary` is more appropriate
- connectivity coverage detail when `ConnectivityCoverageCard` is more appropriate
- value proof detail when `ValueProofCard` is more appropriate
- metrics
- alerts
- actions
- forms
- generic notes
- long explanations
- recommendation rationale
- proof maturity explanation
- connectivity coverage explanation
- prioritized risks or blockers
- assigned execution work
- AI validation claims
- expected outcomes presented as proven value

Use other components instead:

| Need | Use |
| --- | --- |
| Generic structured context | `StatusSummary` |
| Connectivity coverage detail | `ConnectivityCoverageCard` |
| Connectivity visibility limits | `ConnectivityCoverageCard` |
| Renewal risk context | `RenewalRiskSummary` |
| Value proof | `ValueProofCard` |
| Proof maturity and proof gaps | `ValueProofCard` |
| Single metric | `MetricCard` |
| Group metrics | `MetricGrid` |
| Individual risk or signal | `AlertCard` |
| Recommendation rationale | `RecommendationCard` |
| Group risks or blockers | `PriorityList` |
| Individual action | `ActionCard` |
| Group actions | `ActionList` |
| Create an action | `CreateActionDialog` |
| Generic grouped explanation | `Card` |
| Editable form field | `Field` |

---

## Placement rules

Place `CustomerStatusCard` near the top of the screen, immediately after
`PageHeader`.

Recommended customer monitoring structure:

```txt
PageHeader
→ CustomerStatusCard
→ MetricGrid with MetricCard items
→ ConnectivityCoverageCard when relevant
→ PriorityList with AlertCard items
→ ActionList with ActionCard items
```

Recommended customer review structure:

```txt
PageHeader
→ CustomerStatusCard
→ ValueProofCard or ConnectivityCoverageCard when relevant
→ MetricGrid with MetricCard items
→ PriorityList with AlertCard items
→ ActionList with ActionCard items
```

Recommended recommendation review structure:

```txt
PageHeader
→ CustomerStatusCard for customer context
→ StatusSummary for short source or validation metadata when needed
→ RecommendationCard for recommendation rationale
→ ActionList with ActionCard items when follow-through is needed
```

Do not place customer context after alerts or actions.

The user should understand the customer context before reviewing signals and next
steps.

---

## Relationship with StatusSummary

`CustomerStatusCard` is a specific business pattern built for customer context.

Use `StatusSummary` only when the context is generic and not customer-specific.

Use `StatusSummary` for generic source or validation metadata when the screen is
not primarily customer-centered.

Avoid:

```tsx
<StatusSummary
  title="Customer status"
  items={[
    { label: "Customer", value: "Greenfield Industries" },
    { label: "Plan", value: "Advanced service plan" },
    { label: "Coverage", value: "68% connected" },
  ]}
/>
```

Prefer:

```tsx
<CustomerStatusCard
  customerName="Greenfield Industries"
  plan="Advanced service plan"
  coverage="68% connected"
/>
```

---

## Relationship with MetricGrid

Use `CustomerStatusCard` to establish context.

Use `MetricGrid` to show measurable signals after that context.

Example:

```txt
CustomerStatusCard: customer, plan, owner, coverage
MetricGrid: connected equipment, open alerts, overdue actions
```

Do not place metrics inside `CustomerStatusCard` when they need decision
emphasis.

Use `MetricCard` and `MetricGrid` instead.

---

## Relationship with PriorityList and ActionList

Use `CustomerStatusCard` before risks and actions.

Use `PriorityList` for customer risks or blockers.

Use `ActionList` for assigned internal actions.

---

## Relationship with RecommendationCard

Use `CustomerStatusCard` to establish customer context.

Use `RecommendationCard` to explain recommendation rationale.

Example:

```txt
CustomerStatusCard: customer, plan, owner, objective, renewal timing
RecommendationCard: Recover connectivity before the customer review
```

Do not put recommendation rationale, priority, readiness or evidence
interpretation inside `CustomerStatusCard`.

---

## Relationship with other business patterns

Use `CustomerStatusCard` for overall customer context.

Use `ConnectivityCoverageCard` for monitoring coverage detail.

Use `RenewalRiskSummary` for renewal risk context.

Use `ValueProofCard` for service outcomes and proof points.

Use `RecommendationCard` for recommendation rationale and customer-readiness
context.

These patterns can be composed together when the screen requires them.

Example:

```txt
CustomerStatusCard
→ ConnectivityCoverageCard
→ ValueProofCard
→ PriorityList
→ ActionList
```

Avoid duplicating the same information across all patterns.

---

## Good example

```tsx
<CustomerStatusCard
  customerName="Greenfield Industries"
  plan="Advanced service plan"
  contract="#CR-2024-441"
  csm="Sarah Moreau"
  renewalDate="Aug 5, 2026"
  assetsCovered="25 assets — 3 sites"
  coverage="68% connected"
  customerObjective="Improve service visibility before renewal"
  sourceContext="Schneider monitored assets only"
  validationStatus="Review before customer use"
  badges={[
    { label: "Active plan", tone: "primary" },
    { label: "Connectivity partial", tone: "warning" },
    { label: "Renewal in 62 days", tone: "neutral" },
    { label: "Review needed", tone: "warning" },
  ]}
/>
```

This is good because:

- the customer is clearly identified
- ownership is visible
- service scope is clear
- renewal timing is visible
- coverage status is easy to scan
- customer objective and validation context are visible without replacing dedicated proof or coverage patterns
- badges provide concise status context

---

## Customer monitoring example

```tsx
<PageHeader
  title="Customer monitoring"
  description="Understand customer status, risks and next actions."
  actions={<CreateActionDialog />}
/>

<CustomerStatusCard
  customerName="Greenfield Industries"
  plan="Advanced service plan"
  contract="#CR-2024-441"
  csm="Sarah Moreau"
  renewalDate="Aug 5, 2026"
  assetsCovered="25 assets — 3 sites"
  coverage="68% connected"
  customerObjective="Improve service visibility before renewal"
  badges={[
    { label: "Active plan", tone: "primary" },
    { label: "Connectivity partial", tone: "warning" },
  ]}
/>
```

---

## Trust-sensitive customer context example

```tsx
<CustomerStatusCard
  customerName="Greenfield Industries"
  plan="Advanced service plan"
  contract="#CR-2024-441"
  csm="Sarah Moreau"
  renewalDate="Aug 5, 2026"
  assetsCovered="25 assets — 3 sites"
  coverage="68% connected"
  customerObjective="Improve service visibility before renewal"
  sourceContext="Schneider monitored assets only"
  validationStatus="Review before customer use"
  proofReadiness="Internal proof, not customer-ready"
  badges={[
    { label: "Connectivity partial", tone: "warning" },
    { label: "Proof review needed", tone: "warning" },
  ]}
/>
```

This is good because:

- customer-level trust context is visible
- source and validation context are concise
- proof readiness is shown without replacing `ValueProofCard`
- recommendation rationale remains outside the customer status card

---

## Bad examples

Do not manually recreate the customer status section:

```tsx
<Card title="Customer status">
  <dl>
    <div>
      <dt>Customer</dt>
      <dd>Greenfield Industries</dd>
    </div>
  </dl>
</Card>
```

Use `CustomerStatusCard` instead:

```tsx
<CustomerStatusCard
  customerName="Greenfield Industries"
  plan="Advanced service plan"
  coverage="68% connected"
/>
```

Do not use the pattern with no useful context:

```tsx
<CustomerStatusCard customerName="Greenfield Industries" />
```

Add the service context needed for decision-making.

Do not place alerts inside the customer status card.

```tsx
<CustomerStatusCard customerName="Greenfield Industries">
  <AlertCard ... />
</CustomerStatusCard>
```

Use `PriorityList` after the card instead.

Do not use customer status to claim AI validation or proven value:

```tsx
<CustomerStatusCard
  customerName="Greenfield Industries"
  coverage="68% connected"
  badges={[{ label: "AI validated", tone: "success" }]}
  extraItems={[
    { label: "Value", value: "Proven automatically" },
  ]}
/>
```

Use source-aware and validation-aware wording, and use dedicated proof or
recommendation patterns when explanation is needed.

---

## Content quality rules

A customer status card should answer:

1. Which customer is this screen about?
2. What service or contract context applies?
3. Who owns the relationship or follow-up?
4. What coverage or scope should the user know?
5. What customer objective or decision context affects interpretation?
6. Are there short source, validation or proof readiness labels that affect trust?

If the card does not answer these questions, add the missing context or use a
more appropriate component.

---

## Anti-patterns

Do not generate:

- manually rebuilt customer status cards
- generic `Card` or `StatusSummary` replacements when `CustomerStatusCard` fits
- customer status cards with only a customer name
- customer status cards overloaded with metrics
- customer status cards containing alerts
- customer status cards containing actions
- customer status cards containing form fields
- long values that should be explanatory text
- vague badges such as `Info` or `Status`
- custom customer status components
- local customer status implementations
- local customer status wrappers
- internal imports from package files
- customer status cards that hide customer objective when it affects interpretation
- customer status cards that use AI validation claims
- customer status cards that present expected outcomes as proven value
- customer status cards that present internal proof as customer-ready proof without validation
- customer status cards that contain recommendation rationale that belongs in `RecommendationCard`
- customer status cards that contain coverage explanation that belongs in `ConnectivityCoverageCard`
- customer status cards that contain proof maturity explanation that belongs in `ValueProofCard`

---

## Review checklist

After generation, verify:

- `CustomerStatusCard` is imported from `design-system-ai-lab`
- no local customer status replacement was created
- no local customer status wrapper was created
- no internal package import is used
- `customerName` is provided
- at least two or three useful context props are provided
- badges are short and meaningful when used
- extra items are concise when used
- customer objective is visible when it affects interpretation
- source, validation or proof readiness context is concise when used
- customer status does not claim AI validation or automatic approval
- customer status does not present expected outcomes as proven value
- customer status does not present internal proof as customer-ready proof without validation
- the card appears near the top of customer-centered screens
- `MetricGrid` is used for metrics after the customer context
- `PriorityList` is used for alerts or risks after the customer context
- `ActionList` is used for actions after the customer context
- the card does not contain alerts, actions or form fields
- the card does not contain recommendation rationale
- the card does not replace coverage detail or proof maturity patterns
- `StatusSummary` is not used to recreate customer status
- the card helps the user understand the customer context before deciding what to do next

---

## Final principle

A `CustomerStatusCard` should establish customer context before the screen asks
the user to interpret metrics, risks, recommendations or actions.

If the screen is customer-centered, use this pattern before rebuilding customer
context manually.
