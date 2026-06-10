export type SourceStrength =
  | "unknown"
  | "partial"
  | "single-source"
  | "multi-source"
  | "validated"
  /** @deprecated Use "multi-source" or "validated" when source scope is explicit. */
  | "strong"
  /** @deprecated Use a validation or proof readiness value instead. */
  | "needs_review"
  /** @deprecated Use a proof readiness value instead. */
  | "internal"
  /** @deprecated Use "validated" for source strength and customer readiness separately. */
  | "customer_ready";

export type ValidationStatus =
  | "not-reviewed"
  | "internal-review-needed"
  | "internally-validated"
  | "customer-ready"
  | "blocked";

export type CustomerReadiness =
  | "internal"
  | "needs-review"
  | "customer-ready"
  /** @deprecated Use "needs-review". */
  | "needs_review"
  /** @deprecated Use "customer-ready". */
  | "customer_ready";

export type HumanValidationRequirement =
  | "not-required"
  | "recommended"
  | "required";

export const sourceStrengthLabels: Record<SourceStrength, string> = {
  unknown: "Source: unknown",
  partial: "Source: partial",
  "single-source": "Source: single source",
  "multi-source": "Source: multi-source",
  validated: "Source: validated",
  strong: "Source: strong",
  needs_review: "Source: needs review",
  internal: "Internal proof",
  customer_ready: "Customer-ready",
};

export const validationStatusLabels: Record<ValidationStatus, string> = {
  "not-reviewed": "Not reviewed",
  "internal-review-needed": "Internal review needed",
  "internally-validated": "Internally validated",
  "customer-ready": "Customer-ready",
  blocked: "Blocked",
};

export const customerReadinessLabels: Record<CustomerReadiness, string> = {
  internal: "Internal",
  "needs-review": "Needs review",
  "customer-ready": "Customer-ready",
  needs_review: "Needs review",
  customer_ready: "Customer-ready",
};

export const humanValidationRequirementLabels: Record<HumanValidationRequirement, string> = {
  "not-required": "Human validation not required",
  recommended: "Human validation recommended",
  required: "Human validation required",
};
