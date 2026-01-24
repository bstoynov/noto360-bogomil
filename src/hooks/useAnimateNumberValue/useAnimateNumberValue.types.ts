import type { Ease } from "@ui";

export type UseAnimateNumberValueParams = {
  start: number;
  end: number;
  transformer: (value: number) => string;
  ease: Ease;
};
