"use client";
import React, { useState } from "react";

export default function HeroSection({
  theme,
  setTheme,
  onOpenResume,
  onOpenPlay,
  playSound
}) {
  const [cordPulled, setCordPulled] = useState(false);

  const toggleTheme = () => {
    setCordPulled(true);
    playSound && playSound("click");
    setTimeout(() => setCordPulled(false), 350);
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  const isDark = theme === "dark";
  const textColor = isDark ? "#FFFFFF" : "#000000";
  const subtextColor = isDark ? "rgba(255, 255, 255, 0.85)" : "rgba(0, 0, 0, 0.8)";
  const boardBg = isDark ? "#1C1C1E" : "#FFFFFF";

  return (
    <section
      id="hero"
      className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 pt-20 pb-6 sm:pb-8 transition-colors overflow-x-hidden"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">

        {/* Left Column: Pure Black in light mode, Pure White in dark mode */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h1
            className="doodle-font text-4xl sm:text-5xl md:text-6xl tracking-wide mb-4 sm:mb-6 transition-colors duration-300"
            style={{ color: textColor }}
          >
            Hi, I'm Shakil!
          </h1>

          <p
            className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-md font-normal transition-colors duration-300"
            style={{ color: textColor }}
          >
            Full Stack Software Engineer specializing in backend architecture, scalable APIs, and Generative AI integrations with Java, Spring Boot, Next.js, and PostgreSQL.
          </p>

          <div className="space-y-4 sm:space-y-6 transition-colors duration-300">
            <div>
              <p className="text-sm sm:text-base" style={{ color: textColor }}>
                B.Tech in Computer Science <span className="font-bold" style={{ color: textColor }}>@NIET</span>
              </p>
              <p className="text-xs sm:text-sm mt-0.5" style={{ color: subtextColor }}>
                Greater Noida • CGPA: 8.97 / 10
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Board background WHITE in light mode, DARK GREY in night mode + Lamp */}
        <div className="lg:col-span-7 flex justify-center items-center relative w-full overflow-visible">
          <div className="relative w-full max-w-[640px] flex flex-col justify-end select-none">

            {/* Main Stage: Board on the left/center, Standing Lamp on the right */}
            <div className="w-full flex items-end justify-between gap-1.5 sm:gap-6 px-0 sm:px-2 mb-0">

              {/* White Board in Light Mode / Dark Grey in Night Mode */}
              <div
                className="flex-1 border-[2.5px] sm:border-[3.5px] rounded-2xl sm:rounded-3xl p-2.5 sm:p-6 shadow-sm transition-colors duration-300 min-w-0"
                style={{
                  backgroundColor: boardBg,
                  borderColor: "#000000"
                }}
              >
                <div className="w-full h-full min-h-[140px] sm:min-h-[220px] rounded-xl sm:rounded-2xl flex items-center justify-center">
                  {/* 4 App Tiles */}
                  <div className="grid grid-cols-4 gap-2 sm:gap-4 w-full max-w-[480px]">

                    {/* 1. Blue: Work (#2367B2) */}
                    <a
                      href="#projects"
                      onClick={() => playSound && playSound("pop")}
                      className="flex flex-col items-center justify-center aspect-square rounded-xl sm:rounded-2xl bg-[#2367B2] text-white p-1.5 sm:p-2 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md cursor-pointer touch-manipulation"
                    >
                      <div className="w-7 h-5 sm:w-12 sm:h-8 flex items-center justify-center">
                        <svg viewBox="0 0 60 40" className="w-full h-full">
                          <rect x="7" y="9" width="18" height="15" rx="2" fill="none" stroke="#FFFFFF" strokeWidth="3" />
                          <rect x="35" y="9" width="18" height="15" rx="2" fill="none" stroke="#FFFFFF" strokeWidth="3" />
                          <line x1="25" y1="16" x2="35" y2="16" stroke="#FFFFFF" strokeWidth="3" />
                          <circle cx="16" cy="16.5" r="2.2" fill="#FFFFFF" />
                          <circle cx="44" cy="16.5" r="2.2" fill="#FFFFFF" />
                          <path d="M25 28 Q30 33 35 28" stroke="#FFFFFF" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                        </svg>
                      </div>
                      <span className="doodle-font text-xs sm:text-base md:text-lg mt-0.5 font-normal tracking-wide">Work</span>
                    </a>

                    {/* 2. Yellow: Expertise (#DCA73C) */}
                    <button
                      onClick={() => {
                        playSound && playSound("pop");
                        onOpenPlay && onOpenPlay();
                      }}
                      className="flex flex-col items-center justify-center aspect-square rounded-xl sm:rounded-2xl bg-[#DCA73C] text-white p-1.5 sm:p-2 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md cursor-pointer touch-manipulation"
                    >
                      <div className="w-7 h-5 sm:w-12 sm:h-8 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 stroke-current fill-none stroke-[2.2]">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                      </div>
                      <span className="doodle-font text-xs sm:text-base md:text-lg mt-0.5 font-normal tracking-wide">Expertise</span>
                    </button>

                    {/* 3. Green: Me (#2B764D) */}
                    <a
                      href="#aboutMe"
                      onClick={() => playSound && playSound("pop")}
                      className="flex flex-col items-center justify-center aspect-square rounded-xl sm:rounded-2xl bg-[#2B764D] text-white p-1.5 sm:p-2 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md cursor-pointer touch-manipulation"
                    >
                      <div className="w-7 h-5 sm:w-12 sm:h-8 flex items-center justify-center">
                        <svg viewBox="0 0 60 40" className="w-full h-full">
                          <path d="M10 16 L18 19 L10 22" stroke="#FFFFFF" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                          <line x1="8" y1="13" x2="16" y2="15" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />

                          <path d="M50 16 L42 19 L50 22" stroke="#FFFFFF" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                          <line x1="52" y1="13" x2="44" y2="15" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />

                          <path d="M24 28 Q30 34 36 28" stroke="#FFFFFF" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                        </svg>
                      </div>
                      <span className="doodle-font text-xs sm:text-base md:text-lg mt-0.5 font-normal tracking-wide">Me</span>
                    </a>

                    {/* 4. Red: Resume (#B74644) */}
                    <button
                      onClick={() => {
                        playSound && playSound("pop");
                        onOpenResume && onOpenResume();
                      }}
                      className="flex flex-col items-center justify-center aspect-square rounded-xl sm:rounded-2xl bg-[#B74644] text-white p-1.5 sm:p-2 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md cursor-pointer touch-manipulation"
                    >
                      <div className="w-7 h-5 sm:w-12 sm:h-8 flex items-center justify-center">
                        <svg viewBox="0 0 60 40" className="w-full h-full">
                          <circle cx="15" cy="18" r="2.2" fill="#FFFFFF" />
                          <path d="M13 25 Q17 28 20 25" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" />
                          <line x1="28" y1="13" x2="48" y2="13" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                          <line x1="32" y1="19" x2="48" y2="19" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                          <line x1="32" y1="25" x2="48" y2="25" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                      </div>
                      <span className="doodle-font text-xs sm:text-base md:text-lg mt-0.5 font-normal tracking-wide">Resume</span>
                    </button>

                  </div>
                </div>
              </div>

              {/* Floor Lamp: Connected DIRECTLY to its stand pole */}
              <div className="relative flex flex-col items-center flex-shrink-0 mb-0 pl-1 pr-1 sm:px-0">

                {/* Glow bloom in dark mode */}
                {isDark && (
                  <div className="absolute -top-6 w-36 h-36 rounded-full bg-amber-300/50 blur-2xl pointer-events-none transition-opacity duration-500"></div>
                )}

                {/* Flared bell lampshade */}
                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label="Toggle dark mode"
                  className="cursor-pointer transition-transform hover:scale-105 active:scale-95 z-20 touch-manipulation focus:outline-none bg-transparent border-0 p-0"
                  title="Click lamp to toggle Dark Mode"
                >
                  <svg viewBox="0 0 95 80" className="w-16 sm:w-24 h-auto">
                    <path
                      d="M 32 10 
                         L 63 10 
                         Q 65 30 84 62 
                         Q 58 72 47 70 
                         Q 37 72 11 62 
                         Q 30 30 32 10 Z"
                      fill={isDark ? "#FDE047" : "#FFFFFF"}
                      stroke="#000000"
                      strokeWidth="3.2"
                      strokeLinejoin="round"
                      className="transition-colors duration-300"
                    />
                    <ellipse cx="47.5" cy="10" rx="15.5" ry="3.5" fill={isDark ? "#FACC15" : "#F4F4F5"} stroke="#000000" strokeWidth="2.4" />
                  </svg>
                </button>

                {/* Straight Stand Pole connected directly to the lampshade and continuing all the way down */}
                <div className="w-[3px] sm:w-[3.5px] h-36 sm:h-44 bg-black dark:bg-neutral-800 -mt-2 z-10 relative">

                  {/* Pull Cord hanging alongside the stand pole (with generous touch padding) */}
                  <button
                    type="button"
                    onClick={toggleTheme}
                    aria-label="Pull cord to toggle dark mode"
                    className={`absolute top-0 -left-4 sm:-left-3.5 flex flex-col items-center cursor-pointer group touch-manipulation p-2 -m-2 focus:outline-none bg-transparent border-0 ${cordPulled ? "pulling-cord" : ""}`}
                    title="Pull cord for Dark mode!"
                  >
                    <div className="w-[2px] h-8 sm:h-9 bg-black dark:bg-white"></div>
                    <div className="w-3 h-4 sm:w-3 sm:h-4.5 rounded-full border-[2px] border-black dark:border-white bg-white dark:bg-black"></div>
                  </button>

                  {/* Handwritten 'Dark mode?' note with curved arrow */}
                  <button
                    type="button"
                    onClick={toggleTheme}
                    aria-label="Click note to toggle dark mode"
                    className="hidden sm:flex absolute top-12 left-3 items-center gap-1 cursor-pointer whitespace-nowrap select-none touch-manipulation focus:outline-none bg-white dark:bg-black px-2 py-1 rounded-md shadow-sm z-30">
                    {/* Arrow on mobile points right-down toward cord/pole */}
                    <svg viewBox="0 0 35 30" className="w-5 sm:w-6 h-4 sm:h-5 text-neutral-500 dark:text-neutral-400 rotate-180 sm:rotate-0">
                      <path d="M 6 8 Q 24 12 28 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M 23 18 L 28 22 L 29 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="doodle-font text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors font-normal">
                      {isDark ? "Light mode?" : "Dark mode?"}
                    </span>
                  </button>

                </div>

                {/* Small black line only below the lamp */}
                <div className="w-10 sm:w-14 h-[3.5px] bg-black dark:bg-neutral-300 rounded-full mt-0 z-10"></div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
