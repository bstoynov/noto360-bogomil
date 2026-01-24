import type { ChipProps } from "../Chip/Chip.types";

export type ChipButtonProps = ChipProps & {
  onClick: () => void;
  active: boolean;
};
