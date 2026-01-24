import type z from "zod";
import type { ColorVariant } from "@ui";
import type { RiskTrendTypeSchema, RiskTrendResponseSchema } from "../schemas";

export type RiskTrendType = z.infer<typeof RiskTrendTypeSchema>;
export type RiskTrendResponse = z.infer<typeof RiskTrendResponseSchema>;

export type RiskTrendTypeColorVariantMap = Record<RiskTrendType, ColorVariant>;
export type RiskTrendTypeLabelMap = Record<RiskTrendType, string>;
