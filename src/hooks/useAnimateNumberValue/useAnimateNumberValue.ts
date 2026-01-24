import { animate, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";
import type { UseAnimateNumberValueParams } from "./useAnimateNumberValue.types";
import { EXTREME_EASE_OUT } from "@constants";

const useAnimateNumberValue = ({
  start,
  end,
  transformer,
}: UseAnimateNumberValueParams) => {
  const rollingNum = useMotionValue(start);

  const result = useTransform(rollingNum, transformer);

  useEffect(() => {
    const animation = animate(rollingNum, end, {
      delay: EXTREME_EASE_OUT.delay,
      duration: EXTREME_EASE_OUT.duration,
      ease: EXTREME_EASE_OUT.easing,
    });

    return () => animation.stop();
  }, [rollingNum, end]);

  return result;
};

export default useAnimateNumberValue;
