import { navbarConfig } from "@features/navbar/constants";
import NavbarGroup from "../NavbarGroup/NavbarGroup";
import styles from "./Navbar.module.scss";
import { logoImageUrl } from "./Navbar.constants";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <img
        className={styles.logo}
        src={logoImageUrl}
        alt="legalinspect"
        draggable={false}
      />
      <ul>
        {navbarConfig.map((item) => (
          <NavbarGroup key={item.groupName} {...item} />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
