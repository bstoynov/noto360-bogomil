import RelevantCasesTableCellText from "../RelevantCasesTableCellText/RelevantCasesTableCellText";
import type { TableCellRenderMap } from "./RelevantCasesTable.types";
import RelevantCasesTableOutcome from "../RelevantCasesTableOutcome/RelevantCasesTableOutcome";
import { relevantCasesJurisdictionEmojiMap } from "../RelevantCasesTableContent/RelevantCasesTableContent.constants";

export const tableCellRenderMap: TableCellRenderMap = {
  name: (row) => <RelevantCasesTableCellText text={row.name} />,
  jurisdiction: (row) => (
    <RelevantCasesTableCellText
      text={`${relevantCasesJurisdictionEmojiMap[row.jurisdiction]} ${row.jurisdiction}`}
    />
  ),
  year: (row) => <RelevantCasesTableCellText text={String(row.year)} />,
  relevance: (row) => (
    <RelevantCasesTableCellText text={`${row.relevance} %`} />
  ),
  clauseMatch: (row) => (
    <RelevantCasesTableCellText text={row.clauseMatch || "-"} />
  ),
  outcome: (row) => <RelevantCasesTableOutcome outcome={row.outcome} />,
};
