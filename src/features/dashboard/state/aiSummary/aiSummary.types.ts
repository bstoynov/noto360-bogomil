import type { AiSummaryResponseSchema } from "../../schemas";
import type { DataState } from "src/store/store.types";
import type z from "zod";

export type AiSummaryResponse = z.infer<typeof AiSummaryResponseSchema>;

export type AiSummaryState = {
  data?: AiSummaryResponse;
  dataState: DataState;
};
