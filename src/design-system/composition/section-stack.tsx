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
    const gapClassName = gap === "sm" ? "space-y-4" : gap === "lg" ? "space-y-8" : "space-y-6";

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
      <section ref={ref} className={["space-y-4", className].join(" ")} {...props}>
        {(title || description || actions) && (
          <header className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div className="min-w-0 space-y-1.5">
              {title && (
                <h3 className="text-[length:var(--ec-title-subsection-size)] font-semibold leading-[var(--ec-title-subsection-line-height)] tracking-(--ec-letter-spacing-normal) text-(--ec-color-text-primary)">
                  {title}
                </h3>
              )}
              {description && (
                <p className="max-w-prose text-[length:var(--ec-text-body-size)] leading-[var(--ec-text-body-line-height)] text-(--ec-color-text-secondary)">
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
