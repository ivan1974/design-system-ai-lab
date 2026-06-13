# Progressive decision disclosure

## Status

```txt
SOURCE PRINCIPLE / HIERARCHY / GENAI DESIGN JUDGMENT
```

## Core idea

Do not expose every fact, metric, proof point and action at the same level.

Use this hierarchy:

```txt
Signal → Decision → Evidence
```

The first view should make the decision understandable. Supporting evidence should remain available without overwhelming the user.

---

## Why this matters

GenAI often overproduces content when given rich context.

This creates screens that are technically complete but cognitively weak:

```txt
too many cards
too many equal sections
all evidence visible at once
no clear action path
weak prioritization
```

Progressive disclosure protects decision quality.

---

## How GenAI should apply this

Use three levels:

### 1. Signal

Answers:

```txt
What requires attention?
```

Examples:

```txt
critical health
active alert
connectivity issue
missing coverage
unknown asset visibility
overdue action
weak evidence
missing validation
```

### 2. Decision

Answers:

```txt
What should be done?
```

Examples:

```txt
schedule service
contact expert
review recommendation
assign follow-through
validate source
request missing information
download report
```

### 3. Evidence

Answers:

```txt
Why should the user trust this?
```

Examples:

```txt
source
freshness
source scope
measurements
observations
validation status
history
documents
proof readiness
```

---

## Good generation behavior

For operational inventory:

```txt
show compact rows first
show attention-required items early
open detail without losing context
move evidence, history and documents into detail
keep actions visible when action is available
```

For detail panels:

```txt
summary first
tabs or sections for evidence
sticky action area when follow-through matters
```

---

## Mistakes to avoid

Do not generate:

```txt
12 equal cards
all metrics visible before the decision
all evidence visible before the summary
action hidden below long evidence detail
source strength far from recommendation
validation hidden when trust matters
```

---

## Components affected

Use:

```txt
Tabs for stable secondary views
Accordion or Collapsible for optional detail
Sheet or panel for contextual detail
Table or row structures for dense operational comparison
EvidenceList for proof trails
RecommendationCard for decision support
Alert for bounded attention signals
```

Do not use these components to hide required action ownership or validation state.

---

## Repair prompt

If the screen feels overloaded, repair it by asking:

```txt
What is the signal?
What decision does it support?
What evidence can move to a secondary layer?
What action must remain visible?
```
