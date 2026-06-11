# Design System AI Lab

Design System AI Lab is a React and TypeScript design system package for controlled AI-assisted interface generation.

It explores how a coded design system can become a **Make Kit** for tools such as Figma Make: a small, governed operating system that helps GenAI compose useful interface drafts from package components, runtime rules, contracts, benchmarks and repair prompts.

## Status

```txt
Public package.
Active development.
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
v0.6.0 builds the operating system.
v0.7.0 improves the decision experience.
```

### v0.6.0 — GenAI Runtime Optimization

The current workstream makes the kit shorter, clearer and more testable for GenAI.

It focuses on:

- mandatory Make entry files
- runtime generation rules
- component selection rules
- evidence and trust rules
- visual drift prevention
- package surface cleanup
- benchmark cases
- repair routing
- machine-readable contracts

It does **not** refactor the full component library or introduce deep progressive disclosure component APIs.

### v0.7.0 — Decision Progressive Disclosure

The next workstream should improve decision-heavy components and patterns with:

- decision-first layouts
- evidence second
- detail on demand
- information density tests
- progressive disclosure modes where needed

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
  PageHeading,
  FilterBar,
  MasterDetailLayout,
  WorkspaceDetailPanel,
  ListContainer,
  ActionRow,
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

For v0.6.0, Figma Make should read little and always start from the same active runtime path.

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

## What not to read by default

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

The active v0.6.0 case set covers:

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
```

Benchmark outputs should be saved in:

```txt
benchmarks/figma-make/outputs/
```

Run a generated benchmark output through the generation checks:

```bash
GENERATED_APP_PATH=benchmarks/figma-make/outputs/01-first-generation-customer-monitoring.App.tsx npm run test:generation
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

---

## Golden examples

Golden examples live in:

```txt
guidelines/examples/golden/
```

They are test fixtures for generation rules. They should represent valid package usage and current v0.6.0 constraints.

Current cleanup status:

```txt
Golden examples are still under Phase 12 review.
Some examples may be removed or reduced before v0.6.0 is finalized.
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
- business patterns are intentionally focused on service and customer monitoring examples
- some Phase 12 cleanup is still in progress before v0.7.0 starts

---

## Release intent

The v0.6.0 target is a clean GenAI runtime operating system.

The project is ready for experimentation when:

```txt
npm run check passes
benchmarks are aligned with contracts
README reflects v0.6.0
legacy prompts and examples are cleaned
source files are clearly non-runtime
deprecated generated values are blocked
```

It should become production-consumable only after explicit release hardening, API stability review, accessibility review and real integration validation.
