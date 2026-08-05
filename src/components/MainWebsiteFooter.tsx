"use client";

import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

import { usePersonalization } from "../context/PersonalizationContext";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Calculator", href: "/terrazzo" },
  { label: "Buy Template", href: "/buy" },
];

const SERVICE_LINKS = [
  { label: "Terrazzo Flooring", href: "/terrazzo" },
  { label: "Epoxy Coatings", href: "/terrazzo" },
  { label: "Polished Concrete", href: "/terrazzo" },
  { label: "Microcement Surfaces", href: "/terrazzo" },
];

const footerLinkClass =
  "inline-block text-sm leading-relaxed text-[#111111] transition-opacity hover:opacity-60";

export default function MainWebsiteFooter() {
  const { companyName, aboutText, locationText, contactText, inquiriesText, logoImage } = usePersonalization();
  return (
    <footer className="w-full bg-[#fbf8ef] px-5 py-[60px] lg:py-[90px] border-t border-[#e1e1d7]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1.2fr_1fr_1fr]">
        <div className="flex flex-col gap-6">
          <Link href="/" className="block">
            {logoImage ? (
              <img src={logoImage} alt={companyName} className="h-8 w-auto object-contain shrink-0 max-w-[150px]" />
            ) : (
              <span className="font-serif font-bold text-xl uppercase italic text-black tracking-tight">
                {companyName}
              </span>
            )}
          </Link>
          <p className="m-0 text-sm font-normal leading-[1.6] text-[#111111]">
            {aboutText}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="m-0 text-[13px] font-bold uppercase tracking-[0.5px] text-black">
              Location
            </h2>
            <p className="m-0 text-sm leading-[1.6] text-[#111111]">
              {locationText}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="m-0 text-[13px] font-bold uppercase tracking-[0.5px] text-black">
              Contact
            </h2>
            <div className="flex flex-col text-sm leading-[1.6] text-[#111111]">
              <a href={`tel:${contactText}`} className="transition-opacity hover:opacity-60 font-mono">
                {contactText}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="m-0 text-[13px] font-bold uppercase tracking-[0.5px] text-black">
              Inquiries
            </h2>
            <div className="flex flex-col text-sm leading-[1.6] text-[#111111]">
              <a href={`mailto:${inquiriesText}`} className="transition-opacity hover:opacity-60 font-mono">
                {inquiriesText}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="m-0 text-[13px] font-bold uppercase tracking-[0.5px] text-black">Quick Links</h2>
          <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={footerLinkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="m-0 text-[13px] font-bold uppercase tracking-[0.5px] text-black">Template Features</h2>
          <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
            {SERVICE_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={footerLinkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
