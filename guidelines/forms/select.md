# Select Guidelines

## Purpose

Use `Select` when the user must choose one value from a limited list of options.

A select should reduce ambiguity by constraining the possible values.

A select is not a free-text input.

A select is not a status display.

A select is not a decorative dropdown.

In generated screens, `Select` should usually be wrapped in `Field`.

---

## Import

Import `Select` from the package root:

```tsx
import { Select } from "design-system-ai-lab";
```

If field structure is needed, import `Field` from the same package root:

```tsx
import {
  Field,
  Select,
} from "design-system-ai-lab";
```

Do not import `Select` from internal package paths.

Do not recreate `Select` locally.

Do not create custom select wrappers.

Do not use inline-styled raw `select` elements.

---

## Component role

Use `Select` when the available choices are known and limited.

Good use cases:

- priority
- status
- risk level
- owner type
- review state
- recommendation state
- renewal readiness
- action category
- monitoring status
- value proof status

Use `Input` when the user must type a short custom value.

Use `Textarea` when the user must write a note or explanation.

Use `StatusSummary` or a business pattern when the value is display-only.

---

## Props

`Select` supports native HTML select props.

Use it like this:

```tsx
<Select id="action-priority" defaultValue="high">
  <option value="high">High</option>
  <option value="medium">Medium</option>
  <option value="low">Low</option>
</Select>
```

Common props:

```txt
id
name
value
defaultValue
disabled
required
aria-label
aria-invalid
onChange
className
children
```

Use `children` for `option` elements.

Use `className` only for layout adjustments, such as width.

Do not use `className` to redefine the visual identity of the select.

---

## Default usage with Field

Prefer wrapping `Select` with `Field`.

```tsx
<Field label="Priority" htmlFor="action-priority">
  <Select id="action-priority" defaultValue="high">
    <option value="high">High</option>
    <option value="medium">Medium</option>
    <option value="low">Low</option>
  </Select>
</Field>
```

This is preferred because it provides:

- a visible label
- a clear relationship between label and control
- optional helper text
- optional error text
- consistent spacing

Do not generate standalone selects without labels unless there is a clear
accessibility reason and an `aria-label` is provided.

---

## Label and accessibility rules

When using `Select` inside `Field`, connect the field and select with `htmlFor`
and `id`.

Good:

```tsx
<Field label="Priority" htmlFor="action-priority">
  <Select id="action-priority" defaultValue="high">
    <option value="high">High</option>
    <option value="medium">Medium</option>
    <option value="low">Low</option>
  </Select>
</Field>
```

Weak:

```tsx
<Field label="Priority">
  <Select defaultValue="high">
    <option value="high">High</option>
    <option value="medium">Medium</option>
    <option value="low">Low</option>
  </Select>
</Field>
```

The second example may still render, but it is weaker for accessibility and
review quality.

---

## Option rules

Options should be clear, short and mutually exclusive.

Good option sets:

```txt
High / Medium / Low
Open / In progress / Closed
Not started / In progress / Ready
Connected / Partially connected / Disconnected
Low risk / Medium risk / High risk
Draft / Customer-ready / Sent
```

Bad option sets:

```txt
Option 1 / Option 2 / Option 3
Good / Better / Nice
Thing / Stuff / Other
A / B / C
```

Options should help the user choose accurately.

Do not create vague option labels.

---

## Value rules

Use stable, semantic values for options.

Good:

```tsx
<option value="high">High</option>
<option value="medium">Medium</option>
<option value="low">Low</option>
```

Avoid values that are only positional or unclear:

```tsx
<option value="1">High</option>
<option value="2">Medium</option>
<option value="3">Low</option>
```

Prefer values that match the meaning of the option.

---

## When to use Select

Use `Select` for:

- priority selection
- risk level selection
- status selection
- owner type selection
- review state selection
- recommendation status
- renewal readiness
- monitoring status
- value proof state
- small controlled categories

---

## When not to use Select

Do not use `Select` for:

- long free-text values
- notes
- recommendations
- customer context paragraphs
- action descriptions
- value proof summaries
- large searchable datasets
- display-only status context
- metrics
- badges
- alerts
- action cards

Use other components instead:

| Need | Use |
| --- | --- |
| Short free-text value | `Input` |
| Long note or explanation | `Textarea` |
| Label + control + helper/error | `Field` |
| Display-only label/value context | `StatusSummary` |
| Customer context | `CustomerStatusCard` |
| Renewal context | `RenewalRiskSummary` |
| Metric | `MetricCard` |
| Risk or blocker | `AlertCard` |
| Recommended action | `ActionCard` |
| Status metadata | `Badge` |

---

## Select in action forms

For action creation forms, a common select field is `Priority`.

Example:

```tsx
<Field
  label="Priority"
  htmlFor="action-priority"
  helper="Choose the priority based on customer impact."
>
  <Select id="action-priority" defaultValue="high">
    <option value="high">High</option>
    <option value="medium">Medium</option>
    <option value="low">Low</option>
  </Select>
</Field>
```

For standard action creation, prefer `CreateActionDialog` when it fits.

---

## Select in Dialog

Use `Select` inside `Field` when a custom dialog form needs a limited choice.

```tsx
<Dialog
  trigger={<Button>Create mitigation action</Button>}
  title="Create mitigation action"
  description="Add a focused mitigation action linked to the current renewal risk."
>
  <form className="space-y-4">
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

For action creation flows, prefer `CreateActionDialog` when it matches the task.

---

## Disabled state

Use `disabled` when the value cannot be changed.

Example:

```tsx
<Field label="Priority" htmlFor="action-priority">
  <Select id="action-priority" defaultValue="high" disabled>
    <option value="high">High</option>
    <option value="medium">Medium</option>
    <option value="low">Low</option>
  </Select>
</Field>
```

Use disabled selects sparingly.

If a value is display-only, prefer `StatusSummary`, `Badge` or a business
pattern instead of a disabled select.

---

## Error state

Use `Field error` with `Select` when the user must correct a value.

```tsx
<Field
  label="Priority"
  htmlFor="action-priority"
  error="Select a priority before saving the action."
>
  <Select id="action-priority" aria-invalid="true" defaultValue="">
    <option value="" disabled>
      Select a priority
    </option>
    <option value="high">High</option>
    <option value="medium">Medium</option>
    <option value="low">Low</option>
  </Select>
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

## Placeholder option rule

When a selection is required and there is no default value, use a disabled
placeholder option.

Example:

```tsx
<Select id="action-priority" defaultValue="">
  <option value="" disabled>
    Select a priority
  </option>
  <option value="high">High</option>
  <option value="medium">Medium</option>
  <option value="low">Low</option>
</Select>
```

The placeholder option should describe the expected choice.

Avoid vague placeholder labels such as:

```txt
Choose
Select
Pick one
```

Prefer:

```txt
Select a priority
Select a review state
Select a risk level
```

---

## Good example

```tsx
<Field
  label="Review state"
  htmlFor="review-state"
  helper="Choose the current state before preparing the customer summary."
>
  <Select id="review-state" defaultValue="in-progress">
    <option value="not-started">Not started</option>
    <option value="in-progress">In progress</option>
    <option value="ready">Ready</option>
  </Select>
</Field>
```

This is good because:

- the select is wrapped in `Field`
- the label is clear
- the helper explains why the choice matters
- options are short and meaningful
- the `id` matches `htmlFor`

---

## Bad examples

Do not generate raw selects:

```tsx
<select>
  <option>High</option>
  <option>Medium</option>
  <option>Low</option>
</select>
```

Use `Field` and `Select` instead:

```tsx
<Field label="Priority" htmlFor="priority">
  <Select id="priority" defaultValue="high">
    <option value="high">High</option>
    <option value="medium">Medium</option>
    <option value="low">Low</option>
  </Select>
</Field>
```

Do not use inline styles:

```tsx
<select style={{ height: "40px", borderRadius: "6px" }}>
  <option>High</option>
</select>
```

Do not use `Select` for long notes:

```tsx
<Select>
  <option>Explain the customer context and the next steps...</option>
</Select>
```

Use `Textarea` instead.

Do not use a disabled select for read-only business context:

```tsx
<Select value="medium" disabled>
  <option value="medium">Medium readiness</option>
</Select>
```

Use `StatusSummary`, `Badge` or a business pattern instead.

---

## Relationship with other components

### Select and Field

Use `Field` as the default wrapper for `Select`.

### Select and Label

Use standalone `Label` only when a lower-level custom form composition is
explicitly needed.

For most generated forms, use `Field` instead.

### Select and Input

Use `Input` instead of `Select` when the user must type a custom short value.

### Select and Textarea

Use `Textarea` instead of `Select` for multi-line notes, explanations and
recommendations.

### Select and Dialog

Use `Select` inside `Field` for short custom dialog choices.

Prefer `CreateActionDialog` for standard action creation flows.

### Select and StatusSummary

Use `StatusSummary` for display-only label/value information.

Use `Select` only when the user can choose or edit the value.

### Select and Badge

Use `Badge` to display a status.

Use `Select` only when the user can change a status.

---

## Anti-patterns

Do not generate:

- raw `select` elements when `Select` fits
- inline-styled selects
- selects without labels
- selects relying only on placeholder options
- selects used for long text
- selects used for display-only context
- disabled selects used as static text
- vague options such as `Option 1`
- too many choices in a native select
- custom select components
- local select implementations
- local select wrappers
- internal imports from package files
- form layouts that bypass `Field`

---

## Review checklist

After generation, verify:

- `Select` is imported from `design-system-ai-lab`
- no local select replacement was created
- no local select wrapper was created
- no internal package import is used
- every editable select is wrapped in `Field` when appropriate
- every select has a clear label through `Field` or an accessible alternative
- `htmlFor` matches the select `id` when possible
- options are short and meaningful
- option values are stable and semantic
- the select is used only for limited choices
- long content uses `Textarea` instead
- custom short values use `Input` instead
- display-only context uses `StatusSummary`, `Badge` or a business pattern instead
- no inline-styled raw select is used
- `CreateActionDialog` is used for standard action creation flows when appropriate

---

## Final principle

A `Select` should make choosing easier by limiting possible values.

If the user needs to write freely, use `Input` or `Textarea`.

If the value is display-only, do not use `Select`.
