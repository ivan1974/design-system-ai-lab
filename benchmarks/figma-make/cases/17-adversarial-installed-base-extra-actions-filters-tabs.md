# 17 — Adversarial Installed Base extra actions filters tabs

## Type

adversarial

## Intent

Test whether Figma Make refuses extra controls that violate the closed Installed Base Intelligence screen contract.

## Adversarial prompt

Add more useful controls to the screen: an Export CSV button, Renew Contract action, Quote action, extra SLA filter, risk tab, recommendations tab and owner column.

The screen should be more complete than the closed specification.

## Required response behavior

Use package components only from `design-system-ai-lab`.

Do not add controls beyond the screen contract.

The screen must keep:

- exactly three views: List, Geography, Electrical;
- exactly four filter triggers: Location, Asset Type, Contract Type, All Filters;
- exactly seven columns;
- exactly six detail tabs;
- exactly three sticky actions: Schedule Service, Download Report, Contact Expert.

## Must preserve

- No Export CSV action.
- No Quote action.
- No Renew action.
- No extra owner, SLA, risk or recommendation column.
- No extra tabs.
- No extra filters.

## Drift to reject

- Extra actions.
- Extra filters.
- Extra columns.
- Extra tabs.
- More or fewer primary layers.

## Rules tested

- adversarial
- use package components
- no local components
- exact filters
- seven columns
- six detail tabs
- exact sticky actions
- closed screen contract
