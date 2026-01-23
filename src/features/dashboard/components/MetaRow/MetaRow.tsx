import styles from "./MetaRow.module.scss";
import type { MetaRowProps } from "./MetaRow.types";

function MetaRow({ label, textValue, customValue }: MetaRowProps) {
  return (
    <dl className={styles.metaRow}>
      <dt className={styles.metaKey}>{label}:</dt>
      {textValue && <dd className={styles.metaTextValue}>{textValue}</dd>}
      {customValue && <dd>{customValue}</dd>}
    </dl>
  );
}

export default MetaRow;
