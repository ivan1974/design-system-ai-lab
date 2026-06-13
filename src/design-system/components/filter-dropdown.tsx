import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

import { Badge } from '../primitives';

export interface FilterDropdownOption {
  label: string;
  value: string;
}

export interface FilterDropdownProps {
  label: string;
  options: FilterDropdownOption[];
  selectedValues: string[];
  onToggle: (value: string) => void;
  className?: string;
}

export function FilterDropdown({
  label,
  options,
  selectedValues,
  onToggle,
  className = '',
}: FilterDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = selectedValues.length;

  useEffect(() => {
    function handle(event: MouseEvent) {
      const target = event.target;
      if (target instanceof Node && ref.current && !ref.current.contains(target)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`.trim()}>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] border transition-all duration-150 whitespace-nowrap focus:outline-none ${count > 0 ? 'border-[#00985F] text-[#00985F] bg-[#f0faf5]' : 'border-neutral-200 text-neutral-600 bg-white hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-800'}`}
        style={{ fontWeight: count > 0 ? 600 : 400 }}
      >
        {label}
        {count > 0 && (
          <Badge
            variant="success"
            size="xs"
            shape="pill"
            className="w-4 h-4 px-0 border-0 bg-[#00985F] text-white justify-center shrink-0"
            style={{ fontWeight: 700 }}
          >
            {count}
          </Badge>
        )}
        <ChevronDown size={12} className={`text-neutral-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div
          className="absolute top-full right-0 mt-1.5 min-w-[180px] bg-white border border-neutral-200 rounded-xl z-50 py-1.5 overflow-hidden"
          style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.10)' }}
        >
          {options.map(option => {
            const checked = selectedValues.includes(option.value);
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => onToggle(option.value)}
                className="w-full flex items-center justify-between px-3 py-2 text-[13px] text-neutral-700 hover:bg-neutral-50 transition-colors focus:outline-none"
                style={{ fontWeight: checked ? 500 : 400 }}
              >
                <span>{option.label}</span>
                {checked && <Check size={13} style={{ color: '#00985F' }} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
