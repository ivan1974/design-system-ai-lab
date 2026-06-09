import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

import { SectionHeading } from "../components/typography";

export type SectionHeaderProps = HTMLAttributes<HTMLElement> & {
  title: string;
  description?: string;
  eyebrow?: ReactNode;
  actions?: ReactNode;
};

export const SectionHeader = forwardRef<HTMLElement, SectionHeaderProps>(
  ({ title, description, eyebrow, actions, className = "", ...props }, ref) => {
    return (
      <SectionHeading
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

SectionHeader.displayName = "SectionHeader";
