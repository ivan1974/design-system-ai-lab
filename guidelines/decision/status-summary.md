# StatusSummary Guidelines

## Purpose

Use `StatusSummary` to show structured status context with badges and label/value
items.

A status summary should help the user understand the current situation quickly.

A status summary is not a metric grid.

A status summary is not an alert list.

A status summary is not an action plan.

In generated screens, use `StatusSummary` for generic structured context when no
more specific business pattern fits.

`StatusSummary` can show short trust metadata such as source scope, source
strength, freshness or validation status, but it should not explain the full
rationale behind recommendations, proof maturity or coverage gaps.

---

## Import

Import `StatusSummary` from the package root:

```tsx
import { StatusSummary } from "design-system-ai-lab";
```

If badges or business patterns are needed, import them from the same package
root:

```tsx
import {
  Badge,
  CustomerStatusCard,
  RenewalRiskSummary,
  StatusSummary,
} from "design-system-ai-lab";
```

Do not import `StatusSummary` from internal package paths.

Do not recreate `StatusSummary` locally.

Do not create custom status summary wrappers.

Do not manually rebuild status summaries with raw `Card`, `dl`, `dt`, `dd` or
`div` markup when `StatusSummary` fits the need.

---

## Component role

Use `StatusSummary` when the user needs structured context made of:

- a title
- an optional description
- optional badges
- label/value items

It should help the user understand:

- what the current state is
- which attributes matter
- which status labels apply
- what context should be known before reading metrics, alerts or actions
- what short source, freshness or validation metadata should be visible before interpretation

`StatusSummary` is useful for generic structured summaries.

Business patterns use the same summary logic for more specific business needs.

`StatusSummary` should stay descriptive. It should not become a metric grid,
priority list, recommendation rationale, proof explanation or action plan.

---

## Prefer business patterns before StatusSummary

Use a business pattern when the section intent matches one.

Prefer:

```tsx
<CustomerStatusCard
  customerName="Greenfield Industries"
  plan="Advanced service plan"
  contract="#CR-2024-441"
  Account owner="Sarah Moreau"
  coverage="68% connected"
/>
```

Instead of manually creating the same section with `StatusSummary`.

Prefer:

```tsx
<RenewalRiskSummary
  customerName="Greenfield Industries"
  renewalWindow="62 days"
  valueProofStatus="Incomplete"
/>
```

Instead of rebuilding renewal status with generic label/value items.

Prefer:

```tsx
<ConnectivityCoverageCard
  customerName="Greenfield Industries"
  coverageRate="68%"
  disconnectedAssets="8 assets"
  criticalDisconnectedAssets="2 critical assets"
/>
```

Instead of rebuilding connectivity coverage manually.

---

## Props

Use the component with these props:

```tsx
<StatusSummary
  title="Service context"
  description="Structured context for the current service review."
  badges={[
    { label: "Active plan", tone: "primary" },
    { label: "Review needed", tone: "warning" },
  ]}
  items={[
    { label: "Owner", value: "Account owner" },
    { label: "Review date", value: "Jun 24, 2026" },
    { label: "Scope", value: "3 sites" },
    { label: "Source strength", value: "Partial" },
    { label: "Freshness", value: "18 hours ago" },
  ]}
/>
```

Expected props:

```txt
title
description
badges
items
columns
className
```

Expected `columns` values:

```txt
2
3
4
```

Use `title` to name the summary.

Use `description` to explain the context.

Use `badges` for concise status labels.

Use `items` for structured label/value content.

Use `columns` to control item density.

Use `className` only for layout adjustments, not to redefine summary styling.

---

## Item rules

Each item should include:

- a clear label
- a concise value

Good item labels:

```txt
Owner
Review date
Scope
Plan
Contract
Coverage
Monitoring status
Last update
Source
Source scope
Source strength
Freshness
Validation status
Readiness
Priority
Proof status
```

Bad item labels:

```txt
Data
Info
Thing
Value
Details
Field
```

Item values should be short enough to scan.

If a value needs a long explanation, use a `Card`, `ValueProofCard`, `AlertCard`
or normal text instead.

Use `StatusSummary` for short metadata values, not for explaining why those
values matter. If the user needs interpretation, use the appropriate decision or
business component.

---

## Badge rules

Use badges for concise status or metadata.

Good badges:

```txt
Active plan
Connectivity partial
Renewal watch
Value proof incomplete
Customer-ready
Review needed
Source partial
Human validation needed
Customer-ready
Internal only
Needs review
High priority
```

Use tones consistently:

```txt
neutral
success
warning
danger
primary
```

Do not create long sentence badges.

Do not use badges as buttons.

Do not use badges to replace alert descriptions.

Do not use badges to claim AI validation, automatic approval or proven value.

Use badges for concise state only. Use `AlertCard`, `RecommendationCard` or
`ValueProofCard` when the status needs rationale or proof context.

---

## Column rules

Use `columns={2}` for compact or more detailed values.

Use `columns={3}` as the default structured summary density.

Use `columns={4}` when values are short and the summary needs to be dense.

Do not use more columns than the content can support.

Do not manually recreate grid classes when the `columns` prop is available.

---

## Trust metadata rules

`StatusSummary` may show short trust metadata when the user needs context before
reading metrics, alerts, recommendations or actions.

Good trust metadata items:

```txt
Source: Service monitoring
Source scope: CompanyName monitored assets only
Source strength: Partial
Freshness: 18 hours ago
Validation status: Review before customer use
Readiness: Needs review
Proof status: Internal proof, not customer-ready
```

Do not use `StatusSummary` to explain why a recommendation is valid, why value
is proven or why coverage is incomplete.

Use `RecommendationCard` for recommendation rationale.

Use `ValueProofCard` for proof maturity and proof gaps.

Use `ConnectivityCoverageCard` for coverage and visibility limits.

Do not use confidence language as a substitute for source, scope, freshness or
validation metadata.

---

## Asset-related status rules

For asset-heavy screens, `StatusSummary` can show short asset context when no
dedicated business pattern fits.

Good asset-related status items:

```txt
Site
Zone
Room
Asset group
Asset scope
Source scope
Source strength
Last update
Validation status
```

Do not use `StatusSummary` to replace `ConnectivityCoverageCard` when the main
question is coverage, connected / partially connected / non-connected assets,
source strength or visibility limits.

Do not present non-connected assets as live-monitored.

Do not present Intelligence interpretation as source-system truth.

---

## Proof-related status rules

For value proof screens, `StatusSummary` can show short proof metadata when no
dedicated business pattern fits.

Good proof-related status items:

```txt
Proof status
Proof scope
Readiness
Validation status
Last review
Customer-ready status
```

Do not use `StatusSummary` to explain proof maturity, proof gaps, expected
outcomes or customer-ready evidence.

Use `ValueProofCard` when the main question is proof maturity, proof gaps or
customer-ready value.

Do not present expected outcomes as proven value.

Do not present internal proof as customer-ready proof without validation.

---

## Recommendation metadata rules

`StatusSummary` may show short recommendation metadata such as priority or
readiness when the screen only needs contextual status.

It should not replace `RecommendationCard`.

Use `RecommendationCard` when the user needs to understand:

```txt
what is recommended
why it matters
what evidence supports it
what priority it has
what readiness or validation status applies
whether it can be shared with the customer
```

Priority and readiness are different dimensions.

Do not use high priority as proof of validation.

Do not use customer-ready status as a substitute for priority.

---

## When to use StatusSummary

Use `StatusSummary` for:

- generic structured context
- service review context
- account or plan metadata that does not fit a specific pattern
- compact label/value summaries
- operational review attributes
- short status groups with badges
- short source, freshness or validation metadata
- short recommendation priority or readiness metadata
- short proof status metadata when no `ValueProofCard` is needed
- reusable context blocks that do not deserve a custom pattern

---

## When not to use StatusSummary

Do not use `StatusSummary` for:

- customer status when `CustomerStatusCard` fits
- connectivity coverage when `ConnectivityCoverageCard` fits
- renewal risk context when `RenewalRiskSummary` fits
- value proof when `ValueProofCard` fits
- metrics that need emphasis
- risks or blockers
- action plans
- forms
- long explanations
- raw data tables
- recommendation rationale
- customer-ready proof explanation
- connectivity coverage explanation
- priority risks or blockers
- assigned execution work
- AI validation claims
- expected outcomes presented as proven value

Use other components instead:

| Need | Use |
| --- | --- |
| Customer context | `CustomerStatusCard` |
| Connectivity coverage | `ConnectivityCoverageCard` |
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
| Short status or metadata | `Badge` |
| Generic grouped explanation | `Card` |
| Editable form field | `Field` |

---

## Placement rules

Place `StatusSummary` near the top of a screen or section when it provides
important context.

Recommended generic structure:

```txt
PageHeader
→ StatusSummary when no specific business pattern fits
→ MetricGrid with MetricCard items
→ PriorityList with AlertCard items
→ ActionList with ActionCard items
```

When a business pattern fits, use the business pattern instead:

```txt
PageHeader
→ CustomerStatusCard or RenewalRiskSummary
→ MetricGrid with MetricCard items
→ PriorityList with AlertCard items
→ ActionList with ActionCard items
```

Recommended recommendation review structure:

```txt
PageHeader
→ StatusSummary for short source, priority or readiness metadata when no pattern fits
→ RecommendationCard for recommendation rationale
→ ActionList with ActionCard items when follow-through is needed
```

Do not bury important status context below alerts or actions.

Do not use `StatusSummary` repeatedly when the screen would be clearer with a
business pattern or dedicated component.

---

## Good example

```tsx
<StatusSummary
  title="Service review context"
  description="Key context before reviewing risks and recommended actions."
  badges={[
    { label: "Review needed", tone: "warning" },
    { label: "Active plan", tone: "primary" },
  ]}
  items={[
    { label: "Owner", value: "Account owner" },
    { label: "Review date", value: "Jun 24, 2026" },
    { label: "Scope", value: "3 sites" },
    { label: "Last update", value: "18 hours ago" },
    { label: "Source strength", value: "Partial" },
    { label: "Validation status", value: "Review before customer use" },
  ]}
  columns={3}
/>
```

This is good because:

- the title names the summary
- the description explains the context
- badges communicate concise status
- items are structured and scannable
- values are short enough to compare

---

## Trust metadata example

```tsx
<StatusSummary
  title="Source context"
  description="Short metadata to review before interpreting the recommendation."
  badges={[
    { label: "Source partial", tone: "warning" },
    { label: "Review needed", tone: "warning" },
  ]}
  items={[
    { label: "Source", value: "Service monitoring" },
    { label: "Source scope", value: "CompanyName monitored assets only" },
    { label: "Source strength", value: "Partial" },
    { label: "Freshness", value: "18 hours ago" },
    { label: "Validation status", value: "Review before customer use" },
    { label: "Readiness", value: "Needs review" },
  ]}
  columns={3}
/>
```

This is good because:

- the summary shows short metadata only
- source scope and source strength are visible
- validation status is not hidden
- recommendation rationale is left to `RecommendationCard`

---

## Recommendation metadata example

```tsx
<StatusSummary
  title="Recommendation context"
  description="Short recommendation metadata before reviewing rationale."
  badges={[
    { label: "High priority", tone: "danger" },
    { label: "Needs review", tone: "warning" },
  ]}
  items={[
    { label: "Priority", value: "High" },
    { label: "Readiness", value: "Needs review" },
    { label: "Scope", value: "Critical Power > UPS Room A" },
    { label: "Validation status", value: "Review before customer use" },
  ]}
  columns={2}
/>
```

This is good because:

- priority and readiness are visible as separate metadata
- high priority is not used as proof of validation
- the full recommendation rationale remains outside `StatusSummary`

---

## Better pattern examples

Do not use a generic `StatusSummary` for customer status when the business
pattern exists.

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

Do not use a generic `StatusSummary` for renewal risk when the business pattern
exists.

Avoid:

```tsx
<StatusSummary
  title="Renewal status"
  items={[
    { label: "Customer", value: "Greenfield Industries" },
    { label: "Renewal window", value: "62 days" },
    { label: "Value proof status", value: "Incomplete" },
  ]}
/>
```

Prefer:

```tsx
<RenewalRiskSummary
  customerName="Greenfield Industries"
  renewalWindow="62 days"
  valueProofStatus="Incomplete"
/>
```

---

## Bad examples

Do not manually recreate a status summary:

```tsx
<Card title="Service context">
  <dl className="grid gap-6 md:grid-cols-3">
    <div>
      <dt>Owner</dt>
      <dd>Account owner</dd>
    </div>
  </dl>
</Card>
```

Use `StatusSummary` instead:

```tsx
<StatusSummary
  title="Service context"
  items={[{ label: "Owner", value: "Account owner" }]}
/>
```

Do not use `StatusSummary` for metrics:

```tsx
<StatusSummary
  title="Metrics"
  items={[{ label: "Connected equipment", value: "68%" }]}
/>
```

Use `MetricCard` and `MetricGrid` instead when the values need decision emphasis.

Do not use `StatusSummary` for recommendation rationale:

```tsx
<StatusSummary
  title="AI recommendation"
  badges={[{ label: "High priority", tone: "danger" }]}
  items={[
    { label: "Recommendation", value: "Take action" },
    { label: "Rationale", value: "AI is confident" },
    { label: "Validation", value: "AI confirmed" },
  ]}
/>
```

Use `RecommendationCard` with visible evidence, scope, priority and readiness
instead.

---

## Content quality rules

A status summary should answer:

1. What context should the user know first?
2. Which status labels apply?
3. Which label/value items are important?
4. Are source, freshness or validation metadata short enough for a summary?
5. Does a more specific business or decision pattern already exist?

If a business pattern exists for the same intent, use the business pattern.

If the status values are actually metrics, use `MetricCard` or `MetricGrid`.

If the status values describe risks, use `AlertCard` or `PriorityList`.

---

## Relationship with business patterns

Business patterns such as `CustomerStatusCard`, `ConnectivityCoverageCard` and
`RenewalRiskSummary` provide more specific versions of structured status
summaries.

Use `StatusSummary` for generic cases.

Use business patterns for known business sections.

Use `StatusSummary` for short generic metadata only. Do not use it to recreate
the interpretation or rationale that belongs to a dedicated pattern.

Examples:

```txt
CustomerStatusCard = specific customer status summary
ConnectivityCoverageCard = specific connectivity coverage summary
RenewalRiskSummary = specific renewal risk summary
StatusSummary = generic status summary
```

---

## Relationship with MetricGrid

Use `StatusSummary` for context.

Use `MetricGrid` for decision metrics.

Example:

```txt
StatusSummary: Owner, scope, review date, last update
MetricGrid: Connected equipment, overdue actions, recommendations reviewed
```

---

## Relationship with RecommendationCard

Use `StatusSummary` for short recommendation metadata when needed.

Use `RecommendationCard` for the recommendation rationale.

Example:

```txt
StatusSummary: Priority = High, Readiness = Needs review, Source strength = Partial
RecommendationCard: Recover connectivity before the customer review
```

Do not put recommendation rationale, evidence interpretation or customer-ready
proof explanation inside `StatusSummary`.

---

## Relationship with PriorityList and ActionList

Use `StatusSummary` before risks and actions when it provides needed context.

Use `PriorityList` for risks and blockers.

Use `ActionList` for next steps.

Do not place alerts or actions inside `StatusSummary`.

Do not use `StatusSummary` to list prioritized risks or assigned work.

---

## Relationship with forms

Use `StatusSummary` for display-only label/value context.

Use `Field`, `Input`, `Select` and `Textarea` when the user can edit or enter
values.

Do not use disabled form fields as static status summaries.

---

## Anti-patterns

Do not generate:

- manually rebuilt status summaries
- raw `dl`, `dt`, `dd` summaries when `StatusSummary` fits
- status summaries that duplicate business patterns
- status summaries used as metric grids
- status summaries containing alerts
- status summaries containing actions
- status summaries containing form fields
- vague item labels such as `Info` or `Data`
- long values that should be explanatory text
- too many status items
- custom status summary components
- local status summary implementations
- local status summary wrappers
- internal imports from package files
- status summaries that hide source scope, source strength, freshness or validation status when those affect trust
- status summaries that use confidence language instead of source metadata
- status summaries that claim AI validation or automatic approval
- status summaries that present expected outcomes as proven value
- status summaries that present internal proof as customer-ready proof without validation
- status summaries that contain recommendation rationale that belongs in `RecommendationCard`
- status summaries that contain coverage explanation that belongs in `ConnectivityCoverageCard`
- status summaries that contain proof maturity explanation that belongs in `ValueProofCard`
- status summaries that contain prioritized risks that belong in `PriorityList`
- status summaries that contain assigned execution work that belongs in `ActionList`

---

## Review checklist

After generation, verify:

- `StatusSummary` is imported from `design-system-ai-lab`
- no local status summary replacement was created
- no local status summary wrapper was created
- no internal package import is used
- `StatusSummary` is used only when no more specific business pattern fits
- the title explains the summary
- the description clarifies context when useful
- badges are short and meaningful
- item labels are specific
- item values are concise
- short trust metadata is visible when it affects interpretation
- source, freshness and validation metadata are not replaced by confidence language
- priority and readiness are not confused when recommendation metadata is shown
- metrics are not placed in `StatusSummary` when they need emphasis
- alerts are not placed inside `StatusSummary`
- actions are not placed inside `StatusSummary`
- form fields are not placed inside `StatusSummary`
- business patterns are used for known business sections
- recommendation rationale is not forced into `StatusSummary`
- proof maturity explanation is not forced into `StatusSummary`
- coverage explanation is not forced into `StatusSummary`
- priority risks and assigned actions are not forced into `StatusSummary`
- the summary does not claim AI validation or automatic approval
- the summary does not present expected outcomes as proven value
- the summary helps the user understand context before reviewing metrics, risks or actions

---

## Final principle

A `StatusSummary` should make structured context easier to understand.

It should summarize short context, not replace decision rationale, proof
explanation, coverage logic, risk prioritization or accountable execution.

If the section is actually customer status, connectivity coverage, renewal risk
or value proof, use the dedicated business pattern instead.
