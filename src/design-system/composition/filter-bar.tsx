import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type FilterBarProps = HTMLAttributes<HTMLDivElement> & {
  title?: string;
  description?: string;
  resultCount?: string;
  filters?: ReactNode;
  actions?: ReactNode;
};

export const FilterBar = forwardRef<HTMLDivElement, FilterBarProps>(
  (
    { title, description, resultCount, filters, actions, className = "", ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={[
          "rounded-(--ec-radius-md) border border-(--ec-color-border)",
          "bg-(--ec-color-surface) p-4",
          className,
        ].join(" ")}
        {...props}
      >
        {(title || description || resultCount || actions) && (
          <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div className="min-w-0">
              {title && (
                <h2 className="text-sm font-semibold text-(--ec-color-text-primary)">
                  {title}
                </h2>
              )}
              {description && (
                <p className="mt-1 text-sm text-(--ec-color-text-secondary)">
                  {description}
                </p>
              )}
              {resultCount && (
                <p className="mt-1 text-xs text-(--ec-color-text-muted)">
                  {resultCount}
                </p>
              )}
            </div>
            {actions && <div className="shrink-0">{actions}</div>}
          </div>
        )}
        {filters && <div className="flex flex-wrap gap-2">{filters}</div>}
      </div>
    );
  },
);

FilterBar.displayName = "FilterBar";
