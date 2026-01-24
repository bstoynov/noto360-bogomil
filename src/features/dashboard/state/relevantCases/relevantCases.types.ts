import type { DataState } from "src/store/store.types";
import type { RelevantCasesResponse } from "../../types";

export type RelevantCasesState = {
  data?: RelevantCasesResponse;
  dataState: DataState;
};
