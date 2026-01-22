import z from "zod";

export const AiSummaryRiskSeveritySchema = z.enum(["Low", "Medium", "High"]);

export const AiSummaryResponseSchema = z.object({
  riskSeverity: AiSummaryRiskSeveritySchema,
  riskScore: z.number(),
  clauseType: z.string(),
  impact: z.string(),
  recommendation: z.string(),
  hasSuggestedRewrite: z.boolean(),
});
