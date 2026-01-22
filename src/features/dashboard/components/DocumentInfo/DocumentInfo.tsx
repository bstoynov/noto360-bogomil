import { Icon } from "@ui";
import type { DocumentInfoProps } from "./DocumentInfo.types";
import styles from "./DocumentInfo.module.scss";

function DocumentInfo({ name, size, type }: DocumentInfoProps) {
  return (
    <div className={styles.info}>
      <Icon name="pdf" className={styles.file} />
      <div className={styles.data}>
        <p className={styles.name}>{name}</p>
        <p className={styles.meta}>
          {type} · {size} MB
        </p>
      </div>

      <div className={styles.icons}>
        <Icon name="eye" className={styles.icon} />
        <Icon name="download" className={styles.icon} />
      </div>
    </div>
  );
}

export default DocumentInfo;
