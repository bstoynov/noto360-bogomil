import { Icon } from "@ui";
import styles from "./MetricItem.module.scss";
import type { MetricItemProps } from "./MetricItem.types";

function MetricItem({ value, delta, name, suffixText, unit }: MetricItemProps) {
  return (
    <li className={styles.card}>
      <p className={styles.name}>{name}</p>

      <div className={styles.footer}>
        <p className={styles.value}>
          {value}
          {unit}
        </p>
        <p
          className={`${styles.update} ${delta >= 0 ? styles.positive : styles.negative}`}
        >
          <Icon name="arrowCircle" className={styles.icon} />
          {delta < 0 ? "-" : "+"}
          {Math.abs(delta)}
          {unit} {suffixText}
        </p>
      </div>
    </li>
  );
}

export default MetricItem;
