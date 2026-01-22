import Icon from "../Icon/Icon";
import type { ActionCardProps } from "./ActionCard.types";
import styles from "./ActionCard.module.scss";

function ActionCard({ title, children }: ActionCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <Icon name="dotsHorizontal" className={styles.dots} />
      </div>
      {children}
    </div>
  );
}

export default ActionCard;
