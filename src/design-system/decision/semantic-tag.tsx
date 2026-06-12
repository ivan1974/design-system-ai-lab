import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type SemanticTagTone = "neutral" | "muted" | "primary" | "info" | "success" | "warning" | "danger";

export type SemanticTagProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: SemanticTagTone;
  children: ReactNode;
};

const toneClasses: Record<SemanticTagTone, string> = {
  neutral: "border-(--ec-color-border) bg-(--ec-color-surface) text-(--ec-color-text-secondary)",
  muted: "border-(--ec-color-neutral-border) bg-(--ec-color-neutral-soft) text-(--ec-color-neutral)",
  primary: "border-(--ec-color-primary-border) bg-(--ec-color-primary-soft) text-(--ec-color-primary-hover)",
  info: "border-(--ec-color-info-border) bg-(--ec-color-info-soft) text-(--ec-color-info)",
  success: "border-(--ec-color-success-border) bg-(--ec-color-success-soft) text-(--ec-color-success)",
  warning: "border-(--ec-color-warning-border) bg-(--ec-color-warning-soft) text-(--ec-color-warning)",
  danger: "border-(--ec-color-danger-border) bg-(--ec-color-danger-soft) text-(--ec-color-danger)",
};

export const SemanticTag = forwardRef<HTMLSpanElement, SemanticTagProps>(
  ({ tone = "neutral", children, className = "", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={[
          "inline-flex items-center rounded-(--ec-radius-sm) border px-2 py-0.5 text-xs font-medium leading-4",
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

SemanticTag.displayName = "SemanticTag";
