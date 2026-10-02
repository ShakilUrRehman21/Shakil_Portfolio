"use client";
import React, { useState } from "react";

export default function ProjectsSection({ theme, onSelectProject, playSound }) {
  const [activeTab, setActiveTab] = useState("all"); // "all", "ai", "fullstack"

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    playSound && playSound("pop");
  };

  const isDark = theme === "dark";
  const tabColor = isDark ? "#FFFFFF" : "#000000";

  return (
    <section id="projects" className="w-full pt-6 sm:pt-8 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 flex justify-center">
      <div className="max-w-6xl w-full">
        
        {/* Centered Top Filter Tabs */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8 mb-8 sm:mb-12 flex-wrap">
          {/* "Featured Projects" Tab */}
          <button
            onClick={() => handleTabChange("all")}
            className="relative pb-2 font-semibold text-sm sm:text-base md:text-lg transition-colors cursor-pointer"
            style={{ color: tabColor }}
          >
            <span>All Projects</span>
            {activeTab === "all" && (
              <span className="absolute bottom-0 left-0 right-0 h-[3.5px] bg-[#E5A823] rounded-full"></span>
            )}
          </button>

          {/* "AI & LLM Systems" Tab */}
          <button
            onClick={() => handleTabChange("ai")}
            className="relative pb-2 font-semibold text-sm sm:text-base md:text-lg flex items-center gap-2 transition-colors cursor-pointer"
            style={{ color: tabColor }}
          >
            <span>AI & LLM Systems</span>
            {activeTab === "ai" && (
              <span className="absolute bottom-0 left-0 right-0 h-[3.5px] bg-[#E5A823] rounded-full"></span>
            )}
          </button>

          {/* "Distributed & Web" Tab */}
          <button
            onClick={() => handleTabChange("fullstack")}
            className="relative pb-2 font-semibold text-sm sm:text-base md:text-lg flex items-center gap-2 transition-colors cursor-pointer"
            style={{ color: tabColor }}
          >
            <span>Real-time & Full Stack</span>
            {activeTab === "fullstack" && (
              <span className="absolute bottom-0 left-0 right-0 h-[3.5px] bg-[#E5A823] rounded-full"></span>
            )}
          </button>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* ================= CARD 1: CourseGen AI ================= */}
          {(activeTab === "all" || activeTab === "ai") && (
            <div 
              onClick={() => {
                playSound && playSound("pop");
                onSelectProject && onSelectProject("coursegen");
              }}
              className="group relative rounded-3xl bg-[#0F172A] text-white p-5 sm:p-7 md:p-8 flex flex-col justify-between overflow-hidden shadow-lg border border-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer min-h-[420px] sm:min-h-[460px]"
            >
              {/* Top Badges */}
              <div className="flex items-center justify-between mb-4 gap-2 flex-wrap">
                <span className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Featured AI Platform
                </span>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                    Next.js 14
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                    Gemini API
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="mb-4 z-10">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 text-white flex items-center gap-2">
                  CourseGen AI
                  <span className="text-xs font-normal text-emerald-400 font-mono">v1.0 Live</span>
                </h3>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-md">
                  Autonomous AI course creation platform generating complete multi-chapter curricula with integrated YouTube educational search, Neon PostgreSQL & Clerk.
                </p>
              </div>

              {/* Visual: Curriculum Dashboard UI Mockup */}
              <div className="relative w-full h-56 flex items-end justify-center mt-2">
                <div className="w-full max-w-[390px] h-52 bg-slate-900 border-2 border-slate-700/80 rounded-t-2xl p-3 shadow-2xl flex flex-col justify-between transition-transform group-hover:-translate-y-1">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="text-xs font-bold text-slate-200">AI Curriculum Studio</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                      Gemini Flash
                    </span>
                  </div>

                  <div className="space-y-2 my-2">
                    <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-base">📚</span>
                        <div>
                          <p className="text-xs font-semibold text-white">Full-Stack Distributed Systems</p>
                          <p className="text-[9px] text-slate-400">5 Chapters • Targeted Video Matched</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded">100% Ready</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/40 text-slate-300">
                        <span className="block text-[8px] text-slate-400 uppercase">Database</span>
                        <span className="font-semibold text-white">Neon PostgreSQL</span>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/40 text-slate-300">
                        <span className="block text-[8px] text-slate-400 uppercase">ORM</span>
                        <span className="font-semibold text-white">Drizzle ORM</span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full bg-slate-800/90 rounded-lg p-1.5 flex justify-between items-center text-[10px] text-slate-300 border border-slate-700/50">
                    <span>⚡ Chapter Generation with Code & Concepts</span>
                    <span className="text-emerald-400 font-semibold">View Case Study →</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= CARD 2: TorqueVault ================= */}
          {(activeTab === "all" || activeTab === "fullstack") && (
            <div 
              onClick={() => {
                playSound && playSound("pop");
                onSelectProject && onSelectProject("torquevault");
              }}
              className="group relative rounded-3xl bg-[#141217] text-white p-5 sm:p-7 md:p-8 flex flex-col justify-between overflow-hidden shadow-lg border border-[#3b0d13] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer min-h-[420px] sm:min-h-[460px]"
            >
              {/* Top Badges */}
              <div className="flex items-center justify-between mb-4 gap-2 flex-wrap">
                <span className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-[#75020f]/40 text-[#ff4d64] border border-[#e61932]/40">
                  Web Audio Synthesizer
                </span>
                <div className="flex items-center gap-2">
                  <span className="px-2 sm:px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-neutral-900 text-neutral-300 border border-neutral-700">
                    Vanilla JS
                  </span>
                  <span className="px-2 sm:px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-neutral-900 text-neutral-300 border border-neutral-700">
                    60 FPS HUD
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="mb-4 z-10">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 text-white flex items-center gap-2">
                  TorqueVault
                  <span className="text-xs font-normal text-rose-400 font-mono">9,200 RPM</span>
                </h3>
                <p className="text-sm md:text-base text-neutral-300 leading-relaxed max-w-md">
                  Pinnacle supercar telemetry platform with procedural Web Audio V8 engine acoustics, 3D tilt perspective cards, and head-to-head 1/4 mile drag strip showdowns.
                </p>
              </div>

              {/* Visual: Tachometer Gauge & Engine HUD */}
              <div className="relative w-full h-56 flex items-center justify-center">
                <div className="relative w-52 h-44 bg-[#19171b] rounded-2xl border border-red-950/80 p-3 shadow-2xl flex flex-col items-center justify-between transition-transform group-hover:scale-105">
                  <div className="w-full flex justify-between items-center text-[10px] text-neutral-400 border-b border-neutral-800 pb-1.5 font-mono">
                    <span className="text-red-500 font-bold">● V8 ACOUSTICS</span>
                    <span>1/4 MILE TRAP</span>
                  </div>

                  <div className="relative w-28 h-28 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                      <circle cx="50" cy="50" r="40" stroke="#331417" strokeWidth="8" fill="none" />
                      <circle 
                        cx="50" cy="50" r="40" 
                        stroke="#e61932" 
                        strokeWidth="8" 
                        fill="none"
                        strokeDasharray="251.2"
                        strokeDashoffset="75"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xl font-mono font-bold text-white tracking-wider">8,450</span>
                      <span className="text-[9px] text-neutral-400 font-mono uppercase">RPM</span>
                    </div>
                  </div>

                  <div className="w-full flex justify-between text-[9px] font-mono text-neutral-300 bg-[#2b0307]/60 px-2 py-1 rounded">
                    <span>GEAR: <strong className="text-white">4th</strong></span>
                    <span className="text-rose-400 font-semibold">208 MPH</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= CARD 3: SyncWorld ================= */}
          {(activeTab === "all" || activeTab === "fullstack") && (
            <div 
              onClick={() => {
                playSound && playSound("pop");
                onSelectProject && onSelectProject("syncworld");
              }}
              className="group relative rounded-3xl bg-[#090D16] text-white p-5 sm:p-7 md:p-8 flex flex-col justify-between overflow-hidden shadow-lg border border-indigo-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer min-h-[420px] sm:min-h-[460px]"
            >
              {/* Top Badges */}
              <div className="flex items-center justify-between mb-4 gap-2 flex-wrap">
                <span className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Real-Time Distributed System
                </span>
                <div className="flex items-center gap-2">
                  <span className="px-2 sm:px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-slate-900 text-slate-300 border border-slate-700">
                    WebSockets
                  </span>
                  <span className="px-2 sm:px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-slate-900 text-slate-300 border border-slate-700">
                    OpenJDK 21
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="mb-4 z-10">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 text-white flex items-center gap-2">
                  SyncWorld
                  <span className="text-xs font-normal text-indigo-400 font-mono">&lt;60ms Sync</span>
                </h3>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-md">
                  Collaborative multi-tenant workspace with real-time vector whiteboard, remote cursor mesh, and an in-browser sandbox IDE with javac compiler diagnostics.
                </p>
              </div>

              {/* Visual: Collaborative Code & Whiteboard Split */}
              <div className="relative w-full h-56 flex items-end justify-center mt-2">
                <div className="w-full max-w-[400px] h-52 bg-slate-950 border border-indigo-900/60 rounded-t-2xl p-3 shadow-2xl flex flex-col justify-between transition-transform group-hover:-translate-y-1">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></span>
                      <span className="text-xs font-mono font-bold text-slate-200">Main.java • ws://connected</span>
                    </div>
                    <div className="flex items-center -space-x-1">
                      <span className="w-5 h-5 rounded-full bg-emerald-500 text-[9px] flex items-center justify-center font-bold">MV</span>
                      <span className="w-5 h-5 rounded-full bg-amber-500 text-[9px] flex items-center justify-center font-bold">ER</span>
                    </div>
                  </div>

                  <div className="bg-slate-900/90 rounded-lg p-2.5 font-mono text-[10px] text-slate-300 border border-slate-800 my-2 space-y-1">
                    <p className="text-indigo-400 font-semibold">public class Main &#123;</p>
                    <p className="pl-3 text-slate-300">public static void main(String[] args) &#123;</p>
                    <p className="pl-6 text-emerald-400">System.out.println("SyncWorld Mesh OK"); // javac clean</p>
                    <p className="pl-3 text-slate-300">&#125;</p>
                    <p className="text-indigo-400">&#125;</p>
                  </div>

                  <div className="w-full bg-indigo-950/60 rounded p-1.5 flex justify-between text-[10px] text-indigo-200 border border-indigo-900/50">
                    <span>📡 Multi-peer Vector Canvas & Remote Cursors</span>
                    <span className="text-indigo-400 font-bold">Inspect Details →</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= CARD 4: PrepMaster Studio ================= */}
          {(activeTab === "all" || activeTab === "ai") && (
            <div 
              onClick={() => {
                playSound && playSound("pop");
                onSelectProject && onSelectProject("prepmaster");
              }}
              className="group relative rounded-3xl bg-[#0F141C] text-white p-5 sm:p-7 md:p-8 flex flex-col justify-between overflow-hidden shadow-lg border border-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer min-h-[420px] sm:min-h-[460px]"
            >
              {/* Top Badges */}
              <div className="flex items-center justify-between mb-4 gap-2 flex-wrap">
                <span className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                  AI Mock Interview Studio
                </span>
                <div className="flex items-center gap-2">
                  <span className="px-2 sm:px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-slate-900 text-slate-300 border border-slate-700">
                    Next.js 15
                  </span>
                  <span className="px-2 sm:px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-slate-900 text-slate-300 border border-slate-700">
                    Speech-to-Text
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="mb-4 z-10">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 text-white flex items-center gap-2">
                  PrepMaster Studio
                  <span className="text-xs font-normal text-sky-400 font-mono">STAR Method</span>
                </h3>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-md">
                  Executive technical and behavioral interview platform with continuous speech-to-text, live waveform telemetry, and automated Gemini 1.5 Flash diagnostic scorecards.
                </p>
              </div>

              {/* Visual: Live Audio Waveform & Scorecard HUD */}
              <div className="relative w-full h-56 flex items-end justify-center mt-2">
                <div className="w-full max-w-[400px] h-52 bg-slate-900 border border-sky-900/50 rounded-t-2xl p-3 shadow-2xl flex flex-col justify-between transition-transform group-hover:-translate-y-1">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-xs font-bold text-sky-300">Live Mock Simulation</span>
                    <span className="px-2 py-0.5 rounded bg-sky-950 text-sky-400 text-[10px] font-mono border border-sky-800">
                      Mic Recording
                    </span>
                  </div>

                  <div className="my-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] text-slate-400">Audio Speech Recognition</span>
                      <span className="text-[10px] text-emerald-400 font-bold">Score: 92/100</span>
                    </div>
                    {/* Audio wave simulation bars */}
                    <div className="flex items-center justify-center gap-1.5 h-8">
                      {[40, 70, 90, 60, 100, 75, 45, 85, 95, 65, 30, 80, 50].map((h, i) => (
                        <span 
                          key={i} 
                          className="w-1.5 bg-sky-400 rounded-full transition-all duration-300"
                          style={{ height: `${h}%` }}
                        ></span>
                      ))}
                    </div>
                  </div>

                  <div className="w-full bg-slate-950/80 rounded p-1.5 flex justify-between text-[10px] text-slate-300 border border-slate-800">
                    <span>📋 STAR Framework Diagnostic Feedback</span>
                    <span className="text-sky-400 font-semibold">View Rubric →</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= CARD 5: MilkMart Platform ================= */}
          {(activeTab === "all" || activeTab === "fullstack") && (
            <div 
              onClick={() => {
                playSound && playSound("pop");
                onSelectProject && onSelectProject("milkmart");
              }}
              className="group relative rounded-3xl bg-[#0E1B15] text-white p-5 sm:p-7 md:p-8 flex flex-col justify-between overflow-hidden shadow-lg border border-emerald-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer min-h-[420px] sm:min-h-[460px] md:col-span-2"
            >
              {/* Top Badges */}
              <div className="flex items-center justify-between mb-4 gap-2 flex-wrap">
                <span className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Django E-Commerce System
                </span>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2 sm:px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-neutral-900 text-neutral-300 border border-neutral-700">
                    Python 3 / Django
                  </span>
                  <span className="px-2 sm:px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-neutral-900 text-neutral-300 border border-neutral-700">
                    Razorpay Gateway
                  </span>
                  <span className="px-2 sm:px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-neutral-900 text-neutral-300 border border-neutral-700 hidden sm:inline">
                    Cold-Chain Logistics
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="mb-4 z-10 max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 text-white flex items-center gap-2">
                  MilkMart Platform
                  <span className="text-xs font-normal text-emerald-400 font-mono">Full Stack E-Commerce</span>
                </h3>
                <p className="text-sm md:text-base text-emerald-100/90 leading-relaxed">
                  Farm-fresh dairy commerce ecosystem featuring cold-chain morning fulfillment, dual payment checkout (Razorpay + zero-failure instant checkout), dynamic AJAX carts, and customer order lifecycle tracking.
                </p>
              </div>

              {/* Visual: Order Lifecycle Stepper & Dashboard */}
              <div className="relative w-full h-44 flex items-center justify-center mt-2">
                <div className="w-full max-w-2xl bg-neutral-950/80 border border-emerald-900/60 rounded-2xl p-3 sm:p-4 shadow-xl flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[11px] sm:text-xs text-neutral-400 border-b border-neutral-800 pb-2 font-mono">
                    <span className="text-emerald-400 font-bold truncate">ORDER FULFILLMENT PIPELINE</span>
                    <span className="whitespace-nowrap">100% ORGANIC</span>
                  </div>

                  {/* 4-Stage Lifecycle Stepper */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-2.5 sm:my-3 text-center">
                    <div className="p-1.5 sm:p-2 rounded-xl bg-emerald-950/80 border border-emerald-800/80">
                      <span className="text-emerald-400 font-bold text-[11px] sm:text-xs block">✓ Accepted</span>
                      <span className="text-[8px] sm:text-[9px] text-neutral-400">Order Placed</span>
                    </div>
                    <div className="p-1.5 sm:p-2 rounded-xl bg-emerald-950/80 border border-emerald-800/80">
                      <span className="text-emerald-400 font-bold text-[11px] sm:text-xs block">✓ Packed</span>
                      <span className="text-[8px] sm:text-[9px] text-neutral-400">4°C Cold Chain</span>
                    </div>
                    <div className="p-1.5 sm:p-2 rounded-xl bg-emerald-900/40 border border-emerald-700/60 animate-pulse">
                      <span className="text-emerald-300 font-bold text-[11px] sm:text-xs block">🚚 On The Way</span>
                      <span className="text-[8px] sm:text-[9px] text-emerald-200">Morning Express</span>
                    </div>
                    <div className="p-1.5 sm:p-2 rounded-xl bg-neutral-900 border border-neutral-800">
                      <span className="text-neutral-400 font-bold text-[11px] sm:text-xs block">Delivered</span>
                      <span className="text-[8px] sm:text-[9px] text-neutral-500">Doorstep Verification</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[9px] sm:text-[10px] text-emerald-300">
                    <span className="truncate">⚡ Production: Gunicorn + Docker</span>
                    <span className="font-bold underline hover:text-white whitespace-nowrap ml-2">Explore Case Study →</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
