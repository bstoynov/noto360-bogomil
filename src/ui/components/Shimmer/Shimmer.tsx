import type { ShimmerProps } from "./Shimmer.types";
import styles from "./Shimmer.module.scss";

function Shimmer({ width, height, className }: ShimmerProps) {
  return (
    <div
      className={`${styles.shimmer} ${className}`}
      style={{
        width: width ?? "100%",
        height,
      }}
    >
      <div className={styles.animation} />
    </div>
  );
}

export default Shimmer;
