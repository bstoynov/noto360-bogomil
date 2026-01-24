import type { ActionCardProps } from "./ActionCard.types";
import styles from "./ActionCard.module.scss";
import Icon from "../Icon/Icon";

function ActionCard({ title, subtitle, children }: ActionCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>{title}</h3>
          {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
        </div>
        <Icon name="dotsHorizontal" className={styles.dots} />
      </div>
      {children}
    </div>
  );
}

export default ActionCard;
