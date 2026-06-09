import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

import { PageHeading } from "./typography";

export type PageHeaderProps = HTMLAttributes<HTMLElement> & {
  title: string;
  description?: string;
  eyebrow?: ReactNode;
  actions?: ReactNode;
};

export const PageHeader = forwardRef<HTMLElement, PageHeaderProps>(
  ({ title, description, eyebrow, actions, className = "", ...props }, ref) => {
    return (
      <PageHeading
        ref={ref}
        title={title}
        description={description}
        eyebrow={eyebrow}
        actions={actions}
        className={className}
        {...props}
      />
    );
  },
);

PageHeader.displayName = "PageHeader";
