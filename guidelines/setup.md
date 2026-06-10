# Setup Guidelines v0.5

## Purpose

This file explains how Figma Make should set up and compose generated React screens with `design-system-ai-lab`.

It defines the package import rule, approved component vocabulary, local-helper limits, minimum screen structure and package build assumptions.

This file is an active AI-facing source of truth.

Do not duplicate these setup rules in a separate documentation folder.

---

## Machine-readable contracts

The human-readable rules in this file are mirrored by machine-readable contracts in `contracts/`.

Use the contracts for tests, automated checks and future tooling.

Do not treat the contracts as a second source of truth. They are the testable form of the active guidelines.

Current contracts:

```txt
contracts/package.contract.json
contracts/components.contract.json
contracts/props.contract.json
contracts/screen-architecture.contract.json
contracts/business-patterns.contract.json
contracts/evidence-and-trust.contract.json
contracts/generation-blockers.contract.json
```

---

## Required package

Use the published npm package:

```bash
npm install design-system-ai-lab
```

Do not create or copy a local design system.

Do not create:

```txt
packages/design-system-ai-lab
src/design-system
src/components/ui
components/ui
```

---

## Required imports

Import components from the package root only:

```tsx
import {
  WorkspaceShell,
  PageHeading,
  SectionHeading,
  Breadcrumbs,
  HeaderTabs,
  Tabs,
  SegmentedControl,
  SecondaryNavigation,
  FilterBar,
  MasterDetailLayout,
  WorkspaceDetailPanel,
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
  CustomerStatusCard,
  CustomerReviewReadinessCard,
  ConnectivityCoverageCard,
  AssetIntelligenceSummary,
  RenewalRiskSummary,
  ValueProofCard,
  ServiceRiskSummary,
  RecommendationReviewPanel,
  RecommendationCard,
  AlertCard,
  EvidenceRow,
  ActionRow,
  KeyValueList,
  KeyValueRow,
  MetricStrip,
  CompactMetric,
  StatusPill,
  SourceStrengthPill,
  PriorityPill,
  SemanticTag,
  Button,
} from "design-system-ai-lab";
```

Import styles once:

```tsx
import "design-system-ai-lab/styles.css";
```

Do not import from internal package paths.

Forbidden examples:

```txt
design-system-ai-lab/dist/*
design-system-ai-lab/src/*
./components/ui/*
packages/design-system-ai-lab/*
```

---

## Public package contract

The public package contract is intentionally small.

Supported entry points:

```txt
design-system-ai-lab
= public component and pattern API

design-system-ai-lab/styles.css
= public stylesheet entry point
```

The package should continue to expose only:

```txt
.
./styles.css
```

This keeps Make focused on the public API and prevents reliance on implementation details.

---

## Stylesheet contract

The package exports one stylesheet entry point:

```txt
design-system-ai-lab/styles.css
```

The library build emits:

```txt
dist/styles.css
```

The build removes `dist/styles.js` after library build because the public stylesheet contract should be CSS-only.

---

## Radix and React build assumptions

Figma Make and consuming React apps provide the React runtime.

React and React DOM are peer dependencies and should stay externalized.

Decision for the v0.5 foundation:

```txt
Externalize all Radix primitives used by the package.
```

Externalized Radix packages:

```txt
@radix-ui/react-dialog
@radix-ui/react-dropdown-menu
@radix-ui/react-select
@radix-ui/react-tabs
@radix-ui/react-tooltip
```

Reason:

```txt
Do not bundle a partial and inconsistent subset of Radix primitives.
Keep the library build aligned with the React/Radix runtime used by Figma Make and consuming apps.
```

---

## Prop value rule

Use documented prop values only.

Do not invent values for:

```txt
variant
tone
severity
priority
strength
mode
size
status
readiness
```

If uncertain, simplify the component usage or choose a documented value.

---

## Local helper rule

Do not create local visual components, wrappers or design-system substitutes.

Not allowed:

```txt
local Button
local Card
local Badge
local Pill
local Tag
local Metric
local Tabs
local Drawer
local SidePanel
local QueueItem
local CustomerRow
local AssetRow
local RiskRow
local RecommendationRow
local form components
local surface wrappers
local toolbar wrappers
local navigation wrappers
```

Small local helpers are allowed only if they:

- map data to approved package components
- do not add visual styles
- do not create tokens, states or variants
- do not duplicate package components

---

## Minimum screen structure

A generated decision workspace should usually use:

```txt
WorkspaceShell
PageHeading
FilterBar or SecondaryNavigation
MasterDetailLayout
ListContainer with QueueRows
WorkspaceDetailPanel
Tabs where detail has multiple views
StickyActionBar or ActionRow for follow-through
```

Use business patterns when the intent matches:

```txt
CustomerStatusCard
CustomerReviewReadinessCard
ConnectivityCoverageCard
AssetIntelligenceSummary
RenewalRiskSummary
ValueProofCard
ServiceRiskSummary
RecommendationReviewPanel
```

---

## Minimal valid App.tsx

```tsx
import {
  WorkspaceShell,
  PageHeading,
  Breadcrumbs,
  FilterBar,
  MasterDetailLayout,
  WorkspaceDetailPanel,
  ListContainer,
  AssetQueueRow,
  SectionBlock,
  Tabs,
  StatusPill,
  Button,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";

export default function App() {
  return (
    <main className="min-h-screen bg-(--ec-color-background)">
      <WorkspaceShell
        header={
          <div className="space-y-5">
            <Breadcrumbs items={[{ id: "customers", label: "Customers" }, { id: "monitoring", label: "Monitoring", current: true }]} />
            <PageHeading eyebrow="Customer monitoring" title="Review what needs attention next" />
          </div>
        }
        controls={<FilterBar title="Scope" resultCount="2 items shown" />}
      >
        <MasterDetailLayout
          detailOpen
          detailMode="inline"
          list={
            <SectionBlock title="Assets">
              <ListContainer>
                <AssetQueueRow assetName="Main switchboard" statusLabel="Review needed" statusTone="warning" sourceStrength="partial" selected />
                <AssetQueueRow assetName="UPS group" statusLabel="Warning signal" statusTone="warning" sourceStrength="partial" />
              </ListContainer>
            </SectionBlock>
          }
          detail={
            <WorkspaceDetailPanel open mode="inline" title="Main switchboard" meta={<StatusPill tone="warning">Review needed</StatusPill>}
              footer={<Button size="sm">Assign validation</Button>}
            >
              <Tabs tabs={[{ id: "overview", label: "Overview" }, { id: "actions", label: "Actions", count: 2 }]} defaultValue="overview" />
            </WorkspaceDetailPanel>
          }
        />
      </WorkspaceShell>
    </main>
  );
}
```

---

## Approved import vocabulary

### Components

```txt
Badge
Breadcrumbs
Button
Card
Dialog
DialogClose
DialogFooter
Divider
DocumentRow
HeaderTabs
Heading
KeyValueList
KeyValueRow
ListContainer
MetricCard
PageHeader
PageHeading
PanelHeader
PanelBody
PanelFooter
PanelClose
SecondaryNavigation
SectionHeading
SegmentedControl
SlideOverPanel
Surface
Tabs
Text
Timeline
TimelineItem
Toolbar
Well
```

### Forms

```txt
Field
Input
Label
Select
Textarea
```

### Composition

```txt
WorkspaceShell
FilterBar
MasterDetailLayout
WorkspaceDetailPanel
DetailPanel
DetailPanelHeader
DetailPanelBody
DetailPanelFooter
DetailPanelTabs
StickyActionBar
SectionStack
SectionBlock
```

Use `WorkspaceDetailPanel` for new interactive detail panels. Keep `DetailPanel` for legacy/static examples only.

### Decision components

```txt
ActionCard
ActionList
ActionRow
AlertCard
EvidenceRow
MetricGrid
MetricStrip
PriorityList
PriorityPill
RecommendationCard
ReviewQueueRow
SectionHeader
SemanticTag
SignalRow
SourceStrengthPill
StatusPill
StatusSummary
```

### Business patterns

```txt
AssetIntelligenceSummary
AssetQueueRow
ConnectivityCoverageCard
CreateActionDialog
CustomerQueueRow
CustomerReviewReadinessCard
CustomerStatusCard
RecommendationQueueRow
RecommendationReviewPanel
RenewalRiskSummary
RiskQueueRow
ServiceRiskSummary
ValueProofCard
```

---

## Setup validation checklist

A generated screen passes setup if:

- it imports package components from `design-system-ai-lab`
- it imports `design-system-ai-lab/styles.css` once
- it does not create local UI folders
- it does not recreate package components locally
- it uses `PageHeading` for page intent
- it uses `SectionHeading` or `SectionBlock` for section hierarchy
- repeated review objects use queue rows
- queue rows are inside `ListContainer`
- interactive selected detail uses `WorkspaceDetailPanel`
- navigation uses `Tabs`, `HeaderTabs`, `SegmentedControl`, `SecondaryNavigation` or `Breadcrumbs`
- business patterns are used before generic cards when they fit
- all prop values are documented

---

## Maintainer script checks

These commands are for maintainers, not Figma Make generation.

Foundation check:

```bash
npm run check
```

It runs:

```txt
npm run lint
npm run lint:md
npm run test
npm run build:ds
```

Critical Sprint 1 commands:

```txt
npm run dev
npm run build
npm run build:ds
npm run lint
npm run lint:md
npm run test
npm run storybook
npm run build-storybook
```

`package-lock.json` should be regenerated locally with `npm install` whenever package metadata or dependency decisions change.
