import type { RelevantCasesTableCellTextProps } from "./RelevantCasesTableCellText.types";
import styles from "./RelevantCasesTableCellText.module.scss";

function RelevantCasesTableCellText({ text }: RelevantCasesTableCellTextProps) {
  return <span className={styles.text}>{text}</span>;
}

export default RelevantCasesTableCellText;
