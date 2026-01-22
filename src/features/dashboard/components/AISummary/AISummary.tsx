import { fetchAiSummary, selectAiSummary } from "@features/dashboard/state";
import { useDispatch, useSelector } from "@store";
import { ActionCard, Hint } from "@ui";
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

  const { clauseType, impact, recommendation } = aiSummary;

  return (
    <ActionCard title="AI Summary">
      <div className={styles.content}>
        <ul>
          <MetaRow label="Risk Zone" customValue={<p>hello</p>} />
          <MetaRow label="Clause Type" textValue={clauseType} />
          <MetaRow label="Impact" textValue={impact} />
        </ul>
        <Hint title="Recommendation" message={recommendation} />
      </div>
    </ActionCard>
  );
}

export default AISummary;
