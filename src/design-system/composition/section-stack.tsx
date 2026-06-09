import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

import { Heading, Text } from "../components/typography";

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
            <div className="min-w-0 space-y-2">
              {title && <Heading level={3} size="subsection">{title}</Heading>}
              {description && <Text className="max-w-prose">{description}</Text>}
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
