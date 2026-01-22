import styles from "./MetaRow.module.scss";
import type { MetaRowProps } from "./MetaRow.types";

function MetaRow({ label, textValue, customValue }: MetaRowProps) {
  return (
    <li className={styles.metaRow}>
      <p className={styles.metaKey}>{label}:</p>
      {textValue && <p className={styles.metaTextValue}>{textValue}</p>}
      {customValue}
    </li>
  );
}

export default MetaRow;
