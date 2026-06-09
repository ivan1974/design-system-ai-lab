# Typography

## Purpose

Use typography primitives to create clear hierarchy in generated screens.

Typography should prevent flat screens where page titles, section titles, rows and metadata all look the same.

---

## Components

Use:

```tsx
<Heading level={1} size="page">Page title</Heading>
<Heading level={2} size="section">Section title</Heading>
<Heading level={3} size="subsection">Subsection title</Heading>
<Text>Body copy</Text>
<Text variant="muted">Secondary copy</Text>
<Text variant="caption">Metadata</Text>
```

For composed headers, prefer:

```tsx
<PageHeading title="Review what needs attention next" />
<SectionHeading title="Priority customer signals" />
```

---

## When to use

Use `PageHeading` once per screen.

Use `SectionHeading` for major areas of a workspace.

Use `Heading` directly only for lower-level composition or custom layouts.

Use `Text` for readable descriptions, not raw `p` tags with ad hoc classes.

---

## Hierarchy rules

A generated screen should show a visible hierarchy:

```txt
PageHeading
→ SectionHeading
→ Heading size="subsection"
→ row title
→ Text
→ Text variant="caption"
```

Do not render all text as `text-sm` with only font-weight changes.

Do not create custom typography scales with arbitrary classes.

---

## Make guidance

When Figma Make generates a workspace, instruct it to use:

```txt
PageHeading for the main screen title.
SectionHeading for major sections.
Heading and Text for local composition.
Do not create custom heading styles with raw h1/h2/p classes unless no typography primitive fits.
```

---

## Anti-patterns

Avoid:

```tsx
<h1 className="text-sm font-semibold">Customer monitoring</h1>
<p className="text-sm">Description</p>
```

Avoid:

```tsx
<div className="text-lg font-bold">Section title</div>
```

Prefer:

```tsx
<PageHeading
  eyebrow="Customer monitoring"
  title="Review what needs attention next"
  description="Customers sorted by priority, monitoring coverage and next customer touchpoint."
/>
```
