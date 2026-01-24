import { RelevantCaseItemSchema } from "@features/dashboard/schemas";
import { tableCellRenderMap } from "../RelevantCasesTable/RelevantCasesTable.utils";
import type { RelevantCasesTableContentProps } from "./RelevantCasesTableContent.types";
import styles from "./RelevantCasesTableContent.module.scss";

function RelevantCasesTableContent({ data }: RelevantCasesTableContentProps) {
  return (
    <tbody>
      {data.map((row) => {
        const fields = RelevantCaseItemSchema.keyof().options;
        return (
          <tr key={row.name} className={styles.row}>
            {fields.map((field) => {
              const renderCell = tableCellRenderMap[field];
              if (renderCell) {
                return <td key={field}>{renderCell(row)}</td>;
              }
            })}
          </tr>
        );
      })}
    </tbody>
  );
}

export default RelevantCasesTableContent;
