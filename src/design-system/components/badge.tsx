import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type BadgeTone = "neutral" | "success" | "warning" | "danger" | "primary";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: BadgeTone;
  children: ReactNode;
};

const toneClasses: Record<BadgeTone, string> = {
  neutral:
    "bg-(--ec-color-surface-muted) text-(--ec-color-text-secondary)",
  success: "bg-green-50 text-(--ec-color-success)",
  warning: "bg-amber-50 text-(--ec-color-warning)",
  danger: "bg-red-50 text-(--ec-color-danger)",
  primary: "bg-blue-50 text-(--ec-color-primary)",
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ tone = "neutral", className = "", children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={[
          "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
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

Badge.displayName = "Badge";