import { forwardRef } from "react";
import type { LabelHTMLAttributes, ReactNode } from "react";

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  children: ReactNode;
};

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={[
          "text-sm font-medium text-(--ec-color-text-primary)",
          className,
        ].join(" ")}
        {...props}
      >
        {children}
      </label>
    );
  },
);

Label.displayName = "Label";