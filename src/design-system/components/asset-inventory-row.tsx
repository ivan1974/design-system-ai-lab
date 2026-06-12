import { ChevronRight } from 'lucide-react';
import { Badge } from '../primitives';

export type AssetConnectivity = 'connected' | 'not-connected' | 'unknown';
export type AssetHealth = 'Critical' | 'Poor' | 'Fair' | 'Good' | 'Excellent' | 'Unknown';
export type AssetActivity = 'Live telemetry' | 'Active alert' | 'Connectivity issue' | 'Last service visit' | 'No record';

export interface AssetInventoryRowData {
  asset_id: string;
  name: string;
  description: string;
  type: string;
  building: string;
  area: string;
  room: string;
  coverage: string;
  dpp: boolean;
  connectivity: AssetConnectivity;
  health: AssetHealth;
  activity: AssetActivity;
  date?: string;
}

export interface AssetInventoryRowProps {
  asset: AssetInventoryRowData;
  selected: boolean;
  columnWidths: string;
  onSelect: () => void;
}

export function AssetInventoryRow({ asset, selected, columnWidths, onSelect }: AssetInventoryRowProps) {
  return (
    <div onClick={onSelect} className={`grid ${columnWidths} px-5 gap-3 cursor-pointer transition-all duration-100 group relative ${selected ? 'bg-[#f0faf5]' : 'hover:bg-neutral-50/80'}`}>
      {selected && <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#00985F] rounded-r" />}

      <div className="py-3.5 flex flex-col gap-0.5 min-w-0">
        <ConnectivityLabel connectivity={asset.connectivity} />
        <div className="text-[13px] text-neutral-900 truncate" style={{ fontWeight: 600 }}>{asset.name}</div>
        <div className="text-[11px] text-neutral-400 font-mono tracking-tight">{asset.asset_id}</div>
        <div className="text-[11px] text-neutral-400 truncate leading-tight mt-0.5">{asset.description}</div>
      </div>

      <div className="py-3.5 flex items-center">
        <TypeTag type={asset.type} />
      </div>

      <div className="py-3.5 flex flex-col justify-center gap-0.5 min-w-0">
        <div className="text-[11px] text-neutral-500 truncate">{asset.building}</div>
        <div className="text-[12px] text-neutral-700 truncate" style={{ fontWeight: 500 }}>{asset.area}</div>
        <div className="text-[11px] text-neutral-400 font-mono">{asset.room}</div>
      </div>

      <div className="py-3.5 flex flex-col justify-center gap-1 min-w-0">
        <div className="text-[12px] text-neutral-700 truncate" style={{ fontWeight: 500 }}>{asset.coverage}</div>
        <DPPStatus dpp={asset.dpp} />
      </div>

      <div className="py-3.5 flex items-center">
        <HealthBadge health={asset.health} />
      </div>

      <div className="py-3.5 flex flex-col justify-center gap-0.5">
        <StatusLabel activity={asset.activity} />
        {asset.date && <div className="text-[11px] text-neutral-400">{asset.date}</div>}
      </div>

      <div className="py-3.5 flex items-center justify-end">
        <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-all duration-150 ${selected ? 'bg-[#00985F] text-white' : 'text-neutral-300 group-hover:text-neutral-500 group-hover:bg-neutral-100'}`}>
          <ChevronRight size={13} />
        </div>
      </div>
    </div>
  );
}

function ConnectivityLabel({ connectivity }: { connectivity: AssetConnectivity }) {
  if (connectivity === 'connected') {
    return (
      <div className="flex items-center gap-1.5">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50" style={{ backgroundColor: '#00985F' }} />
          <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: '#00985F' }} />
        </span>
        <span className="text-[10px] uppercase tracking-wider" style={{ color: '#00985F', fontWeight: 700 }}>Connected</span>
      </div>
    );
  }
  if (connectivity === 'not-connected') {
    return (
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-neutral-300 shrink-0" />
        <span className="text-[10px] uppercase tracking-wider text-neutral-500" style={{ fontWeight: 600 }}>Not connected</span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-1.5">
      <span className="w-2 h-2 rounded-full bg-neutral-200 shrink-0" />
      <span className="text-[10px] uppercase tracking-wider text-neutral-400" style={{ fontWeight: 600 }}>Unknown</span>
    </div>
  );
}

function TypeTag({ type }: { type: string }) {
  return (
    <Badge variant="subtle" size="sm" shape="rounded" className="truncate max-w-full">
      {type}
    </Badge>
  );
}

function DPPStatus({ dpp }: { dpp: boolean }) {
  return dpp
    ? <span className="text-[11px]" style={{ color: '#00985F', fontWeight: 500 }}>DPP Enabled</span>
    : <span className="text-[11px] text-neutral-400">No DPP</span>;
}

const HEALTH_CONFIG: Record<AssetHealth, { bg: string; dot: string; text: string; bar: number }> = {
  Critical: { bg: 'bg-red-50', dot: 'bg-red-500', text: 'text-red-600', bar: 10 },
  Poor: { bg: 'bg-orange-50', dot: 'bg-orange-500', text: 'text-orange-600', bar: 28 },
  Fair: { bg: 'bg-amber-50', dot: 'bg-amber-500', text: 'text-amber-600', bar: 52 },
  Good: { bg: 'bg-emerald-50', dot: 'bg-emerald-500', text: 'text-emerald-600', bar: 75 },
  Excellent: { bg: 'bg-[#f0faf5]', dot: 'bg-[#00985F]', text: 'text-[#00985F]', bar: 96 },
  Unknown: { bg: 'bg-neutral-100', dot: 'bg-neutral-300', text: 'text-neutral-500', bar: 0 },
};

export function HealthBadge({ health }: { health: AssetHealth }) {
  const config = HEALTH_CONFIG[health];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] ${config.bg} ${config.text}`} style={{ fontWeight: 600 }}>
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${config.dot}`} />
      {health}
    </span>
  );
}

const STATUS_CONFIG: Record<AssetActivity, { icon: string; color: string }> = {
  'Live telemetry': { icon: '✓', color: '#10B981' },
  'Active alert': { icon: '⚠', color: '#EA580C' },
  'Connectivity issue': { icon: '⚠', color: '#DC2626' },
  'Last service visit': { icon: '◷', color: '#6B7280' },
  'No record': { icon: '—', color: '#D1D5DB' },
};

export function StatusLabel({ activity }: { activity: AssetActivity }) {
  const config = STATUS_CONFIG[activity];
  return (
    <div className="flex items-center gap-1.5 text-[12px]" style={{ color: config.color, fontWeight: 500 }}>
      <span style={{ color: config.color }}>{config.icon}</span>
      {activity}
    </div>
  );
}
