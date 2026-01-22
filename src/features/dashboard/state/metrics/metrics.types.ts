import type { DataState } from "src/store/store.types";
import type { MetricsResponse } from "../../types";

export type MetricsState = {
  data?: MetricsResponse;
  dataState: DataState;
};
