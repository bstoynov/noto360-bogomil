import { animate, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";
import type { UseAnimateNumberValueParams } from "./useAnimateNumberValue.types";
import { easingMap } from "@constants";

const useAnimateNumberValue = ({
  start,
  end,
  transformer,
  ease,
}: UseAnimateNumberValueParams) => {
  const rollingNum = useMotionValue(start);

  const result = useTransform(rollingNum, transformer);
  const easeConfig = easingMap[ease];

  useEffect(() => {
    const animation = animate(rollingNum, end, easeConfig);

    return () => animation.stop();
  }, [rollingNum, end, easeConfig]);

  return result;
};

export default useAnimateNumberValue;
