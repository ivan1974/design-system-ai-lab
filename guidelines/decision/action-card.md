# ActionCard Guidelines

## Purpose

Use `ActionCard` to show a recommended, planned or overdue action.

An action is not just a note.

An action should describe concrete work that someone can own, plan and complete.

An action should help the user move from insight to execution.

In generated screens, `ActionCard` should make the next step clear after a risk,
metric, recommendation or business summary.

For trust-sensitive screens, `ActionCard` should also make clear what gap the
action closes: ownership gap, validation gap, source gap, asset visibility gap,
proof gap or customer follow-up gap.

`ActionCard` should preserve human accountability. It should not imply that AI,
automation or the interface has approved a critical decision on behalf of the
user.

---

## Import

Import `ActionCard` from the package root:

```tsx
import { ActionCard } from "design-system-ai-lab";
```

If other design system components are needed, import them from the same package
root:

```tsx
import {
  ActionCard,
  ActionList,
  AlertCard,
  Button,
  CreateActionDialog,
  PriorityList,
} from "design-system-ai-lab";
```

Do not import `ActionCard` from internal package paths.

Do not recreate `ActionCard` locally.

Do not create custom action card wrappers.

---

## Component role

Use `ActionCard` when the user needs to understand:

- what action should be done
- who owns it
- when it is due
- how important it is
- what context must not be forgotten
- what gap the action is meant to close

`ActionCard` is especially useful after alerts, risks, blockers, incomplete proof
points or readiness gaps.

It helps convert signals into next steps.

`ActionCard` sits after alerts and recommendations:

```txt
signal or recommendation
→ decision to act
→ owned follow-through
→ proof or status update when relevant
```

For asset-heavy screens, actions may need site, zone, room, asset group or
affected-scope context.

For value proof screens, actions may need proof gap, validation status or
customer-ready evidence context.

---

## Required information

Every `ActionCard` must include:

- action title
- owner
- due date
- priority
- context when missing context would make the action unsafe or unclear

Do not generate an action without an owner.

Do not generate an action without a due date.

Do not generate an action without priority.

If an action cannot be owned, scheduled or prioritized, it is probably not ready
to be shown as an `ActionCard`.

If an action depends on source evidence, asset visibility, proof maturity or
human validation, that dependency should be visible on the action or in the
surrounding alert, recommendation or business pattern.

---

## Props

Use the component with these props:

```tsx
<ActionCard
  title="Plan connectivity review with the customer"
  owner="Account owner"
  dueDate="This week"
  priority="high"
  context="Closes a partial connectivity visibility gap before the customer review."
  assetContext="Critical Power > UPS Room A"
  validationStatus="Review before customer use"
/>
```

Expected props:

```txt
title
owner
dueDate
priority
status (planned)
context (planned)
assetContext (planned)
sourceContext (planned)
validationStatus (planned)
proofContext (planned)
className
```

Expected priority values:

```txt
high
medium
low
```

Use `title` to describe the concrete work.

Use `owner` to name the accountable role, team or person.

Use `dueDate` to make timing clear.

Use `priority` to communicate urgency or business impact.

Planned code evolution:

```tsx
<ActionCard
  title="Review affected assets before customer discussion"
  owner="Account owner"
  dueDate="This week"
  priority="high"
  status="todo"
  context="Follow-up required after partial connectivity alert."
  assetContext="Critical Power > UPS Room A"
  sourceContext="CompanyName monitored assets only · Source strength: partial"
  validationStatus="Review before customer use"
/>
```

Future props should make trust-sensitive context visible without forcing all
context into the action title

---

## Status rules

Planned code evolution should support action status.

Expected status values:

```txt
todo
in_progress
blocked
done
```

Use `todo` when the action is not started.

Use `in_progress` when work has started but is not complete.

Use `blocked` when the action cannot progress until a dependency is resolved.

Use `done` only when the action is completed and does not still require proof,
validation or customer-ready preparation.

Do not use `done` to imply proven value unless value proof is actually
customer-ready and validated.

Use `className` only for layout adjustments, not to redefine action card
styling.

---

## Priority rules

Use `high` for urgent or business-critical actions.

Examples:

```txt
customer risk reduction
critical connectivity recovery
renewal mitigation
overdue customer communication
critical alert follow-up
```

Use `medium` for important actions that are not immediately critical.

Examples:

```txt
prepare a review summary
assign ownership before the next meeting
validate recommendations
follow up on partial coverage
```

Use `low` for useful but lower-priority follow-up.

Examples:

```txt
clean up documentation
prepare optional context
review secondary items
```

Do not mark every action as `high`.

Priority should reflect urgency, business impact or risk reduction.

---

## Good action titles

Good action titles describe concrete work.

Examples:

```txt
Plan connectivity review with the customer
Prepare customer-ready value proof summary
Verify disconnected equipment list
Schedule technical intervention
Assign owner for renewal mitigation plan
Review overdue actions with service team
Select top recommendations for the customer discussion
Prepare QBR summary with closed actions and avoided risks
Review affected assets before customer discussion
Validate asset recommendation with CompanyName expert
Create proof follow-up before renewal meeting
Assign owner for partial connectivity recovery
Confirm source evidence before customer-ready summary
```

Good action titles are:

- specific
- action-oriented
- understandable without extra explanation
- connected to the risks or goals on the screen
- written as work someone can perform

---

## Bad action titles

Avoid vague titles such as:

```txt
Follow up
Check
Review
Update
Action needed
Do something
Customer topic
Next steps
Confirm AI recommendation
Approve asset intelligence
Prove value
Validate automatically
```

These titles are too vague and do not help the user understand what to do next.

Rewrite them as concrete actions.

Avoid titles that imply AI validation, automatic approval or proven value
without source evidence and human validation.

Bad:

```txt
Review
```

Better:

```txt
Review overdue actions with the service manager
```

---

## Owner rules

Owners should be clear enough to assign accountability.

For critical decisions, the owner should be the role accountable for review or
follow-through, not a vague system actor.

Good owners:

```txt
Account owner
Service Manager
Support Team
Field Services
Account Manager
Customer Success Lead
```

Avoid vague owners:

```txt
Team
Someone
Owner
TBD
People
```

If the owner is unknown, use an action that assigns ownership:

```tsx
<ActionCard
  title="Assign owner to overdue connectivity action"
  owner="Service Manager"
  dueDate="This week"
  priority="high"
/>
```

---

## Due date rules

Due dates should be actionable.

Good due dates:

```txt
Today
This week
Before next customer review
Jun 10, 2026
Next 5 business days
Before renewal meeting
```

Avoid vague due dates:

```txt
Later
Soon
Eventually
Upcoming
TBD
```

If exact dates are not available, use a meaningful business deadline.

For asset intelligence, renewal and proof-related actions, prefer deadlines
tied to the decision moment, such as the next customer review, PM visit,
renewal meeting, QBR or validation checkpoint.

---

## Context rules

Use action context when the action would otherwise be ambiguous, unsafe or hard
to execute.

Context may include:

```txt
related alert
related recommendation
affected scope
asset context
source context
validation status
proof gap
customer decision moment
```

Good context examples:

```txt
Follow-up required after partial connectivity alert.
Closes proof gap before renewal discussion.
Source strength is partial; review before customer use.
Customer-ready proof missing for expected outcome.
```

Do not overload the action title with all context.

Use planned context props or surrounding components to make the action
reviewable.

---

## Asset-related action rules

For asset-heavy screens, actions should include asset context when needed for
follow-through.

Asset context may include:

```txt
site
zone
room
asset group
affected scope
connectivity status
source scope
```

Good asset-related action titles:

```txt
Review affected assets before customer discussion
Plan connectivity recovery for UPS Room A
Validate asset recommendation with CompanyName expert
Assign owner for partial connectivity recovery
```

Do not create asset actions that make non-connected assets look live-monitored.

Do not create asset actions that treat Intelligence interpretation as
source-system truth without review.

---

## Proof-related action rules

For value proof screens, actions should make proof maturity visible when it
affects follow-through.

Proof context may include:

```txt
expected outcome
technical outcome
internal proof
customer-ready proof
proof gap
validation status
```

Good proof-related action titles:

```txt
Create proof follow-up before renewal meeting
Prepare customer-ready value proof summary
Confirm source evidence before customer-ready summary
Validate proof readiness before QBR
```

Do not use an action title such as `Prove value` when the action is actually to
collect, validate or prepare proof.

Do not mark proof-related actions as complete if the evidence is still internal
only or not customer-ready.

---

## Human validation rules

`ActionCard` should preserve human accountability.

Critical customer, contract, service, safety, compliance, renewal, value proof,
asset intelligence or modernization actions should make validation ownership
visible when relevant.

Good action language:

```txt
Validate asset recommendation with CompanyName expert
Review source evidence before customer use
Confirm proof readiness before the renewal meeting
Assign owner for modernization feasibility review
```

Avoid action language such as:

```txt
Confirm AI recommendation
Approve asset intelligence
Prove value automatically
Let AI decide next step
```

---

## When to use ActionCard

Use `ActionCard` for:

- recommended next actions
- mitigation actions
- overdue actions
- customer follow-up actions
- service coordination actions
- renewal risk mitigation actions
- connectivity improvement actions
- QBR preparation actions
- recommendation review actions
- value proof preparation actions
- alert follow-up actions
- validation follow-up actions
- source evidence review actions
- asset visibility recovery actions
- proof gap closure actions
- customer-ready proof preparation actions

---

## When not to use ActionCard

Do not use `ActionCard` for:

- generic notes
- static information
- metrics
- alerts
- status metadata
- long-form explanations
- purely decorative content
- form fields
- action creation flows
- complete action lists without `ActionList`
- full recommendation detail with Health references and expected outcomes
- AI validation claims
- expected outcomes presented as proven value
- actions with no accountable human or team
- actions that still need creation through `CreateActionDialog`

Use other components instead:

| Need | Use |
| --- | --- |
| Trigger an action | `Button` |
| Create an action | `CreateActionDialog` |
| Group several actions | `ActionList` |
| Show a risk or blocker | `AlertCard` |
| Group risks or blockers | `PriorityList` |
| Show a metric | `MetricCard` |
| Arrange metrics | `MetricGrid` |
| Show status or metadata | `Badge` |
| Show structured context | `StatusSummary` |
| Show customer context | `CustomerStatusCard` |
| Show renewal context | `RenewalRiskSummary` |
| Show value proof | `ValueProofCard` |
| Show proof maturity and proof gaps | `ValueProofCard` |
| Show source or validation metadata | `StatusSummary`, `MetricCard` or `AlertCard` |
| Show full recommendation detail | Richer recommendation pattern when available |
| Group generic content | `Card` |

---

## ActionList usage

When showing several actions, wrap `ActionCard` items in `ActionList`.

Preferred:

```tsx
<ActionList
  title="Recommended actions"
  description="Next steps to reduce customer risk and prepare the next discussion."
>
  <ActionCard
    title="Plan connectivity review with the customer"
    owner="Account owner"
    dueDate="This week"
    priority="high"
  />

  <ActionCard
    title="Prepare customer-ready value proof summary"
    owner="Account owner"
    dueDate="Before next customer review"
    priority="high"
  />
</ActionList>
```

Avoid manually creating action groups with raw `div` wrappers when `ActionList`
fits the need.

When several actions come from the same alert, recommendation or proof gap,
group them in `ActionList` and keep their owners, due dates and priorities
visible.

---

## CreateActionDialog relationship

Use `CreateActionDialog` when the user needs to create a new action.

Use `ActionCard` to display actions that already exist, are recommended or have
been generated as next steps.

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
    owner="Account owner"
    dueDate="This week"
    priority="high"
  />
</ActionList>
```

Do not use `ActionCard` as an action creation form.

Use `CreateActionDialog` when the user still needs to enter or confirm title,
owner, due date, priority, asset context or proof follow-up context.

Do not use `Button` alone when the expected interaction is creating a structured
action with title, owner, due date and priority.

---

## Placement rules

Place `ActionCard` after the context that explains why the action matters.

Common placements:

```txt
PriorityList with AlertCard items
→ ActionList with ActionCard items
```

```txt
CustomerStatusCard or RenewalRiskSummary
→ MetricGrid with MetricCard items
→ PriorityList with AlertCard items
→ ActionList with ActionCard items
```

```txt
ValueProofCard
→ PriorityList with proof gaps
→ ActionList with mitigation ActionCards
```

Do not place actions before the user understands the situation.

For asset-heavy actions, show asset scope, connectivity status, source scope or
related alert context before the action when they affect follow-through.

For proof-related actions, show `ValueProofCard` or proof gap context before
the action when proof maturity affects the decision.

Do not hide recommended actions below too much secondary information.

---

## Sorting rules

Sort actions by priority when several actions are shown.

Recommended order:

```txt
high
medium
low
```

High-priority actions should be visible quickly.

If actions have the same priority, sort them by urgency or business impact.

Do not create long unordered action lists.

---

## Content rules

An action should be easy to execute or assign.

Each action should answer:

1. What should be done?
2. Who owns it?
3. When should it happen?
4. How important is it?
5. What gap or decision context does it close?
6. Does it require source review, proof review or human validation?

Avoid actions that are too broad.

Bad:

```txt
Improve customer satisfaction
```

Better:

```txt
Prepare a customer-ready value proof summary before the renewal review
```

---

## Good example

```tsx
<ActionCard
  title="Plan connectivity review with the customer"
  owner="Account owner"
  dueDate="This week"
  priority="high"
/>
```

This is good because:

- the title describes concrete work
- the owner is clear
- the due date is actionable
- the priority reflects urgency

---

## Asset follow-up action example

```tsx
<ActionCard
  title="Review affected assets before customer discussion"
  owner="Account owner"
  dueDate="This week"
  priority="high"
  context="Follow-up required after partial connectivity alert."
  assetContext="Critical Power > UPS Room A"
  sourceContext="CompanyName monitored assets only · Source strength: partial"
  validationStatus="Review before customer use"
/>
```

This is good because:

- the action is concrete
- the affected scope is visible
- source context is not hidden
- validation is explicit before customer use

---

## Proof gap action example

```tsx
<ActionCard
  title="Create proof follow-up before renewal meeting"
  owner="Account owner"
  dueDate="Before renewal review"
  priority="high"
  status="blocked"
  context="The recommendation has expected value but no completed action evidence yet."
  proofContext="Expected outcome, not proven"
  validationStatus="Customer-ready proof missing"
/>
```

This is good because:

- the title describes proof preparation work
- the proof gap is explicit
- the action is not marked as customer-ready
- the blocked status reflects missing evidence

---

## Human validation action example

```tsx
<ActionCard
  title="Validate asset recommendation with CompanyName expert"
  owner="Service Manager"
  dueDate="Before customer action plan"
  priority="high"
  context="Recommendation is based on Intelligence interpretation of multiple Health signals."
  assetContext="SM6 24kV Bus Coupler"
  validationStatus="Human validation needed"
/>
```

This is good because:

- the action preserves human accountability
- the validation moment is clear
- the action does not claim AI approval

---

## Multiple actions example

```tsx
<ActionList
  title="Mitigation actions"
  description="Recommended actions to reduce renewal risk before the next customer discussion."
>
  <ActionCard
    title="Prepare customer-ready value proof summary"
    owner="Account owner"
    dueDate="Jun 14, 2026"
    priority="high"
  />

  <ActionCard
    title="Plan connectivity recovery review"
    owner="Support Team"
    dueDate="Jun 10, 2026"
    priority="high"
  />

  <ActionCard
    title="Select top recommendations for the customer discussion"
    owner="Account owner"
    dueDate="Jun 18, 2026"
    priority="medium"
  />
</ActionList>
```

---

## Bad example

Do not generate vague actions:

```tsx
<ActionCard
  title="Follow up"
  owner="Team"
  dueDate="Later"
  priority="low"
/>
```

This is weak because:

- the title is vague
- the owner is not specific enough
- the due date is not actionable
- the action is not connected to a clear user decision

Also avoid actions that claim AI validation or proven value without evidence:

```tsx
<ActionCard
  title="Confirm AI recommendation"
  owner="AI"
  dueDate="Now"
  priority="high"
/>
```

This is weak because:

- the owner is not accountable
- AI validation replaces human review
- the action does not expose source or validation context

---

## Relationship with AlertCard

`AlertCard` explains the risk.

`ActionCard` explains what to do next.

When an alert is shown, consider whether a corresponding action should also be
shown.

Example:

```tsx
<AlertCard
  severity="critical"
  title="Connectivity loss on critical equipment"
  equipment="Main switchboard"
  description="The customer may lose visibility on key assets."
  recommendation="Plan a connectivity review with the customer and support team."
/>

<ActionCard
  title="Plan connectivity review with the customer"
  owner="Account owner"
  dueDate="This week"
  priority="high"
/>
```

If an `AlertCard` exposes a source, proof, ownership or validation gap, the
related `ActionCard` should close that gap with owner, due date and priority.

---

## Relationship with MetricCard

`MetricCard` can show the measurable signal.

`ActionCard` shows the next step.

Example:

```txt
MetricCard: Overdue actions = 3
ActionCard: Assign owners to overdue actions
```

`MetricCard` shows the measurable signal.

`ActionCard` should show the owned follow-through.

---

## Relationship with business patterns

Use business patterns to establish the business context.

Use `ActionCard` to show what should happen next.

Examples:

```txt
CustomerStatusCard → ActionList with customer follow-up actions
ConnectivityCoverageCard → ActionList with recovery actions
RenewalRiskSummary → ActionList with mitigation actions
ValueProofCard → ActionList with value proof preparation actions
```

Do not use `ActionCard` to replace `ValueProofCard` when the main question is
proof maturity.

Do not use `ActionCard` to replace `ConnectivityCoverageCard` when the main
question is coverage and source visibility.

---

## ActionCard vs RecommendationCard

`ActionCard` is for accountable execution.

It should describe an internal or operational task that has an owner, due date,
priority and follow-through context.

`RecommendationCard` is for decision rationale.

It should explain what is recommended, why it is recommended, what evidence
supports it, what validation is needed and whether it is internal, needs review
or customer-ready.

Use `ActionCard` when the user needs to know:

```txt
what work must be done
who owns it
when it is due
how urgent it is
what gap it closes
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

A `RecommendationCard` may lead to one or several `ActionCard` items.

An `ActionCard` may be linked to a recommendation, but it should not carry the
full recommendation rationale.

---

## Relationship with richer recommendation patterns

`ActionCard` shows owned follow-through.

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

Use `ActionCard` only for the concrete action that follows from that
recommendation.

---

## Anti-patterns

Do not generate:

- actions without owners
- actions without due dates
- actions without priority
- vague action titles
- vague owners such as `Team` or `Someone`
- vague due dates such as `Later` or `Soon`
- actions disconnected from the screen goal
- too many low-value actions
- duplicate actions with similar wording
- action cards used as notes
- action cards used as alerts
- action cards used as buttons
- action cards used as form fields
- long unordered action groups without `ActionList`
- custom action card components
- local action card implementations
- local action card wrappers
- internal imports from package files
- actions that hide asset context when it affects follow-through
- actions that hide source context, proof context or validation status when they affect trust
- actions that use AI validation as an owner or decision basis
- actions that present expected outcomes as proven value
- actions that present internal proof as customer-ready proof without validation
- actions that mark proof-related work as done before customer-ready proof exists
- actions that contain full recommendation detail, phased action plans or expected outcomes that belong in a richer recommendation pattern

---

## Review checklist

After generation, verify:

- every `ActionCard` is imported from `design-system-ai-lab`
- no local action card replacement was created
- no local action card wrapper was created
- no internal package import is used
- every `ActionCard` has a clear title
- every `ActionCard` has an owner
- every `ActionCard` has a due date
- every `ActionCard` has a priority
- priorities are not all `high` by default
- high-priority actions appear first
- action titles describe concrete work
- owners are accountable enough
- due dates are actionable
- trust-sensitive actions show context when missing context would affect follow-through
- asset-related actions show asset or affected-scope context when needed
- proof-related actions show proof gap or validation context when needed
- human validation remains visible for critical decisions
- actions are connected to risks, metrics, business patterns or user goals
- actions close a visible data, source, proof, ownership or validation gap when appropriate
- actions do not claim AI validation or automatic approval
- actions do not present expected outcomes as proven value
- several actions are grouped with `ActionList`
- `CreateActionDialog` is used when the user needs to create a new action
- full recommendation detail is not forced into `ActionCard`
- actions help the user decide what to do next

---

## Final principle

An `ActionCard` should turn insight into accountable follow-through.

If the action does not help the user move forward, do not generate it.

If the action depends on asset context, source context, proof maturity or human
validation but hides that context, revise it before accepting the screen.
