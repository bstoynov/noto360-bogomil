import { navbarConfig } from "@features/navbar/constants";
import NavbarGroup from "../NavbarGroup/NavbarGroup";
import styles from "./Navbar.module.scss";
import { logoImageUrl } from "./Navbar.constants";
import type { NavbarProps } from "./Navbar.types";

function Navbar({ onNavigation }: NavbarProps) {
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
          <NavbarGroup
            key={item.groupName}
            onNavigation={onNavigation}
            {...item}
          />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
