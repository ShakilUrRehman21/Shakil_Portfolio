"use client";
import React, { useState } from "react";

export default function Footer({ playSound }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !message) return;
    playSound && playSound("pop");
    setSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setMessage("");
      setSubmitted(false);
    }, 4000);
  };

  return (
    <footer className="relative z-30 w-full bg-[#000000] text-white py-16 px-6 md:px-16 selection:bg-neutral-800 selection:text-white border-t border-neutral-900">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Feel free to reach out + Links */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white mb-6">
              Feel free to reach out!
            </h2>

            <p className="text-base sm:text-lg text-white mb-6 font-normal">
              I'm currently open to exploring new opportunities.
            </p>

            <p className="text-sm text-neutral-300 leading-relaxed max-w-md">
              <strong className="text-white font-semibold">P.S.</strong> My email has been flooded lately, but I reply quicker if you reach out via this message box or say hello on LinkedIn!
            </p>
          </div>

          {/* Social Links on Bottom Left matching Image 3 */}
          <div className="flex items-center gap-8 mt-12 pt-4 text-base font-normal text-white">
            <a 
              href="mailto:rehmanshakil21@gmail.com" 
              className="hover:underline transition-opacity hover:opacity-80"
              onClick={() => playSound && playSound("pop")}
            >
              Email
            </a>
            <a 
              href="https://linkedin.com/in/shakilurrehman21" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline transition-opacity hover:opacity-80"
              onClick={() => playSound && playSound("pop")}
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/shakilurrehman21" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline transition-opacity hover:opacity-80"
              onClick={() => playSound && playSound("pop")}
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form + Copyright on Bottom Right */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Your Email */}
            <div>
              <label className="block text-xs text-neutral-400 mb-1.5 font-normal">
                Your Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="recruiter@company.com"
                className="w-full bg-[#18181B] border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs text-neutral-400 mb-1.5 font-normal">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full bg-[#18181B] border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 resize-none transition-colors"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              onClick={() => playSound && playSound("pop")}
              className="w-full py-3 rounded-xl bg-[#27272A] hover:bg-white hover:text-black text-white font-medium text-sm transition-all duration-200 active:scale-[0.99] shadow-md flex items-center justify-center gap-2"
            >
              {submitted ? "Message Sent! ✨" : "Submit"}
            </button>
          </form>

          {/* Copyright on Bottom Right */}
          <div className="flex justify-end mt-12 pt-4">
            <span className="text-sm text-neutral-300 font-normal">
              © Shakil Ur Rehman
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
