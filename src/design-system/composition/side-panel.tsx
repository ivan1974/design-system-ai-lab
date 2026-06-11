import { forwardRef, useEffect } from "react";
import type { HTMLAttributes, ReactNode } from "react";

import { PanelBody, PanelFooter, PanelHeader, SlideOverPanel } from "../components/panel";

export type SidePanelWidth = "analysis";

export type SidePanelProps = Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  width?: SidePanelWidth;
  closeLabel?: string;
  closeOnOverlay?: boolean;
  closeOnEscape?: boolean;
  lockBackgroundScroll?: boolean;
};

export const SidePanel = forwardRef<HTMLDivElement, SidePanelProps>(
  (
    {
      open,
      onClose,
      title,
      description,
      children,
      footer,
      width = "analysis",
      closeLabel = "Close panel",
      closeOnOverlay = true,
      closeOnEscape = true,
      lockBackgroundScroll = true,
      className = "",
      ...props
    },
    ref,
  ) => {
    useEffect(() => {
      if (!open || !closeOnEscape) return undefined;
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [closeOnEscape, onClose, open]);

    useEffect(() => {
      if (!open || !lockBackgroundScroll) return undefined;
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }, [lockBackgroundScroll, open]);

    return (
      <>
        {open && closeOnOverlay && (
          <button
            type="button"
            aria-label="Close overlay"
            className="fixed inset-0 z-[200] bg-black/45 backdrop-blur-[4px]"
            onClick={onClose}
          />
        )}
        <SlideOverPanel
          ref={ref}
          open={open}
          onOpenChange={(nextOpen) => {
            if (!nextOpen) onClose();
          }}
          modal={false}
          size="lg"
          data-width={width}
          className={[
            "z-[300] flex h-dvh w-[30vw] min-w-[360px] max-w-[500px] flex-col",
            "transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
            className,
          ].join(" ")}
          {...props}
        >
          <PanelHeader title={title} description={description} onClose={onClose} closeLabel={closeLabel} className="shrink-0" />
          <div className="min-h-0 flex-1 overflow-y-auto"><PanelBody>{children}</PanelBody></div>
          {footer && <PanelFooter className="sticky bottom-0 shrink-0">{footer}</PanelFooter>}
        </SlideOverPanel>
      </>
    );
  },
);

SidePanel.displayName = "SidePanel";
