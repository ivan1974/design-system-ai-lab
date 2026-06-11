import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { Button } from "../components/button";
import { SegmentedControl } from "../components/segmented-control";
import type { InstalledBaseFilterTrigger, InstalledBaseView } from "../types/installed-base";
import { installedBaseFilterTriggers, installedBaseViews } from "../types/installed-base";

export type InstalledBaseViewFilterBarProps = HTMLAttributes<HTMLDivElement> & {
  activeView?: InstalledBaseView;
  onViewChange?: (view: InstalledBaseView) => void;
  onFilterSelect?: (filter: InstalledBaseFilterTrigger) => void;
};

const viewItems = [
  { id: "list", label: installedBaseViews.list },
  { id: "geography", label: installedBaseViews.geography },
  { id: "electrical", label: installedBaseViews.electrical },
];

const filterItems: InstalledBaseFilterTrigger[] = ["location", "asset-type", "contract-type", "all-filters"];

export const InstalledBaseViewFilterBar = forwardRef<HTMLDivElement, InstalledBaseViewFilterBarProps>(
  ({ activeView = "list", onViewChange, onFilterSelect, className = "", ...props }, ref) => (
    <div
      ref={ref}
      className={[
        "flex flex-col gap-4 rounded-(--ec-radius-lg) border border-(--ec-color-border) bg-(--ec-color-surface) p-4 md:flex-row md:items-center md:justify-between",
        className,
      ].join(" ")}
      {...props}
    >
      <div className="flex items-center gap-3">
        <SegmentedControl
          ariaLabel="Installed base views"
          items={viewItems}
          value={activeView}
          onValueChange={(value) => onViewChange?.(value as InstalledBaseView)}
        />
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {filterItems.map((filter) => (
          <Button
            key={filter}
            variant={filter === "all-filters" ? "outline" : "secondary"}
            size="sm"
            onClick={() => onFilterSelect?.(filter)}
          >
            {installedBaseFilterTriggers[filter]}
          </Button>
        ))}
      </div>
    </div>
  ),
);

InstalledBaseViewFilterBar.displayName = "InstalledBaseViewFilterBar";
