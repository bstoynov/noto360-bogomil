import { MetricsResponseSchema } from "@features/dashboard/services";
import type { DataState } from "src/store/store.types";
import type z from "zod";

export type MetricsResponse = z.infer<typeof MetricsResponseSchema>;

export type MetricsState = {
  data?: MetricsResponse;
  dataState: DataState;
};
