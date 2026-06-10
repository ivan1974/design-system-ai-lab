# CreateActionDialog Guidelines

## Purpose

Use `CreateActionDialog` to let the user create a structured follow-up,
mitigation or service action.

An action creation flow should capture enough information to make the action
owned, scheduled and prioritized.

For trust-sensitive screens, the flow should also capture enough context for the
created action to become an `ActionCard` without losing asset context, source
context, validation status or proof context.

A create action dialog is not a generic dialog.

A create action dialog is not an action card.

A create action dialog is not a full workflow page.

A create action dialog is not a recommendation approval flow.

A create action dialog is not an AI validation flow.

In generated screens, use `CreateActionDialog` instead of manually rebuilding an
action creation form with `Dialog`, `Field`, `Input`, `Select` and `Textarea`
when the standard action creation flow fits.

---

## Import

Import `CreateActionDialog` from the package root:

```tsx
import { CreateActionDialog } from "design-system-ai-lab";
```

If other screen components are needed, import them from the same package root:

```tsx
import {
  ActionCard,
  ActionList,
  Button,
  CreateActionDialog,
  PageHeader,
} from "design-system-ai-lab";
```

Do not import `CreateActionDialog` from internal package paths.

Do not recreate `CreateActionDialog` locally.

Do not create custom action dialog wrappers.

Do not manually rebuild the standard action creation flow when
`CreateActionDialog` fits the need.

---

## Component role

Use `CreateActionDialog` when the user needs to create:

- a follow-up action
- a mitigation action
- a customer action
- a service action
- a connectivity recovery action
- a renewal mitigation action
- a value proof preparation action
- an alert follow-up action
- an owner-assigned next step
- a source evidence review action
- a human validation action
- an asset visibility recovery action
- a proof gap closure action

It should help the user turn a signal, blocker, recommendation or risk into a
structured action.

It should create accountable execution work, not approve the underlying signal,
recommendation or AI-assisted interpretation.

Use it when the user needs to assign work with owner, due date, priority and
follow-through context.

---

## Captured fields

The standard action creation flow captures:

- action title
- owner
- priority
- due date
- note
- action context when needed
- asset context when needed
- source context when needed
- validation status when needed
- proof context when needed

These fields should map to the action structure used by `ActionCard`.

Every created action should be able to become an `ActionCard` with:

- title
- owner
- due date
- priority
- context when the action would otherwise lose important follow-through information
- asset context when the action relates to a site, zone, room, asset group or affected scope
- source context when source scope, source strength or freshness affect trust
- validation status when human review is required before customer use
- proof context when the action closes a proof gap or prepares customer-ready evidence

---

## Props

Use the component with these props:

```tsx
<CreateActionDialog
  trigger={<Button>Create action</Button>}
  title="Create customer action"
  description="Add a follow-up action with an owner, due date and priority."
  confirmLabel="Save action"
/>
```

Expected props:

```txt
trigger
title
description
confirmLabel
defaultValues
defaultValues.context
defaultValues.assetContext
defaultValues.sourceContext
defaultValues.validationStatus
defaultValues.proofContext
showContextFields
onSubmit
```

Use `trigger` to customize the button or element opening the dialog.

Use `title` to clarify the type of action being created.

Use `description` to explain the action context.

Use `confirmLabel` to make the save action explicit.

Use `defaultValues` to prefill action fields when the action is linked to a
specific alert, risk or recommendation.

Use contextual `defaultValues` when the action is linked to asset intelligence,
partial source evidence, validation needs or value proof gaps.

Use `showContextFields` to explicitly display structured context fields for
trust-sensitive action creation.

Context fields should also be displayed automatically when contextual
`defaultValues` are provided.

Use `onSubmit` when the generated app needs to handle submitted action values.

---

## Default usage

Use the default pattern when a generic follow-up action is enough.

```tsx
<CreateActionDialog />
```

This is acceptable when the surrounding context already makes the action purpose
clear.

Prefer a customized trigger, title and description when the action is tied to a
specific business context.

---

## Recommended usage in PageHeader

Use `CreateActionDialog` in `PageHeader` when the main screen action is to create
a follow-up or mitigation action.

```tsx
<PageHeader
  title="Customer monitoring"
  description="Understand customer status, risks and next actions."
  actions={<CreateActionDialog />}
/>
```

For renewal or risk-specific screens, customize the trigger and copy.

```tsx
<PageHeader
  title="Renewal risk review"
  description="Review renewal exposure, value proof gaps and mitigation actions before the customer discussion."
  actions={
    <CreateActionDialog
      trigger={<Button>Create mitigation action</Button>}
      title="Create mitigation action"
      description="Add an action to reduce renewal risk before the customer meeting."
      confirmLabel="Save mitigation action"
    />
  }
/>
```

---

## Recommended usage in ActionList

Use `CreateActionDialog` as a section-level action when the user can add an
action to an existing action plan.

```tsx
<ActionList
  title="Recommended actions"
  description="Next steps to reduce customer risk and prepare the next discussion."
  actions={
    <CreateActionDialog
      trigger={<Button variant="secondary">Create action</Button>}
      title="Create follow-up action"
      description="Add an action linked to the current customer context."
      confirmLabel="Save action"
    />
  }
>
  <ActionCard
    title="Plan connectivity review with the customer"
    owner="Account owner"
    dueDate="This week"
    priority="high"
  />
</ActionList>
```

Do not put form fields directly inside `ActionList`.

Use `CreateActionDialog` for the creation flow.

---

## Usage linked to an alert

Use `defaultValues` when the action is linked to a specific alert or blocker.

```tsx
<CreateActionDialog
  trigger={<Button variant="secondary">Create recovery action</Button>}
  title="Create recovery action"
  description="Create an action linked to the connectivity blocker."
  confirmLabel="Save recovery action"
  defaultValues={{
    title: "Plan connectivity review with the customer",
    owner: "Account owner",
    priority: "high",
    note: "Connectivity is partial and affects critical assets.",
  }}
/>
```

Use this pattern when the alert already implies a clear recommended next step.

---

## Usage linked to a recommendation

Use `defaultValues` when the action follows from a `RecommendationCard`.

The dialog should create the internal work needed to review, validate, prepare
or execute the recommendation. It should not approve the recommendation itself.

```tsx
<CreateActionDialog
  trigger={<Button variant="secondary">Create follow-up action</Button>}
  title="Create recommendation follow-up action"
  description="Add an action to review and prepare the recommendation before customer use."
  confirmLabel="Save follow-up action"
  defaultValues={{
    title: "Review source evidence before customer discussion",
    owner: "Account owner",
    priority: "high",
    context: "Follow-up required after high-priority recommendation.",
    sourceContext: "CompanyName monitored assets only · Source strength: partial",
    validationStatus: "Review before customer use",
    note: "Do not use the recommendation with the customer until evidence has been reviewed.",
  }}
/>
```

Use this pattern when the recommendation is important but still needs review,
source evidence validation or customer-ready preparation.

---

## Usage linked to asset context

Use asset-specific copy when the action relates to asset visibility, source
strength or asset recommendation validation.

```tsx
<CreateActionDialog
  trigger={<Button variant="secondary">Create asset review action</Button>}
  title="Create asset review action"
  description="Add an action to review affected assets before customer use."
  confirmLabel="Save asset review action"
  defaultValues={{
    title: "Review affected assets before customer discussion",
    owner: "Account owner",
    priority: "high",
    context: "Follow-up required after partial connectivity alert.",
    assetContext: "Critical Power > UPS Room A",
    sourceContext: "CompanyName monitored assets only · Source strength: partial",
    validationStatus: "Review before customer use",
    note: "Confirm affected scope before preparing the customer summary.",
  }}
/>
```

Do not use asset action creation to imply that non-connected assets are
live-monitored.

---

## Usage linked to renewal risk

Use renewal-specific copy when creating mitigation actions.

```tsx
<CreateActionDialog
  trigger={<Button>Create mitigation action</Button>}
  title="Create renewal mitigation action"
  description="Add an action to reduce renewal risk before the customer discussion."
  confirmLabel="Save mitigation action"
  defaultValues={{
    title: "Prepare customer-ready value proof summary",
    owner: "Account owner",
    priority: "high",
    proofContext: "Internal proof, not customer-ready",
    validationStatus: "Proof review needed",
    note: "Value proof is incomplete and should be prepared before the renewal meeting.",
  }}
/>
```

The copy should explain why the action matters in the current context.

---

## Usage linked to value proof

Use value-proof-specific copy when the user needs to prepare proof points.

```tsx
<CreateActionDialog
  trigger={<Button variant="secondary">Create proof action</Button>}
  title="Create value proof action"
  description="Add an action to prepare customer-ready proof points."
  confirmLabel="Save proof action"
  defaultValues={{
    title: "Prepare customer-ready value proof summary",
    owner: "Account owner",
    priority: "medium",
    proofContext: "Customer-ready proof missing",
    validationStatus: "Proof review needed",
    note: "Closed actions and resolved risks should be translated into customer-ready outcomes.",
  }}
/>
```

---

## Usage linked to source evidence review

Use source-review copy when the action exists to clarify evidence before a
recommendation, summary or customer discussion.

```tsx
<CreateActionDialog
  trigger={<Button variant="secondary">Create source review action</Button>}
  title="Create source review action"
  description="Add an action to review source evidence before customer use."
  confirmLabel="Save source review action"
  defaultValues={{
    title: "Confirm source evidence before customer-ready summary",
    owner: "Account owner",
    priority: "medium",
    sourceContext: "Closed service actions · Source strength: partial",
    validationStatus: "Review needed",
    proofContext: "Internal proof, not customer-ready",
    note: "Confirm the evidence before using it in a customer-ready value summary.",
  }}
/>
```

Do not use `CreateActionDialog` to claim that evidence has already been
validated.

---

## Usage linked to human validation

Use human-validation copy when the action exists to preserve accountability for
a critical decision.

```tsx
<CreateActionDialog
  trigger={<Button variant="secondary">Create validation action</Button>}
  title="Create human validation action"
  description="Add an action for expert review before customer use."
  confirmLabel="Save validation action"
  defaultValues={{
    title: "Validate asset recommendation with CompanyName expert",
    owner: "Service Manager",
    priority: "high",
    context: "Recommendation is based on Intelligence interpretation of multiple Health signals.",
    assetContext: "SM6 24kV Bus Coupler",
    validationStatus: "Human validation needed",
    note: "Validate the recommendation before it is used in the customer action plan.",
  }}
/>
```

The dialog creates a validation task. It does not validate the recommendation
by itself.

---

## Trigger rules

The trigger should usually be a `Button`.

Good trigger labels:

```txt
Create action
Create follow-up action
Create mitigation action
Create recovery action
Create proof action
Add action
Create source review action
Create validation action
Create asset review action
Create proof follow-up action
```

Avoid vague trigger labels:

```txt
Open
More
Submit
Click here
Action
Go
Approve recommendation
Confirm AI recommendation
Validate automatically
```

The trigger should tell the user what kind of action they are about to create.

Do not create local button wrappers.

The package `Button` is already compatible with this pattern.

---

## Title rules

Dialog titles should be task-specific.

Good titles:

```txt
Create customer action
Create follow-up action
Create mitigation action
Create recovery action
Create renewal mitigation action
Create value proof action
Create source review action
Create human validation action
Create asset review action
Create proof follow-up action
```

Bad titles:

```txt
Dialog
Modal
Create
Form
Details
Approve recommendation
Validate AI output
Confirm asset intelligence
```

The title should identify the type of action being created.

---

## Description rules

Descriptions should explain why the action is being created.

Good descriptions:

```txt
Add a follow-up action with an owner, due date and priority.
Add an action to reduce renewal risk before the customer meeting.
Create an action linked to the connectivity blocker.
Add an action to prepare customer-ready proof points.
Add an action to review source evidence before customer use.
Add an action for expert validation before the recommendation is shared.
Add an action to close an asset visibility gap before customer follow-up.
```

Bad descriptions:

```txt
Fill in the form below.
Enter information.
Create something.
This is a form.
Approve this recommendation.
Confirm the AI output.
Validate automatically.
```

The description should connect the action creation flow to the screen context.

---

## Confirm label rules

The confirm label should make the save action explicit.

Good labels:

```txt
Save action
Save mitigation action
Save recovery action
Save proof action
Create action
Save source review action
Save validation action
Save asset review action
Save proof follow-up action
```

Avoid vague labels:

```txt
OK
Submit
Validate
Confirm
Approve
Validate
Confirm AI
```

The label should tell the user what will be saved or created.

---

## Default values rules

Use `defaultValues` only when the screen context already suggests useful action
content.

Good default values:

```tsx
defaultValues={{
  title: "Plan connectivity review with the customer",
  owner: "Account owner",
  priority: "high",
  context: "Follow-up required after partial connectivity alert.",
  assetContext: "Critical Power > UPS Room A",
  sourceContext: "CompanyName monitored assets only · Source strength: partial",
  validationStatus: "Review before customer use",
  dueDate: "",
  note: "Connectivity is partial and affects critical assets.",
}}
```

Do not prefill vague or low-quality values.

Avoid:

```tsx
defaultValues={{
  title: "Follow up",
  owner: "Team",
  priority: "low",
  validationStatus: "AI confirmed",
  note: "Check later.",
}}
```

Prefilled values should be specific, actionable and aligned with the current
screen context.

Prefilled context should preserve trust-sensitive information when it affects
follow-through.

Do not prefill values that imply AI validation, automatic approval, proven value
or customer-ready status unless the surrounding evidence supports it.

---

## Context field rules

Use context fields when the action would otherwise lose important follow-through
information.

Use `context` for why the action exists.

Use `assetContext` for site, zone, room, asset group, affected scope or product
context.

Use `sourceContext` for source scope, source strength, freshness or evidence
limitations.

Use `validationStatus` for human review, expert validation or customer-use
readiness.

Use `proofContext` for expected outcomes, internal proof, customer-ready proof
gaps or proof preparation status.

Keep context values concise enough to appear later on `ActionCard`.

Do not hide critical context in a long free-form note when a structured context
field is available.

---

## Context field display rules

Do not show all contextual fields by default.

For simple actions, keep the dialog focused on:

```txt
Action title
Owner
Priority
Due date
Note
```

Show contextual fields when:

```txt
showContextFields is true
defaultValues include context
defaultValues include assetContext
defaultValues include sourceContext
defaultValues include validationStatus
defaultValues include proofContext
```

Use contextual fields for trust-sensitive actions where asset, source,
validation or proof context affects follow-through.

Do not make simple action creation unnecessarily long.

Do not hide trust-sensitive context in the note when structured context fields
are available.

---

## Human validation and AI usage rules

`CreateActionDialog` creates work for a human or accountable team.

It should not approve a recommendation, validate AI output or confirm asset
intelligence by itself.

Use AI only for synthesis, explanation, prioritization, recommendation, proof
gap explanation, grounded action-plan drafting or reformulation.

Critical customer, contract, service, safety, compliance, renewal, value proof,
asset intelligence or modernization decisions should keep human validation
visible.

Good action creation language:

```txt
Create validation action
Review source evidence
Validate with CompanyName expert
Prepare customer-ready proof summary
Create proof follow-up action
```

Avoid action creation language:

```txt
Approve recommendation
Confirm AI recommendation
Validate automatically
Confirm asset intelligence
Prove value automatically
```

---

## When to use CreateActionDialog

Use `CreateActionDialog` for:

- creating follow-up actions
- creating mitigation actions
- creating recovery actions
- creating value proof preparation actions
- creating renewal risk actions
- creating actions from alerts
- creating actions from recommendations
- creating source evidence review actions
- creating human validation actions
- creating asset review actions
- creating proof follow-up actions
- creating actions from customer review screens
- adding actions to an existing action list
- creating simple actions without showing contextual fields by default
- creating trust-sensitive actions with contextual fields when needed

---

## When not to use CreateActionDialog

Do not use `CreateActionDialog` for:

- displaying existing actions
- showing action plans
- showing risks or blockers
- showing metrics
- showing status summaries
- editing long workflows
- multi-step forms
- generic notes
- customer context
- renewal context
- value proof content
- approving recommendations
- validating AI output
- confirming asset intelligence
- presenting customer-ready decisions
- displaying recommendation rationale
- displaying proof maturity
- displaying connectivity coverage

Use other components instead:

| Need | Use |
| --- | --- |
| Display an action | `ActionCard` |
| Group actions | `ActionList` |
| Risk or blocker | `AlertCard` |
| Group risks or blockers | `PriorityList` |
| Recommendation rationale | `RecommendationCard` |
| Metric | `MetricCard` |
| Group metrics | `MetricGrid` |
| Customer context | `CustomerStatusCard` |
| Renewal context | `RenewalRiskSummary` |
| Connectivity coverage | `ConnectivityCoverageCard` |
| Source or validation metadata | `StatusSummary` |
| Value proof | `ValueProofCard` |
| Generic focused dialog | `Dialog` |
| Custom short form | `Dialog` with `Field`, `Input`, `Select` and `Textarea` |

---

## Relationship with Dialog

`CreateActionDialog` is a specialized action creation pattern built on top of
`Dialog` and form components.

Use `CreateActionDialog` for standard action creation.

Use raw `Dialog` only when the flow is not an action creation flow or when the
fields are meaningfully different.

Avoid manually recreating this structure:

```tsx
<Dialog title="Create action">
  <Field label="Action title">
    <Input />
  </Field>
  <Field label="Priority">
    <Select />
  </Field>
</Dialog>
```

Use `CreateActionDialog` instead when the task is action creation.

---

## Relationship with ActionCard and ActionList

Use `CreateActionDialog` to create actions.

Use `ActionCard` to display actions.

Use `ActionList` to group actions.

The values captured by `CreateActionDialog` should be able to populate an
`ActionCard` without losing owner, due date, priority, context, asset context,
source context, validation status or proof context.

Recommended flow:

```txt
PriorityList with AlertCard items
→ ActionList with ActionCard items
→ CreateActionDialog as the section-level create action control
```

Do not use `CreateActionDialog` as a display component for existing actions.

---

## Relationship with RecommendationCard

Use `RecommendationCard` to explain recommendation rationale.

Use `CreateActionDialog` to create the follow-up action that reviews, validates,
prepares or executes the recommendation.

Example:

```txt
RecommendationCard: Recover connectivity before the customer review
CreateActionDialog: Create source review action
ActionCard: Review affected assets before customer discussion
```

Do not use `CreateActionDialog` to approve the recommendation or to claim that
the recommendation is customer-ready.

---

## Relationship with business patterns

Use business patterns to establish context.

Use `CreateActionDialog` to create the action that follows from that context.

Examples:

```txt
CustomerStatusCard → CreateActionDialog for customer follow-up
ConnectivityCoverageCard → CreateActionDialog for recovery action
RecommendationCard → CreateActionDialog for recommendation follow-up action
StatusSummary → CreateActionDialog for source or validation review action
RenewalRiskSummary → CreateActionDialog for mitigation action
ValueProofCard → CreateActionDialog for proof preparation action
AlertCard → CreateActionDialog for alert follow-up
```

The dialog copy should reflect the context.

---

## Good example

```tsx
<CreateActionDialog
  trigger={<Button>Create mitigation action</Button>}
  title="Create mitigation action"
  description="Add an action to reduce renewal risk before the customer meeting."
  confirmLabel="Save mitigation action"
  defaultValues={{
    title: "Prepare customer-ready value proof summary",
    owner: "Account owner",
    priority: "high",
    proofContext: "Internal proof, not customer-ready",
    validationStatus: "Proof review needed",
    note: "Value proof is incomplete and should be prepared before the renewal meeting.",
  }}
/>
```

This is good because:

- the trigger is explicit
- the title identifies the task
- the description explains the context
- the confirm label is specific
- default values are actionable
- trust-sensitive proof and validation context are preserved
- the action can become an `ActionCard`

---

## Bad examples

Do not manually rebuild the standard action dialog:

```tsx
<Dialog
  trigger={<Button>Create action</Button>}
  title="Create action"
>
  <form>
    <Field label="Action title">
      <Input />
    </Field>
    <Field label="Priority">
      <Select />
    </Field>
  </form>
</Dialog>
```

Use `CreateActionDialog` instead:

```tsx
<CreateActionDialog />
```

Do not use vague copy:

```tsx
<CreateActionDialog
  trigger={<Button>More</Button>}
  title="Form"
  description="Enter information."
  confirmLabel="OK"
/>
```

Use task-specific copy instead.

Do not use the dialog to approve recommendations or AI output:

```tsx
<CreateActionDialog
  trigger={<Button>Approve recommendation</Button>}
  title="Validate AI output"
  description="Confirm the AI recommendation."
  confirmLabel="Approve"
  defaultValues={{
    title: "Approve AI recommendation",
    owner: "AI",
    priority: "high",
    validationStatus: "AI confirmed",
  }}
/>
```

Use `RecommendationCard` for rationale and `CreateActionDialog` only for human
follow-up work.

Do not use `CreateActionDialog` to display an action:

```tsx
<CreateActionDialog
  title="Plan connectivity review with the customer"
/>
```

Use `ActionCard` instead.

---

## Content quality rules

A create action dialog should answer:

1. What action is the user creating?
2. Why does this action matter now?
3. Who should own it?
4. When should it happen?
5. How important is it?
6. What asset, source, validation or proof context should the owner know?
7. Does the action preserve human accountability for critical decisions?

If the dialog copy or default values do not support these questions, refine them
before accepting the screen.

---

## Anti-patterns

Do not generate:

- manually rebuilt action creation dialogs
- generic `Dialog` replacements when `CreateActionDialog` fits
- local action dialog components
- local action dialog wrappers
- local button wrappers for the trigger
- vague trigger labels
- vague dialog titles
- vague confirm labels
- vague default values
- default owner values such as `Team` or `TBD`
- default action titles such as `Follow up`
- raw form fields inside `ActionList`
- action creation flows that do not capture owner, due date and priority
- internal imports from package files
- action creation flows that lose asset context when it affects follow-through
- action creation flows that lose source context, validation status or proof context when they affect trust
- action creation flows that use AI as the owner or validation source
- action creation flows that approve recommendations instead of creating follow-up work
- action creation flows that claim AI validation or automatic approval
- action creation flows that present expected outcomes as proven value
- action creation flows that present internal proof as customer-ready proof without validation
- action creation flows that show all contextual fields by default for simple actions
- action creation flows that become too tall or hard to scan without need

---

## Review checklist

After generation, verify:

- `CreateActionDialog` is imported from `design-system-ai-lab`
- no local action dialog replacement was created
- no local action dialog wrapper was created
- no internal package import is used
- the trigger is explicit
- the title describes the action creation task
- the description explains the context
- the confirm label is specific
- default values are specific when used
- default values are not vague placeholders
- default values preserve asset context when needed
- default values preserve source context when needed
- default values preserve validation status when needed
- default values preserve proof context when needed
- default values do not claim AI validation or automatic approval
- the action creation flow captures title, owner, priority, due date and note
- the action creation flow captures structured context when the action is trust-sensitive
- contextual fields are not shown by default for simple actions
- contextual fields are shown when `showContextFields` is true or contextual `defaultValues` are provided
- the dialog creates accountable work rather than approving the recommendation
- human validation remains visible for critical decisions
- `ActionCard` is used to display existing or recommended actions
- `ActionList` is used to group actions
- raw form fields are not placed directly inside `ActionList`
- raw `Dialog` is not used to recreate standard action creation
- the dialog helps the user turn a signal, risk or recommendation into an owned next step

---

## Final principle

A `CreateActionDialog` should turn a decision signal into an owned, scheduled,
prioritized and context-preserving action.

If the user is creating an action, use this pattern before rebuilding the flow
manually.

If the action depends on asset context, source context, validation status or
proof context, preserve that context in structured fields before accepting the
screen.
