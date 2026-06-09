import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type SignalRowProps = HTMLAttributes<HTMLDivElement> & {
  label: string;
  value: ReactNode;
  description?: string;
};

export const SignalRow = forwardRef<HTMLDivElement, SignalRowProps>(
  ({ label, value, description, className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={[
          "grid gap-2 border-b border-(--ec-color-border) py-3 last:border-b-0 md:grid-cols-[minmax(0,1fr)_auto]",
          className,
        ].join(" ")}
        {...props}
      >
        <div className="min-w-0">
          <p className="text-sm font-medium text-(--ec-color-text-primary)">{label}</p>
          {description && <p className="mt-1 text-sm text-(--ec-color-text-secondary)">{description}</p>}
        </div>
        <p className="text-sm font-semibold text-(--ec-color-text-primary)">{value}</p>
      </div>
    );
  },
);

SignalRow.displayName = "SignalRow";
