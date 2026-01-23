import Icon from '../Icon/Icon';
import styles from './Link.module.scss';
import type { LinkProps } from './Link.types';

function Link({ text, iconName, href = "#" }: LinkProps) {
  return (
    <a href={href} className={`${styles.link}`}>
      <span className={styles.text}>{text}</span>
      {iconName && <Icon name={iconName} className={styles.icon} />}
    </a>
  );
}

export default Link;
