import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type SectionStackProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  gap?: "sm" | "md" | "lg";
};

export type SectionBlockProps = HTMLAttributes<HTMLElement> & {
  title?: string;
  description?: string;
  children: ReactNode;
  actions?: ReactNode;
};

export const SectionStack = forwardRef<HTMLDivElement, SectionStackProps>(
  ({ children, gap = "md", className = "", ...props }, ref) => {
    const gapClassName = gap === "sm" ? "space-y-3" : gap === "lg" ? "space-y-6" : "space-y-4";

    return (
      <div ref={ref} className={[gapClassName, className].join(" ")} {...props}>
        {children}
      </div>
    );
  },
);

export const SectionBlock = forwardRef<HTMLElement, SectionBlockProps>(
  ({ title, description, children, actions, className = "", ...props }, ref) => {
    return (
      <section ref={ref} className={["space-y-3", className].join(" ")} {...props}>
        {(title || description || actions) && (
          <header className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div className="min-w-0">
              {title && (
                <h3 className="text-sm font-semibold text-(--ec-color-text-primary)">
                  {title}
                </h3>
              )}
              {description && (
                <p className="mt-1 text-sm text-(--ec-color-text-secondary)">
                  {description}
                </p>
              )}
            </div>
            {actions && <div className="shrink-0">{actions}</div>}
          </header>
        )}
        <div>{children}</div>
      </section>
    );
  },
);

SectionStack.displayName = "SectionStack";
SectionBlock.displayName = "SectionBlock";
