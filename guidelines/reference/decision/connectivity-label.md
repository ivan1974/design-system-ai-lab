# ConnectivityLabel

## Status

v0.7.0 decision primitive.

## Purpose

Use `ConnectivityLabel` to show whether an asset is connected, not connected or unknown.

It provides a controlled DS-only label for operational inventory rows.

## Allowed values

- `connected`
- `not-connected`
- `unknown`

## Rules

- Always show a text label.
- Use `unknown` when connectivity is not known.
- Third-party assets must use `unknown`.
- Do not create local connectivity chips.
- Do not communicate connectivity by color alone.
