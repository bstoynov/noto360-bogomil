import { useSelector } from "@store";
import MetricItem from "../MetricItem/MetricItem";
import styles from "./MetricList.module.scss";
import { selectMetrics } from "@features/dashboard/state";
import { metricItemMetaDataMap } from "../MetricItem/MetricItem.constants";

function MetricList() {
  const metrics = useSelector(selectMetrics);

  // TODO: handle loading skeleton
  if (!metrics) {
    return null;
  }

  return (
    <ul className={styles.list}>
      {metrics.map((m) => (
        <MetricItem key={m.type} {...m} {...metricItemMetaDataMap[m.type]} />
      ))}
    </ul>
  );
}

export default MetricList;
