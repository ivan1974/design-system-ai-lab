import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type SemanticPillTone = "neutral" | "muted" | "primary" | "info" | "success" | "warning" | "danger";

export type SemanticPillProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: SemanticPillTone;
  children: ReactNode;
};

const toneClasses: Record<SemanticPillTone, string> = {
  neutral: "bg-(--ec-color-surface-muted) text-(--ec-color-text-secondary)",
  muted: "bg-(--ec-color-neutral-soft) text-(--ec-color-neutral)",
  primary: "bg-(--ec-color-primary-soft) text-(--ec-color-primary-hover)",
  info: "bg-(--ec-color-info-soft) text-(--ec-color-info)",
  success: "bg-(--ec-color-success-soft) text-(--ec-color-success)",
  warning: "bg-(--ec-color-warning-soft) text-(--ec-color-warning)",
  danger: "bg-(--ec-color-danger-soft) text-(--ec-color-danger)",
};

export const SemanticPill = forwardRef<HTMLSpanElement, SemanticPillProps>(
  ({ tone = "neutral", children, className = "", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={[
          "inline-flex items-center rounded-(--ec-radius-pill) px-2.5 py-1 text-xs font-semibold leading-4",
          toneClasses[tone],
          className,
        ].join(" ")}
        {...props}
      >
        {children}
      </span>
    );
  },
);

SemanticPill.displayName = "SemanticPill";
