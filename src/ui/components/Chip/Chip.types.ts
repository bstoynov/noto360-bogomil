import type { ColorVariant, IconProps } from "@ui";

export type ChipProps = {
  variant: ColorVariant;
  text: string;
  iconName?: IconProps["name"];
};
