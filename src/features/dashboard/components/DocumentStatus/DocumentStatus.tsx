import {
  fetchDocumentStatus,
  selectDocumentStatus,
} from "@features/dashboard/state";
import { useDispatch, useSelector } from "@store";
import { ActionCard } from "@ui";
import MetaRow from "../MetaRow/MetaRow";
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
        {/* TODO: convert using dayjs */}
        <ul>
          <MetaRow label="Analyzed" textValue={analyzedTimestamp} />
          <MetaRow
            label="Last Edited"
            textValue={`${lastEditAuthorName}, ${lastEditAuthorTitle}`}
          />
        </ul>
        <DocumentReviewProgress reviewProgress={reviewProgress} />
        <div className={styles.stage}>Stage: {stage}</div>
      </div>
    </ActionCard>
  );
}

export default DocumentStatus;
