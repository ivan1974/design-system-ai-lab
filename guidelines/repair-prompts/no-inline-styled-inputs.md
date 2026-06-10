# Repair Prompt — No Inline Styled Inputs

## When to use

Use this repair prompt when a generated screen styles form controls or interactive inputs locally instead of using package form components.

Common symptoms:

```txt
raw input styled with className or inline styles
raw select styled with local classes
raw textarea styled with local classes
local focus, error or disabled styles on form controls
placeholder used as the only label
```

---

## Repair prompt

```txt
Revise the generated screen so form controls use package form components.

Use Field for field grouping.
Use Input for single-line text, email, number, date or search fields.
Use Select for controlled choices.
Use Textarea for longer text.
Use Label only when a lower-level explicit label is needed.

Do not use raw input, select or textarea elements when package components fit.
Do not create local styled input components.
Do not create inline focus, error, selected or disabled styling.
Do not rely on placeholder text as the only label.

Every form control must have a visible label.
Every labelled control should have matching htmlFor and id when applicable.
Keep the form tied to a clear user action.
```

---

## Acceptance criteria

The repaired screen is acceptable only if:

- form controls use package components
- visible labels are present
- label/control relationships are clear
- no local styled input wrapper remains
- no inline styling simulates form states
- the form supports a clear user action

---

## Related repair prompts

```txt
raw-form-controls.md
invalid-props-or-local-visual-components.md
actions-without-ownership.md
```
