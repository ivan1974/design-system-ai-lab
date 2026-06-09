# Repair prompt — invalid props or local visual components

Use this repair prompt when Figma Make generates code that almost follows the design system but drifts in one of these ways:

- invents unsupported enum values for component props
- uses undocumented `variant`, `tone`, `severity`, `priority`, `strength` or `mode` values
- creates local visual components or wrappers that duplicate package components
- creates local `Button`, `Card`, `Badge`, `Dialog`, `Metric`, `Pill`, `Tag` or form wrappers
- uses inline styles to simulate selected states, cards, badges or layout primitives

---

## Repair instruction

Revise the screen so every design-system component uses documented prop values only.

Do not invent enum values.

Do not create local visual components or wrappers.

Small local render helpers are acceptable only when they compose approved `design-system-ai-lab` components and do not introduce their own visual system.

---

## Required changes

1. Replace unsupported prop values with documented values from the package stories, component contracts or TypeScript declarations.
2. Replace local visual wrappers with approved package components.
3. Remove local `Button`, `Card`, `Badge`, `Dialog`, `Metric`, `Pill`, `Tag` and form wrappers.
4. Keep small render helpers only if they are pure composition helpers using approved package components.
5. Remove inline styles that create custom visual systems.
6. Prefer official `--ec-*` tokens when custom layout styling is unavoidable.
7. Keep imports from the package root only:

```tsx
import { WorkspaceShell, FilterBar, ActionRow } from "design-system-ai-lab";
import "design-system-ai-lab/styles.css";
```

---

## Examples of likely corrections

If `Button variant="outline"` is not documented, replace it with a documented variant such as:

```tsx
<Button variant="secondary">Export</Button>
```

If `SourceStrengthPill strength="medium"` is not documented, replace it with a documented source strength value.

If `StatusPill tone="neutral"` is used for a positive readiness state, use a documented success or ready state when available.

If a local row component creates its own selected state with inline styles, prefer package primitives and minimal composition.

---

## Acceptance criteria

The repaired screen is acceptable only if:

- all package component props use documented values
- no local visual component duplicates a package component
- small local helpers do not create visual styles or new UI primitives
- no local design system folder is created
- package imports remain from `design-system-ai-lab`
- the screen still uses the workspace v2 structure when relevant
