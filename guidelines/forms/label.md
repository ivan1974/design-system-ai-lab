# Label Guidelines

## Purpose

Use `Label` to provide an accessible text label for a form control.

A label should explain what a user must enter or choose.

A label is not helper text.

A label is not placeholder text.

A label is not a section heading.

In generated screens, prefer `Field` for most form controls.

Use `Label` directly only when a lower-level custom form composition is needed.

---

## Import

Import `Label` from the package root:

```tsx
import { Label } from "design-system-ai-lab";
```

If other form components are needed, import them from the same package root:

```tsx
import {
  Field,
  Input,
  Label,
  Select,
  Textarea,
} from "design-system-ai-lab";
```

Do not import `Label` from internal package paths.

Do not recreate `Label` locally.

Do not create custom label wrappers.

---

## Component role

Use `Label` when the generated UI needs a standalone form label.

Most of the time, use `Field` instead because `Field` already handles the label,
control, helper text and error text as one coherent group.

Preferred:

```tsx
<Field label="Owner" htmlFor="action-owner">
  <Input id="action-owner" placeholder="CSM" />
</Field>
```

Use standalone `Label` only when the form structure cannot be represented with
`Field`.

---

## Props

`Label` supports native HTML label props.

Use it like this:

```tsx
<Label htmlFor="action-owner">Owner</Label>
```

Common props:

```txt
htmlFor
children
className
```

Use `htmlFor` to connect the label to the form control `id`.

Use `children` for the label text.

Use `className` only for layout adjustments, not to redefine label styling.

---

## Default recommendation

For most generated forms, do not use `Label` directly.

Use `Field` instead.

Preferred:

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

Avoid lower-level manual composition unless necessary:

```tsx
<Label htmlFor="action-priority">Priority</Label>
<Select id="action-priority" defaultValue="high">
  <option value="high">High</option>
  <option value="medium">Medium</option>
  <option value="low">Low</option>
</Select>
```

The lower-level pattern is valid, but less complete than `Field` because it does
not provide helper or error structure by default.

---

## When to use Label directly

Use standalone `Label` only when:

- a custom form layout is explicitly required
- a control needs a visible label outside a standard `Field`
- a grouped form area needs a simple label structure
- the prompt explicitly asks for lower-level form composition

Even then, keep the label connected to the control with `htmlFor` and `id`.

---

## When not to use Label directly

Do not use standalone `Label` for:

- standard input fields that can use `Field`
- helper text
- error text
- section headings
- card titles
- status labels
- badges
- metric labels
- alert titles
- action titles
- display-only label/value summaries

Use other components instead:

| Need | Use |
| --- | --- |
| Standard form field | `Field` |
| Short editable value | `Input` inside `Field` |
| Limited choice | `Select` inside `Field` |
| Long editable content | `Textarea` inside `Field` |
| Section title | `SectionHeader` |
| Card title | `Card` title prop |
| Status metadata | `Badge` |
| Display-only label/value context | `StatusSummary` |
| Customer context | `CustomerStatusCard` |
| Renewal context | `RenewalRiskSummary` |
| Metric | `MetricCard` |

---

## Label text rules

Label text should be short, clear and specific.

Good labels:

```txt
Action title
Owner
Priority
Due date
Note
Customer context
Recommended next step
Review state
Renewal status
```

Bad labels:

```txt
Input
Field
Data
Text
Information
Enter value
Value
```

The label should describe what the user must enter or choose.

Do not use vague labels.

Do not rely only on placeholder text.

---

## htmlFor and id rules

Connect `Label` to the target form control using `htmlFor` and `id`.

Good:

```tsx
<Label htmlFor="action-owner">Owner</Label>
<Input id="action-owner" placeholder="CSM" />
```

Weak:

```tsx
<Label>Owner</Label>
<Input placeholder="CSM" />
```

The second example may render, but it is weaker for accessibility and review
quality.

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

## Label versus placeholder

A placeholder is not a label.

Good:

```tsx
<Field label="Owner" htmlFor="action-owner">
  <Input id="action-owner" placeholder="CSM" />
</Field>
```

Bad:

```tsx
<Input placeholder="Owner" />
```

The second example relies on placeholder text and has no visible label.

---

## Label versus helper text

A label names the field.

Helper text explains how to complete it or why it matters.

Good:

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

Bad:

```tsx
<Label htmlFor="recommended-next-step">
  Write the next step as a concrete action.
</Label>
<Textarea id="recommended-next-step" />
```

The second example uses helper text as a label.

---

## Label versus section heading

Do not use `Label` for section headings.

Bad:

```tsx
<Label>Priority alerts</Label>
```

Use `SectionHeader` instead:

```tsx
<SectionHeader
  title="Priority alerts"
  description="Risks requiring customer or service team action."
/>
```

Use `Card` title props for generic card titles.

Use business pattern title props when the section is represented by a pattern.

---

## Good standalone example

Use standalone `Label` only for lower-level custom composition.

```tsx
<div className="space-y-2">
  <Label htmlFor="custom-reference">Reference</Label>
  <Input id="custom-reference" placeholder="Contract or asset reference" />
</div>
```

This is acceptable, but in most generated forms the `Field` version is preferred:

```tsx
<Field label="Reference" htmlFor="custom-reference">
  <Input id="custom-reference" placeholder="Contract or asset reference" />
</Field>
```

---

## Bad examples

Do not generate raw labels when `Field` fits:

```tsx
<label htmlFor="owner">Owner</label>
<input id="owner" placeholder="CSM" />
```

Use package components instead:

```tsx
<Field label="Owner" htmlFor="owner">
  <Input id="owner" placeholder="CSM" />
</Field>
```

Do not use labels for non-form content:

```tsx
<Label>Critical risk</Label>
```

Use `Badge` or `AlertCard` instead.

Do not use labels for metrics:

```tsx
<Label>Connected equipment</Label>
```

Use `MetricCard` instead.

---

## Relationship with other components

### Label and Field

`Field` is preferred for standard form groups.

Use standalone `Label` only when lower-level composition is explicitly needed.

### Label and Input

Use `Label` with `Input` only when not using `Field`.

Connect them with `htmlFor` and `id`.

### Label and Select

Use `Label` with `Select` only when not using `Field`.

Connect them with `htmlFor` and `id`.

### Label and Textarea

Use `Label` with `Textarea` only when not using `Field`.

Connect them with `htmlFor` and `id`.

### Label and SectionHeader

Use `SectionHeader` for section headings.

Do not use `Label` as a heading component.

### Label and StatusSummary

Use `StatusSummary` for display-only label/value information.

Do not use `Label` for static display values.

---

## Anti-patterns

Do not generate:

- standalone labels when `Field` fits
- labels without connected controls
- labels relying on unclear wording
- labels used as helper text
- labels used as section headings
- labels used as badges
- labels used as metric labels outside `MetricCard`
- labels used for display-only metadata
- raw HTML labels when package `Label` or `Field` fits
- custom label components
- local label implementations
- local label wrappers
- internal imports from package files
- form layouts that bypass `Field` without reason

---

## Review checklist

After generation, verify:

- `Label` is imported from `design-system-ai-lab` when used directly
- no local label replacement was created
- no local label wrapper was created
- no internal package import is used
- `Field` is used instead of standalone `Label` for standard form groups
- every standalone `Label` has meaningful text
- every standalone `Label` is connected with `htmlFor` when possible
- the matching form control has the corresponding `id`
- labels are not used as placeholders
- labels are not used as helper text
- labels are not used as section headings
- labels are not used for display-only status context
- raw HTML labels are not used when package components fit

---

## Final principle

A `Label` should name a form control.

For most generated forms, use `Field` instead.

If the text is not naming an editable form control, do not use `Label`.
