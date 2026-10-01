"use client";
import React from "react";

export default function ResumeModal({ isOpen, onClose, playSound }) {
  if (!isOpen) return null;

  const name = "Shakil Ur Rehman";
  const email = "rehmanshakil21@gmail.com";
  const phone = "+91 8750250416";
  const linkedin = "https://linkedin.com/in/shakilurrehman21";
  const github = "https://github.com/shakilurrehman21";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-neutral-900 rounded-3xl p-6 md:p-10 shadow-2xl border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100"
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

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-6 mb-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {name}
            </h2>
            <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mt-1">
              Full Stack Software Engineer • Java, Spring Boot & Generative AI
            </p>
            <p className="text-xs text-neutral-500 mt-0.5 flex flex-wrap gap-2">
              <span>{phone}</span>
              <span>•</span>
              <a href={`mailto:${email}`} className="underline hover:text-emerald-500">{email}</a>
              <span>•</span>
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-500">LinkedIn</a>
              <span>•</span>
              <a href={github} target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-500">GitHub</a>
            </p>
          </div>

          <a
            href="https://drive.google.com/file/d/1yeKZaAb75Sex-G4jGA4tRfbsW6JFS0Jj/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playSound && playSound("pop")}
            className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wide shadow-md transition-transform active:scale-95 flex items-center gap-2"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-[2.2]">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            <span>Open PDF</span>
          </a>
        </div>

        {/* Experience & Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          
          {/* Main 2 Cols: Experience & Featured Projects */}
          <div className="md:col-span-2 space-y-6">
            
            {/* Experience */}
            <div>
              <h3 className="font-bold uppercase tracking-wider text-xs text-neutral-400 mb-3">
                Internship Experience
              </h3>
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-neutral-900 dark:text-white">
                    Java Intern <span className="font-normal text-neutral-500">@ SoftPro India Pvt. Limited</span>
                  </h4>
                  <span className="text-xs text-neutral-500">Aug 2024 – Sep 2024</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  <li>Developed a Spring Boot-based Gyan Portal supporting 500+ students and 50+ teachers.</li>
                  <li>Designed RESTful APIs for assignment management, progress tracking, and query handling.</li>
                  <li>Optimized backend logic and database interactions for scalable high-concurrency performance.</li>
                </ul>
              </div>
            </div>

            {/* Core Featured Projects */}
            <div>
              <h3 className="font-bold uppercase tracking-wider text-xs text-neutral-400 mb-3">
                Key Engineering Projects
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-neutral-900 dark:text-white text-xs">
                    RepoLens – AI-Powered Intelligence Platform
                  </h4>
                  <p className="text-[11px] text-neutral-500 mb-1">Next.js 14, PostgreSQL, Drizzle ORM, Gemini API, Clerk</p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    <li>Designed SaaS with 5-stage analysis pipeline to evaluate GitHub repositories end-to-end.</li>
                    <li>Engineered weighted scoring engine converting raw AI output into single actionable quality scores.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-neutral-900 dark:text-white text-xs">
                    CrashLedger – Incident Management Platform
                  </h4>
                  <p className="text-[11px] text-neutral-500 mb-1">Next.js 16, TypeScript, PostgreSQL, Drizzle ORM, Clerk</p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    <li>Built incident management enforcing state transitions across a 4-stage lifecycle (open → archived).</li>
                    <li>Designed 10-table PostgreSQL schema with 4-tier role-based access control (RBAC).</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-neutral-900 dark:text-white text-xs">
                    Sustainify – System for Sustainable Commerce
                  </h4>
                  <p className="text-[11px] text-neutral-500 mb-1">Next.js 14, TypeScript, Prisma, Gemini API, Zod</p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    <li>Architected modular platform spanning 4 AI systems: categorization, proposals, impact, and chat.</li>
                    <li>Built categorization engine validating output against 10 categories via Gemini + Zod schemas.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar 1 Col: Education & Skills */}
          <div className="space-y-6 md:border-l md:border-neutral-200 md:dark:border-neutral-800 md:pl-6">
            <div>
              <h3 className="font-bold uppercase tracking-wider text-xs text-neutral-400 mb-2">
                Education
              </h3>
              <p className="font-bold text-neutral-800 dark:text-neutral-200 text-xs">
                Noida Institute of Engineering & Technology (NIET)
              </p>
              <p className="text-xs text-neutral-500">
                B.Tech in Computer Science and Engineering
              </p>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
                CGPA: 8.97 / 10 • 2021 – 2025
              </p>
            </div>

            <div>
              <h3 className="font-bold uppercase tracking-wider text-xs text-neutral-400 mb-2">
                Technical Skills
              </h3>
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-[10px] font-bold text-neutral-400 block uppercase">Languages</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {["Java", "Python", "JavaScript", "SQL"].map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-[11px]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-neutral-400 block uppercase">Backend & Architecture</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {["Spring Boot", "Node.js", "REST APIs", "System Design", "Microservices"].map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-[11px]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-neutral-400 block uppercase">Frontend & AI/ML</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {["React.js", "Next.js", "Tailwind CSS", "Generative AI", "Gemini API"].map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-[11px]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold uppercase tracking-wider text-xs text-neutral-400 mb-2">
                Achievements
              </h3>
              <ul className="text-xs text-neutral-600 dark:text-neutral-300 space-y-1 leading-relaxed">
                <li>🏆 <strong>Won Coding Quest</strong> by REBOOT-NIET (2024)</li>
                <li>☁️ <strong>Google Cloud Study Jam</strong> (2023)</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
