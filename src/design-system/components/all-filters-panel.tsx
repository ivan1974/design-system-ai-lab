import { X } from 'lucide-react';
import { Badge, Button, Pill, Tag } from '../primitives';

export type FilterOptionStyle = 'pill' | 'tag' | 'checkbox';

export interface PillColorClasses {
  bg: string;
  activeBg: string;
  text: string;
  activeText: string;
  border: string;
  activeBorder: string;
}

export interface AllFiltersPanelProps {
  isOpen: boolean;
  categories: Record<string, string[]>;
  optionStyleByCategory: Record<string, FilterOptionStyle>;
  pillColorByOption?: Record<string, PillColorClasses>;
  activeFilters: Record<string, string[]>;
  onToggleOption: (category: string, option: string) => void;
  onClearAll: () => void;
  onApply: () => void;
  onClose: () => void;
}

export function AllFiltersPanel({
  isOpen,
  categories,
  optionStyleByCategory,
  pillColorByOption = {},
  activeFilters,
  onToggleOption,
  onClearAll,
  onApply,
  onClose,
}: AllFiltersPanelProps) {
  const totalActive = Object.values(activeFilters).reduce((sum, activeOptions) => sum + activeOptions.length, 0);

  return (
    <>
      <div
        className={`fixed inset-0 top-[60px] z-30 bg-black/20 transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div
        className={`fixed left-0 top-[60px] bottom-0 w-[300px] bg-white border-r border-neutral-200 z-40 flex flex-col transition-transform duration-200 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ boxShadow: isOpen ? '4px 0 24px rgba(0,0,0,0.08)' : 'none' }}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="text-[14px] text-neutral-900" style={{ fontWeight: 700 }}>Filters</span>
            {totalActive > 0 && (
              <Badge
                variant="success"
                size="sm"
                shape="pill"
                className="h-5 min-w-5 px-1.5 border-0 bg-[#00985F] text-white justify-center"
                style={{ fontWeight: 700 }}
              >
                {totalActive}
              </Badge>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 rounded-md flex items-center justify-center text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
          >
            <X size={15} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-5">
          {Object.entries(categories).map(([category, options]) => {
            const style = optionStyleByCategory[category] ?? 'checkbox';
            const selectedInGroup = (activeFilters[category] || []).length;

            return (
              <div key={category}>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[10.5px] text-neutral-500 uppercase tracking-widest" style={{ fontWeight: 700 }}>
                    {category}
                  </span>
                  {selectedInGroup > 0 && (
                    <Badge variant="success" size="xs" shape="pill" className="border-0" style={{ fontWeight: 700 }}>
                      {selectedInGroup}
                    </Badge>
                  )}
                </div>

                {style === 'pill' && (
                  <div className="flex flex-wrap gap-1.5">
                    {options.map(option => {
                      const checked = (activeFilters[category] || []).includes(option);
                      const colors = pillColorByOption[option];
                      return (
                        <Pill
                          key={option}
                          active={checked}
                          onClick={() => onToggleOption(category, option)}
                          className={colors ? `px-3 py-1 text-[12px] ${checked
                            ? `${colors.activeBg} ${colors.activeText} ${colors.activeBorder}`
                            : `${colors.bg} ${colors.text} ${colors.border} hover:border-neutral-300`
                            }` : 'px-3 py-1 text-[12px]'}
                        >
                          {option}
                        </Pill>
                      );
                    })}
                  </div>
                )}

                {style === 'tag' && (
                  <div className="flex flex-col gap-1">
                    {options.map(option => {
                      const checked = (activeFilters[category] || []).includes(option);
                      return (
                        <Tag
                          key={option}
                          as="button"
                          variant="success"
                          active={checked}
                          onClick={() => onToggleOption(category, option)}
                          className={!checked ? 'hover:border-neutral-300 hover:bg-neutral-50' : undefined}
                        >
                          {option}
                        </Tag>
                      );
                    })}
                  </div>
                )}

                {style === 'checkbox' && (
                  <div className="space-y-0.5">
                    {options.map(option => {
                      const checked = (activeFilters[category] || []).includes(option);
                      return (
                        <label
                          key={option}
                          className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg cursor-pointer hover:bg-neutral-50 transition-colors group select-none"
                          onClick={() => onToggleOption(category, option)}
                        >
                          <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-all ${checked ? 'bg-[#00985F] border-[#00985F]' : 'border-neutral-300 bg-white group-hover:border-neutral-400'
                            }`}>
                            {checked && (
                              <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                                <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </div>
                          <span
                            className={`text-[13px] transition-colors ${checked ? 'text-neutral-900' : 'text-neutral-600 group-hover:text-neutral-800'}`}
                            style={{ fontWeight: checked ? 500 : 400 }}
                          >
                            {option}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="px-4 py-4 border-t border-neutral-100 flex gap-2.5 shrink-0">
          <Button
            variant="secondary"
            size="md"
            onClick={onClearAll}
            className="flex-1 text-neutral-600 hover:bg-neutral-50 transition-colors"
          >
            Clear All
          </Button>
          <Button
            variant="primary"
            size="md"
            onClick={onApply}
            className="flex-1"
          >
            Apply
          </Button>
        </div>
      </div>
    </>
  );
}
