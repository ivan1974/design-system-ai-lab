import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type StickyActionBarProps = HTMLAttributes<HTMLDivElement> & {
  primaryAction?: ReactNode;
  secondaryActions?: ReactNode;
  context?: ReactNode;
};

export const StickyActionBar = forwardRef<HTMLDivElement, StickyActionBarProps>(
  ({ primaryAction, secondaryActions, context, className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={[
          "sticky bottom-0 z-10 border-t border-(--ec-color-border)",
          "bg-(--ec-color-surface) px-4 py-3",
          className,
        ].join(" ")}
        {...props}
      >
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          {context && (
            <div className="text-sm text-(--ec-color-text-secondary)">{context}</div>
          )}
          <div className="flex flex-wrap items-center gap-2 md:justify-end">
            {secondaryActions}
            {primaryAction}
          </div>
        </div>
      </div>
    );
  },
);

StickyActionBar.displayName = "StickyActionBar";
