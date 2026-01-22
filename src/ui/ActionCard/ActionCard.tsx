import Icon from "../Icon/Icon";
import type { ActionCardProps } from "./ActionCard.types";
import styles from "./ActionCard.module.scss";

function ActionCard({ title, subtitle, children }: ActionCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>{title}</h3>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
        <Icon name="dotsHorizontal" className={styles.dots} />
      </div>
      {children}
    </div>
  );
}

export default ActionCard;
