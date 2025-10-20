"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function HiddenStartButton() {
  const [showHiddenButton, setShowHiddenButton] = useState(false);

  // Hidden button logic - show after 5 seconds or on specific key combination
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHiddenButton(true);
    }, 5000);

    const handleKeyPress = (e: KeyboardEvent) => {
      // Show hidden button on Ctrl+Shift+S
      if (e.ctrlKey && e.shiftKey && e.key === "S") {
        setShowHiddenButton(true);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  if (!showHiddenButton) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <Link
        href="/start"
        className="bg-[#1A1F15] hover:bg-[#2A2F25] border border-[#3A3F35] hover:border-[#D7E0C5] rounded-lg p-3 transition-all duration-300 transform hover:scale-105 opacity-70 hover:opacity-100"
      >
        <span className="text-sm text-[#D7E0C5]">Start</span>
      </Link>
    </div>
  );
}



