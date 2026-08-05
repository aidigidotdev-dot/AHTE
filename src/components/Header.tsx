"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layers, Menu, X } from "lucide-react";
import { usePersonalization } from "../context/PersonalizationContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { companyName, logoImage } = usePersonalization();

  const getLinkClasses = (href: string, isMobile: boolean) => {
    const isActive = pathname === href;
    if (isMobile) {
      return isActive
        ? "w-full text-left text-xs font-bold uppercase tracking-[0.2em] text-[#1a1a1a] bg-[#edebe1] border border-[#e1e1d7] px-4 py-3 rounded-xl transition-all"
        : "w-full text-left text-xs font-bold uppercase tracking-[0.2em] text-[#5A5A40] hover:text-[#1a1a1a] hover:bg-[#edebe1]/70 border border-[#e1e1d7] px-4 py-3 rounded-xl transition-colors";
    } else {
      return isActive
        ? "text-xs font-bold uppercase tracking-[0.2em] text-[#1a1a1a] border-b-2 border-[#5A5A40] pb-1 transition-all cursor-pointer"
        : "text-xs font-bold uppercase tracking-[0.2em] text-[#5A5A40]/70 hover:text-[#1a1a1a] border-b-2 border-transparent hover:border-[#5A5A40] pb-1 transition-colors cursor-pointer";
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#f5f5f0]/95 backdrop-blur-md border-b border-[#e1e1d7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link 
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center gap-3 cursor-pointer group min-w-0"
        >
          {logoImage ? (
            <img 
              src={logoImage} 
              alt={companyName} 
              className="h-14 sm:h-16 w-auto object-contain shrink-0 max-w-[240px]" 
              style={{ mixBlendMode: "multiply" }}
            />
          ) : (
            <>
              <div className="p-2 bg-[#5A5A40] text-[#f5f5f0] rounded-none group-hover:bg-[#1a1a1a] transition-colors shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="font-serif font-bold text-xl sm:text-2xl tracking-tighter uppercase italic text-[#1a1a1a] block truncate">
                  {companyName}
                </span>
                <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-widest text-[#5A5A40] block -mt-1 font-semibold truncate">
                  Interactive Lead Calculator
                </span>
              </div>
            </>
          )}
        </Link>

        {/* Navigation Links */}
        <nav className="hidden min-[1150px]:flex items-center gap-8">
          <Link
            href="/"
            className={getLinkClasses("/", false)}
          >
            Home
          </Link>
          {pathname !== "/buy" && (
            <>
              <Link
                href="/services"
                className={getLinkClasses("/services", false)}
              >
                Services
              </Link>
              <Link
                href="/gallery"
                className={getLinkClasses("/gallery", false)}
              >
                Gallery
              </Link>
              <Link
                href="/about-us"
                className={getLinkClasses("/about-us", false)}
              >
                About Us
              </Link>
            </>
          )}
          <Link
            href="/terrazzo"
            className={getLinkClasses("/terrazzo", false)}
          >
            Quote Calculator
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden min-[1150px]:block">
          <Link
            href="/terrazzo"
            className="text-[10px] uppercase font-bold tracking-widest text-[#5A5A40] px-5 py-2.5 border border-[#5A5A40] rounded-full hover:bg-[#5A5A40] hover:text-[#f5f5f0] transition-all cursor-pointer"
          >
            Get Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="min-[1150px]:hidden inline-flex h-11 w-11 items-center justify-center border border-[#5A5A40]/30 text-[#5A5A40] rounded-full hover:bg-[#5A5A40] hover:text-[#f5f5f0] transition-colors"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="min-[1150px]:hidden border-t border-[#e1e1d7] bg-[#f5f5f0] shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 grid gap-2">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={getLinkClasses("/", true)}
            >
              Home
            </Link>
            {pathname !== "/buy" && (
              <>
                <Link
                  href="/services"
                  onClick={() => setIsMenuOpen(false)}
                  className={getLinkClasses("/services", true)}
                >
                  Services
                </Link>
                <Link
                  href="/gallery"
                  onClick={() => setIsMenuOpen(false)}
                  className={getLinkClasses("/gallery", true)}
                >
                  Gallery
                </Link>
                <Link
                  href="/about-us"
                  onClick={() => setIsMenuOpen(false)}
                  className={getLinkClasses("/about-us", true)}
                >
                  About Us
                </Link>
              </>
            )}
            <Link
              href="/terrazzo"
              onClick={() => setIsMenuOpen(false)}
              className={getLinkClasses("/terrazzo", true)}
            >
              Quote Calculator
            </Link>
            <Link
              href="/terrazzo"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 text-center text-[10px] uppercase font-bold tracking-widest text-white bg-[#5A5A40] px-5 py-3 rounded-full hover:bg-[#1a1a1a] transition-colors cursor-pointer"
            >
              Get Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
