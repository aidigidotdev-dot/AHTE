"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layers } from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  const getActiveTab = () => {
    if (pathname === "/") return "home";
    if (pathname === "/services") return "services";
    if (pathname === "/terrazzo") return "terrazzo";
    if (pathname === "/gallery") return "gallery";
    if (pathname === "/authority") return "authority";
    return "home";
  };

  const currentTab = getActiveTab();

  const activeClass = "text-xs font-bold uppercase tracking-[0.2em] text-[#1a1a1a] border-b-2 border-[#5A5A40] pb-1 transition-all cursor-pointer";
  const inactiveClass = "text-xs font-bold uppercase tracking-[0.2em] text-[#5A5A40]/50 hover:text-[#1a1a1a] border-b-2 border-transparent pb-1 transition-colors cursor-pointer";

  const renderLinks = () => {
    return (
      <>
        <Link
          href="/"
          className={currentTab === "home" ? activeClass : inactiveClass}
        >
          Home
        </Link>
        <Link
          href="/services"
          className={currentTab === "services" ? activeClass : inactiveClass}
        >
          Services
        </Link>
        <Link
          href="/terrazzo"
          className={currentTab === "terrazzo" ? activeClass : inactiveClass}
        >
          Terrazzo Matrix
        </Link>
        <Link
          href="/gallery"
          className={currentTab === "gallery" ? activeClass : inactiveClass}
        >
          Gallery
        </Link>
        <Link
          href="/authority"
          className={currentTab === "authority" ? activeClass : inactiveClass}
        >
          Topical Hub
        </Link>
      </>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-[#f5f5f0]/95 backdrop-blur-md border-b border-[#e1e1d7]">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/"
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="p-2 bg-[#5A5A40] text-[#f5f5f0] rounded-none group-hover:bg-[#1a1a1a] transition-colors">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <span className="font-serif font-bold text-2xl tracking-tighter uppercase italic text-[#1a1a1a] block">
              AHTE Flooring
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#5A5A40] block -mt-1 font-semibold">
              Premium Surface Restoration
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-8 md:gap-10">
          {renderLinks()}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <Link
            href="/terrazzo"
            className="text-[10px] uppercase font-bold tracking-widest text-[#5A5A40] px-5 py-2.5 border border-[#5A5A40] rounded-full hover:bg-[#5A5A40] hover:text-[#f5f5f0] transition-all cursor-pointer"
          >
            Quote Calculator
          </Link>
        </div>
      </div>
    </header>
  );
}

