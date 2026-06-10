# Textarea Guidelines

## Purpose

`Textarea` captures longer multi-line text.

It should support a clear user task, such as adding context, rationale or notes.

## Use this component when

- The user must write a longer explanation.
- The value needs multiple lines.
- The content is a note, rationale, context, mitigation explanation or review comment.
- The textarea belongs to a visible form action.

## Do not use this component when

- The value is short; use `Input`.
- The value comes from a fixed set; use `Select`.
- The content is display-only text.
- The generated form has no clear submit, save or review action.

## Prefer this component over

- raw `<textarea>`
- local textarea wrappers
- single-line input for long text

Prefer alternatives:

```txt
short value → Input
limited choice → Select
display-only narrative → Text
recommendation display → RecommendationCard
```

## Never generate

- raw HTML textareas when package `Textarea` fits
- textareas without visible labels
- textareas used as read-only content blocks
- textareas unrelated to the current user task
- placeholder-only textareas

## Required props

```txt
id when wrapped by Field.htmlFor
placeholder only as supplemental guidance
aria-invalid when error state is visible
```

## Controlled values

`Textarea` uses native HTML textarea props.

Do not invent design-system-only textarea variants.

## GenAI generation rules

1. Place `Textarea` inside `Field`.
2. Match `Textarea.id` with `Field.htmlFor`.
3. Use a visible label.
4. Use helper text when the expected content needs explanation.
5. Do not use textarea for static display or proof claims.
6. Prefer `CreateActionDialog` for standard action creation flows.

## Common generation failures

Failure: Make generates `<textarea>` directly.
Why it fails: The generated UI bypasses the package form component.
Fix: Use `Textarea` inside `Field`.

Failure: Make uses `Textarea` for read-only recommendation content.
Why it fails: Textarea implies editing.
Fix: Use `RecommendationCard`, `Text` or a business pattern.

Failure: Make uses a textarea for controlled values such as priority or status.
Why it fails: Controlled values must not become free text.
Fix: Use `Select`.

## Repair prompt

Use:

```txt
guidelines/evaluation/repair/raw-form-controls.md
guidelines/evaluation/repair/no-inline-styled-inputs.md
guidelines/evaluation/repair/actions-without-ownership.md
```

## Related stories

```txt
src/design-system/stories/forms/textarea.stories.tsx
Story title: component-level Textarea usage
```

## Related contracts

```txt
contracts/components.contract.json
contracts/generation-blockers.contract.json
```
