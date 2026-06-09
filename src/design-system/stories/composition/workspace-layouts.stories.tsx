import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Badge,
  Button,
  Card,
  DetailPanel,
  DetailPanelBody,
  DetailPanelFooter,
  DetailPanelHeader,
  DetailPanelTabs,
  FilterBar,
  MasterDetailLayout,
  SectionBlock,
  SectionStack,
  StickyActionBar,
  WorkspaceShell,
} from "../../index";

const meta = {
  title: "Design System/Composition/Workspace Layouts",
  component: MasterDetailLayout,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MasterDetailLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

const storyArgs = {
  list: null,
  detail: null,
};

const assetRows = [
  {
    name: "SM6 Bus Coupler",
    site: "Lyon DC",
    status: "Critical",
    freshness: "Updated 18h ago",
  },
  {
    name: "Galaxy VX UPS",
    site: "Lyon DC",
    status: "Review needed",
    freshness: "Updated 2d ago",
  },
  {
    name: "LV Switchboard A2",
    site: "Grenoble Plant",
    status: "Live monitored",
    freshness: "Updated 3h ago",
  },
];

export const AssetReviewWorkspace: Story = {
  args: storyArgs,
  render: () => (
    <WorkspaceShell
      header={
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-medium text-(--ec-color-primary)">
              Asset intelligence review
            </p>
            <h1 className="mt-1 text-2xl font-semibold text-(--ec-color-text-primary)">
              Installed base workspace
            </h1>
            <p className="mt-2 max-w-3xl text-sm text-(--ec-color-text-secondary)">
              Review asset facts, source scope and recommendation readiness before
              customer communication.
            </p>
          </div>
          <Button size="sm">Create action</Button>
        </div>
      }
      controls={
        <FilterBar
          title="Asset queue"
          description="Filter by site, status or review readiness."
          resultCount="3 assets shown · source scope: connected and service-covered assets"
          filters={
            <>
              <Badge tone="primary">EcoCare Advanced</Badge>
              <Badge tone="warning">Review needed</Badge>
              <Badge tone="neutral">Lyon DC</Badge>
            </>
          }
          actions={
            <Button variant="secondary" size="sm">
              Open filters
            </Button>
          }
        />
      }
    >
      <MasterDetailLayout
        listLabel="Asset list"
        detailLabel="Selected asset detail"
        detailWidth="lg"
        list={
          <Card title="Assets" description="Select an item to review evidence and actions.">
            <div className="divide-y divide-(--ec-color-border)">
              {assetRows.map((asset) => (
                <button
                  key={asset.name}
                  type="button"
                  className="grid w-full gap-2 px-1 py-3 text-left md:grid-cols-[minmax(0,1fr)_8rem_8rem]"
                >
                  <span>
                    <span className="block text-sm font-medium text-(--ec-color-text-primary)">
                      {asset.name}
                    </span>
                    <span className="block text-xs text-(--ec-color-text-muted)">
                      {asset.site}
                    </span>
                  </span>
                  <span className="text-sm text-(--ec-color-text-secondary)">
                    {asset.status}
                  </span>
                  <span className="text-xs text-(--ec-color-text-muted)">
                    {asset.freshness}
                  </span>
                </button>
              ))}
            </div>
          </Card>
        }
        detail={
          <DetailPanel>
            <DetailPanelHeader
              title="SM6 Bus Coupler"
              description="Selected asset detail. Facts and source context appear before interpretation."
              meta={
                <div className="flex flex-wrap gap-2">
                  <Badge tone="danger">Critical</Badge>
                  <Badge tone="warning">Source strength: partial</Badge>
                </div>
              }
              actions={
                <Button variant="ghost" size="sm">
                  Close
                </Button>
              }
            />
            <DetailPanelTabs
              tabs={[
                { id: "overview", label: "Overview", active: true },
                { id: "health", label: "Health" },
                { id: "intelligence", label: "Intelligence" },
                { id: "history", label: "History", count: 4 },
                { id: "documents", label: "Documents", count: 3 },
              ]}
            />
            <DetailPanelBody>
              <SectionStack>
                <SectionBlock
                  title="Observed facts"
                  description="Visible facts and source limits before interpretation."
                >
                  <dl className="grid gap-3 text-sm md:grid-cols-2">
                    <div>
                      <dt className="text-xs text-(--ec-color-text-muted)">Site</dt>
                      <dd className="font-medium text-(--ec-color-text-primary)">
                        Lyon DC
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-(--ec-color-text-muted)">Coverage</dt>
                      <dd className="font-medium text-(--ec-color-text-primary)">
                        Connected assets only
                      </dd>
                    </div>
                  </dl>
                </SectionBlock>
                <SectionBlock title="Review note">
                  <p className="text-sm text-(--ec-color-text-secondary)">
                    Intelligence interpretation is not customer-ready until expert
                    validation is complete.
                  </p>
                </SectionBlock>
              </SectionStack>
            </DetailPanelBody>
            <DetailPanelFooter>
              <StickyActionBar
                context="Next action requires service expert validation."
                secondaryActions={
                  <Button variant="secondary" size="sm">
                    Add note
                  </Button>
                }
                primaryAction={<Button size="sm">Assign validation</Button>}
              />
            </DetailPanelFooter>
          </DetailPanel>
        }
      />
    </WorkspaceShell>
  ),
};

export const EmptyDetailState: Story = {
  args: storyArgs,
  render: () => (
    <WorkspaceShell
      header={
        <div>
          <h1 className="text-2xl font-semibold text-(--ec-color-text-primary)">
            Recommendation queue
          </h1>
          <p className="mt-2 text-sm text-(--ec-color-text-secondary)">
            The detail panel can show a neutral state before an item is selected.
          </p>
        </div>
      }
    >
      <MasterDetailLayout
        detailWidth="md"
        list={<Card title="Queue">Select a recommendation to review.</Card>}
        detail={
          <DetailPanel>
            <DetailPanelBody>
              <p className="text-sm text-(--ec-color-text-secondary)">
                Select an item to inspect evidence, source scope and next action.
              </p>
            </DetailPanelBody>
          </DetailPanel>
        }
      />
    </WorkspaceShell>
  ),
};
