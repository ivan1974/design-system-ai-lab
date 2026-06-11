import { forwardRef } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";

export type CheckboxSize = "sm" | "md";

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> & {
  label?: ReactNode;
  description?: ReactNode;
  size?: CheckboxSize;
};

const sizeClasses: Record<CheckboxSize, string> = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className = "", label, description, size = "md", disabled, id, ...props }, ref) => {
    const checkbox = (
      <input
        ref={ref}
        id={id}
        type="checkbox"
        disabled={disabled}
        className={[
          "shrink-0 rounded border border-(--ec-color-border) bg-(--ec-color-surface) text-(--ec-color-primary)",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ec-color-primary) focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          sizeClasses[size],
          className,
        ].join(" ")}
        {...props}
      />
    );

    if (!label && !description) {
      return checkbox;
    }

    return (
      <label className={["flex gap-3", disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"].join(" ")}>
        {checkbox}
        <span className="grid gap-1 leading-none">
          {label ? <span className="text-sm font-medium text-(--ec-color-text-primary)">{label}</span> : null}
          {description ? <span className="text-xs text-(--ec-color-text-secondary)">{description}</span> : null}
        </span>
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";
