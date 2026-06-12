import { ChevronRight } from 'lucide-react';
import { Badge } from '../../design-system/primitives';
import { AssetInventoryRow } from '../../design-system/components';
import type { Asset } from '../data/assets';

interface AssetListProps {
  assets: Asset[];
  selectedId: string | null;
  onSelect: (asset: Asset) => void;
}

const COL_WIDTHS = 'grid-cols-[minmax(0,2.4fr)_minmax(0,1fr)_minmax(0,1.3fr)_minmax(0,1.2fr)_minmax(0,0.85fr)_minmax(0,1.4fr)_36px]';
const COLUMN_HEADERS = ['Asset', 'Type', 'Location', 'Coverage', 'Health', 'Status', ''];

export function AssetList({ assets, selectedId, onSelect }: AssetListProps) {
  const groups: { building: string; area: string; room: string; assets: Asset[] }[] = [];
  const seen = new Map<string, number>();
  assets.forEach(asset => {
    const key = `${asset.building}||${asset.area}||${asset.room}`;
    if (!seen.has(key)) {
      seen.set(key, groups.length);
      groups.push({ building: asset.building, area: asset.area, room: asset.room, assets: [] });
    }
    groups[seen.get(key)!].assets.push(asset);
  });

  if (assets.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center bg-neutral-50">
        <div className="text-center">
          <div className="text-[32px] mb-3">🔍</div>
          <div className="text-[14px] text-neutral-700" style={{ fontWeight: 600 }}>No assets match your filters</div>
          <div className="text-[13px] text-neutral-400 mt-1">Try adjusting or clearing your filters</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto bg-neutral-50/40">
      <div className={`sticky top-0 z-20 bg-white border-b border-neutral-200 grid ${COL_WIDTHS} px-5 gap-3`} style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}>
        {COLUMN_HEADERS.map((col, i) => (
          <div key={i} className="py-2.5 text-[10.5px] text-neutral-400 tracking-wider uppercase" style={{ fontWeight: 600 }}>
            {col}
          </div>
        ))}
      </div>

      <div className="divide-y divide-neutral-100">
        {groups.map(group => (
          <div key={`${group.building}||${group.area}||${group.room}`}>
            <div className="sticky top-[41px] z-10 px-5 py-2 flex items-center gap-1.5 bg-neutral-50/95 border-b border-neutral-100">
              <span className="text-[11px] text-neutral-400" style={{ fontWeight: 500 }}>{group.building}</span>
              <ChevronRight size={10} className="text-neutral-300 shrink-0" />
              <span className="text-[11px] text-neutral-400" style={{ fontWeight: 500 }}>{group.area}</span>
              <ChevronRight size={10} className="text-neutral-300 shrink-0" />
              <span className="text-[11px] text-neutral-600" style={{ fontWeight: 600 }}>{group.room}</span>
              <Badge variant="neutral" size="xs" shape="pill" className="ml-1.5" style={{ fontWeight: 600 }}>
                {group.assets.length}
              </Badge>
            </div>
            <div className="bg-white divide-y divide-neutral-100">
              {group.assets.map(asset => (
                <AssetInventoryRow
                  key={asset.asset_id}
                  asset={asset}
                  selected={selectedId === asset.asset_id}
                  columnWidths={COL_WIDTHS}
                  onSelect={() => onSelect(asset)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
