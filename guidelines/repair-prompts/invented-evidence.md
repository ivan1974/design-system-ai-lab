# Repair Prompt — Evidence Not Supported

## Use when

Use this repair prompt when the screen shows facts, sources, telemetry, asset data or value proof that were not provided.

Typical symptoms:

- source system appears without input support
- telemetry appears without input support
- asset fact appears without input support
- value proof appears without input support
- recommendation looks evidence-backed but no evidence is visible

---

## Repair instruction

```txt
Revise the screen to remove unsupported evidence.

Keep only facts explicitly provided by the prompt.
If a fact is illustrative, label it as sample or placeholder.
Show source context, source scope, source strength and validation status when trust matters.
Show observable facts before interpretation.
Do not present recommendations as evidence-backed unless evidence is visible.
Use EvidenceRow, SourceStrengthPill, ValueProofCard or RecommendationReviewPanel where relevant.
Keep human validation visible for customer-facing or sensitive decisions.
```

---

## Acceptance checks

- No unsupported source is presented as real.
- No unsupported telemetry or asset fact is presented as real.
- Recommendations show evidence context or are marked as requiring review.
- Source scope and validation status are visible when trust matters.
