import type z from "zod";
import type {
  MetricTypeSchema,
  MetricItemSchema,
  MetricsResponseSchema,
} from "../schemas";

export type MetricType = z.infer<typeof MetricTypeSchema>;
export type MetricItem = z.infer<typeof MetricItemSchema>;
export type MetricsResponse = z.infer<typeof MetricsResponseSchema>;
