import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type MetricStripProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  columns?: 2 | 3 | 4;
};

export const MetricStrip = forwardRef<HTMLDivElement, MetricStripProps>(
  ({ children, columns = 3, className = "", ...props }, ref) => {
    const columnClassName =
      columns === 4
        ? "md:grid-cols-4"
        : columns === 2
          ? "md:grid-cols-2"
          : "md:grid-cols-3";

    return (
      <div
        ref={ref}
        className={["grid gap-3", columnClassName, className].join(" ")}
        {...props}
      >
        {children}
      </div>
    );
  },
);

MetricStrip.displayName = "MetricStrip";
