import Chip from "../Chip/Chip";
import type { ChipButtonProps } from "./ChipButton.types";
import styles from "./ChipButton.module.scss";

function ChipButton({ onClick, active = true, ...chipProps }: ChipButtonProps) {
  return (
    <button onClick={onClick} className={`${!active ? styles.inactive : ""}`}>
      <Chip {...chipProps} />
    </button>
  );
}

export default ChipButton;
