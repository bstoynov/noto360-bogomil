import type { DataState } from "src/store/store.types";
import type { AiSummaryResponse } from "../../types";

export type AiSummaryState = {
  data?: AiSummaryResponse;
  dataState: DataState;
};
