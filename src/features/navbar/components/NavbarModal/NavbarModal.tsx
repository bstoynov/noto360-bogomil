import { IconButton, Modal } from "@ui";
import Navbar from "../Navbar/Navbar";
import type { NavbarModalProps } from "./NavbarModal.types";
import styles from "./NavbarModal.module.scss";

function NavbarModal({ open, onClose }: NavbarModalProps) {
  return (
    open && (
      <Modal>
        <div className={styles.content}>
          <IconButton
            name="close"
            className={styles.icon}
            buttonClassName={styles.close}
            onClick={onClose}
          />
          <Navbar onNavigation={onClose} />
        </div>
      </Modal>
    )
  );
}

export default NavbarModal;
