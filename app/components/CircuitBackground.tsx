import React from "react";

const CircuitSVG = ({ className }: { className: string }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 300 300"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 150 L100 150 L150 100 L200 100"
      stroke="url(#shimmer)"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M0 100 L50 100 L100 50 L150 50"
      stroke="url(#shimmer)"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M50 200 L100 200 L150 150 L200 150"
      stroke="url(#shimmer)"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M0 250 L50 250 L100 200"
      stroke="url(#shimmer)"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="100" cy="150" r="3" fill="#7C9838" />
    <circle cx="150" cy="100" r="3" fill="#7C9838" />
    <circle cx="50" cy="100" r="3" fill="#7C9838" />
    <circle cx="100" cy="200" r="3" fill="#7C9838" />
    <circle cx="150" cy="150" r="3" fill="#7C9838" />
  </svg>
);

const CenterCircuitSVG = ({ className }: { className: string }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 300 300"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 150 L80 150 L120 120 L180 120"
      stroke="url(#shimmer)"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M40 180 L100 180 L140 150 L200 150"
      stroke="url(#shimmer)"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M20 120 L60 120 L100 80 L160 80"
      stroke="url(#shimmer)"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="80" cy="150" r="3" fill="#7C9838" />
    <circle cx="120" cy="120" r="3" fill="#7C9838" />
    <circle cx="100" cy="180" r="3" fill="#7C9838" />
    <circle cx="60" cy="120" r="3" fill="#7C9838" />
  </svg>
);

const CircuitBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <svg width="0" height="0">
        <defs>
          <linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#90EE90" stopOpacity="0.2">
              <animate
                attributeName="offset"
                values="-1; 2"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#90EE90" stopOpacity="0.6">
              <animate
                attributeName="offset"
                values="-0.5; 2.5"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#90EE90" stopOpacity="0.2">
              <animate
                attributeName="offset"
                values="0; 3"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>
      </svg>

      {/* Corner circuits */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] opacity-40">
        <CircuitSVG className="" />
      </div>
      <div className="absolute top-0 right-0 w-[300px] h-[300px] opacity-40 transform rotate-90">
        <CircuitSVG className="" />
      </div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] opacity-40 transform -rotate-90">
        <CircuitSVG className="" />
      </div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] opacity-40 transform rotate-180">
        <CircuitSVG className="" />
      </div>

      {/* Center circuits */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] opacity-40 -translate-y-1/2">
        <CenterCircuitSVG className="" />
      </div>
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] opacity-40 -translate-y-1/2 rotate-180">
        <CenterCircuitSVG className="" />
      </div>
      
    </div>
  );
};

export default CircuitBackground;
