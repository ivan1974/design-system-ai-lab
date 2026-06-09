import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import type { BadgeTone } from "../components/badge";

export type SemanticTagTone = BadgeTone;

export type SemanticTagProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: SemanticTagTone;
  children: ReactNode;
};

const toneClasses: Record<SemanticTagTone, string> = {
  neutral: "border-(--ec-color-border) bg-(--ec-color-surface) text-(--ec-color-text-secondary)",
  primary: "border-blue-100 bg-blue-50 text-(--ec-color-primary)",
  success: "border-green-100 bg-green-50 text-(--ec-color-success)",
  warning: "border-amber-100 bg-amber-50 text-(--ec-color-warning)",
  danger: "border-red-100 bg-red-50 text-(--ec-color-danger)",
};

export const SemanticTag = forwardRef<HTMLSpanElement, SemanticTagProps>(
  ({ tone = "neutral", children, className = "", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={[
          "inline-flex items-center rounded-(--ec-radius-sm) border px-2 py-0.5 text-xs font-medium",
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
