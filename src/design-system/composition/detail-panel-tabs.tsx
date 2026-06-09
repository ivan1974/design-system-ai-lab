import { forwardRef } from "react";
import type { HTMLAttributes } from "react";

export type DetailPanelTab = {
  id: string;
  label: string;
  count?: string | number;
  active?: boolean;
};

export type DetailPanelTabsProps = HTMLAttributes<HTMLDivElement> & {
  tabs: DetailPanelTab[];
  ariaLabel?: string;
  onTabSelect?: (id: string) => void;
};

export const DetailPanelTabs = forwardRef<
  HTMLDivElement,
  DetailPanelTabsProps
>(
  (
    { tabs, ariaLabel = "Detail panel sections", onTabSelect, className = "", ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={[
          "border-b border-(--ec-color-border) bg-(--ec-color-surface)",
          className,
        ].join(" ")}
        {...props}
      >
        <div
          role="tablist"
          aria-label={ariaLabel}
          className="flex gap-1 overflow-x-auto px-3"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={tab.active ? "true" : "false"}
              className={[
                "border-b-2 px-3 py-3 text-sm font-medium whitespace-nowrap",
                tab.active
                  ? "border-(--ec-color-primary) text-(--ec-color-text-primary)"
                  : "border-transparent text-(--ec-color-text-secondary) hover:text-(--ec-color-text-primary)",
              ].join(" ")}
              onClick={() => onTabSelect?.(tab.id)}
            >
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span className="ml-2 rounded-full bg-(--ec-color-surface-subtle) px-2 py-0.5 text-xs text-(--ec-color-text-secondary)">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    );
  },
);

DetailPanelTabs.displayName = "DetailPanelTabs";
