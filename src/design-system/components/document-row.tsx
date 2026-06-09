import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type DocumentRowProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  description?: string;
  meta?: string;
  action?: ReactNode;
};

export const DocumentRow = forwardRef<HTMLDivElement, DocumentRowProps>(
  ({ title, description, meta, action, className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={[
          "grid gap-3 border-b border-(--ec-color-border) py-3 last:border-b-0 md:grid-cols-[minmax(0,1fr)_auto] md:items-center",
          className,
        ].join(" ")}
        {...props}
      >
        <div className="min-w-0 space-y-1">
          <p className="text-sm font-medium text-(--ec-color-text-primary)">{title}</p>
          {description && <p className="text-sm text-(--ec-color-text-secondary)">{description}</p>}
          {meta && <p className="text-xs text-(--ec-color-text-muted)">{meta}</p>}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    );
  },
);

DocumentRow.displayName = "DocumentRow";
