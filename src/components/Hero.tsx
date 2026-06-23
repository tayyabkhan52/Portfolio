"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] px-6 text-center overflow-hidden">
      {/* 4K Premium Background Image */}
      <Image
        src="/hero-bg.png"
        alt="Premium abstract tech background"
        fill
        priority
        className="object-cover opacity-90 select-none pointer-events-none"
      />
      
      {/* Dark overlay to ensure text readability over busy background parts */}
      <div className="absolute inset-0 bg-[#0a0a0a]/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/60 to-[#0a0a0a] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(10px)", scale: 0.95 }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="z-10 mt-20 max-w-4xl"
      >
        <h1 className="font-sans font-medium text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.1] tracking-tight text-white/95 [text-shadow:_0_8px_30px_rgb(0_0_0_/_80%)] sm:text-balance">
          Engineering robust platforms and intelligent pipelines that move forward
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="z-10 mt-16 flex items-center gap-5 rounded-[1.25rem] bg-black/40 p-1.5 pr-6 backdrop-blur-md border border-white/10 shadow-2xl"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-white font-serif text-2xl font-bold shadow-[0_0_20px_rgba(255,107,53,0.4)]">
          T
        </div>
        <div className="text-left">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent drop-shadow-sm">
              Available for work
            </span>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_rgba(255,107,53,0.8)]"></span>
            </span>
          </div>
          <h2 className="mt-1 font-mono text-sm font-bold uppercase tracking-widest text-white">
            Muhammad Tayyab Khan
          </h2>
          <p className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-white/70">
            ML/AI & Full-Stack Engineer
          </p>
        </div>
      </motion.div>

      {/* Small orange dot indicating scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-24 flex flex-col items-center gap-4 md:bottom-20 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(255,107,53,0.6)]"
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
            className="font-bold text-white/90 underline underline-offset-4 decoration-white/30 hover:text-accent hover:decoration-accent transition-colors drop-shadow-sm"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/tayyabkhan52"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-white/90 underline underline-offset-4 decoration-white/30 hover:text-accent hover:decoration-accent transition-colors drop-shadow-sm"
          >
            GitHub
          </a>
        </div>
        <a
          href="mailto:tayyabkhan.personal@gmail.com"
          className="normal-case font-bold text-white/90 hover:text-accent transition-colors drop-shadow-sm"
        >
          tayyabkhan.personal@gmail.com
        </a>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-1.5 sm:gap-4 text-[9px] font-bold text-white/70">
          <span>+92-3390673440</span>
          <span className="hidden sm:inline text-white/40">•</span>
          <span>+92-3084450419</span>
        </div>
      </motion.div>

      {/* Editorial Contact Metadata Bar - Desktop only */}
      <div className="absolute bottom-8 left-12 right-12 hidden md:flex justify-between items-end font-mono text-[9px] font-bold uppercase tracking-widest z-20">
        {/* Left Column: Socials */}
        <div className="flex flex-col gap-2.5 items-start text-left">
          <span className="text-[8px] tracking-wider font-bold text-white/50">Connect</span>
          <a
            href="https://www.linkedin.com/in/muhammad-tayyab-b824b5278/"
            target="_blank"
            rel="noreferrer"
            className="text-white/90 underline underline-offset-4 decoration-white/30 hover:text-accent hover:decoration-accent transition-colors drop-shadow-sm"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/tayyabkhan52"
            target="_blank"
            rel="noreferrer"
            className="text-white/90 underline underline-offset-4 decoration-white/30 hover:text-accent hover:decoration-accent transition-colors drop-shadow-sm"
          >
            GitHub
          </a>
        </div>

        {/* Right Column: Contact Details */}
        <div className="flex flex-col gap-2.5 items-end text-right">
          <span className="text-[8px] tracking-wider font-bold text-white/50">Inquiries</span>
          <a
            href="mailto:tayyabkhan.personal@gmail.com"
            className="normal-case font-bold text-white/90 hover:text-accent transition-colors drop-shadow-sm"
          >
            tayyabkhan.personal@gmail.com
          </a>
          <div className="flex flex-col items-end text-[8px] font-bold text-white/70 select-all">
            <span>+92-3390673440</span>
            <span>+92-3084450419</span>
          </div>
        </div>
      </div>
    </section>
  );
}
