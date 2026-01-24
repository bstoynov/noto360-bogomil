import {
  fetchAiSummary,
  selectAiSummary,
  selectAiSummaryIsLoading,
} from "@features/dashboard/state";
import { useDispatch, useSelector } from "@store";
import { Card, Button, Chip, Hint, Icon, Shimmer } from "@ui";
import { useEffect } from "react";
import MetaRow from "../MetaRow/MetaRow";
import styles from "./AISummary.module.scss";

function AISummary() {
  const dispatch = useDispatch();
  const aiSummary = useSelector(selectAiSummary);
  const isLoading = useSelector(selectAiSummaryIsLoading);

  useEffect(() => {
    dispatch(fetchAiSummary());
  }, [dispatch]);

  if (isLoading) {
    return <Shimmer height={314} />;
  } else if (!aiSummary) {
    return null;
  }

  const {
    clauseType,
    impact,
    recommendation,
    hasSuggestedRewrite,
    riskSeverity,
    riskScore,
  } = aiSummary;

  return (
    <Card
      title="AI Summary"
      actionComponent={<Icon name="dotsHorizontal" className={styles.dots} />}
    >
      <div className={styles.content}>
        <div>
          <MetaRow
            label="Risk Zone"
            customValue={
              <Chip
                variant="Ruby"
                text={`${riskSeverity} ${riskScore}`}
                iconName="warning"
              />
            }
          />
          <MetaRow label="Clause Type" textValue={clauseType} />
          <MetaRow label="Impact" textValue={impact} />
        </div>
        <Hint title="Recommendation" message={recommendation} />
        {hasSuggestedRewrite && (
          <Button variant="primary">See Suggested Rewrite</Button>
        )}
      </div>
    </Card>
  );
}

export default AISummary;
