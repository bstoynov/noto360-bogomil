import type { ModalProps } from "./Modal.types";
import styles from "./Modal.module.scss";
import { createPortal } from "react-dom";

function Modal({ children }: ModalProps) {
  return createPortal(
    <div className={styles.modal}>{children}</div>,
    document.body,
  );
}

export default Modal;
