# Textarea Guidelines

## Purpose

Use `Textarea` for multi-line text in generated forms.

A textarea should capture longer content that needs explanation, context or
narrative detail.

A textarea is not a short input.

A textarea is not a status display.

A textarea is not a decorative writing area.

In generated screens, `Textarea` should usually be wrapped in `Field`.

---

## Import

Import `Textarea` from the package root:

```tsx
import { Textarea } from "design-system-ai-lab";
```

If field structure is needed, import `Field` from the same package root:

```tsx
import {
  Field,
  Textarea,
} from "design-system-ai-lab";
```

Do not import `Textarea` from internal package paths.

Do not recreate `Textarea` locally.

Do not create custom textarea wrappers.

Do not use inline-styled raw `textarea` elements.

---

## Component role

Use `Textarea` when the user must write a note, explanation or recommendation.

Good use cases:

- customer context
- action note
- recommendation
- mitigation rationale
- next step explanation
- value proof summary
- QBR preparation note
- service team note
- customer-facing summary draft
- escalation reason

Use `Input` when the value is short and single-line.

Use `Select` when the value should be chosen from a limited list.

Use `StatusSummary` or a business pattern when the value is display-only.

---

## Props

`Textarea` supports native HTML textarea props.

Use it like this:

```tsx
<Textarea
  id="action-note"
  placeholder="Describe why this action matters and what should happen next."
/>
```

Common props:

```txt
id
name
placeholder
value
defaultValue
disabled
required
aria-label
aria-invalid
autoComplete
rows
className
```

Use `className` only for layout adjustments, such as width or minimum height.

Do not use `className` to redefine the visual identity of the textarea.

---

## Default usage with Field

Prefer wrapping `Textarea` with `Field`.

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

This is preferred because it provides:

- a visible label
- a clear relationship between label and control
- optional helper text
- optional error text
- consistent spacing

Do not generate standalone textareas without labels unless there is a clear
accessibility reason and an `aria-label` is provided.

---

## Label and accessibility rules

When using `Textarea` inside `Field`, connect the field and textarea with
`htmlFor` and `id`.

Good:

```tsx
<Field label="Note" htmlFor="action-note">
  <Textarea
    id="action-note"
    placeholder="Describe the customer context, risk and next step."
  />
</Field>
```

Weak:

```tsx
<Field label="Note">
  <Textarea placeholder="Describe the customer context, risk and next step." />
</Field>
```

The second example may still render, but it is weaker for accessibility and
review quality.

Avoid relying only on placeholder text.

A placeholder is guidance.

It is not a label.

---

## Placeholder rules

Placeholders should provide useful examples, not replace labels.

Good placeholders:

```txt
Describe why this action matters and what should happen next.
Summarize the customer context, risk and expected next step.
Explain what should be prepared before the customer meeting.
Write a customer-ready summary of the service outcome.
```

Bad placeholders:

```txt
Enter text
Type here
Textarea
Value
Required
```

The placeholder should help the user understand the expected content.

---

## Helper text rules

Use helper text when it clarifies what the textarea should contain.

Good helper text:

```txt
Add useful context for the service team.
Summarize the recommendation in customer-ready language.
Explain the mitigation rationale before assigning an owner.
Write the next step as a concrete action.
```

Bad helper text:

```txt
Enter information.
Write something.
More details.
Required field.
```

Helper text should support the task, not restate the label.

---

## When to use Textarea

Use `Textarea` for:

- notes
- recommendations
- customer context
- service context
- mitigation rationale
- escalation reason
- next step explanation
- value proof summary
- QBR preparation notes
- customer-facing summaries
- internal handoff context

---

## When not to use Textarea

Do not use `Textarea` for:

- short names
- short titles
- due dates
- numeric values
- priority selection
- status selection
- display-only context
- metrics
- badges
- alerts
- action cards
- structured label/value summaries

Use other components instead:

| Need | Use |
| --- | --- |
| Short editable value | `Input` |
| Limited choice | `Select` |
| Label + control + helper/error | `Field` |
| Display-only label/value context | `StatusSummary` |
| Customer context display | `CustomerStatusCard` |
| Renewal context display | `RenewalRiskSummary` |
| Value proof display | `ValueProofCard` |
| Metric | `MetricCard` |
| Risk or blocker | `AlertCard` |
| Recommended action | `ActionCard` |
| Status metadata | `Badge` |

---

## Textarea in action forms

For action creation forms, a common textarea field is `Note`.

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

For standard action creation, prefer `CreateActionDialog` when it fits.

---

## Textarea in Dialog

Use `Textarea` inside `Field` when a custom dialog form needs a longer value.

```tsx
<Dialog
  trigger={<Button>Create mitigation action</Button>}
  title="Create mitigation action"
  description="Add a focused mitigation action linked to the current renewal risk."
>
  <form className="space-y-4">
    <Field
      label="Mitigation rationale"
      htmlFor="mitigation-rationale"
      helper="Explain why this action should reduce the customer risk."
    >
      <Textarea
        id="mitigation-rationale"
        placeholder="The customer needs a clear value proof summary before renewal..."
      />
    </Field>
  </form>
</Dialog>
```

For action creation flows, prefer `CreateActionDialog` when it matches the task.

---

## Disabled state

Use `disabled` when the content cannot be edited.

Example:

```tsx
<Field label="Note" htmlFor="action-note">
  <Textarea
    id="action-note"
    defaultValue="This note is read-only because the action has already been closed."
    disabled
  />
</Field>
```

Use disabled textareas sparingly.

If content is display-only, prefer `Card`, `StatusSummary`, `ValueProofCard` or a
business pattern instead of a disabled textarea.

---

## Error state

Use `Field error` with `Textarea` when the user must correct a value.

```tsx
<Field
  label="Note"
  htmlFor="action-note"
  error="Add a short note before saving the action."
>
  <Textarea
    id="action-note"
    placeholder="Describe why this action matters and what should happen next."
    aria-invalid="true"
  />
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

- the textarea is wrapped in `Field`
- the label is clear
- the helper explains the expected content
- the placeholder provides a useful example
- the `id` matches `htmlFor`

---

## Bad examples

Do not generate raw textareas:

```tsx
<textarea placeholder="Note" />
```

Use `Field` and `Textarea` instead:

```tsx
<Field label="Note" htmlFor="note">
  <Textarea id="note" placeholder="Describe why this action matters." />
</Field>
```

Do not use inline styles:

```tsx
<textarea
  style={{ minHeight: "120px", borderRadius: "6px" }}
  placeholder="Note"
/>
```

Do not use `Textarea` for a short value:

```tsx
<Textarea placeholder="Account owner" />
```

Use `Input` instead.

Do not use a disabled textarea for read-only business context:

```tsx
<Textarea value="Greenfield Industries is in renewal watch." disabled />
```

Use `StatusSummary`, `Card`, `ValueProofCard` or a business pattern instead.

---

## Relationship with other components

### Textarea and Field

Use `Field` as the default wrapper for `Textarea`.

### Textarea and Label

Use standalone `Label` only when a lower-level custom form composition is
explicitly needed.

For most generated forms, use `Field` instead.

### Textarea and Input

Use `Input` instead of `Textarea` for short single-line values.

### Textarea and Select

Use `Select` instead of `Textarea` when the user must choose from a limited list.

### Textarea and Dialog

Use `Textarea` inside `Field` for custom dialog notes and explanations.

Prefer `CreateActionDialog` for standard action creation flows.

### Textarea and StatusSummary

Use `StatusSummary` for display-only label/value information.

Use `Textarea` only when the user can edit or enter longer content.

### Textarea and ValueProofCard

Use `ValueProofCard` to display customer-ready proof points.

Use `Textarea` only when the user is drafting or editing a proof point.

---

## Anti-patterns

Do not generate:

- raw `textarea` elements when `Textarea` fits
- inline-styled textareas
- textareas without labels
- textareas relying only on placeholders
- textareas used for short values
- textareas used for display-only context
- disabled textareas used as static text
- textareas used as generic content boxes
- custom textarea components
- local textarea implementations
- local textarea wrappers
- internal imports from package files
- form layouts that bypass `Field`

---

## Review checklist

After generation, verify:

- `Textarea` is imported from `design-system-ai-lab`
- no local textarea replacement was created
- no local textarea wrapper was created
- no internal package import is used
- every editable textarea is wrapped in `Field` when appropriate
- every textarea has a clear label through `Field` or an accessible alternative
- `htmlFor` matches the textarea `id` when possible
- the textarea is used for multi-line content only
- short content uses `Input` instead
- limited choices use `Select` instead
- display-only context uses `StatusSummary`, `Card` or a business pattern instead
- no inline-styled raw textarea is used
- `CreateActionDialog` is used for standard action creation flows when appropriate

---

## Final principle

A `Textarea` should capture longer editable content.

If the content is short, use `Input`.

If the value is chosen from options, use `Select`.

If the content is display-only, do not use `Textarea`.
