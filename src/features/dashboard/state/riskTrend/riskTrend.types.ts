import type { DataState } from "src/store/store.types";
import type { RiskTrendResponse } from "../../types";

export type RiskTrendState = {
  data?: RiskTrendResponse;
  dataState: DataState;
};
