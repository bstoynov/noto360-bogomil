import svgIcons from "./svgIcons";

export type IconProps = {
  name: keyof typeof svgIcons;
  className?: string;
};
