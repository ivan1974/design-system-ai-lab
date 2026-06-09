# Setup Guidelines

## Purpose

This file explains how Figma Make should set up a generated React project when
using `design-system-ai-lab`.

Its role is technical and operational.

Use `setup.md` to define:

- the required npm package
- the required imports
- the public API rule
- the expected `App.tsx` output
- the forbidden local setup patterns
- the minimal valid setup pattern
- the setup validation checklist

Do not use this file as the full design system documentation.

For generation rules, screen routing, principles and acceptance criteria, read:

```txt
Guidelines.md
```

For tokens and visual styling, read:

```txt
tokens.md
styles.md
```

---

## Required package

Use the published npm package:

```txt
design-system-ai-lab
```

If an installation step is needed, use:

```bash
npm install design-system-ai-lab
```

Do not install a local tarball unless explicitly requested.

Do not create a local workspace package.

Do not copy the design system source code into the generated project.

---

## Required dependency rule

The generated project should consume `design-system-ai-lab` as an application
dependency.

It must not recreate the package locally.

Do not create:

```txt
packages/design-system-ai-lab
src/design-system
src/components/ui
components/ui
```

Do not generate a local substitute for the package.

Do not create a parallel design system to bypass dependency resolution.

If dependency resolution fails, keep the intended package imports and revise the
project setup instead of recreating the design system.

---

## Required imports

Generated screens must import components from the package root:

```tsx
import {
  WorkspaceShell,
  FilterBar,
  MasterDetailLayout,
  DetailPanel,
  DetailPanelHeader,
  DetailPanelBody,
  DetailPanelTabs,
  StickyActionBar,
  SectionBlock,
  SectionStack,
  KeyValueList,
  KeyValueRow,
  MetricStrip,
  CompactMetric,
  ActionRow,
} from "design-system-ai-lab";
```

Import only what the screen needs.

Generated screens must import styles once:

```tsx
import "design-system-ai-lab/styles.css";
```

The CSS import may be placed in:

```txt
src/App.tsx
src/main.tsx
src/index.css
```

Prefer importing it once near the application root.

Do not import the same package stylesheet repeatedly in multiple files.

---

## Public API rule

Always import from the package root.

Correct:

```tsx
import { Button } from "design-system-ai-lab";
```

Incorrect:

```tsx
import { Button } from "design-system-ai-lab/dist/components/button";
```

Incorrect:

```tsx
import { Button } from "design-system-ai-lab/src/components/button";
```

Incorrect:

```tsx
import { Button } from "./components/ui/button";
```

The package root is the only stable public API.

Internal package paths are not part of the public contract.

Local recreated components are not part of the design system contract.

---

## App.tsx output requirement

Figma Make must render a complete visible screen in `App.tsx`.

Do not leave `App.tsx` empty.

Do not generate only a component library.

Do not stop after setting up packages.

Do not generate a blank shell that requires manual component assembly.

The output should include a visible interface composed from the approved design
system package.

The screen should have one clear user goal and one clear primary decision or
next action.

---

## Minimal valid App.tsx setup

A minimal valid generated screen should follow the workspace v2 structure:

```tsx
import {
  WorkspaceShell,
  FilterBar,
  MasterDetailLayout,
  DetailPanel,
  DetailPanelBody,
  DetailPanelHeader,
  SectionBlock,
  KeyValueList,
  KeyValueRow,
  SignalRow,
  StatusPill,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";

const rows = [
  { name: "Main switchboard", value: "Review needed", description: "Updated 18h ago" },
  { name: "UPS group", value: "Warning signal", description: "Updated 18h ago" },
];

export default function App() {
  return (
    <main className="min-h-screen bg-(--ec-color-background)">
      <WorkspaceShell
        header={
          <div>
            <p className="text-sm font-medium text-(--ec-color-primary)">Customer monitoring</p>
            <h1 className="mt-1 text-2xl font-semibold text-(--ec-color-text-primary)">Review what needs attention next</h1>
          </div>
        }
        controls={<FilterBar title="Scope" resultCount="2 items shown" />}
      >
        <MasterDetailLayout
          list={
            <SectionBlock title="Items">
              {rows.map((row) => (
                <SignalRow key={row.name} label={row.name} value={row.value} description={row.description} />
              ))}
            </SectionBlock>
          }
          detail={
            <DetailPanel>
              <DetailPanelHeader title="Main switchboard" meta={<StatusPill tone="warning">Review needed</StatusPill>} />
              <DetailPanelBody>
                <SectionBlock title="Facts">
                  <KeyValueList columns={2}>
                    <KeyValueRow label="Source scope" value="Known installed base and connected assets" />
                    <KeyValueRow label="Validation" value="Review before customer use" />
                  </KeyValueList>
                </SectionBlock>
              </DetailPanelBody>
            </DetailPanel>
          }
        />
      </WorkspaceShell>
    </main>
  );
}
```

This setup is valid because it:

- imports from the package root
- imports package styles once
- renders a visible screen in `App.tsx`
- uses package components directly
- avoids local wrappers and local design system files
- avoids card saturation
- uses workspace structure for list/detail review

For full screen composition, use `Guidelines.md`, `screen-architecture/` and the relevant prompt file.

---

## Approved import vocabulary

The generated project may import the following from `design-system-ai-lab`.

### Components

- `Badge`
- `Button`
- `Card`
- `Dialog`
- `DialogClose`
- `DialogFooter`
- `DocumentRow`
- `KeyValueList`
- `KeyValueRow`
- `MetricCard`
- `PageHeader`
- `Timeline`
- `TimelineItem`

### Forms

- `Field`
- `Input`
- `Label`
- `Select`
- `Textarea`

### Composition

- `WorkspaceShell`
- `FilterBar`
- `MasterDetailLayout`
- `DetailPanel`
- `DetailPanelHeader`
- `DetailPanelBody`
- `DetailPanelFooter`
- `DetailPanelTabs`
- `StickyActionBar`
- `SectionStack`
- `SectionBlock`

### Compact and decision components

- `ActionCard`
- `ActionList`
- `ActionRow`
- `AlertCard`
- `CompactMetric`
- `MetricGrid`
- `MetricStrip`
- `PriorityList`
- `PriorityPill`
- `RecommendationCard`
- `SectionHeader`
- `SemanticTag`
- `SignalRow`
- `SourceStrengthPill`
- `StatusPill`
- `StatusSummary`

### Business patterns

- `AssetIntelligenceSummary`
- `ConnectivityCoverageCard`
- `CreateActionDialog`
- `CustomerReviewReadinessCard`
- `CustomerStatusCard`
- `RecommendationReviewPanel`
- `RenewalRiskSummary`
- `ServiceRiskSummary`
- `ValueProofCard`

Do not import or create components outside this approved vocabulary unless the
prompt explicitly requests a custom element and no existing component fits.

Use business patterns before low-level components when a pattern fits the screen
intent.

Use workspace and compact components before creating long stacks of generic cards.

---

## Expected generated files

A simple Make output should mainly modify or create:

```txt
src/App.tsx
src/main.tsx
src/index.css
```

It may add small helper files only when needed.

It should not generate a full component library.

It should not generate a parallel design system.

It should not create local UI component folders that duplicate the package.

---

## Forbidden setup patterns

Do not create a local package replacement.

Do not generate this structure:

```txt
packages/design-system-ai-lab/
  package.json
  src/index.ts
  src/styles.css
```

Do not import from internal package paths:

```tsx
import { Button } from "design-system-ai-lab/dist/components/button";
```

Do not import recreated local UI components:

```tsx
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
```

Do not recreate design system components with Radix, MUI, shadcn-like files or
custom local implementations.

Do not create local wrappers such as:

```tsx
function ForwardedButton() {
  return <button />;
}
```

Do not create custom primitives that duplicate:

```txt
Button
Card
Badge
Dialog
Field
Input
Select
Textarea
WorkspaceShell
FilterBar
MasterDetailLayout
DetailPanel
SectionBlock
KeyValueList
MetricStrip
SemanticTag
StatusPill
CustomerStatusCard
ConnectivityCoverageCard
RenewalRiskSummary
ValueProofCard
ActionCard
ActionRow
AlertCard
```

The package already provides the compatible components.

---

## Form setup rule

Generated forms must use package form components.

Correct:

```tsx
<Field label="Owner" htmlFor="owner">
  <Input id="owner" placeholder="CSM" />
</Field>
```

Incorrect:

```tsx
<input style={{ height: "40px", borderRadius: "6px" }} />
```

Use:

- `Field` for label, helper and error layout
- `Input` for short values
- `Select` for limited choices
- `Textarea` for notes and recommendations
- `Label` only for lower-level custom form composition when `Field` does not fit

Rules:

- connect `htmlFor` and `id` when possible
- do not rely only on placeholders
- do not create raw `input`, `select` or `textarea` elements when package components fit
- do not use disabled form fields for display-only context
- use display components, compact primitives or business patterns for display-only data

---

## Styling setup rule

The generated project must use:

```tsx
import "design-system-ai-lab/styles.css";
```

Do not recreate the package styles manually.

Do not duplicate token definitions.

Do not add a competing design token system.

Do not add a new visual identity.

The generated app may use utility classes for layout, but visual identity should
come from the package styles and tokens.

Use `className` for layout adjustments only.

Do not use `className` to redefine package component identity.

Do not use inline styles to recreate tokens, colors, shadows, radius or form
states.

---

## React compatibility

The package is designed for React-based Make environments.

Expected peer dependencies are React and React DOM.

Do not add a second React version to work around dependency issues.

Do not bundle React inside generated design system code.

Do not recreate the design system locally to bypass dependency resolution.

If dependency resolution fails, preserve the intended package imports and revise
the project setup instead of generating a parallel design system.

---

## If package import fails

If Make cannot resolve the package at first, do not recreate the entire design
system.

Instead:

1. keep the intended package imports
2. generate the screen structure in `App.tsx`
3. preserve the intended component vocabulary
4. avoid creating replacement components unless explicitly asked
5. preserve the rules from `Guidelines.md`, `tokens.md` and `styles.md`

Use this correction instruction:

```txt
Revise the project.

Use the published npm package design-system-ai-lab directly.
Do not create packages/design-system-ai-lab.
Do not recreate design system components locally.
Import components from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.
Use workspace components for list/detail review.
Use business patterns when they match the section intent.
Use compact primitives instead of card stacks for repeated facts, signals and actions.
Use form components instead of inline-styled raw inputs.
Update App.tsx so it renders a complete visible screen using imports from design-system-ai-lab.
```

---

## Setup validation checklist

After generation, verify:

- `design-system-ai-lab` is listed as a dependency when dependency files are present
- components are imported from `design-system-ai-lab`
- styles are imported from `design-system-ai-lab/styles.css`
- no internal package paths are used
- no local `packages/design-system-ai-lab` folder was created
- no local replacement components were created
- no local wrapper duplicates package components
- no inline-styled raw form fields were created
- `App.tsx` renders a complete visible screen
- the generated screen uses approved components and patterns
- business patterns are used when they match the section intent
- workspace components are used when list/detail review is needed
- compact rows and primitives are used for repeated information
- form controls have visible labels
- `htmlFor` and `id` are connected when possible
- utility classes are used for layout, not for recreating component identity
- package styles and tokens remain the source of visual identity

For UX, AI usage, evidence, accessibility, eco-design and full acceptance review,
use `Guidelines.md`.

---

## Final principle

The setup should make Figma Make a consumer of the design system package.

It should not turn Figma Make into a generator of a new design system.
