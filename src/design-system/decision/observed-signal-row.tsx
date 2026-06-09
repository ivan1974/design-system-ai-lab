import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type SignalRowProps = HTMLAttributes<HTMLDivElement> & {
  label: string;
  value: ReactNode;
  description?: string;
  selected?: boolean;
  interactive?: boolean;
};

export const SignalRow = forwardRef<HTMLDivElement, SignalRowProps>(
  ({ label, value, description, selected = false, interactive = false, className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={[
          "grid gap-2 border-b border-(--ec-color-border-soft) px-3 py-3 last:border-b-0 md:grid-cols-[minmax(0,1fr)_auto]",
          "transition-[background,border-color,box-shadow] duration-150",
          interactive ? "cursor-pointer rounded-(--ec-radius-md) hover:bg-(--ec-color-row-hover)" : "",
          selected ? "rounded-(--ec-radius-md) border border-(--ec-color-row-selected-border) bg-(--ec-color-row-selected) shadow-(--ec-shadow-card)" : "",
          className,
        ].join(" ")}
        {...props}
      >
        <div className="min-w-0">
          <p className="text-sm font-medium text-(--ec-color-text-primary)">{label}</p>
          {description && <p className="mt-1 text-sm leading-6 text-(--ec-color-text-secondary)">{description}</p>}
        </div>
        <div className="text-sm font-semibold text-(--ec-color-text-primary)">{value}</div>
      </div>
    );
  },
);

SignalRow.displayName = "SignalRow";
