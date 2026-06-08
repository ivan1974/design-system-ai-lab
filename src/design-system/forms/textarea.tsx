import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={[
          "min-h-24 w-full rounded-(--ec-radius-sm)",
          "border border-(--ec-color-border) bg-(--ec-color-surface)",
          "px-3 py-2 text-sm text-(--ec-color-text-primary)",
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

Textarea.displayName = "Textarea";