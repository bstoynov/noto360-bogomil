import { NavLink } from "react-router-dom";
import styles from "./NavbarLink.module.scss";
import { Icon } from "@ui";
import type { NavbarLinkProps } from "./NavbarLink.types";

function NavbarLink({ text, iconName, to, onNavigation }: NavbarLinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${styles.link} ${isActive ? styles.active : ""}`
      }
      onClick={onNavigation}
    >
      <Icon name={iconName} className={styles.icon} />
      <span className={styles.text}>{text}</span>
    </NavLink>
  );
}

export default NavbarLink;
