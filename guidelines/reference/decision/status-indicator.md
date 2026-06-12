# StatusIndicator Guidelines

## Purpose

`StatusIndicator` is the v0.8 status display primitive for icon, dot, label and optional metadata.

It replaces public business-specific status variants when the visual structure is the same.

## Use this component when

- The value is an operational status.
- The status needs a dot, icon, freshness, date or secondary context.
- The label must remain readable without relying on color alone.
- The same structure can represent connectivity, activity, readiness or lifecycle status.

## Do not use this component when

- The value is a simple rounded label; use `SemanticPill`.
- The value is a bordered category or qualifier; use `SemanticTag`.
- The value is only inline metadata; use `MetaLabel`.
- The content is a long explanation or evidence section.

## Prefer this component over

```txt
ConnectivityLabel
StatusWithIcon
local status chips
custom icon labels
color-only status text
```

## Never generate

- color-only statuses
- local status chips
- business-specific status components with the same structure
- status text that hides freshness when trust depends on it
- decorative status icons without a readable label

## Required props

```txt
label
tone
icon
meta
```

## Controlled values

Tones:

```txt
neutral
muted
primary
info
success
warning
danger
```

Icons:

```txt
none
dot
check
warning
clock
dash
```

## GenAI generation rules

1. Always include a readable label.
2. Use `meta` for dates, freshness or secondary status context.
3. Use a tone from the contract.
4. Do not communicate status by color alone.
5. Do not hide trust-critical freshness or validation status.

## Common generation failures

Failure: Make creates a local status chip.
Why it fails: It duplicates the same status structure.
Fix: Use `StatusIndicator` with an allowed `tone` and `icon`.

Failure: Make uses only color for status.
Why it fails: Status must remain readable without color.
Fix: Add a visible label and use icon or metadata when useful.

Failure: Make omits freshness when it affects trust.
Why it fails: The user cannot assess whether the status is current.
Fix: Add `meta` with freshness, date or source context.

## Repair prompt

Use:

```txt
guidelines/evaluation/repair/missing-source-strength.md
guidelines/evaluation/repair/missing-human-validation.md
guidelines/evaluation/repair/expected-outcomes-as-proven-value.md
```

## Related stories

```txt
src/design-system/stories/decision/status-indicator.stories.tsx
Story status: component-level proof expected. If absent locally, covered through semantic display stories.
```

## Related contracts

```txt
contracts/props.contract.json#StatusIndicator
contracts/components.contract.json
contracts/component-registry.contract.json
```
