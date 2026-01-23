import styles from "./Tooltip.module.scss";
import type { TooltipProps } from "./Tooltip.types";

function Tooltip({ variant, text }: TooltipProps) {
  return (
    <div className={`${styles.tooltip} ${styles[variant]}`}>
      <span className={styles.text}>{text}</span>
    </div>
  );
}

export default Tooltip;
