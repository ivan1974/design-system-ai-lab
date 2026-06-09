# Repair Prompt — Card Saturation

## Use when

Use this repair prompt when Make generates a long page made of many equal cards.

Typical symptoms:

- one card per fact
- one card per signal
- one card per action
- one card per proof point
- too many equal surfaces
- no clear hierarchy
- no workspace structure

---

## Repair instruction

```txt
Revise the screen to remove card saturation.

Do not use one Card per fact, signal, action or proof point.
Use WorkspaceShell for the screen shell.
Use FilterBar for scope and filters when relevant.
Use MasterDetailLayout when the user needs to compare a list and inspect a selected item.
Use DetailPanel, DetailPanelTabs and StickyActionBar for selected item review when detail is needed.
Use SectionStack and SectionBlock for grouped content.
Use KeyValueList and KeyValueRow for compact facts.
Use MetricStrip and CompactMetric for secondary signals.
Use EvidenceRow for source and evidence context.
Use SignalRow for repeated observed signals.
Use ActionRow for repeated follow-up actions.
Keep AlertCard, ActionCard and RecommendationCard only for highlighted decision objects.
Keep source scope, freshness and validation visible where trust matters.
Import everything from design-system-ai-lab.
Do not create local components.
```

---

## Acceptance checks

- The revised screen is not a long stack of equal cards.
- Repeated items use rows or compact primitives.
- Cards are reserved for highlighted objects.
- The user can identify the main decision and next action quickly.
