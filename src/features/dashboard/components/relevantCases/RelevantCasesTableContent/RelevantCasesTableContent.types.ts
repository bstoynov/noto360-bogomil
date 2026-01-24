import type {
  RelevantCaseItem,
  RelevantCaseJurisdiction,
} from "@features/dashboard/types";

export type RelevantCasesTableContentProps = {
  data: RelevantCaseItem[];
};

export const RelevantCasesJurisdictionEmojiMap: Record<
  RelevantCaseJurisdiction,
  string
> = {
  EU: "🇪🇺",
  UK: "🇬🇧",
  US: "🇺🇸",
};
