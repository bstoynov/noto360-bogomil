import { AnimationPlayer } from "@ui";
import styles from "./Construction.module.scss";
import { useCurrentRouteName } from "@hooks";

function Construction() {
  const routeName = useCurrentRouteName();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <span>{routeName}</span>
        <span className={styles.suffix}>is under construction</span>
      </h2>
      <AnimationPlayer name="construction" className={styles.animation} />
    </div>
  );
}

export default Construction;
