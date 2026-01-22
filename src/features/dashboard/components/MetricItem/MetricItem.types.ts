import type { MetricItem } from "@features/dashboard/state/metrics/metrics.types";

export type MetricItemProps = MetricItem & MetricItemMetaData;

export type MetricItemMetaData = {
  name: string;
  unit?: string;
  suffixText?: string;
};

export type MetricItemMetaDataMap = Record<
  MetricItem["type"],
  MetricItemMetaData
>;
