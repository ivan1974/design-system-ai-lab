# DppTag

## Status

v0.7.0 decision primitive.

## Purpose

Use `DppTag` to display whether a Digital Product Passport is enabled.

It extends the existing badge language and prevents local DPP chips.

## Allowed values

- `dpp-enabled`
- `no-dpp`

## Labels

- DPP Enabled
- No DPP

## Rules

- Do not invent additional DPP states.
- Use `no-dpp` when no Digital Product Passport is available.
- Do not communicate DPP status by color alone.
