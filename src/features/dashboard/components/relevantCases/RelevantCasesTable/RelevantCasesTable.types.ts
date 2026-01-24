import type {
  RelevantCaseItem,
  RelevantCasesTableColumnName,
} from "@features/dashboard/types";

export type TableCellRenderMap = {
  [K in RelevantCasesTableColumnName]: (
    row: RelevantCaseItem,
  ) => React.ReactNode;
};
