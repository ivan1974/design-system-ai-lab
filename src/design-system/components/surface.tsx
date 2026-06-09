import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type SurfaceVariant = "plain" | "bordered" | "muted" | "selected";
export type SurfacePadding = "none" | "sm" | "md" | "lg";

export type SurfaceProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  variant?: SurfaceVariant;
  padding?: SurfacePadding;
};

const variantClasses: Record<SurfaceVariant, string> = {
  plain: "bg-(--ec-color-surface)",
  bordered: "border border-(--ec-color-border-soft) bg-(--ec-color-surface)",
  muted: "border border-(--ec-color-border-soft) bg-(--ec-color-surface-soft)",
  selected:
    "border border-(--ec-color-row-selected-border) bg-(--ec-color-row-selected)",
};

const paddingClasses: Record<SurfacePadding, string> = {
  none: "p-0",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export const Surface = forwardRef<HTMLDivElement, SurfaceProps>(
  ({ children, variant = "bordered", padding = "md", className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={[
          "rounded-(--ec-radius-lg)",
          variantClasses[variant],
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

Surface.displayName = "Surface";
