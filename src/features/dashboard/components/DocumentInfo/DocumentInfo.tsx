import { Icon } from "@ui";
import type { DocumentInfoProps } from "./DocumentInfo.types";
import styles from "./DocumentInfo.module.scss";
import { documentTypeIconMap } from "./DocumentInfo.constants";

function DocumentInfo({ name, size, format }: DocumentInfoProps) {
  return (
    <div className={styles.info}>
      <Icon name={documentTypeIconMap[format]} className={styles.file} />
      <div className={styles.data}>
        <p className={styles.name}>
          {name}
          {`.${format}`.toLowerCase()}
        </p>
        <p className={styles.meta}>
          {format} · {size} MB
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
