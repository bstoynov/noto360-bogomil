import svgIcons from "./svgIcons";

export type IconName = keyof typeof svgIcons;

export type IconProps = {
  name: IconName;
  className?: string;
};
