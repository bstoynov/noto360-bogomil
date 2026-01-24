import type { Ease } from "@ui";

export type RollingNumberProps = {
  delta: number;
  value: number;
  unit?: string;
  className?: string;
  ease: Ease;
};
