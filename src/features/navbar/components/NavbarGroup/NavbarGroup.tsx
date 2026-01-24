import NavbarLink from "../NavbarLink/NavbarLink";
import type { NavbarGroupProps } from "./NavbarGroup.types";
import styles from "./NavbarGroup.module.scss";

function NavbarGroup({ groupName, items }: NavbarGroupProps) {
  return (
    <li className={styles.group}>
      <div className={styles.name}>{groupName}</div>
      <ul>
        {items.map((item) => (
          <NavbarLink key={item.to} {...item} />
        ))}
      </ul>
    </li>
  );
}

export default NavbarGroup;
