import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

import {
  PanelBody,
  PanelFooter,
  PanelHeader,
  SlideOverPanel,
} from "../components/panel";

export type WorkspaceDetailPanelMode = "inline" | "overlay";
export type WorkspaceDetailPanelSize = "md" | "lg" | "xl";

export type WorkspaceDetailPanelProps = HTMLAttributes<HTMLElement> & {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  mode?: WorkspaceDetailPanelMode;
  size?: WorkspaceDetailPanelSize;
  title: string;
  description?: string;
  meta?: ReactNode;
  actions?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  closeLabel?: string;
};

const inlineSizeClasses: Record<WorkspaceDetailPanelSize, string> = {
  md: "max-w-md",
  lg: "max-w-xl",
  xl: "max-w-2xl",
};

export const WorkspaceDetailPanel = forwardRef<HTMLElement, WorkspaceDetailPanelProps>(
  (
    {
      open = true,
      onOpenChange,
      mode = "inline",
      size = "lg",
      title,
      description,
      meta,
      actions,
      children,
      footer,
      closeLabel = "Close detail panel",
      className = "",
      ...props
    },
    ref,
  ) => {
    const panel = (
      <section
        ref={mode === "inline" ? ref : undefined}
        className={[
          "flex h-full min-h-0 flex-col overflow-hidden rounded-(--ec-radius-lg) border border-(--ec-color-border-soft) bg-(--ec-color-surface)",
          mode === "inline" ? inlineSizeClasses[size] : "h-full rounded-none border-0",
          className,
        ].join(" ")}
        {...props}
      >
        <PanelHeader
          title={title}
          description={description}
          meta={meta}
          actions={actions}
          onClose={onOpenChange ? () => onOpenChange(false) : undefined}
          closeLabel={closeLabel}
        />
        <PanelBody className="min-h-0 flex-1 overflow-y-auto">{children}</PanelBody>
        {footer && <PanelFooter>{footer}</PanelFooter>}
      </section>
    );

    if (mode === "overlay") {
      return (
        <SlideOverPanel
          ref={ref as React.Ref<HTMLDivElement>}
          open={open}
          onOpenChange={onOpenChange}
          size={size}
        >
          {panel}
        </SlideOverPanel>
      );
    }

    if (!open) {
      return null;
    }

    return panel;
  },
);

WorkspaceDetailPanel.displayName = "WorkspaceDetailPanel";
