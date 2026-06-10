import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  ActionRow,
  AlertCard,
  AssetIntelligenceSummary,
  Button,
  EvidenceRow,
  FilterBar,
  ListContainer,
  MasterDetailLayout,
  PageHeading,
  RecommendationCard,
  RecommendationReviewPanel,
  RenewalRiskSummary,
  ReviewQueueRow,
  SectionBlock,
  SourceStrengthPill,
  StatusPill,
  ValueProofCard,
  WorkspaceDetailPanel,
  WorkspaceShell,
} from "../index";

import "../styles.css";

const meta: Meta = {
  title: "Design System / v0.5.1 / Critical Generation Coverage",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Sprint 2 coverage story proving the critical components promised by the v0.5.1 GenAI documentation hardening workstream.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CriticalDecisionWorkspace: Story = {
  name: "Critical decision workspace",
  render: () => (
    <WorkspaceShell
      header={
        <PageHeading
          eyebrow="v0.5.1 story coverage"
          title="Review renewal risk with evidence and owned actions"
          description="A Storybook proof that the critical generation components can be composed into one decision workspace."
          actions={<Button size="sm">Create action</Button>}
        />
      }
      controls={
        <FilterBar
          title="Review scope"
          description="Filter by account, renewal window and validation status before reviewing recommendations."
          resultCount="3 customers need review"
          actions={<Button variant="ghost" size="sm">Reset filters</Button>}
        />
      }
    >
      <MasterDetailLayout
        detailOpen
        detailMode="inline"
        detailWidth="lg"
        listLabel="Renewal review queue"
        detailLabel="Selected renewal detail"
        list={
          <SectionBlock
            title="Renewal queue"
            description="Repeated objects use ListContainer with approved row components instead of card stacks."
          >
            <ListContainer>
              <ReviewQueueRow
                selected
                interactive
                title="Northwind Manufacturing"
                description="Advanced Plus renewal due in 45 days with incomplete proof readiness."
                eyebrow="Critical account"
                status="Needs validation"
                statusTone="warning"
                priority="critical"
                sourceStrength="multi-source"
                metrics={[
                  { label: "Renewal", value: "45d" },
                  { label: "Actions", value: "3" },
                ]}
                trailing={<SourceStrengthPill strength="multi-source" />}
              />
              <ReviewQueueRow
                interactive
                title="City Hospital Campus"
                description="Service risk review required before QBR preparation."
                eyebrow="Healthcare"
                status="Internal review"
                statusTone="info"
                priority="high"
                sourceStrength="partial"
                metrics={[{ label: "Renewal", value: "72d" }]}
              />
            </ListContainer>
          </SectionBlock>
        }
        detail={
          <WorkspaceDetailPanel
            open
            mode="inline"
            size="xl"
            title="Northwind Manufacturing"
            description="Selected account detail, evidence, recommendation and follow-through actions."
            meta={<StatusPill tone="warning">Needs validation</StatusPill>}
            footer={<ActionRow title="Schedule validation review" owner="CSM" dueDate="2026-06-18" priority="critical" status="todo" />}
          >
            <div className="space-y-6">
              <RenewalRiskSummary
                customerName="Northwind Manufacturing"
                renewalWindow="45 days"
                plan="CompanyName Advanced Plus"
                renewalReadiness="needs-review"
                valueProofStatus="Internal proof only"
                recommendationsReviewed="2 of 5"
                overdueActions="3"
                proofReadiness="internal-proof"
                validationStatus="internal-review-needed"
                sourceContext="CRM renewal data, service actions and QBR notes"
                badges={[{ label: "Renewal risk", tone: "warning" }]}
              />

              <AssetIntelligenceSummary
                assetScope="Main switchboard and UPS group"
                assetContext="Two monitored critical assets with partial visibility on downstream components."
                healthSignals="Temperature drift and delayed battery replacement signal."
                intelligenceInterpretation="Risk requires validation before customer-facing recommendation."
                sourceContext="Connected Services Hub and advisor signal summary"
                sourceScope="Connected assets only"
                sourceStrength="multi-source"
                validationStatus="internal-review-needed"
                readiness="needs-review"
                mode="section"
              />

              <RecommendationReviewPanel
                mode="section"
                reviewScope="Renewal mitigation recommendation"
                reviewStatus="Internal review required"
                sourceContext="Multi-source operational signal"
                validationStatus="internal-review-needed"
                customerReadiness="needs-review"
                proofReadiness="internal-proof"
                humanValidation="required"
                badges={[{ label: "Human validation required", tone: "warning" }]}
                actions={<Button size="sm">Request expert review</Button>}
              >
                <RecommendationCard
                  title="Prioritize battery replacement validation"
                  recommendation="Validate the replacement plan before using it in renewal conversation."
                  rationale="The signal is useful but still depends on internal review and customer context."
                  scope="UPS group"
                  priority="critical"
                  evidenceSummary="Advisor signal, maintenance history and CSH review notes are aligned."
                  source="Advisor + CSH"
                  sourceScope="Connected UPS group"
                  sourceStrength="multi-source"
                  validationStatus="internal-review-needed"
                  readiness="needs-review"
                  proofReadiness="internal-proof"
                  expectedOutcome="Reduced risk of delayed renewal action after validation."
                  action={<Button size="sm">Assign owner</Button>}
                />
              </RecommendationReviewPanel>

              <ValueProofCard
                period="Q2 2026"
                customerObjective="Keep critical electrical infrastructure available during summer peak."
                proofStatus="Internal proof only"
                proofReadiness="internal-proof"
                validationStatus="internal-review-needed"
                sourceContext="Internal service history and advisor signals"
                expectedOutcome="Expected reduction in delayed maintenance risk after validation."
                proofPoints={[
                  { label: "Closed preventive actions", value: "8" },
                  { label: "Validated recommendations", value: "2" },
                  { label: "Pending customer-ready proof", value: "3" },
                ]}
                mode="section"
              />

              <AlertCard
                severity="critical"
                title="Battery replacement validation is overdue"
                scope="UPS group"
                description="The signal is actionable, but customer-facing use still requires expert validation."
                evidenceSummary="Advisor signal and service notes are aligned, but not yet customer-ready proof."
                source="Advisor + service history"
                sourceScope="Connected UPS group"
                sourceStrength="multi-source"
                validationStatus="internal-review-needed"
                recommendation="Assign an expert validation owner before the QBR."
                action={<Button size="sm" variant="danger">Escalate</Button>}
              />

              <SectionBlock title="Evidence trail">
                <ListContainer>
                  <EvidenceRow
                    label="Advisor signal"
                    description="Battery degradation signal detected on connected UPS group."
                    source="Advisor"
                    sourceScope="Connected assets"
                    sourceStrength="multi-source"
                    freshness="Updated today"
                    validationStatus="internal-review-needed"
                    meta={<SourceStrengthPill strength="multi-source" />}
                  />
                  <EvidenceRow
                    label="Service notes"
                    description="Technician note confirms battery replacement should be reviewed."
                    source="Field service"
                    sourceScope="Last preventive visit"
                    sourceStrength="single-source"
                    freshness="Updated 4 days ago"
                    validationStatus="not-reviewed"
                    meta={<SourceStrengthPill strength="single-source" />}
                  />
                </ListContainer>
              </SectionBlock>

              <SectionBlock title="Owned follow-through actions">
                <ListContainer>
                  <ActionRow
                    title="Validate recommendation with power expert"
                    owner="CSM"
                    dueDate="2026-06-18"
                    priority="critical"
                    status="todo"
                    context="Required before customer-facing QBR use."
                    action={<Button size="sm">Open task</Button>}
                  />
                  <ActionRow
                    title="Prepare renewal proof pack"
                    owner="Service sales"
                    dueDate="2026-06-24"
                    priority="high"
                    status="in-progress"
                    context="Use only internal-proof items until validation is complete."
                  />
                </ListContainer>
              </SectionBlock>
            </div>
          </WorkspaceDetailPanel>
        }
      />
    </WorkspaceShell>
  ),
};
