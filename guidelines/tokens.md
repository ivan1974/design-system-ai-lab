# Token Guidelines v0.4

## Purpose

This file explains how Figma Make should use design tokens when generating screens with `design-system-ai-lab` v0.4.

Tokens exist to support consistency, hierarchy, accessibility and trust. They are not decoration.

---

## Required CSS import

Always import package styles once:

```tsx
import "design-system-ai-lab/styles.css";
```

Do not redefine tokens locally.

Do not create a local `:root` theme.

Do not create a competing visual identity.

---

## Official namespace

Use the official token namespace:

```txt
--ec-*
```

Examples:

```txt
--ec-color-background
--ec-color-surface
--ec-color-surface-muted
--ec-color-text-primary
--ec-color-text-secondary
--ec-color-text-muted
--ec-color-border
--ec-color-primary
--ec-color-success
--ec-color-warning
--ec-color-danger
--ec-radius-sm
--ec-radius-md
--ec-radius-lg
--ec-shadow-card
--ec-shadow-popover
```

Use tokens through package components first.

Manual token classes should only support layout or very small wrappers.

---

## v0.4 white-first rule

v0.4 uses a white-first surface system.

Prefer:

```txt
white page background
white workspace surfaces
subtle muted areas
borders before shadows
spacing before decoration
```

Avoid:

```txt
colored page backgrounds
decorative gradients
glass surfaces
blurred panels
heavy shadows
one card per item
```

---

## CompanyName green rule

Use CompanyName green only where it has meaning:

```txt
primary actions
active navigation
selected state
validated positive status
```

Do not use green as decoration.

Do not use green to imply certainty when source evidence is partial.

---

## Text tokens

Use:

```txt
--ec-color-text-primary
--ec-color-text-secondary
--ec-color-text-muted
```

Rules:

- primary text for titles and decision-critical content
- secondary text for descriptions
- muted text for metadata only
- evidence, freshness, source scope and validation must stay readable

If trust-sensitive information affects the decision, do not hide it in overly muted text.

---

## Status and evidence tokens

Prefer semantic components instead of manual colors.

Use:

```tsx
<StatusPill tone="warning">Review needed</StatusPill>
<SourceStrengthPill strength="partial" />
<PriorityPill priority="high" />
<SemanticTag tone="primary">CompanyName Advanced</SemanticTag>
```

Do not create custom chips, badges, pills or tags.

---

## Tone mapping

Allowed tones:

```txt
neutral
primary
success
warning
danger
```

Use:

```txt
success = connected, healthy, completed, validated, customer-ready
warning = partial, needs review, internal proof, expected outcome not proven
danger = critical, blocked, overdue, renewal at risk
neutral = metadata, scope, dates, informational facts
primary = selected, active, plan, managed service
```

Do not generate unsupported tones:

```txt
info
critical
error
muted
default
secondary
```

---

## Shadow rule

v0.4 is no-shadow by default.

Use shadows only for floating elements such as overlays, popovers or dialogs.

Do not use:

```txt
shadow-xl
shadow-2xl
colored shadows
glow shadows
```

---

## Radius and spacing

Use package components before manual radius or spacing utilities.

If manual utilities are needed, keep them simple:

```txt
rounded-(--ec-radius-sm)
rounded-(--ec-radius-md)
rounded-(--ec-radius-lg)
p-4 p-6 p-8
gap-3 gap-4 gap-6
space-y-4 space-y-6 space-y-8
```

Do not create arbitrary visual values such as:

```txt
rounded-[22px]
shadow-[0_20px_60px]
bg-gradient-to-br
```

---

## Component-first token usage

Before using token classes manually, check whether one of these components fits:

```txt
PageHeading
SectionHeading
WorkspaceShell
MasterDetailLayout
WorkspaceDetailPanel
Surface
ListContainer
Well
Toolbar
Tabs
HeaderTabs
Queue rows
Business patterns
```

Manual token styling must not recreate existing components or patterns.

---

## Token review checklist

After generation, verify:

- package styles are imported once
- `--ec-*` tokens are not redefined
- compatibility aliases are not redefined
- no new color palette is introduced
- no decorative gradients are introduced
- no arbitrary radius or shadow system is introduced
- no custom chip, badge, button, card or form system is created
- semantic tones use the approved tone mapping
- source scope, source strength, freshness and validation remain readable
- weak evidence is not made visually stronger
- package components and patterns are used before manual token styling
- the screen remains sober, B2B and operational
