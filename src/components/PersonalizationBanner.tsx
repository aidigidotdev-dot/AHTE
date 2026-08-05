"use client";

import { usePersonalization } from "../context/PersonalizationContext";
import { Sparkles, RotateCcw } from "lucide-react";

export default function PersonalizationBanner() {
  const { isPersonalized, companyName, resetPersonalization } = usePersonalization();

  if (!isPersonalized) return null;

  return (
    <div className="w-full bg-[#5A5A40] text-[#f5f5f0] text-center py-2.5 px-4 flex flex-wrap items-center justify-center gap-2.5 text-[10px] md:text-xs font-mono uppercase tracking-widest shadow-md z-[100] relative border-b border-white/10">
      <div className="flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse shrink-0" />
        <span>Previewing site for: <strong className="text-white font-bold">{companyName}</strong></span>
      </div>
      <button
        onClick={resetPersonalization}
        className="flex items-center gap-1 bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded text-[9px] uppercase font-extrabold tracking-widest border border-white/25 transition-all cursor-pointer hover:scale-103 shrink-0"
      >
        <RotateCcw className="w-3 h-3" />
        Reset to Defaults
      </button>
    </div>
  );
}
