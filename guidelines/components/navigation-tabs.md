# Navigation and tabs

## Purpose

Use navigation primitives to create clear page structure, content switching and secondary navigation without creating local tab or nav systems.

These components align the design system with modern application headers and workspace tabs.

---

## Components

Use:

```tsx
<Tabs />
<HeaderTabs />
<SegmentedControl />
<SecondaryNavigation />
<Breadcrumbs />
```

They live in the generic `components` layer because they are not business-specific.

---

## Tabs

Use `Tabs` for local content switching inside panels, surfaces or sections.

```tsx
<Tabs
  tabs={[
    { id: "overview", label: "Overview" },
    { id: "evidence", label: "Evidence", count: 2 },
  ]}
  value={activeTab}
  onValueChange={setActiveTab}
/>
```

Use `variant="contained"` for compact controls inside dense surfaces.

Use `variant="underline"` for content sections and panel tabs.

---

## HeaderTabs

Use `HeaderTabs` below a page or major section heading when tabs change the main workspace view.

```tsx
<HeaderTabs
  tabs={[
    { id: "monitoring", label: "Monitoring" },
    { id: "proof", label: "Proof readiness" },
  ]}
/>
```

Do not use `HeaderTabs` for small filters. Use `SegmentedControl` instead.

---

## SegmentedControl

Use `SegmentedControl` for compact mutually exclusive filters.

```tsx
<SegmentedControl
  items={[
    { id: "open", label: "Open" },
    { id: "closed", label: "Closed" },
  ]}
/>
```

Use it for status filters, mode toggles or compact scope switching.

Do not use it for page navigation.

---

## SecondaryNavigation

Use `SecondaryNavigation` for secondary workspace navigation.

```tsx
<SecondaryNavigation
  items={[
    { id: "overview", label: "Overview", active: true },
    { id: "assets", label: "Assets", count: 8 },
  ]}
/>
```

Use it when the user needs to move across related workspace areas.

Do not use it for tab content inside a panel.

---

## Breadcrumbs

Use `Breadcrumbs` for location context.

```tsx
<Breadcrumbs
  items={[
    { id: "customers", label: "Customers", href: "#" },
    { id: "northstar", label: "Northstar Manufacturing" },
  ]}
/>
```

Breadcrumbs should stay quiet and should not replace the main page heading.

---

## Make guidance

When Figma Make needs tabs or navigation, use approved components.

Do not create local components named:

```txt
Tabs
TabBar
NavTabs
SegmentedTabs
Breadcrumb
Subnav
```

Do not create local tab state visuals with raw buttons and custom classes.

Use:

```txt
Tabs for local content switching
HeaderTabs for major workspace tabs
SegmentedControl for compact filters
SecondaryNavigation for secondary workspace navigation
Breadcrumbs for location context
```

---

## Anti-patterns

Avoid:

```tsx
<div className="flex gap-2 border-b">
  <button className="border-b-2 border-green-500">Overview</button>
</div>
```

Avoid:

```tsx
<div className="rounded-full bg-gray-100 p-1">
  <button className="bg-white rounded-full">Open</button>
</div>
```

Prefer:

```tsx
<Tabs ... />
<SegmentedControl ... />
```

---

## Acceptance criteria

A generated screen is better if:

- tabs use `Tabs` or `HeaderTabs`
- compact filters use `SegmentedControl`
- secondary workspace navigation uses `SecondaryNavigation`
- location context uses `Breadcrumbs`
- no local tab/nav visual system is created
- active states use package styling
- tab counts use package-provided count rendering
- navigation does not compete with the page heading
