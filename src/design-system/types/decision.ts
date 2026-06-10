export type RecommendationPriority = "low" | "medium" | "high" | "critical";

export type RecommendationReadiness =
  | "internal"
  | "needs-review"
  | "customer-ready";

export type RiskLevel = "critical" | "warning" | "info";

export const recommendationReadinessLabels: Record<RecommendationReadiness, string> = {
  internal: "Internal",
  "needs-review": "Needs review",
  "customer-ready": "Customer-ready",
};

export const riskLevelLabels: Record<RiskLevel, string> = {
  critical: "Critical",
  warning: "Warning",
  info: "Information",
};
