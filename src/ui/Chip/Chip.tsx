import Icon from '../Icon/Icon';
import styles from './Chip.module.scss';
import type { ChipProps } from './Chip.types';

function Chip({ variant, text, iconName }: ChipProps) {
  return (
    <div className={`${styles.chip} ${styles[variant]}`}>
      {iconName && <Icon name={iconName} className={styles.icon} />}
      {/* TODO: body text is not centered with the icon due to line height */}
      <p className={styles.text}>
        {text}
      </p>
    </div>
  );
}

export default Chip;
