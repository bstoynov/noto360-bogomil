import RiskTrendChart from "../riskTrend/RiskTrendChart/RiskTrendChart";
import AISummary from "../AISummary/AISummary";
import Documents from "../Documents/Documents";
import DocumentStatus from "../DocumentStatus/DocumentStatus";
import MetricList from "../MetricList/MetricList";
import styles from "./Dashboard.module.scss";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={`${styles.column} ${styles.left}`}>
        <DocumentStatus />
        <AISummary />
        <Documents />
      </div>
      <div className={`${styles.column} ${styles.right}`}>
        <MetricList />
        <RiskTrendChart />
      </div>
    </div>
  );
}

export default Dashboard;
