export type ColorVariant = "Aqua" | "Ruby" | "Emerald" | "Citrine";
export type Ease = "short" | "long";
export type AnimationConfig = {
  delay: number;
  easing: number[];
  duration: number;
};
export type EaseMap = Record<Ease, AnimationConfig>;
