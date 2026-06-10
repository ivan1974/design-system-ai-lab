# DocumentRow Guidelines

## Purpose

`DocumentRow` shows one document or reference item in a scannable list.

It helps users inspect reference material without turning every item into a card.

## Use this component when

- The screen lists reports, files, notes or reference documents.
- The document supports evidence, proof, review or follow-up.
- The user needs metadata such as freshness, source or document type.

## Do not use this component when

- The item is evidence itself; use `EvidenceRow`.
- The item is an action; use `ActionRow`.
- The document needs a full preview or workflow.

## Prefer this component over

- local document rows
- generic cards for every document
- plain file-name lists when metadata matters

## Never generate

- document rows for references that were not provided
- document names that imply unavailable sources
- local file-list components

## Required props

```txt
title
metadata when source, freshness or type matters
action when opening or reviewing is possible
```

## Controlled values

No enum-like controlled values.

## GenAI generation rules

1. Use inside `ListContainer` when listing documents.
2. Keep document metadata concise.
3. Use only documents supplied by the prompt or scenario.
4. Use `EvidenceRow` when the item is the evidence, not a document reference.

## Common generation failures

Failure: Make adds document references that were not supplied.
Why it fails: The screen overstates available source material.
Fix: Use only supplied documents or omit the document list.

Failure: Make uses cards for each document.
Why it fails: The list becomes heavy and hard to scan.
Fix: Use `DocumentRow` inside `ListContainer`.

## Repair prompt

Use:

```txt
guidelines/evaluation/repair/missing-evidence.md
guidelines/evaluation/repair/poor-row-density.md
```

## Related stories

```txt
src/design-system/stories/components/compact-workspace-primitives.stories.tsx
Story status: document/list primitive proof or explicit no-story rationale.
```

## Related contracts

```txt
contracts/components.contract.json
contracts/evidence-and-trust.contract.json
```
