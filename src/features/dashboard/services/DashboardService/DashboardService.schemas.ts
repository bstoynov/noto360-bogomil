import z from "zod";

export const MetricTypeSchema = z.enum([
  "PagesAnalized",
  "RelevantPrecedents",
  "IdentifiedRisks",
  "AIConfidence",
]);

export const MetricItemSchema = z.object({
  type: MetricTypeSchema,
  value: z.number(),
  delta: z.number(),
});

export const MetricsResponseSchema = z.array(MetricItemSchema);
// TODO: Split into multiple files

export const DocumentTypeSchema = z.enum(["PDF"]);

export const DocumentStatusResponseSchema = z.object({
  name: z.string(),
  size: z.number(),
  type: DocumentTypeSchema,
  analyzedTimestamp: z.iso.datetime(),
  lastEditAuthorName: z.string(),
  lastEditAuthorTitle: z.string(),
  reviewProgress: z.number(),
  stage: z.string(),
});

export const AiSummaryRiskSeveritySchema = z.enum(["Low", "Medium", "High"]);

export const AiSummaryResponseSchema = z.object({
  riskSeverity: AiSummaryRiskSeveritySchema,
  riskScore: z.number(),
  clauseType: z.string(),
  impact: z.string(),
  recommendation: z.string(),
  hasSuggestedRewrite: z.boolean(),
});
