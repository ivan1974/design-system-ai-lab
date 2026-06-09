import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type EvidenceRowProps = HTMLAttributes<HTMLDivElement> & {
  label: string;
  description?: string;
  source?: string;
  sourceScope?: string;
  sourceStrength?: string;
  freshness?: string;
  validationStatus?: string;
  meta?: ReactNode;
};

export const EvidenceRow = forwardRef<HTMLDivElement, EvidenceRowProps>(
  (
    {
      label,
      description,
      source,
      sourceScope,
      sourceStrength,
      freshness,
      validationStatus,
      meta,
      className = "",
      ...props
    },
    ref,
  ) => {
    const trustMetadata = [
      source && `Source: ${source}`,
      sourceScope && `Scope: ${sourceScope}`,
      sourceStrength && `Strength: ${sourceStrength}`,
      freshness && `Freshness: ${freshness}`,
      validationStatus && `Validation: ${validationStatus}`,
    ].filter(Boolean);

    return (
      <div
        ref={ref}
        className={[
          "border-b border-(--ec-color-border) py-3 last:border-b-0",
          className,
        ].join(" ")}
        {...props}
      >
        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0 space-y-1">
            <p className="text-sm font-medium text-(--ec-color-text-primary)">{label}</p>
            {description && (
              <p className="text-sm text-(--ec-color-text-secondary)">{description}</p>
            )}
          </div>
          {meta && <div className="shrink-0">{meta}</div>}
        </div>
        {trustMetadata.length > 0 && (
          <p className="mt-2 text-xs text-(--ec-color-text-muted)">
            {trustMetadata.join(" · ")}
          </p>
        )}
      </div>
    );
  },
);

EvidenceRow.displayName = "EvidenceRow";
