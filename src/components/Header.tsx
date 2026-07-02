"use client";

import { useState } from "react";
import Link from "next/link";
import { Layers, Menu, Phone, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const desktopLinkClass = "text-xs font-bold uppercase tracking-[0.2em] text-[#5A5A40]/70 hover:text-[#1a1a1a] border-b-2 border-transparent hover:border-[#5A5A40] pb-1 transition-colors cursor-pointer";
  const desktopCalculatorClass = "text-xs font-bold uppercase tracking-[0.2em] text-[#1a1a1a] border-b-2 border-[#5A5A40] pb-1 transition-all cursor-pointer";
  const mobileLinkClass = "w-full text-left text-xs font-bold uppercase tracking-[0.2em] text-[#5A5A40] hover:text-[#1a1a1a] hover:bg-[#edebe1]/70 border border-[#e1e1d7] px-4 py-3 rounded-xl transition-colors";
  const mobileCalculatorClass = "w-full text-left text-xs font-bold uppercase tracking-[0.2em] text-[#1a1a1a] bg-[#edebe1] border border-[#e1e1d7] px-4 py-3 rounded-xl transition-all";
  const mainSiteLinks = [
    { href: "https://ahteflooring.ae/about-us/", label: "About Us" },
    { href: "https://ahteflooring.ae/services", label: "Services" },
    { href: "https://ahteflooring.ae/gallery", label: "Gallery" },
  ];

  const renderLinks = (isMobile = false) => (
    <>
      <Link
        href="/"
        onClick={() => setIsMenuOpen(false)}
        className={isMobile ? mobileCalculatorClass : desktopCalculatorClass}
      >
        Cost Calculator
      </Link>
      {mainSiteLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsMenuOpen(false)}
          className={isMobile ? mobileLinkClass : desktopLinkClass}
        >
          {link.label}
        </a>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-[#f5f5f0]/95 backdrop-blur-md border-b border-[#e1e1d7]">
      <div className="hidden min-[1150px]:block bg-[#1a1a1a] text-[#edebe1] border-b border-[#e1e1d7]/10">
        <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-end gap-5 font-mono text-[10px] uppercase tracking-wider">
          <a href="tel:+971501920298" className="inline-flex items-center gap-2 text-[#a09c94] hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5 text-[#5A5A40]" />
            +971 50 1920298
          </a>
          <span className="text-[#5A5A40]">|</span>
          <a href="tel:+971529234069" className="text-[#a09c94] hover:text-white transition-colors">
            +971 52 9234069
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 min-[1150px]:h-24 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link 
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center gap-3 cursor-pointer group min-w-0"
        >
          <div className="p-2 bg-[#5A5A40] text-[#f5f5f0] rounded-none group-hover:bg-[#1a1a1a] transition-colors shrink-0">
            <Layers className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="font-serif font-bold text-xl sm:text-2xl tracking-tighter uppercase italic text-[#1a1a1a] block truncate">
              A H T E Flooring
            </span>
            <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-widest text-[#5A5A40] block -mt-1 font-semibold truncate">
              Flooring Cost Calculator
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden min-[1150px]:flex items-center gap-8">
          {renderLinks()}
        </nav>

        {/* Action Button */}
        <div className="hidden min-[1150px]:block">
          <a
            href="https://ahteflooring.ae/contact-us/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase font-bold tracking-widest text-[#5A5A40] px-5 py-2.5 border border-[#5A5A40] rounded-full hover:bg-[#5A5A40] hover:text-[#f5f5f0] transition-all cursor-pointer"
          >
            Contact Us
          </a>
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
            {renderLinks(true)}
            <a
              href="https://ahteflooring.ae/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 text-center text-[10px] uppercase font-bold tracking-widest text-white bg-[#5A5A40] px-5 py-3 rounded-full hover:bg-[#1a1a1a] transition-colors cursor-pointer"
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

