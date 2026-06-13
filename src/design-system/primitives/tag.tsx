import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

import { cn } from '../../lib/utils';

type TagVariant = 'neutral' | 'success';
type TagSize = 'sm' | 'md';
type TagAs = 'span' | 'button';

type SpanProps = HTMLAttributes<HTMLSpanElement>;
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type TagProps = (SpanProps | ButtonProps) & {
  variant?: TagVariant;
  size?: TagSize;
  active?: boolean;
  as?: TagAs;
  children: ReactNode;
};

const baseClasses = 'inline-flex items-center border whitespace-nowrap';
const buttonClasses = 'text-left transition-all disabled:pointer-events-none disabled:opacity-50';

const inactiveClasses: Record<TagVariant, string> = {
  neutral: 'bg-white text-neutral-600 border-neutral-200',
  success: 'bg-white text-neutral-600 border-neutral-200',
};

const activeClasses: Record<TagVariant, string> = {
  neutral: 'bg-neutral-50 text-neutral-800 border-neutral-300',
  success: 'bg-[#f0faf5] text-[#00985F] border-[#00985F]',
};

const sizeClasses: Record<TagSize, string> = {
  sm: 'px-2 py-0.5 rounded text-[11px]',
  md: 'px-3 py-1.5 rounded-lg text-[12px]',
};

export function Tag({
  variant = 'neutral',
  size = 'md',
  active = false,
  as = 'span',
  className,
  style,
  children,
  ...props
}: TagProps) {
  const classes = cn(
    baseClasses,
    as === 'button' && buttonClasses,
    sizeClasses[size],
    active ? activeClasses[variant] : inactiveClasses[variant],
    className,
  );

  if (as === 'button') {
    return (
      <button
        type="button"
        className={classes}
        style={{ fontWeight: active ? 600 : 400, ...style }}
        {...(props as ButtonProps)}
      >
        {children}
      </button>
    );
  }

  return (
    <span
      className={classes}
      style={{ fontWeight: active ? 600 : 400, ...style }}
      {...(props as SpanProps)}
    >
      {children}
    </span>
  );
}
