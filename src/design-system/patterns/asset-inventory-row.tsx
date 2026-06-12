import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { Button } from "../components/button";
import { TableCell, TableRow } from "../components/table";
import { SemanticPill } from "../decision/semantic-pill";
import type { SemanticPillTone } from "../decision/semantic-pill";
import { SemanticTag } from "../decision/semantic-tag";
import type { SemanticTagTone } from "../decision/semantic-tag";
import { StatusIndicator } from "../decision/status-indicator";
import type { StatusIndicatorIcon, StatusIndicatorTone } from "../decision/status-indicator";
import type { InstalledBaseAsset, InstalledBaseConnectivity, InstalledBaseCoverage, InstalledBaseHealth, InstalledBaseOperationalStatus } from "../types/installed-base";

export type AssetInventoryRowProps = HTMLAttributes<HTMLTableRowElement> & {
  asset: InstalledBaseAsset;
  onSelectAsset?: (asset: InstalledBaseAsset) => void;
};

const connectivityMeta: Record<InstalledBaseConnectivity, { label: string; tone: StatusIndicatorTone }> = {
  connected: { label: "Connected", tone: "success" },
  "not-connected": { label: "Not connected", tone: "warning" },
  unknown: { label: "Unknown", tone: "muted" },
};

const coverageMeta: Record<InstalledBaseCoverage, { label: string; tone: SemanticTagTone }> = {
  "premium-service-plan-advanced": { label: "Advanced plan", tone: "primary" },
  "premium-service-plan-essential": { label: "Essential plan", tone: "success" },
  "advanced-service-plan": { label: "Service plan", tone: "neutral" },
  "no-coverage": { label: "No coverage", tone: "warning" },
};

const healthMeta: Record<InstalledBaseHealth, { label: string; tone: SemanticPillTone }> = {
  critical: { label: "Critical", tone: "danger" },
  poor: { label: "Poor", tone: "danger" },
  fair: { label: "Fair", tone: "warning" },
  good: { label: "Good", tone: "success" },
  excellent: { label: "Excellent", tone: "success" },
  unknown: { label: "Unknown", tone: "muted" },
};

const statusMeta: Record<InstalledBaseOperationalStatus, { label: string; tone: StatusIndicatorTone; icon: StatusIndicatorIcon }> = {
  "live-telemetry": { label: "Live telemetry", tone: "success", icon: "check" },
  "active-alert": { label: "Active alert", tone: "danger", icon: "warning" },
  "connectivity-issue": { label: "Connectivity issue", tone: "warning", icon: "warning" },
  "last-service-visit": { label: "Last service visit", tone: "neutral", icon: "clock" },
  "no-record": { label: "No record", tone: "muted", icon: "dash" },
};

function enforceThirdParty(asset: InstalledBaseAsset): InstalledBaseAsset {
  if (asset.state !== "third-party") return asset;
  return { ...asset, connectivity: "unknown", coverage: "no-coverage", health: "unknown", status: "no-record" };
}

export const AssetInventoryRow = forwardRef<HTMLTableRowElement, AssetInventoryRowProps>(
  ({ asset, onSelectAsset, className = "", ...props }, ref) => {
    const normalizedAsset = enforceThirdParty(asset);
    const location = `${normalizedAsset.building} · ${normalizedAsset.electricalArea} · ${normalizedAsset.room}`;
    const connectivity = connectivityMeta[normalizedAsset.connectivity];
    const coverage = coverageMeta[normalizedAsset.coverage];
    const health = healthMeta[normalizedAsset.health];
    const status = statusMeta[normalizedAsset.status];

    return (
      <TableRow ref={ref} className={[normalizedAsset.attentionRequired ? "bg-amber-50/50" : "", className].join(" ")} {...props}>
        <TableCell>
          <div className="grid gap-1">
            <StatusIndicator tone={connectivity.tone} icon="dot" label={connectivity.label} />
            <span className="font-medium text-(--ec-color-text-primary)">{normalizedAsset.name}</span>
            <span className="text-xs text-(--ec-color-text-secondary)">{normalizedAsset.reference}</span>
            <span className="text-xs text-(--ec-color-text-muted)">{normalizedAsset.description}</span>
          </div>
        </TableCell>
        <TableCell>{normalizedAsset.type}</TableCell>
        <TableCell>{location}</TableCell>
        <TableCell><SemanticTag tone={coverage.tone}>{coverage.label}</SemanticTag></TableCell>
        <TableCell><SemanticPill tone={health.tone}>{health.label}</SemanticPill></TableCell>
        <TableCell>
          <StatusIndicator tone={status.tone} icon={status.icon} label={status.label} meta={normalizedAsset.statusDate} />
        </TableCell>
        <TableCell>
          <Button variant="ghost" size="sm" onClick={() => onSelectAsset?.(normalizedAsset)}>
            {normalizedAsset.actionLabel ?? "View details"}
          </Button>
        </TableCell>
      </TableRow>
    );
  },
);

AssetInventoryRow.displayName = "AssetInventoryRow";
