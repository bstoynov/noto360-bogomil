import { Icon } from "@ui";
import styles from "./Search.module.scss";

function Search() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconWrapper}>
        <Icon name="search" className={styles.icon} />
      </div>
      <input type="search" placeholder="Search..." className={styles.input} />
    </div>
  );
}

export default Search;
