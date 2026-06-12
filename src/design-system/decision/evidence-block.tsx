import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type EvidenceBlockProps = HTMLAttributes<HTMLElement> & {
  title: string;
  description?: string;
  source?: ReactNode;
  sourceStrength?: ReactNode;
  freshness?: ReactNode;
  validationStatus?: ReactNode;
  children?: ReactNode;
};

export const EvidenceBlock = forwardRef<HTMLElement, EvidenceBlockProps>(
  (
    {
      title,
      description,
      source,
      sourceStrength,
      freshness,
      validationStatus,
      children,
      className = "",
      ...props
    },
    ref,
  ) => {
    const metadata = [
      source && { label: "Source", value: source },
      sourceStrength && { label: "Strength", value: sourceStrength },
      freshness && { label: "Freshness", value: freshness },
      validationStatus && { label: "Validation", value: validationStatus },
    ].filter(Boolean) as Array<{ label: string; value: ReactNode }>;

    return (
      <section
        ref={ref}
        className={[
          "rounded-(--ec-radius-md) border border-(--ec-color-border-soft)",
          "bg-(--ec-color-surface) p-4 text-(--ec-color-text-primary)",
          className,
        ].join(" ")}
        {...props}
      >
        <div className="space-y-4">
          <header className="space-y-1">
            <h3 className="text-sm font-semibold leading-5 text-(--ec-color-text-primary)">{title}</h3>
            {description && <p className="text-sm leading-5 text-(--ec-color-text-secondary)">{description}</p>}
          </header>

          {metadata.length > 0 && (
            <dl className="grid gap-3 sm:grid-cols-2">
              {metadata.map((item) => (
                <div key={item.label} className="min-w-0">
                  <dt className="text-xs font-medium uppercase tracking-[0.08em] text-(--ec-color-text-muted)">{item.label}</dt>
                  <dd className="mt-1 text-sm leading-5 text-(--ec-color-text-primary)">{item.value}</dd>
                </div>
              ))}
            </dl>
          )}

          {children && <div className="border-t border-(--ec-color-border-soft) pt-3">{children}</div>}
        </div>
      </section>
    );
  },
);

EvidenceBlock.displayName = "EvidenceBlock";
