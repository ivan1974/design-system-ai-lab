# Visual language principle

## Status

```txt
SOURCE PRINCIPLE / VISUAL LANGUAGE / GENAI JUDGMENT
```

## Purpose

This principle defines the visual direction for operational screens generated with this design system.

It is a generation guide for visual clarity, hierarchy and trust.

It is not a full brand guideline.

---

## Must

You must preserve the package visual language.

You must not recreate surfaces, shadows, selected states, badges, pills, buttons or panels as a local design system.

You must not use arbitrary palettes, decorative effects or visual styling that hides the decision path.

You must not make weak evidence look stronger through color, size or effects.

---

## Should

Generated screens should feel:

```txt
modern
operational
B2B
calm
structured
readable
sober
evidence-aware
action-oriented
```

You should use visual design to clarify:

```txt
where am I?
what matters?
what can I trust?
what should I do next?
```

You should rely on layout, spacing, surfaces, text clarity and status labels before adding visual effects.

---

## May

You may create local screen-specific components when exported components do not fit.

Local styling may support layout, grid, spacing, alignment and responsive sizing.

Local styling must not redefine component identity or create a parallel visual system.

---

## Target feel

Generated screens must not feel like:

```txt
generic SaaS dashboards
gaming control rooms
marketing landing pages
decorative concept shots
neon analytics walls
```

---

## Visual language

Prefer:

```txt
light workspace backgrounds
white or near-white surfaces
subtle borders
gentle depth
clear row and panel hierarchy
readable density
visible hover and selected states
restrained transitions
limited color use
```

Use spacing to clarify hierarchy, not to create decorative emptiness.

Use density when it helps operational comparison, especially for inventories.

---

## Color use

Use color for meaning, not decoration.

The core interface should rely mostly on:

```txt
white
near-white
greys
black or near-black text
subtle borders
```

Use primary color for primary action and strong emphasis when appropriate.

Use warning, danger and success colors only for status, attention or decision meaning.

Do not communicate important status through color alone.

---

## Surface hierarchy

A useful operational workspace often has this visual hierarchy:

```txt
workspace background
-> control or filter surface
-> primary list or review surface
-> selected detail panel
-> action area when action is available
```

This hierarchy is guidance, not a mandatory layout.

Use it when it supports the prompt and user task.

---

## Rows and panels

Rows should support scanning and comparison.

They should clearly show:

```txt
hover state
selected state
status
priority
main object identity
```

Panels should feel focused and connected to the workspace.

Avoid panels that feel like unrelated decorative cards.

---

## Avoid decorative visual language

Do not generate:

```txt
heavy glassmorphism
excessive blur
neon effects
gaming or sci-fi aesthetics
decorative 3D visuals
decorative gradients
arbitrary color palettes
over-styled cards
floating elements without task meaning
visual complexity that hides the decision path
```

A small amount of softness, opacity or backdrop treatment is acceptable only when it improves hierarchy and readability.

---

## Relationship with other principles

Visual language should support:

```txt
decision-first reasoning
facts and interpretation clarity
progressive disclosure
accessibility
eco-design
trust and validation visibility
```

If a visual choice makes the screen more impressive but less understandable, do not use it.

If a visual choice hides uncertainty, do not use it.

If a visual choice adds noise, remove it.

---

## Review checklist

Before accepting a generated screen, verify:

```txt
visual hierarchy supports the decision path
color is used for meaning, not decoration
status is not communicated by color alone
surfaces are calm and readable
rows support scanning and selection
panels are connected to the workspace
spacing improves clarity
there are no arbitrary palettes or decorative effects
custom styling does not recreate DS components
local composition remains visually consistent
visual density matches the user task
```

---

## Final principle

Visual design should make the screen calmer, clearer and more trustworthy.

It should not make the screen louder.
