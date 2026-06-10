import type { Meta, StoryObj } from "@storybook/react-vite";
import { MetricCard, MetricGrid } from "../../index";

const meta = {
  title: "Design System/Components/MetricCard",
  component: MetricCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    value: { control: "text" },
    helper: { control: "text" },
    trend: { control: "text" },
    trendTone: {
      control: "select",
      options: ["neutral", "success", "warning", "danger"],
    },
    meta: { control: "text" },
    source: { control: "text" },
    sourceScope: { control: "text" },
    sourceStrength: { control: "text" },
    freshness: { control: "text" },
    validationStatus: { control: "text" },
    className: { control: "text" },
  },
  args: {
    label: "Équipements connectés",
    value: "68%",
    helper: "17 équipements connectés sur 25",
    trend: "+8% ce trimestre",
    trendTone: "success",
  },
} satisfies Meta<typeof MetricCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PositiveTrend: Story = {
  args: {
    label: "Recommandations revues",
    value: "42%",
    helper: "5 recommandations revues sur 12",
    trend: "+12%",
    trendTone: "success",
    className: "w-80",
  },
};

export const NegativeTrend: Story = {
  args: {
    label: "Couverture monitoring",
    value: "68%",
    helper: "17 équipements surveillés sur 25",
    trend: "-12% ce mois-ci",
    trendTone: "warning",
    sourceScope: "Actifs surveillés CompanyName uniquement",
    sourceStrength: "partielle",
    freshness: "18 heures",
    className: "w-80",
  },
};

export const NeutralTrend: Story = {
  args: {
    label: "Actions clôturées",
    value: "12",
    helper: "Actions clôturées depuis la dernière revue",
    trend: "Stable sur 30 jours",
    trendTone: "neutral",
    className: "w-80",
  },
};

export const PartialSourceStrength: Story = {
  args: {
    label: "Source strength",
    value: "Partielle",
    helper: "La donnée combine télémétrie et inventaire manuel",
    source: "Inventaire manuel + monitoring CompanyName",
    sourceScope: "Actifs surveillés et inventoriés",
    sourceStrength: "partielle",
    freshness: "18 heures",
    validationStatus: "À revoir avant partage client",
    className: "w-80",
  },
};

export const AssetHeavyMetric: Story = {
  args: {
    label: "Équipements connectés",
    value: "68%",
    helper: "17 actifs connectés sur 25",
    meta: "Ne représente pas les actifs non inventoriés",
    sourceScope: "Actifs surveillés CompanyName uniquement",
    sourceStrength: "partielle",
    freshness: "18 heures",
    className: "w-80",
  },
};

export const ValueProofReadiness: Story = {
  args: {
    label: "Préparation preuve de valeur",
    value: "Incomplète",
    helper: "Les preuves internes doivent être consolidées avant le partage client",
    sourceScope: "Actions de service clôturées",
    sourceStrength: "moyenne",
    validationStatus: "Non customer-ready",
    className: "w-80",
  },
};

export const ExpectedOutcomeNotProven: Story = {
  args: {
    label: "Résultat attendu",
    value: "Expected, not proven",
    helper: "Le résultat dépend de la finalisation des actions recommandées",
    validationStatus: "Non prouvé",
    className: "w-80",
  },
};

export const CustomerReadyProofItems: Story = {
  args: {
    label: "Preuves customer-ready",
    value: "3",
    helper: "Éléments validés pour discussion client",
    sourceScope: "QBR des 90 derniers jours",
    sourceStrength: "élevée",
    validationStatus: "Customer-ready",
    className: "w-80",
  },
};

export const CustomerMonitoringMetrics: Story = {
  render: () => (
    <MetricGrid className="w-225">
      <MetricCard
        label="Équipements connectés"
        value="68%"
        helper="17 équipements connectés sur 25"
        trend="-12%"
        trendTone="warning"
        sourceScope="Actifs surveillés CompanyName uniquement"
        sourceStrength="partielle"
      />
      <MetricCard
        label="Alertes ouvertes"
        value="12"
        helper="Dont 3 critiques"
      />
      <MetricCard
        label="Actions en retard"
        value="4"
        helper="Deux actions nécessitent un arbitrage Account owner"
      />
    </MetricGrid>
  ),
};

export const RenewalMetrics: Story = {
  render: () => (
    <MetricGrid columns={2} className="w-160">
      <MetricCard
        label="Préparation renouvellement"
        value="Moyenne"
        helper="La preuve de valeur doit être consolidée"
        validationStatus="Non customer-ready"
      />
      <MetricCard
        label="Recommandations revues"
        value="42%"
        helper="5 recommandations revues sur 12"
        trend="+12%"
        trendTone="success"
      />
    </MetricGrid>
  ),
};

export const WithCustomClassName: Story = {
  args: {
    label: "Alertes critiques",
    value: "2",
    helper: "Les deux nécessitent une communication client cette semaine",
    trend: undefined,
    className: "w-72",
  },
};

export const WithNativeCardProps: Story = {
  render: () => (
    <MetricCard
      aria-label="Indicateur de couverture des équipements connectés"
      data-testid="storybook-metric-card"
      label="Couverture monitoring"
      value="68%"
      helper="17 équipements surveillés sur 25"
      trend="-12% ce mois-ci"
      trendTone="warning"
      sourceScope="Actifs surveillés CompanyName uniquement"
      sourceStrength="partielle"
      freshness="18 heures"
      className="w-80"
    />
  ),
};