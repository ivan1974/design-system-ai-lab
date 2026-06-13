import { type ReactNode } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { Badge } from '../primitives';
import { FilterDropdown } from './filter-dropdown';

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
    <div className="bg-white border-b border-neutral-200/80 px-5 flex items-center justify-between gap-4 h-[46px] shrink-0">
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
          <FilterDropdown
            key={category}
            label={category}
            options={quickFilterOptions[category].map(option => ({ label: option, value: option }))}
            selectedValues={activeFilters[category] || []}
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
              className="w-[18px] h-[18px] px-0 border-0 bg-white text-[#00985F] justify-center shrink-0"
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
