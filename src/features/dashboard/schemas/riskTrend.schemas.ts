import z from "zod";

export const RiskTrendTypeSchema = z.enum([
  "DocumentsAnalyzed",
  "RiskExposure",
]);

export const RiskTrendResponseSchema = z.object({
  yStart: z.number(),
  yEnd: z.number(),
  data: z.record(RiskTrendTypeSchema, z.array(z.number())),
  dataSize: z.number(),
});
