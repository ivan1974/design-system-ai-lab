# Repair prompt — poor row density

Use this repair prompt when repeated review items are too sparse, too card-like, or hard to scan.

---

## Repair instruction

Use package queue rows for repeated operational objects.

Do not create local row wrappers.

Do not turn every repeated item into a separate card.

---

## Required changes

1. Use `CustomerQueueRow` for customer lists.
2. Use `AssetQueueRow` for asset lists.
3. Use `RiskQueueRow` for risk or blocker lists.
4. Use `RecommendationQueueRow` for recommendation lists.
5. Use `ReviewQueueRow` for generic review queues.
6. Put queue rows inside `ListContainer`.
7. Keep rows scannable: title, short description, status, priority, source strength and only essential metrics.
8. Remove decorative row styling and custom selected states.

---

## Preferred pattern

```tsx
<ListContainer>
  <RiskQueueRow
    riskTitle="Customer-ready proof is incomplete"
    scope="QBR preparation"
    riskLabel="Proof gap"
    riskTone="warning"
    priority="high"
    sourceStrength="partial"
  />
</ListContainer>
```

---

## Acceptance criteria

The repaired screen passes if repeated objects are compact, readable, grouped in `ListContainer`, and use package row states instead of local styling.
