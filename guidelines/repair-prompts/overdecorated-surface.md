# Repair prompt — overdecorated surface

Use this repair prompt when Figma Make generates gradients, glass effects, heavy shadows, colorful cards or decorative surfaces that conflict with v0.4.

---

## Repair instruction

Revise the screen to follow the v0.4 white-first surface system.

Use package surface primitives and workspace components instead of custom decorated containers.

---

## Required changes

1. Remove decorative gradients.
2. Remove glassmorphism, blur and glow effects.
3. Remove heavy shadows from normal cards, rows and panels.
4. Replace local card wrappers with `Surface`, `ListContainer`, `Well`, `Toolbar` or business patterns.
5. Use white or subtle neutral surfaces.
6. Use Schneider green only for primary actions, selected states, active navigation or meaningful positive status.
7. Keep source, freshness and validation readable.

---

## Preferred replacements

Replace this:

```tsx
<div className="rounded-3xl bg-gradient-to-br from-white to-green-50 shadow-xl">
  ...
</div>
```

with this:

```tsx
<Surface>
  ...
</Surface>
```

Replace repeated decorated cards with:

```tsx
<ListContainer>
  <AssetQueueRow ... />
</ListContainer>
```

---

## Acceptance criteria

The repaired screen passes if:

- it is white-first
- borders and spacing replace decorative shadows
- no glass, glow or decorative gradient remains
- no custom surface system remains
- repeated objects are not displayed as decorative cards
- visual style supports decision-making, not decoration
