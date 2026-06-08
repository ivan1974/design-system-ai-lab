# Field Guidelines

## Purpose

Use `Field` to group a form label, a form control, helper text and error text.

A field should make a form input understandable and accessible.

A field is not just spacing around an input.

A field defines the relationship between:

- what the user must enter
- where they enter it
- what guidance they need
- what error they must correct

In generated screens, `Field` is the default wrapper for form controls.

---

## Import

Import `Field` from the package root:

```tsx
import { Field } from "design-system-ai-lab";
```

If other form components are needed, import them from the same package root:

```tsx
import {
  Field,
  Input,
  Select,
  Textarea,
} from "design-system-ai-lab";
```

Do not import `Field` from internal package paths.

Do not recreate `Field` locally.

Do not create custom field wrappers.

---

## Component role

Use `Field` whenever a generated form contains:

- `Input`
- `Select`
- `Textarea`
- a labeled form control
- helper text
- error text

`Field` should be used in dialogs, forms and action creation flows.

It helps Figma Make avoid raw labels, inline-styled inputs and inconsistent form
layouts.

---

## Props

Use the component with these props:

```tsx
<Field
  label="Owner"
  htmlFor="owner"
  helper="Assign a clear owner for this action."
>
  <Input id="owner" placeholder="CSM" />
</Field>
```

Expected props:

```txt
label
htmlFor
helper
error
children
className
```

Use `label` to name the expected input.

Use `htmlFor` to connect the label to the form control `id`.

Use `helper` for guidance.

Use `error` when the user must correct a value.

Use `children` for the form control.

Use `className` only for layout adjustments, not to redefine field styling.

---

## Required structure

A field should usually contain one form control.

Preferred:

```tsx
<Field label="Owner" htmlFor="owner">
  <Input id="owner" placeholder="CSM" />
</Field>
```

Avoid putting multiple unrelated controls inside one `Field`.

If multiple controls are needed, use multiple fields.

---

## Label rules

Field labels should be short and clear.

Good labels:

```txt
Action title
Owner
Priority
Due date
Note
Customer context
Recommended next step
Renewal status
```

Bad labels:

```txt
Input
Field
Data
Information
Text
Enter value
```

The label should explain what the user must provide.

Do not rely only on placeholder text.

---

## htmlFor and id rules

When possible, connect `Field` and the form control with `htmlFor` and `id`.

Good:

```tsx
<Field label="Due date" htmlFor="due-date">
  <Input id="due-date" type="date" />
</Field>
```

Bad:

```tsx
<Field label="Due date">
  <Input type="date" />
</Field>
```

The second example may still render, but it is weaker for accessibility and
review quality.

Use stable, readable ids such as:

```txt
action-title
action-owner
action-priority
action-due-date
action-note
customer-context
recommended-next-step
```

---

## Helper text rules

Use helper text when it helps the user understand what to enter or why the field
matters.

Good helper text:

```txt
Assign a clear owner for this action.
Choose the priority based on customer impact.
Add useful context for the service team.
Write the next step as a concrete action.
```

Bad helper text:

```txt
Enter text.
Fill this field.
Required field.
More information.
```

Helper text should support the task, not restate the label.

---

## Error text rules

Use `error` when the generated UI needs to show validation feedback.

Example:

```tsx
<Field
  label="Owner"
  htmlFor="owner"
  error="Owner is required before saving the action."
>
  <Input id="owner" placeholder="CSM" aria-invalid="true" />
</Field>
```

Error text should be specific and actionable.

Good error text:

```txt
Owner is required before saving the action.
Select a priority before continuing.
Due date must be in the future.
```

Bad error text:

```txt
Error
Invalid
Wrong
Problem
```

Do not show helper text and error text for the same field at the same time unless
explicitly required.

The `Field` component prioritizes `error` over `helper`.

---

## When to use Field

Use `Field` for:

- action creation forms
- mitigation action forms
- customer note forms
- renewal note forms
- owner assignment forms
- due date forms
- priority selection forms
- short dialog forms
- any generated `Input`, `Select` or `Textarea`

---

## When not to use Field

Do not use `Field` for:

- static text
- metrics
- badges
- alerts
- action cards
- purely visual spacing
- read-only status summaries
- structured display-only label/value content

Use other components instead:

| Need | Use |
| --- | --- |
| Show a metric | `MetricCard` |
| Arrange metrics | `MetricGrid` |
| Show status metadata | `Badge` |
| Show a risk or blocker | `AlertCard` |
| Show a recommended action | `ActionCard` |
| Show structured display context | `StatusSummary` |
| Show customer context | `CustomerStatusCard` |
| Show renewal context | `RenewalRiskSummary` |

---

## Field with Input

Use `Field` with `Input` for short single-line values.

Example:

```tsx
<Field label="Owner" htmlFor="action-owner">
  <Input id="action-owner" placeholder="CSM" />
</Field>
```

Good use cases:

- owner
- action title
- due date
- email
- short reference
- numeric value

---

## Field with Select

Use `Field` with `Select` for limited choices.

Example:

```tsx
<Field label="Priority" htmlFor="action-priority">
  <Select id="action-priority" defaultValue="high">
    <option value="high">High</option>
    <option value="medium">Medium</option>
    <option value="low">Low</option>
  </Select>
</Field>
```

Good use cases:

- priority
- status
- owner type
- risk level
- review state
- category

Do not use `Select` for long free-text input.

---

## Field with Textarea

Use `Field` with `Textarea` for longer notes or explanations.

Example:

```tsx
<Field
  label="Note"
  htmlFor="action-note"
  helper="Add useful context for the service team."
>
  <Textarea
    id="action-note"
    placeholder="Describe why this action matters and what should happen next."
  />
</Field>
```

Good use cases:

- note
- recommendation
- customer context
- mitigation rationale
- next step explanation
- value proof summary

---

## Dialog usage

Use `Field` inside dialogs when the dialog contains a form.

Preferred:

```tsx
<Dialog
  trigger={<Button>Create mitigation action</Button>}
  title="Create mitigation action"
  description="Add a focused mitigation action linked to the current renewal risk."
>
  <form className="space-y-4">
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
  </form>
</Dialog>
```

For action creation flows, prefer `CreateActionDialog` when it fits.

---

## CreateActionDialog relationship

`CreateActionDialog` already uses form fields internally.

Prefer `CreateActionDialog` for standard action creation flows.

Use `Field` directly only when building a custom short form that is not covered
by `CreateActionDialog`.

---

## Good example

```tsx
<Field
  label="Recommended next step"
  htmlFor="recommended-next-step"
  helper="Write the next step as a concrete action."
>
  <Textarea
    id="recommended-next-step"
    placeholder="Plan a connectivity review with the customer and support team."
  />
</Field>
```

This is good because:

- the label is clear
- the helper explains the expected content
- the control id matches `htmlFor`
- the field supports the user task

---

## Bad examples

Do not use raw labels and inputs:

```tsx
<label>Owner</label>
<input placeholder="CSM" />
```

Use `Field` and `Input` instead:

```tsx
<Field label="Owner" htmlFor="owner">
  <Input id="owner" placeholder="CSM" />
</Field>
```

Do not use inline-styled controls:

```tsx
<input
  style={{ height: "40px", borderRadius: "6px" }}
  placeholder="Owner"
/ >
```

Do not use a field for static display:

```tsx
<Field label="Customer">
  <p>Greenfield Industries</p>
</Field>
```

Use `StatusSummary` or `CustomerStatusCard` for display-only context.

---

## Relationship with other components

### Field and Label

`Field` uses the label pattern for the form group.

Use standalone `Label` only when a lower-level custom form composition is
explicitly needed.

For most generated forms, use `Field` instead of manual `Label` usage.

### Field and Input

Use `Input` inside `Field` for short values.

### Field and Select

Use `Select` inside `Field` for limited choice lists.

### Field and Textarea

Use `Textarea` inside `Field` for longer notes and explanations.

### Field and Dialog

Use `Field` inside `Dialog` for custom short forms.

Prefer `CreateActionDialog` when the flow is action creation.

### Field and StatusSummary

Use `StatusSummary` for display-only label/value information.

Use `Field` only when the user can edit or enter a value.

---

## Anti-patterns

Do not generate:

- raw `label` and `input` pairs when `Field` fits
- inline-styled form controls
- fields without meaningful labels
- labels that rely only on placeholders
- one field containing several unrelated controls
- helper text that repeats the label
- vague error messages
- `Field` for static display-only content
- custom field components
- local field implementations
- local field wrappers
- internal imports from package files

---

## Review checklist

After generation, verify:

- `Field` is imported from `design-system-ai-lab`
- no local field replacement was created
- no local field wrapper was created
- no internal package import is used
- every editable form control is wrapped in `Field` when appropriate
- field labels are clear and specific
- `htmlFor` matches the child control `id` when possible
- helper text supports the user task when used
- error text is specific and actionable when used
- `Input`, `Select` and `Textarea` are used instead of raw controls
- no inline-styled raw form controls are used
- `Field` is not used for display-only status context
- `CreateActionDialog` is used for standard action creation flows when appropriate

---

## Final principle

A `Field` should make a form control understandable.

If the field does not clarify what the user must enter, why it matters or how to
correct it, improve the label, helper or error text before accepting the screen.
