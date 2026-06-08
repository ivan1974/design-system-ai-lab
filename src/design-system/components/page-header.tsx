import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type PageHeaderProps = HTMLAttributes<HTMLElement> & {
  title: string;
  description?: string;
  actions?: ReactNode;
};

export const PageHeader = forwardRef<HTMLElement, PageHeaderProps>(
  ({ title, description, actions, className = "", ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={[
          "flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6",
          className,
        ].join(" ")}
        {...props}
      >
        <div className="min-w-0">
          <h1 className="text-2xl font-semibold tracking-tight text-(--ec-color-text-primary)">
            {title}
          </h1>
          {description && (
            <p className="mt-2 max-w-3xl text-sm text-(--ec-color-text-secondary)">
              {description}
            </p>
          )}
        </div>

        {actions && (
          <div className="flex flex-wrap items-center gap-2 sm:justify-end">
            {actions}
          </div>
        )}
      </header>
    );
  },
);

PageHeader.displayName = "PageHeader";