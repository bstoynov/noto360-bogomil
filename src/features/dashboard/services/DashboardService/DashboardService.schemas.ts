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
