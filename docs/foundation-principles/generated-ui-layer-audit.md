# Generated UI layer audit

## Purpose

This document audits the generated UI support layer after the first `Button` primitive replacements.

It supports the roadmap rule:

```txt
After each replacement of generated Figma or shadcn UI support code with a design-system primitive, audit the related src/app/components/ui/* material.
```

The goal is not to delete generated files immediately.

The goal is to distinguish between:

```txt
runtime product material
generated support code
future design-system primitive candidates
unused generated material
```

## Current status

The product screen now uses the design-system `Button` primitive in:

```txt
src/app/components/AllFiltersPanel.tsx
src/app/components/AssetDetailPanel.tsx
```

The generated shadcn-style button still exists in:

```txt
src/app/components/ui/button.tsx
```

## Grep findings

User-provided grep result:

```txt
grep -R "components/ui/button\|<Button\|buttonVariants" src/app src/design-system -n
```

Findings:

```txt
src/app/components/ui/alert-dialog.tsx imports buttonVariants from ./button
src/app/components/ui/pagination.tsx imports Button and buttonVariants from ./button
src/app/components/ui/calendar.tsx imports buttonVariants from ./button
src/app/components/ui/sidebar.tsx uses Button from ./button
src/app/components/ui/carousel.tsx uses Button from ./button
src/app/components/AllFiltersPanel.tsx uses design-system Button
src/design-system/primitives/button.tsx defines design-system Button
```

Second grep:

```txt
grep -R "from ['\"].*/components/ui" src/app -n
```

Result:

```txt
No output.
```

Interpretation:

```txt
The product-specific app components do not currently import src/app/components/ui/*.
The generated UI layer appears to be internally connected shadcn support material, not active product screen material.
```

## Audited files

```txt
src/app/components/ui/button.tsx
src/app/components/ui/alert-dialog.tsx
src/app/components/ui/pagination.tsx
src/app/components/ui/calendar.tsx
src/app/components/ui/sidebar.tsx
src/app/components/ui/carousel.tsx
```

## File status

### `src/app/components/ui/button.tsx`

Current role:

```txt
generated shadcn button source
internal dependency for generated ui/* components
not the design-system runtime primitive
```

Evidence:

```txt
uses @radix-ui/react-slot
uses class-variance-authority
exports Button and buttonVariants
variants: default, destructive, outline, secondary, ghost, link
sizes: default, sm, lg, icon
```

Relationship to design-system primitive:

```txt
duplicates the broad role of a button primitive
but does not match the product-grounded design-system Button API
```

Decision:

```txt
Keep temporarily.
Do not expose as design-system source.
Do not use for new product extraction.
Remove only after dependent generated ui/* files are deleted, archived or migrated.
```

Target status:

```txt
remove from runtime or archive as generated reference
```

### `src/app/components/ui/alert-dialog.tsx`

Current role:

```txt
generated shadcn alert dialog wrapper
internally depends on src/app/components/ui/button.tsx via buttonVariants
```

Evidence:

```txt
imports @radix-ui/react-alert-dialog
imports buttonVariants from ./button
uses buttonVariants for AlertDialogAction and AlertDialogCancel
```

Product usage status:

```txt
No product-specific app component currently imports src/app/components/ui/alert-dialog.tsx.
```

Decision:

```txt
Keep temporarily as generated support material.
Do not migrate during Button extraction.
Do not treat as a design-system dialog primitive yet.
```

Target status:

```txt
archive or delete unless a real product need for alert dialogs appears
```

### `src/app/components/ui/pagination.tsx`

Current role:

```txt
generated shadcn pagination wrapper
internally depends on generated Button and buttonVariants
```

Evidence:

```txt
imports Button and buttonVariants from ./button
uses buttonVariants to style PaginationLink
```

Product usage status:

```txt
No product-specific app component currently imports src/app/components/ui/pagination.tsx.
```

Decision:

```txt
Keep temporarily.
Do not migrate until a real product need for pagination appears.
Do not extract pagination as a design-system component from the current Installed Base prototype.
```

Target status:

```txt
archive or delete unless pagination becomes a real product need
```

### `src/app/components/ui/calendar.tsx`

Current role:

```txt
generated shadcn calendar wrapper around react-day-picker
internally depends on generated buttonVariants
```

Evidence:

```txt
imports DayPicker from react-day-picker
imports buttonVariants from ./button
uses buttonVariants for navigation and day buttons
```

Product usage status:

```txt
No product-specific app component currently imports src/app/components/ui/calendar.tsx.
```

Decision:

```txt
Keep temporarily.
Do not migrate during Button extraction.
Do not create a design-system Calendar primitive unless a product screen requires date picking.
```

Target status:

```txt
archive or delete unless date selection becomes a real product need
```

### `src/app/components/ui/sidebar.tsx`

Current role:

```txt
generated shadcn sidebar system
internally depends on generated Button, Input, Separator, Sheet, Skeleton, Tooltip and use-mobile
```

Evidence:

```txt
imports Button from ./button
SidebarTrigger renders generated Button
contains sidebar state, mobile state and cookie behavior
```

Product usage status:

```txt
No product-specific app component currently imports src/app/components/ui/sidebar.tsx.
```

Decision:

```txt
Keep temporarily.
Do not migrate during Button extraction.
Do not treat as the product navigation model for Installed Base Intelligence.
```

Target status:

```txt
archive or delete unless the future design system needs a generated shadcn sidebar reference
```

### `src/app/components/ui/carousel.tsx`

Current role:

```txt
generated shadcn carousel wrapper around embla-carousel-react
internally depends on generated Button
```

Evidence:

```txt
imports useEmblaCarousel from embla-carousel-react
imports Button from ./button
CarouselPrevious and CarouselNext render generated Button
```

Product usage status:

```txt
No product-specific app component currently imports src/app/components/ui/carousel.tsx.
```

Decision:

```txt
Keep temporarily.
Do not migrate during Button extraction.
Do not extract carousel as design-system material from Installed Base Intelligence.
```

Target status:

```txt
archive or delete unless carousel becomes a real product need
```

## Overall classification

Current classification:

```txt
src/app/components/ui/button.tsx = generated support primitive, duplicate of future primitive role, keep temporarily
src/app/components/ui/alert-dialog.tsx = generated support component, no current product usage
src/app/components/ui/pagination.tsx = generated support component, no current product usage
src/app/components/ui/calendar.tsx = generated support component, no current product usage
src/app/components/ui/sidebar.tsx = generated support component, no current product usage
src/app/components/ui/carousel.tsx = generated support component, no current product usage
```

## Important decision

Do not delete `src/app/components/ui/button.tsx` yet.

Reason:

```txt
It is still an internal dependency for other generated ui/* files.
Deleting it alone would break the generated support layer even if the product screen does not use it.
```

Do not migrate the generated ui/* files to the new design-system Button yet.

Reason:

```txt
Those generated components are not currently needed by the product reference.
Migrating unused generated support code would spend effort on code that may later be deleted.
```

## Recommended next action

Before deleting any generated UI files, run a broader usage audit:

```bash
grep -R "./components/ui\|components/ui\|from ['\"].*ui/" src -n
```

If the broader audit confirms no product usage, the project should choose one of two paths:

```txt
Option A — Archive generated UI support files into docs/source/prototype/generated-ui/
Option B — Delete generated UI support files once no runtime import depends on them
```

Recommended path:

```txt
Do not archive or delete yet.
Continue primitive extraction first.
Return to generated UI cleanup after Button / Badge / Tag / Pill are stable.
```

## Impact on next primitive work

The next primitives should be extracted from product usage, not from generated shadcn files.

Recommended continuation:

```txt
1. Badge
2. Tag
3. Pill
```

Do not use generated `buttonVariants` or generated shadcn variants as the source of truth for these primitives.

Use the product reference screen instead.

## Acceptance criteria

This audit is complete when:

```txt
all known button-related generated UI dependencies are classified
no deletion is performed without usage proof
future primitive extraction remains product-grounded
src/design-system/primitives/button.tsx remains the runtime design-system Button source
```
