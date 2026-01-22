import Icon from "../Icon/Icon";
import type { HintProps } from "./Hint.types";
import styles from "./Hint.module.scss";

function Hint({ title, message }: HintProps) {
  return (
    <div className={styles.hint}>
      <div className={styles.header}>
        <Icon name="lightbulb" className={styles.icon} />
        <p className={styles.title}>{title}</p>
      </div>
      <p className={styles.message}>{message}</p>
    </div>
  );
}

export default Hint;
