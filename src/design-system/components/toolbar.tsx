import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type ToolbarProps = HTMLAttributes<HTMLDivElement> & {
  leading?: ReactNode;
  trailing?: ReactNode;
  children?: ReactNode;
  density?: "compact" | "comfortable";
};

export const Toolbar = forwardRef<HTMLDivElement, ToolbarProps>(
  ({ leading, trailing, children, density = "comfortable", className = "", ...props }, ref) => {
    const paddingClassName = density === "compact" ? "px-4 py-3" : "px-5 py-4";

    return (
      <div
        ref={ref}
        className={[
          "flex flex-col gap-4 rounded-(--ec-radius-lg) border border-(--ec-color-border-soft) bg-(--ec-color-surface)",
          "md:flex-row md:items-center md:justify-between",
          paddingClassName,
          className,
        ].join(" ")}
        {...props}
      >
        {(leading || children) && (
          <div className="flex min-w-0 flex-wrap items-center gap-3">
            {leading}
            {children}
          </div>
        )}
        {trailing && <div className="flex shrink-0 flex-wrap items-center gap-3 md:justify-end">{trailing}</div>}
      </div>
    );
  },
);

Toolbar.displayName = "Toolbar";
