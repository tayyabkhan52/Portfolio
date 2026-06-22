"use client";

import { ScrollReveal } from "./ScrollReveal";
import { Barcode } from "lucide-react";

const principles = [
  {
    num: "01",
    title: "Robust Architecture preventing mistakes",
    desc: "Stable, high-quality results built on experience across complex state machines, RLS, and real-time sockets — helping prevent issues before they appear.",
  },
  {
    num: "02",
    title: "End-to-end knowledge of digital platforms",
    desc: "Full-cycle engineering, from database schema design and ML model integration to refined frontend components — delivering seamless, high-quality products.",
  },
  {
    num: "03",
    title: "AI shaped by practical strategy",
    desc: "Diving deep into domain problems (like agricultural soil analysis), I ensure machine learning pipelines are directly tied to user value and business logic.",
  },
];

export function Experience() {
  return (
    <section className="bg-white py-24 sm:py-32 px-6 md:px-12">
      <ScrollReveal>
        <div className="flex flex-col items-center text-center">
          <div className="flex items-start gap-2">
            <h2 className="font-display text-4xl sm:text-5xl text-accent">
              Work principles
            </h2>
            <span className="font-mono text-[10px] font-bold text-accent uppercase mt-2">
              (03)
            </span>
          </div>
          {/* Faux Barcode aesthetic using an icon for simplicity */}
          <div className="mt-6 flex flex-col items-center text-accent">
            <Barcode className="w-24 h-24 stroke-[1]" />
            <span className="font-mono text-[9px] font-bold tracking-widest mt-1">
              M. TAYYAB KHAN
            </span>
          </div>
        </div>
      </ScrollReveal>

      <div className="mt-24 grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {principles.map((p, idx) => (
          <ScrollReveal key={idx} delay={idx * 0.15}>
            <div className="relative flex flex-col rounded-[2rem] border border-ink/5 bg-white p-8 sm:p-10 shadow-sm transition-shadow hover:shadow-md h-full">
              <div className="flex justify-center">
                <div className="flex h-8 w-8 items-center justify-center bg-ink text-white font-mono text-[11px] font-bold">
                  {p.num}
                </div>
              </div>
              <h3 className="mt-8 text-center font-display text-2xl text-ink leading-tight">
                {p.title}
              </h3>
              <p className="mt-6 text-center text-[13px] leading-relaxed text-ink/70 max-w-[280px] mx-auto">
                {p.desc}
              </p>
              
              <div className="mt-auto pt-12 flex justify-center text-ink">
                 <Barcode className="w-20 h-20 stroke-[1.5]" />
              </div>
              {/* Decorative orange dot on the last card's barcode */}
              {idx === 2 && (
                <div className="absolute bottom-16 right-[35%] h-2.5 w-2.5 rounded-full bg-accent" />
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
