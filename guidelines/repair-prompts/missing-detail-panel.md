# Repair Prompt — Missing Detail Panel

## Use when

Use this repair prompt when Make creates a list or queue but no selected item detail.

Typical symptoms:

- asset list without asset detail
- recommendation list without review detail
- risk list without evidence detail
- action queue without selected action context
- tabs are needed but missing
- the user cannot inspect source, freshness or validation for a selected item

---

## Repair instruction

```txt
Revise the screen to include selected-item review.

Use MasterDetailLayout with a list area and a detail area.
Use DetailPanel for the selected item.
Use DetailPanelHeader for title, description and status.
Use DetailPanelTabs when the selected item has multiple review questions.
Use DetailPanelBody for facts, signals, evidence and recommendations.
Use StickyActionBar when the selected item needs a persistent next action.
Use KeyValueList for compact facts.
Use EvidenceRow for source context.
Use ActionRow for follow-up actions.
Keep source scope, freshness and validation visible.
Do not hide selected-item review in generic cards.
```

---

## Acceptance checks

- A list/detail task uses MasterDetailLayout.
- The selected item has a DetailPanel.
- The detail panel shows facts before interpretation.
- Evidence, source scope and validation are visible when trust matters.
- The next action remains visible when the user is expected to act.
