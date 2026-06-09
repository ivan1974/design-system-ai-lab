# Surface primitives

## Purpose

Use surface primitives to structure workspace screens without creating custom styled `div` wrappers.

These primitives support the v0.4 white-first visual system:

```txt
spacing before decoration
borders before shadows
rows before card stacks
```

---

## Components

Use:

```tsx
<Surface />
<ListContainer />
<Well />
<Divider />
<Toolbar />
```

They live in the generic `components` layer because they are not specific to EcoCare or to one business pattern.

---

## Surface

Use `Surface` for general content grouping.

```tsx
<Surface variant="bordered" padding="lg">
  ...
</Surface>
```

Allowed variants:

```txt
plain
bordered
muted
selected
```

Allowed padding values:

```txt
none
sm
md
lg
```

Use `Surface` instead of custom wrappers with `rounded`, `border`, `bg` and `shadow` classes.

---

## ListContainer

Use `ListContainer` for grouped rows.

```tsx
<ListContainer>
  <SignalRow ... />
  <ActionRow ... />
</ListContainer>
```

Use it when Make would otherwise generate:

```tsx
<div className="divide-y rounded-lg border bg-white">
  ...
</div>
```

Rows remain first-class objects, but the list boundary is standardized.

---

## Well

Use `Well` for quiet contextual emphasis inside a larger surface.

```tsx
<Well tone="warning">
  <Text>Review source scope before customer communication.</Text>
</Well>
```

Allowed tones:

```txt
neutral
primary
warning
danger
success
```

Use `Well` for supporting context, not for every repeated row.

---

## Divider

Use `Divider` to separate content without adding new cards or shadows.

```tsx
<Divider />
```

Use `orientation="vertical"` only inside horizontal toolbars or compact metadata groups.

---

## Toolbar

Use `Toolbar` for action and control groupings.

```tsx
<Toolbar
  leading={<SectionHeading title="Customer queue" />}
  trailing={<Button>Create action</Button>}
/>
```

Use `Toolbar` instead of custom flex wrappers for page controls, filters, tabs or local actions.

---

## Make guidance

When generating workspace screens, Make should use these primitives before creating raw styled divs.

Use:

```txt
Surface for structured content regions
ListContainer for grouped rows
Well for contextual emphasis
Divider for separation
Toolbar for control/action groups
```

Avoid:

```tsx
<div className="rounded-lg border bg-white p-6 shadow-sm">
  ...
</div>
```

Avoid local wrappers named:

```txt
Panel
SurfaceCard
ContentCard
ListBox
ToolbarGroup
```

unless they simply compose approved design-system components and do not create a new visual system.

---

## Acceptance criteria

A generated screen is better if:

- repeated rows are inside `ListContainer`
- content grouping uses `Surface` instead of arbitrary divs
- contextual callouts use `Well`
- separation uses `Divider`
- controls and actions use `Toolbar`
- default surfaces avoid shadows
- visual hierarchy comes from spacing, typography and borders
