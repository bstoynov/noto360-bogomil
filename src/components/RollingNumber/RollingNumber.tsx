import { motion } from "motion/react";
import type { RollingNumberProps } from "./RollingNumber.types";
import { useAnimateNumberValue } from "@hooks";

function RollingNumber({
  value,
  delta,
  unit = "",
  className,
  ease,
}: RollingNumberProps) {
  const rollingNumber = useAnimateNumberValue({
    start: value - delta,
    end: value,
    transformer: (animatedValue) => animatedValue.toFixed(0),
    ease,
  });

  return (
    <div className={className}>
      <motion.span>{rollingNumber}</motion.span>
      <motion.span>{unit}</motion.span>
    </div>
  );
}

export default RollingNumber;
