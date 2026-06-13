import { Search } from 'lucide-react';

import { Input } from '../primitives';

export interface SearchFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  ariaLabel?: string;
  className?: string;
}

export function SearchField({
  value,
  onChange,
  placeholder = 'Search',
  ariaLabel = 'Search',
  className = '',
}: SearchFieldProps) {
  return (
    <div className={`relative ${className}`.trim()}>
      <Search
        size={14}
        className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{ color: '#9CA3AF' }}
      />
      <Input
        type="text"
        aria-label={ariaLabel}
        placeholder={placeholder}
        value={value}
        onChange={event => onChange(event.target.value)}
        className="h-auto w-full pl-9 pr-4 py-[7px] text-[13px] rounded-lg border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-400 outline-none transition-all duration-150 focus:border-[#00985F] focus:bg-white focus:ring-0"
        style={{
          fontFamily: 'inherit',
          boxShadow: 'none',
        }}
        onFocus={event => {
          event.target.style.borderColor = '#00985F';
          event.target.style.backgroundColor = '#fff';
          event.target.style.boxShadow = '0 0 0 3px rgba(0,152,95,0.08)';
        }}
        onBlur={event => {
          event.target.style.borderColor = '';
          event.target.style.backgroundColor = '';
          event.target.style.boxShadow = '';
        }}
      />
    </div>
  );
}
