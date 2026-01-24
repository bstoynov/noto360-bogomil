import z from "zod";

export const RelevantCaseJurisdictionSchema = z.enum(["UK", "EU", "US"]);
export const RelevantCaseOutcomeSchema = z.enum(["Win", "Settled", "Loss"]);

export const RelevantCaseItemSchema = z.object({
  name: z.string(),
  jurisdiction: RelevantCaseJurisdictionSchema,
  year: z.number(),
  relevance: z.number(),
  clauseMatch: z.string().optional(),
  outcome: RelevantCaseOutcomeSchema,
});

export const RelevantCasesResponseSchema = z.object({
  items: z.array(RelevantCaseItemSchema),
  lastPrecedentUpdate: z.iso.datetime(),
});
