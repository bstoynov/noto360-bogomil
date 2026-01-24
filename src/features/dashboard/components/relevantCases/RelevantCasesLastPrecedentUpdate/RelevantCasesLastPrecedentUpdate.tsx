import { useSelector } from "@store";
import { selectRelevantCasesLastPrecedentUpdate } from "@features/dashboard/state";
import { formatTimestamp } from "@utils";
import styles from "./RelevantCasesLastPrecedentUpdate.module.scss";

function RelevantCasesLastPrecedentUpdate() {
  const lastPrecedentUpdate = useSelector(
    selectRelevantCasesLastPrecedentUpdate,
  );

  if (!lastPrecedentUpdate) {
    return null;
  }

  return (
    <div className={styles.text}>
      Last precedent update: {formatTimestamp(lastPrecedentUpdate)}
    </div>
  );
}

export default RelevantCasesLastPrecedentUpdate;
