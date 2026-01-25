import { AnimationPlayer } from "@ui";
import styles from "./Construction.module.scss";
import { useCurrentRouteName } from "@hooks";

function Construction() {
  const routeName = useCurrentRouteName();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {routeName || "This Page"} is under construction
      </h2>
      <AnimationPlayer name="construction" className={styles.animation} />
    </div>
  );
}

export default Construction;
