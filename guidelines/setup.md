# Setup Guidelines v0.4

## Purpose

This file explains how Figma Make should set up and compose generated React screens with `design-system-ai-lab` v0.4.

It defines the package import rule, approved component vocabulary, local-helper limits and minimum screen structure.

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

## Minimum v0.4 screen structure

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
