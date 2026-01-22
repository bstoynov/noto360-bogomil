import styles from "./DocumentReviewProgress.module.scss";
import type { DocumentReviewProgressProps } from "./DocumentReviewProgress.types";

function DocumentReviewProgress({
  reviewProgress,
}: DocumentReviewProgressProps) {
  return (
    <div className={styles.container}>
      <div className={styles.progresGroup}>
        <p className={styles.title}>AI Review Progress</p>
        <p className={styles.progressText}>{reviewProgress}% complete</p>
      </div>
      <div className={styles.progressTrack}>
        <div
          className={styles.progressFill}
          style={{ width: `${reviewProgress}%` }}
        />
      </div>
    </div>
  );
}

export default DocumentReviewProgress;
