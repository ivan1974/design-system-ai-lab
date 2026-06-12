import { forwardRef } from "react";
import type { SelectHTMLAttributes } from "react";

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={[
          "h-(--ec-density-control-height-md) w-full rounded-(--ec-radius-sm)",
          "border border-(--ec-color-border) bg-(--ec-color-input-background)",
          "px-3 text-sm text-(--ec-color-text-primary)",
          "focus-visible:outline-none focus-visible:ring-2",
          "focus-visible:ring-(--ec-color-primary) focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        ].join(" ")}
        {...props}
      >
        {children}
      </select>
    );
  },
);

Select.displayName = "Select";
