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
- machine-readable generation contracts
- Make-ready prompts and benchmark cases
- acceptance and repair checklists
- tested golden examples

The designer remains responsible for UX judgment, hierarchy, validation and final quality.

---

## What is new in v0.5.0

Version `0.5.0` introduces the **Controlled Generation Standard**.

The project now includes:

- machine-readable generation contracts
- stricter critical component props
- tested golden examples
- Figma Make benchmark cases
- generation scoring model
- repair routing
- Make Minimal Contract

The new standard makes generated screens easier to review, test, repair and reject when they break trust, evidence, package or actionability rules.

The core release idea is:

```txt
Prompt
→ controlled generation
→ blocking review
→ scoring
→ repair routing
→ revised generation
→ final decision
```

---

## What changed from v0.4 to v0.5

v0.5 moves the project from documented guidance to testable generation governance.

Key changes:

- `contracts/` contains machine-readable generation rules.
- critical props now use stricter shared TypeScript types.
- `guidelines/make-minimal-contract.md` is the first Make reading target.
- golden examples are tested as compliance fixtures.
- `benchmarks/figma-make/` defines benchmark cases and scoring.
- `guidelines/evaluation/review/repair-routing.md` maps failures to repair prompts.
- free-text statuses are deprecated for trust, proof, validation and action-critical fields.

Migration details live in:

```txt
guidelines/migration/v0.4-to-v0.5.md
```

---

## What v0.5.1 hardens

The `v0.5.1` workstream hardens documentation for generative AI.

The goal is stricter alignment between:

```txt
exports
→ component contracts
→ props contracts
→ guidelines
→ README guidance
```

Preferred generation vocabulary:

```txt
Page intent → PageHeading
Selected item detail → WorkspaceDetailPanel
Compact signal group → MetricStrip with CompactMetric
Asset hierarchy → ComponentHierarchy
Repeated review objects → ListContainer with approved row components
Follow-through actions → ActionRow or StickyActionBar
```

Use with care:

```txt
PageHeader → legacy page header, not the default for new decision workspaces
DetailPanel → lower-level primitive, not the default selected-item detail panel
ComponentHierarchyItem → use only inside ComponentHierarchy
Card → emphasis container, not the default repeated-object layout
```

Current audit:

```txt
docs/archive/v0.5.1-hardening/v0.5.1-guidelines-alignment-audit.md
```

---

## What this project demonstrates

This project demonstrates the full chain:

```txt
Design foundations
→ React component package
→ Storybook documentation
→ screen architecture rules
→ Make-ready guidelines
→ machine-readable contracts
→ tested golden examples
→ benchmark and repair loop
→ controlled AI-assisted screen generation
```

It includes:

- a coded React design system
- CSS design tokens
- Radix UI primitives for accessible interactions
- Storybook documentation
- form components for generated dialogs
- composition components for decision workspaces
- compact primitives for dense B2B screens
- decision components for risks, recommendations, signals and actions
- business patterns for service / customer monitoring use cases
- Make-ready guidelines and prompts
- repair prompts for common generation failures
- golden examples rendered in Storybook and tested by generation rules
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
- machine-readable contracts define testable boundaries
- AI tools compose first drafts
- designers review, repair and validate the result

The AI should not generate from imagination.

It should generate from a governed system.

---

## Figma Make reading order

Use this order when giving context to Figma Make:

```txt
guidelines/make-minimal-contract.md
guidelines/Guidelines.md
guidelines/setup.md
guidelines/reference/screen-architecture/README.md
guidelines/evaluation/review/blocking-checklist.md
```

Use contracts for automated checks and future tooling:

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
    types/
    index.ts
    styles.css

guidelines/
  make-minimal-contract.md
  Guidelines.md
  setup.md
  migration/
  prompts/
  repair-prompts/
  review/
  examples/golden/
  knowledge/

contracts/
  *.contract.json

benchmarks/
  figma-make/
    cases/
    outputs/
    evaluations/
    scoring/

docs/
  audit/
  release/
```

Important distinction:

```txt
src/design-system/
= package source code

guidelines/
= active Make-ready governance and AI-facing source of truth

contracts/
= machine-readable form of the active rules

benchmarks/figma-make/
= measurement harness, not reusable prompt guidance

docs/audit/
= alignment audits and hardening backlog

docs/release/
= release operations and publication checklist
```

---

## Package public API

Import components from the package root:

```tsx
import {
  WorkspaceShell,
  PageHeading,
  FilterBar,
  MasterDetailLayout,
  WorkspaceDetailPanel,
  ListContainer,
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

## Golden examples

Golden examples live in:

```txt
guidelines/examples/golden/
```

Current golden examples:

```txt
customer-monitoring.App.tsx
renewal-risk-review.App.tsx
asset-recommendation-review.App.tsx
qbr-readiness.App.tsx
installed-base-explorer.App.tsx
```

They are tested by the generation rule suite and rendered in Storybook under:

```txt
Design System / Golden Examples
```

---

## Figma Make benchmark

Benchmark cases live in:

```txt
benchmarks/figma-make/cases/
```

The scoring model lives in:

```txt
benchmarks/figma-make/scoring/scoring-model.md
```

Use benchmark outputs to measure whether Figma Make follows the Controlled Generation Standard in normal and adversarial prompts.

---

## Release documentation

Release and migration documents:

```txt
CHANGELOG.md
guidelines/migration/v0.4-to-v0.5.md
docs/release/v0.5.0-release-checklist.md
```

---

## Tech stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Radix UI
- Storybook
- Vitest generation checks
- explicit TypeScript declaration generation for the package build

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

## Test and validate

Run the full local check:

```bash
npm run check
```

Run generation tests:

```bash
npm run test:generation
```

Run a generated benchmark output through the generation checks:

```bash
GENERATED_APP_PATH=benchmarks/figma-make/outputs/01-customer-monitoring.App.tsx npm run test:generation
```

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
npm install ../design-system-ai-lab/design-system-ai-lab-0.5.0.tgz
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
npm run test
npm run check
npm pack --dry-run
npm pack
```

---

## Current status

This project is still a design system lab, but v0.5.0 now covers the core controlled generation workflow:

```txt
coded design system
→ Make-ready guidelines
→ machine-readable contracts
→ strict critical props
→ tested golden examples
→ benchmark cases
→ scoring model
→ repair routing
→ controlled AI-assisted screen composition
```

Current limitations:

- there is no formal visual regression setup yet
- accessibility is supported by component choices but not fully audited
- Figma Make integration still requires real Make validation
- business patterns are intentionally focused on service / customer monitoring examples
- golden examples are reference outputs, not production screens
