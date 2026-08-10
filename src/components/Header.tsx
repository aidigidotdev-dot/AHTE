"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "https://ahteflooring.ae/projects/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blogs", href: "https://ahteflooring.ae/blogs/" },
  { label: "Contact Us", href: "https://ahteflooring.ae/contact-us/" },
];

function isExternalLink(href: string) {
  return href.startsWith("http");
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const getLinkClasses = (href: string, isMobile: boolean) => {
    const isActive = !isExternalLink(href) && pathname === href;

    if (isMobile) {
      return isActive
        ? "w-full text-left text-sm font-semibold text-[#b9975b] px-1 py-2 transition-colors"
        : "w-full text-left text-sm font-semibold text-[#1f1f1f] hover:text-[#b9975b] px-1 py-2 transition-colors";
    }

    return isActive
      ? "text-sm font-semibold text-[#b9975b] transition-colors"
      : "text-sm font-semibold text-[#1f1f1f] hover:text-[#b9975b] transition-colors";
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex h-[86px] max-w-[1240px] items-center justify-between gap-5 px-4 sm:px-6">
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className="flex min-w-0 items-center"
          aria-label="A H T E Flooring LLC home"
        >
          <img
            src="/ahte-logo.png"
            alt="A H T E Flooring LLC"
            className="h-[58px] w-auto max-w-[180px] object-contain sm:h-[66px] sm:max-w-[220px]"
          />
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {NAV_LINKS.map((link) => {
            const className = getLinkClasses(link.href, false);
            return isExternalLink(link.href) ? (
              <a key={link.href} href={link.href} className={className}>
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} className={className}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/terrazzo"
          className="hidden shrink-0 rounded-full bg-[#b9975b] px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_rgba(185,151,91,0.32)] transition-colors hover:bg-[#1f1f1f] xl:inline-flex"
        >
          Cost Estimation
        </Link>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d7d2c8] text-[#1f1f1f] transition-colors hover:border-[#b9975b] hover:text-[#b9975b] xl:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-[#eee9df] bg-white shadow-lg xl:hidden">
          <nav className="mx-auto grid max-w-[1240px] gap-1 px-4 py-4 sm:px-6">
            {NAV_LINKS.map((link) => {
              const className = getLinkClasses(link.href, true);
              return isExternalLink(link.href) ? (
                <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className={className}>
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className={className}>
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/terrazzo"
              onClick={() => setIsMenuOpen(false)}
              className="mt-3 inline-flex w-full justify-center rounded-full bg-[#b9975b] px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#1f1f1f]"
            >
              Cost Estimation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}