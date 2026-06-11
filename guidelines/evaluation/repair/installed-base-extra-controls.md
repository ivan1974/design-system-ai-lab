# Repair prompt — Installed Base extra controls

## Use when

The generated Installed Base Intelligence screen adds extra filters, views, columns, tabs or sticky actions beyond the closed screen contract.

## Repair instruction

Remove all non-contract controls.

## Keep exactly

Views:

```txt
List
Geography
Electrical
```

Filter triggers:

```txt
Location
Asset Type
Contract Type
All Filters
```

Columns:

```txt
Asset
Type
Location
Coverage
Health
Status
Action
```

Detail tabs:

```txt
Overview
Health
Intelligence
Passport
History
Documents
```

Sticky actions:

```txt
Schedule Service
Download Report
Contact Expert
```

## Remove

```txt
Export CSV
Quote
Renew
Assign Owner
SLA filter
Risk tab
Recommendations tab
Owner column
extra KPI columns
```

## Acceptance

The repaired screen remains closed-spec and does not add controls that were not explicitly allowed.
