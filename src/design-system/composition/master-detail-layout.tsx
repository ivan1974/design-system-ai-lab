import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type MasterDetailLayoutProps = HTMLAttributes<HTMLDivElement> & {
  list: ReactNode;
  detail: ReactNode;
  filters?: ReactNode;
  listLabel?: string;
  detailLabel?: string;
  detailWidth?: "sm" | "md" | "lg";
  detailOpen?: boolean;
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

    return (
      <div ref={ref} className={["space-y-4", className].join(" ")} {...props}>
        {filters && <div>{filters}</div>}
        <div
          className={[
            "grid gap-4",
            detailOpen ? detailWidthClassName : "lg:grid-cols-1",
          ].join(" ")}
        >
          <section aria-label={listLabel} className="min-w-0">
            {list}
          </section>
          {detailOpen && (
            <aside aria-label={detailLabel} className="min-w-0">
              {detail}
            </aside>
          )}
        </div>
      </div>
    );
  },
);

MasterDetailLayout.displayName = "MasterDetailLayout";
