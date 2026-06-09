# Interactive panels

## Purpose

Interactive panels let a workspace reveal or hide selected-item detail without permanently reducing the central workspace.

Use them for review flows where the user selects a customer, asset, risk or recommendation and needs contextual detail.

---

## Components

Use generic panel primitives:

```tsx
<PanelHeader />
<PanelBody />
<PanelFooter />
<PanelClose />
<SlideOverPanel />
```

Use the workspace composition component:

```tsx
<WorkspaceDetailPanel />
```

Use `MasterDetailLayout` to control whether detail appears inline or as an overlay.

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
      title="SM6 Bus Coupler"
      description="Selected asset detail."
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
      title="SM6 Bus Coupler"
    >
      ...
    </WorkspaceDetailPanel>
  }
/>
```

---

## Make guidance

When a list/detail workspace needs a detail panel that can open and close, Make should use:

```txt
MasterDetailLayout detailOpen detailMode onDetailOpenChange
WorkspaceDetailPanel
PanelHeader / PanelBody / PanelFooter only for lower-level composition
SlideOverPanel only for custom overlay panels
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
<SlideOverPanel open={open} onOpenChange={setOpen}>...</SlideOverPanel>
```

or:

```tsx
<WorkspaceDetailPanel open={open} onOpenChange={setOpen}>...</WorkspaceDetailPanel>
```

---

## Acceptance criteria

A generated screen is better if:

- detail can be closed when it competes with central workspace space
- inline detail closure expands the central workspace
- overlay detail slides from the right
- panel header/body/footer use package components
- close control is accessible
- no local drawer or slide-over implementation is created
- selected row context remains visible
