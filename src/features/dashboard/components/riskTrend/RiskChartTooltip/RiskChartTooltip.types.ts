import type { RiskTrendType } from "@features/dashboard/types";

export type RiskChartTooltipSuffixMap = Partial<Record<RiskTrendType, string>>;

export type RiskChartTooltipItem = {
  type: RiskTrendType;
  visible: boolean;
};

export type RiskChartTooltipProps = {
  data: RiskChartTooltipItem[];
};
