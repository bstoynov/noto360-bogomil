import { Breakpoint } from "@styles";
import { useLayoutEffect, useState } from "react";

function useBreakpoint(breakpoint: keyof typeof Breakpoint) {
  const [isMobile, setIsMobile] = useState(() => {
    return window.matchMedia(`(max-width: ${Breakpoint[breakpoint]}px)`)
      .matches;
  });

  useLayoutEffect(() => {
    const matcher = window.matchMedia(
      `(max-width: ${Breakpoint[breakpoint]}px)`,
    );

    const handler = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    matcher.addEventListener("change", handler);
    return () => matcher.removeEventListener("change", handler);
  }, [breakpoint]);

  return isMobile;
}

export default useBreakpoint;
