import Icon from "../Icon/Icon";
import type { HintProps } from "./Hint.types";
import styles from "./Hint.module.scss";

function Hint({ title, message }: HintProps) {
  return (
    <div className={styles.hint}>
      <div className={styles.header}>
        <Icon name="lightbulb" className={styles.icon} />
        <h4 className={styles.title}>{title}</h4>
      </div>
      <p className={styles.message}>{message}</p>
    </div>
  );
}

export default Hint;
