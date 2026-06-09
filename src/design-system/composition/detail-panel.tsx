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
          "overflow-hidden rounded-(--ec-radius-md) border border-(--ec-color-border)",
          "bg-(--ec-color-surface) shadow-(--ec-shadow-card)",
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
          "flex items-start justify-between gap-4 border-b border-(--ec-color-border)",
          "px-4 py-4",
          className,
        ].join(" ")}
        {...props}
      >
        <div className="min-w-0 space-y-1">
          <h2 className="text-sm font-semibold text-(--ec-color-text-primary)">
            {title}
          </h2>
          {description && (
            <p className="text-sm text-(--ec-color-text-secondary)">
              {description}
            </p>
          )}
          {meta && <div className="pt-1">{meta}</div>}
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
    <div ref={ref} className={["space-y-4 p-4", className].join(" ")} {...props}>
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
        "border-t border-(--ec-color-border) bg-(--ec-color-surface-muted)",
        "px-4 py-3",
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
