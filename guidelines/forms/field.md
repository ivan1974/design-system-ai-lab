# Field Guidelines

## Purpose

`Field` groups one label, one form control, optional helper text and optional error text.

It is the default wrapper for generated form controls.

## Use this component when

- A generated form contains `Input`, `Select` or `Textarea`.
- The user must enter, choose or edit a value.
- The control needs a visible label.
- Helper text or error text clarifies the task.

## Do not use this component when

- The content is display-only context.
- The content is a metric, badge, status, alert, recommendation or action row.
- Multiple unrelated controls are being grouped together.
- `CreateActionDialog` already provides the action creation structure.

## Prefer this component over

- raw `label` and form-control pairs
- local field wrappers
- inline-styled form rows
- placeholder-only labels

Prefer alternatives:

```txt
display-only metadata → KeyValueList or StatusSummary
action creation → CreateActionDialog
owned action display → ActionRow
proof or review status → ValueProofCard or RecommendationReviewPanel
```

## Never generate

- a form control without a visible label
- a `Field` without a meaningful `label`
- a `Field` that contains several unrelated controls
- a label relationship that relies only on placeholder text
- local field wrappers or raw HTML controls when package forms fit

## Required props

```txt
label
children
htmlFor when the child control has an id
helper when the user needs guidance
error when validation feedback is shown
```

## Controlled values

No enum-like controlled values.

`Field` accepts plain text labels, helper text and error text.

## GenAI generation rules

1. Wrap `Input`, `Select` and `Textarea` in `Field`.
2. Match `Field.htmlFor` with the child control `id`.
3. Use one control per field.
4. Use helper text to clarify why the value matters.
5. Use error text only when the UI is showing validation feedback.
6. Use `CreateActionDialog` for standard action creation flows.

## Common generation failures

Failure: Make generates raw labels and inputs.
Why it fails: Raw controls bypass package accessibility and styling.
Fix: Use `Field` with `Input`, `Select` or `Textarea`.

Failure: Make uses placeholder text as the only label.
Why it fails: Placeholders disappear and are not reliable labels.
Fix: Add a `Field` label and connect it with `htmlFor` and `id`.

Failure: Make uses fields for static customer context.
Why it fails: Fields imply editable input.
Fix: Use `KeyValueList`, `StatusSummary` or a business pattern.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/raw-form-controls.md
guidelines/repair-prompts/no-inline-styled-inputs.md
guidelines/repair-prompts/actions-without-ownership.md
```

## Related stories

```txt
src/design-system/stories/forms/field.stories.tsx
Story title: component-level Field usage
```

## Related contracts

```txt
contracts/components.contract.json
contracts/generation-blockers.contract.json
```
