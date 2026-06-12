# Reboot roadmap — Design System AI Lab

## Status

This branch rebuilds the project from the Figma Make Installed Base Intelligence prototype.

The previous repository state is preserved in:

```txt
legacy/pre-reboot-main
```

This reboot does not migrate the previous repository as-is. It uses the previous work as a source of reusable components, rules, contracts, principles, domain knowledge and benchmarks.

## Core decision

```txt
Figma Make zip prototype = product reference source
Previous repository = design system knowledge and rule library
New branch = clean React/Vite GenAI-ready design system package
```

## Reboot objective

Rebuild a small, strict where needed, and extensible React/Vite design system and Figma Make kit for helping GenAI generate better product screens.

The goal is not to restrict GenAI to component assembly.

The goal is to make GenAI design with the knowledge of the design system.

This means the system must provide:

```txt
components = reliable interface material
patterns = reusable composition structures
principles = design judgment
knowledge = domain, user and product context
contracts = guardrails against critical generation failures
```

The first target is not a generic component library.

The first target is a product-grounded screen system derived directly from the Installed Base Intelligence prototype.

## Founding screen

```txt
Installed Base Intelligence
```

Required reference layers:

```txt
1. Main Navigation
2. Page Header
3. View & Filter Bar
4. Installed Base List
5. Asset Detail Panel
```

These layers define the first product reference. They are not meant to make every future screen follow the same structure.

## Reference files are not the generation API

The imported prototype files under `src/app` are product reference material.

They should not be exposed to GenAI as mandatory building blocks.

They should be analyzed to extract:

```txt
reliable components where useful
reusable patterns where structure matters
principles where design judgment matters
domain knowledge where meaning matters
contracts where failure prevention matters
benchmarks where evaluation matters
```

The goal is not to make GenAI assemble the prototype.

The goal is to make GenAI learn from the prototype, then design with the system’s components, patterns, principles, knowledge and guardrails.

Expected boundary:

```txt
src/app/* = product reference and demo app
src/design-system/* = reusable interface material
guidelines/* = design judgment and generation guidance
contracts/* = guardrails and verifiable rules
docs/* = source knowledge, decisions and rationale
```

## Rebuild direction

The new project must follow this order:

```txt
real product reference
→ component extraction
→ tokens
→ props
→ patterns
→ principles
→ knowledge
→ guidelines
→ guardrail contracts
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

The prototype is the starting point, but the target is broader than reproducing one screen.

The target is a GenAI-ready design system that helps an assistant reason with the design system’s components, patterns, principles and domain knowledge.

## What must be preserved from the previous repository

Keep as reusable generation and review material:

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

Keep as design knowledge, not as default execution rules:

```txt
principles
knowledge
design insights
domain insights
research notes
```

## Knowledge and principles boundary

Figma Make should still read little.

But knowledge and principles are not merely human archive material.

They are design knowledge that can guide reasoning, review and screen improvement when the task requires judgment beyond direct component assembly.

By default, Figma Make should start with the active guidelines and the relevant screen or pattern reference.

It may then use principles and knowledge selectively when the task requires:

```txt
screen strategy
new screen type exploration
recommendation or decision component design
UX improvement
review and repair
pattern extension
domain interpretation
```

Knowledge and principles must not be treated as uncontrolled prompt context.

They should be structured and routed so the assistant reads the smallest useful source for the design problem.

## Generation philosophy

The project moves from controlled generation to guided design generation.

```txt
controlled generation = assemble only what is explicitly allowed
guided design generation = prefer approved components, apply DS principles, use domain knowledge, and respect critical guardrails
```

GenAI should prefer approved components and patterns.

It should apply design system principles when choosing hierarchy, density, disclosure, evidence, interaction and layout.

It may propose a new pattern or component candidate only when the design system does not yet cover the user need.

When it proposes a new candidate, it must explain:

```txt
what user need is not covered
why existing components are insufficient
which DS principles it follows
which future component or pattern should be extracted
```

## Contracts as guardrails

Contracts are not meant to turn the system into a rigid screen generator.

They should separate non-negotiable guardrails from quality guidance.

Non-negotiable guardrails include:

```txt
no invented evidence
no invented sources
no internal imports
no local design system clone
controlled domain values where required
minimum accessibility requirements
facts vs interpretation separation
no misleading value claims
```

Quality guidance includes:

```txt
recommended hierarchy
preferred components
preferred density
preferred disclosure model
recommended layout
white-first visual system
decision-first, then proof
```

A generated screen may diverge from quality guidance if there is a clear UX reason.

A generated screen must respect the non-negotiable guardrails.

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

This principle does not replace evidence and trust.

It clarifies the hierarchy:

```txt
Decision-first, then proof = what should the user understand or decide first?
Evidence and trust = can the user trust this information or recommendation?
```

## Updated project formula

```txt
The zip grounds the product reference.
Components give GenAI reliable interface material.
Patterns give GenAI reusable composition structures.
Principles give GenAI design judgment.
Knowledge gives GenAI domain, user and product context.
Contracts prevent critical generation failures.
```

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
Extract reliable interface material without changing the UI.
```

The extracted components are not the generation API by themselves.

They are reliable interface material that GenAI must use together with patterns, principles, domain knowledge and guardrails.

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

Extraction rule:

```txt
Do not abstract before a real product need exists.
Do not expose raw src/app prototype files as mandatory generation building blocks.
```

Generated UI audit rule:

```txt
After each replacement of generated Figma or shadcn UI support code with a design-system primitive, audit the related src/app/components/ui/* material.
```

The audit must identify:

```txt
which generated UI files are still used
which files duplicate current or future design-system primitives
which files are only generated support code
which files should be kept temporarily, migrated, archived or deleted
```

Do not delete generated UI support files one by one without this audit.

The intended long-term state is:

```txt
src/design-system/primitives/* = runtime design-system primitive source
src/app/components/ui/* = temporary generated support layer or removed
```

### Phase 3 — Patterns, principles and knowledge

Goal:

```txt
Document what the prototype teaches, not only what it contains.
```

This phase must capture:

```txt
screen composition patterns
information hierarchy decisions
operational density rules
facts vs interpretation boundaries
decision-first, then proof
white-first visual system
domain concepts
user needs
open questions
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

docs/foundation-principles/
docs/domain-knowledge/
docs/decisions/
```

### Phase 4 — Guardrail contracts

Goal:

```txt
Turn critical design and generation decisions into verifiable guardrails.
```

Priority contracts:

```txt
component-registry.contract.json
props.contract.json
installed-base-domain.contract.json
installed-base-intelligence.contract.json
generation-blockers.contract.json
```

Contracts must distinguish:

```txt
non-negotiable guardrails = must always be respected
quality guidance = preferred behavior that can be justified when adapted
```

### Phase 5 — Make kit

Goal:

```txt
Allow Figma Make to generate a strong Installed Base Intelligence screen using the package, patterns, principles, knowledge and guardrails.
```

The Make kit should not merely assemble approved components.

It should help GenAI:

```txt
select relevant components
compose them into a useful screen
apply design system principles
use domain knowledge appropriately
avoid critical generation failures
explain new candidate patterns when needed
```

### Phase 6 — Guided extension

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
→ principles
→ knowledge
→ screen guidance or guardrails
→ guidelines
→ tests / benchmarks
```

Example: Customer Success Plan is not just a variant of Installed Base Intelligence.

Installed Base Intelligence answers:

```txt
What assets do we have?
What is their condition?
What requires attention?
What should be done next?
```

Customer Success Plan answers:

```txt
What outcomes are we trying to achieve?
What recommendations support those outcomes?
What actions are agreed?
What value is being delivered over time?
```

It will need its own domain model, for example:

```txt
customer objective
success milestone
recommendation
action plan
owner
due date
proof point
value outcome
review status
```

## Non-negotiable rule

No component enters the new design system unless it can be linked to a real product need.

For the first release, that product need must come from the Installed Base Intelligence prototype.

No runtime guideline enters the default generation path unless it helps Figma Make avoid a concrete generation failure or make a materially better design decision.
