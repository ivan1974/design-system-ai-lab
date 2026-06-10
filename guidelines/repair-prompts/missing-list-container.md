# Repair Prompt — Missing ListContainer

## When to use

Use this repair prompt when a generated screen shows repeated rows without the package list container.

Common symptoms:

```txt
queue rows floating without ListContainer
repeated customers, assets, risks or recommendations in custom div wrappers
manual borders and dividers around rows
card stacks used for dense review lists
```

---

## Repair prompt

```txt
Revise the generated screen so repeated business objects use the package list structure.

Use ListContainer for grouped rows.
Use CustomerQueueRow for repeated customers.
Use AssetQueueRow for repeated assets.
Use RiskQueueRow for repeated risks or blockers.
Use RecommendationQueueRow for repeated recommendations.
Use ReviewQueueRow for generic review items.

Do not create a local list shell.
Do not create local row dividers, hover states or selected states.
Do not use repeated Card components when queue rows fit.

Keep the same screen intent and selected item detail.
```

---

## Acceptance criteria

The repaired screen is acceptable only if:

- repeated rows are grouped in `ListContainer`
- repeated business objects use the correct package queue row
- selected item detail still uses `WorkspaceDetailPanel` when needed
- no local list styling replaces package list structure
- no card stack is used for dense queue review

---

## Related repair prompts

```txt
poor-row-density.md
missing-detail-panel.md
card-saturation.md
```
