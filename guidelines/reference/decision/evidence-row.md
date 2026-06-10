# EvidenceRow Guidelines

Status: preferred

## Purpose

`EvidenceRow` shows observable facts, source context or proof inputs before interpretation.

Use it when trust depends on what is known, where it came from and how strong it is.

## Use this component when

- A recommendation, risk, alert or proof point needs support.
- Source scope, freshness or validation affects trust.
- Evidence must remain readable but secondary.

## Do not use this component when

- The content is only an opinion or interpretation.
- There is no source or observable fact.
- A compact trust marker is enough.

## Prefer this component over

- Free-text evidence paragraphs.
- Local source rows.
- Using AI confidence as evidence.

## Never generate

- Invented evidence.
- Invented sources or citations.
- Evidence presented as proof by itself.

## Required props

Show evidence summary and source context when available.

Add source strength, freshness or validation status when trust matters.

## Controlled values

Use canonical source strength and validation status values from the contracts.

## GenAI generation rules

- Facts before interpretation.
- Never invent evidence.
- Never use AI confidence as source strength.
- Show partial scope when visibility is partial.

## Common generation failures

- Recommendation before evidence.
- Hidden source scope.
- Weak evidence styled as definitive.
- Evidence confused with proof.

## Repair prompt

Use `guidelines/evaluation/repair/missing-evidence.md` when evidence is absent.

Use `guidelines/evaluation/repair/invented-evidence.md` when evidence is fabricated.

## Related stories

Story coverage is tracked in the story coverage contract.

## Related contracts

```txt
contracts/component-registry.contract.json#EvidenceRow
contracts/domain-model.contract.json#Evidence
contracts/evidence-and-trust.contract.json
contracts/props.contract.json
```
