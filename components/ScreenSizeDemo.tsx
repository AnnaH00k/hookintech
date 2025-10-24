"use client";

import { useScreenSize } from "@/hooks/useScreenSize";

export default function ScreenSizeDemo() {
  const { isSmall, isMedium, isLarge, width } = useScreenSize();

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Screen Size Detection</h3>
      <div className="space-y-1 text-sm">
        <p>Width: {width}px</p>
        <p>Small: {isSmall ? "Yes" : "No"}</p>
        <p>Medium: {isMedium ? "Yes" : "No"}</p>
        <p>Large: {isLarge ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}
