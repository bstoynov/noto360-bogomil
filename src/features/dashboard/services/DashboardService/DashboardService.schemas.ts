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
