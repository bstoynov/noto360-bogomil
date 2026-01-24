import { navbarConfig } from "@features/navbar/constants";
import NavbarGroup from "../NavbarGroup/NavbarGroup";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul>
        {navbarConfig.map((item) => (
          <NavbarGroup key={item.groupName} {...item} />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
