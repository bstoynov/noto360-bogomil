import { Line } from "recharts";
import styles from "./RiskChartLines.module.scss";
import type { RiskChartLinesProps } from "./RiskChartLines.types";
import { riskTrendTypeColorMap } from "../riskTrend.constants";
import ActiveDot from "../ActiveDot/ActiveDot";

function RiskChartLines({ data }: RiskChartLinesProps) {
  return data.map(({ type, visible }) => {
    const variant = riskTrendTypeColorMap[type];

    return (
      <Line
        key={type}
        type="monotone"
        className={styles[variant]}
        dataKey={type}
        strokeWidth={3}
        dot={false}
        strokeOpacity={visible ? 1 : 0}
        activeDot={
          visible
            ? (props) => <ActiveDot {...props} variant={variant} />
            : false
        }
      />
    );
  });
}

export default RiskChartLines;
