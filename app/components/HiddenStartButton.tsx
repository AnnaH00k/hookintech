"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function HiddenStartButton() {
  const [showHiddenButton, setShowHiddenButton] = useState(false);

  useEffect(() => {
    let buffer = "";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.length === 1) {
        const ch = e.key.toLowerCase();
        if (/^[a-z]$/.test(ch)) {
          buffer = (buffer + ch).slice(-4);
          if (buffer === "anna") {
            setShowHiddenButton((prev) => !prev);
            buffer = "";
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!showHiddenButton) {
    return null;
  }

  return (
    <div className="w-full mb-8 flex justify-center items-center">
      <Link
        href="/start"
        className="bg-[#1A1F15] hover:bg-[#2A2F25] border border-[#3A3F35] hover:border-[#D7E0C5] rounded-lg p-3 transition-all duration-300 transform hover:scale-105 opacity-70 hover:opacity-100"
      >
        <span className="text-sm text-[#D7E0C5]">start</span>
      </Link>
    </div>
  );
}
