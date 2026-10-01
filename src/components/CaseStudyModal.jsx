"use client";
import React from "react";

const projectDetails = {
  coursegen: {
    title: "CourseGen AI",
    category: "Autonomous AI Curriculum & Video Synthesis Platform",
    badges: ["Next.js 14", "Gemini API", "PostgreSQL", "Drizzle ORM", "Clerk"],
    overview: "Production-grade SaaS platform transforming raw educational topics into comprehensive, multi-chapter curricula with integrated video discovery.",
    role: "Full Stack Engineer & AI Pipeline Architect",
    impact: "Built an end-to-end curriculum generator featuring dynamic chapter generation with Gemini, automated YouTube educational video pairing, and Clerk authentication.",
    liveUrl: "https://course-gen-ai-ten.vercel.app",
    githubUrl: "https://github.com/ShakilUrRehman21/CourseGen_AI",
    keyChallenges: [
      "Handling Gemini token rate limits and model deprecations with automated fallback chains.",
      "Parsing non-deterministic LLM JSON outputs reliably without breaking runtime UI state.",
      "Suppressing YouTube Data API v3 quota exhausts gracefully without halting chapter synthesis."
    ],
    highlights: [
      "Automated multi-tier fallback between gemini-flash-latest and lite variants.",
      "Normalized Neon PostgreSQL relational schema for courses and sequential chapters using Drizzle ORM.",
      "Firebase Cloud Storage asset integration for custom banner uploads and public shareable study links."
    ]
  },
  torquevault: {
    title: "TorqueVault",
    category: "High-Performance Supercar Telemetry & Audio Discovery",
    badges: ["Web Audio API", "Vanilla JavaScript", "3D Parallax", "Zero Dependencies"],
    overview: "An ultra-immersive automotive discovery platform featuring procedural V8/V10 engine acoustic synthesis, an interactive digital tachometer HUD, and a drag showdown simulator.",
    role: "Frontend Engineer & Audio Synthesizer Designer",
    impact: "Synthesized realistic engine acoustics dynamically in real-time with zero external MP3s, achieving instant first contentful paint and fluid 60 FPS interactions.",
    liveUrl: "https://torquevault.vercel.app/",
    githubUrl: "https://github.com/ShakilUrRehman21/TorqueVault",
    keyChallenges: [
      "Procedural harmonic oscillator synthesis modeling dynamic engine RPM from 1,000 to 9,200 RPM.",
      "Simulating exhaust overrun crackles and pops on throttle release using waveshaper distortion.",
      "Calculating physics-driven 1/4 mile drag strip telemetry, ET trap speeds, and G-force curves."
    ],
    highlights: [
      "Interactive gas pedal HUD with responsive keyboard/mouse throttle control.",
      "Christmas tree drag staging sequence with dual vehicle speed run comparison.",
      "Gyroscope and mouse-tracked 3D card parallax with holographic lighting reflections."
    ]
  },
  syncworld: {
    title: "SyncWorld",
    category: "Real-Time Distributed Collaborative Workspace & Compiler Sandbox",
    badges: ["WebSockets", "Node.js", "Vector Canvas", "Compiler Diagnostics", "Docker"],
    overview: "High-performance collaborative platform combining a multi-tenant vector whiteboard, a multi-language IDE with compiler diagnostics, and an immutable audit trail.",
    role: "Distributed Systems & Full Stack Engineer",
    impact: "Engineered sub-60ms multi-peer canvas and code editing over native WebSockets with OpenJDK Java compiler error parsing and persistent disk storage.",
    liveUrl: "https://sync-world.onrender.com/",
    githubUrl: "https://github.com/ShakilUrRehman21/Sync_World",
    keyChallenges: [
      "Synchronizing high-frequency vector pen strokes and cursor coordinates without packet flooding.",
      "Building in-browser compiler diagnostics for Java (OpenJDK 21 javac), Python, C++, and JavaScript V8 isolates.",
      "Maintaining state consistency across multi-tab reconnects with atomic disk persistence."
    ],
    highlights: [
      "Multi-tenant vector canvas with smoothed cubic Bézier interpolation and remote cursor presence.",
      "Detailed javac compiler error parsing with line/column carets, warning counters, and exit codes.",
      "Audit mutation event stream tracking workspace actions with switchable team personas."
    ]
  },
  prepmaster: {
    title: "PrepMaster Studio",
    category: "AI Technical & Behavioral Mock Interview Studio",
    badges: ["Next.js 15", "Gemini 1.5 Flash", "Speech-to-Text", "Neon Postgres", "Drizzle ORM"],
    overview: "Executive-grade mock interview simulation room calibrating questions by seniority, tech stack, and STAR-method rubrics with instant diagnostic scorecards.",
    role: "Full Stack AI Engineer",
    impact: "Built a realistic interview simulation combining real-time speech recognition, synthetic text-to-speech narration, and automated Gemini evaluation rubrics.",
    liveUrl: "https://prep-master-studio.vercel.app",
    githubUrl: "https://github.com/ShakilUrRehman21/PrepMaster_Studio",
    keyChallenges: [
      "Synchronizing continuous browser Web Speech recognition with live waveform visualization.",
      "Engineering low-temperature Gemini prompt templates for objective STAR-method scoring.",
      "Designing a private client-side webcam proctoring simulation with zero video data egress."
    ],
    highlights: [
      "Role and seniority calibration spanning frontend, backend, system design, and leadership tracks.",
      "Executive diagnostic scorecards with candidate transcription, benchmark answers, and feedback notes.",
      "Persistent Neon PostgreSQL interview archive with search and technology filtering."
    ]
  },
  milkmart: {
    title: "MilkMart Platform",
    category: "Cold-Chain Dairy E-Commerce & Order Management System",
    badges: ["Django", "Python 3", "PostgreSQL", "Razorpay", "WhiteNoise", "Docker"],
    overview: "Full-featured farm-fresh dairy e-commerce web platform engineered with Django, featuring morning cold-chain delivery management and resilient payments.",
    role: "Backend & Full Stack Engineer",
    impact: "Developed an organic e-commerce ecosystem with automated category filtering, dynamic cart calculations, multi-stage order tracking, and production-ready cloud deployment.",
    liveUrl: "https://milkmart-platform.onrender.com/",
    githubUrl: "https://github.com/ShakilUrRehman21/MilkMart_Platform",
    keyChallenges: [
      "Architecting a multi-state order fulfillment pipeline (Accepted -> Packed -> Out for Delivery -> Delivered).",
      "Implementing dual-mode checkout ensuring zero transaction drop-off with Razorpay and instant demo checkout.",
      "Configuring 12-factor production deployment with WhiteNoise asset compression and Gunicorn WSGI."
    ],
    highlights: [
      "Dynamic AJAX-driven cart with free-delivery progress threshold calculations.",
      "Customer dashboard with interactive order tracking stepper and multi-address management.",
      "Full administrative portal for inventory, discount codes, and delivery schedules."
    ]
  }
};

export default function CaseStudyModal({ projectId, onClose, playSound }) {
  if (!projectId) return null;
  const project = projectDetails[projectId] || projectDetails.coursegen;

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

        {/* Badges */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.badges.map((b) => (
            <span key={b} className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
              {b}
            </span>
          ))}
        </div>

        <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-1 text-neutral-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-3">
          {project.category}
        </p>

        {/* Action Buttons: Live Demo & GitHub */}
        <div className="flex items-center gap-3 mb-5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSound && playSound("pop")}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs shadow-sm transition-transform active:scale-95"
            >
              <span>🔗 Live Demo</span>
              <span>↗</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSound && playSound("pop")}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-neutral-900 hover:bg-black dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900 font-medium text-xs shadow-sm transition-transform active:scale-95"
            >
              <span>🐙 GitHub Repo</span>
              <span>↗</span>
            </a>
          )}
        </div>

        <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
          {project.overview}
        </p>

        <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 mb-6 text-xs">
          <div>
            <span className="text-neutral-400 uppercase tracking-wider font-semibold block mb-0.5">Role</span>
            <span className="font-bold text-neutral-800 dark:text-neutral-200">{project.role}</span>
          </div>
          <div>
            <span className="text-neutral-400 uppercase tracking-wider font-semibold block mb-0.5">Key Impact</span>
            <span className="font-bold text-neutral-800 dark:text-neutral-200">{project.impact}</span>
          </div>
        </div>

        {/* Key Challenges */}
        <div className="mb-6">
          <h4 className="text-xs uppercase font-bold tracking-wider text-neutral-400 mb-2">
            Key Engineering Challenges
          </h4>
          <ul className="list-disc list-inside space-y-1.5 text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {project.keyChallenges.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Solution Highlights */}
        <div>
          <h4 className="text-xs uppercase font-bold tracking-wider text-neutral-400 mb-2">
            Technical Highlights
          </h4>
          <ul className="list-disc list-inside space-y-1.5 text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {project.highlights.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
