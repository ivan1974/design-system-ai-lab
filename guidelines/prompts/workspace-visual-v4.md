# Workspace visual v4 prompt guidance

## Purpose

Use this prompt guidance when Figma Make should generate a modern operational workspace with the v0.4 visual foundation.

This file complements:

```txt
principles/visual-brand.md
prompts/workspace-v2.md
```

---

## Required visual direction

Add this block to Make prompts when visual quality matters:

```txt
Use the v0.4 workspace visual foundation.
The interface should feel modern, calm, spacious, operational and B2B.
Use Schneider green (#00953B) only as the primary action, confidence and selected-state color.
Use black, white and greys for structure.
Use soft raised surfaces, subtle borders, gentle depth and readable spacing.
Avoid heavy glassmorphism, decorative gradients, neon effects, gaming aesthetics and arbitrary visual systems.
Use package components and tokens instead of inline styles.
```

---

## Preferred visual hierarchy

Use this hierarchy for decision workspaces:

```txt
WorkspaceShell background
→ FilterBar as raised control surface
→ MasterDetailLayout for review structure
→ rows for selectable lists
→ DetailPanel as focused raised panel
→ StickyActionBar for next action
```

Do not make every object a floating card.

Do not create decorative visual layers that do not support the decision.

---

## Hover and selected states

Selectable rows should use package-supported row states.

Prefer:

```tsx
<SignalRow interactive selected={selected} ... />
```

Avoid:

```tsx
<div style={{ background: selected ? "var(--accent)" : "transparent" }}>
  <SignalRow ... />
</div>
```

Do not recreate hover or selected states with custom inline styles.

---

## Surface rules

Use package components before manual surfaces:

```txt
WorkspaceShell
FilterBar
DetailPanel
SectionBlock
Card
business patterns
```

If manual layout styling is unavoidable, use official `--ec-*` tokens only.

Do not create new local surface tokens, shadows, radii, color systems or CSS themes.

---

## Acceptance criteria

The output should pass these checks:

- the workspace uses the package CSS only
- the visual style is modern but sober
- primary green is used meaningfully, not decoratively
- hover and selected states are visible but subtle
- panels feel elevated without heavy blur
- repeated rows do not become cards
- no heavy glassmorphism or decorative effects are introduced
- custom inline styles do not recreate design-system states
