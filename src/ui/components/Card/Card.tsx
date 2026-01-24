import type { CardProps } from "./Card.types";
import styles from "./Card.module.scss";

function Card({ title, subtitle, children, actionComponent }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>{title}</h3>
          {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
        </div>
        {actionComponent}
      </div>
      {children}
    </div>
  );
}

export default Card;
