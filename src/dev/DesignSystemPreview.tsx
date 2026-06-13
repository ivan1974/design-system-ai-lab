import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertTitle,
  Badge,
  Button,
  Checkbox,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  Pill,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  ScrollArea,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tag,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../design-system/primitives';
import {
  AllFiltersPanel,
  AssetInventoryRow,
  CheckboxOption,
  FilterDropdown,
  HealthBadge,
  InstalledBaseHeader,
  MainNavigation,
  SearchField,
  StatusLabel,
  ViewFilterBar,
} from '../design-system/components';

const assetColumnWidths = 'grid-cols-[minmax(220px,2fr)_120px_160px_150px_110px_150px_36px]';

const sampleAsset = {
  asset_id: 'AX-UPS-0041',
  name: 'UPS Galaxy VS — B1',
  description: '480 kVA UPS, Data Hall B',
  type: 'UPS',
  building: 'Main Building',
  area: 'Data Hall B',
  room: 'E-Room 04',
  coverage: 'Advantage Plus',
  dpp: true,
  connectivity: 'connected' as const,
  health: 'Poor' as const,
  activity: 'Active alert' as const,
  date: '2025-06-11',
};

const sampleAssetSecond = {
  asset_id: 'AX-UPS-0088',
  name: 'APC Smart-UPS RT 10kVA',
  description: '10 kVA UPS, IT Closet 3',
  type: 'UPS',
  building: 'Annex',
  area: 'IT Infrastructure',
  room: 'IT Closet 3',
  coverage: 'No active coverage',
  dpp: false,
  connectivity: 'not-connected' as const,
  health: 'Unknown' as const,
  activity: 'Last service visit' as const,
  date: '2022-09-20',
};

export function DesignSystemPreview() {
  const [activeView, setActiveView] = useState('all');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState('1');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({
    Health: ['Poor'],
  });
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [collapsibleOpen, setCollapsibleOpen] = useState(true);

  const toggleFilter = (category: string, option: string) => {
    setActiveFilters(current => {
      const selectedValues = current[category] ?? [];
      const nextValues = selectedValues.includes(option)
        ? selectedValues.filter(value => value !== option)
        : [...selectedValues, option];

      return {
        ...current,
        [category]: nextValues,
      };
    });
  };

  const clearFilters = () => setActiveFilters({});
  const activeFilterCount = Object.values(activeFilters).reduce((sum, values) => sum + values.length, 0);

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground">
        <InstalledBaseHeader
          siteName="Design System Preview"
          contextLabel="Make kit"
          buildingCount="3"
          roomCount="8"
          statusLabel="Current public API"
          portfolioTitle="DS Lab"
        />

        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-6">
          <section className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h1 className="text-xl font-semibold tracking-tight">Design System Preview</h1>
                <p className="mt-1 text-sm text-muted-foreground">
                  Visual check for current primitives and product components. This page is for development only.
                </p>
              </div>
              <Badge variant="success" shape="pill">Current DS only</Badge>
            </div>
            <Alert variant="neutral">
              <AlertTitle>Preview purpose</AlertTitle>
              <AlertDescription>
                Use this page to verify how exported primitives and components look before asking Figma Make to compose screens.
              </AlertDescription>
            </Alert>
          </section>

          <PreviewSection title="Product components" description="Compositions exported from src/design-system/components.">
            <div className="overflow-hidden rounded-xl border border-border bg-white">
              <InstalledBaseHeader
                siteName="Horizon Campus — Building A"
                contextLabel="Pre-review"
                buildingCount="3"
                roomCount="8"
                statusLabel="Customer review: 14 Jun 2025"
                portfolioTitle="Acme Industries"
              />
              <ViewFilterBar
                views={[
                  { id: 'all', label: 'All assets', icon: null },
                  { id: 'attention', label: 'Needs attention', icon: <span>3</span> },
                  { id: 'connected', label: 'Connected', icon: null },
                ]}
                activeView={activeView}
                quickFilterOptions={{
                  Health: ['Poor', 'Fair', 'Good', 'Unknown'],
                  Connectivity: ['Connected', 'Not connected'],
                }}
                activeFilterCount={activeFilterCount}
                activeFilters={activeFilters}
                onViewChange={setActiveView}
                onAllFilters={() => setFiltersOpen(true)}
                onToggleOption={toggleFilter}
              />
              <div className="flex items-center gap-3 border-b border-border px-5 py-3">
                <SearchField value={query} onChange={setQuery} placeholder="Search assets, ID, type…" className="w-72" />
                <FilterDropdown
                  label="Coverage"
                  options={['Advantage Plus', 'Advantage', 'Essential', 'No active coverage'].map(value => ({ label: value, value }))}
                  selectedValues={activeFilters.Coverage ?? []}
                  onToggle={value => toggleFilter('Coverage', value)}
                />
              </div>
              <div className={`grid ${assetColumnWidths} gap-3 border-b border-border bg-muted px-5 py-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground`}>
                <div>Asset</div>
                <div>Type</div>
                <div>Location</div>
                <div>Coverage</div>
                <div>Health</div>
                <div>Last signal</div>
                <div />
              </div>
              <AssetInventoryRow
                asset={sampleAsset}
                selected={selected === '1'}
                columnWidths={assetColumnWidths}
                onSelect={() => setSelected('1')}
              />
              <Separator />
              <AssetInventoryRow
                asset={sampleAssetSecond}
                selected={selected === '2'}
                columnWidths={assetColumnWidths}
                onSelect={() => setSelected('2')}
              />
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <PreviewCard title="Status helpers">
                <div className="flex flex-wrap items-center gap-3">
                  <HealthBadge health="Critical" />
                  <HealthBadge health="Poor" />
                  <HealthBadge health="Fair" />
                  <HealthBadge health="Good" />
                  <HealthBadge health="Excellent" />
                  <HealthBadge health="Unknown" />
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <StatusLabel activity="Live telemetry" />
                  <StatusLabel activity="Active alert" />
                  <StatusLabel activity="Last service visit" />
                  <StatusLabel activity="No record" />
                </div>
              </PreviewCard>

              <PreviewCard title="Choice helpers">
                <div className="flex flex-col gap-2">
                  <CheckboxOption label="Connected assets" checked={checkboxChecked} onChange={() => setCheckboxChecked(current => !current)} />
                  <CheckboxOption label="Needs attention" checked={!checkboxChecked} onChange={() => setCheckboxChecked(current => !current)} />
                </div>
              </PreviewCard>
            </div>

            <MainNavigation />
          </PreviewSection>

          <PreviewSection title="Actions and labels" description="Buttons, badges, pills and tags.">
            <PreviewCard title="Buttons">
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary">Primary action</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="filter" active>Filter active</Button>
                <Button variant="icon" aria-label="Icon button">?</Button>
              </div>
            </PreviewCard>

            <PreviewCard title="Badges, pills, tags">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="neutral">Neutral</Badge>
                <Badge variant="subtle">Subtle</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="info">Info</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="danger">Danger</Badge>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <Pill active>Active pill</Pill>
                <Pill variant="success" active>Connected</Pill>
                <Pill variant="warning">Needs review</Pill>
                <Tag active>Active tag</Tag>
                <Tag variant="success" active>Validated</Tag>
              </div>
            </PreviewCard>
          </PreviewSection>

          <PreviewSection title="Inputs and controls" description="Form primitives for real user input only.">
            <div className="grid gap-4 lg:grid-cols-3">
              <PreviewCard title="Input">
                <Input placeholder="Asset reference" />
              </PreviewCard>

              <PreviewCard title="Select">
                <Select defaultValue="health">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a view" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="health">Health</SelectItem>
                    <SelectItem value="connectivity">Connectivity</SelectItem>
                    <SelectItem value="coverage">Coverage</SelectItem>
                  </SelectContent>
                </Select>
              </PreviewCard>

              <PreviewCard title="Checkbox / Switch">
                <div className="flex items-center gap-3">
                  <Checkbox checked={checkboxChecked} onCheckedChange={value => setCheckboxChecked(value === true)} />
                  <span className="text-sm">Include non-connected assets</span>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <Switch checked={switchChecked} onCheckedChange={setSwitchChecked} />
                  <span className="text-sm">Show evidence details</span>
                </div>
              </PreviewCard>
            </div>
          </PreviewSection>

          <PreviewSection title="Feedback and disclosure" description="Alerts, tabs, accordions, collapsibles, dialog, sheet, popover and tooltip.">
            <div className="grid gap-4 lg:grid-cols-2">
              <PreviewCard title="Alerts">
                <div className="flex flex-col gap-3">
                  <Alert variant="success"><AlertTitle>Connected</AlertTitle><AlertDescription>Live telemetry is available.</AlertDescription></Alert>
                  <Alert variant="warning"><AlertTitle>Visibility limited</AlertTitle><AlertDescription>No live data for this asset. Last record is stale.</AlertDescription></Alert>
                  <Alert variant="danger"><AlertTitle>Critical signal</AlertTitle><AlertDescription>Immediate review is required before customer discussion.</AlertDescription></Alert>
                </div>
              </PreviewCard>

              <PreviewCard title="Tabs">
                <Tabs defaultValue="overview">
                  <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="health">Health</TabsTrigger>
                    <TabsTrigger value="intelligence">Intelligence</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="pt-3 text-sm text-muted-foreground">Asset context and status summary.</TabsContent>
                  <TabsContent value="health" className="pt-3 text-sm text-muted-foreground">Observed facts and evidence sources.</TabsContent>
                  <TabsContent value="intelligence" className="pt-3 text-sm text-muted-foreground">AI-assisted interpretation with validation state.</TabsContent>
                </Tabs>
              </PreviewCard>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <PreviewCard title="Accordion / Collapsible">
                <Accordion type="single" collapsible defaultValue="evidence">
                  <AccordionItem value="evidence">
                    <AccordionTrigger>Evidence source</AccordionTrigger>
                    <AccordionContent>Service report — 2024-11-03. Battery inspection completed.</AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Collapsible open={collapsibleOpen} onOpenChange={setCollapsibleOpen}>
                  <CollapsibleTrigger className="mt-4 text-sm font-medium text-foreground">Toggle validation detail</CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 rounded-lg border border-border bg-muted p-3 text-sm text-muted-foreground">
                    AI interpretation requires human review before customer-facing use.
                  </CollapsibleContent>
                </Collapsible>
              </PreviewCard>

              <PreviewCard title="Overlay primitives">
                <div className="flex flex-wrap items-center gap-3">
                  <Dialog>
                    <DialogTrigger asChild><Button>Open dialog</Button></DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Log action</DialogTitle>
                        <DialogDescription>Use dialogs for short focused tasks.</DialogDescription>
                      </DialogHeader>
                      <DialogFooter><Button variant="primary">Save</Button></DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <Sheet>
                    <SheetTrigger asChild><Button variant="secondary">Open sheet</Button></SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Asset detail</SheetTitle>
                        <SheetDescription>Use sheets when side context helps.</SheetDescription>
                      </SheetHeader>
                    </SheetContent>
                  </Sheet>

                  <Popover>
                    <PopoverTrigger asChild><Button variant="secondary">Popover</Button></PopoverTrigger>
                    <PopoverContent className="text-sm text-muted-foreground">Short contextual explanation.</PopoverContent>
                  </Popover>

                  <Tooltip>
                    <TooltipTrigger asChild><Button variant="ghost">Tooltip</Button></TooltipTrigger>
                    <TooltipContent>Lightweight helper only.</TooltipContent>
                  </Tooltip>
                </div>
              </PreviewCard>
            </div>
          </PreviewSection>

          <PreviewSection title="Data display" description="Table, progress, scroll area and dropdown menu.">
            <div className="grid gap-4 lg:grid-cols-2">
              <PreviewCard title="Table">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Asset</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Evidence</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>UPS Galaxy VS — B1</TableCell>
                      <TableCell><Badge variant="danger">Poor</Badge></TableCell>
                      <TableCell>Live telemetry</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>APC Smart-UPS RT</TableCell>
                      <TableCell><Badge variant="neutral">Unknown</Badge></TableCell>
                      <TableCell>Last service record</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </PreviewCard>

              <PreviewCard title="Progress / Scroll / Menu">
                <div className="space-y-3">
                  <div className="text-sm font-medium">Proof readiness</div>
                  <Progress value={64} />
                  <ScrollArea className="h-24 rounded-lg border border-border p-3">
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>Evidence source A — current.</p>
                      <p>Evidence source B — aged.</p>
                      <p>Evidence source C — requires validation.</p>
                      <p>Evidence source D — historical report.</p>
                    </div>
                  </ScrollArea>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild><Button variant="secondary">Actions</Button></DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Asset actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Add to review agenda</DropdownMenuItem>
                      <DropdownMenuItem>Log action</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </PreviewCard>
            </div>
          </PreviewSection>

          <AllFiltersPanel
            isOpen={filtersOpen}
            categories={{
              Health: ['Critical', 'Poor', 'Fair', 'Good', 'Excellent', 'Unknown'],
              Connectivity: ['Connected', 'Not connected'],
              Coverage: ['Advantage Plus', 'Advantage', 'Essential', 'No active coverage'],
            }}
            optionStyleByCategory={{
              Health: 'pill',
              Connectivity: 'tag',
              Coverage: 'checkbox',
            }}
            activeFilters={activeFilters}
            onToggleOption={toggleFilter}
            onClearAll={clearFilters}
            onApply={() => setFiltersOpen(false)}
            onClose={() => setFiltersOpen(false)}
          />
        </div>
      </div>
    </TooltipProvider>
  );
}

export default DesignSystemPreview;

function PreviewSection({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <h2 className="text-base font-semibold tracking-tight">{title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="flex flex-col gap-4">{children}</div>
    </section>
  );
}

function PreviewCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
      <div className="mb-3 text-sm font-semibold">{title}</div>
      {children}
    </div>
  );
}
