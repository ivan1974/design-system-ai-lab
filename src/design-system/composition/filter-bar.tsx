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
          "rounded-(--ec-radius-lg) border border-(--ec-color-border-soft)",
          "bg-(--ec-color-surface) p-6",
          className,
        ].join(" ")}
        {...props}
      >
        {(title || description || resultCount || actions) && (
          <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="min-w-0 space-y-2">
              {title && (
                <h2 className="text-[length:var(--ec-title-section-size)] font-semibold leading-[var(--ec-title-section-line-height)] tracking-(--ec-letter-spacing-tight) text-(--ec-color-text-primary)">
                  {title}
                </h2>
              )}
              {description && (
                <p className="max-w-prose text-[length:var(--ec-text-body-size)] leading-[var(--ec-text-body-line-height)] text-(--ec-color-text-secondary)">
                  {description}
                </p>
              )}
              {resultCount && (
                <p className="text-[length:var(--ec-text-caption-size)] font-medium leading-[var(--ec-text-caption-line-height)] text-(--ec-color-text-muted)">
                  {resultCount}
                </p>
              )}
            </div>
            {actions && <div className="shrink-0">{actions}</div>}
          </div>
        )}
        {filters && <div className="flex flex-wrap gap-3">{filters}</div>}
      </div>
    );
  },
);

FilterBar.displayName = "FilterBar";
