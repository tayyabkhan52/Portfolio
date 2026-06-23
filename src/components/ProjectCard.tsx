"use client";

import { useState, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  name: string;
  type: string;
  description: string;
  tech: string[];
  link: string;
  year: string;
  frameClass: string;
  index: number;
  image?: string;
  width?: number;
  height?: number;
}

export function ProjectCard({
  name,
  type,
  description,
  tech,
  link,
  year,
  frameClass,
  index,
  image,
  width,
  height,
}: ProjectCardProps) {
  // Alternate layout direction based on index
  const isEven = index % 2 === 0;

  // Brand configurations for custom glows matching each project
  const brandColors = [
    { border: "border-emerald-500/20", glow: "rgba(16, 185, 129, 0.25)" }, // AgriFusion
    { border: "border-teal-500/20", glow: "rgba(13, 148, 136, 0.25)" },    // GreExchange
    { border: "border-amber-500/20", glow: "rgba(217, 119, 6, 0.25)" },    // Parfum Prestige
    { border: "border-indigo-500/20", glow: "rgba(79, 70, 229, 0.25)" },   // ShareBite
    { border: "border-rose-500/20", glow: "rgba(225, 29, 72, 0.25)" }       // E-Store
  ];
  const brand = brandColors[index % brandColors.length];

  // Motion values for 3D Tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map mouse positions to rotational angles
  const rotateX = useTransform(y, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6]);

  // Spring settings for smooth physics transition
  const rx = useSpring(rotateX, { stiffness: 150, damping: 22 });
  const ry = useSpring(rotateY, { stiffness: 150, damping: 22 });

  // Spotlight coordinates on the background canvas
  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    
    // Normalize values between -0.5 and 0.5 for tilt
    x.set((e.clientX - rect.left - w / 2) / w);
    y.set((e.clientY - rect.top - h / 2) / h);

    // Set precise coordinates for spotlight
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Convert spotlight positions into a dynamic css gradient string
  const spotlightBg = useTransform(
    [spotlightX, spotlightY],
    ([sx, sy]) => `radial-gradient(350px circle at ${sx}px ${sy}px, rgba(255, 255, 255, 0.35), transparent 80%)`
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={`flex flex-col gap-12 lg:gap-24 items-center ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* Visual Frame side */}
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`group relative w-full lg:w-3/5 overflow-hidden rounded-[1.75rem] ${frameClass} flex items-center justify-center p-4 sm:p-6 transition-all duration-500`}
        style={{
          transformStyle: "preserve-3d",
          perspective: 1200,
        }}
      >
        {/* Dynamic cursor spotlight glow */}
        <motion.div 
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: spotlightBg }}
        />

        {/* Brand ambient shadow glow behind mockup */}
        <div 
          className="absolute -inset-4 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100 pointer-events-none" 
          style={{
            background: `radial-gradient(circle, ${brand.glow} 0%, transparent 70%)`
          }}
        />
        
        {/* macOS Browser Mockup */}
        <motion.div 
          style={{ 
            rotateX: rx, 
            rotateY: ry, 
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden"
          }}
          className="relative w-full rounded-xl sm:rounded-2xl bg-[#f5f5f7] border border-black/5 shadow-[0_15px_35px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col transition-all duration-500 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
        >
          {/* macOS Browser Header */}
          <div className="h-7 sm:h-8 w-full border-b border-black/5 bg-[#eaeaea] flex items-center px-3 sm:px-4 justify-between select-none shrink-0">
            {/* Left: Window Controls */}
            <div className="flex gap-1.2 sm:gap-1.5 items-center w-12 sm:w-16">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#27c93f] border border-[#1aab29]" />
            </div>
            
            {/* Center: URL Bar */}
            <div className="flex-1 max-w-[65%] h-4 sm:h-5 rounded bg-white border border-black/5 flex items-center justify-center px-2 text-[8px] sm:text-[9px] font-mono text-ink/50 overflow-hidden text-ellipsis whitespace-nowrap">
              {link.replace("https://", "").replace("http://", "")}
            </div>
            
            {/* Right: Spacer */}
            <div className="w-12 sm:w-16" />
          </div>
          
          {/* Content Area */}
          <div className="relative w-full bg-white overflow-hidden">
            {image ? (
              <Image
                src={image}
                alt={name}
                width={width || 1024}
                height={height || 500}
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.03]"
                priority={index < 2}
              />
            ) : (
              /* Fallback if image not loaded/missing */
              <div className="w-full h-48 bg-gradient-to-tr from-[#e0f2f1] to-[#b2dfdb] flex flex-col items-center justify-center p-6 text-center select-none">
                <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-sm mb-2 border border-black/5">
                  <svg className="w-5 h-5 text-teal-600 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <span className="font-display text-lg text-ink font-bold leading-none mb-1">
                  {name}
                </span>
                <span className="font-mono text-[8px] uppercase tracking-widest text-ink/50">
                  P2P Resource Exchange Hub
                </span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Floating open button */}
        <div className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white opacity-0 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-1 shadow-lg">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </a>

      {/* Content side */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center">
        {/* Index and Type Label */}
        <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-accent uppercase mb-3 block">
          {`0${index + 1}`} // {type}
        </span>
        
        <div className="flex items-baseline gap-3 mb-6">
          <a href={link} target="_blank" rel="noreferrer" className="group/title inline-flex items-center gap-2">
            <h3 className="font-display text-4xl sm:text-5xl text-ink leading-tight transition-colors duration-300 group-hover/title:text-[#2a1008] relative">
              {name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#2a1008] transition-all duration-300 group-hover/title:w-full" />
            </h3>
            <ArrowUpRight className="h-6 w-6 text-ink/30 transition-all duration-300 group-hover/title:text-accent group-hover/title:translate-x-1 group-hover/title:-translate-y-1 shrink-0" />
          </a>
          <span className="font-mono text-xs font-semibold text-ink/40">
            {year}
          </span>
        </div>
        
        <p className="text-[15px] leading-relaxed text-ink/70">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap gap-1.5 sm:gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-ink/5 bg-ink/[0.02] px-3.5 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-ink/50 transition-all duration-300 hover:border-accent/20 hover:bg-accent/5 hover:text-accent"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8 pt-4">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-[#2a1008] border-b border-[#2a1008]/20 pb-1 hover:text-accent hover:border-accent transition-all duration-300 group/link"
          >
            Explore Project
            <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

