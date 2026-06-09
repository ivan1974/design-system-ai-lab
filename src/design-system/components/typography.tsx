import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type HeadingSize = "page" | "section" | "subsection";

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
  level?: HeadingLevel;
  size?: HeadingSize;
};

export type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
  variant?: "body" | "muted" | "caption";
};

const headingSizeClasses: Record<HeadingSize, string> = {
  page: "text-[length:var(--ec-title-page-size)] leading-[var(--ec-title-page-line-height)] tracking-(--ec-letter-spacing-tight) font-semibold",
  section: "text-[length:var(--ec-title-section-size)] leading-[var(--ec-title-section-line-height)] tracking-(--ec-letter-spacing-tight) font-semibold",
  subsection: "text-[length:var(--ec-title-subsection-size)] leading-[var(--ec-title-subsection-line-height)] tracking-(--ec-letter-spacing-normal) font-semibold",
};

const textVariantClasses: Record<NonNullable<TextProps["variant"]>, string> = {
  body: "text-[length:var(--ec-text-body-size)] leading-[var(--ec-text-body-line-height)] text-(--ec-color-text-secondary)",
  muted: "text-[length:var(--ec-text-body-size)] leading-[var(--ec-text-body-line-height)] text-(--ec-color-text-muted)",
  caption: "text-[length:var(--ec-text-caption-size)] leading-[var(--ec-text-caption-line-height)] text-(--ec-color-text-muted)",
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, level = 2, size = "section", className = "", ...props }, ref) => {
    const Element = `h${level}` as keyof JSX.IntrinsicElements;

    return (
      <Element
        ref={ref}
        className={[
          "text-(--ec-color-text-primary)",
          headingSizeClasses[size],
          className,
        ].join(" ")}
        {...props}
      >
        {children}
      </Element>
    );
  },
);

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ children, variant = "body", className = "", ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={[textVariantClasses[variant], className].join(" ")}
        {...props}
      >
        {children}
      </p>
    );
  },
);

Heading.displayName = "Heading";
Text.displayName = "Text";
