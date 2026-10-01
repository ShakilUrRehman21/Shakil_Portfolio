"use client";
import React from "react";

export default function PlayModal({ isOpen, onClose, playSound }) {
  if (!isOpen) return null;

  const coreCompetencies = [
    {
      title: "Backend Architecture & APIs",
      level: "Core Specialization",
      description: "Designing high-throughput, maintainable microservices and RESTful APIs with strict contract enforcement, rate-limiting, and resilient state transitions.",
      technologies: ["Java", "Spring Boot", "Node.js", "Express", "REST APIs", "System Design"],
      badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
    },
    {
      title: "Generative AI & LLM Systems",
      level: "Production Experience",
      description: "Prompt-driven pipelines, multi-model fallback chains, temperature calibration, and Zod schema enforcement for deterministic structured AI outputs.",
      technologies: ["Google Gemini API", "Prompt Engineering", "Zod", "Autonomous Agents", "RAG Patterns"],
      badgeColor: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20"
    },
    {
      title: "Database & Relational Design",
      level: "Advanced",
      description: "Multi-table relational schema modeling, role-based access control (RBAC), connection pooling, migrations, and query optimization.",
      technologies: ["PostgreSQL", "Neon Serverless", "Drizzle ORM", "Prisma", "SQL Indexing"],
      badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
    },
    {
      title: "Full-Stack Web & Real-Time Meshes",
      level: "Hands-on",
      description: "Fluid reactive user interfaces integrated seamlessly with WebSocket networks, procedural audio synthesis, and secure auth session management.",
      technologies: ["Next.js (App Router)", "React.js", "Tailwind CSS", "WebSockets", "Clerk Auth"],
      badgeColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white dark:bg-neutral-900 rounded-3xl p-6 md:p-8 shadow-2xl border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100"
        role="dialog"
      >
        {/* Close Button */}
        <button
          onClick={() => {
            playSound && playSound("pop");
            onClose();
          }}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 flex items-center justify-center text-neutral-700 dark:text-neutral-300 font-bold transition-transform active:scale-95"
        >
          ✕
        </button>

        <div className="flex items-center gap-3 mb-1">
          <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-lg">
            ⚡
          </div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Technical Expertise
          </h3>
        </div>
        
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mb-6 max-w-lg">
          An overview of my engineering competencies, architectural design principles, and hands-on production tooling.
        </p>

        {/* Expertise Cards Grid */}
        <div className="space-y-4">
          {coreCompetencies.map((comp) => (
            <div 
              key={comp.title}
              className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700/60 transition-transform hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                <h4 className="font-bold text-sm text-neutral-900 dark:text-white">
                  {comp.title}
                </h4>
                <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${comp.badgeColor}`}>
                  {comp.level}
                </span>
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
                {comp.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {comp.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Metrics Pill */}
        <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center text-xs text-neutral-500">
          <span>Continuous Learning & Code Craftsmanship</span>
          <span className="font-semibold text-emerald-600 dark:text-emerald-400">Available for Opportunities</span>
        </div>

      </div>
    </div>
  );
}
