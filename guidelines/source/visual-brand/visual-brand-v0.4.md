# Visual brand v0.4

## Status

```txt
SOURCE / VISUAL INTENT / NOT RUNTIME
```

This file preserves the historical v0.4 visual brand direction.

Figma Make should not read this file by default.

The active runtime visual rules live in:

```txt
guidelines/runtime/visual-rules.md
```

---

## Purpose

This file defines the visual brand rules Figma Make originally followed when generating screens with `design-system-ai-lab` v0.4.

The goal is not to create decorative brand expression.

The goal is to generate sober, operational, trustworthy B2B product screens.

---

## Brand direction

v0.4 is:

```txt
white-first
sober
structured
B2B
operational
trust-aware
action-oriented
```

v0.4 is not:

```txt
decorative
glassmorphic
marketing-like
consumer-app-like
gradient-heavy
card-saturated
shadow-heavy
```

---

## Primary color

Use CompanyName green only for purposeful emphasis:

```txt
#00953B
```

Use it for:

- primary actions
- selected states
- active navigation
- positive status when appropriate
- confidence in validated information

Do not use green as decoration.

Do not use green to make weak evidence look stronger.

---

## White-first surface model

Use white and near-white surfaces by default.

Preferred:

```txt
white page background
white workspace surfaces
subtle muted surfaces only for grouping
borders before shadows
spacing before decoration
```

Avoid:

```txt
glass cards
blurred panels
colored page backgrounds
large gradients
strong shadows
colored cards for every status
```

---

## Component-first brand expression

Figma Make should express the brand through approved components, not custom styles.

Use:

```txt
PageHeading
SectionHeading
WorkspaceShell
MasterDetailLayout
WorkspaceDetailPanel
Surface
ListContainer
Queue rows
Tabs
StatusPill
SourceStrengthPill
Business patterns
```

Avoid local wrappers named:

```txt
PremiumCard
BrandPanel
GlassSurface
StatusChip
CustomTabs
```

---

## Typography and hierarchy

Use `PageHeading` for page-level intent.

Use `SectionHeading` for major content sections.

Use `Heading` and `Text` for local composition.

Do not create custom text styles or marketing headline systems.

A good generated screen makes the hierarchy obvious:

```txt
page purpose
scope and filters
queue or selected item
source context and evidence
recommendation or risk
owned next action
```

---

## Visual acceptance criteria

A v0.4 generated screen is acceptable if:

- it feels calm and operational
- it uses white-first surfaces
- it does not rely on decorative shadows
- it uses CompanyName green only where meaningful
- it uses package typography components for hierarchy
- it uses package surface and row components instead of styled divs
- it keeps source scope, freshness, validation and proof status readable
- it does not overstate confidence through visual emphasis
- it does not create a competing brand system
