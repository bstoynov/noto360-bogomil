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
        <div>
          <p
            className={`${styles.update} ${delta >= 0 ? styles.positive : styles.negative}`}
          >
            {delta < 0 ? "-" : "+"}
            {Math.abs(delta)}
            {unit} {suffixText}
          </p>
        </div>
      </div>
    </li>
  );
}

export default MetricItem;
