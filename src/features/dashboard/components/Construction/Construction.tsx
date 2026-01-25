import { AnimationPlayer } from "@ui";
import styles from "./Construction.module.scss";

function Construction() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>This page is under construction</h1>
      <AnimationPlayer name="construction" className={styles.animation} />
    </div>
  );
}

export default Construction;
