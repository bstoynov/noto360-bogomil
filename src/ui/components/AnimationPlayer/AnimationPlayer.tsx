import Lottie from "lottie-react";
import type { AnimationPlayerProps } from "./AnimationPlayer.types";
import animations from "./animations";

function AnimationPlayer({
  name,
  className,
  loop = true,
}: AnimationPlayerProps) {
  return (
    <Lottie
      className={className}
      animationData={animations[name]}
      loop={loop}
    />
  );
}

export default AnimationPlayer;
