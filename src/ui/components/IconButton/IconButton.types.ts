import type { IconProps } from "../Icon/Icon.types";

export type IconButtonProps = IconProps & {
  onClick: () => void;
};
