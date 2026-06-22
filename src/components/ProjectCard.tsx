"use client";

import { motion } from "framer-motion";
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
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
        className={`group relative w-full lg:w-3/5 overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem] ${frameClass} flex items-center justify-center p-2.5 sm:p-3.5 transition-transform duration-500 hover:scale-[1.015]`}
      >
        <div className="absolute inset-0 bg-white/0 transition-colors duration-500 group-hover:bg-white/5" />
        
        {/* macOS Browser Mockup */}
        <div className="relative w-full rounded-xl sm:rounded-2xl bg-[#f5f5f7] border border-black/5 shadow-xl overflow-hidden flex flex-col transition-transform duration-500 group-hover:translate-y-[-8px] group-hover:shadow-2xl">
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
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.02]"
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
        </div>

        {/* Floating open button */}
        <div className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-1">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </a>

      {/* Content side */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-4">
          <h3 className="font-display text-4xl sm:text-5xl text-ink leading-[1.1]">
            {name}
          </h3>
          <span className="font-mono text-sm font-bold text-accent">
            ({year})
          </span>
        </div>
        
        <p className="mt-8 text-[15px] leading-relaxed text-ink/70">
          {description}
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded bg-ink/5 px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest text-ink/60"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
