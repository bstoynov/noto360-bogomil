import type { IconProps } from "../Icon/Icon.types";

export type ChipProps = {
  variant: "aqua" | "ruby";
  text: string;
  iconName?: IconProps["name"];
};
