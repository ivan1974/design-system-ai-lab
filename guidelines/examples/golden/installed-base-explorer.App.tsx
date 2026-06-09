import {
  DetailPanel,
  DetailPanelBody,
  DetailPanelHeader,
  FilterBar,
  KeyValueList,
  KeyValueRow,
  MasterDetailLayout,
  SectionBlock,
  SemanticTag,
  SignalRow,
  StatusPill,
  WorkspaceShell,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";

const assets = [
  { name: "SM6 Bus Coupler", value: "Review needed", description: "Lyon DC" },
  { name: "Galaxy VX UPS", value: "Warning signal", description: "Lyon DC" },
  { name: "LV Switchboard A2", value: "Monitored", description: "Grenoble Plant" },
];

export default function App() {
  return (
    <main className="min-h-screen bg-(--ec-color-background)">
      <WorkspaceShell
        header={
          <div>
            <p className="text-sm font-medium text-(--ec-color-primary)">Installed base explorer</p>
            <h1 className="mt-1 text-2xl font-semibold text-(--ec-color-text-primary)">Explore assets with source context</h1>
            <p className="mt-2 max-w-3xl text-sm text-(--ec-color-text-secondary)">
              Review asset identity, monitoring scope and evidence in a master-detail workspace.
            </p>
          </div>
        }
        controls={
          <FilterBar
            title="Installed base"
            description="Filter by site, status and monitoring scope."
            resultCount="3 assets shown"
            filters={
              <>
                <SemanticTag>Lyon DC</SemanticTag>
                <SemanticTag tone="warning">Needs review</SemanticTag>
              </>
            }
          />
        }
      >
        <MasterDetailLayout
          detailWidth="lg"
          list={
            <SectionBlock title="Assets">
              <div className="divide-y divide-(--ec-color-border)">
                {assets.map((asset) => (
                  <SignalRow key={asset.name} label={asset.name} value={asset.value} description={asset.description} />
                ))}
              </div>
            </SectionBlock>
          }
          detail={
            <DetailPanel>
              <DetailPanelHeader
                title="SM6 Bus Coupler"
                description="Selected asset detail. Facts and source limits appear before interpretation."
                meta={<StatusPill tone="warning">Review needed</StatusPill>}
              />
              <DetailPanelBody>
                <SectionBlock title="Identity and scope">
                  <KeyValueList columns={2}>
                    <KeyValueRow label="Site" value="Lyon DC" />
                    <KeyValueRow label="Service plan" value="EcoCare Advanced" />
                    <KeyValueRow label="Monitoring" value="Connected asset" />
                    <KeyValueRow label="Validation" value="Review before customer use" />
                  </KeyValueList>
                </SectionBlock>
              </DetailPanelBody>
            </DetailPanel>
          }
        />

        {/*
          Why this is compliant:
          - Shows installed base exploration as a master-detail workspace.
          - Keeps asset facts and source limits visible.
          - Avoids generic tables and decorative dashboards.
        */}
      </WorkspaceShell>
    </main>
  );
}
