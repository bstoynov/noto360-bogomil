import { Icon } from "@ui";
import Search from "../Search/Search";
import styles from "./Header.module.scss";
import { useCurrentRouteName } from "@hooks";

function Header() {
  const routeName = useCurrentRouteName();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {routeName && <h1 className={styles.title}>{routeName}</h1>}
        <Search />
        <div className={styles.icons}>
          <Icon name="plus" className={styles.icon} />
          <Icon name="flow" className={styles.icon} />
          <Icon name="bell" className={styles.icon} />
        </div>
        <img
          className={styles.image}
          src="https://avatars.githubusercontent.com/u/179385380?v=4"
          alt="user"
        />
      </div>
    </header>
  );
}

export default Header;
