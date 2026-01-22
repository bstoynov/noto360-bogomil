import {
  fetchDocumentStatus,
  selectDocumentStatus,
} from "@features/dashboard/state";
import { useDispatch, useSelector } from "@store";
import { ActionCard } from "@ui";
import { useEffect } from "react";
import DocumentInfo from "../DocumentInfo/DocumentInfo";
import styles from "./DocumentStatus.module.scss";
import DocumentReviewProgress from "../DocumentReviewProgress/DocumentReviewProgress";

function DocumentStatus() {
  const dispatch = useDispatch();
  const documentStatus = useSelector(selectDocumentStatus);

  useEffect(() => {
    dispatch(fetchDocumentStatus());
  }, [dispatch]);

  // TODO: handle loading skeleton
  if (!documentStatus) {
    return null;
  }

  const {
    name,
    size,
    type,
    analyzedTimestamp,
    lastEditAuthorName,
    lastEditAuthorTitle,
    reviewProgress,
    stage,
  } = documentStatus;

  return (
    <ActionCard title="Document Status">
      <div>
        <DocumentInfo name={name} size={size} type={type} />
        <div className={styles.metaRow}>
          <p className={styles.metaKey}>Analyzed:</p>
          {/* TODO: convert using dayjs */}
          <p className={styles.metaValue}>{analyzedTimestamp}</p>
        </div>

        <div className={styles.metaRow}>
          <p className={styles.metaKey}>Last Edited:</p>
          <p className={styles.metaValue}>
            {lastEditAuthorName}, {lastEditAuthorTitle}
          </p>
        </div>
        <DocumentReviewProgress reviewProgress={reviewProgress} />
        <div className={styles.stage}>Stage: {stage}</div>
      </div>
    </ActionCard>
  );
}

export default DocumentStatus;
