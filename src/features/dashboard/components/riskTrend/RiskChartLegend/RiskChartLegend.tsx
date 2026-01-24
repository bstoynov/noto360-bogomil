import {
  riskTrendTypeColorMap,
  riskTrendTypeLabelMap,
} from "@features/dashboard/constants";
import styles from "./RiskChartLegend.module.scss";
import type { RiskChartLegendProps } from "./RiskChartLegend.types";
import { ChipButton } from "@ui";

function RiskChartLegend({ data, onToggle }: RiskChartLegendProps) {
  return (
    <div className={styles.legend}>
      {data.map(({ type, visible }) => {
        const variant = riskTrendTypeColorMap[type];
        const label = riskTrendTypeLabelMap[type];

        return (
          <ChipButton
            key={type}
            variant={variant}
            text={label}
            onClick={() => onToggle(type)}
            active={visible}
          />
        );
      })}
    </div>
  );
}

export default RiskChartLegend;
