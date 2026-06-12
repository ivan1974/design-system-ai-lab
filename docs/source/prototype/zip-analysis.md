# Figma Make prototype import analysis

## Purpose

This document records the initial analysis of the imported Figma Make prototype.

The goal of this phase is not to refactor the prototype yet. The goal is to preserve the product reference, make it runnable, and document what should later become design-system material.

This document must stay aligned with the reboot roadmap:

```txt
Figma Make zip prototype = product reference source
Previous repository = design system knowledge and rule library
New branch = clean React/Vite GenAI-ready design system package
```

## Import status

```txt
Status: imported and runnable
Branch: reboot/from-figma-make
Prototype: Installed Base Intelligence
Source type: Figma Make generated React/Vite prototype
```

The prototype has been imported as an application-level reference. It is not yet a reusable design system.

At this stage, the prototype should remain close to its generated form so that the team can inspect the real screen structure before extracting components, patterns, domain models, principles, knowledge and contracts.

## Important distinction: reference files vs generation API

The imported files under `src/app` are reference implementation files.

They should not be treated as the final design-system API exposed to GenAI.

Their role is to provide product-grounded evidence from which the project will extract:

```txt
components
patterns
principles
domain knowledge
contracts
benchmarks
review and repair guidance
```

GenAI should not be instructed to simply assemble these prototype files.

The target is not a rigid screen generator.

The target is a design assistant that uses the design system’s knowledge to generate better product screens.

The practical rule is:

```txt
Do not make GenAI assemble the prototype.
Make GenAI learn from the prototype.
```

## Runtime validation

The imported prototype has been validated locally with:

```bash
npm install
npm run dev
npm run build
```

The app runs as a Vite prototype and builds successfully.

## Main application structure

The current prototype is organized around a product screen under `src/app`.

```txt
src/app/
  App.tsx
  components/
    MainNav.tsx
    PageHeader.tsx
    ViewFilterBar.tsx
    AllFiltersPanel.tsx
    AssetList.tsx
    AssetDetailPanel.tsx
    figma/ImageWithFallback.tsx
    ui/*
  data/
    assets.ts

src/styles/
  fonts.css
  globals.css
  index.css
  tailwind.css
  theme.css
```

The important product-specific reference files are:

```txt
src/app/App.tsx
src/app/components/MainNav.tsx
src/app/components/PageHeader.tsx
src/app/components/ViewFilterBar.tsx
src/app/components/AllFiltersPanel.tsx
src/app/components/AssetList.tsx
src/app/components/AssetDetailPanel.tsx
src/app/data/assets.ts
```

These files are product reference material, not the future public design-system surface.

The `src/app/components/ui` directory comes from the generated prototype support layer. It should not yet be treated as the final design-system primitive layer.

## Product screen layers

The prototype expresses a five-layer Installed Base Intelligence experience:

```txt
1. Main Navigation
2. Page Header
3. View & Filter Bar
4. Installed Base List
5. Asset Detail Panel
```

These layers are the first product reference for the reboot. They should be used to understand the target screen, not as a rigid rule for every future screen.

## How to read the prototype files

Each product-specific file should be analyzed through three lenses:

```txt
Prototype file
→ what the imported screen currently does

Design-system material candidate
→ what may become reusable later

Generation guidance
→ what GenAI should learn as design judgment
```

This prevents the prototype from becoming a rigid assembly grammar.

The future design system should expose reusable material from `src/design-system`, not raw product files from `src/app`.

Expected future boundary:

```txt
src/app/* = product reference and demo app
src/design-system/* = reusable interface material
guidelines/* = design judgment and generation guidance
contracts/* = non-negotiable guardrails and verifiable rules
docs/* = source knowledge, decisions and rationale
```

## Observed responsibilities

### `src/app/App.tsx`

Current prototype role:

```txt
Complete product reference composition.
Shows how the imported screen is assembled end to end.
```

Design-system material candidate:

```txt
screen composition evidence
Installed Base workspace reference
benchmark fixture
```

Generation guidance:

```txt
Use the full screen to understand hierarchy, density, state and interaction flow.
Do not expose App.tsx as a reusable component or mandatory template.
```

### `src/app/components/MainNav.tsx`

Current prototype role:

```txt
Global navigation shell for the product experience.
```

Design-system material candidate:

```txt
navigation shell
navigation item
product navigation pattern
```

Generation guidance:

```txt
A product screen should maintain user orientation.
Navigation should clarify the major work areas without stealing attention from operational content.
```

### `src/app/components/PageHeader.tsx`

Current prototype role:

```txt
Context-setting area for the Installed Base Intelligence screen.
```

Design-system material candidate:

```txt
context header
page header
Installed Base header pattern
```

Generation guidance:

```txt
Before showing operational data, clarify the screen context: site, scope, status, view, responsibility and time frame where relevant.
```

### `src/app/components/ViewFilterBar.tsx`

Current prototype role:

```txt
Controls the active view, search and filter state.
```

Design-system material candidate:

```txt
operational view and filter bar
segmented view control
filter trigger
search input
```

Generation guidance:

```txt
Expose primary filtering controls close to the data they affect.
Keep advanced filters available but secondary.
Do not overload the main screen with every possible control.
```

### `src/app/components/AllFiltersPanel.tsx`

Current prototype role:

```txt
Advanced filter surface for Installed Base data.
```

Design-system material candidate:

```txt
advanced filter panel
filter group
filter section
controlled filter value model
```

Generation guidance:

```txt
When criteria become numerous, move them into a dedicated secondary surface.
Group filters around domain meaning, not only UI convenience.
```

### `src/app/components/AssetList.tsx`

Current prototype role:

```txt
Dense list of assets and operational status.
```

Design-system material candidate:

```txt
installed base list
asset inventory row
status cell
health indicator
coverage tag
operational density pattern
```

Generation guidance:

```txt
For Installed Base Intelligence, the list must allow fast comparison across assets.
It should show identity, location, coverage, health, status and next action.
It should not become a generic dashboard or a set of marketing cards.
```

### `src/app/components/AssetDetailPanel.tsx`

Current prototype role:

```txt
Detail and analysis surface for the selected asset.
```

Design-system material candidate:

```txt
asset detail panel
decision-first detail panel pattern
evidence disclosure pattern
tab structure
status summary
action block
```

Generation guidance:

```txt
The detail surface should explain why an asset requires attention.
It should separate facts, interpretation, recommendation and action.
It should support decision-making without inventing evidence or overclaiming value.
```

### `src/app/data/assets.ts`

Current prototype role:

```txt
Demo data and initial domain assumptions for Installed Base Intelligence.
```

Design-system material candidate:

```txt
domain model seed
controlled values
sample data
contract seed
```

Generation guidance:

```txt
Treat demo data as domain evidence, not as final data architecture.
Extract controlled values and domain concepts before creating contracts.
```

## Domain material

The prototype includes an initial domain model in:

```txt
src/app/data/assets.ts
```

This file should be studied before extraction because it contains the first set of controlled values and domain assumptions for Installed Base Intelligence.

Future work should identify:

```txt
asset identity
asset type
location hierarchy
coverage status
health status
connectivity status
action state
recommendation or insight state
```

These values should later move toward a dedicated domain layer instead of remaining embedded in demo data.

## Styling material

The imported prototype uses Tailwind v4 style files:

```txt
src/styles/fonts.css
src/styles/index.css
src/styles/tailwind.css
src/styles/theme.css
```

Current status:

```txt
accepted for prototype import
not yet normalized as design-system tokens
```

The future extraction should distinguish:

```txt
raw generated theme values
usable foundation tokens
product-specific styling decisions
temporary prototype styling
```

Styling extraction should support the roadmap principle:

```txt
components = reliable interface material
patterns = reusable composition structures
principles = design judgment
knowledge = domain, user and product context
contracts = guardrails against critical generation failures
```

## Dependency material

The generated prototype includes many dependencies because it was exported as an app-like Make artifact.

Current principle:

```txt
Do not clean dependencies aggressively during import.
First make the prototype run.
Then remove or rationalize unused dependencies during design-system extraction.
```

React and React DOM are treated as application dependencies for this reboot branch because the current artifact is a runnable Vite app, not yet a published library package.

## What this prototype is

```txt
A product-grounded reference implementation.
A runnable screen used to extract design-system material.
A source for components, patterns, principles, knowledge and contracts.
A source for learning what the design system must help GenAI understand.
```

## What this prototype is not

```txt
Not the final design system.
Not the final package surface.
Not the final component architecture.
Not the final Make kit.
Not a stable production package.
Not a rigid screen generator.
Not the final generation API.
```

## Extraction principles

During the next phase, extraction should follow this order:

```txt
1. Preserve visual and behavioral parity
2. Identify repeated UI decisions
3. Separate domain data from UI rendering
4. Extract minimal primitives only when needed
5. Extract product-specific components from real needs
6. Extract reusable patterns from repeated or structural decisions
7. Extract principles when judgment matters more than structure
8. Extract knowledge when domain meaning matters
9. Convert critical failure risks into guardrails
10. Add contracts only after the design intent is understood
```

The first design-system extraction should not attempt to create a universal component library. It should extract only what is needed to stabilize the Installed Base Intelligence reference.

Non-negotiable extraction rule:

```txt
No component enters the design system unless it can be linked to a real product need.
For the first release, that product need must come from the Installed Base Intelligence prototype.
```

## Known risks

### Generated app structure

The prototype is still organized as a generated app. Some files may be too large or mix concerns.

Risk:

```txt
Refactoring too early could erase useful product decisions before they are documented.
```

Response:

```txt
Document first. Extract second. Rationalize third.
```

### Dependency over-inclusion

The generated package includes many libraries that may not be used by the final design system.

Risk:

```txt
The reboot could inherit unnecessary package weight.
```

Response:

```txt
Keep dependencies during initial import. Remove unused dependencies after component extraction and build validation.
```

### Local generated UI layer

The `src/app/components/ui` layer may look like a design-system primitive layer, but it is still prototype support code.

Risk:

```txt
Treating generated UI helpers as final primitives could freeze accidental architecture.
```

Response:

```txt
Use it as raw material only. Rebuild or rename primitives intentionally later.
```

### Prototype files becoming generation API

The product-specific files under `src/app` may look like reusable building blocks.

Risk:

```txt
GenAI simply assembles MainNav + PageHeader + ViewFilterBar + AssetList + AssetDetailPanel.
The system becomes a rigid screen generator instead of a guided design assistant.
```

Response:

```txt
Treat src/app as product reference material.
Expose only intentionally extracted components, patterns, principles, knowledge and contracts.
```

### Screen overfitting

Installed Base Intelligence is the first reference, but not every future screen should copy its structure.

Risk:

```txt
The system becomes a rigid screen generator instead of a GenAI-ready design system.
```

Response:

```txt
Extract the screen-specific contract separately from broader reusable principles and patterns.
Future screens must start from their own product need and domain model.
```

## Alignment with guided design generation

This prototype analysis supports the move from controlled generation to guided design generation.

```txt
controlled generation = assemble only what is explicitly allowed
guided design generation = prefer approved components, apply DS principles, use domain knowledge, and respect critical guardrails
```

The prototype gives the project a real product reference.

It should help the design system answer:

```txt
What interface material should be reliable?
What composition structures are reusable?
What principles should guide hierarchy, density, disclosure and action?
What domain knowledge must GenAI understand?
What failures must contracts prevent?
```

It should not answer every future design task by forcing the same screen structure.

## Next step

The next phase is minimal design-system extraction.

Recommended first extraction target:

```txt
foundation styles and tokens
```

Recommended first product component extraction target:

```txt
Main Navigation
```

Recommended first pattern extraction target:

```txt
Installed Base workspace structure
```

Before exposing any extracted material to GenAI, the project should define whether it is:

```txt
component
pattern
principle
knowledge
contract
example
benchmark
```
