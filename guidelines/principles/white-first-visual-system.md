# White-first visual system

## Purpose

This principle defines the refined v0.4 visual foundation.

The design system should feel professional because it is structured, spacious and readable — not because it uses decorative effects.

---

## Core rule

Use a white-first interface.

Default surfaces should be white.

Workspace backgrounds should be white or near white.

Structure should come from:

```txt
spacing
alignment
typography
soft borders
dividers
selected states
```

not from heavy shadows, tinted backgrounds or glass effects.

---

## Green usage

Keep CompanyName green as the primary color:

```txt
#00953B
```

Use green only for:

- primary actions
- positive confidence
- selected states
- meaningful operational emphasis

Do not use green as decoration.

---

## Shadows

Default surfaces should not use shadows.

Use borders and dividers first.

Reserve shadows for:

- popovers
- overlays
- temporary floating panels
- modal surfaces

Do not use shadows for every panel, card, row or section.

---

## Spacing

Prefer more spacing than dense dashboard compression.

Use spacing to distinguish:

```txt
page header
controls
main workspace
list
selected detail
section groups
row content
metadata
```

Rows should remain operational, but not cramped.

Panels should have enough internal padding for review and decision-making.

---

## Typography

Headings must create hierarchy.

Use a visible difference between:

```txt
page title
section title
subsection title
row title
body text
caption metadata
```

Do not render all text as `text-sm` with only weight changes.

---

## Avoid

Do not generate:

- grey-tinted dashboards by default
- heavy shadows
- glassmorphism
- decorative gradients
- glow effects
- visually noisy cards
- cramped rows
- flat text hierarchy

---

## Make instruction

When generating with Figma Make:

```txt
Use the white-first v0.4 visual system.
Use spacing, typography, borders and selected states for hierarchy.
Do not add shadows to default surfaces.
Do not use decorative backgrounds.
Use package components and tokens instead of local visual styling.
```
