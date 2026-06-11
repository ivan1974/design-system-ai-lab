import { forwardRef, useMemo, useState } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import { Button } from "../components/button";
import { DocumentRow } from "../components/document-row";
import { KeyValueList, KeyValueRow } from "../components/key-value-list";
import { Tabs } from "../components/tabs";
import { Text } from "../components/typography";
import { Timeline, TimelineItem } from "../components/timeline";
import { SidePanel } from "../composition/side-panel";
import { CoverageTag } from "../decision/coverage-tag";
import { HealthPill } from "../decision/health-pill";
import { StatusWithIcon } from "../decision/status-with-icon";
import type { InstalledBaseAsset } from "../types/installed-base";

export type AssetDetailTab = "overview" | "health" | "intelligence" | "passport" | "history" | "documents";
export type AssetDetailDocument = { title: string; description?: string; meta?: string };
export type AssetDetailHistoryItem = { title: string; date: string; description?: string };
export type AssetDetailRecommendation = { title: string; rationale: string; nextStep: string };

export type AssetDetailAnalysisPanelProps = Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
  open: boolean;
  asset: InstalledBaseAsset;
  activeTab?: AssetDetailTab;
  onTabChange?: (tab: AssetDetailTab) => void;
  onClose: () => void;
  onScheduleService?: (asset: InstalledBaseAsset) => void;
  onDownloadReport?: (asset: InstalledBaseAsset) => void;
  onContactExpert?: (asset: InstalledBaseAsset) => void;
  documents?: AssetDetailDocument[];
  history?: AssetDetailHistoryItem[];
  recommendations?: AssetDetailRecommendation[];
};

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "health", label: "Health" },
  { id: "intelligence", label: "Intelligence" },
  { id: "passport", label: "Passport" },
  { id: "history", label: "History" },
  { id: "documents", label: "Documents" },
];

function renderOverview(asset: InstalledBaseAsset) {
  return (
    <KeyValueList columns={2}>
      <KeyValueRow label="Type" value={asset.type} />
      <KeyValueRow label="Reference" value={asset.reference} />
      <KeyValueRow label="Location" value={`${asset.building} · ${asset.electricalArea} · ${asset.room}`} />
      <KeyValueRow label="Coverage" value={<CoverageTag coverage={asset.coverage} />} />
      <KeyValueRow label="Current health" value={<HealthPill health={asset.health} />} />
      <KeyValueRow label="Operational status" value={<StatusWithIcon status={asset.status} />} helper={asset.statusDate} />
    </KeyValueList>
  );
}

function renderHealth(asset: InstalledBaseAsset) {
  return (
    <div className="grid gap-4">
      <Text variant="caption">Facts only. This tab shows observed condition signals, not diagnosis or recommendations.</Text>
      <KeyValueList columns={2}>
        <KeyValueRow label="Health" value={<HealthPill health={asset.health} />} />
        <KeyValueRow label="Connectivity" value={asset.connectivity} />
        <KeyValueRow label="Status" value={<StatusWithIcon status={asset.status} />} helper={asset.statusDate} />
        <KeyValueRow label="Coverage" value={<CoverageTag coverage={asset.coverage} />} />
      </KeyValueList>
    </div>
  );
}

function renderIntelligence(recommendations: AssetDetailRecommendation[]) {
  return (
    <div className="grid gap-4">
      <Text variant="caption">Decision-oriented interpretation. This tab converts signals into recommended next steps.</Text>
      {recommendations.map((recommendation) => (
        <div key={recommendation.title} className="rounded-(--ec-radius-md) border border-(--ec-color-border) p-4">
          <p className="text-sm font-semibold text-(--ec-color-text-primary)">{recommendation.title}</p>
          <p className="mt-1 text-sm text-(--ec-color-text-secondary)">{recommendation.rationale}</p>
          <p className="mt-3 text-xs font-medium uppercase tracking-wide text-(--ec-color-text-muted)">{recommendation.nextStep}</p>
        </div>
      ))}
    </div>
  );
}

function renderPassport(asset: InstalledBaseAsset) {
  return (
    <KeyValueList columns={2}>
      <KeyValueRow label="Asset name" value={asset.name} />
      <KeyValueRow label="Asset reference" value={asset.reference} />
      <KeyValueRow label="Asset type" value={asset.type} />
      <KeyValueRow label="Asset description" value={asset.description} />
    </KeyValueList>
  );
}

function renderHistory(history: AssetDetailHistoryItem[]) {
  return <Timeline>{history.map((item) => <TimelineItem key={`${item.date}-${item.title}`} title={item.title} date={item.date} description={item.description} />)}</Timeline>;
}

function renderDocuments(documents: AssetDetailDocument[]) {
  return <div>{documents.map((document) => <DocumentRow key={document.title} title={document.title} description={document.description} meta={document.meta} />)}</div>;
}

export const AssetDetailAnalysisPanel = forwardRef<HTMLDivElement, AssetDetailAnalysisPanelProps>(
  ({ open, asset, activeTab, onTabChange, onClose, onScheduleService, onDownloadReport, onContactExpert, documents = [], history = [], recommendations = [], className = "", ...props }, ref) => {
    const [internalTab, setInternalTab] = useState<AssetDetailTab>("overview");
    const selectedTab = activeTab ?? internalTab;
    const defaultRecommendations = useMemo(() => recommendations.length > 0 ? recommendations : [{ title: "Review asset priority", rationale: "Current asset signals should be reviewed against site criticality before scheduling follow-up.", nextStep: "Decide whether to schedule service, download a report, or contact an expert." }], [recommendations]);

    function handleTabChange(value: string) {
      const nextTab = value as AssetDetailTab;
      onTabChange?.(nextTab);
      if (!activeTab) setInternalTab(nextTab);
    }

    const content: Record<AssetDetailTab, ReactNode> = {
      overview: renderOverview(asset),
      health: renderHealth(asset),
      intelligence: renderIntelligence(defaultRecommendations),
      passport: renderPassport(asset),
      history: renderHistory(history),
      documents: renderDocuments(documents),
    };

    return (
      <SidePanel
        ref={ref}
        open={open}
        onClose={onClose}
        title={asset.name}
        description={`${asset.building} · ${asset.electricalArea} · ${asset.room} · ${asset.description}`}
        footer={
          <div className="grid w-full gap-2 sm:grid-cols-3">
            <Button variant="secondary" size="sm" onClick={() => onScheduleService?.(asset)}>Schedule Service</Button>
            <Button variant="outline" size="sm" onClick={() => onDownloadReport?.(asset)}>Download Report</Button>
            <Button variant="primary" size="sm" onClick={() => onContactExpert?.(asset)}>Contact Expert</Button>
          </div>
        }
        className={className}
        {...props}
      >
        <div className="grid gap-5">
          <Tabs tabs={tabs} value={selectedTab} onValueChange={handleTabChange} ariaLabel="Asset detail tabs" size="sm" />
          <div>{content[selectedTab]}</div>
        </div>
      </SidePanel>
    );
  },
);

AssetDetailAnalysisPanel.displayName = "AssetDetailAnalysisPanel";
