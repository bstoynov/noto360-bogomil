import {
  selectPrimaryDocument,
  selectDocumentsIsLoading,
} from "@features/dashboard/state";
import { useSelector } from "@store";
import { Card, Icon, Shimmer } from "@ui";
import MetaRow from "../MetaRow/MetaRow";
import DocumentInfo from "../DocumentInfo/DocumentInfo";
import styles from "./DocumentStatus.module.scss";
import DocumentReviewProgress from "../DocumentReviewProgress/DocumentReviewProgress";
import { formatTimestamp } from "@utils";

function DocumentStatus() {
  const document = useSelector(selectPrimaryDocument);
  const isLoading = useSelector(selectDocumentsIsLoading);

  if (isLoading) {
    return <Shimmer className={styles.shimmer} />;
  } else if (!document) {
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
    <Card
      title="Document Status"
      actionComponent={<Icon name="dotsHorizontal" className={styles.dots} />}
    >
      <div>
        <DocumentInfo name={name} size={size} format={format} />
        <div>
          <MetaRow
            label="Analyzed"
            textValue={formatTimestamp(analyzedTimestamp)}
          />
          <MetaRow
            label="Last Edited"
            textValue={`${lastEditAuthorName}, ${lastEditAuthorTitle}`}
          />
        </div>
        <DocumentReviewProgress reviewProgress={reviewProgress} />
        <div className={styles.stage}>Stage: {stage}</div>
      </div>
    </Card>
  );
}

export default DocumentStatus;
