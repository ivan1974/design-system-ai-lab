# Button Guidelines

## Purpose

Use `Button` to trigger a clear user action.

A button should help the user move forward in the workflow.

A button is not a badge, a label, a metric or a decorative element.

In generated screens, buttons should support decision-making and actionability.

A button should trigger a user-controlled action. It should not imply that AI,
automation or the interface has validated a critical decision on behalf of the
user.

---

## Import

Import `Button` from the package root:

```tsx
import { Button } from "design-system-ai-lab";
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
  PageHeader,
} from "design-system-ai-lab";
```

Do not import `Button` from internal package paths.

Do not recreate `Button` locally.

Do not create local wrappers such as `ForwardedButton`.

The package `Button` is already compatible with `Dialog` trigger usage.

---

## Component role

Use `Button` when the user can perform an action.

Good uses:

- create an action
- create a mitigation action
- review a risk
- review a recommendation
- review an asset recommendation
- review a proof gap
- view details
- plan a follow-up
- check connectivity
- prepare a value summary
- open a dialog
- confirm a simple decision
- confirm after human review
- cancel or dismiss a flow

Buttons should make the next step explicit.

For critical customer, contract, service, renewal, asset intelligence,
modernization or value proof decisions, buttons should lead to review,
validation, assignment or confirmation flows. They should not make the decision
look automatically validated.

---

## Props

Use the component with these props:

```tsx
<Button variant="primary" size="md">
  Create action
</Button>
```

Available variants:

```txt
primary
secondary
ghost
danger
```

Available sizes:

```txt
sm
md
lg
```

If no variant or size is provided, the default button is treated as the standard
primary action.

---

## Variant rules

### Primary

Use `primary` for the main action of a screen or section.

Examples:

```txt
Create action
Create mitigation action
Plan follow-up
Review renewal risk
Review asset recommendation
Review proof gap
Validate with expert
```

Use only one primary action in the same screen section.

Do not make every button primary.

Prefer `CreateActionDialog` when the primary action creates a follow-up or
mitigation action.

For asset intelligence and value proof flows, prefer labels that describe human
review or action creation, not automatic confirmation.

---

### Secondary

Use `secondary` for important but non-primary actions.

Examples:

```txt
View details
Open report
Review recommendations
Export summary
Review mitigation plan
Review source evidence
View proof gap
View affected assets
```

Use `secondary` when the action is useful but not the main next step.

---

### Ghost

Use `ghost` for low-emphasis actions.

Examples:

```txt
Cancel
Dismiss
See less
Clear filter
```

Use `ghost` when the action should not compete visually with the main action.

---

### Danger

Use `danger` only for destructive or high-risk actions.

Examples:

```txt
Delete action
Remove owner
Cancel intervention
Discard changes
```

Do not use `danger` to show risk status.

Use `AlertCard` or `Badge tone="danger"` for risk status.

Do not use `danger` to create urgency around an AI recommendation. Use it only
when the user action itself is destructive or high-risk.

---

## Size rules

### Small

Use `sm` for compact contextual actions.

Examples:

```txt
View
Edit
Assign
```

### Medium

Use `md` for standard actions.

This should be the default size for most generated buttons.

### Large

Use `lg` sparingly for high-emphasis screen-level actions.

Do not use large buttons just to make the UI look more important.

---

## Good button labels

Good button labels are explicit and action-oriented.

Examples:

```txt
Create action
Create mitigation action
Review risk
Plan follow-up
Check connectivity
View details
Open report
Assign owner
Prepare value summary
Prepare QBR summary
Review mitigation plan
Review recommendation
Review asset recommendation
Review source evidence
Review proof gap
Validate with expert
Create follow-up action
View affected assets
```

Good labels usually start with a verb.

They tell the user what will happen.

---

## Bad button labels

Avoid vague labels such as:

```txt
OK
Submit
More
Click here
Go
Next
Action
Validate
Confirm AI recommendation
Validate asset intelligence
Prove value
Approve expected outcome
Confirm risk automatically
```

These labels do not explain the result of the action.

Use more specific labels instead.

Avoid labels that imply AI validation, automatic confirmation or proven value
without visible evidence and human review.

---

## When to use Button

Use `Button` for:

- primary screen actions
- secondary contextual actions
- dialog confirmation actions
- dialog cancellation actions
- opening a detailed view
- opening a creation flow
- launching a follow-up task
- reviewing a plan or summary
- reviewing a recommendation before acting
- reviewing source evidence before validation
- opening a proof gap review
- opening an asset recommendation review
- confirming a critical decision after human review

---

## When not to use Button

Do not use `Button` for:

- status labels
- metadata
- risk indicators
- static categories
- metrics
- decorative elements
- structured recommended actions
- AI validation claims
- proof claims without evidence
- expected outcomes presented as proven value
- asset recommendations that still need source review

Use other components instead:

| Need | Use |
| --- | --- |
| Show status or metadata | `Badge` |
| Show a metric | `MetricCard` |
| Arrange metrics | `MetricGrid` |
| Show a risk or blocker | `AlertCard` |
| Group risks or blockers | `PriorityList` |
| Show a recommended action | `ActionCard` |
| Group recommended actions | `ActionList` |
| Create a follow-up action | `CreateActionDialog` |
| Show customer context | `CustomerStatusCard` |
| Show renewal context | `RenewalRiskSummary` |
| Show value proof | `ValueProofCard` |
| Group related information | `Card` |

---

## Critical decision and validation rules

Buttons may open or confirm a decision flow, but they should not hide the human
responsibility behind the decision.

For critical customer, contract, service, renewal, asset intelligence,
modernization or value proof decisions, prefer labels such as:

```txt
Review recommendation
Review asset recommendation
Review source evidence
Review proof gap
Validate with expert
Create follow-up action
Confirm after review
```

Avoid labels such as:

```txt
Confirm AI recommendation
Validate asset intelligence
Prove value
Approve expected outcome
Confirm risk automatically
```

A button label should describe the user's action, not claim that the system has
already made the decision.

---

## Asset-heavy action labels

For asset-heavy screens, button labels should make the action scope clear.

Good labels:

```txt
Review affected assets
Review asset recommendation
Check connectivity
Plan connectivity review
Create asset follow-up
Assign recovery owner
View source evidence
```

Do not use a button to imply that non-connected assets are live-monitored or
that asset intelligence has been validated without source evidence.

If the action creates work, prefer `CreateActionDialog` so owner, due date,
priority and asset context can be captured.

---

## Proof discipline action labels

For value proof screens, button labels should not present expected outcomes as
proven value.

Good labels:

```txt
Review proof gap
Prepare value summary
Review customer-ready proof
Create proof follow-up
Validate proof with expert
```

Avoid labels such as:

```txt
Prove value
Approve expected outcome
Confirm customer value
```

Use the surrounding component to show whether the content is an expected
outcome, technical outcome, internal proof or customer-ready proof.

---

## Placement rules

Place the primary button near the user decision it supports.

Common placements:

```txt
PageHeader actions
SectionHeader actions
Dialog footer
ActionList section action
Card footer or action area
AlertCard contextual action area
```

Do not scatter many buttons across the screen without hierarchy.

Do not create several primary buttons in the same area.

---

## Button hierarchy

A generated screen should usually have:

```txt
1 primary action
several secondary actions if needed
low-emphasis ghost actions for cancellation or dismissal
```

The primary action should represent the most useful next step.

If the screen has too many possible actions, prioritize actions with
`ActionCard` and use one clear primary button.

---

## PageHeader usage

Use a `Button` or `CreateActionDialog` in `PageHeader` for the main screen
action.

Preferred when creating an action:

```tsx
<PageHeader
  title="Customer monitoring"
  description="Understand customer status, risks and next actions."
  actions={<CreateActionDialog />}
/>
```

Acceptable for a simple screen action:

```tsx
<PageHeader
  title="Customer monitoring"
  description="Understand customer status, risks and next actions."
  actions={<Button>Review plan</Button>}
/>
```

---

## Dialog usage

Use `Button` as the trigger for `Dialog` when the user needs to create or
confirm something.

Example:

```tsx
<Dialog
  trigger={<Button>Create action</Button>}
  title="Create customer action"
  description="Add a follow-up action linked to the current customer situation."
>
  ...
</Dialog>
```

Inside a dialog, use buttons only for clear confirmation or cancellation
actions.

For critical decisions, the dialog should expose the relevant context before
the confirmation button: source evidence, proof gap, asset scope, owner or
validation requirement when they affect trust.

When the flow is about creating an action, prefer the higher-level pattern:

```tsx
<CreateActionDialog
  trigger={<Button>Create action</Button>}
  title="Create customer action"
  description="Add a follow-up action with an owner, due date and priority."
/>
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

Do not create raw footer buttons with custom inline styles.

---

## Good examples

```tsx
<Button>Create action</Button>
```

```tsx
<Button variant="secondary">View details</Button>
```

```tsx
<Button variant="ghost">Cancel</Button>
```

```tsx
<Button variant="danger">Delete action</Button>
```

```tsx
<Button>Review asset recommendation</Button>
```

```tsx
<Button variant="secondary">Review source evidence</Button>
```

```tsx
<Button variant="secondary">Review proof gap</Button>
```

```tsx
<Button>Validate with expert</Button>
```

---

## Button group example

```tsx
<div className="flex items-center gap-2">
  <Button>Plan follow-up</Button>
  <Button variant="secondary">View report</Button>
  <Button variant="ghost">Dismiss</Button>
</div>
```

Use this pattern only when the action hierarchy is clear.

---

## Bad examples

Do not create competing primary buttons:

```tsx
<div className="flex gap-2">
  <Button>Create action</Button>
  <Button>View report</Button>
  <Button>Review risk</Button>
</div>
```

Better:

```tsx
<div className="flex gap-2">
  <Button>Create action</Button>
  <Button variant="secondary">View report</Button>
  <Button variant="secondary">Review risk</Button>
</div>
```

Do not use a button as status:

```tsx
<Button variant="danger">Critical risk</Button>
```

Use a badge or alert instead:

```tsx
<Badge tone="danger">Critical risk</Badge>
```

Do not create a local button implementation:

```tsx
function Button() {
  return <button />;
}
```

Do not create a local wrapper to make the button compatible with Radix:

```tsx
const ForwardedButton = forwardRef<HTMLButtonElement, ButtonProps>(...);
```

Use the package `Button` directly.

Do not use a button label to claim AI validation:

```tsx
<Button>Confirm AI recommendation</Button>
```

Use a review-oriented label instead:

```tsx
<Button>Review recommendation</Button>
```

Do not use a button label to present expected outcomes as proven value:

```tsx
<Button>Prove value</Button>
```

Use a proof-review label instead:

```tsx
<Button variant="secondary">Review proof gap</Button>
```

---

## Relationship with other components

### Button and PageHeader

Use a `Button` or `CreateActionDialog` in `PageHeader` for the main screen
action.

### Button and Dialog

Use `Button` as a dialog trigger when the user opens a focused creation or
confirmation flow.

### Button and CreateActionDialog

Use `CreateActionDialog` instead of rebuilding action creation flows manually.

### Button and Badge

Buttons are interactive.

Badges are not interactive.

Do not substitute one for the other.

### Button and ActionCard

`ActionCard` describes work to do.

`Button` triggers an immediate interaction.

Do not use `Button` to replace a structured action card.

### Button and evidence components

`Button` should not replace evidence, source context, proof status or validation
cues.

Use the surrounding decision component or business pattern to show what is
observed, what is interpreted, what is expected and what is proven before the
user acts.

---

## Anti-patterns

Do not generate:

- vague button labels
- many primary buttons in the same section
- buttons used as badges
- buttons used as metrics
- decorative buttons without action
- danger buttons for non-destructive actions
- buttons that claim AI validation
- buttons that imply automatic confirmation of critical decisions
- buttons that present expected outcomes as proven value
- buttons that confirm asset intelligence without source review
- buttons that replace structured `ActionCard` or `CreateActionDialog` flows
- custom button components
- local button implementations
- local button wrappers
- local `ForwardedButton` implementations
- internal imports from package files
- inline-styled raw buttons

---

## Review checklist

After generation, verify:

- every `Button` has a clear action label
- button labels describe user action, not system validation
- critical decisions keep human review or validation visible
- the primary button is obvious
- there is not more than one competing primary action in a section
- `secondary` is used for non-primary actions
- `ghost` is used for low-emphasis actions
- `danger` is used only for destructive actions
- buttons are not used as status labels
- buttons do not claim AI validation
- buttons do not present expected outcomes as proven value
- buttons do not confirm asset intelligence without source review
- `CreateActionDialog` is used for action creation flows when appropriate
- `CreateActionDialog` is preferred when owner, due date, priority or asset context must be captured
- no local button replacement was created
- no local button wrapper was created
- no internal package import is used
- all buttons are imported from `design-system-ai-lab`

---

## Final principle

A `Button` should make the next user action clear.

If the label does not tell the user what will happen, or if it implies system
validation without visible evidence and human review, rewrite it before
accepting the screen.
