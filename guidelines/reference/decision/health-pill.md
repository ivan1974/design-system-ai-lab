# HealthPill

## Status

v0.7.0 decision primitive.

## Purpose

Use `HealthPill` to display controlled asset health values.

It extends the existing pill visual language instead of creating a new local health chip.

## Allowed values

- `critical`
- `poor`
- `fair`
- `good`
- `excellent`
- `unknown`

## Rules

- Use `critical` or `poor` for severe asset health.
- Use `unknown` when the asset health is not known.
- Do not invent new health values.
- Do not display health through color alone.
- Do not use `HealthPill` for recommendations or actions.
