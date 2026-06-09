import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  AssetQueueRow,
  Button,
  CustomerQueueRow,
  ListContainer,
  RecommendationQueueRow,
  ReviewQueueRow,
  RiskQueueRow,
  SectionHeading,
  SemanticTag,
  Text,
} from "../../index";

const meta = {
  title: "Design System/Components/Queue rows",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const ReviewQueueRows: Story = {
  render: () => (
    <div className="max-w-6xl space-y-6">
      <SectionHeading
        title="Review queue row"
        description="Use ReviewQueueRow as the generic decision-list row when no business-specific row fits."
      />
      <ListContainer>
        <ReviewQueueRow
          eyebrow="Monitoring review"
          title="Main switchboard requires review"
          description="Visibility is partial and source freshness should be checked before customer communication."
          tags={<SemanticTag tone="warning">Partial coverage</SemanticTag>}
          status="Review needed"
          statusTone="warning"
          priority="high"
          sourceStrength="partial"
          metrics={[{ label: "Coverage", value: "68%" }, { label: "Freshness", value: "18h" }]}
          selected
          trailing={<Button size="sm">Open</Button>}
        />
        <ReviewQueueRow
          eyebrow="Proof review"
          title="Customer-ready value proof is incomplete"
          description="Internal activity exists, but customer-ready synthesis is not complete."
          status="Proof gap"
          statusTone="warning"
          priority="medium"
          sourceStrength="needs_review"
          metrics={[{ label: "Actions", value: "4" }, { label: "Owner", value: "CSM" }]}
        />
      </ListContainer>
    </div>
  ),
};

export const BusinessQueueRows: Story = {
  render: () => (
    <div className="max-w-6xl space-y-8">
      <SectionHeading
        title="Business queue rows"
        description="Use business-specific rows to prevent Make from creating local visual wrappers around rows."
      />

      <div className="space-y-6">
        <div className="space-y-3">
          <Text variant="caption" className="font-medium uppercase tracking-[0.08em]">Customer</Text>
          <ListContainer>
            <CustomerQueueRow
              customerName="Northstar Manufacturing"
              plan="EcoCare Advanced"
              description="QBR in 6 days · service visibility needs review"
              riskLabel="Critical monitoring gap"
              riskTone="danger"
              priority="high"
              sourceStrength="partial"
              coverage="54%"
              openActions="4"
              selected
            />
          </ListContainer>
        </div>

        <div className="space-y-3">
          <Text variant="caption" className="font-medium uppercase tracking-[0.08em]">Asset</Text>
          <ListContainer>
            <AssetQueueRow
              assetName="SM6 Bus Coupler"
              site="Lyon DC"
              assetType="Medium voltage"
              description="Selected asset has recent monitoring signals that need expert review."
              statusLabel="Review needed"
              statusTone="warning"
              priority="high"
              sourceStrength="partial"
              health="Warning"
              freshness="18h"
            />
          </ListContainer>
        </div>

        <div className="space-y-3">
          <Text variant="caption" className="font-medium uppercase tracking-[0.08em]">Risk</Text>
          <ListContainer>
            <RiskQueueRow
              riskTitle="Monitoring scope needs review"
              scope="Main production site"
              description="Some known assets are not visible in live monitoring."
              riskLabel="Customer use blocked"
              riskTone="danger"
              priority="high"
              sourceStrength="partial"
              impact="High"
              dueDate="This week"
            />
          </ListContainer>
        </div>

        <div className="space-y-3">
          <Text variant="caption" className="font-medium uppercase tracking-[0.08em]">Recommendation</Text>
          <ListContainer>
            <RecommendationQueueRow
              recommendationTitle="Prepare customer-ready value proof summary"
              scope="Renewal preparation"
              description="Internal proof exists but needs synthesis before customer communication."
              readinessLabel="Needs review"
              readinessTone="warning"
              priority="high"
              sourceStrength="needs_review"
              evidenceCount="3"
              owner="CSM"
            />
          </ListContainer>
        </div>
      </div>
    </div>
  ),
};
