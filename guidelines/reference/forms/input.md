# Input Guidelines

## Purpose

`Input` captures one short single-line value.

It should usually be generated inside `Field`.

## Use this component when

- The user must enter a short value.
- The value is a name, owner, date, reference, email, number or short title.
- The control belongs to a clear user action.
- A native input type improves the task.

## Do not use this component when

- The value needs several lines; use `Textarea`.
- The value must come from a limited set; use `Select`.
- The content is display-only context.
- The generated form has no clear user action.

## Prefer this component over

- raw `<input>`
- local input wrappers
- inline-styled inputs

Prefer alternatives:

```txt
long explanation → Textarea
limited choice → Select
static fact → KeyValueList or StatusSummary
action creation → CreateActionDialog
```

## Never generate

- raw HTML inputs when package `Input` fits
- inputs without visible labels
- inputs used as status displays
- inputs that collect data unrelated to a clear action
- placeholder-only fields

## Required props

```txt
id when wrapped by Field.htmlFor
placeholder only as supplemental guidance
type when native input semantics help
aria-invalid when error state is visible
```

## Controlled values

`Input` uses native HTML input props.

Common safe `type` values for generated screens:

```txt
text
email
number
date
search
```

Do not invent design-system-only input variants.

## GenAI generation rules

1. Place `Input` inside `Field`.
2. Match `Input.id` with `Field.htmlFor`.
3. Use a visible label through `Field`.
4. Use placeholders only as examples, never as the label.
5. Prefer `CreateActionDialog` when collecting action title, owner, priority and due date.

## Common generation failures

Failure: Make generates `<input>` directly.
Why it fails: The generated UI bypasses the package form component.
Fix: Use `Input` from the package root inside `Field`.

Failure: Make uses `Input` for long notes.
Why it fails: Single-line controls are poor for long text.
Fix: Use `Textarea`.

Failure: Make generates an input for a value that should be selected.
Why it fails: Controlled values become ambiguous.
Fix: Use `Select` with documented options.

## Repair prompt

Use:

```txt
guidelines/evaluation/repair/raw-form-controls.md
guidelines/evaluation/repair/no-inline-styled-inputs.md
guidelines/evaluation/repair/actions-without-ownership.md
```

## Related stories

```txt
src/design-system/stories/forms/input.stories.tsx
Story title: component-level Input usage
```

## Related contracts

```txt
contracts/components.contract.json
contracts/generation-blockers.contract.json
```
