# Workspace v2 Quality Checklist

## Purpose

Use this checklist after the blocking checklist when reviewing a Make output that
should follow the decision workspace standard.

This checklist improves valid outputs.

It does not replace:

```txt
review/blocking-checklist.md
review/quality-checklist.md
```

---

## 1. User decision

- [ ] The screen supports one clear user decision.
- [ ] The target user role is visible or inferable.
- [ ] The title and description match the decision.
- [ ] The primary action supports the decision.
- [ ] The screen does not solve unrelated goals.

---

## 2. Workspace structure

- [ ] `WorkspaceShell` is used when the screen has scope, filters, review areas or persistent actions.
- [ ] `FilterBar` shows scope, filters or result count when relevant.
- [ ] `MasterDetailLayout` is used when the user reviews a list and a selected item.
- [ ] `DetailPanel` is used for selected-item review.
- [ ] `DetailPanelTabs` is used when the selected item has multiple review questions.
- [ ] `StickyActionBar` is used when the selected item has a clear next action.
- [ ] `SectionStack` and `SectionBlock` group dense sections.

---

## 3. Prop and helper discipline

- [ ] Package component props use documented values only.
- [ ] Make does not invent `variant`, `tone`, `severity`, `priority`, `strength`, `mode`, `status` or `size` values.
- [ ] Small local render helpers only compose approved package components.
- [ ] No local visual helper creates a new button, card, badge, pill, tag, row, panel or form system.
- [ ] Inline styles do not recreate component states, surfaces, badges, cards, radius, shadows or visual identity.

Use this repair prompt when this fails:

```txt
repair-prompts/invalid-props-or-local-visual-components.md
```

---

## 4. Card saturation

- [ ] The screen is not a long stack of equal cards.
- [ ] Repeated facts use `KeyValueList` and `KeyValueRow`.
- [ ] Repeated signals use `SignalRow` or `MetricStrip`.
- [ ] Repeated evidence uses `EvidenceRow`.
- [ ] Repeated actions use `ActionRow`.
- [ ] Cards are reserved for highlighted decision objects.

Use this repair prompt when this fails:

```txt
repair-prompts/card-saturation.md
```

---

## 5. Evidence hierarchy

- [ ] Facts appear before interpretation.
- [ ] Source scope is visible when trust depends on it.
- [ ] Source strength is visible when trust depends on it.
- [ ] Freshness is visible when timing affects trust.
- [ ] Validation status is visible before customer use.
- [ ] Recommendations are traceable to visible facts or evidence.

---

## 6. Actionability

- [ ] Actions are specific.
- [ ] Actions have owner, due date and priority.
- [ ] Actions follow risks, proof gaps or recommendations.
- [ ] The primary action does not compete with many other primary actions.

---

## 7. Visual sobriety

- [ ] The screen remains B2B and operational.
- [ ] No decorative gradients are used.
- [ ] No glassmorphism is used.
- [ ] No decorative charts are used.
- [ ] No custom card, badge, button or form system is created.
- [ ] The screen would not pass as a generic SaaS dashboard.

---

## Final principle

A workspace v2 screen should make the decision path visible:

```txt
scope
→ facts
→ signals
→ detail review
→ evidence
→ next action
```
