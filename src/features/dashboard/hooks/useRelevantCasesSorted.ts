import { useSearchParams } from "react-router-dom";
import { useSelector } from "@store";
import { selectRelevantCasesSorted } from "../state";
import { relevantCasesHeaderConfig } from "../constants";
import type { SortOrder } from "../types";

const useRelevantCasesSorted = () => {
  const [searchParams] = useSearchParams();

  const sortableFields = relevantCasesHeaderConfig
    .filter((c) => c.sortable)
    .map((c) => c.field);

  const sortField =
    sortableFields.find((field) => searchParams.has(field)) ?? null;

  const sortOrder = sortField
    ? (searchParams.get(sortField) as SortOrder)
    : "asc";

  const relevantCases = useSelector((state) =>
    selectRelevantCasesSorted(state, sortField, sortOrder),
  );

  return relevantCases;
};

export default useRelevantCasesSorted;
