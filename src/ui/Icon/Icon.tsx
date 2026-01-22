import type { IconProps } from "./Icon.types";
import svgIcons from "./svgIcons";

function Icon({ name, className }: IconProps) {
  const Component = svgIcons[name];

  return <Component className={className} />;
}

export default Icon;
