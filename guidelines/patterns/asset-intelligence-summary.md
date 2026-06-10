# AssetIntelligenceSummary Guidelines

## Purpose

`AssetIntelligenceSummary` shows asset facts, health signals, intelligence interpretation, source scope and readiness before recommendations.

It prevents Make from presenting interpreted intelligence as source-system truth.

## Use this component when

- Asset context affects the recommendation or customer decision.
- Health signals and intelligence interpretation must remain distinct.
- Source scope, source strength or validation status affect trust.
- The user needs asset-level context before reviewing actions.

## Do not use this component when

- The content is only a recommendation; use `RecommendationCard`.
- The content is only proof; use `ValueProofCard`.
- The content is only an action list; use `ActionRow` inside `ListContainer`.
- No asset scope is available.

## Prefer this component over

- generic `Card` for asset intelligence
- local asset insight summaries
- free-text paragraphs that mix facts and interpretation

## Never generate

- complete asset knowledge from partial source visibility
- AI interpretation as source-system fact
- customer-ready asset intelligence without validation
- source strength from AI confidence

## Required props

```txt
assetScope
assetContext when useful
healthSignals when source signals exist
intelligenceInterpretation when interpretation is shown
sourceContext when source basis matters
sourceScope when visibility is partial
sourceStrength when trust matters
validationStatus when review state matters
readiness when customer use is possible
mode when layout matters
```

## Controlled values

```txt
mode: card | section | compact
readiness: internal | needs-review | customer-ready | needs_review | customer_ready
sourceStrength: unknown | partial | single-source | multi-source | validated
validationStatus: not-reviewed | internal-review-needed | internally-validated | customer-ready | blocked
```

Use hyphenated readiness values in new documentation. Underscore values are deprecated aliases.

## GenAI generation rules

1. Show source facts and asset scope before interpretation.
2. Use this component before recommendations when asset intelligence affects the decision.
3. Keep partial visibility visible.
4. Use `readiness="needs-review"` when customer-facing use requires validation.
5. Do not turn asset intelligence into an action plan.

## Common generation failures

Failure: Make says the full installed base is known from partial monitoring.
Why it fails: It overstates visibility.
Fix: Show source scope and use partial readiness or validation language.

Failure: Make mixes health signals and recommendation rationale.
Why it fails: Facts and interpretation become indistinguishable.
Fix: Use `AssetIntelligenceSummary` before `RecommendationCard`.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/partial-visibility-overstated.md
guidelines/repair-prompts/ai-confidence-as-source-strength.md
guidelines/repair-prompts/missing-human-validation.md
```

## Related stories

```txt
src/design-system/stories/v0.5.1-critical-generation.stories.tsx
Story title: Design System / v0.5.1 / Critical Generation Coverage
```

## Related contracts

```txt
contracts/components.contract.json
contracts/props.contract.json
contracts/evidence-and-trust.contract.json
```
