# Accessibility principle

## Status

```txt
SOURCE PRINCIPLE / ACCESSIBILITY / GENAI JUDGMENT
```

## Purpose

Accessibility is a baseline quality requirement for generated interfaces.

A generated screen should be:

```txt
understandable
navigable
readable
usable without relying on color alone
clear about status, evidence and action
```

Accessibility is not only technical compliance.

For operational service screens, accessibility also means users should not have to infer critical meaning from layout, color, vague wording, AI confidence or hidden evidence.

---

## Core rule

Use design-system primitives and usage components because they encode shared interaction, structure and accessibility expectations.

Do not bypass them with raw HTML, local wrappers or inline-styled replacements when approved DS material exists.

---

## Information must not depend on color alone

Do not communicate critical meaning only through color.

This applies to:

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

A status should be understandable through text as well as visual treatment.

Good:

```txt
Connectivity partial
Non-connected asset
Evidence: historical service report
Expected outcome, not proven
AI interpretation — review needed
```

Weak:

```txt
Status
AI insight
High confidence
```

---

## Text clarity is accessibility

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

Avoid vague content:

```txt
Issue detected
Some data
Follow up
More information
Action needed
System status
Proof available
```

Prefer specific content:

```txt
Connectivity loss on critical equipment
Plan connectivity review with the customer
Partial visibility on UPS Room A
Non-connected asset — based on service history, not live telemetry
Expected outcome not yet proven
```

---

## Form accessibility

Every editable form control should have a visible label or explicit accessible alternative.

Use form primitives and labels consistently.

Do not rely only on placeholder text.

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

Good helper text:

```txt
Assign a clear owner for this action.
Choose the priority based on customer impact.
```

Good error text:

```txt
Owner is required before saving the action.
Select a priority before continuing.
```

---

## Interactive elements

Use real interactive components.

Do not create clickable non-interactive elements.

Avoid:

```tsx
<div onClick={...}>Create action</div>
```

Use:

```tsx
<Button>Create action</Button>
```

Do not remove focus styles.

Do not hide essential actions behind hover-only interaction.

---

## Button labels

Buttons should have explicit labels.

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

A button label should explain what will happen.

---

## Dialog accessibility

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

A useful service flow is often:

```txt
context
→ signal
→ decision or recommendation
→ evidence or validation
→ action
```

For asset-heavy screens, keep semantic clarity:

```txt
asset context
→ source scope and connectivity
→ observed facts
→ interpretation
→ recommendation
→ action
→ proof or validation status
```

This is not a rigid layout.

It is a reading-order principle.

---

## Display facts are not disabled inputs

If information is display-only, use display components instead of disabled form controls.

Good display material:

```txt
DetailSection
StatusBadge
Badge
Table
AssetSummaryCard
EvidenceList
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
```

---

## Final principle

Accessibility is part of generation quality.

A visually consistent screen that is not understandable, navigable, trustworthy or actionable is not acceptable.
