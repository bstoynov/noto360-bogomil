import { fetchAiSummary, selectAiSummary } from "@features/dashboard/state";
import { useDispatch, useSelector } from "@store";
import { ActionCard, Button, Chip, Hint } from "@ui";
import { useEffect } from "react";
import MetaRow from "../MetaRow/MetaRow";
import styles from "./AISummary.module.scss";

function AISummary() {
  const dispatch = useDispatch();
  const aiSummary = useSelector(selectAiSummary);

  useEffect(() => {
    dispatch(fetchAiSummary());
  }, [dispatch]);

  // TODO: handle skeleton
  if (!aiSummary) {
    return null;
  }

  const { clauseType, impact, recommendation, hasSuggestedRewrite, riskSeverity, riskScore } = aiSummary;

  return (
    <ActionCard title="AI Summary">
      <div className={styles.content}>
        <div>
          {/* TODO: change icon to warning */}
          <MetaRow label="Risk Zone" customValue={<Chip variant="warning" text={`${riskSeverity} ${riskScore}`} iconName="lightbulb" />} />
          <MetaRow label="Clause Type" textValue={clauseType} />
          <MetaRow label="Impact" textValue={impact} />
        </div>
        <Hint title="Recommendation" message={recommendation} />
        {hasSuggestedRewrite &&
          <Button variant="primary">See Suggested Rewrite</Button>
        }
      </div>
    </ActionCard>
  );
}

export default AISummary;
