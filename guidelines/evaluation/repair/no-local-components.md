# Repair Prompt — No Local Components

## When to use

Use this repair prompt when Figma Make creates local components, local wrappers or
a local design system instead of using the published `design-system-ai-lab`
package.

Common symptoms:

```txt
components/ui/
src/components/ui/
packages/design-system-ai-lab/
LocalButton
LocalCard
ForwardedButton
```

---

## Repair prompt

Copy and paste this prompt into Figma Make.

```txt
Revise the generated screen.

The screen creates local components or local wrappers instead of using the published package.

Use the published npm package design-system-ai-lab directly.
Import all components from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.

Do not create packages/design-system-ai-lab.
Do not create local design system components.
Do not create local wrappers around package components.
Do not create local Button, Card, Badge, Dialog, MetricCard, AlertCard, ActionCard or PageHeader components.
Do not create shadcn-like, Radix-based, MUI or unrelated component systems.
Do not recreate package components with raw HTML.

Keep the original screen intent and user decision.
Use package components and business patterns directly.
Use business patterns before raw Card sections when a pattern exists.

App.tsx must render a complete visible screen.
```

---

## Acceptance check

After repair, verify:

- [ ] Components are imported from `design-system-ai-lab`.
- [ ] `design-system-ai-lab/styles.css` is imported.
- [ ] No local component system exists.
- [ ] No local wrappers exist.
- [ ] Business patterns are used directly.
- [ ] `App.tsx` still renders a complete visible screen.
