# Legacy guidelines architecture audit

## Status

```txt
REBOOT INPUT / GUIDELINES ARCHITECTURE / GENAI READINESS
```

This audit captures what should be reused from the legacy `main` branch before creating the new GenAI-facing guidelines.

The objective is not to copy the legacy documentation as-is. The objective is to preserve its useful structure, update the vocabulary to the rebooted design system, and make the guidance easier for GenAI to use.

---

## Why the legacy structure is valuable

The legacy guidelines are not only documentation. They are a generation control system.

They already contain several strong ideas that remain valid:

```txt
read little
read the same files
open detailed references only when needed
use one primary decision per screen
screen contract first
facts before interpretation
progressive decision disclosure
reject generic dashboards
block internal imports and local design systems
```

This structure is aligned with the reboot objective: help GenAI generate a good decision workspace from a human brief, not reproduce one screen pixel-perfect.

---

## Legacy architecture pattern to preserve

The useful legacy architecture is:

```txt
guidelines/Guidelines.md
  = short router / mandatory entry point

guidelines/runtime/*
  = active reasoning and selection rules

guidelines/reference/*
  = detailed screen, component, architecture references

guidelines/source/*
  = research, principles, domain models, brand or historical source material

guidelines/evaluation/*
  = review, benchmark and repair guidance

contracts/*
  = machine-readable blockers and checks
```

This separation should remain, but the content must be updated to the new rebooted design-system structure.

---

## What to keep almost unchanged

### 1. Short router principle

Keep a small mandatory entry point.

The new `Guidelines.md` should not explain everything. It should route GenAI to the smallest useful context.

Recommended reboot equivalent:

```txt
guidelines/Guidelines.md
```

Purpose:

```txt
1. identify the user intent
2. identify whether a screen contract exists
3. choose the minimum files to read
4. enforce generation blockers
```

---

### 2. Generation flow

Keep the legacy reasoning order, but update the component vocabulary.

Legacy order to preserve:

```txt
1. identify whether a screen contract exists
2. identify the primary user decision
3. select the main domain object
4. select the screen type
5. select architecture only when no contract exists
6. add evidence and trust markers
7. add owned next actions
8. apply visual rules
9. run blockers
```

Reboot adjustment:

```txt
Do not start from components.
Start from decision, object, evidence and action.
```

---

### 3. Facts before interpretation

Keep as a core generation principle.

Recommended reboot formulation:

```txt
Observed facts
→ interpreted signal
→ evidence-aware recommendation
→ owned action
→ human validation when needed
```

This should become one of the first runtime rules for Installed Base and other operational screens.

---

### 4. Progressive decision disclosure

Keep the legacy model:

```txt
Signal → Decision → Evidence
```

This is one of the strongest reusable principles.

It should be preserved as a top-level runtime guideline, not buried inside a screen-specific page.

---

### 5. Screen contract first

Keep the idea that a screen contract overrides generic guidance.

However, in the reboot we should distinguish:

```txt
closed screen contract
  = strict screen anatomy for benchmark/reference generation

open screen guidance
  = guidance for better screen generation from a brief
```

For the GenAI demo, Installed Base should likely start as open guidance rather than a fully closed contract, unless the goal is benchmark reproducibility.

---

## What must change

### 1. Public import boundary

Legacy guidance says generated examples import only from the package root:

```tsx
import { ... } from "design-system-ai-lab";
```

In the reboot repository, current source usage is not yet packaged this way.

Short-term reboot rule:

```txt
Generated app examples may import from src/design-system/* during repo development.
Do not import from src/app/components/*.
Do not import from src/app/components/ui/*.
Do not import directly from @radix-ui/* in generated screens.
```

Long-term package rule can return once the DS is packaged.

---

### 2. Component vocabulary

Legacy names no longer match the rebooted design system.

Legacy examples to replace:

```txt
WorkspaceShell
PageHeading
MasterDetailLayout
WorkspaceDetailPanel
SemanticPill
SemanticTag
MetaLabel
HealthPill
AssetDetailAnalysisPanel
InstalledBaseViewFilterBar
InstalledBaseList
```

Reboot vocabulary should use:

```txt
primitives:
Button, Badge, Input, Checkbox, DropdownMenu, Select, Popover, Dialog, Sheet, Tabs, Table, Separator, Tooltip, Switch, ScrollArea, Progress, Accordion, Collapsible, Alert

usage components:
SearchField, FilterDropdown, CheckboxOption, StatusBadge, ScoreBar, EvidenceList, RecommendationCard, AssetSummaryCard, DetailSection

screen examples / candidate compositions:
InstalledBaseWorkspace, ViewFilterBar, AllFiltersPanel, AssetInventoryRow, AssetDetailPanel
```

Do not expose transitional domain-specific helpers as preferred generation vocabulary:

```txt
HealthBadge
ConnectivityLabel
DPPStatus
StatusLabel
```

These can exist temporarily in runtime code but should not be recommended to GenAI as final public vocabulary.

---

### 3. Pattern definition

Legacy uses `pattern` broadly.

For the reboot, a pattern should mean a reproducible practice, not merely a local screen component.

A pattern should include:

```txt
problem it solves
when to use it
when not to use it
required content
interaction rules
accessibility/content guidance
examples and variants
common mistakes
```

Therefore, these should not be immediately treated as mature patterns:

```txt
InstalledBaseWorkspace
ListDetailWorkspace
FilterableAssetInventory
TabbedAssetDetail
ActionableInsightPanel
```

They should first be treated as:

```txt
candidate patterns
screen composition examples
or interaction structures to evaluate
```

---

### 4. Installed Base contract strictness

Legacy Installed Base is a closed screen contract.

That is useful for benchmark reproduction, but the reboot objective is broader: GenAI should generate a good Installed Base screen from a brief, not necessarily reproduce a fixed reference screen.

Recommended split:

```txt
guidelines/reference/screen-guidance/installed-base.md
  open guidance for better generation

contracts/screen-contracts/installed-base-reference.contract.md or json
  strict contract only for reference benchmark or demo replay
```

---

## Recommended new guideline architecture

```txt
guidelines/
  Guidelines.md

  runtime/
    generation-flow.md
    component-selection.md
    primitive-component-pattern-boundary.md
    trust-action-rules.md
    visual-rules.md
    progressive-decision-disclosure.md

  reference/
    primitives/
      primitives-overview.md
      primitive-selection.md
    components/
      usage-components-overview.md
      search-and-filter.md
      status-and-score.md
      evidence-and-recommendation.md
    screen-guidance/
      installed-base.md

  source/
    principles/
      decision-first-then-proof.md
      facts-before-interpretation.md
      progressive-disclosure.md
    knowledge/
      installed-base-domain-model.md
      service-intelligence-terms.md

  evaluation/
    generation-review.md
    repair-router.md

contracts/
  generation-blockers.contract.md
  component-imports.contract.md
  primitive-selection.contract.md
  installed-base-reference.contract.md
```

---

## Recommended first files to create

Create these first:

```txt
guidelines/Guidelines.md
guidelines/runtime/generation-flow.md
guidelines/runtime/component-selection.md
guidelines/runtime/primitive-component-pattern-boundary.md
guidelines/runtime/trust-action-rules.md
guidelines/runtime/progressive-decision-disclosure.md
guidelines/runtime/visual-rules.md
guidelines/reference/screen-guidance/installed-base.md
```

Then create contracts:

```txt
contracts/generation-blockers.contract.md
contracts/component-imports.contract.md
contracts/installed-base-reference.contract.md
```

Then create reusable component references:

```txt
guidelines/reference/components/search-and-filter.md
guidelines/reference/components/status-and-score.md
guidelines/reference/components/evidence-and-recommendation.md
```

---

## Migration decision

Use the legacy documentation as source architecture and reasoning material.

Do not copy its component vocabulary directly.

The rebooted guidelines must teach GenAI:

```txt
what decision the user needs to make
what evidence is available
what level of UI abstraction to use
which component family supports the intent
what not to generate
how to repair a weak screen
```

The next step should be to create the new `guidelines/Guidelines.md` router and runtime files using this audit as the migration source.
