# Runtime Screen Contract Generation

## Status

```txt
ACTIVE RUNTIME / SCREEN CONTRACT ROUTER / FIGMA MAKE
```

This file tells Figma Make how to generate when a screen-specific contract exists.

A screen contract is stricter than generic workspace guidance.

## Core rule

```txt
When a screen contract exists, read it before component reference docs and preserve it exactly.
```

Do not use a generic workspace architecture when the screen contract defines exact layers, zones, filters, columns, tabs, actions or interactions.

## Required read order for screen-specific generation

Read in this order:

```txt
1. guidelines/Guidelines.md
2. guidelines/runtime/generation-contract.md
3. guidelines/runtime/screen-contract-generation.md
4. relevant screen contract guideline
5. relevant domain model guideline
6. relevant domain contract
7. relevant screen contract JSON
8. component-selection only for allowed component mapping
9. visual-rules and operational visual rules
10. progressive-decision-disclosure
```

## Screen contract priority

If a screen contract defines any of these, preserve the exact value:

```txt
primary layers
layer order
zones
views
filters
filter categories
columns
column internals
grouping
tabs
actions
asset states
interaction rules
context preservation
forbidden content
```

Do not add missing-looking elements unless the screen contract explicitly allows them.

## Component selection under a screen contract

Use only components mapped or allowed by the screen contract.

If the mapped component does not yet exist in the package, do not create a local substitute. Keep the generated screen at the highest compliant abstraction possible and report the missing DS component as a blocker.

## Closed compliance mode

When `complianceMode` is `closed`:

```txt
undefinedElementsAllowed = false
```

This means:

- no extra navigation;
- no extra filters;
- no extra columns;
- no extra tabs;
- no extra actions;
- no extra metrics;
- no replacement dashboard layout;
- no local components.

## Progressive disclosure inside screen contracts

A screen contract controls structure.

Progressive decision disclosure controls hierarchy inside that structure.

Use this order:

```txt
Signal → Decision → Evidence
```

Do not break the screen contract to add disclosure.

Do not add extra sections just to expose evidence.

Use the allowed panel, tab, row, evidence and action areas.

## Repair rule

If the output violates a screen contract:

1. preserve the contract;
2. remove undefined elements;
3. restore exact labels and counts;
4. use mapped DS components;
5. then improve hierarchy inside allowed zones only.

## Installed Base Intelligence target

For Installed Base Intelligence, read:

```txt
guidelines/reference/screen-contracts/installed-base-intelligence.md
guidelines/source/domain-models/installed-base.md
contracts/installed-base-domain.contract.json
contracts/screen-contracts/installed-base-intelligence.contract.json
```

The screen must remain a closed operational workspace, not a generic dashboard.
