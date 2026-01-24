import { RiskTrendTypeSchema } from "@features/dashboard/schemas";
import type { RiskTrendResponse } from "@features/dashboard/types";
import { getMonthName } from "@utils";

export const parseLineChartData = (riskTrend: RiskTrendResponse) =>
  Array.from({ length: riskTrend.dataSize }, (_, i) => ({
    month: getMonthName(i),
    ...Object.fromEntries(
      RiskTrendTypeSchema.options.map((type) => [
        type,
        riskTrend.data[type][i],
      ]),
    ),
  }));
