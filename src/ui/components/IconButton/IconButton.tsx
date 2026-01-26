import Icon from "../Icon/Icon";
import type { IconButtonProps } from "./IconButton.types";

function IconButton({
  onClick,
  buttonClassName,
  ...iconProps
}: IconButtonProps) {
  return (
    <button onClick={onClick} className={buttonClassName}>
      <Icon {...iconProps} />
    </button>
  );
}

export default IconButton;
