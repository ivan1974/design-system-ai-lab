# Runtime Generation Contract

## Status

```txt
ACTIVE RUNTIME / BLOCKING / FIGMA MAKE
```

This file is the active v0.6.0 blocking contract for Figma Make generation.

It replaces `guidelines/make-minimal-contract.md` as the active runtime contract.

Use it after:

```txt
Guidelines.md
setup.md
tokens.md
styles.md
```

---

## Required output

Generate one complete visible React screen in `App.tsx`.

The screen must support one primary decision.

Do not generate a generic dashboard, landing page, marketing page or decorative mockup.

---

## Required imports

Import components only from the package root:

```tsx
import { ... } from "design-system-ai-lab";
```

Import styles once:

```tsx
import "design-system-ai-lab/styles.css";
```

Never import from:

```txt
design-system-ai-lab/dist/*
design-system-ai-lab/src/*
./components/ui/*
./src/design-system/*
packages/design-system-ai-lab/*
```

Never create local design-system substitutes.

---

## Required screen model

Prefer this decision workspace model:

```txt
WorkspaceShell
→ PageHeading
→ FilterBar or SecondaryNavigation
→ MasterDetailLayout when list/detail is needed
→ ListContainer with approved rows
→ WorkspaceDetailPanel for selected-item detail
→ Tabs only when detail has several views
→ ActionRow or StickyActionBar for follow-through
```

Do not make every fact, signal, proof point or action a separate card.

---

## Use business patterns first

Use a business pattern before rebuilding a known section manually.

Examples:

```txt
CustomerStatusCard
ConnectivityCoverageCard
AssetIntelligenceSummary
RenewalRiskSummary
ValueProofCard
ServiceRiskSummary
RecommendationReviewPanel
CustomerReviewReadinessCard
CreateActionDialog
```

If no pattern fits, simplify before creating custom composition.

---

## Facts before interpretation

Show information in this order when possible:

```txt
source-system facts
→ health or service signals
→ intelligence interpretation
→ evidence-aware recommendation
→ owned action
→ human validation when needed
```

Do not start with a confident recommendation if facts or evidence are missing.

---

## Evidence rules

Never invent:

```txt
evidence
sources
citations
telemetry
asset facts
benchmark data
value proof
validation state
```

Do not present:

```txt
expected outcomes as proven value
partial visibility as complete asset knowledge
AI confidence as source strength
internal proof as customer-ready proof without validation
```

Keep source scope, source strength, proof readiness and validation visible when trust matters.

---

## Action rules

Every actionable item must include:

```txt
owner
due date
priority
```

Use `ActionRow` for owned follow-through.

Use `ActionCard` only when the action needs more context than a row.

Every `AlertCard` must include a recommendation.

Do not show vague next steps without ownership.

---

## Progressive disclosure rule

Show the minimum decision-critical information first.

Keep evidence and explanation available, but secondary.

Do not expose all facts, proof points, recommendations and actions at the same hierarchy level.

---

## Reject and repair

Reject or repair before acceptance if the screen includes:

```txt
internal imports
missing stylesheet import
local components
local visual system
generic dashboard
long equal card stack
invented evidence or sources
unsupported prop values
missing action ownership
hidden validation for sensitive decisions
visual overstatement of weak evidence
information overload
```

Repair guidance:

```txt
guidelines/evaluation/repair/repair-router.md
contracts/generation-blockers.contract.json
```
