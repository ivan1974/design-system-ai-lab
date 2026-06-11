# Internal primitives

## Status

Private implementation boundary for shadcn-compatible primitive refoundation.

## Rule

Files in this folder are internal implementation details.

They are not public generation targets.

## Allowed use

Public DS components may use internal primitives to share implementation patterns.

For example:

```txt
src/design-system/internal/primitives/button-base.tsx
→ src/design-system/components/button.tsx
→ design-system-ai-lab public export
```

## Forbidden use

Generated examples must not import from this folder.

Package consumers must not import from this folder.

Figma Make must not create files in this folder.

## Public surface

The only Make-facing component surface is:

```txt
design-system-ai-lab
```

The only Make-facing stylesheet surface is:

```txt
design-system-ai-lab/styles.css
```
