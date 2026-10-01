"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import animationData from "../../public/hero-animation.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function CharacterAnimation({ className = "" }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div 
      className={`relative flex items-end select-none ${className}`}
      style={{ aspectRatio: "2795 / 3343" }}
    >
      {mounted ? (
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: "100%", height: "100%" }}
          className="w-full h-full object-contain pointer-events-none"
        />
      ) : (
        <img
          src="/character.png"
          alt="Siddharth in armchair"
          className="w-full h-full object-contain pointer-events-none"
        />
      )}
    </div>
  );
}
