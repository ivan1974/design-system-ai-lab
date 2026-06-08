# PriorityList Guidelines

## Purpose

Use `PriorityList` to group risks, blockers, alerts or priority items that
require attention.

A priority list should help the user understand what matters first.

A priority list is not a generic list.

A priority list is not an action plan.

A priority list is not a decorative section.

In generated screens, `PriorityList` should usually contain `AlertCard` items
sorted by severity or business impact.

For trust-sensitive screens, `PriorityList` should make the most important
risks, blockers, source limits, validation gaps, asset visibility gaps or proof
gaps visible before the user reviews recommendations or actions.

`PriorityList` helps the user understand what needs attention first. It should
not carry full recommendation rationale or owned follow-through.

---

## Import

Import `PriorityList` from the package root:

```tsx
import { PriorityList } from "design-system-ai-lab";
```

If alert cards are needed, import them from the same package root:

```tsx
import {
  AlertCard,
  PriorityList,
} from "design-system-ai-lab";
```

Do not import `PriorityList` from internal package paths.

Do not recreate `PriorityList` locally.

Do not create custom priority list wrappers.

Do not manually rebuild priority sections with raw `div` or `section` wrappers
when `PriorityList` fits the need.

---

## Component role

Use `PriorityList` when the user needs to scan and compare important risks or
blockers.

It should help the user answer:

- what needs attention first?
- which risk is critical?
- which blockers affect the customer or business outcome?
- which alerts should lead to action?
- what should be reviewed before the next decision?
- what source, validation, asset visibility or proof gap affects trust?
- which risk may need a richer recommendation or owned action next?

`PriorityList` is the layout companion of `AlertCard`.

Use `AlertCard` for individual risks or signals.

Use `PriorityList` to group them.

`PriorityList` sits after context and metrics, before recommendations and
actions:

```txt
context
→ measurable signals
→ prioritized risks or blockers
→ recommendation rationale when needed
→ owned follow-through when needed
```

Use `PriorityList` to prioritize what needs attention.

Use `RecommendationCard` to explain why a recommendation should be made.

Use `ActionList` to show assigned follow-through.

---

## Props

Use the component with these props:

```tsx
<PriorityList
  title="Priority alerts"
  description="Risks requiring customer or service team action, sorted by severity."
>
  <AlertCard
    severity="critical"
    title="Critical equipment no longer monitored"
    scope="Critical Power > UPS Room A"
    description="The customer may lose visibility on critical assets before the next service review."
    recommendation="Review affected assets and plan a connectivity recovery action before the customer discussion."
    evidenceSummary="17 of 25 known assets are currently monitored."
    sourceScope="Schneider monitored assets only"
    sourceStrength="partial"
    freshness="18 hours ago"
    validationStatus="Review before customer use"
  />
</PriorityList>
```

Expected props:

```txt
title
description
actions
children
className
```

Use `title` to name the priority section.

Use `description` to explain why these items matter.

Use `actions` only for section-level actions.

Use `children` for `AlertCard` items or closely related priority items.

`AlertCard` children may include trust-sensitive context such as
`evidenceSummary`, `source`, `sourceScope`, `sourceStrength`, `freshness` and
`validationStatus` when those details affect prioritization.

Use `className` only for layout adjustments, not to redefine list styling.

---

## Title rules

Priority list titles should explain the nature of the risks or blockers.

Good titles:

```txt
Priority alerts
Renewal blockers
Connectivity blockers
Customer risks
Service risks
Adoption blockers
Value proof gaps
Source evidence gaps
Asset visibility gaps
Human validation gaps
Customer-ready proof blockers
Items requiring attention
```

Bad titles:

```txt
List
Items
Alerts
Data
Things
Important
AI-approved risks
Proven value
Automatic decisions
```

The title should help the user understand what kind of prioritization is shown.

---

## Description rules

Descriptions should clarify the decision context.

Good descriptions:

```txt
Risks requiring customer or service team action, sorted by severity.
Risks prioritized by potential impact on the renewal decision.
Connectivity blockers that may reduce monitoring coverage.
Proof gaps that should be resolved before the customer review.
Source and validation gaps that should be reviewed before customer use.
Asset visibility risks that may limit confidence in the service status.
Customer-ready proof blockers that may weaken the renewal discussion.
```

Bad descriptions:

```txt
Here are some items.
Review the list below.
Important information.
Things to look at.
```

The description should explain why the list matters.

---
---

## Trust-sensitive priority rules

Use `PriorityList` to make trust-sensitive risks visible and ordered.

Trust-sensitive priority items should make clear when relevant:

```txt
affected scope
evidence summary
source scope
source strength
freshness
validation status
proof status
```

The list should make clear what kind of gap or blocker is being prioritized:

```txt
source gap
validation gap
asset visibility gap
proof gap
ownership gap
customer follow-up gap
```

Do not use `PriorityList` to imply that AI, automation or the interface has
approved the priority order or the decision.

---

## Asset-related priority rules

For asset-heavy screens, `PriorityList` should group the asset risks and
blockers that require review before recommendation or action.

Good asset-related priority titles:

```txt
Asset visibility gaps
Connectivity blockers
Critical asset risks
Source evidence gaps
Asset recommendation blockers
```

Asset-related alerts should include asset or affected-scope context when needed
to understand the risk.

Do not present non-connected assets as live-monitored.

Do not present AI-assisted Intelligence interpretation as source-system truth.

Use `ConnectivityCoverageCard` when the main question is coverage, source scope
and visibility limits.

---

## Proof-related priority rules

For value proof screens, `PriorityList` should group proof blockers, proof gaps
or renewal risks that require attention.

Good proof-related priority titles:

```txt
Value proof gaps
Customer-ready proof blockers
Renewal proof risks
Proof validation gaps
```

Proof-related alerts should distinguish expected outcomes, technical outcomes,
internal proof, customer-ready proof and proof gaps when that context affects
prioritization.

Do not use priority lists to present expected outcomes as proven value.

Do not use priority lists to present internal proof as customer-ready proof
without validation.

Use `ValueProofCard` when the main question is proof maturity, proof gaps or
customer-ready value evidence.

---

## Human validation rules

Critical customer, contract, service, safety, compliance, renewal, value proof,
asset intelligence or modernization risks should keep human validation visible.

Use priority lists to surface risks that require expert review, source review,
proof review or customer-context review before action.

Good section descriptions:

```txt
Risks that require expert review before customer use.
Source and validation gaps to review before the customer-ready summary.
Priority blockers that require human validation before action planning.
```

Avoid priority list titles or descriptions that imply automatic AI approval.

---

## When to use PriorityList

Use `PriorityList` for:

- priority alerts
- customer risks
- renewal blockers
- connectivity blockers
- service risks
- adoption blockers
- value proof gaps
- recommendation review gaps
- operational blockers
- signals that require attention
- source evidence gaps
- asset visibility gaps
- human validation gaps
- customer-ready proof blockers
- risks that may lead to richer recommendations

---
---

## When not to use PriorityList

Do not use `PriorityList` for:

- action plans
- recommended actions
- metrics
- status summaries
- generic notes
- long reports
- display-only customer context
- generic card layouts
- unrelated content groups
- recommendation rationale
- assigned internal tasks
- action plans
- proof maturity explanation
- connectivity coverage explanation
- AI validation claims

Use other components instead:

| Need | Use |
| --- | --- |
| Individual risk or signal | `AlertCard` |
| Recommended action | `ActionCard` |
| Group recommended actions | `ActionList` |
| Recommendation rationale | `RecommendationCard` |
| Group assigned internal tasks | `ActionList` |
| Single metric | `MetricCard` |
| Group metrics | `MetricGrid` |
| Short status or metadata | `Badge` |
| Structured status context | `StatusSummary` |
| Customer context | `CustomerStatusCard` |
| Connectivity coverage | `ConnectivityCoverageCard` |
| Full connectivity coverage and source limits | `ConnectivityCoverageCard` |
| Renewal context | `RenewalRiskSummary` |
| Value proof | `ValueProofCard` |
| Proof maturity and proof gaps | `ValueProofCard` |
| Generic grouped content | `Card` |

---

## AlertCard usage

`PriorityList` should usually contain `AlertCard` items.

Preferred:

```tsx
<PriorityList
  title="Renewal blockers"
  description="Risks prioritized by potential impact on the renewal decision."
>
  <AlertCard
    severity="critical"
    title="Value proof is not customer-ready"
    scope="Renewal preparation"
    description="Closed actions and monitoring outcomes are not yet compiled into a customer-facing value summary."
    recommendation="Prepare a concise value proof summary before the next customer meeting."
    evidenceSummary="Three service actions were closed, but customer-ready proof has not been prepared."
    sourceScope="Closed service actions from the last 90 days"
    sourceStrength="medium"
    validationStatus="Internal proof, not customer-ready"
  />

  <AlertCard
    severity="warning"
    title="Connectivity gaps weaken the service proof"
    scope="Monitoring coverage"
    description="Eight assets are unreachable, including two critical assets."
    recommendation="Launch a connectivity recovery review and clarify customer-side network actions."
    evidenceSummary="17 of 25 known assets are currently monitored."
    sourceScope="Schneider monitored assets only"
    sourceStrength="partial"
    freshness="18 hours ago"
    validationStatus="Review before customer use"
  />
</PriorityList>
```

Avoid placing unrelated content inside `PriorityList`.

Use `ActionList` for actions and `MetricGrid` for metrics.

---

## Section actions

Use the `actions` prop only for a section-level action.

Good examples:

```txt
Review all risks
Create mitigation action
Open incident queue
Review source evidence
Review proof gaps
Validate with expert
```

Example:

```tsx
<PriorityList
  title="Priority alerts"
  description="Risks requiring customer or service team action."
  actions={<Button variant="secondary">Review all risks</Button>}
>
  <AlertCard ... />
</PriorityList>
```

Do not add many competing section actions.

Do not use the section action to replace the recommendations inside each
`AlertCard`.

Use review-oriented section actions for critical decisions. Avoid labels such as
`Confirm AI recommendation`, `Approve asset intelligence` or `Prove value`.

---

## Sorting rules

Sort priority items by severity or business impact.

Recommended order for alerts:

```txt
critical
warning
info
```

If two items have the same severity, show the one with the highest customer or
business impact first.

Also consider source weakness, validation blockers, asset visibility gaps and
proof gaps when they affect customer trust or decision readiness.

Do not randomize order.

Do not create long unordered priority lists.

---

## Recommended number of items

A priority list should usually contain between two and five items.

Use fewer items when the screen should focus attention.

Avoid long lists that make everything feel equally important.

If there are many risks, show the most important ones first and provide a
secondary action such as:

```txt
Review all risks
View full alert list
```

---

## Placement rules

Place `PriorityList` after the user has enough context and metrics to understand
why the risks matter.

Recommended customer monitoring structure:

```txt
PageHeader
→ CustomerStatusCard
→ MetricGrid with MetricCard items
→ ConnectivityCoverageCard when relevant
→ PriorityList with AlertCard items
→ ActionList with ActionCard items
```

Recommended renewal risk structure:

```txt
PageHeader
→ RenewalRiskSummary
→ ValueProofCard
→ MetricGrid with MetricCard items
→ PriorityList with AlertCard items
→ ActionList with ActionCard items
```

Recommended asset intelligence structure:

```txt
PageHeader
→ customer, site or installed base context
→ ConnectivityCoverageCard or source/scope context
→ MetricGrid with key asset metrics
→ PriorityList with AlertCard items for risks and blockers
→ RecommendationCard when rationale needs explanation
→ ActionList with ActionCard items
```

Recommended value proof structure:

```txt
PageHeader
→ RenewalRiskSummary or customer context
→ ValueProofCard
→ MetricGrid with proof readiness metrics
→ PriorityList with AlertCard items for proof blockers
→ RecommendationCard when rationale needs explanation
→ ActionList with proof follow-up actions
```

Do not place priority risks before the user understands the customer or business
context.

Do not bury critical risks below too much secondary content.

For asset-heavy risks, show asset scope, connectivity status, source scope or
related coverage context before the priority list when they affect trust.

For proof-related risks, show `ValueProofCard` or proof gap context before the
priority list when proof maturity affects the decision.

---

## Relationship with ActionList

`PriorityList` shows what needs attention.

`ActionList` shows what should be done next.

Use them together when risks require execution.

Good pattern:

```tsx
<PriorityList title="Priority alerts">
  <AlertCard
    severity="critical"
    title="Connectivity loss on critical equipment"
    equipment="Main switchboard"
    description="The customer may lose visibility on key assets."
    recommendation="Plan a connectivity review with the customer and support team."
  />
</PriorityList>

<ActionList title="Recommended actions">
  <ActionCard
    title="Plan connectivity review with the customer"
    owner="CSM"
    dueDate="This week"
    priority="high"
    status="todo"
    assetContext="Main switchboard"
    validationStatus="Review before customer use"
  />
</ActionList>
```

Do not put `ActionCard` items inside `PriorityList` when the intent is an action
plan.

If a `PriorityList` exposes source, proof, ownership or validation gaps,
`ActionList` should show the owned actions that close those gaps.

---

## PriorityList vs RecommendationCard

`PriorityList` is for prioritized risks and blockers.

It should show what needs attention first and why the item matters.

`RecommendationCard` is for decision rationale.

It should explain what is recommended, why it is recommended, what evidence
supports it, what validation is needed and whether it is internal, needs review
or customer-ready.

Use `PriorityList` when the user needs to know:

```txt
what risk or blocker needs attention
where it applies
how severe or important it is
what short next step is recommended
```

Use `RecommendationCard` when the user needs to know:

```txt
what is recommended
why it matters
what evidence supports it
what asset or customer scope it applies to
what validation or proof status applies
whether it can be shared with the customer
```

A `PriorityList` may lead to one or several `RecommendationCard` items.

A `RecommendationCard` may be linked to a priority risk, but the priority list
should not carry the full recommendation rationale.

---

## Relationship with MetricGrid

`MetricGrid` shows measurable signals.

`PriorityList` explains the prioritized risks or blockers behind those signals.

Example:

```txt
MetricGrid: Open critical alerts = 2, Overdue actions = 3
PriorityList: Critical equipment no longer monitored, actions overdue
```

---

## Relationship with business patterns

Use business patterns to establish context.

Use `PriorityList` to show the prioritized risks that follow from that context.

Examples:

```txt
CustomerStatusCard → PriorityList with customer risks
ConnectivityCoverageCard → PriorityList with connectivity blockers
RenewalRiskSummary → PriorityList with renewal blockers
ValueProofCard → PriorityList with value proof gaps
```

Do not replace business patterns with `PriorityList`.

`PriorityList` should explain what needs attention after the business context is
understood.

Do not use `PriorityList` to replace `ConnectivityCoverageCard` when the main
question is coverage and source visibility.

Do not use `PriorityList` to replace `ValueProofCard` when the main question is
proof maturity or customer-ready value.

---

## Good example

```tsx
<PriorityList
  title="Priority alerts"
  description="Risks requiring customer or service team action, sorted by severity."
>
  <AlertCard
    severity="critical"
    title="Critical equipment no longer monitored"
    scope="Critical Power > UPS Room A"
    description="The customer may lose visibility on critical assets before the next service review."
    recommendation="Review affected assets and plan a connectivity recovery action before the customer discussion."
    evidenceSummary="17 of 25 known assets are currently monitored."
    sourceScope="Schneider monitored assets only"
    sourceStrength="partial"
    freshness="18 hours ago"
    validationStatus="Review before customer use"
  />

  <AlertCard
    severity="warning"
    title="Renewal value proof is not customer-ready"
    scope="Renewal preparation"
    description="Recent service actions are not yet summarized in a customer-ready view."
    recommendation="Prepare a value summary before the renewal meeting."
    evidenceSummary="Three service actions were closed, but customer-ready proof has not been prepared."
    sourceScope="Closed service actions from the last 90 days"
    sourceStrength="medium"
    validationStatus="Internal proof, not customer-ready"
  />
</PriorityList>
```

This is good because:

- the section has a clear title
- the description explains the prioritization logic
- items are represented by `AlertCard`
- alerts are sorted by severity
- every alert includes a recommendation
- source and validation context are visible when they affect trust
- the list prioritizes risks without replacing recommendation rationale or action ownership

---

## Asset visibility priority example

```tsx
<PriorityList
  title="Asset visibility gaps"
  description="Risks that may limit confidence in the current service status."
>
  <AlertCard
    severity="critical"
    title="Critical equipment no longer monitored"
    scope="Critical Power > UPS Room A"
    description="The customer may lose visibility on critical assets before the next service review."
    recommendation="Review affected assets and plan a connectivity recovery action before the customer discussion."
    evidenceSummary="17 of 25 known assets are currently monitored."
    sourceScope="Schneider monitored assets only"
    sourceStrength="partial"
    freshness="18 hours ago"
    validationStatus="Review before customer use"
  />

  <AlertCard
    severity="warning"
    title="Partial source strength limits recommendation confidence"
    scope="Critical Power > UPS Room A"
    description="The current asset view combines live telemetry and manual inventory, which limits recommendation confidence."
    recommendation="Review source evidence before using the asset recommendation with the customer."
    sourceScope="Known installed base"
    sourceStrength="partial"
    validationStatus="Human review needed"
  />
</PriorityList>
```

---

## Proof blocker priority example

```tsx
<PriorityList
  title="Customer-ready proof blockers"
  description="Proof gaps that may weaken the renewal discussion."
>
  <AlertCard
    severity="critical"
    title="Expected value is not proven yet"
    scope="Renewal preparation"
    description="Expected service value is not backed by completed actions or customer-ready proof."
    recommendation="Create a proof follow-up action before using this point in the renewal discussion."
    sourceScope="Closed service actions"
    sourceStrength="partial"
    validationStatus="Expected outcome, not proven"
  />

  <AlertCard
    severity="warning"
    title="Internal proof is not customer-ready"
    scope="Value proof preparation"
    description="Internal service evidence needs customer-ready synthesis before it can support the renewal discussion."
    recommendation="Prepare and validate the customer-ready proof summary before the QBR."
    evidenceSummary="Three service actions are closed, but the customer-ready summary is missing."
    validationStatus="Internal proof, not customer-ready"
  />
</PriorityList>
```

---

## Bad examples

Do not manually recreate a priority list:

```tsx
<section>
  <h2>Priority alerts</h2>
  <div className="space-y-3">
    <div className="rounded-lg border p-4">...</div>
  </div>
</section>
```

Use `PriorityList` and `AlertCard` instead:

```tsx
<PriorityList title="Priority alerts">
  <AlertCard ... />
</PriorityList>
```

Do not place actions inside `PriorityList`:

```tsx
<PriorityList title="Recommended actions">
  <ActionCard ... />
</PriorityList>
```

Use `ActionList` instead:

```tsx
<ActionList title="Recommended actions">
  <ActionCard ... />
</ActionList>
```

Do not use `PriorityList` to show risks that claim AI validation or automatic
approval:

```tsx
<PriorityList title="AI-approved risks">
  <AlertCard
    severity="critical"
    title="AI confirmed the recommendation"
    scope="Asset intelligence"
    description="The AI is confident that the recommendation should be approved."
    recommendation="Approve the recommendation."
  />
</PriorityList>
```

Use source-aware alerts and keep human validation visible.

---

## Content quality rules

A priority list should answer:

1. What needs attention first?
2. Why are these items prioritized?
3. What is the impact?
4. What source, validation, asset visibility or proof gap affects trust?
5. What should the user review or do next?
6. Does the risk need a richer recommendation or owned action next?

If the list does not answer these questions, refine the title, description or
items before accepting the screen.

---

## Anti-patterns

Do not generate:

- manually rebuilt priority lists
- priority lists with raw card-like divs
- priority lists containing metrics
- priority lists containing action plans
- priority lists with unrelated content
- long unordered priority lists
- many items with the same priority by default
- vague section titles such as `Items` or `List`
- alerts without recommendations
- custom priority list components
- local priority list implementations
- local priority list wrappers
- internal imports from package files
- priority lists that hide asset context when it affects risk prioritization
- priority lists that hide source context, proof context or validation status when they affect trust
- priority lists that use AI validation as a decision basis
- priority lists that present expected outcomes as proven value
- priority lists that present internal proof as customer-ready proof without validation
- priority lists that treat Intelligence interpretation as source-system truth
- priority lists that contain full recommendation rationale that belongs in `RecommendationCard`
- priority lists that contain owned execution work that belongs in `ActionList`

---

## Review checklist

After generation, verify:

- `PriorityList` is imported from `design-system-ai-lab`
- no local priority list replacement was created
- no local priority list wrapper was created
- no internal package import is used
- `PriorityList` usually contains `AlertCard` items
- the title explains the priority section
- the description explains the decision context when needed
- items are sorted by severity or business impact
- critical items appear first
- every `AlertCard` includes a recommendation
- trust-sensitive alert cards show evidence, source, freshness or validation context when needed
- asset-related alert cards show asset or affected-scope context when needed
- proof-related alert cards show proof gap or validation context when needed
- human validation remains visible for critical decisions
- there are not too many items
- actions are not placed inside `PriorityList`
- metrics are not placed inside `PriorityList`
- `ActionList` is used for action plans
- `MetricGrid` is used for metrics
- business patterns are used for business context
- the list helps the user understand what needs attention first
- priority lists do not claim AI validation or automatic approval
- priority lists do not present expected outcomes as proven value
- full recommendation rationale is not forced into `PriorityList`
- owned execution work is not forced into `PriorityList`

---

## Final principle

A `PriorityList` should make the most important risks and blockers easier to
see without creating false confidence.

If the list does not help the user prioritize, reduce, reorder or rewrite the
items.

If the list depends on asset context, source context, proof maturity or human
validation but hides that context, revise it before accepting the screen.
