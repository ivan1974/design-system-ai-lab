# Styles

## Status

```txt
ROOT GUIDELINE / STYLES / FIGMA MAKE
```

## Purpose

This file explains the visual style Figma Make should use when generating screens for this kit.

It complements:

```txt
guidelines/tokens.md
guidelines/source/principles/visual-language.md
guidelines/source/principles/accessibility.md
guidelines/source/principles/eco-design.md
```

Use this file to keep generated screens calm, operational and consistent.

---

## Core style direction

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

They should not feel like:

```txt
generic SaaS dashboards
marketing pages
gaming control rooms
sci-fi monitoring walls
decorative concept shots
```

---

## Workspace style

Prefer:

```txt
light workspace background
white or near-white surfaces
subtle borders
soft but restrained depth
clear list and panel hierarchy
readable row density
visible hover and selected states
limited color accents
```

Avoid:

```txt
heavy glassmorphism
large gradients
neon effects
large decorative backgrounds
over-styled cards
floating visual elements without task meaning
```

---

## Surfaces

Use surfaces to clarify structure.

Common surface roles:

```txt
page background
main workspace surface
filter or control surface
list surface
selected detail surface
dialog or sheet surface
```

Use cards and panels when they help grouping.

Do not turn every piece of information into a card.

For dense operational records, prefer rows, tables and controlled panels over large card grids.

---

## Visual hierarchy

Create hierarchy through:

```txt
layout
spacing
section order
surface elevation
text clarity
status labels
component structure
```

Do not rely only on:

```txt
large font sizes
bright colors
large icons
decorative effects
```

The hierarchy should support the user's task and decision path.

---

## Density

Use density according to the task.

Prefer denser layouts for:

```txt
asset inventory
record comparison
document lists
history lists
filterable operational tables
```

Prefer more open layouts for:

```txt
single-object review
short executive summary
focused confirmation
important risk or proof gap explanation
```

Avoid both extremes:

```txt
too sparse to scan
too dense to understand
```

---

## Color style

Use mostly neutral structure.

Use color sparingly for:

```txt
primary action
attention
status
risk
success
validation
```

Do not create arbitrary palettes.

Do not use color to make weak evidence appear stronger.

Do not communicate important status through color alone.

Always pair color with explicit text.

---

## Typography style

Use concise, readable text.

Prefer:

```txt
specific page title
short purpose description
clear section titles
compact labels
short helper text
explicit action labels
```

Avoid:

```txt
generic headings
long paragraph cards
marketing copy
internal jargon
AI-generated filler text
```

Text should clarify intent, evidence, status and action.

---

## Icon and illustration style

Do not add decorative icons, illustrations or animations by default.

Use icons only if they help scanning and do not replace text.

Avoid icon-only status or icon-only actions.

When in doubt, use clear text and structured components.

---

## Motion and effects

Use restrained transitions only when they support interaction clarity.

Avoid animation for decoration.

Avoid effects that distract from the decision path.

---

## AI-related styling

Do not make AI-generated content look more authoritative than source-system facts.

AI-assisted sections should be visually calm and clearly labelled when trust depends on it.

Use wording and status labels to distinguish:

```txt
observed fact
interpretation
recommendation
expected outcome
validated proof
review-needed content
```

Do not use special glowing, magical or decorative AI styling.

---

## Layout style by screen type

### Simple page

Use when the task is focused.

Style should be clean, direct and low-noise.

### List / detail

Use when the user scans multiple items and reviews one selected item.

Style should preserve the relationship between list context and detail content.

### Table + detail panel

Use when comparison and dense scanning matter.

Style should support row readability and selected item clarity.

### Tabs

Use when stable views of the same object are needed.

Style should make the active view clear without overdecorating the tab area.

### Dashboard-like summary

Use only when the prompt requires high-level summarization.

Style should remain decision-oriented and avoid decorative metric walls.

---

## Avoid custom styling when components fit

Do not recreate component visuals with local CSS or inline styles.

Use existing DS primitives and product components.

Use Tailwind utilities for layout and spacing when needed.

Do not redefine:

```txt
buttons
badges
pills
tags
inputs
selects
tables
tabs
dialogs
sheets
alerts
```

with local styling.

---

## Review checklist

Before accepting a generated screen, verify:

```txt
visual style is calm and operational
layout supports the decision path
surfaces clarify structure
color is meaningful and restrained
status is not color-only
text is concise and specific
there are no decorative effects without task meaning
AI content is not visually over-authoritative
existing components are not restyled locally
style supports accessibility and eco-design
```

---

## Final principle

Style should make the interface clearer, calmer and more trustworthy.

If a style choice makes the screen louder but not more useful, remove it.
