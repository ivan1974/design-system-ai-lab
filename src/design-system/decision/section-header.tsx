import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type SectionHeaderProps = HTMLAttributes<HTMLElement> & {
  title: string;
  description?: string;
  actions?: ReactNode;
};

export const SectionHeader = forwardRef<HTMLElement, SectionHeaderProps>(
  ({ title, description, actions, className = "", ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={[
          "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4",
          className,
        ].join(" ")}
        {...props}
      >
        <div className="min-w-0">
          <h2 className="text-base font-semibold text-(--ec-color-text-primary)">
            {title}
          </h2>

          {description && (
            <p className="mt-1 text-sm text-(--ec-color-text-secondary)">
              {description}
            </p>
          )}
        </div>

        {actions && (
          <div className="flex shrink-0 items-center gap-2">
            {actions}
          </div>
        )}
      </header>
    );
  },
);

SectionHeader.displayName = "SectionHeader";