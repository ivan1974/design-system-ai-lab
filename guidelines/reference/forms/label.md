# Label Guidelines

## Purpose

`Label` provides accessible text for a form control.

For most generated forms, use `Field` instead of using `Label` directly.

## Use this component when

- A lower-level custom form composition is genuinely needed.
- A form control needs an explicit label outside `Field`.
- The label must connect to a control with `htmlFor`.

## Do not use this component when

- `Field` can provide the label, helper and error structure.
- The text is a section title.
- The text is helper text or validation feedback.
- The content is display-only metadata.

## Prefer this component over

- raw `<label>`
- local label wrappers
- placeholder-only labeling

Prefer `Field` for most generated forms.

## Never generate

- a standalone `Label` without a related form control
- a form control that relies only on placeholder text
- `Label` as a heading or status label
- local labels when package `Field` or `Label` fits

## Required props

```txt
children
htmlFor when labeling a control with id
```

## Controlled values

No enum-like controlled values.

## GenAI generation rules

1. Prefer `Field` for generated forms.
2. Use `Label` directly only for lower-level composition.
3. Match `Label.htmlFor` with the control `id`.
4. Keep label text short and specific.
5. Do not use placeholder text as a substitute for a label.

## Common generation failures

Failure: Make uses `Label` as a section heading.
Why it fails: Labels are for form controls.
Fix: Use section heading components or `Field` for form controls.

Failure: Make creates a labeled control but does not connect `htmlFor` and `id`.
Why it fails: The accessible relationship is weak.
Fix: Match `htmlFor` and `id`.

Failure: Make uses placeholder-only labeling.
Why it fails: Placeholder text is not a reliable label.
Fix: Add `Field` or `Label`.

## Repair prompt

Use:

```txt
guidelines/evaluation/repair/raw-form-controls.md
guidelines/evaluation/repair/no-inline-styled-inputs.md
```

## Related stories

```txt
src/design-system/stories/forms/label.stories.tsx
Story title: component-level Label usage
```

## Related contracts

```txt
contracts/components.contract.json
contracts/generation-blockers.contract.json
```
