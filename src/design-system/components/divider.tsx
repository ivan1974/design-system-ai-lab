import { forwardRef } from "react";
import type { HTMLAttributes } from "react";

export type DividerOrientation = "horizontal" | "vertical";

export type DividerProps = HTMLAttributes<HTMLDivElement> & {
  orientation?: DividerOrientation;
};

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ orientation = "horizontal", className = "", ...props }, ref) => {
    const orientationClassName =
      orientation === "vertical"
        ? "h-auto min-h-6 w-px self-stretch"
        : "h-px w-full";

    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        className={[
          "shrink-0 bg-(--ec-color-border-soft)",
          orientationClassName,
          className,
        ].join(" ")}
        {...props}
      />
    );
  },
);

Divider.displayName = "Divider";
