# Style Guidelines

## Purpose

This file defines the visual style rules Figma Make should follow when generating
screens with the `design-system-ai-lab` package.

Its role is to frame the visual output of generated screens without multiplying
low-level styling rules.

Use `styles.md` to define:

- visual personality
- layout principles
- typography rules
- density rules
- card usage rules
- button hierarchy
- status communication
- forbidden visual patterns
- style review criteria

Do not use this file as the full design system documentation.

For generation rules, screen routing, AI usage, evidence, accessibility and
acceptance criteria, read:

```txt
Guidelines.md
```

For technical setup and package imports, read:

```txt
setup.md
```

For token names, aliases and tone mapping, read:

```txt
tokens.md
```

---

## Core style principle

The visual style must remain:

- sober
- B2B
- readable
- structured
- action-oriented
- evidence-aware

Generated screens should look like operational product interfaces.

They should not look like marketing pages, generic SaaS dashboards or decorative
analytics templates.

Style should support understanding, trust and action.

Style should not create decoration, hide uncertainty, make weak evidence look
stronger or replace approved package components and business patterns.

---

## Required CSS import

Always import the design system CSS once:

```tsx
import "design-system-ai-lab/styles.css";
```

Do not duplicate the design system CSS in generated files.

Do not recreate `:root` tokens locally.

Do not create a competing theme file unless explicitly requested.

Do not create a new visual identity.

---

## Visual personality

Generated screens should feel:

- calm
- sober
- professional
- trustworthy
- operational
- product-oriented
- decision-oriented

Generated screens should not feel:

- playful
- flashy
- consumer-app-like
- marketing-oriented
- futuristic without a business reason
- generic SaaS template-like
- visually impressive but weak in actionability

A good generated screen should feel like:

```txt
A sober operational B2B interface that helps a service user understand status,
risks, evidence and next actions.
```

A bad generated screen feels like:

```txt
A generic analytics dashboard with decorative cards, colorful charts and unclear
actionability.
```

---

## Layout principles

Use layout to clarify the user decision.

The default reading order should be:

```txt
Context
→ decision signals
→ risks or blockers
→ recommendations when relevant
→ owned actions
```

For common service decision screens, this often becomes:

```txt
PageHeader
→ Customer or service context
→ metrics
→ risks
→ actions
```

Use simple layout utilities for structure:

```txt
min-h-screen
mx-auto
max-w-5xl
max-w-6xl
max-w-7xl
p-4
p-6
p-8
grid
flex
gap-3
gap-4
gap-6
space-y-4
space-y-8
items-start
items-center
justify-between
```

Use whitespace to clarify hierarchy and grouping.

Do not create overly complex layouts.

Do not create large dashboard grids by default.

Do not add columns, panels or sections only to make the screen feel rich.

Do not turn a decision-support screen into a long scrolling dashboard without
stronger prioritization.

---

## Typography rules

Use typography to clarify hierarchy, not to create decoration.

Preferred text utilities:

```txt
text-xs
text-sm
text-base
text-lg
text-2xl
text-3xl
font-medium
font-semibold
tracking-tight
```

Use larger type for primary headings and important summaries.

Use smaller type for metadata and helper text.

Keep evidence, freshness, source strength, validation context and proof status
readable when they affect trust.

Do not introduce:

- custom font stacks
- decorative fonts
- oversized display typography
- marketing-style headline systems
- unnecessary all-caps labels
- typography that makes weak evidence look stronger than it is

Do not rely on confident wording, larger type or stronger weight to replace
source evidence.

---

## Density rules

Generated screens should remain dense enough for B2B operational work.

Prefer focused density:

- 2 to 4 key metrics
- 2 to 5 priority risks or blockers
- 2 to 5 owned actions
- one main action per main screen section
- one clear decision per generated screen

Avoid:

- too many cards
- too many metrics
- too many badges
- too many primary actions
- decorative whitespace
- long unprioritized scrolling layouts
- dense data dumps without grouping
- marketing-style spacious layouts

Use spacing to reduce cognitive load, not to inflate the interface.

---

## Card usage rules

Use cards to group related information around one purpose.

Prefer business patterns when they match the section intent:

```tsx
<CustomerStatusCard />
<ConnectivityCoverageCard />
<RenewalRiskSummary />
<ValueProofCard />
<AssetIntelligenceSummary />
<ServiceRiskSummary />
<RecommendationReviewPanel />
<CustomerReviewReadinessCard />
```

Use decision components for metrics, risks, recommendations and actions:

```tsx
<MetricGrid />
<MetricCard />
<PriorityList />
<AlertCard />
<ActionList />
<ActionCard />
<RecommendationCard />
<StatusSummary />
```

Use generic `Card` only when no more specific business pattern or decision
component fits.

Do not rebuild known business sections with raw `Card`, `div`, `dt` or `dd`
markup when a dedicated pattern exists.

Do not create generic cards titled:

```txt
Overview
Details
Data
Info
Misc
```

Cards should help the user understand what matters and what to do next.

---

## Button hierarchy

Buttons should be explicit and action-oriented.

Use:

- primary style for the main action
- secondary style for contextual actions
- ghost style for low-emphasis actions
- danger style only for destructive actions

Do not use multiple competing primary buttons in the same section.

Avoid vague button labels:

```txt
OK
Submit
More
Click here
Go
```

Prefer explicit button labels:

```txt
Create action
Review risk
Plan follow-up
Check connectivity
View details
Prepare value summary
Validate recommendation
```

Use `Button` directly as a `Dialog` trigger.

Do not create a local `ForwardedButton` or custom button wrapper.

Do not recreate a custom button system.

---

## Form styling rules

Use package form components for generated forms.

Preferred:

```tsx
<Field label="Owner" htmlFor="owner">
  <Input id="owner" placeholder="CSM" />
</Field>
```

Also valid:

```tsx
<Field label="Priority" htmlFor="priority">
  <Select id="priority" defaultValue="high">
    <option value="high">High</option>
    <option value="medium">Medium</option>
    <option value="low">Low</option>
  </Select>
</Field>
```

Avoid:

```tsx
<input style={{ height: "40px", borderRadius: "6px" }} />
```

Do not create inline-styled `input`, `select` or `textarea` elements.

Do not create a custom form styling system.

Do not use raw labels and inputs when `Field`, `Input`, `Select` and `Textarea`
fit the need.

---

## Status communication

Status must be communicated through text, structure and components, not color
alone.

Use:

- `Badge` for concise status, tone or metadata
- `AlertCard` for risks that need explanation and recommendation
- `StatusSummary` for structured metadata
- business patterns for known business status sections

Good:

```tsx
<Badge tone="warning">Connectivity partial</Badge>
```

Good:

```tsx
<Badge tone="warning">Expected outcome, not proven</Badge>
```

Good:

```tsx
<AlertCard
  severity="critical"
  title="Critical equipment no longer monitored"
  equipment="Main switchboard"
  description="The customer may lose visibility on key assets."
  recommendation="Plan a connectivity review with the customer and support team."
/>
```

Avoid:

```tsx
<span className="text-(--ec-color-warning)">Warning</span>
```

For evidence-sensitive states, the UI should clarify what is known, what is
uncertain and what still needs validation.

For asset-heavy screens, labels should explicitly distinguish connected,
partially connected and non-connected assets.

For value proof screens, labels should distinguish expected outcomes, technical
outcomes, internal proof and customer-ready proof.

Do not use visual confidence, stronger color or larger typography to replace
source evidence.

---

## Evidence-aware styling

Style should help users distinguish:

```txt
facts
→ source scope and source strength
→ signals
→ recommendations
→ actions
→ validation states
→ expected outcome or proof status
```

Use structured components and patterns instead of visual tricks.

Good:

```tsx
<ConnectivityCoverageCard
  coverageRate="68%"
  connectedAssets="17 assets"
  disconnectedAssets="8 assets"
  monitoringStatus="Partial monitoring coverage"
  lastUpdate="18 hours ago"
  badges={[{ label: "Connectivity partial", tone: "warning" }]}
/>
```

Avoid:

```tsx
<Card title="Connectivity">
  <p className="text-(--ec-color-warning)">Warning</p>
</Card>
```

Do not use style to make uncertain information look certain.

Do not hide validation context in overly muted text when it affects the user's
decision.

Do not use decorative emphasis to make unsupported recommendations feel more
credible.

Do not use visual hierarchy to make partial asset visibility look complete,
non-connected assets look live-monitored, AI interpretation look like
source-system truth or expected outcomes look like proven value.

---

## Charts and tables

Avoid decorative charts.

Only include charts if explicitly requested and if they support a decision.

Prefer metrics, summaries, risks, proof points and actions over generic charts.

Do not generate charts just to make the screen look like a dashboard.

Avoid large unstructured tables.

If tabular information is needed, keep it small and decision-oriented.

For this Make kit, prefer:

- `StatusSummary`
- `MetricCard`
- `AlertCard`
- `ActionCard`
- `ValueProofCard`
- business patterns

---

## Empty and loading states

If the prompt asks for states, keep them simple.

Empty states should explain:

- what is missing
- why it matters
- what the user can do next

Good empty-state copy:

```txt
Source data is unavailable. Validate the customer context in the source system before creating an action.
```

Weak empty-state copy:

```txt
No data.
```

When data is unavailable, do not imply certainty.

Do not create decorative empty illustrations unless explicitly requested.

Loading states should be calm and minimal.

Do not create animated decorative loading experiences.

---

## Forbidden visual patterns

Do not generate:

- generic SaaS dashboards
- decorative hero sections
- decorative gradients
- glassmorphism
- neumorphism
- blurred surfaces
- glow effects
- neon effects
- bright marketing visuals
- arbitrary shadows
- arbitrary radius values
- decorative charts
- generic dashboard cards
- custom card systems
- custom button systems
- custom badge systems
- custom form systems
- custom modal systems
- too many charts
- dense data dumps
- unlabeled status colors
- multiple competing primary actions
- inline-styled raw form controls
- local component wrappers
- local design system folders
- manual styling used to recreate business patterns
- visual styling that hides uncertainty
- visual styling that hides asset scope, source scope, source strength or proof status
- visual styling that makes weak evidence look stronger than it is
- non-connected assets styled as live-monitored
- expected outcomes styled as proven value
- technical outcomes or internal proof styled as customer-ready proof without validation
- unsupported recommendations styled as authoritative
- evidence-sensitive information shown too subtly

---

## Style review checklist

After generation, verify:

- the screen imports `design-system-ai-lab/styles.css`
- package styles are not duplicated locally
- generated styles do not create a competing visual system
- no competing theme file was created
- no local design system was created
- no package components were recreated locally
- no form controls were styled inline
- no new color palette was introduced
- no decorative gradients or decorative backgrounds were introduced
- no glassmorphism, glow effect or blurred surface was introduced
- no arbitrary radius or shadow values were introduced
- no generic dashboard card system was created
- no custom button, badge, card, modal or form system was created
- business patterns are used before manual section styling
- decision components are used for metrics, risks and actions
- status is not communicated by color alone
- evidence, freshness and validation context remain readable when needed
- source strength remains readable when it affects trust
- asset scope, source scope, connectivity status and proof status are not hidden by styling
- partially connected and non-connected assets are labelled in text, not color alone
- expected outcomes are not styled as proven value
- technical outcomes and internal proof are not styled as customer-ready proof without validation
- uncertainty is not hidden by visual styling
- recommendations are not styled as authoritative without supporting evidence
- the screen is readable and operational
- the visual hierarchy supports decision-making

---

## Final principle

Style should support understanding, trust and actionability.

If a visual choice does not improve clarity, hierarchy, trust or actionability,
do not add it.

If a visual choice hides uncertainty, creates false confidence, makes weak
evidence look stronger or replaces an approved component or pattern, remove it.
