import type { HTMLAttributes, ReactNode } from 'react';

type TagVariant = 'neutral' | 'success';
type TagSize = 'sm' | 'md';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: TagVariant;
  size?: TagSize;
  active?: boolean;
  children: ReactNode;
}

const baseClasses = 'inline-flex items-center border whitespace-nowrap';

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

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function Tag({
  variant = 'neutral',
  size = 'md',
  active = false,
  className,
  style,
  children,
  ...props
}: TagProps) {
  return (
    <span
      className={cx(baseClasses, sizeClasses[size], active ? activeClasses[variant] : inactiveClasses[variant], className)}
      style={{ fontWeight: active ? 600 : 400, ...style }}
      {...props}
    >
      {children}
    </span>
  );
}
