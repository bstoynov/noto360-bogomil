import animations from "./animations";

export type AnimationName = keyof typeof animations;

export type AnimationPlayerProps = {
  name: AnimationName;
  className?: string;
  loop?: boolean;
};
