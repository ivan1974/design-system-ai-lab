# Repair Prompt — No Internal Imports

## When to use

Use this repair prompt when Figma Make imports components from internal package
paths instead of the public package root.

Common symptoms:

```tsx
import { Button } from "design-system-ai-lab/dist/components/button";
import { MetricCard } from "design-system-ai-lab/src/components/metric-card";
```

---

## Repair prompt

Copy and paste this prompt into Figma Make.

```txt
Revise the generated screen.

The screen uses internal package imports.

Use only the public package API.
Import all components from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.

Do not import from design-system-ai-lab/dist/.
Do not import from design-system-ai-lab/src/.
Do not import from internal component paths.
Do not import from local components/ui.
Do not create local replacement components.

Replace all internal imports with root imports from design-system-ai-lab.
Keep the same visible screen and screen intent.
Do not change the user decision.
Do not remove business patterns.

App.tsx must render a complete visible screen after the import correction.
```

---

## Acceptance check

After repair, verify:

- [ ] Every package component comes from `design-system-ai-lab`.
- [ ] No import path contains `/dist/`.
- [ ] No import path contains `/src/`.
- [ ] No package component is imported from an internal file path.
- [ ] `design-system-ai-lab/styles.css` is imported once.
- [ ] The visible screen is preserved.
