import { Tooltip as RechartsTooltip } from "recharts";
import { Tooltip } from "@ui";
import styles from "./RiskChartTooltip.module.scss";
import type { RiskChartTooltipProps } from "./RiskChartTooltip.types";
import { riskChartTooltipSuffixMap } from "./RiskChartTooltip.constants";
import {
  riskTrendTypeColorMap,
  riskTrendTypeLabelMap,
} from "@features/dashboard/constants";

function RiskChartTooltip({ data }: RiskChartTooltipProps) {
  return (
    <RechartsTooltip
      content={({ payload }) => {
        if (!payload.length) return null;

        const tooltips = data
          .filter((item) => item.visible)
          .map((item) => {
            const payloadItem = payload.find((p) => p.dataKey === item.type);

            return {
              ...item,
              label: riskTrendTypeLabelMap[item.type],
              suffix: riskChartTooltipSuffixMap[item.type],
              variant: riskTrendTypeColorMap[item.type],
              value: payloadItem?.value,
            };
          });

        return (
          <span className={styles.tooltip}>
            {tooltips.map(({ label, suffix, value, variant }) => (
              <Tooltip
                key={variant}
                variant={variant}
                text={`${label}: ${value}${suffix || ""}`}
              />
            ))}
          </span>
        );
      }}
    />
  );
}

export default RiskChartTooltip;
