import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type CardDensity = "compact" | "comfortable" | "spacious";
export type CardTone = "neutral" | "muted" | "primary" | "success" | "warning" | "danger";

export type CardProps = HTMLAttributes<HTMLElement> & {
  title?: string;
  description?: string;
  density?: CardDensity;
  tone?: CardTone;
  footer?: ReactNode;
  children: ReactNode;
};

const densityClasses: Record<CardDensity, string> = {
  compact: "p-3",
  comfortable: "p-4",
  spacious: "p-6",
};

const toneClasses: Record<CardTone, string> = {
  neutral: "border-(--ec-color-border) bg-(--ec-color-surface)",
  muted: "border-(--ec-color-border-soft) bg-(--ec-color-surface-muted)",
  primary: "border-(--ec-color-primary-border) bg-(--ec-color-primary-soft)",
  success: "border-(--ec-color-success-border) bg-(--ec-color-success-soft)",
  warning: "border-(--ec-color-warning-border) bg-(--ec-color-warning-soft)",
  danger: "border-(--ec-color-danger-border) bg-(--ec-color-danger-soft)",
};

export const Card = forwardRef<HTMLElement, CardProps>(
  ({ title, description, density = "comfortable", tone = "neutral", footer, children, className = "", ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={[
          "rounded-(--ec-radius-md) border shadow-(--ec-shadow-card)",
          "text-(--ec-color-text-primary)",
          densityClasses[density],
          toneClasses[tone],
          className,
        ].join(" ")}
        {...props}
      >
        {(title || description) && (
          <header className="mb-3 space-y-1">
            {title && <h2 className="text-sm font-semibold leading-5 text-(--ec-color-text-primary)">{title}</h2>}
            {description && <p className="text-sm leading-5 text-(--ec-color-text-secondary)">{description}</p>}
          </header>
        )}

        {children}

        {footer && <footer className="mt-4 border-t border-(--ec-color-border-soft) pt-3">{footer}</footer>}
      </section>
    );
  },
);

Card.displayName = "Card";
