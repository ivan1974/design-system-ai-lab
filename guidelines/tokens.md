# Token Guidelines

## Purpose

This file explains how Figma Make should use the design tokens provided by the
`design-system-ai-lab` package.

Its role is to keep generated screens visually coherent with the design system.

Use `tokens.md` to define:

- the official token namespace
- compatibility aliases
- color usage rules
- Tag / Pill / Badge roles
- status tone mapping
- radius, spacing and shadow rules
- acceptable utility usage
- token-related anti-patterns
- token review criteria

Do not use this file as the full design system documentation.

For generation rules, screen routing, AI usage, evidence, accessibility and
acceptance criteria, read:

```txt
Guidelines.md
```

For technical setup and package imports, read:

```txt
setup.md
```

For broader visual style rules, read:

```txt
styles.md
```

---

## Core token principle

Use the tokens already provided by the design system CSS.

Do not invent new visual values.

Do not create a new color palette, spacing scale, radius system, shadow system or
local theme unless the designer explicitly asks for a design system extension.

Prefer package components, composition components and business patterns before
manual token usage.

Tokens should support:

- hierarchy
- readability
- grouping
- status communication
- accessibility
- sober B2B visual style
- trust-sensitive distinctions when relevant

Tokens should not be used to create decorative complexity, card saturation or
make weak evidence look stronger than it is.

---

## Required CSS import

Tokens are available through the package CSS.

Always import:

```tsx
import "design-system-ai-lab/styles.css";
```

Do not duplicate token definitions in generated files.

Do not recreate `:root` token declarations locally.

Do not create a competing theme file unless explicitly requested.

---

## Official token namespace

The official design system token namespace is:

```txt
--ec-*
```

The `--ec-*` prefix is the stable technical namespace for the package.

Do not rename it.

Do not use it as product-facing copy.

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
--ec-color-primary-hover
--ec-color-primary-foreground
--ec-color-success
--ec-color-warning
--ec-color-danger
--ec-radius-sm
--ec-radius-md
--ec-radius-lg
--ec-spacing-xs
--ec-spacing-sm
--ec-spacing-md
--ec-spacing-lg
--ec-spacing-xl
--ec-shadow-card
--ec-shadow-popover
```

Use these tokens through package components, business patterns and approved
utility classes.

Manual token usage should be limited to page-level layout or simple wrappers.

---

## Compatibility aliases

The package may provide compatibility aliases for Figma Make and shadcn-like
generated code.

Common aliases include:

```txt
--background
--foreground
--muted
--muted-foreground
--border
--input-background
--primary
--primary-foreground
--radius-sm
--radius-md
--radius-lg
```

These aliases make generated code more tolerant.

They do not replace the official `--ec-*` token namespace.

When writing custom layout wrappers, prefer `--ec-*` tokens when possible.

Keep compatibility aliases only when they map to the package CSS and do not
introduce a new visual system.

Do not redefine compatibility aliases locally.

---

## Color token rules

### Background and surfaces

Use:

```txt
--ec-color-background
--ec-color-surface
--ec-color-surface-muted
```

Use `--ec-color-background` for the main page background.

Use `--ec-color-surface` for cards and elevated content areas.

Use `--ec-color-surface-muted` for secondary areas or subtle contrast.

Recommended page wrapper:

```tsx
<main className="min-h-screen bg-(--ec-color-background)">
  ...
</main>
```

Prefer `WorkspaceShell`, `DetailPanel`, `SectionBlock`, `Card` and business
patterns before manually creating surface containers.

Do not use surface tokens to create one card per item.

---

### Text hierarchy

Use:

```txt
--ec-color-text-primary
--ec-color-text-secondary
--ec-color-text-muted
```

Use `--ec-color-text-primary` for main titles and important content.

Use `--ec-color-text-secondary` for descriptions and supporting content.

Use `--ec-color-text-muted` for metadata and low-emphasis information.

Do not introduce new text colors for decoration.

Do not hide important evidence, source, freshness, validation or proof status in
overly muted text when it affects trust.

---

### Borders

Use:

```txt
--ec-color-border
```

Do not create custom border colors.

Do not use colored borders for decoration.

Use status components such as `StatusPill`, `SemanticTag`, `SourceStrengthPill`,
`AlertCard` and business patterns when a status needs to be communicated.

---

### Primary actions

Use:

```txt
--ec-color-primary
--ec-color-primary-hover
--ec-color-primary-foreground
```

These tokens are already used by `Button`.

Prefer:

```tsx
<Button>Primary action</Button>
```

Do not manually recreate primary button styles.

---

### Semantic colors

Use:

```txt
--ec-color-success
--ec-color-warning
--ec-color-danger
```

Prefer semantic components instead of manual semantic color styling:

```tsx
<StatusPill tone="warning">Review needed</StatusPill>
```

```tsx
<SemanticTag tone="primary">EcoCare Advanced</SemanticTag>
```

Avoid:

```tsx
<span style={{ color: "orange" }}>Connectivity partial</span>
```

Do not communicate status by color alone.

The label must explain the status.

---

## Tag / Pill / Badge roles

Use the right compact semantic component for the job.

| Component | Role | Use for | Do not use for |
| --- | --- | --- | --- |
| `SemanticTag` | Category or qualifier | plan, scope, asset type, segment, domain, source category | status, priority, validation state |
| `StatusPill` | State or readiness | review needed, customer-ready, blocked, validated, critical | category labels or decorative chips |
| `PriorityPill` | Priority | high, medium, low priority | readiness, source strength |
| `SourceStrengthPill` | Evidence strength | strong, partial, internal, customer-ready, unknown | priority or generic tags |
| `Badge` | Legacy/simple metadata | compact metadata inside older/simple components | primary v2 workspace status vocabulary |

Preferred examples:

```tsx
<SemanticTag tone="primary">EcoCare Advanced</SemanticTag>
```

```tsx
<StatusPill tone="warning">Review needed</StatusPill>
```

```tsx
<PriorityPill priority="high" />
```

```tsx
<SourceStrengthPill strength="partial" />
```

Do not create custom chips, tags or pills with raw spans and manual colors.

Do not make tags, pills or badges interactive unless the package component is
explicitly designed for interaction.

---

## Status tone mapping

Use this mapping when generating status labels, tags, pills or badges.

| State | Preferred tone |
| --- | --- |
| Active plan | `primary` |
| Current or selected | `primary` |
| Managed service | `primary` |
| Connected | `success` |
| Healthy | `success` |
| Completed | `success` |
| Validated | `success` |
| Customer-ready proof | `success` |
| Informational metadata | `neutral` |
| Renewal in 90 days | `neutral` |
| Source or freshness metadata | `neutral` |
| Health fact | `neutral` |
| Intelligence interpretation | `neutral` |
| Connectivity partial | `warning` |
| Partially connected | `warning` |
| Source strength: partial | `warning` |
| Review needed | `warning` |
| Expected outcome, not proven | `warning` |
| Technical outcome, not customer-ready proof | `warning` |
| Internal proof, not customer-ready | `warning` |
| Critical risk | `danger` |
| Critical assets disconnected | `danger` |
| Non-connected critical assets | `danger` |
| Renewal at risk | `danger` |
| Overdue | `danger` |

Allowed tones are:

```txt
neutral
primary
success
warning
danger
```

Do not generate:

```txt
info
critical
error
muted
default
secondary
```

Use `neutral` for informational labels instead of `info`.

Use `danger` for critical risk instead of `critical`.

---

## Radius token rules

Use:

```txt
--ec-radius-sm
--ec-radius-md
--ec-radius-lg
```

Guidance:

- `--ec-radius-sm` for compact controls and rows
- `--ec-radius-md` for cards and grouped content
- `--ec-radius-lg` for larger surfaces such as dialogs

Use package components whenever possible.

For simple wrappers, use token-based utilities only when needed:

```txt
rounded-(--ec-radius-sm)
rounded-(--ec-radius-md)
rounded-(--ec-radius-lg)
```

Do not use arbitrary radius values such as:

```txt
rounded-[22px]
rounded-3xl
```

unless the designer explicitly asks for a new visual direction.

---

## Spacing token rules

Use the existing package spacing scale and supported layout utilities.

Available spacing tokens:

```txt
--ec-spacing-xs
--ec-spacing-sm
--ec-spacing-md
--ec-spacing-lg
--ec-spacing-xl
```

Preferred layout utilities:

```txt
p-4
p-6
p-8
gap-2
gap-3
gap-4
gap-6
space-y-4
space-y-8
```

Use spacing to clarify hierarchy and grouping.

Do not create a new spacing scale.

Do not use excessive spacing that makes an operational screen feel like a
marketing page.

Generated screens should remain dense enough for B2B operational work.

---

## Shadow token rules

Use:

```txt
--ec-shadow-card
--ec-shadow-popover
```

Guidance:

- `--ec-shadow-card` for subtle content grouping
- `--ec-shadow-popover` for dialogs and floating surfaces

Avoid dramatic or decorative shadows such as:

```txt
shadow-xl
shadow-2xl
shadow-blue-500/40
```

The visual style should remain sober and operational.

---

## Token usage through components

Prefer package components because they already apply the right tokens.

Preferred:

```tsx
<WorkspaceShell>
  <MasterDetailLayout list={...} detail={...} />
</WorkspaceShell>
```

Less preferred:

```tsx
<section className="rounded-(--ec-radius-md) border border-(--ec-color-border) bg-(--ec-color-surface) shadow-(--ec-shadow-card)">
  ...
</section>
```

Prefer business patterns when the section intent matches an available pattern.

Preferred:

```tsx
<ConnectivityCoverageCard mode="section" coverageRate="68%" />
```

Manual token classes should not recreate existing components, decision
components or business patterns.

---

## Token usage with forms

Form components already use the correct tokens.

Preferred:

```tsx
<Field label="Owner" htmlFor="owner">
  <Input id="owner" placeholder="CSM" />
</Field>
```

Avoid:

```tsx
<input
  style={{
    height: "40px",
    borderRadius: "6px",
    border: "1px solid #e2e8f0",
  }}
/>
```

Do not create inline-styled form controls.

Do not manually recreate input, select or textarea token styles.

---

## Acceptable utility usage

Generated screens may use layout utilities such as:

```txt
min-h-screen
mx-auto
max-w-7xl
p-8
grid
flex
gap-4
space-y-8
items-center
justify-between
```

These utilities are acceptable when they support layout and hierarchy.

Do not use utilities to invent a new visual identity.

Do not use arbitrary values to bypass the token system.

---

## Forbidden token patterns

Do not generate local CSS like this:

```css
:root {
  --ec-color-primary: #7c3aed;
  --ec-radius-md: 20px;
}
```

Do not create non-system tokens such as:

```txt
--primary-blue
--dashboard-gradient
--card-glow
--brand-purple
--radius-premium
```

Do not use token-like classes or styles to create:

- decorative gradients
- glassmorphism
- glow effects
- arbitrary shadow systems
- arbitrary radius systems
- custom chip systems
- custom badge systems
- custom button systems
- custom form systems
- a new color palette
- a new visual identity
- card saturation

Do not override tokens to make a screen more decorative.

---

## Status communication rules

Use tokens and components together to communicate state.

Good:

```tsx
<StatusPill tone="danger">Critical risk</StatusPill>
```

Good:

```tsx
<SourceStrengthPill strength="partial" />
```

Good:

```tsx
<StatusPill tone="warning">Expected outcome, not proven</StatusPill>
```

Good:

```tsx
<ConnectivityCoverageCard
  mode="section"
  coverageRate="68%"
  connectedAssets="17 assets"
  disconnectedAssets="8 assets"
  monitoringStatus="Partial monitoring coverage"
  lastUpdate="18 hours ago"
/>
```

Avoid:

```tsx
<span className="text-(--ec-color-warning)">Warning</span>
```

Text should explain the meaning of the status.

For evidence-sensitive states, the UI should clarify what is known, what is
uncertain and what still needs validation.

Do not rely on visual confidence, stronger color or larger typography to replace
source evidence.

---

## Token review checklist

After generation, verify:

- the screen imports `design-system-ai-lab/styles.css`
- the official `--ec-*` namespace is preserved
- the `--ec-*` prefix is not used as product-facing copy
- compatibility aliases are not redefined locally
- no new color palette is introduced
- no arbitrary radius values are introduced
- no arbitrary shadow values are introduced
- no decorative gradients are introduced
- no custom form styling system is introduced
- no custom tag, pill or badge system is introduced
- semantic tones use the approved tone mapping
- unsupported tones such as `info` or `critical` are not used
- status is not communicated by color alone
- evidence-sensitive status includes readable context when needed
- package components are used before manual styling
- business patterns are used before manual section rebuilding
- workspace components are used before card stacks when review is needed
- manual token styling is not used to recreate existing components or patterns
- the visual result remains sober, B2B and readable

---

## Final principle

Tokens are not decoration.

Tokens are the foundation that keeps generated screens coherent, accessible,
sober, reusable and governed by the design system.

Tokens should support meaning, hierarchy and trust.

They should not be used to create decorative complexity, replace the approved
component vocabulary or make weak evidence look stronger than it is.
