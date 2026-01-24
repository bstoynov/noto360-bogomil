import { Icon } from "@ui";
import styles from "./MetricItem.module.scss";
import type { MetricItemProps } from "./MetricItem.types";
import { RollingNumber } from "@components";

function MetricItem({ value, delta, name, suffixText, unit }: MetricItemProps) {
  return (
    <li className={styles.card}>
      <span className={styles.name}>{name}</span>

      <div className={styles.footer}>
        <RollingNumber
          value={value}
          delta={delta}
          unit={unit}
          className={styles.value}
        />
        <span
          className={`${styles.update} ${delta >= 0 ? styles.positive : styles.negative}`}
        >
          <Icon name="arrowCircle" className={styles.icon} />
          {delta < 0 ? "-" : "+"}
          {Math.abs(delta)}
          {unit} {suffixText}
        </span>
      </div>
    </li>
  );
}

export default MetricItem;
