import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type CardProps = HTMLAttributes<HTMLElement> & {
  title?: string;
  description?: string;
  children: ReactNode;
};

export const Card = forwardRef<HTMLElement, CardProps>(
  ({ title, description, children, className = "", ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={[
          "rounded-(--ec-radius-md) border border-(--ec-color-border)",
          "bg-(--ec-color-surface) shadow-(--ec-shadow-card)",
          "p-4",
          className,
        ].join(" ")}
        {...props}
      >
        {(title || description) && (
          <header className="mb-4">
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
          </header>
        )}

        {children}
      </section>
    );
  },
);

Card.displayName = "Card";