# Accessibility principle

## Status

```txt
SOURCE PRINCIPLE / ACCESSIBILITY / GENAI JUDGMENT
```

## Purpose

Accessibility is a baseline quality requirement for generated interfaces.

For operational service screens, accessibility also means users should not infer critical meaning from color, layout, vague wording, AI confidence or hidden evidence.

---

## Must

You must make the screen understandable, navigable and readable.

You must not communicate critical meaning through color alone.

You must use real interactive elements for actions and inputs.

You must not create clickable non-interactive elements.

You must not remove visible focus states.

You must not show display-only facts as disabled form controls.

---

## Should

You should use design-system primitives and components because they encode shared interaction, structure and accessibility expectations.

You should give editable form controls visible labels or explicit accessible alternatives.

You should use explicit action labels.

You should align reading order with the intended decision flow.

---

## May

You may create local screen-specific components when exported components do not fit.

Local components must still preserve semantic structure, readable labels, focus behavior and design-system visual language.

---

## Color is not enough

Do not communicate these only through color:

```txt
health state
connectivity state
coverage state
proof readiness
validation status
AI-assisted interpretation
expected outcome vs proven value
criticality
```

Prefer explicit text:

```txt
Connectivity partial
Non-connected asset
Evidence: historical service report
Expected outcome, not proven
AI interpretation — review needed
```

Avoid vague text:

```txt
Status
AI insight
High confidence
```

---

## Text clarity

Generated copy should be:

```txt
specific
concise
action-oriented when relevant
understandable without internal jargon
explicit about scope when visibility is partial
explicit about source or freshness when trust depends on it
explicit about whether content is observed, interpreted, recommended, expected or proven
```

---

## Forms

Every editable form control should have a visible label or explicit accessible alternative.

Good:

```tsx
<label htmlFor="owner">Owner</label>
<Input id="owner" placeholder="Account owner" />
```

Weak:

```tsx
<Input placeholder="Owner" />
```

Use helper text when it explains how to complete a field or why it matters.

Use error text that explains how to fix the issue.

---

## Interactive elements

Avoid:

```tsx
<div onClick={...}>Create action</div>
```

Use:

```tsx
<Button>Create action</Button>
```

Do not hide essential actions behind hover-only interaction.

---

## Button labels

Button labels should explain what will happen.

Good:

```txt
Create action
Schedule service
Prepare summary
Save action
Cancel
```

Avoid:

```txt
OK
More
Click here
Submit
Go
Action
```

---

## Dialogs

Dialogs should support one focused task.

Every dialog should have a meaningful title.

Use a description when it clarifies context or consequence.

Good dialog titles:

```txt
Create mitigation action
Schedule service visit
Confirm customer-ready summary
```

Avoid:

```txt
Dialog
Modal
Form
Details
Information
```

Do not use a dialog for long exploration when a panel, tab or page section would be clearer.

---

## Reading order

The visual order and reading order should match the intended decision flow.

Useful service flow:

```txt
context
-> signal
-> decision or recommendation
-> evidence or validation
-> action
```

This is a reading-order principle, not a rigid layout.

---

## Display facts are not disabled inputs

If information is display-only, use display material such as:

```txt
text sections
Badge
Pill
Tag
Table
Alert
local detail section
local evidence row
```

Use form controls only when the user can input or change data.

---

## Review checklist

Before accepting a generated screen, verify:

```txt
the screen can be understood without color alone
status labels are explicit
critical proof and validation states are text-visible
form controls have visible labels
buttons explain the action
interactive elements are real interactive components
focus states are preserved
dialogs have meaningful titles
reading order follows the user decision or task
display-only facts are not shown as disabled inputs
AI interpretation is labelled when trust depends on it
local composition remains semantic and accessible
```

---

## Final principle

Accessibility is part of generation quality.

A visually consistent screen that is not understandable, navigable, trustworthy or actionable is not acceptable.
