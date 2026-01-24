import type { RelevantCaseOutcome } from "@features/dashboard/types";
import type { ColorVariant } from "@ui";

export type OutcomeTypeColorVariantMap = Record<
  RelevantCaseOutcome,
  ColorVariant
>;

export type RelevantCasesTableOutcomeProps = {
  outcome: RelevantCaseOutcome;
};
