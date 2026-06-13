# shadcn/ui implementation accelerator decision

## Status

Accepted

## Date

2026-06-13

## Context

The project is a demo-oriented GenAI-ready design-system and Figma Make kit.

The objective is to show two things:

```txt
how to brief GenAI so it respects design-system principles
how to force GenAI to use a controlled set of base components
```

The project should not spend dozens of commits recreating low-level components that are already available in mature React UI ecosystems.

At the same time, the project must not lose its design-system authority or allow GenAI to import arbitrary generated or third-party UI components directly.

## Decision

Use `shadcn/ui` as an implementation accelerator behind the project design-system API.

```txt
shadcn/ui accelerates implementation.
src/design-system/* remains the public API.
GenAI must use only the project design-system API.
```

## Public API rule

Product code and GenAI-generated screens must import from:

```txt
src/design-system/*
```

They must not import directly from:

```txt
src/app/components/ui/*
shadcn/ui generated files
third-party implementation packages
```

Allowed public imports:

```tsx
import { Button } from '@/design-system/primitives';
import { SearchField, ViewSwitcher, FilterDropdown } from '@/design-system/components';
```

Disallowed screen-level imports:

```tsx
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
```

## Implementation rule

`shadcn/ui` components may be used internally as implementation material.

Example:

```tsx
// src/design-system/components/search-field.tsx
import { Input } from '@/app/components/ui/input';

export function SearchField(props) {
  return <Input {...mappedProps} />;
}
```

The public component remains `SearchField`.

The internal implementation may use `Input`.

## Why shadcn/ui

`shadcn/ui` is suitable for this project because it provides:

```txt
React-compatible components
Vite-compatible setup
Tailwind-compatible styling
local component source copied into the repository
fast access to common UI building blocks
flexible retheming through CSS variables and class names
```

This matches the project constraint:

```txt
move fast for a demo
keep the DS API controllable
keep GenAI constrained to approved project components
```

## Components to add first

Do not add the entire catalogue at once.

Initial accelerator candidates:

```txt
input
checkbox
dropdown-menu
tabs
sheet
table
separator
tooltip
```

Potential later candidates:

```txt
popover
select
command
calendar
dialog
scroll-area
```

The project already has product-grounded primitives for:

```txt
Button
Badge
Pill
Tag
```

Do not replace them immediately.

## Relationship to Phase 3

This decision adds a preliminary step before generic component extraction:

```txt
Phase 3.0 — Adopt shadcn/ui as implementation accelerator
```

Phase 3 still owns the actual design-system vocabulary.

The target vocabulary remains generic and usage-guided:

```txt
SearchField
CheckboxOption
FilterDropdown
ViewSwitcher
SidePanel
DetailPanel
Tabs
DataGrid
StatusBadge
ScoreBar
EmptyState
```

`shadcn/ui` is not the naming authority.

`shadcn/ui` is not the GenAI generation API.

## Theming rule

The visual reference remains the current product-grounded Installed Base Intelligence UI.

Retheme shadcn-generated components to match:

```txt
white-first surfaces
dense enterprise layout
subtle neutral borders
current green accent
current typography and spacing rhythm
```

Do not allow default shadcn styling to drift the demo away from the current screen identity.

## Guardrails

```txt
Do not expose shadcn/ui directly to GenAI.
Do not let generated ui/* become the component vocabulary.
Do not migrate unused shadcn components just because they exist.
Do not replace working product-grounded primitives unless there is a clear benefit.
Do not accept a visual regression for speed.
```

## Acceptance criteria

This decision is successful when:

```txt
shadcn/ui is available as an internal implementation source
src/design-system/* remains the public API
first wrappers use shadcn internally without leaking shadcn imports to app screens
npm run build passes
npm run dev starts
visual parity is preserved
GenAI guidelines can enforce imports from src/design-system/* only
```

## First implementation target

Start with:

```txt
SearchField
```

Reason:

```txt
It is simple.
It already exists in the product reference.
It demonstrates the wrapper pattern clearly.
It separates form from data and app state.
```

Then continue with:

```txt
CheckboxOption
FilterDropdown
ViewSwitcher
SidePanel
Tabs
DataGrid
```
