# StatusIndicator

## Purpose

`StatusIndicator` is the v0.8 status display primitive for icon, dot, label and optional metadata.

It replaces public business-specific status variants when the visual structure is the same.

## Use this component when

Use `StatusIndicator` for operational status, connectivity status, activity status or date-backed status.

## Do not use this component when

Do not use it for simple tags, rounded pills or long explanatory content.

## Prefer this component over

```txt
ConnectivityLabel
StatusWithIcon
```

## Never generate

Do not create custom status chips, local icon labels or color-only statuses.

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

Always include a readable label. Use metadata for dates, freshness or secondary status context.

## Common generation failures

```txt
color-only status
local status chip
missing freshness or date when trust depends on it
```

## Repair prompt

Replace custom or business-specific status labels with `StatusIndicator` and use allowed `tone` and `icon` values.

## Related stories

Story coverage can be grouped with semantic display primitives.

## Related contracts

```txt
contracts/props.contract.json#StatusIndicator
contracts/components.contract.json
contracts/component-registry.contract.json
```
