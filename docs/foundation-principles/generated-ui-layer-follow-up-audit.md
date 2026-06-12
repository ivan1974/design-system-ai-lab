# Generated UI layer follow-up audit

## Purpose

This document follows up the initial generated UI layer audit after Phase 2 runtime extraction.

The goal is to decide whether the generated `src/app/components/ui/*` files should now be used, migrated, archived or left untouched.

This audit supports the roadmap rule:

```txt
After each replacement of generated Figma or shadcn UI support code with a design-system primitive, audit the related src/app/components/ui/* material.
```

## Current Phase 2 state

The runtime design-system source now includes:

```txt
src/design-system/primitives/button.tsx
src/design-system/primitives/badge.tsx
src/design-system/primitives/pill.tsx
src/design-system/primitives/tag.tsx

src/design-system/components/main-navigation.tsx
src/design-system/components/installed-base-header.tsx
src/design-system/components/view-filter-bar.tsx
src/design-system/components/all-filters-panel.tsx
src/design-system/components/asset-inventory-row.tsx
src/design-system/components/installed-base-workspace.tsx
```

The app now consumes design-system runtime material through wrappers and composition:

```txt
src/app/components/MainNav.tsx
src/app/components/PageHeader.tsx
src/app/components/ViewFilterBar.tsx
src/app/components/AllFiltersPanel.tsx
src/app/components/AssetList.tsx
src/app/App.tsx
```

## Generated UI folder status

The generated support folder remains:

```txt
src/app/components/ui/*
```

It was not used as the source for Phase 2 runtime extraction.

Decision:

```txt
Keep generated ui/* classified as generated support material.
Do not expose it as design-system runtime source.
Do not migrate it unless a real product need appears.
```

## Known generated support files

Previously audited files:

```txt
src/app/components/ui/button.tsx
src/app/components/ui/alert-dialog.tsx
src/app/components/ui/pagination.tsx
src/app/components/ui/calendar.tsx
src/app/components/ui/sidebar.tsx
src/app/components/ui/carousel.tsx
```

Current classification remains:

```txt
src/app/components/ui/button.tsx = generated support primitive, not runtime Button source
src/app/components/ui/alert-dialog.tsx = generated support component, no active product need
src/app/components/ui/pagination.tsx = generated support component, no active product need
src/app/components/ui/calendar.tsx = generated support component, no active product need
src/app/components/ui/sidebar.tsx = generated support component, no active product need
src/app/components/ui/carousel.tsx = generated support component, no active product need
```

## Relationship to extracted runtime primitives

The runtime primitive source is now:

```txt
src/design-system/primitives/button.tsx
src/design-system/primitives/badge.tsx
src/design-system/primitives/pill.tsx
src/design-system/primitives/tag.tsx
```

The generated shadcn-style files must not override or redefine this runtime source.

Decision:

```txt
New product extraction must import from src/design-system/*.
New product extraction must not import from src/app/components/ui/*.
```

## Why not delete generated ui/* now

Do not delete the generated UI files yet.

Reasons:

```txt
They may still be internally connected to one another.
They may be useful as reference material when auditing the original Figma Make output.
Deleting them is cleanup work, not required for runtime extraction closure.
Phase 2 should close with stable runtime material, not broad file deletion.
```

## Why not migrate generated ui/* now

Do not migrate generated UI files to the new design-system primitives now.

Reasons:

```txt
Most generated ui/* files are not active product screen material.
Migrating unused generated support files would spend effort on code that may later be deleted.
The current design-system runtime should remain product-grounded, not shadcn-grounded.
```

## Recommended next cleanup decision

Before any deletion, run a full import audit locally:

```bash
grep -R "components/ui\|from ['\"].*/ui/\|from ['\"].*components/ui" src -n
```

If no product runtime imports are found, choose one of these paths:

```txt
Option A — keep generated ui/* temporarily as source reference
Option B — archive generated ui/* under docs/source/prototype/generated-ui/
Option C — delete generated ui/* if no runtime imports depend on it
```

Recommended path for now:

```txt
Option A — keep generated ui/* temporarily as source reference.
```

Reason:

```txt
The project is moving from runtime extraction into GenAI-facing design-system knowledge.
Deleting generated support code is less important than documenting how GenAI should use the extracted runtime material.
```

## Guardrail for future work

Add this rule to future guidelines and contracts:

```txt
Use src/design-system/* as runtime design-system source.
Use src/app/* as product reference and demo app.
Do not use src/app/components/ui/* as generation API unless explicitly promoted by a decision record.
```

## Acceptance criteria

This follow-up audit is complete when:

```txt
Phase 2 runtime source is clearly separated from generated support material.
generated ui/* remains non-authoritative.
future cleanup options are documented.
no broad deletion or migration is performed without usage proof.
```
