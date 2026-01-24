import type { RelevantCaseHeaderConfigItem } from "../types";

export const relevantCasesHeaderConfig: RelevantCaseHeaderConfigItem[] = [
  {
    field: "name",
    headerName: "Case Name",
    sortable: true,
  },
  {
    field: "jurisdiction",
    headerName: "Jurisdiction",
    sortable: false,
  },
  {
    field: "year",
    headerName: "Year",
    sortable: true,
  },
  {
    field: "relevance",
    headerName: "Relevance",
    sortable: true,
  },
  {
    field: "clauseMatch",
    headerName: "Clause Match",
    sortable: false,
  },
  {
    field: "outcome",
    headerName: "Outcome",
    sortable: false,
  },
];
