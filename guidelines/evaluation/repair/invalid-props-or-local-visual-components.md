# Repair Prompt — Invalid Props or Local Visual Components

## When to use

Use this repair prompt when Figma Make almost follows the design system but breaks package contract.

Common symptoms:

```txt
unsupported enum-like prop values
undocumented variant, tone, severity, priority, strength, mode, size, status, readiness, riskLevel, proofReadiness, validationStatus, sourceStrength, customerReadiness, humanValidation or density values
local visual components or wrappers that duplicate package components
local Button, Card, Badge, Dialog, Tabs, Drawer, Row, Metric, Pill, Tag or form wrappers
inline styles used to simulate selected states, cards, badges, rows, panels or layout primitives
```

---

## Repair instruction

```txt
Revise the generated screen so every design-system component uses documented prop values only.

Do not invent enum values.
Do not create local visual components or wrappers.
Do not import from internal package paths.

Use values from:
- contracts/props.contract.json
- contracts/evidence-and-trust.contract.json
- package stories
- TypeScript declarations

Small local render helpers are acceptable only when they compose approved design-system-ai-lab components and do not introduce their own visual system.
```

---

## Required changes

1. Replace unsupported prop values with documented values.
2. Replace local visual wrappers with approved package components.
3. Remove local Button, Card, Badge, Dialog, Tabs, Drawer, Row, Metric, Pill, Tag and form wrappers.
4. Use `WorkspaceDetailPanel` instead of a local drawer or side panel.
5. Use `Tabs`, `HeaderTabs`, `SegmentedControl`, `SecondaryNavigation` and `Breadcrumbs` instead of local navigation.
6. Use queue rows instead of local customer, asset, risk or recommendation rows.
7. Use `ListContainer` for grouped rows.
8. Use package form components instead of raw controls when forms are needed.
9. Keep imports from the package root only.

---

## Controlled values to verify

```txt
variant
tone
severity
priority
strength
mode
size
status
readiness
riskLevel
proofReadiness
validationStatus
sourceStrength
customerReadiness
humanValidation
density
```

---

## Related repair prompts

Use a more specific prompt when possible:

```txt
no-local-components.md
raw-form-controls.md
weak-typography-hierarchy.md
overdecorated-surface.md
poor-row-density.md
missing-list-container.md
missing-human-validation.md
```

---

## Acceptance criteria

The repaired screen is acceptable only if:

- all package component props use documented values
- no local visual component duplicates a package component
- no local design system folder is created
- package imports remain from `design-system-ai-lab`
- package CSS is imported once
- forms use package form components when forms are needed
- the screen still uses the v0.6.0 runtime workspace structure when relevant
