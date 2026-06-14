# Component selection guidance

## Status

```txt
REFERENCE / COMPONENT SELECTION / CURRENT DS ONLY
```

## Purpose

This file explains how to decide between:

```txt
using an existing primitive
using an existing product component
creating local screen-specific composition
```

It is an arbitration guide.

It is not a component catalogue and not a props reference.

For the exact list of exported primitives and components, read:

```txt
guidelines/reference/design-system-vocabulary.md
guidelines/reference/component-usage-cards.md
```

For the detailed `AssetInventoryRow` contract, read:

```txt
guidelines/reference/asset-inventory-row-usage.md
```

---

## Core rule

Choose UI material by intent.

```txt
User intent -> needed UI behavior -> suitable DS material or local composition
```

Do not choose UI material by business label alone.

```txt
Business concept -> fixed component
```

is not allowed as a selection strategy.

---

## Mandatory foundation

You must import the design-system package stylesheet in generated application code:

```tsx
import "design-system-ai-lab/styles.css";
```

The package visual language is mandatory.

Using any specific component is conditional.

---

## Selection hierarchy

Use this order when selecting UI material:

```txt
1. Understand the brief and the user decision.
2. Apply the relevant principles and knowledge.
3. Check whether an existing product component fits.
4. Check whether primitives can compose the needed UI clearly.
5. Create local screen-specific composition only when needed.
```

The brief intent, user decision, evidence rules, principles and domain knowledge take priority over mechanical component usage.

---

## Product components are optional, not mandatory

Use product components when their built-in layout and behavior match the requested screen.

Do not force a product component only because the business object sounds related.

If a product component creates layout friction, alignment issues, unreadable density or broken hierarchy, compose from primitives or local screen-specific components instead.

```txt
Product component fits intent and layout
  use it

Product component matches the business object but not the layout
  compose with primitives or local screen-specific UI

No product component exists
  compose with primitives or local screen-specific UI

Need a new imported package component name
  do not invent it
```

---

## Local composition is allowed

You may create local screen-specific components when existing components do not fit the brief.

Acceptable local compositions include things like:

```txt
EvidenceRow
AssetDetailSection
RecommendationBlock
ReviewActionItem
SourceContextBlock
```

These local components are acceptable only when they:

```txt
serve the brief intent
compose with package primitives when useful
respect tokens and visual guidelines
do not replace an existing component that fits
do not recreate the visual system
```

Do not import these local component names from `design-system-ai-lab` unless they are explicitly exported by the package.

---

## Before selecting a component

Answer:

```txt
Is the user reading, comparing, filtering, editing, confirming or acting?
Is the information a fact, status, signal, interpretation, evidence, recommendation or action?
Does the screen need density, disclosure, confirmation, navigation or comparison?
Is the interaction necessary or can the information be displayed directly?
Does an existing product component fit the required layout without distortion?
Would primitives or local composition create a clearer result?
```

Then choose the smallest UI material that supports the intent.

---

## Common selection choices

### Structured comparison

Use `Table` when the user needs to compare records across fields.

Use `AssetInventoryRow` only when the object is an installed-base asset and the built-in row model fits the comparison.

If `AssetInventoryRow` is used, read:

```txt
guidelines/reference/asset-inventory-row-usage.md
```

### Asset inventory scan

Consider `AssetInventoryRow`, `SearchField`, `FilterDropdown`, `ViewFilterBar`, `HealthBadge`, `StatusLabel`, `ScrollArea` and `Separator`.

Do not force `AssetInventoryRow` when a custom `Table` or local row better supports the decision.

### Filtering and search

Use `SearchField` for known-item text search.

Use `FilterDropdown` for one clear filter group.

Use `AllFiltersPanel` only when multiple filter groups or advanced filtering are genuinely needed.

Use `ViewFilterBar` for stable view switching, not for every small filter.

### Attention and trust messages

Use `Alert` for bounded warnings, risks, missing evidence, partial visibility or validation needs.

Use `Badge`, `Pill` or `Tag` for compact labels such as status, priority, source type, coverage, validation or category.

Do not communicate meaning with color alone.

### Stable views and disclosure

Use `Tabs` for stable views of the same object or workspace.

Use `Accordion` or `Collapsible` for optional secondary detail.

Use `Tooltip` or `Popover` only for lightweight explanation.

Do not hide evidence required to trust a recommendation.

### Actions and forms

Use `Button` for actions.

Use `Input`, `Select`, `Checkbox` and `Switch` only when the user can enter, choose or change something.

Do not use form controls for static facts.

### Layout support

Use `Separator` for subtle grouping.

Use `ScrollArea` for dense bounded content, such as long lists or split-pane content.

---

## Selection anti-patterns

You must not:

```txt
invent a package component import
claim that a local component belongs to the package
use unavailable package component names
map a business concept to a fixed component
force a product component because the object name matches
use a product component when its layout breaks the screen
use disabled form controls as display
use badges or cards as buttons
hide essential evidence in tooltips
use alerts as decorative cards
use tabs for short sequential content
use dialogs for large review workflows
use progress without a provided value
recreate the visual system locally
```

---

## Selection checklist

Before finalizing component selection, verify:

```txt
The package stylesheet is imported.
The selected package component exists in design-system-vocabulary.md.
The component supports the user intent.
The component layout fits the generated screen.
The component preserves domain meaning.
The component does not add unnecessary interaction.
The component does not hide trust-critical information.
The component choice avoids fictional package imports and local clones.
Local composition was considered when a product component did not fit.
```

---

## Final principle

Use the smallest current DS material that supports the prompt intent.

Do not invent package components or fictional imports.

Do not force components.

Compose locally when needed, but keep the design-system visual language.
