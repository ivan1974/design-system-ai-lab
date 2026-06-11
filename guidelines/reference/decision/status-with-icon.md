# StatusWithIcon

## Status

v0.7.0 decision primitive.

## Purpose

Use `StatusWithIcon` to display an operational status with an icon, label and optional date.

It prevents generated screens from inventing local status chips or color-only statuses.

## Allowed values

- `live-telemetry`
- `active-alert`
- `connectivity-issue`
- `last-service-visit`
- `no-record`

## Required mapping

| Value | Label | Icon |
| --- | --- | --- |
| `live-telemetry` | Live telemetry | ✓ |
| `active-alert` | Active alert | ⚠ |
| `connectivity-issue` | Connectivity issue | ⚠ |
| `last-service-visit` | Last service visit | ◷ |
| `no-record` | No record | — |

## Rules

- Always show a text label.
- Never communicate status by color alone.
- Use the `date` prop when freshness or history matters.
- Do not create local status chips.
