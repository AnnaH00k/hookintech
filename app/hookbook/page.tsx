import React from "react";

// Types
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isInteractive?: boolean;
}

interface VRFeatureProps {
  icon: React.ReactNode;
  text: string;
}

// Constants
const COLORS = {
  primary: "#F5F0E8",
  secondary: "#b9afa1",
  accent: "#4A3C31",
  dark: "#1d150a",
  darkSecondary: "#2d2016",
  brown: "#8B7355",
} as const;

// Components
const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  isInteractive = false,
}) => {
  const baseClasses =
    "bg-[#1d150a]/90 backdrop-blur-sm rounded-2xl shadow-[0_8px_30px_rgb(74,60,49,0.06)] border border-[#4A3C31] p-8";

  // Different hover effects for each feature type
  const getHoverEffect = (title: string) => {
    switch (title.toLowerCase()) {
      case "mind mapping":
        return "hover:scale-105 hover:rotate-[-2deg] hover:shadow-[0_18px_38px_rgba(139,115,85,0.35)] hover:border-[#8B7355] transition-all duration-600 hover:translate-y-1 hover:bg-gradient-to-r hover:from-[#1d150a] hover:via-[#2d2016] hover:to-[#1d150a]";
      case "focus mode":
        return "hover:scale-105 hover:shadow-[0_18px_38px_rgba(139,115,85,0.35)] hover:border-[#8B7355] transition-all duration-500 hover:bg-gradient-to-r hover:from-[#1d150a] hover:via-[#2d2016] hover:to-[#1d150a]";
      case "scientific checkups":
        return "hover:scale-105 hover:rotate-1 hover:shadow-[0_18px_38px_rgba(139,115,85,0.35)] hover:border-[#8B7355] transition-all duration-700 hover:-translate-y-2 hover:bg-gradient-to-r hover:from-[#1d150a] hover:via-[#2d2016] hover:to-[#1d150a]";
      case "collaboration":
        return "hover:scale-105 hover:shadow-[0_18px_38px_rgba(139,115,85,0.35)] hover:border-[#8B7355] transition-all duration-500 hover:bg-gradient-to-r hover:from-[#1d150a] hover:via-[#2d2016] hover:to-[#1d150a]";
      case "creative prompts":
        return "hover:scale-105 hover:shadow-[0_18px_38px_rgba(139,115,85,0.35)] hover:border-[#8B7355] transition-all duration-500 hover:bg-gradient-to-r hover:from-[#1d150a] hover:via-[#2d2016] hover:to-[#1d150a]";
      case "story templates":
        return "hover:scale-105 hover:rotate-[-2deg] hover:shadow-[0_18px_38px_rgba(139,115,85,0.35)] hover:border-[#8B7355] transition-all duration-600 hover:translate-y-1 hover:bg-gradient-to-r hover:from-[#1d150a] hover:via-[#2d2016] hover:to-[#1d150a]";
      case "web platform":
        return "hover:scale-105 hover:shadow-[0_18px_38px_rgba(139,115,85,0.35)] hover:border-[#8B7355] transition-all duration-500 hover:bg-gradient-to-r hover:from-[#1d150a] hover:via-[#2d2016] hover:to-[#1d150a]";
      case "mobile apps":
        return "hover:scale-105 hover:rotate-1 hover:shadow-[0_18px_38px_rgba(139,115,85,0.35)] hover:border-[#8B7355] transition-all duration-700 hover:-translate-y-2 hover:bg-gradient-to-r hover:from-[#1d150a] hover:via-[#2d2016] hover:to-[#1d150a]";
      default:
        return "hover:scale-105 hover:shadow-[0_18px_38px_rgba(139,115,85,0.35)] hover:border-[#8B7355] transition-all duration-500 hover:bg-gradient-to-r hover:from-[#1d150a] hover:via-[#2d2016] hover:to-[#1d150a]";
    }
  };

  const hoverEffect = getHoverEffect(title);
  const interactiveClasses = isInteractive
    ? " hover:shadow-[0_8px_30px_rgb(74,60,49,0.12)] transition-all duration-300 cursor-pointer group"
    : "";

  return (
    <div
      className={`${baseClasses} ${interactiveClasses} ${hoverEffect} cursor-pointer`}
    >
      <div className="flex items-center justify-center flex-col text-xl">
        <div className="mb-4 text-[#4A3C31] transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="font-serif font-semibold text-[#b9afa1] group-hover:text-[#8B7355] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-[#b9afa1] mt-2 text-center leading-relaxed transition-colors duration-300 group-hover:text-[#8B7355]">
          {description}
        </p>
      </div>
    </div>
  );
};

const VRFeature: React.FC<VRFeatureProps> = ({ icon, text }) => (
  <li className="flex items-center space-x-3">
    <div className="text-[#4A3C31]">{icon}</div>
    <span>{text}</span>
  </li>
);

const MagicalBackground: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Generate stars programmatically instead of hardcoding */}
    {Array.from({ length: 60 }).map((_, i) => (
      <div
        key={i}
        className="absolute w-0.5 h-0.5 bg-[#F5F0E8] rounded-full animate-pulse opacity-10"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 4}s`,
          opacity: Math.random() * 0.2 + 0.1,
        }}
      />
    ))}

    {/* Light rays */}
    {[1 / 4, 1 / 3, 1 / 2].map((position, i) => (
      <div
        key={`ray-${i}`}
        className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-[#F5F0E8]/8 to-transparent animate-pulse"
        style={{
          left: `${position * 100}%`,
          animationDelay: `${i * 2}s`,
        }}
      />
    ))}

    {/* Floating book silhouettes */}
    {[8, 12, 16].map((top, i) => (
      <div
        key={`book-${i}`}
        className="absolute w-6 h-8 bg-gradient-to-b from-[#8B7355]/10 to-transparent rounded-sm transform animate-float opacity-25"
        style={{
          top: `${top}%`,
          left: `${8 + i * 4}%`,
          transform: `rotate(${12 - i * 6}deg)`,
          animationDelay: `${i}s`,
        }}
      />
    ))}
  </div>
);

const VRFeatureSection: React.FC = () => {
  const readingEnvironments = [
    "Ancient castle libraries with floating books",
    "Enchanted forest reading nooks",
    "Underwater reading chambers",
    "Space station observatories",
  ];

  const interactiveFeatures = [
    "Word mapping with magical visualizations",
    "Gesture-based navigation",
    "Dynamic lighting and atmosphere",
    "Multi-user collaborative spaces",
  ];

  const BookIcon = () => (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 21H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 21V7L13 3V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 21V11L13 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const ClockIcon = () => (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 6V12L16 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  const StarIcon = () => (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const UsersIcon = () => (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1d150a] via-[#4A3C31] to-[#1d150a] backdrop-blur-sm rounded-2xl p-10 shadow-[0_8px_30px_rgb(74,60,49,0.06)] border border-[#271d0f]">
      <MagicalBackground />

      <div className="relative z-10">
        <h2 className="text-3xl font-serif font-bold text-[#b9afa1] mb-8 text-center drop-shadow-[0_0_8px_rgba(245,240,232,0.2)] tracking-wide">
          Enchanted VR Library
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gradient-to-br from-[#1d150a]/95 to-[#2d2016]/95 backdrop-blur-md p-8 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-[#4A3C31]/50 hover:border-[#F5F0E8]/20 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(245,240,232,0.08)] hover:scale-105 hover:rotate-1 hover:-translate-y-2 cursor-pointer hover:bg-gradient-to-r hover:from-[#1d150a] hover:via-[#2d2016] hover:to-[#1d150a]">
            <h3 className="text-2xl font-serif font-semibold text-[#b9afa1] mb-6 tracking-wide transition-colors duration-300 hover:text-[#F5F0E8]">
              Magical Reading Environments
            </h3>
            <ul className="space-y-4 text-[#b9afa1]">
              {readingEnvironments.map((text, index) => (
                <VRFeature key={index} icon={<BookIcon />} text={text} />
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#1d150a]/95 to-[#2d2016]/95 backdrop-blur-md p-8 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-[#4A3C31]/50 hover:border-[#F5F0E8]/20 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(245,240,232,0.08)] hover:scale-105 hover:rotate-[-1deg] hover:translate-y-2 cursor-pointer hover:bg-gradient-to-r hover:from-[#1d150a] hover:via-[#2d2016] hover:to-[#1d150a]">
            <h3 className="text-2xl font-serif font-semibold text-[#b9afa1] mb-6 tracking-wide transition-colors duration-300 hover:text-[#F5F0E8]">
              Interactive Features
            </h3>
            <ul className="space-y-4 text-[#b9afa1]">
              {interactiveFeatures.map((text, index) => (
                <VRFeature key={index} icon={<StarIcon />} text={text} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const MainPage: React.FC = () => {
  const features = [
    {
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Mind Mapping",
      description: "Visualize your story's journey",
      isInteractive: true,
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 8V12L15 15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Focus Mode",
      description: "Distraction-free writing environment",
      isInteractive: true,
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Scientific Checkups",
      description: "Ensure your story's accuracy",
      isInteractive: true,
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Collaboration",
      description: "Write and edit together",
      isInteractive: true,
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Creative Prompts",
      description:
        "Daily inspiration to spark your imagination and overcome writer's block",
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 19.5V4.5C4 3.67157 4.67157 3 5.5 3H18.5C19.3284 3 20 3.67157 20 4.5V19.5C20 20.3284 19.3284 21 18.5 21H5.5C4.67157 21 4 20.3284 4 19.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 16H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M8 3V21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Story Templates",
      description:
        "Pre-designed structures to help you craft compelling narratives",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 22V12H15V22"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Web Platform",
      description: "Access your work from any browser",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="5"
            y="2"
            width="14"
            height="20"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 18H12.01"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Mobile Apps",
      description: "Write on the go with our iOS and Android apps",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-b from-[#1d150a] via-[#120e0b] to-[#1d150a]">
      <div className="max-w-6xl w-full space-y-20">
        {/* Header Section */}
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-serif font-bold text-[#b9afa1] tracking-wide drop-shadow-sm">
            HookBook
          </h1>
          <h2 className="text-2xl font-serif text-[#b9afa1] italic">
            Where Stories Come to Life
          </h2>
          <p className="text-lg text-[#b9afa1] max-w-2xl mx-auto">
            Your creative sanctuary for crafting compelling narratives
          </p>
        </div>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              isInteractive={feature.isInteractive}
            />
          ))}
        </section>

        {/* VR Library Section */}
        <VRFeatureSection />
      </div>
    </div>
  );
};

const HookBook: React.FC = () => {
  return <MainPage />;
};

export default HookBook;
