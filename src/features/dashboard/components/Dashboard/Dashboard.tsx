import DocumentStatus from "../DocumentStatus/DocumentStatus";
import MetricList from "../MetricList/MetricList";
import styles from "./Dashboard.module.scss";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <DocumentStatus />
      <MetricList />
    </div>
  );
}

export default Dashboard;
