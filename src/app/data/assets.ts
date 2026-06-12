export type Connectivity = 'connected' | 'not-connected' | 'unknown';
export type Health = 'Critical' | 'Poor' | 'Fair' | 'Good' | 'Excellent' | 'Unknown';
export type Activity = 'Live telemetry' | 'Active alert' | 'Connectivity issue' | 'Last service visit' | 'No record';
export type Coverage = 'EcoCare Advanced' | 'EcoCare Essential' | 'Adv. Service Plan' | 'No Coverage';

export interface Asset {
  asset_id: string;
  name: string;
  type: string;
  building: string;
  area: string;
  room: string;
  connectivity: Connectivity;
  coverage: Coverage;
  dpp: boolean;
  health: Health;
  activity: Activity;
  date: string | null;
  description: string;
  manufacturer: string;
}

// All 6 required asset variations per spec §20:
// 1. Connected Schneider Asset                             → AST-001
// 2. Connected Schneider Asset with Alert                  → AST-002
// 3. Connected Schneider Asset with Connectivity Issue     → AST-003
// 4. Non-Connected Schneider Asset                         → AST-005
// 5. Non-Connected Schneider Asset with Service History    → AST-009
// 6. Third-Party Asset                                     → AST-006
export const assetsData: Asset[] = [
  {
    asset_id: 'AST-001', name: 'SM6 24kV — Utility Intake A', type: 'MV Switchgear',
    building: 'Building A', area: 'MV Substation', room: 'A-MV01',
    connectivity: 'connected', coverage: 'EcoCare Advanced', dpp: true,
    health: 'Excellent', activity: 'Live telemetry', date: '2026-05-28',
    description: 'Medium-voltage utility intake cell for A-side supply', manufacturer: 'Schneider Electric',
  },
  {
    asset_id: 'AST-002', name: 'SM6 24kV — Bus Coupler', type: 'MV Switchgear',
    building: 'Building A', area: 'MV Substation', room: 'A-MV01',
    connectivity: 'connected', coverage: 'EcoCare Advanced', dpp: true,
    health: 'Poor', activity: 'Active alert', date: '2026-06-01',
    description: 'Bus coupler cell between A and B MV sections', manufacturer: 'Schneider Electric',
  },
  {
    asset_id: 'AST-003', name: 'Okken — Main LV Switchboard A', type: 'LV Switchgear',
    building: 'Building A', area: 'LV Room A', room: 'A-LV01',
    connectivity: 'connected', coverage: 'EcoCare Advanced', dpp: true,
    health: 'Fair', activity: 'Connectivity issue', date: '2026-06-08',
    description: 'A-side main LV switchboard — intermittent comms detected', manufacturer: 'Schneider Electric',
  },
  {
    asset_id: 'AST-004', name: 'Galaxy VXL 400kVA — UPS A', type: 'UPS',
    building: 'Building A', area: 'UPS Room', room: 'A-UP01',
    connectivity: 'connected', coverage: 'EcoCare Essential', dpp: true,
    health: 'Excellent', activity: 'Live telemetry', date: '2026-05-28',
    description: 'Mission-critical UPS providing N+1 redundancy for critical loads', manufacturer: 'Schneider Electric',
  },
  {
    asset_id: 'AST-005', name: 'Netbotz Environmental Sensor A', type: 'Monitoring',
    building: 'Building A', area: 'LV Room A', room: 'A-LV01',
    connectivity: 'not-connected', coverage: 'No Coverage', dpp: false,
    health: 'Good', activity: 'No record', date: null,
    description: 'Environmental monitoring device — not connected to SE Cloud', manufacturer: 'Schneider Electric',
  },
  {
    asset_id: 'AST-006', name: 'Mitsubishi Cooling Unit — A', type: 'Cooling',
    building: 'Building A', area: 'Cooling Plant', room: 'A-CL01',
    connectivity: 'unknown', coverage: 'No Coverage', dpp: false,
    health: 'Unknown', activity: 'No record', date: null,
    description: 'Third-party precision cooling unit for HVAC system', manufacturer: 'Mitsubishi',
  },
  {
    asset_id: 'AST-007', name: 'SM6 24kV — Utility Intake B', type: 'MV Switchgear',
    building: 'Building B', area: 'MV Substation', room: 'B-MV01',
    connectivity: 'connected', coverage: 'Adv. Service Plan', dpp: true,
    health: 'Good', activity: 'Last service visit', date: '2026-04-15',
    description: 'Medium-voltage utility intake cell for B-side supply', manufacturer: 'Schneider Electric',
  },
  {
    asset_id: 'AST-008', name: 'Okken — Main LV Switchboard B', type: 'LV Switchgear',
    building: 'Building B', area: 'LV Room B', room: 'B-LV01',
    connectivity: 'connected', coverage: 'EcoCare Essential', dpp: true,
    health: 'Good', activity: 'Live telemetry', date: '2026-05-28',
    description: 'B-side main LV switchboard feeding critical loads', manufacturer: 'Schneider Electric',
  },
  {
    asset_id: 'AST-009', name: 'Galaxy VXL 400kVA — UPS B', type: 'UPS',
    building: 'Building B', area: 'UPS Room', room: 'B-UP01',
    connectivity: 'not-connected', coverage: 'No Coverage', dpp: false,
    health: 'Good', activity: 'Last service visit', date: '2026-03-10',
    description: 'Backup UPS unit — connectivity module offline since last visit', manufacturer: 'Schneider Electric',
  },
  {
    asset_id: 'AST-010', name: 'Netbotz Environmental Sensor B', type: 'Monitoring',
    building: 'Building B', area: 'LV Room B', room: 'B-LV01',
    connectivity: 'unknown', coverage: 'No Coverage', dpp: false,
    health: 'Unknown', activity: 'No record', date: null,
    description: 'Third-party environmental monitoring device — unregistered asset', manufacturer: 'Schneider Electric',
  },
];

export const filterCategories: Record<string, string[]> = {
  'Health':        ['Critical', 'Poor', 'Fair', 'Good', 'Excellent'],
  'Connectivity':  ['Connected', 'Non-connected'],
  'Coverage':      ['EcoCare Advanced', 'EcoCare Essential', 'Adv. Service Plan', 'No Coverage'],
  'DPP':           ['With Digital Product Passport', 'Without Digital Product Passport'],
  'Status':        ['Live Telemetry', 'Active Alert', 'Last Service Visit', 'No Record'],
  'Age':           ['< 5 years', '5–9 years', '10+ years'],
  'Location':      ['Building A', 'Building B'],
  'Asset Type':    ['MV Switchgear', 'LV Switchgear', 'UPS', 'Cooling'],
  'Contract Type': ['EcoCare Advanced', 'EcoCare Essential', 'Adv. Service Plan', 'No Coverage'],
};

// Quick filter options for the View & Filter Bar right zone
export const quickFilterOptions: Record<string, string[]> = {
  'Location':      ['Building A', 'Building B'],
  'Asset Type':    ['MV Switchgear', 'LV Switchgear', 'UPS', 'Cooling'],
  'Contract Type': ['EcoCare Advanced', 'EcoCare Essential', 'Adv. Service Plan', 'No Coverage'],
};
