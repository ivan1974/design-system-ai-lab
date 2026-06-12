# Reboot roadmap — Design System AI Lab

## Status

This branch rebuilds the project from the Figma Make Installed Base Intelligence prototype.

The previous repository state is preserved in:

```txt
legacy/pre-reboot-main
```

This reboot does not migrate the previous repository as-is. It uses the previous work as a source of reusable rules, contracts, principles and benchmarks.

## Core decision

```txt
Figma Make zip prototype = product source
Previous repository = rule and knowledge library
New branch = clean React/Vite design system package
```

## Reboot objective

Rebuild a small, strict and extensible React/Vite design system and Figma Make kit for generating controlled Installed Base Intelligence screens.

The first target is not a generic component library.

The first target is a product-grounded screen system derived directly from the Installed Base Intelligence prototype.

## Founding screen

```txt
Installed Base Intelligence
```

Required screen layers:

```txt
1. Main Navigation
2. Page Header
3. View & Filter Bar
4. Installed Base List
5. Asset Detail Panel
```

## Rebuild direction

The new project must follow this order:

```txt
prototype real source
→ component extraction
→ tokens
→ props
→ patterns
→ guidelines
→ contracts
→ tests
→ Make kit
```

It must not follow this order:

```txt
GenAI rules
→ abstract contracts
→ generic components
→ attempt to recreate the prototype
```

## What must be preserved from the previous repository

Keep as reference:

```txt
guidelines/Guidelines.md
guidelines/runtime/generation-contract.md
guidelines/runtime/generation-flow.md
guidelines/runtime/component-selection.md
guidelines/runtime/trust-action-rules.md
guidelines/runtime/visual-rules.md
guidelines/runtime/progressive-decision-disclosure.md

contracts/screen-contracts/installed-base-intelligence.contract.json
contracts/installed-base-domain.contract.json
contracts/generation-blockers.contract.json

benchmarks/figma-make/cases/12-17
evaluation/review/
evaluation/repair/
```

Keep as human reference, not runtime generation input:

```txt
principles
knowledge
design insights
domain insights
research notes
```

## Runtime generation boundary

Figma Make should read little.

By default, Figma Make should only read the active runtime guidelines and the relevant screen contract.

Knowledge and principles are not runtime generation instructions. They are references for designers, reviewers and future guideline evolution.

## New principle

Decision-first, then proof.

Decision components must first help the user understand:

```txt
what requires attention
what decision or action is proposed
why it matters now
```

Then they may progressively expose:

```txt
evidence
sources
freshness
confidence or source strength
limitations
human validation
supporting details
```

The decision structures the interface.

The proof supports the decision.

The proof must not become the interface.

## Rebuild phases

### Phase 0 — Freeze

Do not repair the old repository.

Preserve the old repository state and work only on the reboot branch.

### Phase 1 — Clean import of the Figma Make prototype

Goal:

```txt
Run the prototype exactly as-is before design-system extraction.
```

Tasks:

```txt
clean package metadata
preserve the visual and interactive prototype
move prototype source material into docs/source/prototype
keep App.tsx as demo
avoid premature abstraction
```

### Phase 2 — Minimal design system extraction

Goal:

```txt
Extract components without changing the UI.
```

Order:

```txt
1. tokens
2. Button / Badge / Pill / Tag
3. MainNavigation
4. InstalledBaseHeader
5. ViewFilterBar
6. AllFiltersPanel
7. AssetInventoryRow
8. AssetDetailPanel
9. InstalledBaseWorkspace
```

### Phase 3 — Guidelines

Goal:

```txt
Document only what exists.
```

Initial files:

```txt
guidelines/Guidelines.md
guidelines/setup.md
guidelines/tokens.md
guidelines/styles.md
guidelines/runtime/generation-contract.md
guidelines/runtime/component-selection.md
guidelines/runtime/visual-rules.md
guidelines/runtime/progressive-decision-disclosure.md
guidelines/runtime/decision-first-then-proof.md
guidelines/reference/screen-contracts/installed-base-intelligence.md
```

### Phase 4 — Contracts

Goal:

```txt
Turn design and generation decisions into verifiable rules.
```

Priority contracts:

```txt
component-registry.contract.json
props.contract.json
installed-base-domain.contract.json
installed-base-intelligence.contract.json
generation-blockers.contract.json
```

### Phase 5 — Make kit

Goal:

```txt
Allow Figma Make to generate a compliant Installed Base Intelligence screen using only the package and the guidelines.
```

### Phase 6 — Controlled extension

Only after Installed Base Intelligence is stable, extend toward other screens:

```txt
Customer Success Plan
Recommendation Review
Renewal Risk
QBR Readiness
Action Follow-up
Service Risk Review
```

Every new screen must follow the same sequence:

```txt
real prototype or reference
→ domain model
→ required components
→ patterns
→ screen contract
→ guidelines
→ tests / benchmarks
```

## Non-negotiable rule

No component enters the new design system unless it can be linked directly to the Installed Base Intelligence prototype.

No guideline enters the runtime path unless it helps Figma Make avoid a concrete generation failure.
