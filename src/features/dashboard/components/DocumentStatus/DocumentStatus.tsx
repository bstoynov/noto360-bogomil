import { selectPrimaryDocument } from "@features/dashboard/state";
import { useSelector } from "@store";
import { ActionCard } from "@ui";
import MetaRow from "../MetaRow/MetaRow";
import DocumentInfo from "../DocumentInfo/DocumentInfo";
import styles from "./DocumentStatus.module.scss";
import DocumentReviewProgress from "../DocumentReviewProgress/DocumentReviewProgress";

function DocumentStatus() {
  const document = useSelector(selectPrimaryDocument);

  // TODO: handle loading skeleton
  if (!document) {
    return null;
  }

  const {
    name,
    size,
    format,
    analyzedTimestamp,
    lastEditAuthorName,
    lastEditAuthorTitle,
    reviewProgress,
    stage,
  } = document;

  return (
    <ActionCard title="Document Status">
      <div>
        <DocumentInfo name={name} size={size} format={format} />
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
