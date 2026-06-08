import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={[
          "h-10 w-full rounded-(--ec-radius-sm)",
          "border border-(--ec-color-border) bg-(--ec-color-surface)",
          "px-3 text-sm text-(--ec-color-text-primary)",
          "placeholder:text-(--ec-color-text-muted)",
          "focus-visible:outline-none focus-visible:ring-2",
          "focus-visible:ring-(--ec-color-primary) focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        ].join(" ")}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";