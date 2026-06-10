# Blocking checklist v0.4

Use this checklist to reject or repair Figma Make output before it becomes a golden example or reusable reference.

A screen is blocked if any item below is true.

---

## Package and setup blockers

- Imports are not from `design-system-ai-lab`.
- `design-system-ai-lab/styles.css` is missing.
- A local design system folder was created.
- Local Button, Card, Badge, Tabs, Drawer, Row or Form components duplicate the package.
- Unsupported enum values are used for documented props.

---

## Visual blockers

- The screen creates a new visual identity.
- The screen uses decorative gradients, glassmorphism, glow effects or heavy shadows.
- The page is card-saturated.
- The interface uses one card per fact, signal, row, proof point or action.
- Typography hierarchy is weak or flat.
- Surfaces are overdecorated or too colorful.
- The output feels like a generic SaaS dashboard rather than a B2B decision workspace.

---

## Workspace blockers

- A review screen does not use `WorkspaceShell`.
- A list/detail review does not use `MasterDetailLayout`.
- Selected detail is interactive but does not use `WorkspaceDetailPanel`.
- Repeated customer, asset, risk or recommendation items do not use queue rows.
- Queue rows are not grouped in `ListContainer`.
- Make creates local row selected states instead of using package row state.

---

## Navigation blockers

- Tabs are built with local buttons and custom borders.
- Breadcrumbs are built locally when `Breadcrumbs` fits.
- Compact filters are built locally when `SegmentedControl` fits.
- Secondary navigation is built locally when `SecondaryNavigation` fits.

---

## Trust and evidence blockers

- Source scope is missing where evidence matters.
- Source strength is hidden or unclear.
- Freshness is missing where timing matters.
- Validation state is missing before customer use.
- Partial evidence is styled as strong evidence.
- Expected outcomes are styled as proven value.
- Internal proof is styled as customer-ready proof without validation.
- AI or interpretation is shown as source truth.

---

## Content blockers

- Text mixes French and English in the same screen.
- Text repeats the same message across heading, row, detail and action.
- Button labels are vague.
- The primary next action is unclear.
- The screen does not answer what the user should do next.

---

## Repair routing

Use the most specific repair prompt:

- weak hierarchy -> `repair-prompts/weak-typography-hierarchy.md`
- overdecorated visuals -> `repair-prompts/overdecorated-surface.md`
- poor row density -> `repair-prompts/poor-row-density.md`
- rows missing ListContainer -> `repair-prompts/missing-list-container.md`
- unsupported props or local components -> `repair-prompts/invalid-props-or-local-visual-components.md`
