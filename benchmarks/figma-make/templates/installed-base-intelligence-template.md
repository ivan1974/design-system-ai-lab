# Installed Base Intelligence generation template

Use this template when generating or repairing the Installed Base Intelligence screen.

## Required imports

Use package imports only from `design-system-ai-lab`.

Required screen-level components:

```txt
WorkspaceShell
MainNavigation
InstalledBaseHeader
InstalledBaseViewFilterBar
InstalledBaseList
AllFiltersPanel
AssetDetailAnalysisPanel
```

Do not import from:

```txt
components/ui
@radix-ui
internal/primitives
```

## Required state model

Preserve these state concepts:

```txt
activeView
activeFilters
allFiltersOpen
selectedAsset
selectedTab
```

## Required asset states

Represent exactly:

```txt
connected-oem
connected-oem-with-alert
connected-oem-with-connectivity-issue
non-connected-oem
non-connected-oem-with-service-history
third-party
```

## Third-party rule

Third-party assets must render:

```txt
Connectivity Unknown
Coverage No Coverage
Health Unknown
Status No record
```

## Required screen composition

```txt
Main Navigation
Page Header
View & Filter Bar
Installed Base List
Asset Detail Panel
```

## Required panel tabs

```txt
Overview
Health
Intelligence
Passport
History
Documents
```

## Required sticky actions

```txt
Schedule Service
Download Report
Contact Expert
```

## Health / Intelligence separation

Health is facts-only.

Intelligence is decision-oriented.

Do not duplicate Health facts into Intelligence except when a fact is referenced as supporting evidence.

## Repair instruction

When generation fails, read `guidelines/evaluation/repair/repair-router.md` and only the matching Installed Base repair prompt.
