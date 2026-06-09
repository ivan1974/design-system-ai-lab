# Design System AI Lab

Design System AI Lab is a React / TypeScript design system package for AI-assisted interface generation.

It demonstrates how a coded design system can become a controlled generation framework for tools such as Figma Make.

The goal is not to let AI invent interfaces from scratch.

The goal is to help AI compose useful first drafts from a governed system of:

- components
- composition primitives
- decision components
- business patterns
- design tokens
- screen architecture rules
- Make-ready prompts
- acceptance and repair checklists
- golden examples

The designer remains responsible for UX judgment, hierarchy, validation and final quality.

---

## What is new in v0.3.0

Version `0.3.0` introduces the **decision workspace v2** standard.

The project is no longer oriented around generating long dashboard pages or stacks of generic cards.

The new standard teaches Make to generate structured decision workspaces:

```txt
WorkspaceShell
→ FilterBar
→ MasterDetailLayout when list/detail review is needed
→ DetailPanel / DetailPanelTabs / StickyActionBar for selected item review
→ SectionStack / SectionBlock for dense grouping
→ KeyValueList / MetricStrip / rows for repeated facts, signals, evidence and actions
```

The core principle is:

```txt
The design system is not a card stack generator.
```

Use cards only for highlighted decision objects.

Use compact primitives and rows for repeated operational information.

---

## What this project demonstrates

This project demonstrates the full chain:

```txt
Design foundations
→ React component package
→ Storybook documentation
→ screen architecture rules
→ Make-ready guidelines
→ golden examples
→ controlled AI-assisted screen generation
```

It includes:

- a coded React design system
- CSS design tokens
- compatibility aliases for Figma Make / shadcn-like generators
- Radix UI primitives for accessible interactions
- Storybook documentation
- form components for generated dialogs
- composition components for decision workspaces
- compact primitives for dense B2B screens
- decision components for risks, recommendations, signals and actions
- business patterns for service / customer monitoring use cases
- Make-ready guidelines and prompts
- repair prompts for common generation failures
- golden examples rendered in Storybook
- a package build consumable by another React app or Make file

---

## Core idea

A design system is not only a visual library.

It can become a **generation framework** for AI-assisted product interface creation.

In this model:

- the designer defines the system
- the design system defines the vocabulary
- component contracts define usage rules
- screen architecture rules define layout choices
- prompts define the screen objective and constraints
- AI tools compose first drafts
- designers review, improve and validate the result

The AI should not generate from imagination.

It should generate from a governed system.

---

## Tech stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Radix UI
- Storybook
- explicit TypeScript declaration generation for the package build

---

## Project structure

```txt
src/
  design-system/
    components/
    composition/
    decision/
    forms/
    patterns/
    stories/
    tokens/
    index.ts
    styles.css

  demo/

guidelines/
  Guidelines.md
  setup.md
  styles.md
  tokens.md
  screen-architecture/
  prompts/
  repair-prompts/
  review/
  examples/golden/
  domain-models/
  knowledge/
```

Important distinction:

```txt
src/design-system/
= package source code

guidelines/
= Make-ready governance, prompts, screen architecture and golden examples

src/design-system/stories/
= Storybook documentation and visual review surface

guidelines/examples/golden/
= source of truth for Make-ready screen examples
```

---

## Design system layers

### Foundations

Foundations define the visual and structural base:

- colors
- typography
- spacing
- radius
- shadows
- status colors
- compatibility aliases

The official token namespace is:

```txt
--ec-*
```

Examples:

```txt
--ec-color-background
--ec-color-surface
--ec-color-text-primary
--ec-color-border
--ec-color-primary
--ec-radius-sm
--ec-shadow-card
```

### Components

Generic UI components:

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

Form primitives:

- `Field`
- `Input`
- `Label`
- `Select`
- `Textarea`

### Composition

Workspace and layout components:

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

### Decision and compact components

Decision-oriented components and dense primitives:

- `ActionCard`
- `ActionList`
- `ActionRow`
- `AlertCard`
- `CompactMetric`
- `EvidenceRow`
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

Higher-level patterns ready for AI-assisted screen composition:

- `AssetIntelligenceSummary`
- `ConnectivityCoverageCard`
- `CreateActionDialog`
- `CustomerReviewReadinessCard`
- `CustomerStatusCard`
- `RecommendationReviewPanel`
- `RenewalRiskSummary`
- `ServiceRiskSummary`
- `ValueProofCard`

These patterns are intentionally opinionated. They help Figma Make compose useful screens without rebuilding every business section from primitive components.

---

## Package public API

Import components from the package root:

```tsx
import {
  WorkspaceShell,
  FilterBar,
  MasterDetailLayout,
  DetailPanel,
  SectionBlock,
  KeyValueList,
  KeyValueRow,
  MetricStrip,
  CompactMetric,
  ActionRow,
  ConnectivityCoverageCard,
  ServiceRiskSummary,
} from "design-system-ai-lab";
```

Import styles once near the root of the consuming app:

```tsx
import "design-system-ai-lab/styles.css";
```

Do not import from internal package paths.

Allowed:

```tsx
import { Button } from "design-system-ai-lab";
```

Not allowed:

```tsx
import { Button } from "design-system-ai-lab/dist/components/button";
```

---

## Example usage

```tsx
import {
  ActionRow,
  Button,
  ConnectivityCoverageCard,
  DetailPanel,
  DetailPanelBody,
  DetailPanelHeader,
  DetailPanelTabs,
  FilterBar,
  KeyValueList,
  KeyValueRow,
  MasterDetailLayout,
  MetricStrip,
  CompactMetric,
  SectionBlock,
  SectionStack,
  SemanticTag,
  SignalRow,
  StatusPill,
  StickyActionBar,
  WorkspaceShell,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";

const assets = [
  { name: "Main switchboard", value: "Review needed", description: "Updated 18h ago" },
  { name: "UPS group", value: "Warning signal", description: "Updated 18h ago" },
];

export default function App() {
  return (
    <main className="min-h-screen bg-(--ec-color-background)">
      <WorkspaceShell
        header={
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-medium text-(--ec-color-primary)">Customer monitoring</p>
              <h1 className="mt-1 text-2xl font-semibold text-(--ec-color-text-primary)">Review what needs attention next</h1>
            </div>
            <Button size="sm">Create action</Button>
          </div>
        }
        controls={
          <FilterBar
            title="Monitoring scope"
            resultCount="2 assets shown"
            filters={<SemanticTag tone="warning">Partial coverage</SemanticTag>}
          />
        }
      >
        <MasterDetailLayout
          detailWidth="lg"
          list={
            <SectionBlock title="Asset queue">
              <div className="divide-y divide-(--ec-color-border)">
                {assets.map((asset) => (
                  <SignalRow key={asset.name} label={asset.name} value={asset.value} description={asset.description} />
                ))}
              </div>
            </SectionBlock>
          }
          detail={
            <DetailPanel>
              <DetailPanelHeader
                title="Main switchboard"
                description="Selected asset detail. Facts and source limits appear before interpretation."
                meta={<StatusPill tone="warning">Review needed</StatusPill>}
              />
              <DetailPanelTabs
                tabs={[
                  { id: "overview", label: "Overview", active: true },
                  { id: "coverage", label: "Coverage" },
                  { id: "actions", label: "Actions", count: 2 },
                ]}
              />
              <DetailPanelBody>
                <SectionStack>
                  <SectionBlock title="Identity and scope">
                    <KeyValueList columns={2}>
                      <KeyValueRow label="Source scope" value="Known installed base and connected assets" />
                      <KeyValueRow label="Validation" value="Review before customer use" />
                    </KeyValueList>
                  </SectionBlock>

                  <SectionBlock title="Signals">
                    <MetricStrip columns={2}>
                      <CompactMetric label="Connected" value="68%" tone="warning" />
                      <CompactMetric label="Freshness" value="18h" />
                    </MetricStrip>
                  </SectionBlock>

                  <ConnectivityCoverageCard
                    mode="section"
                    coverageRate="68%"
                    connectedAssets="17 assets"
                    disconnectedAssets="8 assets"
                    monitoringStatus="Partial monitoring coverage"
                    sourceScope="Monitoring platform and known installed base"
                    sourceStrength="partial"
                  />
                </SectionStack>
              </DetailPanelBody>
              <StickyActionBar
                context="Next action: validate source scope before customer communication."
                primaryAction={<Button size="sm">Assign validation</Button>}
              />
            </DetailPanel>
          }
        />

        <SectionBlock title="Open actions">
          <ActionRow title="Validate asset interpretation" owner="Service Expert" dueDate="Next 3 business days" priority="high" status="todo" />
        </SectionBlock>
      </WorkspaceShell>
    </main>
  );
}
```

---

## Figma Make usage model

This package is designed to support a Figma Make / Make kit workflow.

The intended model is:

```txt
React design system package
+ CSS styles
+ screen architecture rules
+ component contracts
+ prompt rules
+ acceptance criteria
+ golden examples
= controlled AI-assisted screen generation
```

Figma Make should not generate from a blank canvas.

It should generate from:

- the component package
- the approved component vocabulary
- the design tokens
- the screen architecture rules
- the usage rules
- the business patterns
- the designer’s prompt
- the relevant golden example

Recommended Make behavior:

- use workspace components when review or comparison is needed
- use business patterns first when available
- use compact primitives and rows for repeated facts, signals, evidence and actions
- use decision cards only for highlighted objects
- import styles from `design-system-ai-lab/styles.css`
- avoid local component wrappers
- avoid inline-styled raw form fields
- avoid creating a local `packages/design-system-ai-lab` folder
- avoid card saturation

---

## Storybook

Run Storybook with:

```bash
npm run storybook
```

Storybook is the main visual review and documentation surface.

Recommended navigation:

```txt
Design System / Foundations
Design System / Components
Design System / Forms
Design System / Composition
Design System / Decision
Design System / Patterns
Design System / Golden Examples
Design System / Make Kit Guidelines
```

The most important section for judging Make output quality is:

```txt
Design System / Golden Examples
```

It renders the Make-ready golden examples with the real local design system.

Build Storybook with:

```bash
npm run build-storybook
```

---

## Golden examples

Golden examples live in:

```txt
guidelines/examples/golden/
```

They are the source of truth for Make-ready screen examples.

Current golden examples:

```txt
customer-monitoring.App.tsx
renewal-risk-review.App.tsx
asset-recommendation-review.App.tsx
qbr-readiness.App.tsx
installed-base-explorer.App.tsx
```

They are also rendered in Storybook under:

```txt
Design System / Golden Examples
```

Use them to review:

- workspace structure
- visual density
- card saturation risk
- detail panel usage
- evidence hierarchy
- actionability
- source and validation visibility

---

## Make-ready guidelines

Make-ready guidance lives in:

```txt
guidelines/
```

Start with:

```txt
guidelines/Guidelines.md
guidelines/setup.md
guidelines/styles.md
guidelines/tokens.md
guidelines/screen-architecture/README.md
guidelines/prompts/workspace-v2.md
```

Use repair prompts when Make drifts:

```txt
guidelines/repair-prompts/card-saturation.md
guidelines/repair-prompts/weak-layout.md
guidelines/repair-prompts/missing-detail-panel.md
```

Use review checklists to accept or reject output:

```txt
guidelines/review/blocking-checklist.md
guidelines/review/quality-checklist.md
guidelines/review/workspace-v2-checklist.md
```

---

## Install

```bash
npm install
```

---

## Run the app

```bash
npm run dev
```

---

## Build the app

```bash
npm run build
```

---

## Run Storybook

```bash
npm run storybook
```

---

## Build Storybook

```bash
npm run build-storybook
```

---

## Build the design system package

```bash
npm run build:ds
```

This builds the reusable design system package into `dist/`.

The package exposes:

- `dist/index.js` for JavaScript
- `dist/index.d.ts` for TypeScript declarations
- `dist/styles.css` for styles and tokens

---

## Test the package locally

First build the design system:

```bash
npm run build:ds
```

Then check the package contents:

```bash
npm pack --dry-run
```

Create the local tarball:

```bash
npm pack
```

Install it in another local React app:

```bash
npm install ../design-system-ai-lab/design-system-ai-lab-0.3.0.tgz
```

Then import from the package root:

```tsx
import { Button, WorkspaceShell } from "design-system-ai-lab";
import "design-system-ai-lab/styles.css";
```

---

## Main commands

```bash
npm install
npm run dev
npm run storybook
npm run build-storybook
npm run build
npm run build:ds
npm pack --dry-run
npm pack
```

---

## Demo narrative

The demo should not be presented as:

> AI can generate screens automatically.

It should be presented as:

> A controlled design system can make AI-generated interfaces more consistent,
> reusable and aligned with UX intent.

The key point is:

> The designer does not disappear from the production process. The designer moves
> upstream: from producing every screen manually to designing the system that
> makes generated screens coherent.

---

## Current status

This project is still a design system lab, but it now covers the core workflow:

```txt
coded design system
→ documented Storybook
→ reusable package
→ Make-ready guidelines
→ golden examples
→ AI-assisted screen composition
```

Current limitations:

- there is no formal visual regression setup yet
- accessibility is supported by component choices but not fully audited
- Figma Make integration still requires Make kit configuration and validation
- business patterns are intentionally focused on service / customer monitoring examples
- golden examples are reference outputs, not production screens
