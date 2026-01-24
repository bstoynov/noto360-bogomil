import { Card, Icon, Shimmer } from "@ui";
import { useDispatch, useSelector } from "@store";
import { useEffect } from "react";
import {
  fetchRelevantCases,
  selectRelevantCasesIsLoading,
} from "@features/dashboard/state";
import RelevantCasesTableHeader from "../RelevantCasesTableHeader/RelevantCasesTableHeader";
import RelevantCasesTableContent from "../RelevantCasesTableContent/RelevantCasesTableContent";
import { useRelevantCasesSorted } from "@features/dashboard/hooks";
import RelevantCasesLastPrecedentUpdate from "../RelevantCasesLastPrecedentUpdate/RelevantCasesLastPrecedentUpdate";

function RelevantCasesTable() {
  const dispatch = useDispatch();
  const relevantCases = useRelevantCasesSorted();
  const isLoading = useSelector(selectRelevantCasesIsLoading);

  useEffect(() => {
    if (!relevantCases) {
      dispatch(fetchRelevantCases());
    }
  }, [dispatch, relevantCases]);

  if (isLoading) {
    return <Shimmer height={394} />;
  } else if (!relevantCases) {
    return null;
  }

  return (
    <Card
      title="Relevant Cases"
      actionComponent={<Icon name="dotsHorizontal" />}
    >
      <table>
        <RelevantCasesTableHeader />
        <RelevantCasesTableContent data={relevantCases} />
      </table>
      <RelevantCasesLastPrecedentUpdate />
    </Card>
  );
}

export default RelevantCasesTable;
