import { useDispatch, useSelector } from "@store";
import MetricItem from "../MetricItem/MetricItem";
import styles from "./MetricList.module.scss";
import { fetchMetrics, selectMetrics } from "@features/dashboard/state";
import { metricItemMetaDataMap } from "../MetricItem/MetricItem.constants";
import { useEffect } from "react";

function MetricList() {
  const metrics = useSelector(selectMetrics);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMetrics());
  }, [dispatch]);

  // TODO: handle loading skeleton
  if (!metrics) {
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
