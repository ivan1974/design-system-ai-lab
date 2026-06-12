import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Check, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { Badge } from '../primitives';

export interface ViewFilterBarView<TView extends string = string> {
  id: TView;
  label: string;
  icon: ReactNode;
}

export interface ViewFilterBarProps<TView extends string = string> {
  views: Array<ViewFilterBarView<TView>>;
  activeView: TView;
  quickFilterOptions: Record<string, string[]>;
  activeFilterCount: number;
  activeFilters: Record<string, string[]>;
  onViewChange: (view: TView) => void;
  onAllFilters: () => void;
  onToggleOption: (category: string, option: string) => void;
}

export function ViewFilterBar<TView extends string = string>({
  views,
  activeView,
  quickFilterOptions,
  activeFilterCount,
  activeFilters,
  onViewChange,
  onAllFilters,
  onToggleOption,
}: ViewFilterBarProps<TView>) {
  return (
    <div className="bg-white border-b border-neutral-200/80 px-5 flex items-center justify-between gap-4 h-[46px] flex-shrink-0">
      <div className="flex items-center">
        <div className="flex rounded-lg border border-neutral-200 overflow-hidden bg-neutral-100 p-0.5 gap-0.5">
          {views.map(view => {
            const active = activeView === view.id;
            return (
              <button
                key={view.id}
                type="button"
                onClick={() => onViewChange(view.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[13px] transition-all duration-150 whitespace-nowrap ${active ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-500 hover:text-neutral-700'}`}
                style={{ fontWeight: active ? 600 : 400 }}
              >
                <span className={active ? 'text-[#00985F]' : 'text-neutral-400'}>{view.icon}</span>
                {view.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-2">
        {Object.keys(quickFilterOptions).map(category => (
          <QuickFilterDropdown
            key={category}
            label={category}
            options={quickFilterOptions[category]}
            selected={activeFilters[category] || []}
            onToggle={(option) => onToggleOption(category, option)}
          />
        ))}

        <button
          type="button"
          onClick={onAllFilters}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[13px] border transition-all duration-150 whitespace-nowrap ${activeFilterCount > 0 ? 'bg-[#00985F] text-white border-[#00985F] hover:bg-[#007A4A]' : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-800'}`}
          style={{ fontWeight: 500 }}
        >
          <SlidersHorizontal size={13} />
          All Filters
          {activeFilterCount > 0 && (
            <Badge
              variant="success"
              size="xs"
              shape="pill"
              className="w-[18px] h-[18px] px-0 border-0 bg-white text-[#00985F] justify-center flex-shrink-0"
              style={{ fontWeight: 700 }}
            >
              {activeFilterCount}
            </Badge>
          )}
        </button>
      </div>
    </div>
  );
}

function QuickFilterDropdown({
  label,
  options,
  selected,
  onToggle,
}: {
  label: string;
  options: string[];
  selected: string[];
  onToggle: (option: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = selected.length;

  useEffect(() => {
    function handle(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] border transition-all duration-150 whitespace-nowrap ${count > 0 ? 'border-[#00985F] text-[#00985F] bg-[#f0faf5]' : 'border-neutral-200 text-neutral-600 bg-white hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-800'}`}
        style={{ fontWeight: count > 0 ? 600 : 400 }}
      >
        {label}
        {count > 0 && (
          <Badge
            variant="success"
            size="xs"
            shape="pill"
            className="w-4 h-4 px-0 border-0 bg-[#00985F] text-white justify-center flex-shrink-0"
            style={{ fontWeight: 700 }}
          >
            {count}
          </Badge>
        )}
        <ChevronDown size={12} className={`text-neutral-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-1.5 min-w-[180px] bg-white border border-neutral-200 rounded-xl z-50 py-1.5 overflow-hidden" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.10)' }}>
          {options.map(option => {
            const checked = selected.includes(option);
            return (
              <button
                key={option}
                type="button"
                onClick={() => onToggle(option)}
                className="w-full flex items-center justify-between px-3 py-2 text-[13px] text-neutral-700 hover:bg-neutral-50 transition-colors"
                style={{ fontWeight: checked ? 500 : 400 }}
              >
                <span>{option}</span>
                {checked && <Check size={13} style={{ color: '#00985F' }} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
