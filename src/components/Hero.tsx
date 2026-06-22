"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-hero-gradient px-6 text-center">
      {/* Decorative large circles resembling the glowing edges in the inspiration */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-[800px] w-[200px] -translate-x-1/2 rounded-full border border-white/20" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-[800px] w-[200px] translate-x-1/2 rounded-full border border-white/20" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="z-10 mt-20 max-w-4xl"
      >
        <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] tracking-tight text-white drop-shadow-sm sm:text-balance">
          Engineering robust platforms and intelligent pipelines that move forward
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="z-10 mt-16 flex items-center gap-6 rounded-2xl bg-white/20 p-2 pr-6 backdrop-blur-md border border-white/30"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-accent text-white font-serif text-3xl font-bold shadow-lg">
          T
        </div>
        <div className="text-left">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
              Available for work
            </span>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
          </div>
          <h2 className="mt-1 font-mono text-sm font-bold uppercase tracking-widest text-ink">
            Muhammad Tayyab Khan
          </h2>
          <p className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-ink/70">
            ML/AI & Full-Stack Engineer
          </p>
        </div>
      </motion.div>

      {/* Small orange dot indicating scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-24 flex flex-col items-center gap-4 md:bottom-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="h-2.5 w-2.5 rounded-full bg-accent"
        />
      </motion.div>

      {/* Mobile contact info */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="z-10 mt-8 flex flex-col items-center gap-3 font-mono text-[9px] sm:text-[10px] uppercase tracking-widest md:hidden"
      >
        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/muhammad-tayyab-b824b5278/"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-[#2a1008] underline underline-offset-4 decoration-[#2a1008]/30 hover:text-accent hover:decoration-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/tayyabkhan52"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-[#2a1008] underline underline-offset-4 decoration-[#2a1008]/30 hover:text-accent hover:decoration-accent transition-colors"
          >
            GitHub
          </a>
        </div>
        <a
          href="mailto:tayyabkhan.personal@gmail.com"
          className="normal-case font-bold text-[#2a1008] hover:text-accent transition-colors"
        >
          tayyabkhan.personal@gmail.com
        </a>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-1.5 sm:gap-4 text-[9px] font-bold text-[#2a1008]/70">
          <span>+92-3390673440</span>
          <span className="hidden sm:inline">•</span>
          <span>+92-3084450419</span>
        </div>
      </motion.div>

      {/* Editorial Contact Metadata Bar - Desktop only */}
      <div className="absolute bottom-8 left-12 right-12 hidden md:flex justify-between items-end font-mono text-[9px] font-bold uppercase tracking-widest z-20">
        {/* Left Column: Socials */}
        <div className="flex flex-col gap-2.5 items-start text-left">
          <span className="text-[8px] tracking-wider font-bold text-[#2a1008]/50">Connect</span>
          <a
            href="https://www.linkedin.com/in/muhammad-tayyab-b824b5278/"
            target="_blank"
            rel="noreferrer"
            className="text-[#2a1008] underline underline-offset-4 decoration-[#2a1008]/30 hover:text-accent hover:decoration-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/tayyabkhan52"
            target="_blank"
            rel="noreferrer"
            className="text-[#2a1008] underline underline-offset-4 decoration-[#2a1008]/30 hover:text-accent hover:decoration-accent transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* Right Column: Contact Details */}
        <div className="flex flex-col gap-2.5 items-end text-right">
          <span className="text-[8px] tracking-wider font-bold text-[#2a1008]/50">Inquiries</span>
          <a
            href="mailto:tayyabkhan.personal@gmail.com"
            className="normal-case font-bold text-[#2a1008] hover:text-accent transition-colors"
          >
            tayyabkhan.personal@gmail.com
          </a>
          <div className="flex flex-col items-end text-[8px] font-bold text-[#2a1008]/70 select-all">
            <span>+92-3390673440</span>
            <span>+92-3084450419</span>
          </div>
        </div>
      </div>
    </section>
  );
}
