# AssetIntelligenceSummary Guidelines

## Purpose

Use `AssetIntelligenceSummary` to show asset context, source context and the
Health / Intelligence distinction before the user reviews asset-related
recommendations.

An asset intelligence summary should make clear what is known from source
systems, what comes from Health signals and what is an Intelligence
interpretation.

It should help the user understand the evidence, scope, source limits,
validation needs and customer-readiness of an asset-related situation before
acting on recommendations.

An asset intelligence summary is not a recommendation card.

An asset intelligence summary is not a proof card.

An asset intelligence summary is not an action plan.

An asset intelligence summary is not a place to present Intelligence
interpretation as source-system truth.

In generated screens, use `AssetIntelligenceSummary` before
`RecommendationCard`, `PriorityList` or `ActionList` when asset intelligence,
Health signals, lifecycle context, source strength or validation status affect
the decision.

---

## Import

Import `AssetIntelligenceSummary` from the package root:

```tsx
import { AssetIntelligenceSummary } from "design-system-ai-lab";
```

Do not import `AssetIntelligenceSummary` from internal package paths.

Do not recreate `AssetIntelligenceSummary` locally.

Do not create custom asset intelligence summary wrappers.

---

## Component role

Use `AssetIntelligenceSummary` when the user needs to understand:

- which asset, asset group, site, zone or scope is affected
- what source context supports the asset view
- whether the source is complete, partial, inferred or needs review
- what Health signals are available
- what is an Intelligence interpretation
- what validation status applies
- whether the summary is internal, needs review or customer-ready
- what limitations should remain visible before a recommendation is used

It should establish the asset intelligence context before the screen moves into
recommendations, risks or actions.

It should not make the decision for the user.

It should make source and interpretation boundaries visible.

---

## Props

Use the component with these props:

```tsx
<AssetIntelligenceSummary
  assetScope="Site A > Medium voltage room"
  assetContext="SM6 24kV feeder group"
  lifecycleContext="Aging asset group with recent corrective interventions"
  healthSignals="Partial Health visibility: thermal trend and service history available"
  intelligenceInterpretation="Modernization may reduce operational exposure, but evidence needs expert review."
  sourceContext="Lifecycle registry, service history and partial monitoring data"
  sourceScope="Known installed base and Schneider monitored assets"
  sourceStrength="partial"
  freshness="Last updated 18 hours ago"
  validationStatus="Validate with Schneider expert before customer use"
  readiness="needs_review"
  badges={[
    { label: "Needs review", tone: "warning" },
    { label: "Source partial", tone: "warning" },
  ]}
/>
```

Expected props:

```txt
title
description
assetScope
assetContext
lifecycleContext
healthSignals
intelligenceInterpretation
sourceContext
sourceScope
sourceStrength
freshness
validationStatus
readiness
badges
extraItems
```

Use `assetScope` to show the affected site, zone, room, asset group or asset
scope.

Use `assetContext` to describe the asset or asset group.

Use `lifecycleContext` when lifecycle state affects interpretation.

Use `healthSignals` to summarize available Health signals.

Use `intelligenceInterpretation` only for interpretation or hypothesis, not for
source-system facts.

Use `sourceContext` to identify the sources behind the summary.

Use `sourceScope` to clarify the population covered by the source.

Use `sourceStrength` to show whether the source is complete, partial, mixed,
manual, inferred or needs review.

Use `freshness` when timing affects trust.

Use `validationStatus` when expert review or human validation is needed.

Use `readiness` to indicate whether the asset intelligence is internal, needs
review or customer-ready.

Use `badges` for concise status labels.

Use `extraItems` for additional concise context specific to the generated screen.

---

## Readiness values

Use these readiness values:

```txt
internal
needs_review
customer_ready
```

Use `internal` when the summary is for internal exploration only.

Use `needs_review` when the summary needs expert validation, source review or
customer-ready preparation.

Use `customer_ready` only when the source, interpretation and validation status
support customer use.

Do not use `customer_ready` when evidence is partial, source strength is weak,
Health visibility is incomplete or the interpretation has not been validated.

---

## Source-system, Health and Intelligence rules

Always distinguish source-system context, Health signals and Intelligence
interpretation.

Source-system context is factual context from systems or records, such as:

```txt
installed base
lifecycle registry
service history
monitoring data
contract or entitlement records
customer portal data
```

Health signals are observed or computed indicators, such as:

```txt
thermal trend
connectivity status
alarm history
maintenance history
asset health indicator
partial monitoring visibility
```

Intelligence interpretation is an inferred recommendation, hypothesis or
interpretive summary, such as:

```txt
modernization may reduce operational exposure
connectivity recovery should be prioritized before customer review
asset risk may weaken renewal confidence
```

Do not present Intelligence interpretation as source-system truth.

Do not present partial Health visibility as complete asset knowledge.

Do not present non-connected assets as live-monitored.

Do not use confidence language as a substitute for source scope, source strength,
freshness or validation status.

---

## Asset intelligence trust rules

Asset intelligence should preserve uncertainty when evidence is partial.

Show source strength when any of these apply:

```txt
source is partial
source combines multiple systems
source includes manual records
source excludes non-connected assets
source is inferred from limited Health signals
source needs expert review
```

Good trust context:

```txt
Source scope: Known installed base and Schneider monitored assets
Source strength: Partial
Freshness: Last updated 18 hours ago
Validation: Validate with Schneider expert before customer use
Readiness: Needs review
```

Avoid trust context such as:

```txt
Source: AI confirmed
Validation: Automatically approved
Readiness: Customer-ready
Confidence: High, no review needed
```

Critical customer, contract, service, safety, compliance, renewal, value proof,
asset intelligence or modernization decisions should keep human validation
visible.

---

## Human validation rules

Use human validation language when asset intelligence could influence customer,
service, modernization, renewal or risk decisions.

Good language:

```txt
Validate with Schneider expert before customer use
Review source evidence before customer discussion
Human validation needed
Expert review required
Customer-ready after validation
```

Avoid language:

```txt
AI validated
Automatically approved
Confirmed by intelligence
No validation needed
```

The summary may indicate that validation is needed, but it should not validate
the recommendation by itself.

---

## When to use AssetIntelligenceSummary

Use `AssetIntelligenceSummary` for:

- asset recommendation review screens
- modernization hypothesis screens
- Health signal interpretation screens
- connectivity or visibility review screens where asset context matters
- renewal or QBR screens where asset intelligence affects confidence
- service risk screens where asset intelligence affects prioritization
- trust-sensitive screens where source scope, source strength or validation
  status matters

---

## When not to use AssetIntelligenceSummary

Do not use `AssetIntelligenceSummary` for:

- generic customer context
- generic source metadata
- recommendation rationale
- action plans
- proof maturity explanation
- connectivity coverage detail without asset intelligence interpretation
- metric grids
- alert lists
- AI validation claims
- automatic approval flows

Use other components instead:

| Need | Use |
| --- | --- |
| Customer context | `CustomerStatusCard` |
| Renewal risk context | `RenewalRiskSummary` |
| Connectivity coverage and visibility limits | `ConnectivityCoverageCard` |
| Value proof and proof gaps | `ValueProofCard` |
| Generic structured metadata | `StatusSummary` |
| Recommendation rationale | `RecommendationCard` |
| Risk or blocker | `AlertCard` |
| Group risks or blockers | `PriorityList` |
| Assigned internal action | `ActionCard` |
| Group assigned actions | `ActionList` |

---

## Placement rules

Place `AssetIntelligenceSummary` before asset-related recommendations.

Recommended asset recommendation structure:

```txt
PageHeader
→ CustomerStatusCard when customer context matters
→ AssetIntelligenceSummary for source, Health and Intelligence context
→ RecommendationCard for recommendation rationale
→ PriorityList with asset or source blockers when needed
→ ActionList with validation or follow-up actions
```

Recommended renewal or QBR structure:

```txt
PageHeader
→ CustomerStatusCard or RenewalRiskSummary
→ AssetIntelligenceSummary when asset intelligence affects the discussion
→ ValueProofCard when proof readiness matters
→ RecommendationCard when a recommendation needs rationale
→ ActionList with preparation actions
```

Do not place asset intelligence after the recommendation that depends on it.

Do not place assigned actions before the user understands asset source limits and
validation status.

---

## Relationship with RecommendationCard

Use `AssetIntelligenceSummary` to establish the asset intelligence context.

Use `RecommendationCard` to explain the recommendation rationale, priority,
readiness, evidence and expected outcome.

Example:

```txt
AssetIntelligenceSummary: Health visibility is partial, source strength is partial, expert review needed
RecommendationCard: Validate modernization option for aging switchgear
```

Do not put full recommendation rationale inside `AssetIntelligenceSummary`.

Do not use `RecommendationCard` without asset intelligence context when the
recommendation depends on source scope, Health interpretation or validation
status.

---

## Relationship with ConnectivityCoverageCard

Use `ConnectivityCoverageCard` when the main question is coverage, connected
assets, disconnected assets or visibility limits.

Use `AssetIntelligenceSummary` when the main question is how asset context,
Health signals and Intelligence interpretation should inform a recommendation.

These patterns can be used together:

```txt
ConnectivityCoverageCard: coverage and visibility limits
AssetIntelligenceSummary: asset context, Health signals and Intelligence interpretation
RecommendationCard: recommended next step
```

Do not use `AssetIntelligenceSummary` to replace detailed connectivity coverage.

---

## Relationship with ValueProofCard

Asset intelligence can support value proof, but it is not proof by itself.

Use `ValueProofCard` to show customer-ready proof, proof gaps and proof
readiness.

Use `AssetIntelligenceSummary` to show the asset intelligence context that may
support a future value proof or recommendation.

Do not present expected asset intelligence outcomes as proven value.

---

## Good example

```tsx
<AssetIntelligenceSummary
  assetScope="Site A > Medium voltage room"
  assetContext="SM6 24kV feeder group"
  lifecycleContext="Aging asset group with recent corrective interventions"
  healthSignals="Partial Health visibility: thermal trend and service history available"
  intelligenceInterpretation="Modernization may reduce operational exposure, but evidence needs expert review."
  sourceContext="Lifecycle registry, service history and partial monitoring data"
  sourceScope="Known installed base and Schneider monitored assets"
  sourceStrength="partial"
  freshness="Last updated 18 hours ago"
  validationStatus="Validate with Schneider expert before customer use"
  readiness="needs_review"
  badges={[
    { label: "Needs review", tone: "warning" },
    { label: "Source partial", tone: "warning" },
  ]}
/>
```

This is good because:

- the asset scope is explicit
- source context is visible
- source strength is not hidden
- Health signals are separated from Intelligence interpretation
- validation status remains visible
- the summary does not claim customer-readiness too early

---

## Customer-ready example

```tsx
<AssetIntelligenceSummary
  assetScope="Critical Power > UPS Room A"
  assetContext="UPS and power distribution assets"
  healthSignals="Connectivity restored and latest Health indicators reviewed"
  intelligenceInterpretation="Connectivity recovery can be presented as part of the service continuity review."
  sourceContext="Monitoring data and service review notes"
  sourceScope="Schneider monitored assets only"
  sourceStrength="high"
  freshness="Reviewed today"
  validationStatus="Reviewed for customer use"
  readiness="customer_ready"
  badges={[
    { label: "Customer-ready", tone: "success" },
    { label: "Reviewed", tone: "success" },
  ]}
/>
```

This is good because:

- customer-ready status is supported by validation
- source strength is visible
- monitored asset scope remains explicit

---

## Bad example

Do not present Intelligence interpretation as validated source truth:

```tsx
<AssetIntelligenceSummary
  assetScope="Site A"
  intelligenceInterpretation="AI confirmed that modernization is required."
  sourceStrength="high"
  validationStatus="Automatically approved"
  readiness="customer_ready"
  badges={[{ label: "AI validated", tone: "success" }]}
/>
```

This is weak because:

- AI validation is claimed
- Intelligence interpretation is presented as confirmed fact
- validation is automatic rather than human-reviewed
- readiness is customer-ready without evidence
- source scope and source context are missing

---

## Content quality rules

An asset intelligence summary should answer:

1. What asset scope is affected?
2. What asset context matters?
3. What source context supports the view?
4. What is the source scope and strength?
5. What Health signals are available?
6. What is the Intelligence interpretation?
7. What validation status applies?
8. Is the summary internal, needs review or customer-ready?
9. What limitations should remain visible before recommendations or customer use?

If the summary does not answer these questions, add the missing context or use a
more appropriate component.

---

## Anti-patterns

Do not generate:

- manually rebuilt asset intelligence summaries
- local asset intelligence summary components
- local asset intelligence summary wrappers
- internal imports from package files
- asset intelligence summaries without asset scope
- asset intelligence summaries without source context when source affects trust
- asset intelligence summaries that hide source scope or source strength
- asset intelligence summaries that present Intelligence interpretation as source-system truth
- asset intelligence summaries that claim AI validation or automatic approval
- asset intelligence summaries that present expected outcomes as proven value
- asset intelligence summaries that present partial Health visibility as complete asset knowledge
- asset intelligence summaries that present non-connected assets as live-monitored
- asset intelligence summaries that replace recommendation rationale
- asset intelligence summaries that replace assigned validation actions

---

## Review checklist

After generation, verify:

- `AssetIntelligenceSummary` is imported from `design-system-ai-lab`
- no local asset intelligence summary replacement was created
- no local asset intelligence summary wrapper was created
- no internal package import is used
- asset scope is explicit
- source context is visible when it affects trust
- source scope is visible when the source does not cover all assets
- source strength is visible when the source is partial, mixed, inferred or manual
- Health signals are separated from Intelligence interpretation
- Intelligence interpretation is not presented as source-system truth
- validation status is visible when customer use or critical decisions are involved
- readiness is not `customer_ready` unless source and validation support it
- non-connected assets are not presented as live-monitored
- expected outcomes are not presented as proven value
- the summary does not contain full recommendation rationale
- the summary does not replace assigned validation or follow-up actions

---

## Final principle

An `AssetIntelligenceSummary` should make asset context, source limits, Health
signals, Intelligence interpretation and human validation needs visible before
the user reviews or acts on asset-related recommendations.
