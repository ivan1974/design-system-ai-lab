# RecommendationCard Guidelines

## Purpose

Use `RecommendationCard` to explain a decision rationale: what is recommended,
why it matters, what evidence supports it, what validation is needed and whether
it is internal, needs review or customer-ready.

A recommendation card should help the user understand whether a recommendation
is credible, actionable and appropriate to discuss with a customer.

A recommendation card is not an internal task card.

A recommendation card is not an alert.

A recommendation card is not a generic content card.

In generated screens, use `RecommendationCard` when a recommendation needs more
context than a short `AlertCard` recommendation, but should not yet be converted
into an owned task.

---

## Import

Import `RecommendationCard` from the package root:

```tsx
import { RecommendationCard } from "design-system-ai-lab";
```

If related actions are needed, import them from the same package root:

```tsx
import {
  ActionCard,
  ActionList,
  RecommendationCard,
} from "design-system-ai-lab";
```

Do not import `RecommendationCard` from internal package paths.

Do not recreate `RecommendationCard` locally.

Do not create custom recommendation card wrappers.

Do not use generic `Card`, `AlertCard` or `ActionCard` to rebuild a structured
recommendation when `RecommendationCard` fits the need.

---

## Component role

Use `RecommendationCard` when the user needs to understand:

- what is recommended
- why it matters
- what asset, customer, site, workflow or business scope it applies to
- what evidence supports the recommendation
- what interpretation or reasoning connects evidence to recommendation
- what validation or proof status applies
- whether the recommendation is internal, needs review or customer-ready
- how important or urgent the recommendation is for the customer, asset, service or business decision
- what customer or business outcome is expected
- what follow-up action may be needed

`RecommendationCard` should support decision-making and customer discussion
preparation.

It should not replace the owned follow-through shown by `ActionCard` or
`ActionList`.

---

## Decision flow

`RecommendationCard` sits between alerts and actions:

```txt
context and signals
→ evidence and interpretation
→ recommendation rationale
→ validation or customer-readiness status
→ action creation or customer discussion
```

Use `AlertCard` to highlight a risk or blocker.

Use `RecommendationCard` to explain the recommendation rationale.

Use `ActionCard` to assign the internal work needed to execute, validate or
prepare the recommendation.

---

## RecommendationCard vs ActionCard

`RecommendationCard` is for decision rationale.

It should explain what is recommended, why it is recommended, what evidence
supports it, what validation is needed and whether it is internal, needs review
or customer-ready.

`ActionCard` is for accountable execution.

It should describe an internal or operational task that has an owner, due date,
priority and follow-through context.

Use `RecommendationCard` when the user needs to know:

```txt
what is recommended
why it matters
what evidence supports it
what asset or customer scope it applies to
what validation or proof status applies
whether it can be shared with the customer
```

Use `ActionCard` when the user needs to know:

```txt
what work must be done
who owns it
when it is due
how urgent it is
what gap it closes
```

A `RecommendationCard` may lead to one or several `ActionCard` items.

An `ActionCard` may be linked to a recommendation, but it should not carry the
full recommendation rationale.

---

## RecommendationCard vs AlertCard

`AlertCard` is for a signal, risk or blocker that requires attention.

`RecommendationCard` is for explaining what should be recommended and why.

Use `AlertCard` when the user needs to know:

```txt
what signal or risk requires attention
where it applies
why it matters
what short next step is recommended
```

Use `RecommendationCard` when the user needs to know:

```txt
what recommendation follows from the signal
what evidence supports it
what interpretation was made
what validation is needed
what outcome is expected
whether it is customer-ready
```

Do not force a rich recommendation into `AlertCard`.

Do not use `RecommendationCard` for a simple risk alert that only needs a short
recommendation.

---

## Required information

Every generated `RecommendationCard` must include these required props:

```txt
title
recommendation
priority
readiness
rationale
scope
evidenceSummary
```

Do not generate a `RecommendationCard` without `recommendation`.

Do not generate a `RecommendationCard` without `scope`.

`title` names the recommendation topic.

`recommendation` states the proposed decision or next customer-facing
recommendation.

`priority` states how important the recommendation is.

`readiness` states whether the recommendation is internal, needs review or is
customer-ready.

`rationale` explains why the recommendation matters.

`scope` states where the recommendation applies.

`evidenceSummary` states the visible or auditable evidence that supports the
recommendation.

For asset-heavy recommendations, also include asset context or affected scope.

For value proof recommendations, also include proof status or proof gap context.

If the recommendation cannot explain why it is recommended or what evidence
supports it, it is not ready to be shown as a `RecommendationCard`.

---

## Props

The component supports these props:

```txt
title
recommendation
rationale
scope
priority
assetContext
customerContext
evidenceSummary
source
sourceScope
sourceStrength
freshness
interpretation
validationStatus
readiness
proofStatus
expectedOutcome
actionLabel
action
className
```

Required props for generated code:

```txt
title
recommendation
priority
readiness
rationale
scope
evidenceSummary
```

Optional props should be added when they improve trust, validation, asset
context, proof context or expected outcome clarity.

Possible readiness values:

```txt
internal
needs_review
customer_ready
```

Possible priority values:

```txt
high
medium
low
```

Possible validation status values should remain content-driven strings, such as:

```txt
Human validation needed
Review before customer use
Customer-ready
Expected outcome, not proven
Internal proof, not customer-ready
```

Use strings for validation and proof context when the status must be explicit and
business-readable.

---

## Example props

```tsx
<RecommendationCard
  title="Recover connectivity before the customer review"
  recommendation="Plan a connectivity recovery action for UPS Room A before the next customer discussion."
  rationale="Partial monitoring coverage weakens confidence in the current service status for critical power assets."
  scope="Critical Power > UPS Room A"
  priority="high"
  evidenceSummary="17 of 25 known assets are currently monitored."
  sourceScope="Schneider monitored assets only"
  sourceStrength="partial"
  freshness="18 hours ago"
  validationStatus="Review before customer use"
  readiness="needs_review"
/>
```

This is good because:

- the recommendation is explicit
- the rationale explains why it matters
- the affected scope is visible
- priority is visible and separate from readiness
- source scope and source strength are not hidden
- the recommendation is not presented as customer-ready too early

---

## Readiness rules

Use readiness to clarify whether a recommendation can be used with a customer.

Use `internal` when the recommendation is still for internal analysis or service
preparation.

Use `needs_review` when the recommendation requires expert validation, source
review, proof review or customer-context review before use.

Use `customer_ready` only when the recommendation is validated, appropriately
worded and supported by customer-ready evidence.

Do not use customer-ready language when the recommendation is based on expected
outcomes, internal proof or partial source evidence that still needs review.

---

## Priority rules

Priority and readiness are different dimensions.

`priority` tells how important or urgent the recommendation is for the customer,
asset, service or business decision.

`readiness` tells whether the recommendation is internal, needs review or is
customer-ready.

A recommendation can be high priority and still need internal validation before
customer use.

A recommendation can be customer-ready and still be low or medium priority.

Use `high` when the recommendation affects critical assets, customer risk,
service continuity, safety, compliance, renewal risk, proof readiness or a near
decision point.

Use `medium` when the recommendation is important but not the first decision or
operational risk to handle.

Use `low` when the recommendation is useful, optional, long-term or not urgent
for the next customer or service decision.

Do not use priority as proof of validation.

Do not use `customer_ready` as a substitute for priority.

Good combinations:

```txt
high priority + needs_review: important but not yet customer-ready
medium priority + customer_ready: ready to share but not critical
low priority + internal: low-urgency internal hypothesis
```

---

## Evidence rules

A recommendation should not create false confidence.

Evidence context may include:

```txt
source
freshness
source scope
source strength
asset scope
connectivity status
partial visibility
Health facts
service history
manual inventory
customer objective
proof status
```

Use evidence summary to explain the most important supporting evidence in plain
language.

Good evidence summaries:

```txt
17 of 25 known assets are currently monitored.
Temperature increased by 11% over 45 days while load remained stable.
Three service actions were closed, but customer-ready proof has not been prepared.
Customer has not reviewed five of twelve recommendations before renewal.
```

Bad evidence summaries:

```txt
AI is confident.
System says yes.
Strong signal.
Value proven.
```

Do not use confidence language as a substitute for visible evidence.

---

## Interpretation rules

Use interpretation to explain the reasoning between evidence and recommendation.

Good interpretations:

```txt
Partial connectivity limits confidence in current asset health status.
Repeated thermal drift may indicate cooling degradation before failure.
The recommendation can support renewal discussion only after proof is validated.
```

Bad interpretations:

```txt
AI says this is important.
The system knows this is right.
The value is proven automatically.
```

Do not present AI-assisted Intelligence interpretation as source-system truth.

Do not hide the difference between observed Health facts and interpreted
Intelligence.

---

## Asset-heavy recommendation rules

For asset-heavy screens, `RecommendationCard` should make asset scope and source
limits explicit.

Asset context may include:

```txt
site
zone
room
asset group
asset type
product family
lifecycle status
connectivity status
affected component
```

Good asset-heavy recommendation titles:

```txt
Recover connectivity before the customer review
Validate modernization option for aging switchgear
Review thermal drift on critical UPS string
Prioritize inspection for partially visible assets
```

Do not present non-connected assets as live-monitored.

Do not imply complete installed base visibility when the evidence only covers
Schneider monitored assets, connected assets or manual inventory.

Do not present Intelligence interpretation as source-system truth without review.

Use `ConnectivityCoverageCard` when the main point is coverage, source scope and
visibility limits.

Use `RecommendationCard` when the main point is the rationale for a recommended
decision.

Asset-heavy recommendations should show priority when the recommendation affects
customer risk, criticality, continuity, modernization planning or the next
decision moment.

---

## Value proof recommendation rules

For value proof screens, `RecommendationCard` should distinguish proof maturity.

Proof context may include:

```txt
expected outcome
technical outcome
internal proof
customer-ready proof
proof gap
validation status
```

Good value proof recommendation titles:

```txt
Prepare customer-ready proof before renewal discussion
Validate expected savings before QBR
Turn closed service actions into customer-ready value evidence
Review proof gap before presenting the recommendation
```

Do not present expected outcomes as proven value.

Do not present technical outcomes or internal proof as customer-ready proof
without validation.

Use `ValueProofCard` when the main point is proof maturity, proof gaps or
customer-ready value evidence.

Use `RecommendationCard` when the main point is why a recommendation should be
made and what validation it needs before customer use.

Value proof recommendations should show priority when the recommendation affects
renewal readiness, customer-ready proof, QBR preparation or confidence in the
customer discussion.

---

## Human validation rules

Critical customer, contract, service, safety, compliance, renewal, value proof,
asset intelligence or modernization recommendations should keep human validation
visible.

Good validation language:

```txt
Human validation needed
Review before customer use
Validate with Schneider expert
Customer-ready after proof review
```

Avoid validation language such as:

```txt
AI approved
AI confirmed
Automatically validated
Proven by AI
```

A recommendation may be AI-assisted, but it should not imply that AI has approved
a critical decision.

---

## Customer-readiness rules

A recommendation may be internal, needs review or customer-ready.

Internal recommendations can support internal coordination but should not be
shown as customer-ready.

Recommendations that need review should guide the user toward validation,
evidence review or proof preparation.

Customer-ready recommendations should be:

```txt
clear
validated
source-aware
customer-relevant
supported by customer-ready evidence
worded without internal-only assumptions
```

Do not use customer-ready labels when evidence is partial, expected, internal-only
or not validated.

Customer-ready status does not define priority. A customer-ready recommendation
may still be low, medium or high priority depending on customer impact and
decision timing.

---

## Action rules

A `RecommendationCard` may include a section-level action or lead to related
`ActionCard` items.

Good recommendation actions:

```txt
Review source evidence
Validate with expert
Prepare customer-ready summary
Create follow-up action
Review affected assets
```

Avoid recommendation actions:

```txt
Confirm AI recommendation
Approve automatically
Prove value
Validate asset intelligence
```

If the user needs to assign work, use `ActionCard` or `ActionList`.

If the user needs to create work, use `CreateActionDialog`.

---

## When to use RecommendationCard

Use `RecommendationCard` for:

- asset intelligence recommendations
- modernization recommendations
- service follow-up recommendations
- renewal mitigation recommendations
- value proof recommendations
- customer-ready recommendation preparation
- recommendations that require source evidence
- recommendations that require human validation
- recommendations that need proof status or readiness status
- recommendations that may lead to one or more actions

---

## When not to use RecommendationCard

Do not use `RecommendationCard` for:

- simple alerts
- metric summaries
- assigned internal tasks
- action lists
- generic notes
- raw Health facts without recommendation
- proof maturity summaries without a recommendation
- connectivity coverage summaries without a recommendation
- customer context summaries
- AI validation claims
- expected outcomes presented as proven value

Use other components instead:

| Need | Use |
| --- | --- |
| Show a signal, risk or blocker | `AlertCard` |
| Group risks or blockers | `PriorityList` |
| Show an assigned internal task | `ActionCard` |
| Group assigned internal tasks | `ActionList` |
| Show or create a structured action | `CreateActionDialog` |
| Show a metric | `MetricCard` |
| Arrange metrics | `MetricGrid` |
| Show source or validation metadata | `StatusSummary`, `MetricCard` or `AlertCard` |
| Show customer context | `CustomerStatusCard` |
| Show connectivity coverage and source limits | `ConnectivityCoverageCard` |
| Show proof maturity and proof gaps | `ValueProofCard` |
| Group generic content | `Card` |

---

## Placement rules

Place `RecommendationCard` after the relevant context and before owned actions.

Recommended asset intelligence structure:

```txt
PageHeader
→ customer, site or installed base context
→ ConnectivityCoverageCard or source/scope context
→ MetricGrid with key asset metrics
→ PriorityList with AlertCard items
→ RecommendationCard
→ ActionList with ActionCard items
```

Recommended value proof structure:

```txt
PageHeader
→ RenewalRiskSummary or customer context
→ ValueProofCard
→ MetricGrid with proof readiness metrics
→ RecommendationCard
→ ActionList with proof follow-up actions
```

Do not place recommendations before the user understands the context.

Do not place owned actions before the recommendation rationale when the action
depends on that rationale.

---

## Good example

```tsx
<RecommendationCard
  title="Recover connectivity before the customer review"
  recommendation="Plan a connectivity recovery action for UPS Room A before the next customer discussion."
  rationale="Partial monitoring coverage weakens confidence in the current service status for critical power assets."
  scope="Critical Power > UPS Room A"
  priority="high"
  evidenceSummary="17 of 25 known assets are currently monitored."
  sourceScope="Schneider monitored assets only"
  sourceStrength="partial"
  freshness="18 hours ago"
  validationStatus="Review before customer use"
  readiness="needs_review"
/>
```

This is good because:

- the recommendation is explicit
- the rationale explains the decision logic
- the evidence is visible
- the source scope is not hidden
- the recommendation is high priority but still needs review
- the recommendation needs review before customer use

---

## Asset intelligence recommendation example

```tsx
<RecommendationCard
  title="Validate modernization option for aging switchgear"
  recommendation="Review the modernization option for the aging SM6 switchgear before the next customer planning session."
  rationale="Lifecycle status, service history and partial Health signals suggest modernization may reduce operational exposure."
  scope="Site A > Medium voltage room"
  priority="high"
  assetContext="SM6 24kV feeder group"
  evidenceSummary="Lifecycle status is aging, two corrective interventions were logged in 12 months and Health visibility is partial."
  source="Lifecycle registry, service history and partial monitoring data"
  sourceStrength="partial"
  validationStatus="Validate with Schneider expert"
  readiness="needs_review"
/>
```

This is good because:

- asset context is explicit
- evidence sources are visible
- Intelligence interpretation is not presented as source-system truth
- expert validation is required before customer use

---

## Value proof recommendation example

```tsx
<RecommendationCard
  title="Prepare customer-ready proof before renewal discussion"
  recommendation="Turn the closed service actions into a customer-ready value proof summary before the renewal meeting."
  rationale="The renewal discussion needs evidence of completed actions and customer-relevant outcomes, not only internal service activity."
  scope="Renewal preparation"
  priority="high"
  evidenceSummary="Three service actions were closed, but customer-ready proof has not been prepared."
  sourceScope="Closed service actions from the last 90 days"
  sourceStrength="medium"
  proofStatus="Internal proof, not customer-ready"
  validationStatus="Proof review needed"
  readiness="needs_review"
/>
```

This is good because:

- internal proof is not presented as customer-ready
- the proof gap is explicit
- the recommendation leads to preparation work
- the renewal context is clear

---

## Bad example

Do not use `RecommendationCard` for vague recommendations:

```tsx
<RecommendationCard
  title="AI recommendation"
  recommendation="Take action."
  rationale="AI is confident."
  scope="Customer account"
  priority="high"
  evidenceSummary="Strong signal."
  validationStatus="AI confirmed"
  readiness="customer_ready"
/>
```

This is weak because:

- the recommendation is vague
- AI confidence replaces visible source evidence
- the scope is generic
- high priority is used without evidence or validation
- validation is claimed without human review
- the recommendation is marked customer-ready without proof

---

## Relationship with ActionList

A `RecommendationCard` may lead to an `ActionList`.

Use `ActionList` when the recommendation has concrete follow-up actions that need
owners, due dates, priorities and execution context.

Example:

```txt
RecommendationCard: Recover connectivity before the customer review
ActionList: Review affected assets, assign recovery owner, confirm customer IT configuration
```

Do not use `RecommendationCard` to replace the owned follow-through shown by
`ActionList`.

---

## Relationship with business patterns

Use business patterns to establish the business context.

Use `RecommendationCard` to explain what should be recommended after that
context is understood.

Examples:

```txt
CustomerStatusCard → RecommendationCard with customer follow-up recommendation
ConnectivityCoverageCard → RecommendationCard with connectivity recovery recommendation
RenewalRiskSummary → RecommendationCard with renewal mitigation recommendation
ValueProofCard → RecommendationCard with proof preparation recommendation
```

Do not use `RecommendationCard` to replace `ConnectivityCoverageCard` when the
main question is coverage and source visibility.

Do not use `RecommendationCard` to replace `ValueProofCard` when the main
question is proof maturity or customer-ready value.

---

## Content quality rules

A recommendation should answer:

1. What is recommended?
2. Why is it recommended?
3. What scope does it apply to?
4. What evidence supports it?
5. What source, scope or freshness limits affect trust?
6. What validation or proof status applies?
7. How important or urgent is it?
8. Is it internal, needs review or customer-ready?
9. What action or decision should follow?

If the recommendation does not answer these questions, refine it before accepting
the screen.

---

## Anti-patterns

Do not generate:

- vague recommendations
- recommendations without evidence
- recommendations without scope
- generated `RecommendationCard` code without the `recommendation` prop
- generated `RecommendationCard` code without the `scope` prop
- recommendations without rationale
- recommendations without priority
- recommendations that confuse priority with readiness
- recommendations that use high priority as proof of validation
- recommendations that claim AI validation
- recommendations that use confidence language instead of source evidence
- recommendations that present non-connected assets as live-monitored
- recommendations that present Intelligence interpretation as source-system truth
- recommendations that imply complete visibility when evidence is partial
- recommendations that present expected outcomes as proven value
- recommendations that present internal proof as customer-ready proof without validation
- recommendations marked customer-ready without proof or validation
- recommendations used as assigned internal tasks
- action ownership hidden inside the recommendation rationale
- full action lists inside a recommendation card
- custom recommendation card components
- local recommendation card implementations
- local recommendation card wrappers
- internal imports from package files

---

## Review checklist

After generation, verify:

- `RecommendationCard` is imported from `design-system-ai-lab`
- no local recommendation card replacement was created
- no local recommendation card wrapper was created
- no internal package import is used
- the recommendation is specific
- the generated `RecommendationCard` includes `title`
- the generated `RecommendationCard` includes `recommendation`
- the generated `RecommendationCard` includes `priority`
- the generated `RecommendationCard` includes `readiness`
- the generated `RecommendationCard` includes `rationale`
- the generated `RecommendationCard` includes `scope`
- the generated `RecommendationCard` includes `evidenceSummary`
- the rationale explains why the recommendation matters
- the scope is explicit
- priority is visible
- priority and readiness are not confused
- high-priority recommendations still show validation needs when they are not customer-ready
- evidence is visible
- source scope, source strength or freshness are visible when they affect trust
- asset-heavy recommendations do not imply complete visibility when coverage is partial
- non-connected assets are not presented as live-monitored
- Intelligence interpretation is not presented as source-system truth
- proof-related recommendations distinguish expected outcomes, internal proof and customer-ready proof
- human validation remains visible for critical decisions
- customer-ready status is used only when evidence is validated and customer-ready
- follow-up work is represented by `ActionCard` or `ActionList` when needed
- the recommendation does not claim AI validation or automatic approval
- the recommendation helps the user decide what to review, validate, prepare or discuss next

---

## Final principle

A `RecommendationCard` should make a recommendation credible, reviewable and
ready for the right decision context.

If the recommendation lacks evidence, scope, priority, rationale, validation
status or readiness status, revise it before accepting the screen.

If the recommendation actually describes assigned internal work, use `ActionCard`
or `ActionList` instead.
