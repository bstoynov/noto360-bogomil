import RiskTrendChart from "../riskTrend/RiskTrendChart/RiskTrendChart";
import MetricList from "../MetricList/MetricList";
import styles from "./Dashboard.module.scss";
import DocumentStatus from "../DocumentStatus/DocumentStatus";
import AISummary from "../AISummary/AISummary";
import Documents from "../Documents/Documents";
import RelevantCasesTable from "../relevantCases/RelevantCasesTable/RelevantCasesTable";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.left}>
        <DocumentStatus />
        <AISummary />
        <Documents />
      </div>
      <div className={styles.right}>
        <MetricList />
        <RiskTrendChart />
        <RelevantCasesTable />
      </div>
    </div>
  );
}

export default Dashboard;
