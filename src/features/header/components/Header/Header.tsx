import { Icon, IconButton } from "@ui";
import Search from "../Search/Search";
import styles from "./Header.module.scss";
import { useBreakpoint, useCurrentRouteName } from "@hooks";
import { userImageUrl } from "./Header.constants";
import { useState } from "react";
import { NavbarModal } from "@features/navbar";

function Header() {
  const routeName = useCurrentRouteName();
  const [modalOpen, setModalOpen] = useState(false);
  const isMd = useBreakpoint("Md");

  return (
    <header className={styles.header}>
      {modalOpen && (
        <NavbarModal open={modalOpen} onClose={() => setModalOpen(false)} />
      )}
      <div className={styles.container}>
        {isMd && (
          <IconButton
            className={`${styles.icon} ${styles.menu}`}
            name="menu"
            onClick={() => setModalOpen(true)}
          />
        )}
        {routeName && <h1 className={styles.title}>{routeName}</h1>}
        <Search />
        <div className={styles.icons}>
          <Icon name="plus" className={styles.icon} />
          <Icon name="flow" className={styles.icon} />
          <Icon name="bell" className={styles.icon} />
        </div>
        <img
          className={styles.image}
          src={userImageUrl}
          alt="user"
          draggable={false}
        />
      </div>
    </header>
  );
}

export default Header;
