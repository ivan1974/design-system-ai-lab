export type RecommendationPriority = "low" | "medium" | "high" | "critical";

export type RecommendationReadiness =
  | "internal"
  | "needs-review"
  | "customer-ready"
  /** @deprecated Use "needs-review". */
  | "needs_review"
  /** @deprecated Use "customer-ready". */
  | "customer_ready";

export type RiskLevel = "critical" | "warning" | "info";

export const recommendationReadinessLabels: Record<RecommendationReadiness, string> = {
  internal: "Internal",
  "needs-review": "Needs review",
  "customer-ready": "Customer-ready",
  needs_review: "Needs review",
  customer_ready: "Customer-ready",
};

export const riskLevelLabels: Record<RiskLevel, string> = {
  critical: "Critical",
  warning: "Warning",
  info: "Information",
};
