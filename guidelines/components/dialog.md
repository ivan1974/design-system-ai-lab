# Dialog Guidelines

## Purpose

Use `Dialog` for short, focused creation or confirmation flows.

A dialog should help the user complete one clear task without leaving the
current screen.

A dialog is not a full workflow.

A dialog is not a replacement for a complex page.

In generated screens, prefer higher-level patterns such as `CreateActionDialog`
when they match the task.

A dialog may support review or confirmation, but it must not make critical
customer, contract, service, renewal, asset intelligence, modernization or
value proof decisions look automatically validated.

---

## Import

Import `Dialog` from the package root:

```tsx
import { Dialog } from "design-system-ai-lab";
```

If other design system components are needed, import them from the same package
root:

```tsx
import {
  Button,
  CreateActionDialog,
  Dialog,
  DialogClose,
  DialogFooter,
  Field,
  Input,
  Select,
  Textarea,
} from "design-system-ai-lab";
```

Do not import `Dialog` from internal package paths.

Do not recreate `Dialog` locally with Radix or custom modal code.

Do not create local dialog wrappers.

The package `Button` is already compatible with `Dialog` trigger usage.

---

## Component role

Use `Dialog` when the user needs to:

- confirm a simple decision
- review a recommendation before confirming a next step
- review source evidence before validation
- review a proof gap before creating a follow-up
- add a short note
- assign a simple value
- capture a small amount of structured information
- complete a focused task related to the current screen

A dialog should support the current decision context.

For trust-sensitive decisions, the dialog should expose the relevant context
before confirmation: source evidence, source scope, source strength, asset
scope, proof gap, owner or validation requirement when they affect trust.

For action creation flows, prefer `CreateActionDialog` instead of building a
custom `Dialog` manually.

---

## Prefer CreateActionDialog for action creation

Use `CreateActionDialog` when the user needs to create:

- a follow-up action
- a mitigation action
- an action linked to an alert
- an action linked to renewal risk
- an action linked to connectivity recovery
- an action with owner, due date and priority
- an asset-related action that needs site, zone, room, asset group or asset context
- a proof follow-up that needs ownership and due date

Preferred:

```tsx
<CreateActionDialog
  trigger={<Button>Create action</Button>}
  title="Create customer action"
  description="Add a follow-up action with an owner, due date and priority."
  confirmLabel="Save action"
/>
```

Avoid rebuilding the same flow manually unless the prompt explicitly requires a
custom action form.

Do not use a generic `Dialog` to bypass ownership, due date, priority or asset
context when those fields are required for follow-through.

---

## Props

Use the component with these props:

```tsx
<Dialog
  trigger={<Button>Confirm mitigation</Button>}
  title="Confirm mitigation action"
  description="Add this mitigation action to the customer follow-up plan."
>
  ...
</Dialog>
```

Expected props:

```txt
trigger
title
description
children
cancelLabel
confirmLabel
contentClassName
overlayClassName
contentProps
overlayProps
footer
```

Use `trigger` to define the element that opens the dialog.

Use `title` to describe the task.

Use `description` to clarify what the user is about to do.

Use `children` for compact form or confirmation content.

Use `footer` when custom footer actions are needed.

Use `contentClassName` and `overlayClassName` only for layout or spacing
adjustments, not to redefine the dialog visual system.

---

## Trigger rules

The dialog trigger should usually be a `Button`.

Good triggers:

```txt
Create action
Create mitigation action
Assign owner
Plan follow-up
Add note
Confirm mitigation
Review recommendation
Review asset recommendation
Review source evidence
Review proof gap
Validate with expert
```

Avoid vague triggers:

```txt
Open
Click here
More
Submit
Action
Confirm AI recommendation
Validate asset intelligence
Prove value
```

The trigger should make it clear what the dialog is for.

Do not create a local `ForwardedButton` wrapper.

Use the package `Button` directly.

---

## Title rules

Dialog titles should be short and task-oriented.

Good titles:

```txt
Create customer action
Create mitigation action
Assign action owner
Plan connectivity follow-up
Confirm mitigation action
Add renewal note
Review asset recommendation
Review source evidence
Review proof gap
Validate recommendation with expert
```

Bad titles:

```txt
Dialog
Modal
Form
Details
Information
```

The title should explain the purpose of the interaction.

---

## Description rules

Dialog descriptions should explain the context or expected outcome.

Good descriptions:

```txt
Add a follow-up action linked to the current customer situation.
Assign an owner and due date for this mitigation action.
Confirm that this recommendation should be added to the customer action plan.
Review source evidence before validating this asset recommendation.
Check the proof gap before preparing the customer-ready value summary.
```

Avoid generic descriptions:

```txt
Fill in the form below.
Please enter information.
This is a dialog.
```

Descriptions should help the user understand why the dialog matters.

---

## When to use Dialog

Use `Dialog` for:

- confirming a mitigation action
- assigning an owner
- setting a simple due date
- adding a short follow-up note
- capturing a simple decision
- confirming that an item should be added to a plan
- reviewing a recommendation before creating a next step
- reviewing source evidence before validation
- reviewing a proof gap before preparing a value summary
- editing a small number of fields

---

## When not to use Dialog

Do not use `Dialog` for:

- complex multi-step workflows
- large forms
- dashboards
- analytics views
- long reports
- navigation pages
- exploratory data analysis
- displaying many alerts or actions
- replacing the main page structure
- recreating `CreateActionDialog` when that pattern fits
- hiding source evidence, source scope or source strength that should be visible on the main screen
- hiding asset scope, connectivity status or proof gaps that affect trust
- confirming AI recommendations without human review
- presenting expected outcomes as proven value
- presenting technical outcomes or internal proof as customer-ready proof without validation

Use a full screen, dedicated page pattern or existing business pattern instead
when the task requires exploration or multiple steps.

---

## Content rules

Dialog content should be compact and focused.

A dialog should usually contain no more than:

- one short form
- one confirmation message
- a small number of fields
- one clear confirmation action
- one cancellation action

Do not overload a dialog with unrelated fields or long explanations.

Do not hide critical information inside a dialog if it should be visible on the
main screen.

---

## Critical decision and validation rules

Use `Dialog` for focused review or confirmation, not for automatic validation.

For critical customer, contract, service, renewal, asset intelligence,
modernization or value proof decisions, a dialog should make visible:

```txt
what is being reviewed
what evidence supports the decision
what source or scope limits apply
what still needs human validation
what action will be created or confirmed
```

Prefer review-oriented labels:

```txt
Review recommendation
Review asset recommendation
Review source evidence
Review proof gap
Validate with expert
Confirm after review
```

Avoid labels that imply system validation:

```txt
Confirm AI recommendation
Validate asset intelligence
Prove value
Approve expected outcome
```

A dialog should not make the user feel that the system has already made a
critical decision on their behalf.

---

## Asset-heavy dialog rules

For asset-heavy screens, use `Dialog` only for focused review, confirmation or
short input related to the current asset context.

The dialog should not be the only place where the user can see asset scope,
connectivity status, source scope, source strength or raw Health facts when
those elements affect trust.

Good dialog purposes:

```txt
Review affected assets
Review asset recommendation
Assign recovery owner
Add connectivity follow-up note
Confirm connectivity review action
```

If an asset-related action needs owner, due date, priority, site, zone, room,
asset group or asset context, prefer `CreateActionDialog`.

Do not use a dialog to present non-connected assets as live-monitored.

---

## Proof discipline dialog rules

For value proof screens, a dialog may support proof review or action creation,
but it should not present expected outcomes as proven value.

The dialog should distinguish:

```txt
expected outcome
technical outcome
internal proof
customer-ready proof
proof gap
```

Good dialog purposes:

```txt
Review proof gap
Create proof follow-up
Validate proof with expert
Prepare customer-ready value summary
```

Do not use a dialog confirmation to make technical outcomes or internal proof
look customer-ready without validation.

---

## Form rules

Generated dialog forms must use package form components.

Use:

- `Field` for labels, helper text and errors
- `Input` for short values
- `Select` for limited choices
- `Textarea` for notes or recommendations

Preferred:

```tsx
<Field label="Owner" htmlFor="owner">
  <Input id="owner" placeholder="CSM" />
</Field>
```

Avoid:

```tsx
<input style={{ height: "40px", borderRadius: "6px" }} />
```

Do not generate inline-styled `input`, `select` or `textarea` elements inside a
dialog.

---

## Recommended fields for action creation

For action creation, prefer `CreateActionDialog`.

If a custom action dialog is explicitly needed, use fields such as:

```txt
action title
priority
owner
due date
short note
asset context when the action is asset-related
proof gap context when the action is proof-related
```

Do not generate unnecessarily complex forms.

Do not ask for data that is not needed to create the action.

Every action creation flow should capture at least:

- title
- owner
- due date
- priority
- asset context when needed for follow-through

---

## Custom dialog form example

Use this only when `CreateActionDialog` does not fit the required workflow.

```tsx
<Dialog
  trigger={<Button>Create mitigation action</Button>}
  title="Create mitigation action"
  description="Add a focused mitigation action linked to the current renewal risk."
  footer={
    <DialogFooter>
      <DialogClose variant="secondary">Cancel</DialogClose>
      <Button type="submit" form="mitigation-action-form">
        Save action
      </Button>
    </DialogFooter>
  }
>
  <form id="mitigation-action-form" className="space-y-4">
    <Field label="Action title" htmlFor="action-title">
      <Input
        id="action-title"
        placeholder="Prepare customer-ready value proof summary"
      />
    </Field>

    <Field label="Priority" htmlFor="action-priority">
      <Select id="action-priority" defaultValue="high">
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </Select>
    </Field>

    <Field label="Due date" htmlFor="action-due-date">
      <Input id="action-due-date" type="date" />
    </Field>

    <Field
      label="Asset context"
      htmlFor="action-asset-context"
      helperText="Add site, zone, room, asset group or affected scope when needed."
    >
      <Input
        id="action-asset-context"
        placeholder="Main site / critical UPS group"
      />
    </Field>

    <Field label="Note" htmlFor="action-note">
      <Textarea
        id="action-note"
        placeholder="Explain why this action matters and what should happen next."
      />
    </Field>
  </form>
</Dialog>
```

---

## Confirmation example

```tsx
<Dialog
  trigger={<Button variant="secondary">Review mitigation</Button>}
  title="Review mitigation action"
  description="Review the visible evidence before adding this mitigation action to the customer follow-up plan."
>
  <p className="text-sm text-(--ec-color-text-secondary)">
    This action may help reduce the renewal risk by clarifying ownership and
    timing before the next customer meeting. Confirm source evidence and owner
    before adding it to the plan.
  </p>
</Dialog>
```

---

## Dialog footer usage

Use `DialogFooter` and `DialogClose` for custom dialog footers.

Example:

```tsx
<DialogFooter>
  <DialogClose variant="secondary">Cancel</DialogClose>
  <Button type="submit" form="create-action-form">
    Save action
  </Button>
</DialogFooter>
```

Use `DialogClose` for cancellation or close actions.

Use `Button` for submit actions when the button submits a form.

For forms or critical confirmations, prefer a submit `Button` with validation
inside a custom footer instead of using `DialogClose` as the confirming action.
`DialogClose` should not close a dialog before required evidence, ownership or
validation checks are completed.

Do not create raw footer buttons with custom inline styles.

---

## Bad example

Do not use a dialog for a large workflow:

```tsx
<Dialog
  trigger={<Button>Open dashboard</Button>}
  title="Full customer dashboard"
  description="Review all data, reports, tickets, recommendations and renewal information."
>
  <div>Large multi-section dashboard content...</div>
</Dialog>
```

This is weak because:

- the trigger is vague
- the dialog is used as a full page
- the content is too broad
- the user task is not focused

---

## Bad form example

Do not create inline-styled fields inside a dialog:

```tsx
<Dialog trigger={<Button>Create action</Button>} title="Create action">
  <input
    style={{ height: "40px", borderRadius: "6px" }}
    placeholder="Owner"
  />
</Dialog>
```

Use `Field` and `Input` instead.

---

## Relationship with other components

### Dialog and Button

Use `Button` as the trigger for a dialog.

The button label should explain what the dialog will do.

### Dialog and CreateActionDialog

Use `CreateActionDialog` for action creation flows.

Use raw `Dialog` only when a more custom focused flow is required.

### Dialog and DialogFooter

Use `DialogFooter` when custom footer content is needed.

### Dialog and DialogClose

Use `DialogClose` for cancel or close actions.

### Dialog and forms

Use `Field`, `Input`, `Select` and `Textarea` for dialog forms.

Do not style raw form controls manually.

### Dialog and ActionCard

Use `Dialog` or `CreateActionDialog` to create or edit an action.

Use `ActionCard` to display the resulting planned action.

### Dialog and AlertCard

Use `AlertCard` to explain the risk.

Use `Dialog` only if the user needs to create or confirm a next step related to
that risk.

### Dialog and evidence components

Use decision components and business patterns to show source evidence, source
scope, source strength, proof status and validation context before the dialog
is opened.

`Dialog` should not be the only place where trust-critical evidence is visible.

---

## Accessibility and clarity rules

Always provide a meaningful title.

Use a description when it helps clarify context.

Keep the form short.

Use clear labels for fields.

Avoid relying only on placeholder text.

Connect labels and fields with `htmlFor` and `id` when using forms.

Do not hide critical information inside a dialog if it should be visible on the
main screen.

For trust-sensitive confirmations, include enough context in the dialog title,
description or content to make the confirmation understandable without relying
on memory.

---

## Anti-patterns

Do not generate:

- dialogs without clear titles
- dialogs triggered by vague buttons
- dialogs used as full pages
- dialogs containing large dashboards
- dialogs containing long reports
- dialogs with too many unrelated fields
- dialogs that recreate `CreateActionDialog` unnecessarily
- raw inline-styled form fields inside dialogs
- custom modal implementations
- local Radix dialog implementations
- local dialog wrappers
- local `ForwardedButton` wrappers
- internal imports from package files
- dialogs used only for decoration
- dialogs that confirm AI recommendations without human review
- dialogs that hide source evidence, source scope or source strength
- dialogs that hide asset scope, connectivity status or proof gaps that affect trust
- dialogs that present expected outcomes as proven value
- dialogs that present technical outcomes or internal proof as customer-ready proof without validation
- dialogs that use `DialogClose` to bypass required validation checks

---

## Review checklist

After generation, verify:

- `Dialog` is imported from `design-system-ai-lab`
- `DialogFooter` and `DialogClose` are imported from `design-system-ai-lab` when used
- no local dialog or modal replacement was created
- no local dialog wrapper was created
- no local `ForwardedButton` wrapper was created
- the trigger is usually a `Button`
- the trigger label is explicit
- the title describes the task
- the description clarifies the context when useful
- the dialog supports one focused task
- trust-sensitive dialogs show relevant evidence, scope, proof gap or validation context
- critical decisions keep human review or validation visible
- the dialog content is compact
- the dialog is not used as a full page
- forms use `Field`, `Input`, `Select` and `Textarea`
- field labels are clear when a form is included
- labels and fields are connected with `htmlFor` and `id` when possible
- `CreateActionDialog` is used instead of a custom dialog when creating actions
- `CreateActionDialog` is preferred when owner, due date, priority or asset context must be captured
- dialogs do not claim AI validation
- dialogs do not present expected outcomes as proven value
- dialogs do not use `DialogClose` to bypass required validation checks
- no internal package import is used

---

## Final principle

A `Dialog` should help the user complete one focused task in context without
hiding critical evidence or making system validation look automatic.

If the interaction requires exploration, many steps or long content, do not
generate a dialog.

If the task is action creation, use `CreateActionDialog` first.

If the task involves critical customer, contract, service, renewal, asset
intelligence, modernization or value proof decisions, keep human review,
source context and validation requirements visible before confirmation.
