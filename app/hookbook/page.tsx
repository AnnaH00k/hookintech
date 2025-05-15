import React from "react";

const HookBook = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-b from-[#1d150a] to-[#b9afa1]">
      <div className="max-w-6xl w-full space-y-20">
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-serif font-bold text-[#F5F0E8] tracking-wide drop-shadow-sm">
            HookBook
          </h1>
          <h2 className="text-2xl font-serif text-[#b9afa1] italic">
            Where Stories Come to Life
          </h2>
          <p className="text-lg text-[#b9afa1] max-w-2xl mx-auto">
            Your creative sanctuary for crafting compelling narratives
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group flex items-center justify-center flex-col text-xl bg-[#F5F0E8]/90 backdrop-blur-sm hover:bg-[#F5F0E8] rounded-2xl shadow-[0_8px_30px_rgb(74,60,49,0.06)] hover:shadow-[0_8px_30px_rgb(74,60,49,0.12)] p-8 transition-all duration-300 cursor-pointer border border-[#E8E0D5]">
            <svg
              className="w-12 h-12 mb-4 text-[#4A3C31]"
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
            <h3 className="font-serif font-semibold text-[#4A3C31]">
              Mind Mapping
            </h3>
            <p className="text-sm text-[#7D6B5D] mt-2 text-center">
              Visualize your story&apos;s journey
            </p>
          </div>

          <div className="group flex items-center justify-center flex-col text-xl bg-[#F5F0E8]/90 backdrop-blur-sm hover:bg-[#F5F0E8] rounded-2xl shadow-[0_8px_30px_rgb(74,60,49,0.06)] hover:shadow-[0_8px_30px_rgb(74,60,49,0.12)] p-8 transition-all duration-300 cursor-pointer border border-[#E8E0D5]">
            <svg
              className="w-12 h-12 mb-4 text-[#4A3C31]"
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
            <h3 className="font-serif font-semibold text-[#4A3C31]">
              Focus Mode
            </h3>
            <p className="text-sm text-[#7D6B5D] mt-2 text-center">
              Distraction-free writing environment
            </p>
          </div>

          <div className="group flex items-center justify-center flex-col text-xl bg-[#F5F0E8]/90 backdrop-blur-sm hover:bg-[#F5F0E8] rounded-2xl shadow-[0_8px_30px_rgb(74,60,49,0.06)] hover:shadow-[0_8px_30px_rgb(74,60,49,0.12)] p-8 transition-all duration-300 cursor-pointer border border-[#E8E0D5]">
            <svg
              className="w-12 h-12 mb-4 text-[#4A3C31]"
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
            <h3 className="font-serif font-semibold text-[#4A3C31]">
              Scientific Checkups
            </h3>
            <p className="text-sm text-[#7D6B5D] mt-2 text-center">
              Ensure your story&apos;s accuracy
            </p>
          </div>

          <div className="group flex items-center justify-center flex-col text-xl bg-[#F5F0E8]/90 backdrop-blur-sm hover:bg-[#F5F0E8] rounded-2xl shadow-[0_8px_30px_rgb(74,60,49,0.06)] hover:shadow-[0_8px_30px_rgb(74,60,49,0.12)] p-8 transition-all duration-300 cursor-pointer border border-[#E8E0D5]">
            <svg
              className="w-12 h-12 mb-4 text-[#4A3C31]"
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
            <h3 className="font-serif font-semibold text-[#4A3C31]">
              Collaboration
            </h3>
            <p className="text-sm text-[#7D6B5D] mt-2 text-center">
              Write and edit together
            </p>
          </div>
          <div className="bg-[#F5F0E8] p-8 rounded-xl shadow-sm border border-[#E8E0D5]">
            <svg
              className="w-10 h-10 mb-4 text-[#4A3C31]"
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
            <h3 className="text-xl font-serif font-semibold text-[#4A3C31] mb-4">
              Creative Prompts
            </h3>
            <p className="text-[#7D6B5D] leading-relaxed">
              Daily inspiration to spark your imagination and overcome
              writer&apos;s block
            </p>
          </div>
          <div className="bg-[#F5F0E8] p-8 rounded-xl shadow-sm border border-[#E8E0D5]">
            <svg
              className="w-10 h-10 mb-4 text-[#4A3C31]"
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
            <h3 className="text-xl font-serif font-semibold text-[#4A3C31] mb-4">
              Story Templates
            </h3>
            <p className="text-[#7D6B5D] leading-relaxed">
              Pre-designed structures to help you craft compelling narratives
            </p>
          </div>
          <div className="bg-[#F5F0E8] p-8 rounded-xl shadow-sm border border-[#E8E0D5] text-center">
            <svg
              className="w-12 h-12 mx-auto mb-6 text-[#4A3C31]"
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
            <h3 className="text-xl font-serif font-semibold text-[#4A3C31] mb-3">
              Web Platform
            </h3>
            <p className="text-[#7D6B5D] leading-relaxed">
              Access your work from any browser
            </p>
          </div>
          <div className="bg-[#F5F0E8] p-8 rounded-xl shadow-sm border border-[#E8E0D5] text-center">
            <svg
              className="w-12 h-12 mx-auto mb-6 text-[#4A3C31]"
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
            <h3 className="text-xl font-serif font-semibold text-[#4A3C31] mb-3">
              Mobile Apps
            </h3>
            <p className="text-[#7D6B5D] leading-relaxed">
              Write on the go with our iOS and Android apps
            </p>
          </div>
        </section>

        {/* VR Library Section */}
        <section className="bg-[#271d0f]/90 backdrop-blur-sm rounded-2xl p-10 shadow-[0_8px_30px_rgb(74,60,49,0.06)] border border-[#271d0f]">
          <h2 className="text-3xl font-serif font-bold text-[#F5F0E8] mb-8 text-center">
            Enchanted VR Library
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-[#F5F0E8] p-8 rounded-xl shadow-sm border border-[#E8E0D5]">
              <h3 className="text-2xl font-serif font-semibold text-[#4A3C31] mb-6">
                Magical Reading Environments
              </h3>
              <ul className="space-y-4 text-[#7D6B5D]">
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-[#4A3C31]"
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
                  <span>Ancient castle libraries with floating books</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-[#4A3C31]"
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
                  <span>Enchanted forest reading nooks</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-[#4A3C31]"
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
                  <span>Underwater reading chambers</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-[#4A3C31]"
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
                  <span>Space station observatories</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#F5F0E8] p-8 rounded-xl shadow-sm border border-[#E8E0D5]">
              <h3 className="text-2xl font-serif font-semibold text-[#4A3C31] mb-6">
                Interactive Features
              </h3>
              <ul className="space-y-4 text-[#7D6B5D]">
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-[#4A3C31]"
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
                  <span>Word mapping with magical visualizations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-[#4A3C31]"
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
                  <span>Gesture-based navigation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-[#4A3C31]"
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
                  <span>Dynamic lighting and atmosphere</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-[#4A3C31]"
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
                  <span>Multi-user collaborative spaces</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HookBook;
