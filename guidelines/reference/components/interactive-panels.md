# Interactive panels

## Purpose

Interactive panels let a workspace reveal or hide selected-item detail without permanently reducing the central workspace.

Use them for review flows where the user selects a customer, asset, risk or recommendation and needs contextual detail.

---

## Components

Prefer target workspace composition components:

```tsx
<MasterDetailLayout />
<WorkspaceDetailPanel />
<SidePanel />
<StickyActionBar />
```

Use lower-level panel primitives only inside package-owned components or transitional implementation details:

```tsx
<PanelHeader />
<PanelBody />
<PanelFooter />
<PanelClose />
<SlideOverPanel />
```

`SlideOverPanel` is not the default Make-facing recommendation in v0.8.

---

## Modes

Supported workspace behavior:

```txt
closed
open inline
open overlay
slide from right
preserve central workspace
```

Use inline mode when the detail panel should be part of the desktop layout.

Use overlay mode when the central workspace should keep its full width or when screen width is constrained.

Use `SidePanel` for transverse panels such as full filters, analysis settings or workspace-level controls.

---

## Recommended pattern

```tsx
const [detailOpen, setDetailOpen] = useState(true);

<MasterDetailLayout
  detailOpen={detailOpen}
  onDetailOpenChange={setDetailOpen}
  detailMode="inline"
  list={<ListContainer>...</ListContainer>}
  detail={
    <WorkspaceDetailPanel
      open={detailOpen}
      onOpenChange={setDetailOpen}
      mode="inline"
      title="Selected asset"
      description="Selected item detail."
    >
      ...
    </WorkspaceDetailPanel>
  }
/>
```

For overlay:

```tsx
<MasterDetailLayout
  detailOpen={detailOpen}
  onDetailOpenChange={setDetailOpen}
  detailMode="overlay"
  list={...}
  detail={
    <WorkspaceDetailPanel
      open={detailOpen}
      onOpenChange={setDetailOpen}
      mode="overlay"
      title="Selected asset"
    >
      ...
    </WorkspaceDetailPanel>
  }
/>
```

For transverse panels:

```tsx
<SidePanel open={open} onClose={closePanel} title="All filters">
  ...
</SidePanel>
```

---

## Make guidance

When a list/detail workspace needs a detail panel that can open and close, Make should use:

```txt
MasterDetailLayout detailOpen detailMode onDetailOpenChange
WorkspaceDetailPanel
SidePanel for transverse filter or analysis panels
StickyActionBar for persistent final actions
PanelHeader / PanelBody / PanelFooter only for lower-level package composition
SlideOverPanel only as a transition-level internal primitive
```

Do not create local slide-over or drawer components.

Do not recreate panel animations with custom CSS.

Do not keep a static panel open if the user needs more room in the central workspace.

---

## Close behavior

Panel close must preserve context:

- the list remains visible
- the selected row remains selected where possible
- the central workspace expands when inline detail closes
- overlay detail slides out to the right
- primary actions remain available in the panel footer when open

---

## Anti-patterns

Avoid:

```tsx
<div className={open ? "translate-x-0" : "translate-x-full"}>...</div>
```

Avoid:

```tsx
const Drawer = () => <aside className="fixed right-0 ...">...</aside>
```

Prefer:

```tsx
<WorkspaceDetailPanel open={open} onOpenChange={setOpen}>...</WorkspaceDetailPanel>
```

or:

```tsx
<SidePanel open={open} onClose={closePanel}>...</SidePanel>
```

---

## Acceptance criteria

A generated screen is better if:

- detail can be closed when it competes with central workspace space
- inline detail closure expands the central workspace
- overlay detail slides from the right
- panel header/body/footer use package components internally
- close control is accessible
- no local drawer or slide-over implementation is created
- selected row context remains visible
