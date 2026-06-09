import { forwardRef } from "react";
import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";

export type SecondaryNavigationItem = {
  id: string;
  label: ReactNode;
  href?: string;
  active?: boolean;
  count?: string | number;
  disabled?: boolean;
};

export type SecondaryNavigationProps = HTMLAttributes<HTMLElement> & {
  items: SecondaryNavigationItem[];
  ariaLabel?: string;
  onItemSelect?: (id: string) => void;
};

export const SecondaryNavigation = forwardRef<HTMLElement, SecondaryNavigationProps>(
  ({ items, ariaLabel = "Secondary navigation", onItemSelect, className = "", ...props }, ref) => {
    return (
      <nav
        ref={ref}
        aria-label={ariaLabel}
        className={["flex flex-wrap items-center gap-2", className].join(" ")}
        {...props}
      >
        {items.map((item) => {
          const commonClassName = [
            "inline-flex items-center gap-2 rounded-(--ec-radius-pill) px-3.5 py-2 text-sm font-medium transition-colors",
            item.active
              ? "bg-(--ec-color-primary-soft) text-(--ec-color-text-primary) ring-1 ring-inset ring-(--ec-color-primary-border)"
              : "text-(--ec-color-text-secondary) hover:bg-(--ec-color-surface-muted) hover:text-(--ec-color-text-primary)",
            item.disabled ? "pointer-events-none opacity-45" : "",
          ].join(" ");

          const content = (
            <>
              <span>{item.label}</span>
              {item.count !== undefined && (
                <span className="rounded-(--ec-radius-pill) bg-(--ec-color-surface) px-2 py-0.5 text-xs text-(--ec-color-text-muted)">
                  {item.count}
                </span>
              )}
            </>
          );

          if (item.href) {
            const anchorProps: AnchorHTMLAttributes<HTMLAnchorElement> = {
              href: item.href,
              className: commonClassName,
              "aria-current": item.active ? "page" : undefined,
            };

            return (
              <a key={item.id} {...anchorProps}>
                {content}
              </a>
            );
          }

          return (
            <button
              key={item.id}
              type="button"
              disabled={item.disabled}
              className={commonClassName}
              aria-current={item.active ? "page" : undefined}
              onClick={() => onItemSelect?.(item.id)}
            >
              {content}
            </button>
          );
        })}
      </nav>
    );
  },
);

SecondaryNavigation.displayName = "SecondaryNavigation";
