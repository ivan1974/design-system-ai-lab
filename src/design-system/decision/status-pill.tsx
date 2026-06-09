import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import type { BadgeTone } from "../components/badge";

export type StatusPillTone = BadgeTone;

export type StatusPillProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: StatusPillTone;
  children: ReactNode;
};

const toneClasses: Record<StatusPillTone, string> = {
  neutral: "bg-(--ec-color-surface-muted) text-(--ec-color-text-secondary)",
  primary: "bg-blue-50 text-(--ec-color-primary)",
  success: "bg-green-50 text-(--ec-color-success)",
  warning: "bg-amber-50 text-(--ec-color-warning)",
  danger: "bg-red-50 text-(--ec-color-danger)",
};

export const StatusPill = forwardRef<HTMLSpanElement, StatusPillProps>(
  ({ tone = "neutral", children, className = "", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={[
          "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold",
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

StatusPill.displayName = "StatusPill";
