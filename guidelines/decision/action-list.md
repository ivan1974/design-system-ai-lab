# ActionList Guidelines

## Purpose

Use `ActionList` to group recommended, planned or mitigation actions.

An action list should help the user understand what should happen next.

An action list is not a generic list.

An action list is not a risk list.

An action list is not a decorative section.

In generated screens, `ActionList` should usually contain `ActionCard` items
sorted by priority or urgency.

For trust-sensitive screens, `ActionList` should make execution accountable by
keeping ownership, timing, priority and action context visible across the whole
action set.

`ActionList` should help the user see which data, source, validation, asset
visibility, proof or customer follow-up gaps are being closed.

---

## Import

Import `ActionList` from the package root:

```tsx
import { ActionList } from "design-system-ai-lab";
```

If action cards are needed, import them from the same package root:

```tsx
import {
  ActionCard,
  ActionList,
} from "design-system-ai-lab";
```

Do not import `ActionList` from internal package paths.

Do not recreate `ActionList` locally.

Do not create custom action list wrappers.

Do not manually rebuild action sections with raw `div` or `section` wrappers
when `ActionList` fits the need.

---

## Component role

Use `ActionList` when the user needs to scan and compare several next steps.

It should help the user answer:

- what should be done next?
- who owns each action?
- when should each action happen?
- which actions are most urgent?
- which actions reduce customer, service or renewal risk?
- which actions close source, validation, asset visibility or proof gaps?
- which actions need human validation before customer use?

`ActionList` is the layout companion of `ActionCard`.

Use `ActionCard` for individual actions.

Use `ActionList` to group them.

`ActionList` sits after metrics, alerts, recommendations and business patterns:

```txt
context
→ signal, alert or recommendation
→ owned follow-through
→ proof or status update when relevant
```

It should not replace `RecommendationCard`, `AlertCard`, `ValueProofCard` or
`ConnectivityCoverageCard`. It should show the owned actions that follow from
them.

---

## Props

Use the component with these props:

```tsx
<ActionList
  title="Recommended actions"
  description="Next steps to reduce customer risk and prepare the next discussion."
>
  <ActionCard
    title="Plan connectivity review with the customer"
    owner="CSM"
    dueDate="This week"
    priority="high"
    status="todo"
    context="Closes a partial connectivity visibility gap before the customer review."
    assetContext="Critical Power > UPS Room A"
    validationStatus="Review before customer use"
  />
</ActionList>
```

Expected props:

```txt
title
description
actions
children
className
```

Use `title` to name the action section.

Use `description` to explain why these actions matter.

Use `actions` only for section-level actions.

Use `children` for `ActionCard` items.

`ActionCard` children may include planned trust-sensitive context props such as
`status`, `context`, `assetContext`, `sourceContext`, `validationStatus` and
`proofContext` when those details affect follow-through.

Use `className` only for layout adjustments, not to redefine list styling.

---

## Title rules

Action list titles should explain the purpose of the action group.

Good titles:

```txt
Recommended actions
Mitigation actions
Next best actions
Customer follow-up actions
Connectivity recovery actions
Renewal mitigation actions
Value proof preparation actions
Asset visibility recovery actions
Proof gap closure actions
Source evidence review actions
Human validation actions
```

Bad titles:

```txt
List
Items
Actions
Things
Tasks
To do
AI-approved actions
Value proven
Automatic decisions
```

The title should help the user understand why these actions are grouped.

---

## Description rules

Descriptions should clarify the action context.

Good descriptions:

```txt
Next steps to reduce customer risk and prepare the next discussion.
Recommended actions to reduce renewal risk before the customer meeting.
Actions needed to recover monitoring coverage and clarify ownership.
Follow-up actions linked to priority alerts and service proof gaps.
Actions to close source, validation and asset visibility gaps before the customer discussion.
Proof follow-up actions needed before preparing customer-ready value evidence.
Actions that preserve ownership and human validation for critical recommendations.
```

Bad descriptions:

```txt
Here are some actions.
Review the list below.
Things to do.
Action information.
```

The description should explain why the action list matters.

---

## Trust-sensitive action list rules

Use `ActionList` to make follow-through accountable when actions depend on
trust-sensitive context.

Trust-sensitive action lists should make visible:

```txt
owner
due date
priority
action status when relevant
asset context when relevant
source context when relevant
validation status when relevant
proof context when relevant
```

The list should make clear what gap is being closed:

```txt
ownership gap
source gap
validation gap
asset visibility gap
proof gap
customer follow-up gap
```

Do not use `ActionList` to imply that AI, automation or the interface has
approved the actions.

---

## Asset-related action list rules

For asset-heavy screens, `ActionList` should group concrete follow-up actions
that help recover visibility, clarify ownership or validate asset
recommendations.

Good asset-related action list titles:

```txt
Asset visibility recovery actions
Connectivity recovery actions
Asset recommendation validation actions
Critical asset follow-up actions
```

Asset-related action cards should include asset or affected-scope context when
needed for follow-through.

Do not use action lists to present non-connected assets as live-monitored.

Do not use action lists to treat Intelligence interpretation as source-system
truth without review.

---

## Proof-related action list rules

For value proof screens, `ActionList` should group the actions required to
close proof gaps, validate internal proof or prepare customer-ready evidence.

Good proof-related action list titles:

```txt
Proof gap closure actions
Value proof preparation actions
Customer-ready proof actions
Renewal proof follow-up actions
```

Proof-related action cards should distinguish expected outcomes, technical
outcomes, internal proof, customer-ready proof and proof gaps when that context
affects follow-through.

Do not use action lists to present expected outcomes as proven value.

Do not use action lists to mark value proof as complete when evidence is still
internal-only or not customer-ready.

---

## Human validation rules

Critical customer, contract, service, safety, compliance, renewal, value proof,
asset intelligence or modernization actions should keep human validation
visible.

Use action lists to group review, validation and escalation actions when the
user must confirm evidence before acting.

Good section descriptions:

```txt
Actions that require expert review before customer use.
Actions to validate source evidence before the customer-ready summary.
Actions that preserve ownership for critical asset recommendations.
```

Avoid action list titles or descriptions that imply automatic AI approval.

---

## When to use ActionList

Use `ActionList` for:

- recommended actions
- mitigation actions
- follow-up actions
- overdue actions
- service action plans
- renewal risk mitigation actions
- connectivity recovery actions
- value proof preparation actions
- recommendation review actions
- customer meeting preparation actions
- alert follow-up actions
- validation follow-up actions
- source evidence review actions
- asset visibility recovery actions
- proof gap closure actions
- customer-ready proof preparation actions

---

## When not to use ActionList

Do not use `ActionList` for:

- risks or blockers
- alerts
- metrics
- status summaries
- generic notes
- long reports
- display-only customer context
- generic card layouts
- unrelated content groups
- action creation forms
- recommendation detail with Health references and expected outcomes
- proof maturity explanation
- connectivity coverage explanation
- AI validation claims
- action groups without accountable owners

Use other components instead:

| Need | Use |
| --- | --- |
| Individual action | `ActionCard` |
| Create a new action | `CreateActionDialog` |
| Individual risk or signal | `AlertCard` |
| Group risks or blockers | `PriorityList` |
| Single metric | `MetricCard` |
| Group metrics | `MetricGrid` |
| Short status or metadata | `Badge` |
| Structured status context | `StatusSummary` |
| Customer context | `CustomerStatusCard` |
| Connectivity coverage | `ConnectivityCoverageCard` |
| Renewal context | `RenewalRiskSummary` |
| Value proof | `ValueProofCard` |
| Proof maturity and proof gaps | `ValueProofCard` |
| Full connectivity coverage and source limits | `ConnectivityCoverageCard` |
| Full recommendation detail | Richer recommendation pattern when available |
| Generic grouped content | `Card` |

---

## ActionCard usage

`ActionList` should usually contain `ActionCard` items.

Preferred:

```tsx
<ActionList
  title="Mitigation actions"
  description="Recommended actions to reduce renewal risk before the next customer discussion."
>
  <ActionCard
    title="Prepare customer-ready value proof summary"
    owner="CSM"
    dueDate="Jun 14, 2026"
    priority="high"
    status="todo"
    proofContext="Internal proof needs customer-ready synthesis"
    validationStatus="Review before customer use"
  />

  <ActionCard
    title="Plan connectivity recovery review"
    owner="Support Team"
    dueDate="Jun 10, 2026"
    priority="high"
    status="todo"
    assetContext="Critical Power > UPS Room A"
    sourceContext="CompanyName monitored assets only · Source strength: partial"
  />
</ActionList>
```

Avoid placing unrelated content inside `ActionList`.

Use `PriorityList` for risks and `MetricGrid` for metrics.

---

## Section actions

Use the `actions` prop only for a section-level action.

Good examples:

```txt
Create action
Create mitigation action
Review action plan
Review source evidence
Review proof gaps
Validate with expert
View all actions
```

Example:

```tsx
<ActionList
  title="Recommended actions"
  description="Next steps to reduce customer risk and prepare the next discussion."
  actions={<CreateActionDialog trigger={<Button variant="secondary">Create action</Button>} />}
>
  <ActionCard ... />
</ActionList>
```

Do not add many competing section actions.

Do not use the section action to replace the `ActionCard` items.

Use `CreateActionDialog` when the section-level action creates a new action.

Use review-oriented section actions for critical decisions. Avoid labels such as
`Confirm AI recommendation`, `Approve asset intelligence` or `Prove value`.

---

## Sorting rules

Sort action items by priority, urgency or business impact.

Recommended order:

```txt
high
medium
low
```

If two actions have the same priority, show the one with the earliest due date or
highest customer impact first.

Also consider blocked actions first when they prevent proof readiness, customer
follow-up, connectivity recovery or human validation.

Do not randomize order.

Do not create long unordered action lists.

---

## Recommended number of items

An action list should usually contain between two and five items.

Use fewer items when the screen should focus execution.

Avoid long lists that make every action feel equally important.

If there are many actions, show the most important ones first and provide a
secondary action such as:

```txt
View all actions
Review action plan
```

---

## Placement rules

Place `ActionList` after the user understands the context, metrics and priority
risks.

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
→ PriorityList with AlertCard items
→ ActionList with ActionCard items that close visibility or validation gaps
```

Recommended value proof structure:

```txt
PageHeader
→ RenewalRiskSummary or customer context
→ ValueProofCard
→ MetricGrid with proof readiness metrics
→ ActionList with ActionCard items that close proof gaps
```

Do not place action plans before the user understands why the actions matter.

Do not hide recommended actions below too much secondary information.

For asset-heavy actions, show asset scope, connectivity status, source scope or
related alert context before the action list when they affect follow-through.

For proof-related actions, show `ValueProofCard` or proof gap context before
the action list when proof maturity affects the decision.

---

## Relationship with PriorityList

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

Do not put `AlertCard` items inside `ActionList` when the intent is risk
prioritization.

If a `PriorityList` exposes source, proof, ownership or validation gaps,
`ActionList` should show the owned actions that close those gaps.

---

## Relationship with CreateActionDialog

Use `CreateActionDialog` when the user needs to create a new action.

Use `ActionList` to show recommended, planned or existing actions.

Good pattern:

```tsx
<PageHeader
  title="Customer monitoring"
  description="Understand customer status, risks and next actions."
  actions={<CreateActionDialog />}
/>

<ActionList title="Recommended actions">
  <ActionCard
    title="Plan connectivity review with the customer"
    owner="CSM"
    dueDate="This week"
    priority="high"
  />
</ActionList>
```

Do not use `ActionList` as a form.

Do not put form fields directly inside `ActionList`.

Use `CreateActionDialog` when the user still needs to enter or confirm title,
owner, due date, priority, asset context or proof follow-up context.

---

## Relationship with MetricGrid

`MetricGrid` shows measurable signals.

`ActionList` shows what should be done next based on those signals.

Example:

```txt
MetricGrid: Overdue actions = 3, Connected equipment = 68%
ActionList: Assign owners to overdue actions, plan connectivity review
```

`MetricGrid` shows the measurable signal.

`ActionList` shows the owned follow-through.

---

## Relationship with business patterns

Use business patterns to establish context.

Use `ActionList` to show the concrete next steps that follow from that context.

Examples:

```txt
CustomerStatusCard → ActionList with customer follow-up actions
ConnectivityCoverageCard → ActionList with recovery actions
RenewalRiskSummary → ActionList with mitigation actions
ValueProofCard → ActionList with value proof preparation actions
```

Do not replace business patterns with `ActionList`.

`ActionList` should explain what should happen next after the business context is
understood.

Do not use `ActionList` to replace `ConnectivityCoverageCard` when the main
question is coverage and source visibility.

Do not use `ActionList` to replace `ValueProofCard` when the main question is
proof maturity or customer-ready value.

---

## ActionList vs RecommendationCard

`ActionList` is for grouped accountable execution.

It should group internal or operational tasks that have owners, due dates,
priorities and follow-through context.

`RecommendationCard` is for decision rationale.

It should explain what is recommended, why it is recommended, what evidence
supports it, what validation is needed and whether it is internal, needs review
or customer-ready.

Use `ActionList` when the user needs to know:

```txt
what work must be done
who owns each action
when each action is due
which actions are most urgent
what gaps the actions close
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

A `RecommendationCard` may lead to an `ActionList`.

An `ActionList` may be linked to a recommendation, but it should not carry the
full recommendation rationale.

---

## Relationship with richer recommendation patterns

`ActionList` shows owned follow-through.

Use a richer recommendation pattern when the user needs to understand:

```txt
asset match
Health data references
Intelligence insight
risk or opportunity framing
phased action plan
expected outcomes
confidence or validation state
```

Use `ActionList` only for the concrete actions that follow from recommendations.

---

## Good example

```tsx
<ActionList
  title="Recommended actions"
  description="Next steps to reduce customer risk and prepare the next discussion."
>
  <ActionCard
    title="Plan connectivity review with the customer"
    owner="CSM"
    dueDate="This week"
    priority="high"
    status="todo"
    context="Closes a partial connectivity visibility gap before the customer review."
    assetContext="Critical Power > UPS Room A"
    validationStatus="Review before customer use"
  />

  <ActionCard
    title="Prepare customer-ready value proof summary"
    owner="CSM"
    dueDate="Before next customer review"
    priority="high"
    status="blocked"
    proofContext="Internal proof, not customer-ready"
    validationStatus="Customer-ready proof missing"
  />
</ActionList>
```

This is good because:

- the section has a clear title
- the description explains the execution context
- items are represented by `ActionCard`
- actions are concrete and owned
- actions are sorted by priority
- context makes the action list reviewable
- validation and proof gaps remain visible

---

## Asset visibility recovery example

```tsx
<ActionList
  title="Asset visibility recovery actions"
  description="Actions to close connectivity and validation gaps before the next customer discussion."
>
  <ActionCard
    title="Review affected assets before customer discussion"
    owner="CSM"
    dueDate="This week"
    priority="high"
    status="todo"
    context="Follow-up required after partial connectivity alert."
    assetContext="Critical Power > UPS Room A"
    sourceContext="CompanyName monitored assets only · Source strength: partial"
    validationStatus="Review before customer use"
  />

  <ActionCard
    title="Assign owner for partial connectivity recovery"
    owner="Service Manager"
    dueDate="Today"
    priority="high"
    status="todo"
    assetContext="Critical Power > UPS Room A"
    validationStatus="Owner needed before customer follow-up"
  />
</ActionList>
```

---

## Proof gap closure example

```tsx
<ActionList
  title="Proof gap closure actions"
  description="Actions needed before preparing customer-ready value evidence."
>
  <ActionCard
    title="Create proof follow-up before renewal meeting"
    owner="CSM"
    dueDate="Before renewal review"
    priority="high"
    status="blocked"
    context="The recommendation has expected value but no completed action evidence yet."
    proofContext="Expected outcome, not proven"
    validationStatus="Customer-ready proof missing"
  />

  <ActionCard
    title="Confirm source evidence before customer-ready summary"
    owner="CSM"
    dueDate="Before next customer review"
    priority="medium"
    status="todo"
    sourceContext="Closed service actions · Source strength: partial"
    proofContext="Internal proof, not customer-ready"
    validationStatus="Review needed"
  />
</ActionList>
```

---

## Bad examples

Do not manually recreate an action list:

```tsx
<section>
  <h2>Recommended actions</h2>
  <div className="space-y-3">
    <div className="rounded-lg border p-4">...</div>
  </div>
</section>
```

Use `ActionList` and `ActionCard` instead:

```tsx
<ActionList title="Recommended actions">
  <ActionCard ... />
</ActionList>
```

Do not place alerts inside `ActionList`:

```tsx
<ActionList title="Priority alerts">
  <AlertCard ... />
</ActionList>
```

Use `PriorityList` instead:

```tsx
<PriorityList title="Priority alerts">
  <AlertCard ... />
</PriorityList>
```

Do not place form fields inside `ActionList`:

```tsx
<ActionList title="Create action">
  <Field label="Owner">
    <Input />
  </Field>
</ActionList>
```

Use `CreateActionDialog` or a focused `Dialog` form instead.

Do not use `ActionList` to show actions that claim AI validation or automatic
approval:

```tsx
<ActionList title="AI-approved actions">
  <ActionCard
    title="Confirm AI recommendation"
    owner="AI"
    dueDate="Now"
    priority="high"
  />
</ActionList>
```

Use accountable human or team ownership and keep validation context visible.

---

## Content quality rules

An action list should answer:

1. What should be done next?
2. Why are these actions prioritized?
3. Who owns each action?
4. When should each action happen?
5. What gap or decision context does each action close?
6. Which actions require source review, proof review or human validation?

If the list does not answer these questions, refine the title, description or
actions before accepting the screen.

---

## Anti-patterns

Do not generate:

- manually rebuilt action lists
- action lists with raw card-like divs
- action lists containing alerts
- action lists containing metrics
- action lists containing form fields
- action lists with unrelated content
- long unordered action lists
- many actions with the same priority by default
- vague section titles such as `Tasks` or `To do`
- actions without owners
- actions without due dates
- actions without priority
- custom action list components
- local action list implementations
- local action list wrappers
- internal imports from package files
- action lists that hide asset context when it affects follow-through
- action lists that hide source context, proof context or validation status when they affect trust
- action lists that use AI validation as an owner or decision basis
- action lists that present expected outcomes as proven value
- action lists that present internal proof as customer-ready proof without validation
- action lists that mark proof-related work as complete before customer-ready proof exists
- action lists that contain full recommendation detail, phased action plans or expected outcomes that belong in a richer recommendation pattern

---

## Review checklist

After generation, verify:

- `ActionList` is imported from `design-system-ai-lab`
- no local action list replacement was created
- no local action list wrapper was created
- no internal package import is used
- `ActionList` usually contains `ActionCard` items
- the title explains the action section
- the description explains the execution context when needed
- items are sorted by priority, urgency or business impact
- high-priority actions appear first
- every `ActionCard` has title, owner, due date and priority
- trust-sensitive action cards show context when missing context would affect follow-through
- asset-related action cards show asset or affected-scope context when needed
- proof-related action cards show proof gap or validation context when needed
- human validation remains visible for critical decisions
- there are not too many items
- alerts are not placed inside `ActionList`
- metrics are not placed inside `ActionList`
- form fields are not placed inside `ActionList`
- `PriorityList` is used for risks and blockers
- `MetricGrid` is used for metrics
- `CreateActionDialog` is used for action creation flows
- business patterns are used for business context
- action lists close visible data, source, proof, ownership or validation gaps when appropriate
- action lists do not claim AI validation or automatic approval
- action lists do not present expected outcomes as proven value
- full recommendation detail is not forced into `ActionList`
- the list helps the user understand what should happen next

---

## Final principle

An `ActionList` should make the next steps easier to execute and accountable.

If the list does not clarify ownership, timing or priority, improve the actions
before accepting the screen.

If the list depends on asset context, source context, proof maturity or human
validation but hides that context, revise it before accepting the screen.
