import type { RiskTrendType } from "@features/dashboard/types";

export type RiskChartLegendItem = {
  type: RiskTrendType;
  visible: boolean;
};

export type RiskChartLegendProps = {
  data: RiskChartLegendItem[];
  onToggle: (type: RiskTrendType) => void;
};
