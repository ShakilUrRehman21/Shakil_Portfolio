"use client";
import React from "react";

export default function AreasOfInterest({ playSound }) {
  const domains = [
    {
      category: "Backend & Systems",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none stroke-[2]">
          <rect x="2" y="2" width="20" height="8" rx="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="3" strokeLinecap="round" />
          <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
      skills: ["Spring Boot", "Node.js", "REST APIs", "System Design", "Microservices"],
      color: "from-emerald-500/20 to-teal-500/10 border-emerald-400/30"
    },
    {
      category: "Generative AI & LLMs",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none stroke-[2]">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      skills: ["Gemini API", "Prompt Engineering", "Zod Schema Enforcement", "Multi-Stage Pipelines"],
      color: "from-sky-500/20 to-blue-500/10 border-sky-400/30"
    },
    {
      category: "Data & Storage Architecture",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none stroke-[2]">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
      skills: ["PostgreSQL", "Drizzle ORM", "Prisma", "Neon Serverless", "Schema Design"],
      color: "from-amber-500/20 to-orange-500/10 border-amber-400/30"
    },
    {
      category: "Real-Time & Modern Frontend",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none stroke-[2]">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      skills: ["WebSockets", "Next.js 14/16", "React.js", "Tailwind CSS", "Web Audio API"],
      color: "from-purple-500/20 to-indigo-500/10 border-purple-400/30"
    }
  ];

  return (
    <section id="aboutMe" className="w-full bg-[#276749] text-white pt-8 sm:pt-10 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 relative overflow-hidden select-none">

      {/* Decorative Golden Bar separating sections at top edge */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 sm:w-96 h-2.5 sm:h-3 bg-[#E5A823] rounded-b-xl border border-black/20 shadow-md"></div>

      <div className="max-w-6xl w-full mx-auto flex flex-col items-center pt-6 sm:pt-8">

        {/* Main 2-Column Content */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start relative z-10 pb-6 sm:pb-8">

          {/* Left Column: Heading & Tech Domain Stack Badges */}
          <div className="lg:col-span-6 flex flex-col">
            <h2 className="doodle-font text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-4 sm:mb-6">
              Areas of interest
            </h2>

            {/* Interactive Tech Architecture Stack Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 w-full">
              {domains.map((dom) => (
                <div 
                  key={dom.category}
                  onClick={() => playSound && playSound("pop")}
                  className={`p-4 rounded-2xl bg-gradient-to-br ${dom.color} backdrop-blur-md border shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl cursor-default`}
                >
                  <div className="flex items-center gap-2 mb-2 text-white">
                    {dom.icon}
                    <h3 className="font-semibold text-xs tracking-wide">{dom.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {dom.skills.map((s) => (
                      <span 
                        key={s} 
                        className="px-2 py-0.5 rounded-lg text-[10px] font-medium bg-black/40 text-emerald-100 border border-white/10"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Areas of Interest narrative from CV */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full pt-4">

            <div className="space-y-5 text-emerald-50 text-base sm:text-lg leading-relaxed max-w-xl">
              <p>
                I'm passionate about <strong>scalable distributed systems</strong>, <strong>high-throughput backend architecture</strong>, and resilient API design. From relational schema engineering in PostgreSQL to microservices in Spring Boot and Node.js, I thrive on writing clean, production-grade code.
              </p>

              <p>
                I'm deeply captivated by <strong>Generative AI & LLM application pipelines</strong> — building multi-stage reasoning engines, structured output schemas, and low-latency agentic workflows with Google Gemini and modern vector retrieval systems.
              </p>

              <p>
                Beyond backend internals, I love crafting <strong>zero-dependency interactive developer experiences</strong>, real-time WebSocket state meshes, and tactile web interfaces with procedural audio and fluid mechanics.
              </p>
            </div>

          </div>

        </div>

        {/* The Crisp White Horizontal Line */}
        <div className="w-full h-[2.5px] bg-white rounded-full mt-6 relative z-10"></div>

      </div>
    </section>
  );
}
