import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type WellTone = "neutral" | "primary" | "warning" | "danger" | "success";
export type WellPadding = "sm" | "md" | "lg";

export type WellProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  tone?: WellTone;
  padding?: WellPadding;
};

const toneClasses: Record<WellTone, string> = {
  neutral: "border-(--ec-color-border-soft) bg-(--ec-color-surface-soft)",
  primary: "border-(--ec-color-primary-border) bg-(--ec-color-primary-soft)",
  warning: "border-(--ec-color-warning-soft) bg-(--ec-color-warning-soft)",
  danger: "border-(--ec-color-danger-soft) bg-(--ec-color-danger-soft)",
  success: "border-(--ec-color-success-soft) bg-(--ec-color-success-soft)",
};

const paddingClasses: Record<WellPadding, string> = {
  sm: "p-4",
  md: "p-5",
  lg: "p-6",
};

export const Well = forwardRef<HTMLDivElement, WellProps>(
  ({ children, tone = "neutral", padding = "md", className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={[
          "rounded-(--ec-radius-md) border",
          toneClasses[tone],
          paddingClasses[padding],
          className,
        ].join(" ")}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Well.displayName = "Well";
