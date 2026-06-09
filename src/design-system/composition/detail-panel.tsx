import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type DetailPanelProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export type DetailPanelHeaderProps = HTMLAttributes<HTMLElement> & {
  title: string;
  description?: string;
  meta?: ReactNode;
  actions?: ReactNode;
};

export type DetailPanelBodyProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export type DetailPanelFooterProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export const DetailPanel = forwardRef<HTMLElement, DetailPanelProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={[
          "overflow-hidden rounded-(--ec-radius-lg) border border-(--ec-color-border-soft)",
          "bg-(--ec-color-surface-raised) shadow-(--ec-shadow-panel)",
          "backdrop-blur-[2px]",
          className,
        ].join(" ")}
        {...props}
      >
        {children}
      </section>
    );
  },
);

export const DetailPanelHeader = forwardRef<
  HTMLElement,
  DetailPanelHeaderProps
>(
  ({ title, description, meta, actions, className = "", ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={[
          "flex items-start justify-between gap-5 border-b border-(--ec-color-border-soft)",
          "bg-(--ec-color-surface-soft) px-6 py-5",
          className,
        ].join(" ")}
        {...props}
      >
        <div className="min-w-0 space-y-2">
          <h2 className="text-[length:var(--ec-title-section-size)] font-semibold leading-[var(--ec-title-section-line-height)] tracking-(--ec-letter-spacing-tight) text-(--ec-color-text-primary)">
            {title}
          </h2>
          {description && (
            <p className="max-w-prose text-[length:var(--ec-text-body-size)] leading-[var(--ec-text-body-line-height)] text-(--ec-color-text-secondary)">
              {description}
            </p>
          )}
          {meta && <div className="pt-1.5">{meta}</div>}
        </div>
        {actions && <div className="shrink-0">{actions}</div>}
      </header>
    );
  },
);

export const DetailPanelBody = forwardRef<
  HTMLDivElement,
  DetailPanelBodyProps
>(({ children, className = "", ...props }, ref) => {
  return (
    <div ref={ref} className={["space-y-6 p-6", className].join(" ")} {...props}>
      {children}
    </div>
  );
});

export const DetailPanelFooter = forwardRef<
  HTMLDivElement,
  DetailPanelFooterProps
>(({ children, className = "", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={[
        "border-t border-(--ec-color-border-soft) bg-(--ec-color-surface-soft)",
        "px-6 py-4",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
});

DetailPanel.displayName = "DetailPanel";
DetailPanelHeader.displayName = "DetailPanelHeader";
DetailPanelBody.displayName = "DetailPanelBody";
DetailPanelFooter.displayName = "DetailPanelFooter";
