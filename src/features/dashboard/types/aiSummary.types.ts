import type z from "zod";
import type {
  AiSummaryRiskSeveritySchema,
  AiSummaryResponseSchema,
} from "../schemas";

export type AiSummaryRiskSeverity = z.infer<typeof AiSummaryRiskSeveritySchema>;
export type AiSummaryResponse = z.infer<typeof AiSummaryResponseSchema>;
