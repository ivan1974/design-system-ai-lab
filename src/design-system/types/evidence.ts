export type ProofReadiness =
  | "not-available"
  | "expected-only"
  | "internal-proof"
  | "customer-ready-proof";

export type EvidenceSourceType =
  | "source-system"
  | "expert-review"
  | "customer-input"
  | "ai-generated"
  | "unknown";

export const proofReadinessLabels: Record<ProofReadiness, string> = {
  "not-available": "Proof not available",
  "expected-only": "Expected only",
  "internal-proof": "Internal proof",
  "customer-ready-proof": "Customer-ready proof",
};

export const evidenceSourceTypeLabels: Record<EvidenceSourceType, string> = {
  "source-system": "Source system",
  "expert-review": "Expert review",
  "customer-input": "Customer input",
  "ai-generated": "AI-generated interpretation",
  unknown: "Unknown source",
};
