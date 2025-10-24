"use client";

import { useState, useEffect } from "react";

interface ScreenSize {
  isSmall: boolean;
  isMedium: boolean;
  isLarge: boolean;
  width: number;
}

export function useScreenSize(): ScreenSize {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    isSmall: false,
    isMedium: false,
    isLarge: false,
    width: 0,
  });

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;

      setScreenSize({
        isSmall: width < 768, // sm breakpoint
        isMedium: width >= 768 && width < 1024, // md breakpoint
        isLarge: width >= 1024, // lg breakpoint and above
        width,
      });
    };

    // Set initial value
    checkScreenSize();

    // Add event listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return screenSize;
}
