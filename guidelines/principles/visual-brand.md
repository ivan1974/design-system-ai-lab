# Visual brand principle

## Purpose

This principle defines the visual direction Figma Make should follow when generating screens with `design-system-ai-lab`.

It is not a full corporate brand guideline.

It is a generation constraint for modern operational workspaces.

---

## Target feel

Generated screens should feel:

```txt
modern
operational
B2B
calm
structured
readable
spacious
evidence-aware
action-oriented
```

They should not feel like generic SaaS dashboards, gaming control rooms or decorative concept shots.

---

## Visual language

Use the design system as a soft enterprise workspace language:

- light workspace backgrounds
- white or near-white raised surfaces
- subtle borders
- gentle depth
- generous but not wasteful spacing
- readable row density
- visible hover and selected states
- clear panel hierarchy
- restrained motion and transitions

Use Schneider green as the main confidence and action color:

```txt
#00953B
```

Use black, white and greys for structure.

Use warning, danger and success colors only for status and decision meaning.

---

## Avoid

Do not generate:

- heavy glassmorphism
- excessive blur
- neon effects
- gaming or sci-fi aesthetics
- decorative 3D visuals
- decorative gradients
- arbitrary color palettes
- over-styled cards
- floating elements without task meaning
- visual complexity that hides the decision path

A small amount of surface softness, opacity or backdrop blur is acceptable only when it improves hierarchy and does not reduce readability.

---

## Workspace hierarchy

Prefer this visual hierarchy:

```txt
workspace background
→ raised filter or control surface
→ list and central review surface
→ selected detail panel
→ sticky action bar
```

Rows should clearly show hover and selected states without becoming heavy cards.

Panels should feel elevated and focused without looking disconnected from the workspace.

---

## Make instruction

When a screen needs a modern visual treatment, Make should not add custom visual styling manually.

Make should compose approved components that already carry the v0.4 workspace visual language.

If custom layout styling is unavoidable, use official `--ec-*` tokens only.

Do not recreate surfaces, shadows, selected states, badges, pills, buttons or panels with local CSS or inline styles.
