import { Fragment, forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "../components/table";
import { AssetInventoryRow } from "./asset-inventory-row";
import type { InstalledBaseAsset, InstalledBaseBuildingGroup } from "../types/installed-base";
import { installedBaseColumns } from "../types/installed-base";

export type InstalledBaseListProps = HTMLAttributes<HTMLDivElement> & {
  groups: InstalledBaseBuildingGroup[];
  onSelectAsset?: (asset: InstalledBaseAsset) => void;
};

function flattenAssets(groups: InstalledBaseBuildingGroup[]) {
  return groups.flatMap((building) => building.electricalAreas.flatMap((area) => area.rooms.flatMap((room) => room.assets)));
}

export const InstalledBaseList = forwardRef<HTMLDivElement, InstalledBaseListProps>(
  ({ groups, onSelectAsset, className = "", ...props }, ref) => {
    const attentionAssets = flattenAssets(groups).filter((asset) => asset.attentionRequired || asset.status === "active-alert" || asset.status === "connectivity-issue");

    return (
      <div ref={ref} className={["mx-auto w-4/5 min-w-0", className].join(" ")} {...props}>
        <Table density="compact">
          <TableHeader>
            <TableRow>{installedBaseColumns.map((column) => <TableHead key={column}>{column}</TableHead>)}</TableRow>
          </TableHeader>
          <TableBody>
            {attentionAssets.length > 0 ? (
              <Fragment>
                <tr><td colSpan={7} className="bg-amber-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-(--ec-color-warning)">Attention required</td></tr>
                {attentionAssets.map((asset) => <AssetInventoryRow key={`attention-${asset.id}`} asset={{ ...asset, attentionRequired: true }} onSelectAsset={onSelectAsset} />)}
              </Fragment>
            ) : null}
            {groups.map((building) => (
              <Fragment key={building.building}>
                <tr><td colSpan={7} className="bg-(--ec-color-surface-muted) px-4 py-2 text-sm font-semibold text-(--ec-color-text-primary)">{building.building}</td></tr>
                {building.electricalAreas.map((area) => (
                  <Fragment key={`${building.building}-${area.electricalArea}`}>
                    <tr><td colSpan={7} className="px-4 py-2 text-xs font-semibold uppercase tracking-wide text-(--ec-color-text-secondary)">{area.electricalArea}</td></tr>
                    {area.rooms.map((room) => (
                      <Fragment key={`${building.building}-${area.electricalArea}-${room.room}`}>
                        <tr><td colSpan={7} className="px-4 py-2 text-xs text-(--ec-color-text-secondary)">{room.room}</td></tr>
                        {room.assets.map((asset) => <AssetInventoryRow key={asset.id} asset={asset} onSelectAsset={onSelectAsset} />)}
                      </Fragment>
                    ))}
                  </Fragment>
                ))}
              </Fragment>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  },
);

InstalledBaseList.displayName = "InstalledBaseList";
