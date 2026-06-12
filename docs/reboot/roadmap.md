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

After the first runtime extraction, the target must expand into a generic component vocabulary.

```txt
Product-grounded extraction first.
Generic component vocabulary second.
GenAI-facing guidelines and contracts third.
```

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

The project must follow this order:

```txt
real product reference
→ runtime extraction
→ generic component vocabulary
→ reusable patterns
→ principles and knowledge routing
→ GenAI-facing guidelines
→ guardrail contracts
→ tests / benchmarks
→ Make kit
```

It must not follow this order:

```txt
GenAI rules
→ abstract contracts
→ generic components detached from product use
→ attempt to recreate the prototype
```

The prototype is the starting point, but the target is broader than reproducing one screen.

The target is a GenAI-ready design system that helps an assistant reason with the design system’s generic components, patterns, principles and domain knowledge.

## Control model

The project must never lose control of context as it advances.

Each phase must state:

```txt
objective = what we are trying to achieve
intention = why it matters for GenAI and product quality
scope = what is included
non-scope = what is deliberately excluded
source of truth = which files or decisions guide the work
acceptance criteria = how we know the phase is complete
stop conditions = when to pause before continuing
```

Every extraction must preserve:

```txt
build stability
visual parity
interaction parity
source boundary
no premature domain-specific component API
```

Every new component or pattern must answer:

```txt
What user or interface need does it serve?
What data shape does it support?
What interaction does it own?
What remains injected by the app or by the brief?
Why is it generic enough to belong in the design system?
Which guideline will tell GenAI when to use it?
```

## Generic component vocabulary principle

Phase 3 must separate form, data, usage and domain.

```txt
Form = generic UI component
Data = injected content and state
Usage = guidance that says when and why to use a component
Domain = example or context, not a fixed component API
```

This means:

```txt
Do not confuse domain data with domain components.
Do not create a new component only because the text, icon or state is domain-specific.
Do not encode business vocabulary into a component API unless the visual or interaction grammar genuinely requires it.
```

Example:

```txt
Bad target: HealthBadge, DPPStatus, ConnectivityLabel
Good target: StatusBadge, StatusIndicator, DataLabel, SignalDot, ScoreBar
```

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

Objective:

```txt
Preserve the previous repository state and avoid repairing the old project while rebooting.
```

Scope:

```txt
legacy branch
reboot branch
repository reset decisions
```

Acceptance criteria:

```txt
legacy state preserved
reboot branch isolated
no hidden migration from old codebase
```

### Phase 1 — Clean import of the Figma Make prototype

Objective:

```txt
Run the prototype exactly as-is before design-system extraction.
```

Intention:

```txt
Establish a working product reference before abstracting anything.
```

Tasks:

```txt
clean package metadata
preserve the visual and interactive prototype
move prototype source material into docs/source/prototype
keep App.tsx as demo
avoid premature abstraction
```

Acceptance criteria:

```txt
npm run build passes
npm run dev starts
prototype visual behavior preserved
source prototype documented
```

### Phase 2 — Minimal design system extraction

Objective:

```txt
Extract reliable interface material without changing the UI.
```

Intention:

```txt
Create stable runtime material from a real product reference before writing GenAI-facing guidance.
```

The extracted components are not the generation API by themselves.

They are reliable interface material that GenAI must use together with patterns, principles, domain knowledge and guardrails.

During Phase 2, documentation is limited to extraction audits and decision records. GenAI-facing guidelines, contracts and Make kit instructions are created after the runtime design-system material is stable.

Completed extraction order:

```txt
1. tokens
2. Button / Badge / Pill / Tag
3. MainNavigation
4. InstalledBaseHeader
5. ViewFilterBar
6. AllFiltersPanel
7. AssetInventoryRow
8. AssetDetailPanel integration helpers
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

The intended long-term state is:

```txt
src/design-system/primitives/* = runtime design-system primitive source
src/app/components/ui/* = temporary generated support layer or removed
```

Acceptance criteria:

```txt
runtime design-system foundations exist
core primitives are used by the product reference
core extracted components are used through app wrappers
npm run build passes
npm run dev starts
visual parity confirmed
phase decision record exists
```

Stop conditions:

```txt
Do not continue to GenAI-facing guidelines until Phase 3 generic vocabulary direction is agreed.
```

### Phase 3 — Generic component vocabulary

Objective:

```txt
De-specialize the extracted runtime material into a generic, composable component vocabulary that GenAI can select according to brief, data type and recommended usage.
```

Intention:

```txt
Give GenAI a broad but controlled UI vocabulary without turning domain labels into component APIs.
```

This phase must not create fixed business components for every domain label.

It must convert product-grounded extraction into generic forms:

```txt
HealthBadge -> StatusBadge / StatusIndicator
DPPStatus -> DataLabel / StatusBadge
ConnectivityLabel -> SignalDot + StatusIndicator
InstalledBaseViewFilterBar -> ViewSwitcher + FilterToolbar + FilterDropdown
AssetInventoryRow -> DataRow / DataGridRow composition
InstalledBaseWorkspace -> ListDetailWorkspace / FilterableWorkspace pattern
```

#### Phase 3 source of truth

Primary doctrine:

```txt
docs/foundation-principles/generic-component-vocabulary-audit.md
```

Supporting decisions:

```txt
docs/decisions/phase-2-runtime-extraction-record.md
docs/foundation-principles/primitive-audit.md
docs/foundation-principles/generated-ui-layer-follow-up-audit.md
```

#### Phase 3 operating rules

```txt
Separate form from data.
Separate usage guidance from component API.
Keep domain as examples and test data.
Extract generic components only from visible repeated UI grammar or clear product need.
Do not create a component because a domain noun exists.
Do not use generated ui/* as naming or API authority.
Preserve visual and interaction parity after each extraction.
```

#### Phase 3.1 — Generic form and option controls

Goal:

```txt
Extract generic controls that let GenAI represent search, option selection and filter choices without knowing the business domain.
```

Candidates:

```txt
SearchField
Checkbox
CheckboxOption
FilterOption
FilterDropdown
ActiveFilterCount
```

Likely source locations:

```txt
MainNavigation -> SearchField
AllFiltersPanel -> CheckboxOption / FilterOption
ViewFilterBar -> FilterDropdown / ActiveFilterCount
```

Acceptance criteria:

```txt
search field API is generic
filter options accept injected label, value, active state and optional tone
no category names such as Health, Location or DPP appear in the component API
app wrappers still supply product data
```

#### Phase 3.2 — Navigation and view controls

Goal:

```txt
Extract generic navigation and view-selection controls that can work across different screen types.
```

Candidates:

```txt
TopNavigation
ProductIdentity
IconButton
UserMenuTrigger
ViewSwitcher
ViewSwitcherItem
Toolbar
FilterToolbar
```

Likely source locations:

```txt
MainNavigation -> TopNavigation / ProductIdentity / IconButton / UserMenuTrigger
ViewFilterBar -> ViewSwitcher / Toolbar / FilterToolbar
```

Acceptance criteria:

```txt
ViewSwitcher accepts injected options
List, Geography and Electrical are option data, not component variants
Toolbar composes controls without owning business logic
MainNavigation can remain as a composed shell
```

#### Phase 3.3 — Generic data display

Goal:

```txt
Extract generic components for dense operational data, status, metrics and fields.
```

Candidates:

```txt
DataGrid
DataGridHeader
DataGridRow
DataGridCell
DataRow
Field
Metric
MetricRow
StatusBadge
StatusIndicator
SignalDot
DataLabel
ScoreBar
EmptyState
```

Likely source locations:

```txt
AssetList -> DataGridHeader / GroupedListSection / EmptyState
AssetInventoryRow -> DataRow / StatusBadge / SignalDot / DataLabel
AssetDetailPanel -> Field / MetricRow / ScoreBar
```

Acceptance criteria:

```txt
health, connectivity, DPP and activity become injected labels or state values
status and tone are generic props
no HealthBadge / DPPStatus / ConnectivityLabel target APIs
AssetInventoryRow can become a use case of DataRow / DataGridRow
```

#### Phase 3.4 — Panels, sections and tabs

Goal:

```txt
Extract generic structural components for panels, sections, tabbed content and detail views.
```

Candidates:

```txt
Panel
SidePanel
DetailPanel
PanelHeader
PanelFooter
Section
Tabs
TabList
TabPanel
```

Likely source locations:

```txt
AllFiltersPanel -> SidePanel / PanelHeader / PanelFooter
AssetDetailPanel -> DetailPanel / Tabs / Section
```

Acceptance criteria:

```txt
panel components do not know Installed Base
section and tab labels are injected
panel behavior remains controlled by app state
app wrappers continue to own product-specific content
```

#### Phase 3.5 — Evidence, timeline and recommendation components

Goal:

```txt
Extract generic components for proof, history and suggested actions without hard-coding domain narratives.
```

Candidates:

```txt
Timeline
TimelineEvent
EvidenceList
DocumentRow
RecommendationCard
```

Likely source locations:

```txt
AssetDetailPanel -> TimelineEvent / DocumentRow / RecommendationCard
```

Acceptance criteria:

```txt
recommendation priority is generic
proof/evidence labels are injected
document rows accept generic document metadata
no product-specific claim is hard-coded in the component API
```

#### Phase 3.6 — Reusable patterns

Goal:

```txt
Compose generic components into screen patterns that GenAI can select before selecting individual components.
```

Candidates:

```txt
FilterableWorkspace
ListDetailWorkspace
TabbedDetailPanel
FilterableDataGrid
EvidenceSection
RecommendationSection
StatusSummary
```

Likely source locations:

```txt
InstalledBaseWorkspace -> FilterableWorkspace / ListDetailWorkspace
AssetDetailPanel -> TabbedDetailPanel / EvidenceSection / RecommendationSection
```

Acceptance criteria:

```txt
patterns define layout and composition roles
patterns do not import demo data
patterns accept slots or generic data structures
patterns can be reused for other screen briefs
```

#### Phase 3 validation loop

For every component or pattern extraction:

```txt
1. identify source usage
2. name generic form and usage
3. define minimal props
4. extract one component
5. replace one usage site
6. run npm run build
7. run npm run dev
8. visually compare
9. document decision if naming or scope is non-obvious
```

Do not batch many extractions without validation.

#### Phase 3 stop conditions

Pause before continuing if:

```txt
a component API starts using business nouns unnecessarily
a component requires domain-specific data to render
visual parity becomes uncertain
an extraction causes broad rewrites
an existing wrapper becomes harder to understand
GenAI usage guidance cannot explain when the component should be selected
```

#### Phase 3 acceptance criteria

Phase 3 is complete when:

```txt
generic component vocabulary exists and is exported
transitional product-grounded helpers are de-specialized or clearly marked
major reusable UI forms have generic names and generic props
at least one reusable pattern exists
build and visual parity are preserved
component selection can be documented for GenAI
```

### Phase 4 — Patterns, principles and GenAI-facing guidelines

Objective:

```txt
Document what the prototype teaches, not only what it contains, and turn the generic vocabulary into usable GenAI guidance.
```

Intention:

```txt
Teach GenAI how to select the right component or pattern for a brief, data type and user task.
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
component selection guidance
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

Guideline sequence:

```txt
Given a brief, identify the user intent.
Choose a layout pattern.
Choose relevant data display components.
Choose the right interaction components.
Inject domain data.
Respect contracts.
Avoid inventing decorative UI.
```

Acceptance criteria:

```txt
GenAI can choose components from usage rules, not from domain names
component-selection guidance references generic vocabulary
contracts can verify critical boundaries
Make kit instructions can stay concise
```

### Phase 5 — Guardrail contracts

Objective:

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

Acceptance criteria:

```txt
critical failures can be detected
component registry reflects generic vocabulary
contracts do not over-constrain valid design choices
```

### Phase 6 — Make kit

Objective:

```txt
Allow Figma Make to generate strong product screens using the package, generic components, patterns, principles, knowledge and guardrails.
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

Acceptance criteria:

```txt
Make can generate a strong Installed Base Intelligence screen
Make can explain component and pattern choices
Make reads only the smallest useful guidance
Make does not use raw prototype files as mandatory building blocks
```

### Phase 7 — Guided extension

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
→ required generic components
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
```
