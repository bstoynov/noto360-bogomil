import Icon from "../Icon/Icon";
import type { IconButtonProps } from "./IconButton.types";

function IconButton({ onClick, ...iconProps }: IconButtonProps) {
  return (
    <button onClick={onClick}>
      <Icon {...iconProps} />
    </button>
  );
}

export default IconButton;
