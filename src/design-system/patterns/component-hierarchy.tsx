import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type ComponentHierarchyProps = HTMLAttributes<HTMLUListElement> & {
  children: ReactNode;
};

export type ComponentHierarchyItemProps = HTMLAttributes<HTMLLIElement> & {
  name: string;
  description?: string;
  status?: ReactNode;
  level?: 0 | 1 | 2 | 3;
  children?: ReactNode;
};

export const ComponentHierarchy = forwardRef<HTMLUListElement, ComponentHierarchyProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <ul ref={ref} className={["space-y-2", className].join(" ")} {...props}>
        {children}
      </ul>
    );
  },
);

export const ComponentHierarchyItem = forwardRef<
  HTMLLIElement,
  ComponentHierarchyItemProps
>(
  ({ name, description, status, level = 0, children, className = "", ...props }, ref) => {
    const indentClassName =
      level === 3 ? "ml-9" : level === 2 ? "ml-6" : level === 1 ? "ml-3" : "ml-0";

    return (
      <li ref={ref} className={[indentClassName, className].join(" ")} {...props}>
        <div className="rounded-(--ec-radius-sm) border border-(--ec-color-border) bg-(--ec-color-surface) px-3 py-2">
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div className="min-w-0 space-y-1">
              <p className="text-sm font-medium text-(--ec-color-text-primary)">{name}</p>
              {description && (
                <p className="text-sm text-(--ec-color-text-secondary)">{description}</p>
              )}
            </div>
            {status && <div className="shrink-0">{status}</div>}
          </div>
        </div>
        {children && <ul className="mt-2 space-y-2">{children}</ul>}
      </li>
    );
  },
);

ComponentHierarchy.displayName = "ComponentHierarchy";
ComponentHierarchyItem.displayName = "ComponentHierarchyItem";
