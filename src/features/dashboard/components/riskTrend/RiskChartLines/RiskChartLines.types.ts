import type { RiskTrendType } from "@features/dashboard/types";

export type RiskChartLineItem = {
  type: RiskTrendType;
  visible: boolean;
};

export type RiskChartLinesProps = {
  data: RiskChartLineItem[];
};
