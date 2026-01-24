import styles from "./ActiveDot.module.scss";
import type { ActiveDotProps } from "./ActiveDot.types";

function ActiveDot({ cx, cy, variant }: ActiveDotProps) {
  return (
    <circle className={styles[variant]} cx={cx} cy={cy} r={6} strokeWidth={2} />
  );
}

export default ActiveDot;
