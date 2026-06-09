import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

import { Heading, Text } from "../components/typography";

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
              {title && <Heading level={2} size="section">{title}</Heading>}
              {description && <Text className="max-w-prose">{description}</Text>}
              {resultCount && <Text variant="caption" className="font-medium">{resultCount}</Text>}
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
