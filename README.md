# Design System AI Lab

Design System AI Lab is a React and TypeScript design system package for controlled AI-assisted interface generation.

It explores how a coded design system can become a **Make Kit** for tools such as Figma Make: a small, governed operating system that helps GenAI compose useful interface drafts from package components, runtime rules, contracts, benchmarks and repair prompts.

## Status

```txt
Public package.
Active development.
v0.7.0-alpha.0.
Not production-ready.
Do not use this package as a finished production design system.
```

This project is currently a design system lab and Make Kit workbench. APIs, contracts, prompts, examples and guidance may still change before a production-ready release.

The package is public so the system can be tested, inspected and reused experimentally, but it should not be treated as a stable product dependency for production applications.

---

## Core idea

The goal is not to let AI invent interfaces from scratch.

The goal is to help AI compose first drafts from a governed system of:

- package components
- composition primitives
- decision components
- business patterns
- design tokens
- screen architecture rules
- screen contracts
- machine-readable contracts
- review and repair loops
- benchmark cases
- tested examples

The designer remains responsible for UX judgment, hierarchy, validation and final quality.

```txt
A Make Kit is not a documentation website.
A Make Kit is a controlled operating system for generation.
```

---

## Current roadmap position

```txt
v0.6.0 built the GenAI operating system.
v0.7.0-alpha.0 adds Installed Base Intelligence as a closed screen contract.
```

### v0.7.0-alpha.0 — Installed Base Intelligence alpha

The current alpha stabilizes a screen-level contract for Installed Base Intelligence.

It includes:

- Installed Base domain model and controlled values
- screen contract for the five-layer Installed Base Intelligence experience
- screen-level Storybook proof
- golden example app
- asset list, filter panel and asset detail analysis panel patterns
- six asset states
- third-party mandatory value rules
- Health facts-only and Intelligence decision-oriented separation
- benchmark cases 12–17
- Installed Base repair prompts

### v0.6.0 — GenAI Runtime Optimization

v0.6.0 made the kit shorter, clearer and more testable for GenAI.

It focused on:

- mandatory Make entry files
- runtime generation rules
- component selection rules
- evidence and trust rules
- visual drift prevention
- package surface cleanup
- benchmark cases
- repair routing
- machine-readable contracts

---

## Package usage

Install dependencies locally:

```bash
npm install
```

Build the package:

```bash
npm run build:ds
```

Import components from the public package root only:

```tsx
import {
  WorkspaceShell,
  MainNavigation,
  InstalledBaseHeader,
  InstalledBaseViewFilterBar,
  InstalledBaseList,
  AllFiltersPanel,
  AssetDetailAnalysisPanel,
} from "design-system-ai-lab";
```

Import styles once near the root of the consuming app:

```tsx
import "design-system-ai-lab/styles.css";
```

Do not import from internal package paths:

```tsx
// Do not do this.
import { Button } from "design-system-ai-lab/dist/components/button";
import { Button } from "design-system-ai-lab/src/design-system/components/button";
```

---

## Figma Make reading order

Figma Make should read little and always start from the same active runtime path.

Default reading order:

```txt
guidelines/Guidelines.md
guidelines/setup.md
guidelines/tokens.md
guidelines/styles.md
guidelines/runtime/generation-contract.md
guidelines/runtime/generation-flow.md
guidelines/runtime/component-selection.md
guidelines/runtime/trust-action-rules.md
guidelines/runtime/visual-rules.md
guidelines/runtime/progressive-decision-disclosure.md
```

For Installed Base Intelligence, also read:

```txt
guidelines/reference/screen-contracts/installed-base-intelligence.md
guidelines/source/domain-models/installed-base.md
contracts/installed-base-domain.contract.json
contracts/screen-contracts/installed-base-intelligence.contract.json
```

Use reference files only when the task requires a specific component, pattern or screen architecture detail.

Use evaluation files only when reviewing or repairing a generated screen.

Use contracts for automated checks and future tooling.

---

## Active project structure

```txt
src/design-system/
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
  Guidelines.md
  setup.md
  tokens.md
  styles.md
  runtime/
  reference/
  evaluation/
  source/
  examples/golden/

contracts/
  *.contract.json

benchmarks/figma-make/
  cases/
  outputs/
  evaluations/
  scoring/
  templates/

docs/
  audit/
  archive/
```

Important distinction:

```txt
guidelines/runtime/
= active GenAI operating rules

guidelines/reference/
= component, pattern and architecture guidance

guidelines/evaluation/
= review and repair guidance

guidelines/source/
= non-runtime rationale, domain models, principles and source knowledge

contracts/
= machine-readable rules and package boundaries

benchmarks/figma-make/
= fixed scoring cases and evaluation protocol

docs/archive/
= historical material, not active guidance
```

---

Figma Make should not read the whole repository.

Do not use these as default generation context:

```txt
docs/archive/
docs/audit/
guidelines/source/
src/design-system/stories/
src/demo/
```

Read `guidelines/source/` only when a human explicitly needs rationale, source knowledge or domain-model background.

---

## Benchmarks

Active fixed benchmark cases live in:

```txt
benchmarks/figma-make/cases/
```

The active v0.7.0-alpha.0 case set covers:

```txt
01-first-generation-customer-monitoring.md
02-first-generation-renewal-risk.md
03-first-generation-asset-recommendation.md
04-iteration-add-filter-without-breaking-layout.md
05-iteration-add-detail-panel-without-card-stack.md
06-iteration-change-priority-without-inventing-evidence.md
07-adversarial-local-components.md
08-adversarial-invented-evidence.md
09-adversarial-visual-overbranding.md
10-adversarial-context-drift-after-3-adjustments.md
11-adversarial-information-overload.md
12-installed-base-intelligence-closed-spec.md
13-adversarial-installed-base-local-components.md
14-adversarial-installed-base-generic-dashboard.md
15-adversarial-installed-base-third-party-overclaim.md
16-adversarial-installed-base-health-intelligence-mixing.md
17-adversarial-installed-base-extra-actions-filters-tabs.md
```

Benchmark outputs should be saved in:

```txt
benchmarks/figma-make/outputs/
```

Run a generated benchmark output through the generation checks:

```bash
GENERATED_APP_PATH=benchmarks/figma-make/outputs/12-installed-base-intelligence-closed-spec.App.tsx npm run test:generation
```

---

## Review and repair

Generated screens should be rejected and repaired when they break core rules.

Start with:

```txt
guidelines/evaluation/review/blocking-checklist.md
```

Route repairs through:

```txt
guidelines/evaluation/repair/repair-router.md
```

The repair router is intentionally short. It helps GenAI repair a specific failure without rereading the full documentation.

Installed Base repair prompts cover:

```txt
installed-base-local-components.md
installed-base-generic-dashboard.md
installed-base-third-party-overclaim.md
installed-base-health-intelligence-mixing.md
installed-base-extra-controls.md
```

---

## Golden examples

Golden examples live in:

```txt
guidelines/examples/golden/
```

They are test fixtures for generation rules. They should represent valid package usage and current v0.7.0-alpha.0 constraints.

Current active golden examples:

```txt
customer-monitoring.App.tsx
renewal-risk-review.App.tsx
asset-recommendation-review.App.tsx
installed-base-intelligence.App.tsx
```

---

## Main commands

Run the local app:

```bash
npm run dev
```

Run Storybook:

```bash
npm run storybook
```

Build Storybook:

```bash
npm run build-storybook
```

Build the package:

```bash
npm run build:ds
```

Run generation tests:

```bash
npm run test:generation
```

Run the full local check:

```bash
npm run check
```

Inspect the package contents before publishing:

```bash
npm pack --dry-run
```

Publish the alpha package with the `next` tag:

```bash
npm publish --tag next
```

---

## Package surface

The package intentionally publishes a limited Make Kit surface:

```txt
dist
README.md
CHANGELOG.md
contracts
benchmarks/figma-make
guidelines/Guidelines.md
guidelines/setup.md
guidelines/tokens.md
guidelines/styles.md
guidelines/runtime
guidelines/reference
guidelines/evaluation
guidelines/source
```

Historical docs, release checklists and archived audits are not part of the package surface.

---

## Current limitations

This project is not production-ready.

Known limitations:

- no formal production support policy
- no semantic versioning guarantee yet
- no visual regression setup yet
- accessibility is supported by component choices but not fully audited
- Figma Make integration still requires real Make validation
- business patterns are intentionally focused on service, customer monitoring and Installed Base Intelligence examples
- Storybook chunk-size warnings are not yet optimized

---

## Release intent

The v0.7.0-alpha.0 target is a public alpha of the Installed Base Intelligence Make Kit surface.

The project is ready for alpha publication when:

```txt
npm run check passes
npm run build-storybook passes
npm pack --dry-run has the expected surface
README reflects v0.7.0-alpha.0
contracts reflect v0.7.0-alpha.0
Installed Base screen contract is benchmarked and repairable
```

It should become production-consumable only after explicit release hardening, API stability review, accessibility review and real integration validation.
