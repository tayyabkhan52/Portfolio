"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function Header() {
  const [timePK, setTimePK] = useState("");
  const [timeLDN, setTimeLDN] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimePK(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Karachi",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        }) + " PKT (+5)"
      );
      setTimeLDN(
        now.toLocaleTimeString("en-US", {
          timeZone: "Europe/London",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        }) + " GMT (+0)"
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 text-white md:px-12">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded border border-white font-mono text-sm font-bold">
          TK
        </div>
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest hidden sm:inline-block">
          Engineer
        </span>
      </div>

      <div className="hidden flex-1 justify-center gap-16 md:flex">
        <div className="flex flex-col">
          <span className="font-mono text-[9px] uppercase tracking-widest text-white/70">
            Lahore , PK
          </span>
          <span className="font-mono text-xs">{timePK}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-mono text-[9px] uppercase tracking-widest text-white/70">
            Global
          </span>
          <span className="font-mono text-xs">{timeLDN}</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="mailto:tayyabkhan.personal@gmail.com"
          className="font-mono text-[10px] font-bold uppercase tracking-widest hover:text-accent transition-colors hidden sm:inline-block"
        >
          Contact Me
        </a>
        <div className="h-8 w-8 overflow-hidden rounded-full bg-white/20">
          {/* Avatar placeholder - using a generic icon or initial if image isn't available */}
          <div className="flex h-full w-full items-center justify-center bg-accent text-white font-bold font-serif text-lg">
            T
          </div>
        </div>
      </div>
    </header>
  );
}
