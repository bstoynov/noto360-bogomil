import { Chip } from "@ui";
import type { RelevantCasesTableOutcomeProps } from "./RelevantCasesTableOutcome.types";
import { outcomeTypeColorVariantMap } from "./RelevantCasesTableOutcome.constants";
import styles from "./RelevantCasesTableOutcome.module.scss";

function RelevantCasesTableOutcome({
  outcome,
}: RelevantCasesTableOutcomeProps) {
  return (
    <div className={styles.outcome}>
      <Chip
        variant={outcomeTypeColorVariantMap[outcome]}
        text={outcome}
        noBackground
      />
    </div>
  );
}

export default RelevantCasesTableOutcome;
