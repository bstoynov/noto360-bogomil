import { Icon } from "@ui";
import Search from "../Search/Search";
import styles from "./Header.module.scss";
import { useCurrentRouteName } from "@hooks";
import { userImageUrl } from "./Header.constants";

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
        <img className={styles.image} src={userImageUrl} alt="user" />
      </div>
    </header>
  );
}

export default Header;
