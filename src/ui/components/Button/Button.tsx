import styles from './Button.module.scss'
import type { ButtonProps } from './Button.types';

function Button({ children, variant }: ButtonProps) {
  return <button className={`${styles.button} ${styles[variant]}`}>{children}</button>
}

export default Button;