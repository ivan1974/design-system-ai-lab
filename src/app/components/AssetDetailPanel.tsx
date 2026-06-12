import { X, MapPin, Download, PhoneCall, Wrench } from 'lucide-react';
import type { Asset, Health, Activity } from '../data/assets';
import { HealthBadge, StatusLabel, HEALTH_CONFIG } from './AssetList';

export type PanelTab = 'overview' | 'health' | 'intelligence' | 'passport' | 'history' | 'documents';

const TABS: { id: PanelTab; label: string }[] = [
  { id: 'overview',     label: 'Overview' },
  { id: 'health',       label: 'Health' },
  { id: 'intelligence', label: 'Intelligence' },
  { id: 'passport',     label: 'Passport' },
  { id: 'history',      label: 'History' },
  { id: 'documents',    label: 'Documents' },
];

interface AssetDetailPanelProps {
  asset: Asset | null;
  activeTab: PanelTab;
  onTabChange: (t: PanelTab) => void;
  onClose: () => void;
}

export function AssetDetailPanel({ asset, activeTab, onTabChange, onClose }: AssetDetailPanelProps) {
  if (!asset) return null;
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 top-[60px] z-[60] bg-black/20"
        onClick={onClose}
      />
      {/* Panel */}
      <div
        className="fixed right-0 top-[60px] bottom-0 w-[500px] bg-white border-l border-neutral-200 z-[70] flex flex-col"
        style={{ boxShadow: '-8px 0 32px rgba(0,0,0,0.10)' }}
      >
        {/* ── Panel Header (spec §15) ── */}
        <PanelHeader asset={asset} onClose={onClose} />

        {/* ── Tab Navigation (spec §16) ── */}
        <div className="flex border-b border-neutral-200 px-5 overflow-x-auto flex-shrink-0 scrollbar-none">
          {TABS.map(tab => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`py-3 px-3.5 text-[13px] whitespace-nowrap border-b-2 transition-all duration-150 ${
                  active ? 'text-[#00985F] border-[#00985F]' : 'text-neutral-500 border-transparent hover:text-neutral-800'
                }`}
                style={{ fontWeight: active ? 600 : 400 }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ── Tab Content ── */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === 'overview'     && <OverviewTab asset={asset} />}
          {activeTab === 'health'       && <HealthTab asset={asset} />}
          {activeTab === 'intelligence' && <IntelligenceTab asset={asset} />}
          {activeTab === 'passport'     && <PassportTab asset={asset} />}
          {activeTab === 'history'      && <HistoryTab asset={asset} />}
          {activeTab === 'documents'    && <DocumentsTab asset={asset} />}
        </div>

        {/* ── Action Area (spec §18) — §0 v1.1: width by text, single line ── */}
        <div className="px-5 py-4 border-t border-neutral-100 flex gap-2.5 flex-shrink-0 bg-neutral-50/60">
          <SecondaryAction icon={<Download size={14} />} label="Download Report" />
          <SecondaryAction icon={<PhoneCall size={14} />} label="Contact Expert" />
          <button
            className="flex items-center justify-center gap-1.5 py-2.5 px-5 rounded-lg text-white text-[13px] transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{ backgroundColor: '#00985F', fontWeight: 600 }}
          >
            <Wrench size={14} />
            Schedule Service
          </button>
        </div>
      </div>
    </>
  );
}

// ─────────────────────────────────────────────
// Panel Header — spec §15 requires all 8 fields
// ─────────────────────────────────────────────
function PanelHeader({ asset, onClose }: { asset: Asset; onClose: () => void }) {
  const connectivity =
    asset.connectivity === 'connected' ? 'Connected'
    : asset.connectivity === 'not-connected' ? 'Not Connected'
    : 'Unknown';

  return (
    <div className="px-5 pt-4 pb-4 border-b border-neutral-200 flex-shrink-0">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          {/* Location */}
          <div className="flex items-center gap-1.5 mb-2">
            <MapPin size={11} className="text-neutral-400 flex-shrink-0" />
            <span className="text-[11px] text-neutral-500 uppercase tracking-wide" style={{ fontWeight: 500 }}>
              {asset.building} · {asset.area} · {asset.room}
            </span>
          </div>

          {/* Asset Name */}
          <div className="text-[16px] text-neutral-900 leading-snug mb-1" style={{ fontWeight: 700 }}>
            {asset.name}
          </div>

          {/* Asset Description */}
          <div className="text-[12px] text-neutral-500 mb-3 leading-relaxed">
            {asset.description}
          </div>

          {/* Asset Type */}
          <div className="text-[11px] text-neutral-600 mb-3" style={{ fontWeight: 500 }}>
            {asset.type}
          </div>

          {/* Badge row: Connectivity · Coverage · DPP Status · Health Status */}
          <div className="flex flex-wrap gap-1.5">
            <HeaderBadge
              label={connectivity}
              color={asset.connectivity === 'connected' ? 'green' : asset.connectivity === 'not-connected' ? 'neutral-dark' : 'neutral'}
            />
            <HeaderBadge
              label={asset.coverage}
              color={asset.coverage !== 'No Coverage' ? 'blue' : 'neutral'}
            />
            <HeaderBadge
              label={asset.dpp ? 'DPP Enabled' : 'No DPP'}
              color={asset.dpp ? 'green' : 'neutral'}
            />
            {/* Health Status */}
            <HealthBadge health={asset.health} />
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors flex-shrink-0"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}

type BadgeColor = 'green' | 'blue' | 'red' | 'orange' | 'amber' | 'neutral' | 'neutral-dark';
function HeaderBadge({ label, color }: { label: string; color: BadgeColor }) {
  const styles: Record<BadgeColor, string> = {
    green:        'bg-[#f0faf5] text-[#00985F] border-[#b3e6d0]',
    blue:         'bg-blue-50 text-blue-700 border-blue-200',
    red:          'bg-red-50 text-red-600 border-red-200',
    orange:       'bg-orange-50 text-orange-600 border-orange-200',
    amber:        'bg-amber-50 text-amber-600 border-amber-200',
    neutral:      'bg-neutral-100 text-neutral-400 border-neutral-200',
    'neutral-dark':'bg-neutral-100 text-neutral-600 border-neutral-200',
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] border ${styles[color]}`} style={{ fontWeight: 500 }}>
      {label}
    </span>
  );
}

// ─────────────────────────────────
// Shared layout helpers
// ─────────────────────────────────
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <div
        className="text-[10.5px] text-neutral-400 uppercase tracking-widest mb-3 pb-2 border-b border-neutral-100"
        style={{ fontWeight: 700 }}
      >
        {title}
      </div>
      {children}
    </div>
  );
}

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between py-1.5">
      <span className="text-[13px] text-neutral-500">{label}</span>
      <span className="text-[13px] text-neutral-900 text-right ml-6" style={{ fontWeight: 500 }}>{value}</span>
    </div>
  );
}

// §0 v1.1: button width by text, single line
function SecondaryAction({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button
      className="flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg text-neutral-700 text-[13px] border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300 transition-all whitespace-nowrap"
      style={{ fontWeight: 500 }}
    >
      {icon}
      {label}
    </button>
  );
}

// ─────────────────────────────────
// Overview Tab (§17: What is this?)
// ─────────────────────────────────
function OverviewTab({ asset }: { asset: Asset }) {
  return (
    <div className="p-5">
      <Section title="Identity">
        <Field label="Asset ID" value={<span className="font-mono text-[12px]">{asset.asset_id}</span>} />
        <Field label="Name" value={asset.name} />
        <Field label="Type" value={asset.type} />
        <Field label="Manufacturer" value={asset.manufacturer} />
        <Field label="Description" value={<span className="text-[12px] text-neutral-500 text-right">{asset.description}</span>} />
      </Section>
      <Section title="Service Coverage">
        <Field label="Coverage" value={asset.coverage} />
        <Field label="DPP Status" value={asset.dpp ? 'DPP Enabled' : 'No DPP'} />
      </Section>
      <Section title="Key Components">
        <div className="flex flex-wrap gap-1.5">
          {['Main Module', 'Protection System', 'Communication Interface'].map(c => (
            <span
              key={c}
              className="px-2.5 py-1 rounded-md text-[12px] bg-neutral-100 text-neutral-700"
              style={{ fontWeight: 500 }}
            >
              {c}
            </span>
          ))}
        </div>
      </Section>
    </div>
  );
}

// ─────────────────────────────────
// Health Tab (§17: Current condition — FACTS ONLY, no interpretation)
// ─────────────────────────────────
function HealthTab({ asset }: { asset: Asset }) {
  const hc = HEALTH_CONFIG[asset.health];
  return (
    <div className="p-5">
      <Section title="Condition">
        {/* Visual health score */}
        <div className="mb-4 p-4 rounded-xl border border-neutral-100 bg-neutral-50">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[13px] text-neutral-700" style={{ fontWeight: 600 }}>Health Score</span>
            <HealthBadge health={asset.health} />
          </div>
          <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-700 ${hc.dot}`}
              style={{ width: `${hc.bar}%` }}
            />
          </div>
          <div className="flex justify-between mt-1.5">
            <span className="text-[10px] text-neutral-400">Critical</span>
            <span className="text-[10px] text-neutral-400">Excellent</span>
          </div>
        </div>
        <Field label="Observed Trend" value="Stable" />
        <Field label="Risk Level" value="Low" />
        <Field label="Connectivity" value={
          asset.connectivity === 'connected' ? 'Active' :
          asset.connectivity === 'not-connected' ? 'Offline' : 'Unknown'
        } />
      </Section>

      <Section title="Live Measurements">
        {asset.connectivity === 'connected' ? (
          <>
            <MetricRow name="Voltage" value="400 V" unit="nominal" status="normal" />
            <MetricRow name="Load" value="72%" unit="of rated capacity" status="normal" />
            <MetricRow name="Temperature" value="34°C" unit="ambient" status="normal" />
            <MetricRow name="Insulation Resistance" value="≥ 50 MΩ" unit="measured" status="normal" />
          </>
        ) : (
          <div className="py-4 text-center text-[13px] text-neutral-400 bg-neutral-50 rounded-lg">
            No live measurements — asset not connected
          </div>
        )}
      </Section>

      <Section title="Last Recorded Activity">
        <Field label="Status" value={<StatusLabel activity={asset.activity} />} />
        <Field label="Date" value={asset.date || 'No record'} />
      </Section>
    </div>
  );
}

function MetricRow({ name, value, unit, status }: { name: string; value: string; unit: string; status: 'normal' | 'alert' }) {
  const isAlert = status === 'alert';
  return (
    <div
      className={`flex items-center justify-between px-3 py-2.5 rounded-lg border-l-2 mb-2 ${
        isAlert ? 'bg-red-50 border-l-red-500' : 'bg-neutral-50 border-l-emerald-500'
      }`}
    >
      <div>
        <div className="text-[12px] text-neutral-700" style={{ fontWeight: 500 }}>{name}</div>
        <div className="text-[11px] text-neutral-400">{unit}</div>
      </div>
      <span className="font-mono text-[13px] text-neutral-900" style={{ fontWeight: 700 }}>{value}</span>
    </div>
  );
}

// ─────────────────────────────────
// Intelligence Tab (§17: What should be done? — INTERPRETATION)
// ─────────────────────────────────
function IntelligenceTab({ asset }: { asset: Asset }) {
  const hasAlert = asset.activity === 'Active alert';
  const hasConnIssue = asset.activity === 'Connectivity issue';
  return (
    <div className="p-5">
      <Section title="Diagnosis">
        <div
          className={`p-3.5 rounded-xl border text-[13px] leading-relaxed mb-3 ${
            hasAlert
              ? 'bg-orange-50 border-orange-200 text-orange-800'
              : hasConnIssue
              ? 'bg-red-50 border-red-200 text-red-800'
              : 'bg-neutral-50 border-neutral-200 text-neutral-700'
          }`}
        >
          {hasAlert
            ? 'Active alert detected. Recommend immediate inspection of bus coupler protection relays. Potential nuisance trip condition identified from telemetry patterns.'
            : hasConnIssue
            ? 'Intermittent connectivity loss detected. Communication module may require re-configuration or firmware update. No physical fault detected in last inspection.'
            : 'Asset condition is within expected parameters. No immediate action required based on current measurements and service history.'}
        </div>
      </Section>

      <Section title="Fleet Position">
        <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 mb-3">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[12px] text-neutral-600" style={{ fontWeight: 600 }}>vs. Similar Assets</span>
            <span className="text-[12px] text-[#00985F]" style={{ fontWeight: 600 }}>Top 30th percentile</span>
          </div>
          {/* Mini bar chart */}
          <div className="flex items-end gap-1 h-10">
            {[40, 65, 80, 72, 55, 90, 68].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t transition-all"
                style={{
                  height: `${h}%`,
                  backgroundColor: i === 3 ? '#00985F' : '#E5E7EB',
                }}
              />
            ))}
          </div>
          <div className="text-[10px] text-neutral-400 mt-1 text-center">Asset position in fleet distribution</div>
        </div>
        <Field label="Cohort" value="Comparable service age" />
        <Field label="Fleet Benchmark" value="Within expected range" />
      </Section>

      <Section title="Action Plan">
        {hasAlert && (
          <RecommendCard
            priority="High"
            title="Inspect protection relay settings"
            detail="Schedule on-site inspection within 5 business days"
          />
        )}
        {hasConnIssue && (
          <RecommendCard
            priority="Medium"
            title="Re-configure communication module"
            detail="Remote firmware update available — schedule during next maintenance window"
          />
        )}
        <RecommendCard
          priority="Low"
          title="Continue scheduled maintenance plan"
          detail="Next preventive maintenance due in 6 months per EcoCare agreement"
        />
      </Section>
    </div>
  );
}

function RecommendCard({ priority, title, detail }: { priority: string; title: string; detail: string }) {
  const isHigh = priority === 'High';
  const isMed  = priority === 'Medium';
  return (
    <div className={`px-4 py-3 rounded-xl border-l-[3px] mb-2.5 ${
      isHigh ? 'bg-red-50 border-l-red-500' :
      isMed  ? 'bg-amber-50 border-l-amber-500' :
               'bg-[#f0faf5] border-l-[#00985F]'
    }`}>
      <div
        className="text-[10px] uppercase tracking-widest mb-1"
        style={{
          fontWeight: 700,
          color: isHigh ? '#DC2626' : isMed ? '#D97706' : '#00985F',
        }}
      >
        {priority} Priority
      </div>
      <div className="text-[13px] text-neutral-800 mb-0.5" style={{ fontWeight: 600 }}>{title}</div>
      <div className="text-[12px] text-neutral-500">{detail}</div>
    </div>
  );
}

// ─────────────────────────────────
// Passport Tab (§17: What is officially known?)
// ─────────────────────────────────
function PassportTab({ asset }: { asset: Asset }) {
  return (
    <div className="p-5">
      <Section title="Product Information">
        <Field label="Serial Number" value={<span className="font-mono text-[12px]">SE-{asset.asset_id}</span>} />
        <Field label="Commercial Reference" value={<span className="font-mono text-[12px]">LV429630SP</span>} />
        <Field label="Installation Date" value="2022-04-15" />
        <Field label="Lifecycle Status" value={<span style={{ color: '#00985F', fontWeight: 600 }}>Active</span>} />
      </Section>
      <Section title="Software & Firmware">
        <Field label="Firmware Version" value="P7 v3.2" />
        <Field label="Last Update" value="2025-09-12" />
        <Field label="End of Support" value="2042-12-31" />
      </Section>
      <Section title="Digital Product Passport">
        {asset.dpp ? (
          <div className="p-3.5 rounded-xl bg-[#f0faf5] border border-[#b3e6d0]">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-2 h-2 rounded-full bg-[#00985F]" />
              <span className="text-[13px] text-[#00985F]" style={{ fontWeight: 600 }}>DPP Active</span>
            </div>
            <div className="text-[12px] text-neutral-600">
              Digital Product Passport available. Circularity data, environmental impact, and material composition are registered.
            </div>
          </div>
        ) : (
          <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
            <div className="text-[13px] text-neutral-500">No Digital Product Passport registered for this asset.</div>
          </div>
        )}
      </Section>
    </div>
  );
}

// ─────────────────────────────────
// History Tab (§17: What happened over time?)
// ─────────────────────────────────
function HistoryTab({ asset }: { asset: Asset }) {
  const events = asset.date ? [
    { date: asset.date,     label: asset.activity,          type: 'primary' as const },
    { date: '2025-11-03',   label: 'Preventive Maintenance', type: 'service' as const },
    { date: '2025-06-12',   label: 'Inspection Completed',   type: 'service' as const },
    { date: '2024-12-01',   label: 'Firmware Update',        type: 'update'  as const },
  ] : [];

  return (
    <div className="p-5">
      <Section title="Event Timeline">
        {events.length === 0 ? (
          <div className="py-8 text-center text-[13px] text-neutral-400 bg-neutral-50 rounded-xl border border-neutral-100">
            No recorded events for this asset
          </div>
        ) : (
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-neutral-200" />
            <div className="space-y-3">
              {events.map((evt, i) => (
                <TimelineEvent key={i} event={evt} />
              ))}
            </div>
          </div>
        )}
      </Section>
    </div>
  );
}

type EvtType = 'primary' | 'service' | 'update';
function TimelineEvent({ event }: { event: { date: string; label: string; type: EvtType } }) {
  const dotColors: Record<EvtType, string> = {
    primary: '#00985F',
    service: '#6B7280',
    update:  '#3B82F6',
  };
  return (
    <div className="flex items-start gap-3 pl-1">
      <div
        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border-2 border-white"
        style={{ backgroundColor: dotColors[event.type], boxShadow: '0 0 0 2px #E5E7EB' }}
      />
      <div className="flex-1 min-w-0 pb-3">
        <div className="text-[13px] text-neutral-800" style={{ fontWeight: 500 }}>{event.label}</div>
        <div className="text-[11px] text-neutral-400 mt-0.5">{event.date}</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────
// Documents Tab (§17: Supporting evidence)
// ─────────────────────────────────
function DocumentsTab({ asset }: { asset: Asset }) {
  const docs = [
    { title: 'Asset Datasheet',      ref: `DOC-${asset.asset_id}`, type: 'PDF', size: '1.2 MB' },
    { title: 'Maintenance Record',   ref: `REC-${asset.asset_id}`, type: 'PDF', size: '340 KB' },
    { title: 'Installation Manual',  ref: `MAN-${asset.asset_id}`, type: 'PDF', size: '4.7 MB' },
    { title: 'Commissioning Report', ref: `COM-${asset.asset_id}`, type: 'PDF', size: '820 KB' },
  ];

  return (
    <div className="p-5">
      <Section title="Available Documents">
        <div className="space-y-2">
          {docs.map(doc => (
            <div
              key={doc.ref}
              className="flex items-center justify-between p-3.5 rounded-xl border border-neutral-100 hover:border-neutral-200 hover:bg-neutral-50 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-[10px] text-white"
                  style={{ backgroundColor: '#00985F', fontWeight: 700 }}
                >
                  {doc.type}
                </div>
                <div className="min-w-0">
                  <div className="text-[13px] text-neutral-800 truncate" style={{ fontWeight: 500 }}>{doc.title}</div>
                  <div className="text-[11px] text-neutral-400">{doc.ref} · {doc.size}</div>
                </div>
              </div>
              <button
                className="w-7 h-7 flex items-center justify-center rounded-lg text-neutral-400 hover:text-[#00985F] hover:bg-[#f0faf5] transition-colors flex-shrink-0"
              >
                <Download size={13} />
              </button>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
