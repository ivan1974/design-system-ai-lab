# Current Production Readiness — v0.6.0

## Purpose

This document freezes the scope and production-readiness expectations for `design-system-ai-lab` v0.6.0.

v0.6.0 is not a component expansion release.

v0.6.0 is a GenAI runtime optimization and production-readiness release.

The goal is to make the Figma Make kit easier for a GenAI to use reliably:

```txt
less context
more control
more testability
```

---

## Release decision

```txt
A Make Kit is not a documentation website.
A Make Kit is a controlled operating system for generation.
```

v0.6.0 must make the kit operate as a controlled generation system, not as a broad documentation corpus.

Figma Make should read a small, stable set of files and should only move to detailed references when needed.

---

## Primary reader

Primary reader:

```txt
GenAI / Figma Make
```

Secondary readers:

```txt
designer
maintainer
reviewer
```

This means v0.6.0 should optimize for:

- short instructions
- stable read order
- explicit blockers
- preferred components
- controlled values
- repair routing
- contract alignment
- testable documentation

---

## Scope freeze

During v0.6.0, do not add:

- new components
- new business patterns
- new prompt families
- new deep UX ambitions
- new visual language
- new domain concepts unless required to fix a blocker

Allowed changes must improve at least one of these areas:

- GenAI readability
- documentation coherence
- runtime guidance
- contracts
- tests
- benchmarks
- repair routing
- legacy removal
- package clarity

---

## Target Make-facing read path

Figma Make must start from the required root files:

```txt
guidelines/Guidelines.md
guidelines/setup.md
guidelines/tokens.md
guidelines/styles.md
```

The active runtime guidance must then live in:

```txt
guidelines/runtime/generation-contract.md
guidelines/runtime/generation-flow.md
guidelines/runtime/component-selection.md
guidelines/runtime/trust-action-rules.md
guidelines/runtime/visual-rules.md
guidelines/runtime/progressive-decision-disclosure.md
```

Detailed documentation must move behind a secondary read path:

```txt
guidelines/reference/
guidelines/source/
guidelines/evaluation/
```

---

## Target information architecture

```txt
guidelines/
  Guidelines.md
  setup.md
  tokens.md
  styles.md

  runtime/
    generation-contract.md
    generation-flow.md
    component-selection.md
    trust-action-rules.md
    visual-rules.md
    progressive-decision-disclosure.md

  reference/
    components/
    composition/
    decision/
    forms/
    patterns/
    screen-architecture/

  source/
    knowledge/
    principles/
    domain-models/
    visual-brand/

  evaluation/
    review/
    repair/
    benchmarks/
```

---

## Mandatory root file responsibilities

### `guidelines/Guidelines.md`

Target role:

```txt
mandatory Make entry point
short router
not full documentation
```

It should contain:

- what this kit generates
- mandatory read order
- non-negotiable blockers
- default generation flow
- task router
- repair instruction

It should not contain:

- long component lists
- duplicated setup instructions
- deep research context
- full principle explanations
- detailed component guidance

### `guidelines/setup.md`

Target role:

```txt
package setup only
```

It should contain:

- install
- imports
- stylesheet import
- public entry points
- forbidden imports
- no local design system rule

It should not contain:

- long generation strategy
- detailed component selection
- repeated trust or visual rules

### `guidelines/tokens.md`

Target role:

```txt
token reference, not visual strategy
```

It should state:

- use package tokens through components
- do not invent token values
- do not create a local token system
- use components before custom CSS

### `guidelines/styles.md`

Target role:

```txt
CSS usage contract
```

It should state:

- import styles once
- use package stylesheet
- do not recreate package styles
- do not create local visual systems
- do not override tokens unless explicitly requested

---

## Runtime guidance required for v0.6.0

v0.6.0 must create or promote these runtime files:

| File | Role |
|---|---|
| `runtime/generation-contract.md` | Minimal blocking generation contract |
| `runtime/generation-flow.md` | Default reasoning flow for generated screens |
| `runtime/component-selection.md` | Short component and pattern selection table |
| `runtime/trust-action-rules.md` | Evidence, trust and ownership rules |
| `runtime/visual-rules.md` | Active visual generation rules |
| `runtime/progressive-decision-disclosure.md` | Prevent information overload in decision screens |

Each runtime file should fit within one to two screens of reading.

---

## Source and reference classification

### Source files

Source files explain why the system exists and what informed it.

They must not be required for default Make generation.

```txt
guidelines/source/knowledge/
guidelines/source/principles/
guidelines/source/domain-models/
guidelines/source/visual-brand/
```

### Reference files

Reference files explain detailed component, pattern and screen usage.

They are read only when needed.

```txt
guidelines/reference/components/
guidelines/reference/composition/
guidelines/reference/decision/
guidelines/reference/forms/
guidelines/reference/patterns/
guidelines/reference/screen-architecture/
```

### Evaluation files

Evaluation files support review, repair and benchmark loops.

```txt
guidelines/evaluation/review/
guidelines/evaluation/repair/
guidelines/evaluation/benchmarks/
```

---

## Contracts required for v0.6.0

v0.6.0 should introduce or align the following contracts:

```txt
contracts/component-registry.contract.json
contracts/domain-model.contract.json
contracts/visual-rules.contract.json
contracts/story-coverage.contract.json
contracts/benchmark.contract.json
```

Existing contracts to preserve and align:

```txt
contracts/package.contract.json
contracts/components.contract.json
contracts/props.contract.json
contracts/screen-architecture.contract.json
contracts/evidence-and-trust.contract.json
contracts/generation-blockers.contract.json
```

Contracts are not a second source of truth.

They are the testable form of active generation rules.

---

## Production-readiness gates

### Gate 1 — Runtime clarity

Passes if:

- `Guidelines.md` is a short router
- mandatory read order is explicit
- runtime files exist
- runtime files do not duplicate long source files
- source files are not required for default generation

### Gate 2 — Source-of-truth clarity

Passes if:

- source, reference, runtime and evaluation files have distinct roles
- no audit file is referenced as an active source guideline
- no legacy migration file is in the active Make read path
- high-level principles are translated into runtime rules

### Gate 3 — Component registry

Passes if:

- every public export is represented in the registry
- each entry has a GenAI status
- preferred components have guideline and story references
- use-with-care and deprecated components are clearly marked
- internal-only components are blocked for GenAI generation

### Gate 4 — Domain semantics

Passes if the system prevents critical confusion between:

- Action and Recommendation
- Evidence and Proof
- Source strength and AI confidence
- Expected outcome and proven value
- Asset health and asset intelligence
- Customer readiness and validation status

### Gate 5 — Visual rules

Passes if generated screens are blocked or repaired when they use:

- glassmorphism
- decorative gradients
- shadow-heavy layouts
- local brand wrappers
- green as decoration
- visual emphasis that overstates weak evidence

### Gate 6 — Story coverage

Passes if:

- preferred components have Storybook proof
- allowed components have story coverage or explicit rationale
- story coverage is contract-backed, not just name-based

### Gate 7 — Benchmark coverage

Passes if benchmarks cover:

- first generation
- iterative adjustment
- context drift after multiple changes
- invented evidence
- local design system creation
- visual overbranding
- information overload

### Gate 8 — Repair loop

Passes if repair routing covers:

- import failure
- local design system
- generic dashboard
- card stack
- missing evidence
- invented evidence
- missing ownership
- visual drift
- information overload
- context drift

---

## v0.6.0 non-goals

Do not use v0.6.0 to:

- redesign all decision components
- refactor all business patterns
- introduce full progressive disclosure modes across the component library
- add new component families
- expand visual branding
- add new domain areas
- optimize for documentation completeness over generation control

The only progressive disclosure work allowed in v0.6.0 is a short runtime principle and an overload benchmark.

Full component-level progressive disclosure belongs to v0.7.0.

---

## Definition of done

v0.6.0 is ready when:

```txt
Guidelines.md is short and acts only as router.
setup.md only explains package setup.
tokens.md and styles.md are short and non-generative.
runtime/ contains the active GenAI operating rules.
source/ is never required for default generation.
visual-brand v0.4 is archived as source and translated into runtime visual rules.
component-registry.contract.json covers every public export.
domain-model.contract.json prevents semantic confusion.
visual-rules.contract.json prevents visual drift.
deprecated prop values are blocked for GenAI.
preferred components have story coverage.
benchmarks include context drift and information overload.
repair-router is short.
docs/audit/v0.5.1-* are archived.
No audit file is referenced as an active source guideline in contracts.
```

---

## Current release status

```txt
Status: scoped
Release: v0.6.0
Focus: GenAI Runtime Optimization
Expansion: frozen
Component additions: frozen
Pattern additions: frozen
Prompt additions: frozen
Deep UX refactor: deferred to v0.7.0
```
