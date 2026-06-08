import type { Meta, StoryObj } from "@storybook/react-vite";

const TypeRow = ({
  label,
  className,
  children,
}: {
  label: string;
  className: string;
  children: string;
}) => (
  <div className="grid gap-4 border-b border-(--ec-color-border) py-5 md:grid-cols-[220px_1fr]">
    <div>
      <p className="font-mono text-xs text-(--ec-color-text-muted)">
        {label}
      </p>
      <p className="mt-1 font-mono text-xs text-(--ec-color-text-muted)">
        {className}
      </p>
    </div>
    <p className={className}>{children}</p>
  </div>
);

const meta = {
  title: "Design System/Foundations/Typography",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Scale: Story = {
  render: () => (
    <div className="max-w-5xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-(--ec-color-text-primary)">
          Typography
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-(--ec-color-text-secondary)">
          Typography is intentionally restrained. The system favors clarity,
          scanability and decision support over expressive decoration.
        </p>
      </div>

      <div className="rounded-(--ec-radius-md) border border-(--ec-color-border) bg-(--ec-color-surface) px-6">
        <TypeRow
          label="Page title"
          className="text-2xl font-semibold tracking-tight text-(--ec-color-text-primary)"
        >
          Customer monitoring
        </TypeRow>

        <TypeRow
          label="Section title"
          className="text-base font-semibold text-(--ec-color-text-primary)"
        >
          Priority alerts
        </TypeRow>

        <TypeRow
          label="Card title"
          className="text-sm font-semibold text-(--ec-color-text-primary)"
        >
          Critical equipment no longer monitored
        </TypeRow>

        <TypeRow
          label="Body text"
          className="text-sm text-(--ec-color-text-secondary)"
        >
          The customer has no visibility on a critical asset since the
          connectivity loss.
        </TypeRow>

        <TypeRow
          label="Metadata"
          className="text-xs text-(--ec-color-text-muted)"
        >
          Main HVAC control unit · Last update 18 hours ago
        </TypeRow>

        <TypeRow
          label="Helper text"
          className="text-xs text-(--ec-color-text-muted)"
        >
          Add useful context for the service team.
        </TypeRow>
      </div>
    </div>
  ),
};

export const UsageExample: Story = {
  render: () => (
    <div className="max-w-3xl rounded-(--ec-radius-md) border border-(--ec-color-border) bg-(--ec-color-surface) p-6">
      <h1 className="text-2xl font-semibold tracking-tight text-(--ec-color-text-primary)">
        Renewal risk review
      </h1>
      <p className="mt-2 text-sm text-(--ec-color-text-secondary)">
        Prepare the renewal discussion with value proof, open risks and
        recommended actions.
      </p>

      <div className="mt-6 space-y-3">
        <h2 className="text-base font-semibold text-(--ec-color-text-primary)">
          Priority alerts
        </h2>
        <div className="rounded-(--ec-radius-sm) border border-(--ec-color-border) bg-(--ec-color-surface-muted) p-4">
          <p className="text-sm font-semibold text-(--ec-color-text-primary)">
            Value proof not ready
          </p>
          <p className="mt-1 text-sm text-(--ec-color-text-secondary)">
            The customer has not received a clear summary of outcomes, closed
            actions and recommendations completed.
          </p>
          <p className="mt-3 text-xs text-(--ec-color-text-muted)">
            Renewal preparation · 62 days before renewal
          </p>
        </div>
      </div>
    </div>
  ),
};