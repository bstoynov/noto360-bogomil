import { Icon } from "@ui";
import styles from "./RelevantCasesTableHeader.module.scss";
import { useSearchParams } from "react-router-dom";
import type { RelevantCasesTableColumnName } from "@features/dashboard/types";
import { relevantCasesHeaderConfig } from "@features/dashboard/constants";
import { SortOrderSchema } from "@features/dashboard/schemas";

function RelevantCasesTableHeader() {
  const [searchParams, setSearchParams] = useSearchParams();

  const onSort = (field: RelevantCasesTableColumnName) => {
    const currentValue = searchParams.get(field);
    const newValue =
      currentValue === SortOrderSchema.enum.asc
        ? SortOrderSchema.enum.desc
        : SortOrderSchema.enum.asc;
    setSearchParams({ [field]: newValue }, { replace: true });
  };

  return (
    <thead>
      <tr className={styles.header}>
        {relevantCasesHeaderConfig.map(({ field, headerName, sortable }) => {
          const Element = sortable ? "button" : "div";

          return (
            <th key={headerName}>
              <Element
                className={styles.cell}
                onClick={sortable ? () => onSort(field) : undefined}
              >
                <div className={styles.text}>{headerName}</div>
                {sortable && <Icon name="sortArrows" className={styles.icon} />}
              </Element>
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

export default RelevantCasesTableHeader;
