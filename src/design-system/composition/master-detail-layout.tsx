import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

import { SlideOverPanel } from "../components/panel";

export type MasterDetailLayoutDetailMode = "inline" | "overlay";

export type MasterDetailLayoutProps = HTMLAttributes<HTMLDivElement> & {
  list: ReactNode;
  detail: ReactNode;
  filters?: ReactNode;
  listLabel?: string;
  detailLabel?: string;
  detailWidth?: "sm" | "md" | "lg";
  detailOpen?: boolean;
  detailMode?: MasterDetailLayoutDetailMode;
  onDetailOpenChange?: (open: boolean) => void;
};

export const MasterDetailLayout = forwardRef<
  HTMLDivElement,
  MasterDetailLayoutProps
>(
  (
    {
      list,
      detail,
      filters,
      listLabel = "Items",
      detailLabel = "Selected item detail",
      detailWidth = "md",
      detailOpen = true,
      detailMode = "inline",
      onDetailOpenChange,
      className = "",
      ...props
    },
    ref,
  ) => {
    const detailWidthClassName =
      detailWidth === "sm"
        ? "lg:grid-cols-[minmax(0,1fr)_22rem]"
        : detailWidth === "lg"
          ? "lg:grid-cols-[minmax(0,1fr)_32rem]"
          : "lg:grid-cols-[minmax(0,1fr)_26rem]";

    const hasInlineDetail = detailMode === "inline" && detailOpen;

    return (
      <div ref={ref} className={["space-y-6", className].join(" ")} {...props}>
        {filters && <div>{filters}</div>}
        <div
          className={[
            "grid gap-6 transition-[grid-template-columns] duration-300 ease-out",
            hasInlineDetail ? detailWidthClassName : "lg:grid-cols-1",
          ].join(" ")}
        >
          <section aria-label={listLabel} className="min-w-0">
            {list}
          </section>
          {hasInlineDetail && (
            <aside aria-label={detailLabel} className="min-w-0">
              {detail}
            </aside>
          )}
        </div>

        {detailMode === "overlay" && (
          <SlideOverPanel
            open={detailOpen}
            onOpenChange={onDetailOpenChange}
            size={detailWidth === "lg" ? "xl" : detailWidth === "sm" ? "md" : "lg"}
          >
            <aside aria-label={detailLabel} className="h-full min-w-0">
              {detail}
            </aside>
          </SlideOverPanel>
        )}
      </div>
    );
  },
);

MasterDetailLayout.displayName = "MasterDetailLayout";
