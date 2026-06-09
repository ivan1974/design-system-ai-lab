import { forwardRef } from "react";
import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";

export type BreadcrumbItem = {
  id: string;
  label: ReactNode;
  href?: string;
  current?: boolean;
};

export type BreadcrumbsProps = HTMLAttributes<HTMLElement> & {
  items: BreadcrumbItem[];
  ariaLabel?: string;
};

export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ items, ariaLabel = "Breadcrumb", className = "", ...props }, ref) => {
    return (
      <nav
        ref={ref}
        aria-label={ariaLabel}
        className={["flex min-w-0 items-center", className].join(" ")}
        {...props}
      >
        <ol className="flex min-w-0 flex-wrap items-center gap-2 text-sm text-(--ec-color-text-muted)">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const current = item.current ?? isLast;

            const content = item.href && !current ? (
              <a
                {...({ href: item.href } satisfies AnchorHTMLAttributes<HTMLAnchorElement>)}
                className="font-medium text-(--ec-color-text-secondary) hover:text-(--ec-color-text-primary)"
              >
                {item.label}
              </a>
            ) : (
              <span
                aria-current={current ? "page" : undefined}
                className={current ? "font-medium text-(--ec-color-text-primary)" : undefined}
              >
                {item.label}
              </span>
            );

            return (
              <li key={item.id} className="flex min-w-0 items-center gap-2">
                {index > 0 && <span aria-hidden="true" className="text-(--ec-color-text-muted)">/</span>}
                {content}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  },
);

Breadcrumbs.displayName = "Breadcrumbs";
