"use client";

import { motion } from "framer-motion";
import { ArrowRight, Barcode } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-between bg-footer-gradient px-6 pb-32 sm:pb-8 pt-32 text-white sm:pt-48 md:px-12 overflow-hidden">
      {/* Decorative large circles resembling the glowing edges in the inspiration */}
      <div className="pointer-events-none absolute left-0 bottom-1/4 h-[600px] w-[200px] -translate-x-1/2 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute right-0 bottom-1/4 h-[600px] w-[200px] translate-x-1/2 rounded-full border border-white/10" />

      <ScrollReveal>
        <div className="flex flex-col items-center text-center">
          <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-widest flex items-center gap-2">
            Time to connect
            <span className="h-1.5 w-1.5 rounded-full bg-accent/50" />
          </span>
          <h2 className="mt-8 max-w-3xl font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] tracking-tight">
            Whether you need an engineer for your platform or agency, or just want to say hi
          </h2>
          
          <motion.a
            href="mailto:tayyabkhan.personal@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-16 flex items-center gap-6 rounded-2xl bg-white p-2 pl-4 shadow-xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-white font-serif text-2xl font-bold shadow-inner">
              T
            </div>
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-ink">
              Get in touch
            </span>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-white">
              <ArrowRight className="h-5 w-5" />
            </div>
          </motion.a>
          
          {/* Small orange dot below CTA */}
          <div className="mt-16 h-2.5 w-2.5 rounded-full bg-accent" />
        </div>
      </ScrollReveal>

      {/* Footer Links Bottom Bar */}
      <div className="mt-32 sm:mt-48 flex w-full max-w-7xl flex-col items-center justify-between gap-8 border-t border-white/10 pt-8 sm:flex-row">
        <div className="flex flex-col gap-2 items-center sm:items-start">
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/60">
            Privacy Policy
          </p>
          <div className="flex gap-3 font-mono text-[9px] text-white/50 font-bold">
            <span>+92-3390673440</span>
            <span>•</span>
            <span>+92-3084450419</span>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          <a
            href="https://www.linkedin.com/in/muhammad-tayyab-b824b5278/"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[10px] font-bold uppercase tracking-widest text-white hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/tayyabkhan52"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[10px] font-bold uppercase tracking-widest text-white hover:text-accent transition-colors"
          >
            GitHub
          </a>
        </div>
        
        <a
          href="mailto:tayyabkhan.personal@gmail.com"
          className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors"
        >
          tayyabkhan.personal@gmail.com
          <div className="flex h-4 w-4 items-center justify-center bg-white text-ink">
            <ArrowRight className="h-3 w-3" />
          </div>
        </a>
      </div>
      
      {/* Absolute Barcode at bottom center */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center text-accent/80">
        <span className="font-mono text-[8px] font-bold tracking-widest mb-1">
          M. TAYYAB KHAN
        </span>
        <Barcode className="w-32 h-16 stroke-[1]" />
      </div>
    </footer>
  );
}
