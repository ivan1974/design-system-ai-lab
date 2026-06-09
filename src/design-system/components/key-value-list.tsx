import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type KeyValueRowProps = HTMLAttributes<HTMLDivElement> & {
  label: string;
  value: ReactNode;
  helper?: string;
};

export type KeyValueListProps = HTMLAttributes<HTMLDListElement> & {
  children: ReactNode;
  columns?: 1 | 2 | 3;
};

export const KeyValueList = forwardRef<HTMLDListElement, KeyValueListProps>(
  ({ children, columns = 1, className = "", ...props }, ref) => {
    const columnClassName =
      columns === 3
        ? "md:grid-cols-3"
        : columns === 2
          ? "md:grid-cols-2"
          : "grid-cols-1";

    return (
      <dl
        ref={ref}
        className={["grid gap-3", columnClassName, className].join(" ")}
        {...props}
      >
        {children}
      </dl>
    );
  },
);

export const KeyValueRow = forwardRef<HTMLDivElement, KeyValueRowProps>(
  ({ label, value, helper, className = "", ...props }, ref) => {
    return (
      <div ref={ref} className={["min-w-0 space-y-1", className].join(" ")} {...props}>
        <dt className="text-xs font-medium text-(--ec-color-text-muted)">{label}</dt>
        <dd className="text-sm font-medium text-(--ec-color-text-primary)">{value}</dd>
        {helper && <dd className="text-xs text-(--ec-color-text-muted)">{helper}</dd>}
      </div>
    );
  },
);

KeyValueList.displayName = "KeyValueList";
KeyValueRow.displayName = "KeyValueRow";
