import type { MetricItemMetaDataMap } from "./MetricItem.types";

export const metricItemMetaDataMap: MetricItemMetaDataMap = {
  PagesAnalized: {
    name: "Pages Analized",
    suffixText: "pages",
  },
  RelevantPrecedents: {
    name: "Relevant Precedents",
    suffixText: "cases",
  },
  IdentifiedRisks: {
    name: "Identified Risks",
    suffixText: "this week",
  },
  AIConfidence: {
    name: "AI Confidence",
    unit: "%",
  },
};
