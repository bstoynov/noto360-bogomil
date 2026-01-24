import { Card, Icon } from "@ui";
import { useDispatch } from "@store";
import { useEffect } from "react";
import { fetchRelevantCases } from "@features/dashboard/state";
import RelevantCasesTableHeader from "../RelevantCasesTableHeader/RelevantCasesTableHeader";
import RelevantCasesTableContent from "../RelevantCasesTableContent/RelevantCasesTableContent";
import { useRelevantCasesSorted } from "@features/dashboard/hooks";
import RelevantCasesLastPrecedentUpdate from "../RelevantCasesLastPrecedentUpdate/RelevantCasesLastPrecedentUpdate";

function RelevantCasesTable() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRelevantCases());
  }, [dispatch]);

  const relevantCases = useRelevantCasesSorted();

  // TODO: skeleton
  if (!relevantCases) {
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
