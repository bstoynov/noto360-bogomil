import { useEffect, useMemo, useState } from "react";
import { CartesianGrid, LineChart, XAxis, YAxis } from "recharts";
import { Card } from "@ui";
import styles from "./RiskTrendChart.module.scss";
import RiskChartTooltip from "../RiskChartTooltip/RiskChartTooltip";
import { useDispatch, useSelector } from "@store";
import { fetchRiskTrend, selectRiskTrend } from "@features/dashboard/state";
import { parseLineChartData } from "./RiskTrendChart.utils";
import { RiskTrendTypeSchema } from "@features/dashboard/schemas";
import RiskChartLines from "../RiskChartLines/RiskChartLines";
import type { VisibilityMap } from "./RiskTrendChart.types";
import RiskChartLegend from "../RiskChartLegend/RiskChartLegend";

function RiskTrendChart() {
  const dispatch = useDispatch();
  const riskTrend = useSelector(selectRiskTrend);

  useEffect(() => {
    dispatch(fetchRiskTrend());
  }, [dispatch]);

  const chartData = useMemo(
    () => riskTrend && parseLineChartData(riskTrend),
    [riskTrend],
  );

  const [visibilityMap, setVisibilityMap] = useState<VisibilityMap>({
    RiskExposure: true,
    DocumentsAnalyzed: true,
  });

  const linesData = RiskTrendTypeSchema.options.map((type) => ({
    type,
    visible: visibilityMap[type],
  }));

  // TODO: handle loading skeleton
  if (!riskTrend) {
    return null;
  }

  return (
    <Card
      title="AI Risk Trend"
      actionComponent={
        <RiskChartLegend
          data={linesData}
          onToggle={(type) => {
            setVisibilityMap((prev) => ({
              ...prev,
              [type]: !prev[type],
            }));
          }}
        />
      }
    >
      <div className={styles.chart}>
        <LineChart
          className={styles.chart}
          responsive
          width="100%"
          height={250}
          data={chartData}
        >
          <XAxis dy={12} dataKey="month" axisLine={false} tickLine={false} />
          <YAxis
            dx={-8}
            domain={[riskTrend.yStart, riskTrend.yEnd]}
            axisLine={false}
            tickLine={false}
          />
          <CartesianGrid className={styles.cartesianGrid} vertical={false} />
          <RiskChartLines data={linesData} />
          <RiskChartTooltip data={linesData} />
        </LineChart>
      </div>
    </Card>
  );
}

export default RiskTrendChart;
