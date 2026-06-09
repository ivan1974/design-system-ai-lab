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
  PageHeading,
  FilterBar,
  MasterDetailLayout,
  DetailPanel,
  DetailPanelHeader,
  DetailPanelBody,
  DetailPanelTabs,
  StickyActionBar,
  SectionBlock,
  SectionStack,
  Surface,
  ListContainer,
  Well,
  Divider,
  Toolbar,
  CustomerQueueRow,
  AssetQueueRow,
  RiskQueueRow,
  RecommendationQueueRow,
  ReviewQueueRow,
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

## Prop value rule

Generated code must use documented prop values only.

Do not invent values for props such as:

```txt
variant
tone
severity
priority
strength
mode
size
status
```

Use values documented in the component contracts, Storybook stories or package TypeScript declarations.

If a prop value is uncertain, choose a documented value or simplify the component usage.

Examples of risky values that must be checked before use:

```txt
variant="outline"
strength="medium"
strength="high"
tone="muted"
mode="panel"
priority="urgent"
```

---

## Local helper rule

Do not create local visual components or local design-system wrappers.

Not allowed:

```txt
local Button
local Card
local Badge
local Dialog
local Pill
local Tag
local Metric
local form components
local workspace primitives
local surface wrappers
local toolbar wrappers
local list containers
local CustomerRow
local AssetRow
local RiskRow
local RecommendationRow
local QueueItem
```

Small local render helpers are acceptable only if they:

- compose approved `design-system-ai-lab` components
- do not define their own visual identity
- do not create new tokens, variants, states or styles
- do not duplicate a package component

Acceptable examples:

```txt
small data mapping helpers
small tab content helpers
small functions that choose which approved pattern to render
```

---

## App.tsx output requirement

Figma Make must render a complete visible screen in `App.tsx`.

Do not leave `App.tsx` empty.

Do not generate only package setup code.

Do not stop after setting up packages.

Do not generate a blank shell that requires manual component assembly.

The output should include a visible interface composed from the approved design
system package.

The screen should have one clear user goal and one clear primary decision or
next action.

---

## Surface primitive rule

Use surface primitives before creating styled div wrappers.

Use:

```txt
Surface
ListContainer
Well
Divider
Toolbar
```

Use `Surface` for structured content regions.

Use `ListContainer` for grouped rows.

Use `Well` for contextual emphasis inside a larger surface.

Use `Divider` for separation.

Use `Toolbar` for local controls and action groups.

Avoid:

```tsx
<div className="rounded-lg border bg-white p-6 shadow-sm">
  ...
</div>
```

---

## Queue row rule

Use queue rows before creating styled customer, asset, risk or recommendation list items.

Use:

```txt
CustomerQueueRow
AssetQueueRow
RiskQueueRow
RecommendationQueueRow
ReviewQueueRow
```

Use `CustomerQueueRow` for customer queues.

Use `AssetQueueRow` for asset queues.

Use `RiskQueueRow` for operational or service risk queues.

Use `RecommendationQueueRow` for recommendation review queues.

Use `ReviewQueueRow` when no specific business row fits.

Place queue rows inside `ListContainer`.

Avoid:

```tsx
<div className="flex items-center justify-between rounded-lg border bg-white p-4 hover:bg-gray-50">
  ...
</div>
```

Avoid wrapping `SignalRow` in local selected-state wrappers for customer, asset, risk or recommendation queues.

---

## Minimal valid App.tsx setup

A minimal valid generated screen should follow the workspace v2 structure:

```tsx
import {
  WorkspaceShell,
  PageHeading,
  FilterBar,
  MasterDetailLayout,
  DetailPanel,
  DetailPanelBody,
  DetailPanelHeader,
  SectionBlock,
  ListContainer,
  AssetQueueRow,
  KeyValueList,
  KeyValueRow,
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
          <PageHeading
            eyebrow="Customer monitoring"
            title="Review what needs attention next"
          />
        }
        controls={<FilterBar title="Scope" resultCount="2 items shown" />}
      >
        <MasterDetailLayout
          list={
            <SectionBlock title="Assets">
              <ListContainer>
                {rows.map((row) => (
                  <AssetQueueRow
                    key={row.name}
                    assetName={row.name}
                    description={row.description}
                    statusLabel={row.value}
                    statusTone="warning"
                    sourceStrength="partial"
                  />
                ))}
              </ListContainer>
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
- uses documented prop values
- avoids local wrappers and local design system files
- avoids card saturation
- uses workspace structure for list/detail review
- uses queue rows for repeated review objects

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
- `Divider`
- `DocumentRow`
- `Heading`
- `KeyValueList`
- `KeyValueRow`
- `ListContainer`
- `MetricCard`
- `PageHeader`
- `PageHeading`
- `SectionHeading`
- `Surface`
- `Text`
- `Timeline`
- `TimelineItem`
- `Toolbar`
- `Well`

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
- `ReviewQueueRow`
- `SectionHeader`
- `SemanticTag`
- `SignalRow`
- `SourceStrengthPill`
- `StatusPill`
- `StatusSummary`

### Business patterns

- `AssetIntelligenceSummary`
- `AssetQueueRow`
- `ConnectivityCoverageCard`
- `CreateActionDialog`
- `CustomerQueueRow`
- `CustomerReviewReadinessCard`
- `CustomerStatusCard`
- `RecommendationQueueRow`
- `RecommendationReviewPanel`
- `RenewalRiskSummary`
- `RiskQueueRow`
- `ServiceRiskSummary`
- `ValueProofCard`

Do not import or create components outside this approved vocabulary unless the
prompt explicitly requests a custom element and no existing component fits.

Use business patterns before low-level components when a pattern fits the screen
intent.

Use queue rows before local row wrappers for customer, asset, risk and recommendation lists.

Use workspace, surface and compact components before creating long stacks of generic cards.

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
