import { useDispatch, useSelector } from "@store";
import MetricItem from "../MetricItem/MetricItem";
import styles from "./MetricList.module.scss";
import {
  fetchMetrics,
  selectMetrics,
  selectMetricsIsLoading,
} from "@features/dashboard/state";
import { metricItemMetaDataMap } from "../MetricItem/MetricItem.constants";
import { useEffect } from "react";
import { Shimmer } from "@ui";
import { MetricTypeSchema } from "@features/dashboard/schemas";

function MetricList() {
  const metrics = useSelector(selectMetrics);
  const isLoading = useSelector(selectMetricsIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMetrics());
  }, [dispatch]);

  if (isLoading) {
    return (
      <ul className={styles.list}>
        {Array.from({ length: MetricTypeSchema.options.length }, (_, i) => (
          <Shimmer key={i} height={112} />
        ))}
      </ul>
    );
  } else if (!metrics) {
    return null;
  }

  return (
    <ul className={styles.list}>
      {metrics.map((item) => (
        <MetricItem
          key={item.type}
          {...item}
          {...metricItemMetaDataMap[item.type]}
        />
      ))}
    </ul>
  );
}

export default MetricList;
