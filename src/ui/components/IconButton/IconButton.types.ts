import type { IconProps } from "../Icon/Icon.types";

export type IconButtonProps = IconProps & {
  buttonClassName?: string;
  onClick: () => void;
};
