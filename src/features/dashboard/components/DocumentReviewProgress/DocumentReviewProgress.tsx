import styles from "./DocumentReviewProgress.module.scss";
import type { DocumentReviewProgressProps } from "./DocumentReviewProgress.types";
import { motion } from "motion/react";
import { RollingNumber } from "@components";
import { easingMap } from "@constants";

function DocumentReviewProgress({
  reviewProgress,
}: DocumentReviewProgressProps) {
  return (
    <div className={styles.container}>
      <div className={styles.progresGroup}>
        <h4 className={styles.title}>AI Review Progress</h4>
        <RollingNumber
          value={reviewProgress}
          delta={reviewProgress}
          unit="%"
          className={styles.progressText}
          ease="short"
        />
      </div>
      <div className={styles.progressTrack}>
        <motion.div
          className={styles.progressFill}
          initial={{ width: "0%" }}
          animate={{ width: `${reviewProgress}%` }}
          transition={easingMap["short"]}
        />
      </div>
    </div>
  );
}

export default DocumentReviewProgress;
