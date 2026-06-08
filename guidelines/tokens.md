# Token Guidelines

## Purpose

This file explains how Figma Make should use the design tokens provided by the
`design-system-ai-lab` package.

Tokens define the visual foundation of the design system package.

Figma Make should use the existing token vocabulary instead of inventing new
visual values.

The goal is to keep generated screens coherent, accessible, sober, reusable and
governed by the package styles.

---

## Core token principle

Use the tokens already provided by the design system CSS.

Do not create new tokens unless the designer explicitly asks for a design system
extension.

Do not hardcode arbitrary colors, radius values, spacing systems or shadow
values when a token or package component already exists.

Prefer package components and business patterns before manual token usage.

Token usage must also support the transversal principles:

```txt
principles/accessibility.md
principles/eco-design.md
principles/ai-usage.md
principles/evidence-and-trust.md
```

This means tokens should not be used to create decorative complexity, hide
uncertainty, communicate status only through color or bypass the approved
component vocabulary.

Tokens must also preserve trust-critical cues when they affect the decision:
asset scope, connectivity status, source scope, source strength, freshness,
Health versus Intelligence distinction, expected outcome status and proof
status.

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

## Token naming convention

The official design system token namespace is:

```txt
--ec-*
```

The `--ec-*` prefix is kept for package compatibility and should be treated as
the stable technical token namespace.

Do not rename this namespace in generated screens.

Do not interpret the prefix as product-facing copy.

Examples:

```txt
--ec-color-background
--ec-color-surface
--ec-color-text-primary
--ec-color-border
--ec-color-primary
--ec-radius-md
--ec-shadow-card
```

Use these tokens through package components, business patterns and approved
utility classes.

---

## Compatibility aliases

The package also provides compatibility aliases for Figma Make and shadcn-like
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

These aliases are provided to make generated code more tolerant.

They do not replace the official design system token namespace.

When writing simple custom layout wrappers, prefer `--ec-*` tokens when possible.

When Make generates aliases such as `--background` or `--foreground`, keep them
only if they map to the package CSS and do not introduce a new visual system.

---

## Color tokens

### Background and surfaces

Use these tokens for page backgrounds and containers:

```txt
--ec-color-background
--ec-color-surface
--ec-color-surface-muted
```

Recommended usage:

```tsx
<main className="min-h-screen bg-(--ec-color-background) p-8">
  ...
</main>
```

```tsx
<section className="bg-(--ec-color-surface)">
  ...
</section>
```

Use `--ec-color-background` for the main page background.

Use `--ec-color-surface` for cards and elevated content areas.

Use `--ec-color-surface-muted` for secondary areas or subtle contrast.

Prefer `Card`, `StatusSummary` and business patterns before manually creating
surface containers.

---

### Text colors

Use these tokens for text hierarchy:

```txt
--ec-color-text-primary
--ec-color-text-secondary
--ec-color-text-muted
```

Recommended usage:

```tsx
<h1 className="text-(--ec-color-text-primary)">Customer monitoring</h1>
<p className="text-(--ec-color-text-secondary)">Understand risks and next actions.</p>
<p className="text-(--ec-color-text-muted)">Last updated 2 hours ago</p>
```

Use `--ec-color-text-primary` for main titles and important content.

Use `--ec-color-text-secondary` for descriptions and supporting content.

Use `--ec-color-text-muted` for metadata and low-emphasis information.

Do not introduce new text colors for decoration.

Use text hierarchy to clarify meaning, not to create decorative emphasis.

Important evidence, freshness or validation context should remain readable and
should not be hidden in overly muted text when it affects trust.

The same applies to source strength, partial visibility, connectivity status,
Health versus Intelligence labels and proof status.

Do not make expected outcomes, technical outcomes, internal proof or
customer-ready proof look equivalent through identical text treatment when the
distinction affects trust.

---

### Border color

Use this token for borders:

```txt
--ec-color-border
```

Recommended usage:

```tsx
<div className="border border-(--ec-color-border)">
  ...
</div>
```

Do not create custom border colors.

Do not use colored borders for decoration unless they communicate a meaningful
status.

---

### Primary color

Use these tokens for the primary action color:

```txt
--ec-color-primary
--ec-color-primary-hover
--ec-color-primary-foreground
```

These are already used by the `Button` component.

Prefer using:

```tsx
<Button>Primary action</Button>
```

instead of manually styling a primary button.

Do not create custom primary button styles.

---

### Semantic colors

Use semantic tokens for status and risk communication:

```txt
--ec-color-success
--ec-color-warning
--ec-color-danger
```

Use them for:

- success states
- warning states
- critical states
- destructive states

Prefer package components such as `Badge`, `AlertCard`, `ActionCard` and
business patterns instead of manually applying semantic colors.

Good:

```tsx
<Badge tone="warning">Connectivity partial</Badge>
```

Good:

```tsx
<Badge tone="warning">Partially connected</Badge>
```

Good:

```tsx
<Badge tone="warning">Expected outcome, not proven</Badge>
```

Good:

```tsx
<Badge tone="info">Internal proof, not customer-ready</Badge>
```

Good:

```tsx
<AlertCard
  severity="critical"
  title="Critical equipment no longer monitored"
  equipment="Main HVAC control unit"
  description="The customer has no visibility on a critical asset."
  recommendation="Escalate to support and notify the customer proactively."
/>
```

Avoid:

```tsx
<span style={{ color: "orange" }}>Connectivity partial</span>
```

Do not communicate state by color alone.

The label should explain the status.

When the status affects trust, add visible context such as source, freshness,
validation state or evidence.

For asset-heavy screens, status labels should distinguish connected, partially
connected and non-connected assets in text, not only through tone.

For value proof screens, status labels should distinguish expected outcomes,
technical outcomes, internal proof and customer-ready proof.

---

## Radius tokens

Available radius tokens:

```txt
--ec-radius-sm
--ec-radius-md
--ec-radius-lg
```

Use them through package components whenever possible.

When needed for layout wrappers, use:

```txt
rounded-(--ec-radius-sm)
rounded-(--ec-radius-md)
rounded-(--ec-radius-lg)
```

Usage guidance:

- `--ec-radius-sm` for compact controls
- `--ec-radius-md` for cards and grouped content
- `--ec-radius-lg` for larger surfaces such as dialogs

Do not use arbitrary radius values such as:

```txt
rounded-[22px]
rounded-3xl
```

unless the designer explicitly asks for a new visual direction.

---

## Spacing tokens

Available spacing tokens:

```txt
--ec-spacing-xs
--ec-spacing-sm
--ec-spacing-md
--ec-spacing-lg
--ec-spacing-xl
```

In generated code, prefer the existing utility classes already supported by the
package CSS:

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

Do not use excessive spacing that makes the interface feel like a marketing
page.

Generated screens should remain dense enough for B2B operational work.

Use spacing to reduce cognitive load, not to inflate the screen.

Avoid excessive vertical spacing that turns decision-support screens into long
scrolling dashboards without stronger prioritization.

---

## Shadow tokens

Available shadow tokens:

```txt
--ec-shadow-card
--ec-shadow-popover
```

Use:

```txt
shadow-(--ec-shadow-card)
shadow-(--ec-shadow-popover)
```

Usage guidance:

- `--ec-shadow-card` for subtle content grouping
- `--ec-shadow-popover` for dialogs and floating surfaces

Avoid dramatic shadows such as:

```txt
shadow-xl
shadow-2xl
shadow-blue-500/40
```

The visual style should remain sober and operational.

---

## Token usage through components

Prefer using package components because they already apply the right tokens.

For example:

```tsx
<Card title="Customer status">
  ...
</Card>
```

is preferred over:

```tsx
<section className="rounded-(--ec-radius-md) border border-(--ec-color-border) bg-(--ec-color-surface) shadow-(--ec-shadow-card)">
  ...
</section>
```

Prefer business patterns even more when the section intent matches an available
pattern.

For example:

```tsx
<CustomerStatusCard
  customerName="Greenfield Industries"
  plan="Advanced service plan"
  coverage="68% connected"
/>
```

is preferred over manually rebuilding customer status with raw layout markup.

Use manual token classes only for page-level layout or simple wrappers.

Do not use manual token styling to recreate existing package components,
decision components or business patterns.

---

## Token usage with forms

Form components already use the correct tokens.

Prefer:

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

## Do not redefine tokens

Do not generate local CSS like this:

```css
:root {
  --ec-color-primary: #7c3aed;
  --ec-radius-md: 20px;
}
```

Do not override tokens to make a screen more decorative.

Do not create a new theme unless explicitly requested.

Do not redefine compatibility aliases locally unless the designer explicitly asks
for a new theme layer.

---

## Do not invent non-system tokens

Avoid creating new tokens such as:

```txt
--primary-blue
--dashboard-gradient
--card-glow
--brand-purple
--radius-premium
```

These weaken the design system and make generated screens inconsistent.

---

## Acceptable utility usage

The generated screen may use layout utilities such as:

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

## Status communication

Use tokens and components together to communicate state.

Good:

```tsx
<Badge tone="danger">Critical risk</Badge>
```

Good:

```tsx
<AlertCard
  severity="critical"
  title="Connectivity loss on critical equipment"
  equipment="Main switchboard"
  description="The customer may lose visibility on key assets."
  recommendation="Plan a connectivity review with the customer and support team."
/>
```

Avoid relying only on color:

```tsx
<span className="text-(--ec-color-danger)">Issue</span>
```

Text should explain the meaning of the status.

For evidence-sensitive states, the UI should also clarify what is known, what is
uncertain and what still needs validation.

Do not rely on visual confidence, stronger color or larger typography to
replace source evidence.

Confidence language should never be used as a substitute for source strength,
source scope or proof status.

Good:

```tsx
<Badge tone="warning">Source data requires review</Badge>
```

Good:

```tsx
<ConnectivityCoverageCard
  coverageRate="68%"
  connectedAssets="17 assets"
  disconnectedAssets="8 assets"
  monitoringStatus="Partial monitoring coverage"
  lastUpdate="18 hours ago"
  badges={[{ label: "Connectivity partial", tone: "warning" }]}
 />
```

Good:

```tsx
<Badge tone="warning">Source strength: partial</Badge>
```

Good:

```tsx
<Badge tone="warning">Technical outcome, not customer-ready proof</Badge>
```

Avoid:

```tsx
<span className="text-(--ec-color-warning)">Warning</span>
```

The first two examples provide meaning and context.

The last example relies on color and a vague label.

---

## Token review checklist

After generation, verify:

- the screen imports `design-system-ai-lab/styles.css`
- the official `--ec-*` namespace is kept for compatibility
- the `--ec-*` prefix is not used as product-facing copy
- compatibility aliases are not redefined locally
- no new color palette is introduced
- no arbitrary radius values are introduced
- no arbitrary shadow values are introduced
- no decorative gradients are introduced
- no custom form styling system is introduced
- semantic colors are used consistently
- status is not communicated by color alone
- evidence-sensitive status includes readable context when needed
- source strength remains readable when it affects trust
- partial visibility, partially connected assets and non-connected assets are labelled in text
- Health versus Intelligence distinction is not communicated by styling alone
- expected outcomes are not styled as proven value
- technical outcomes and internal proof are not styled as customer-ready proof without validation
- confidence language does not replace source evidence
- package components are used before manual styling
- business patterns are used before manual section rebuilding
- manual token styling is not used to recreate existing components or patterns
- the visual result remains sober, B2B and readable

---

## Final principle

Tokens are not decoration.

Tokens are the foundation that keeps generated screens coherent, accessible,
sober, reusable and governed by the design system.

Tokens should support meaning, hierarchy and trust.

They should not be used to create decorative complexity, hide uncertainty,
replace the approved component vocabulary or make weak evidence look stronger
than it is.
