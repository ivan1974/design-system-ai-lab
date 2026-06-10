# Queue rows

## Purpose

Queue rows are first-class decision-list objects.

Use them when the user needs to review, select, compare or triage customers, assets, risks or recommendations.

They replace generic row wrappers and prevent Figma Make from creating local styled divs around `SignalRow`.

---

## Components

Use:

```tsx
<ReviewQueueRow />
<CustomerQueueRow />
<AssetQueueRow />
<RiskQueueRow />
<RecommendationQueueRow />
```

`ReviewQueueRow` lives in the decision layer.

Business-specific queue rows live in the patterns layer because they map to CompanyName-like review objects.

---

## When to use ReviewQueueRow

Use `ReviewQueueRow` when no specific business row fits.

```tsx
<ReviewQueueRow
  eyebrow="Monitoring review"
  title="Main switchboard requires review"
  description="Visibility is partial and source freshness should be checked before customer communication."
  status="Review needed"
  statusTone="warning"
  priority="high"
  sourceStrength="partial"
  metrics={[{ label: "Coverage", value: "68%" }]}
/>
```

---

## When to use business rows

Use `CustomerQueueRow` for customer queues.

Use `AssetQueueRow` for asset queues.

Use `RiskQueueRow` for operational or service risk queues.

Use `RecommendationQueueRow` for recommendation review queues.

Preferred:

```tsx
<CustomerQueueRow
  customerName="Northstar Manufacturing"
  plan="CompanyName Advanced"
  description="QBR in 6 days · service visibility needs review"
  riskLabel="Critical monitoring gap"
  riskTone="danger"
  priority="high"
  sourceStrength="partial"
  coverage="54%"
  openActions="4"
/>
```

---

## List composition

Place queue rows inside `ListContainer`.

Preferred:

```tsx
<ListContainer>
  <CustomerQueueRow ... />
  <CustomerQueueRow ... />
</ListContainer>
```

Avoid:

```tsx
<div className="divide-y rounded-lg border bg-white">
  <div className="px-4 py-4 hover:bg-gray-50">...</div>
</div>
```

---

## Visual behavior

Queue rows support:

- selected state
- hover state
- title hierarchy
- metadata hierarchy
- status pills
- priority pills
- source strength pills
- compact metrics
- trailing action or indicator

Use these props instead of creating local wrappers.

---

## Make guidance

When generating customer, asset, risk or recommendation lists, Make should choose the most specific queue row available.

Use:

```txt
CustomerQueueRow for customers
AssetQueueRow for assets
RiskQueueRow for risks
RecommendationQueueRow for recommendations
ReviewQueueRow for generic review queues
```

Do not create local components named:

```txt
CustomerRow
AssetRow
RiskRow
RecommendationRow
QueueItem
ListItem
```

unless they only map data into approved queue row components and do not define styles.

---

## Anti-patterns

Avoid creating a generic dashboard row with custom classes:

```tsx
<div className="flex items-center justify-between rounded-lg border bg-white p-4 hover:bg-gray-50">
  ...
</div>
```

Avoid wrapping `SignalRow` in custom selected-state containers:

```tsx
<div className={selected ? "bg-green-50" : ""}>
  <SignalRow ... />
</div>
```

Prefer:

```tsx
<CustomerQueueRow selected ... />
```

---

## Acceptance criteria

A generated screen is better if:

- repeated review objects use queue rows
- queue rows are inside `ListContainer`
- selected and hover states are package-provided
- priority and source strength use documented props
- row titles, descriptions and metadata are visually distinct
- customer, asset, risk and recommendation rows do not look identical
- Make does not create local visual row wrappers
