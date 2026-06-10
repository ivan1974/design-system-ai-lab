# Repair prompt — invalid props or local visual components

Use this repair prompt when Figma Make generates code that almost follows the design system but drifts in one of these ways:

- invents unsupported enum values for component props
- uses undocumented `variant`, `tone`, `severity`, `priority`, `strength`, `mode`, `size`, `status` or `readiness` values
- creates local visual components or wrappers that duplicate package components
- creates local Button, Card, Badge, Dialog, Tabs, Drawer, Row, Metric, Pill, Tag or form wrappers
- uses inline styles to simulate selected states, cards, badges, rows, panels or layout primitives

---

## Repair instruction

Revise the screen so every design-system component uses documented prop values only.

Do not invent enum values.

Do not create local visual components or wrappers.

Small local render helpers are acceptable only when they compose approved `design-system-ai-lab` components and do not introduce their own visual system.

---

## Required changes

1. Replace unsupported prop values with documented values from package stories, component contracts or TypeScript declarations.
2. Replace local visual wrappers with approved package components.
3. Remove local Button, Card, Badge, Dialog, Tabs, Drawer, Row, Metric, Pill, Tag and form wrappers.
4. Use `WorkspaceDetailPanel` instead of a local drawer or side panel.
5. Use `Tabs`, `HeaderTabs`, `SegmentedControl`, `SecondaryNavigation` and `Breadcrumbs` instead of local navigation.
6. Use queue rows instead of local customer, asset, risk or recommendation rows.
7. Use `ListContainer` for grouped rows.
8. Keep imports from the package root only.

---

## Related repair prompts

Use a more specific prompt when possible:

```txt
weak-typography-hierarchy.md
overdecorated-surface.md
poor-row-density.md
missing-list-container.md
```

---

## Acceptance criteria

The repaired screen is acceptable only if:

- all package component props use documented values
- no local visual component duplicates a package component
- no local design system folder is created
- package imports remain from `design-system-ai-lab`
- package CSS is imported once
- the screen still uses the workspace v2 structure when relevant
