# Runtime Generation Contract

## Purpose

This file is the shortest active blocking contract for Figma Make generation.

Use it after `Guidelines.md`, `setup.md`, `tokens.md` and `styles.md`.

---

## Required output

Generate one complete visible React screen in `App.tsx`.

The screen must be decision-oriented, not a generic dashboard.

---

## Required imports

Import components only from the package root:

```tsx
import { ... } from "design-system-ai-lab";
```

Import styles once:

```tsx
import "design-system-ai-lab/styles.css";
```

Never import from internal package paths.

Never create a local design system.

---

## Required screen model

Prefer a decision workspace:

```txt
WorkspaceShell
→ PageHeading
→ FilterBar or SecondaryNavigation
→ MasterDetailLayout when list/detail is needed
→ ListContainer with approved rows
→ WorkspaceDetailPanel for selected-item detail
→ ActionRow or StickyActionBar for follow-through
```

Do not generate a long stack of unrelated cards.

---

## Evidence and trust rules

Always show facts before interpretation.

Never invent:

```txt
evidence
sources
citations
telemetry
asset facts
value proof
benchmarks
```

Do not present expected outcomes as proven value.

Do not use AI confidence as source strength.

Keep human validation visible for sensitive decisions.

---

## Action rules

Every actionable item must show:

```txt
owner
due date
priority
```

Every `AlertCard` must include a recommendation.

Do not show vague actions without ownership.

---

## Progressive disclosure rule

Show the minimum decision-critical information first.

Keep evidence and explanation available, but do not expose all details at the same hierarchy level.

---

## Reject and repair

Reject or repair if the screen includes:

```txt
internal imports
local components
local visual system
generic dashboard
card stack
invented evidence
missing action ownership
unsupported prop values
visual overstatement of weak evidence
information overload
```
