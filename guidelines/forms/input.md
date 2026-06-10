# Input Guidelines

## Purpose

Use `Input` for short single-line values in generated forms.

An input should capture a concise value that the user can type or edit quickly.

An input is not a textarea.

An input is not a status display.

An input is not a decorative field.

In generated screens, `Input` should usually be wrapped in `Field`.

---

## Import

Import `Input` from the package root:

```tsx
import { Input } from "design-system-ai-lab";
```

If field structure is needed, import `Field` from the same package root:

```tsx
import {
  Field,
  Input,
} from "design-system-ai-lab";
```

Do not import `Input` from internal package paths.

Do not recreate `Input` locally.

Do not create custom input wrappers.

Do not use inline-styled raw `input` elements.

---

## Component role

Use `Input` when the user must enter a short single-line value.

Good use cases:

- action title
- owner
- due date
- email
- short reference
- numeric value
- customer contact
- contract reference
- short search query
- short label

Use `Textarea` when the content is longer than one line.

Use `Select` when the value should be chosen from a limited list.

Use `StatusSummary` or a business pattern when the value is display-only.

---

## Props

`Input` supports native HTML input props.

Use it like this:

```tsx
<Input id="action-owner" placeholder="Account owner" />
```

Common props:

```txt
id
name
type
placeholder
value
defaultValue
disabled
required
aria-label
aria-invalid
autoComplete
className
```

Use `className` only for layout adjustments, such as width.

Do not use `className` to redefine the visual identity of the input.

---

## Default usage with Field

Prefer wrapping `Input` with `Field`.

```tsx
<Field label="Owner" htmlFor="action-owner">
  <Input id="action-owner" placeholder="Account owner" />
</Field>
```

This is preferred because it provides:

- a visible label
- a clear relationship between label and control
- optional helper text
- optional error text
- consistent spacing

Do not generate standalone inputs without labels unless there is a clear
accessibility reason and an `aria-label` is provided.

---

## Label and accessibility rules

When using `Input` inside `Field`, connect the field and input with `htmlFor` and
`id`.

Good:

```tsx
<Field label="Due date" htmlFor="action-due-date">
  <Input id="action-due-date" type="date" />
</Field>
```

Weak:

```tsx
<Field label="Due date">
  <Input type="date" />
</Field>
```

Avoid relying only on placeholder text.

A placeholder is guidance.

It is not a label.

---

## Type rules

Use the correct native input type when useful.

Recommended types:

```txt
text
email
number
date
search
url
tel
```

Examples:

```tsx
<Input id="action-title" type="text" placeholder="Plan connectivity review" />
```

```tsx
<Input id="action-due-date" type="date" />
```

```tsx
<Input id="customer-email" type="email" placeholder="customer@example.com" />
```

```tsx
<Input id="asset-count" type="number" placeholder="25" />
```

Do not use `Input` for paragraphs, notes or recommendations.

Use `Textarea` for longer content.

---

## Placeholder rules

Placeholders should provide examples, not replace labels.

Good placeholders:

```txt
Account owner
Plan connectivity review with the customer
customer@example.com
25
Contract reference
```

Bad placeholders:

```txt
Enter text
Type here
Input
Value
Required
```

The placeholder should make the expected value easier to understand.

---

## When to use Input

Use `Input` for:

- owner names
- action titles
- due dates
- short IDs or references
- email addresses
- numeric values
- search fields
- short customer contact values
- short contract metadata

---

## When not to use Input

Do not use `Input` for:

- long notes
- recommendations
- customer context paragraphs
- value proof explanations
- mitigation rationale
- multi-line comments
- status display
- metrics
- badges
- alerts
- action cards
- display-only label/value content

Use other components instead:

| Need | Use |
| --- | --- |
| Long note or explanation | `Textarea` |
| Limited choice | `Select` |
| Label + control + helper/error | `Field` |
| Display-only label/value context | `StatusSummary` |
| Customer context | `CustomerStatusCard` |
| Renewal context | `RenewalRiskSummary` |
| Metric | `MetricCard` |
| Risk or blocker | `AlertCard` |
| Recommended action | `ActionCard` |

---

## Input in action forms

For action creation forms, typical input fields are:

```txt
Action title
Owner
Due date
```

Example:

```tsx
<Field label="Action title" htmlFor="action-title">
  <Input
    id="action-title"
    placeholder="Plan connectivity review with the customer"
  />
</Field>

<Field label="Owner" htmlFor="action-owner">
  <Input id="action-owner" placeholder="Account owner" />
</Field>

<Field label="Due date" htmlFor="action-due-date">
  <Input id="action-due-date" type="date" />
</Field>
```

For standard action creation, prefer `CreateActionDialog` when it fits.

---

## Input in Dialog

Use `Input` inside `Field` when a custom dialog form needs a short value.

```tsx
<Dialog
  trigger={<Button>Create mitigation action</Button>}
  title="Create mitigation action"
  description="Add a focused mitigation action linked to the current renewal risk."
>
  <form className="space-y-4">
    <Field label="Owner" htmlFor="action-owner">
      <Input id="action-owner" placeholder="Account owner" />
    </Field>

    <Field label="Due date" htmlFor="action-due-date">
      <Input id="action-due-date" type="date" />
    </Field>
  </form>
</Dialog>
```

For action creation flows, prefer `CreateActionDialog` when it matches the task.

---

## Disabled state

Use `disabled` when the value cannot be edited.

Example:

```tsx
<Field label="Owner" htmlFor="action-owner">
  <Input id="action-owner" defaultValue="Account owner" disabled />
</Field>
```

Use disabled inputs sparingly.

If a value is display-only, prefer `StatusSummary`, `CustomerStatusCard` or
another display component instead of a disabled input.

---

## Error state

Use `Field error` with `Input` when the user must correct a value.

```tsx
<Field
  label="Owner"
  htmlFor="action-owner"
  error="Owner is required before saving the action."
>
  <Input id="action-owner" placeholder="Account owner" aria-invalid="true" />
</Field>
```

Error text should be specific and actionable.

Do not use vague errors such as:

```txt
Error
Invalid
Wrong
```

---

## Search usage

Use `Input type="search"` for simple search fields.

Example:

```tsx
<Field label="Search customer" htmlFor="customer-search">
  <Input
    id="customer-search"
    type="search"
    placeholder="Search by customer name"
  />
</Field>
```

Do not build a complex filtering system unless the prompt explicitly asks for
one.

---

## Good example

```tsx
<Field
  label="Action title"
  htmlFor="action-title"
  helper="Write the action as a concrete next step."
>
  <Input
    id="action-title"
    placeholder="Plan connectivity review with the customer"
  />
</Field>
```

This is good because:

- the input is wrapped in `Field`
- the label is clear
- the helper explains the expected value
- the placeholder gives a useful example
- the `id` matches `htmlFor`

---

## Bad examples

Do not generate raw inputs:

```tsx
<input placeholder="Owner" />
```

Use `Field` and `Input` instead:

```tsx
<Field label="Owner" htmlFor="owner">
  <Input id="owner" placeholder="Account owner" />
</Field>
```

Do not use inline styles:

```tsx
<input
  style={{ height: "40px", borderRadius: "6px" }}
  placeholder="Owner"
/>
```

Do not use `Input` for a long note:

```tsx
<Input placeholder="Describe the customer context, the risk and the next steps" />
```

Use `Textarea` instead.

Do not use a disabled input for read-only business context:

```tsx
<Input value="Greenfield Industries" disabled />
```

Use `CustomerStatusCard` or `StatusSummary` instead.

---

## Relationship with other components

### Input and Field

Use `Field` as the default wrapper for `Input`.

### Input and Label

Use standalone `Label` only when a lower-level custom form composition is
explicitly needed.

For most generated forms, use `Field` instead.

### Input and Select

Use `Select` instead of `Input` when the user must choose from a limited list.

### Input and Textarea

Use `Textarea` instead of `Input` for multi-line notes, explanations and
recommendations.

### Input and Dialog

Use `Input` inside `Field` for short custom dialog fields.

Prefer `CreateActionDialog` for standard action creation flows.

### Input and StatusSummary

Use `StatusSummary` for display-only label/value information.

Use `Input` only when the user can edit or enter the value.

---

## Anti-patterns

Do not generate:

- raw `input` elements when `Input` fits
- inline-styled inputs
- inputs without labels
- inputs relying only on placeholders
- inputs used for long text
- inputs used for display-only context
- disabled inputs used as static text
- custom input components
- local input implementations
- local input wrappers
- internal imports from package files
- form layouts that bypass `Field`

---

## Review checklist

After generation, verify:

- `Input` is imported from `design-system-ai-lab`
- no local input replacement was created
- no local input wrapper was created
- no internal package import is used
- every editable input is wrapped in `Field` when appropriate
- every input has a clear label through `Field` or an accessible alternative
- `htmlFor` matches the input `id` when possible
- the input type is appropriate
- placeholders are useful examples, not labels
- long content uses `Textarea` instead
- limited choices use `Select` instead
- display-only context uses `StatusSummary` or a business pattern instead
- no inline-styled raw input is used
- `CreateActionDialog` is used for standard action creation flows when appropriate

---

## Final principle

An `Input` should capture a short editable value.

If the value is long, use `Textarea`.

If the value is chosen from options, use `Select`.

If the value is display-only, do not use `Input`.
