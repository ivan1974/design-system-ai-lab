# Setup Guidelines v0.5.1

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

## Prompt system roles

Reusable prompts:

```txt
guidelines/prompts/*
```

Use them as adaptable generation guidance for Make.

Fixed benchmark cases:

```txt
benchmarks/figma-make/cases/*
```

Use them as stable scoring scenarios. Do not rewrite benchmark facts unless the scoring objective changes.

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
  ComponentHierarchy,
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

## Preferred generation vocabulary

For new generated decision workspaces, prefer:

```txt
PageHeading over PageHeader
WorkspaceDetailPanel over DetailPanel for selected-item detail
MetricStrip with CompactMetric for compact signal groups
ComponentHierarchy for asset hierarchy
ListContainer with approved row components for repeated objects
SectionStack and SectionBlock for dense grouped sections
ActionRow or StickyActionBar for follow-through
```

Use with care:

```txt
PageHeader → legacy page header, not the default for new decision workspaces
DetailPanel → lower-level primitive, not the default selected-item detail panel
ComponentHierarchyItem → use only inside ComponentHierarchy
Card → emphasis container, not the default repeated-object layout
```

If a preferred component matches the user decision, do not fall back to a lower-level or legacy component.

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
riskLevel
proofReadiness
validationStatus
sourceStrength
density
```

If uncertain, simplify the component usage or choose a documented value.

---

## Local helper rule

Do not create local visual components, wrappers or design-system substitutes.
