import type z from "zod";
import type {
  RelevantCaseJurisdictionSchema,
  RelevantCaseOutcomeSchema,
  RelevantCaseItemSchema,
  RelevantCasesResponseSchema,
} from "../schemas";

export type RelevantCaseJurisdiction = z.infer<
  typeof RelevantCaseJurisdictionSchema
>;
export type RelevantCaseOutcome = z.infer<typeof RelevantCaseOutcomeSchema>;
export type RelevantCaseItem = z.infer<typeof RelevantCaseItemSchema>;
export type RelevantCasesResponse = z.infer<typeof RelevantCasesResponseSchema>;
