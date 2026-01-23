import type z from "zod";
import type { RiskTrendTypeSchema, RiskTrendResponseSchema } from "../schemas";

export type RiskTrendType = z.infer<typeof RiskTrendTypeSchema>;
export type RiskTrendResponse = z.infer<typeof RiskTrendResponseSchema>;
