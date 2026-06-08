import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge, Button, Card } from "../../index";

const meta = {
  title: "Design System/Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    className: { control: "text" },
  },
  args: {
    title: "Situation client",
    description: "Résumé synthétique d’un contexte de service.",
    children: (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge tone="primary">Active plan</Badge>
          <Badge tone="warning">Connectivité partielle</Badge>
        </div>

        <p className="text-sm text-(--ec-color-text-secondary)">
          Cette carte regroupe une information cohérente, contextualisée et
          actionnable.
        </p>

        <Button variant="secondary" size="sm">
          Voir le détail
        </Button>
      </div>
    ),
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutHeader: Story = {
  args: {
    title: undefined,
    description: undefined,
    children: (
      <div className="space-y-3">
        <Badge tone="success">Actions completed</Badge>
        <p className="text-sm text-(--ec-color-text-secondary)">
          Card can also be used as a simple visual container when a section
          title is already provided by the surrounding layout.
        </p>
      </div>
    ),
  },
};

export const CustomerContext: Story = {
  args: {
    title: "Customer context",
    description: "Current service situation for Greenfield Industries.",
    className: "w-160",
    children: (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge tone="primary">Advanced plan</Badge>
          <Badge tone="danger">Critical risk</Badge>
          <Badge tone="neutral">Renewal in 62 days</Badge>
        </div>

        <dl className="grid gap-4 md:grid-cols-2">
          <div>
            <dt className="mb-1 text-xs text-(--ec-color-text-muted)">
              Account
            </dt>
            <dd className="text-sm font-medium text-(--ec-color-text-primary)">
              Greenfield Industries
            </dd>
          </div>
          <div>
            <dt className="mb-1 text-xs text-(--ec-color-text-muted)">
              CSM
            </dt>
            <dd className="text-sm font-medium text-(--ec-color-text-primary)">
              Sarah Moreau
            </dd>
          </div>
        </dl>
      </div>
    ),
  },
};

export const WithCustomClassName: Story = {
  args: {
    title: "Custom width card",
    description: "Card supports className for layout composition.",
    className: "w-140",
    children: (
      <p className="text-sm text-(--ec-color-text-secondary)">
        This story documents className support after the forwardRef hardening.
      </p>
    ),
  },
};

export const WithNativeSectionProps: Story = {
  render: () => (
    <Card
      aria-label="Customer service context card"
      data-testid="storybook-card"
      title="Native section props"
      description="Card accepts native section attributes."
      className="w-140"
    >
      <p className="text-sm text-(--ec-color-text-secondary)">
        This is useful for accessibility, testing and Figma Make generated
        screens.
      </p>
    </Card>
  ),
};