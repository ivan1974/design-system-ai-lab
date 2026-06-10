# Select Guidelines

## Purpose

`Select` lets the user choose one value from a limited list.

It should constrain choices when the value must match a controlled vocabulary.

## Use this component when

- The user must choose from a short fixed set.
- The value affects priority, status, risk, readiness or category.
- Free text would create inconsistent or unsupported values.
- The select belongs to a clear user action.

## Do not use this component when

- The user needs to type a custom value; use `Input`.
- The user needs to write a longer explanation; use `Textarea`.
- The value is display-only context.
- The options are not known or cannot be safely constrained.

## Prefer this component over

- raw `<select>`
- local dropdowns
- free-text inputs for controlled values

Prefer alternatives:

```txt
short free text → Input
long text → Textarea
static status display → StatusPill or StatusSummary
action creation → CreateActionDialog
```

## Never generate

- raw HTML selects when package `Select` fits
- select options that contradict TypeScript or contracts
- select controls without visible labels
- select controls as decorative dropdowns
- forms that collect unrelated data without a clear action

## Required props

```txt
id when wrapped by Field.htmlFor
children option elements
defaultValue or value when a selected value matters
```

## Controlled values

`Select` uses native HTML select props.

When selecting controlled design-system or domain values, options must match contracts.

Examples:

```txt
priority: low | medium | high | critical
status: todo | in-progress | blocked | done
sourceStrength: unknown | partial | single-source | multi-source | validated
proofReadiness: not-available | expected-only | internal-proof | customer-ready-proof
validationStatus: not-reviewed | internal-review-needed | internally-validated | customer-ready | blocked
```

## GenAI generation rules

1. Place `Select` inside `Field`.
2. Match `Select.id` with `Field.htmlFor`.
3. Use a visible label.
4. Use contract values for controlled options.
5. Use `CreateActionDialog` when collecting standard action fields.
6. Do not invent option values.

## Common generation failures

Failure: Make uses `Input` for priority.
Why it fails: Priority has controlled values.
Fix: Use `Select` with documented priority options.

Failure: Make invents select options.
Why it fails: Unsupported values break contracts and downstream interpretation.
Fix: Use only values from contracts or TypeScript.

Failure: Make generates a select without a label.
Why it fails: The user cannot reliably understand the expected choice.
Fix: Wrap `Select` in `Field`.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/raw-form-controls.md
guidelines/repair-prompts/no-inline-styled-inputs.md
guidelines/repair-prompts/actions-without-ownership.md
```

## Related stories

```txt
src/design-system/stories/forms/select.stories.tsx
Story title: component-level Select usage
```

## Related contracts

```txt
contracts/components.contract.json
contracts/props.contract.json
contracts/generation-blockers.contract.json
```
