import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { Button } from "../components/button";
import { ScrollArea } from "../components/scroll-area";
import { SectionHeading } from "../components/typography";
import { Checkbox } from "../forms/checkbox";
import { SidePanel } from "../composition/side-panel";
import type { InstalledBaseFilterGroup } from "../types/installed-base";

export type AllFiltersPanelProps = HTMLAttributes<HTMLDivElement> & {
  open?: boolean;
  onClose?: () => void;
  filterGroups: InstalledBaseFilterGroup[];
  onFilterChange?: (category: string, value: string, checked: boolean) => void;
  onClearAll?: () => void;
};

export const AllFiltersPanel = forwardRef<HTMLDivElement, AllFiltersPanelProps>(
  ({ open = false, onClose, filterGroups, onFilterChange, onClearAll, className = "", ...props }, ref) => (
    <SidePanel
      open={open}
      onClose={onClose ?? (() => undefined)}
      title="All Filters"
      description="Refine the installed base by health, connectivity, coverage, passport, status, age and asset context."
      footer={
        <div className="flex w-full justify-between gap-3">
          <Button variant="ghost" size="sm" onClick={onClearAll}>Clear All</Button>
          <Button size="sm" onClick={onClose}>Apply filters</Button>
        </div>
      }
    >
      <div ref={ref} className={className} {...props}>
        <ScrollArea maxHeight="panel">
          <div className="grid gap-6 pr-2">
            {filterGroups.map((group) => (
              <section key={group.category} className="grid gap-3">
                <SectionHeading title={group.category} className="gap-2" />
                <div className="grid gap-2">
                  {group.options.map((option) => (
                    <Checkbox
                      key={option.value}
                      label={option.label}
                      checked={option.checked}
                      onChange={(event) => onFilterChange?.(group.category, option.value, event.currentTarget.checked)}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </ScrollArea>
      </div>
    </SidePanel>
  ),
);

AllFiltersPanel.displayName = "AllFiltersPanel";
