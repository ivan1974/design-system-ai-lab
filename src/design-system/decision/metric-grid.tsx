import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type MetricGridColumns = 2 | 3 | 4;

export type MetricGridProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  columns?: MetricGridColumns;
};

const columnClasses: Record<MetricGridColumns, string> = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
};

export const MetricGrid = forwardRef<HTMLElement, MetricGridProps>(
  ({ children, columns = 3, className = "", ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={[
          "grid grid-cols-1 gap-4",
          columnClasses[columns],
          className,
        ].join(" ")}
        {...props}
      >
        {children}
      </section>
    );
  },
);

MetricGrid.displayName = "MetricGrid";