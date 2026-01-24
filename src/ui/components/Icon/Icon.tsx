import type { IconProps } from "./Icon.types";
import svgIcons from "./svgIcons";

function Icon({ name, className }: IconProps) {
  const Component = svgIcons[name];

  // @ts-expect-error: TODO: fix TS
  return <Component className={className} />;
}

export default Icon;
