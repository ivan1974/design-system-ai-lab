import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { Button } from "../components/button";
import { TableCell, TableRow } from "../components/table";
import { ConnectivityLabel } from "../decision/connectivity-label";
import { CoverageTag } from "../decision/coverage-tag";
import { HealthPill } from "../decision/health-pill";
import { StatusWithIcon } from "../decision/status-with-icon";
import type { InstalledBaseAsset } from "../types/installed-base";

export type AssetInventoryRowProps = HTMLAttributes<HTMLTableRowElement> & {
  asset: InstalledBaseAsset;
  onSelectAsset?: (asset: InstalledBaseAsset) => void;
};

function enforceThirdParty(asset: InstalledBaseAsset): InstalledBaseAsset {
  if (asset.state !== "third-party") return asset;
  return { ...asset, connectivity: "unknown", coverage: "no-coverage", health: "unknown", status: "no-record" };
}

export const AssetInventoryRow = forwardRef<HTMLTableRowElement, AssetInventoryRowProps>(
  ({ asset, onSelectAsset, className = "", ...props }, ref) => {
    const normalizedAsset = enforceThirdParty(asset);
    const location = `${normalizedAsset.building} · ${normalizedAsset.electricalArea} · ${normalizedAsset.room}`;

    return (
      <TableRow ref={ref} className={[normalizedAsset.attentionRequired ? "bg-amber-50/50" : "", className].join(" ")} {...props}>
        <TableCell>
          <div className="grid gap-1">
            <ConnectivityLabel value={normalizedAsset.connectivity} />
            <span className="font-medium text-(--ec-color-text-primary)">{normalizedAsset.name}</span>
            <span className="text-xs text-(--ec-color-text-secondary)">{normalizedAsset.reference}</span>
            <span className="text-xs text-(--ec-color-text-muted)">{normalizedAsset.description}</span>
          </div>
        </TableCell>
        <TableCell>{normalizedAsset.type}</TableCell>
        <TableCell>{location}</TableCell>
        <TableCell><CoverageTag coverage={normalizedAsset.coverage} /></TableCell>
        <TableCell><HealthPill health={normalizedAsset.health} /></TableCell>
        <TableCell>
          <div className="grid gap-1">
            <StatusWithIcon status={normalizedAsset.status} />
            {normalizedAsset.statusDate ? <span className="text-xs text-(--ec-color-text-muted)">{normalizedAsset.statusDate}</span> : null}
          </div>
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
