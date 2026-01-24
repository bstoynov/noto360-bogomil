import type z from "zod";
import type {
  RelevantCaseJurisdictionSchema,
  RelevantCaseOutcomeSchema,
  RelevantCaseItemSchema,
  RelevantCasesResponseSchema,
  SortOrderSchema,
} from "../schemas";

export type RelevantCaseJurisdiction = z.infer<
  typeof RelevantCaseJurisdictionSchema
>;
export type RelevantCaseOutcome = z.infer<typeof RelevantCaseOutcomeSchema>;
export type RelevantCaseItem = z.infer<typeof RelevantCaseItemSchema>;
export type RelevantCasesResponse = z.infer<typeof RelevantCasesResponseSchema>;
export type SortOrder = z.infer<typeof SortOrderSchema>;

export type RelevantCasesTableColumnName = keyof RelevantCaseItem;

export type RelevantCaseHeaderConfigItem = {
  field: RelevantCasesTableColumnName;
  headerName: string;
  sortable: boolean;
};
