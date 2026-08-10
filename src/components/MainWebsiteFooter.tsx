"use client";

import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Blogs", href: "https://ahteflooring.ae/blogs/" },
  { label: "Contact Us", href: "https://ahteflooring.ae/contact-us/" },
];

const SERVICE_LINKS = [
  { label: "Microtopping", href: "https://ahteflooring.ae/service/microtopping/" },
  { label: "Terrazzo Flooring", href: "/terrazzo" },
  { label: "Decorative Flooring", href: "https://ahteflooring.ae/service/decorative-flooring/" },
  { label: "Kitchen/MMA Flooring", href: "https://ahteflooring.ae/service/kitchen-mma-flooring/" },
  { label: "Epoxy Flooring", href: "https://ahteflooring.ae/service/epoxy-flooring/" },
  { label: "Microconcrete", href: "https://ahteflooring.ae/service/microconcrete/" },
  { label: "Car Parking", href: "https://ahteflooring.ae/service/car-parking/" },
  { label: "Sports Flooring", href: "https://ahteflooring.ae/service/sports-flooring/" },
  { label: "Exposed Aggregate", href: "https://ahteflooring.ae/service/exposed-aggregate/" },
  { label: "Stone Carpet", href: "https://ahteflooring.ae/service/stone-carpet/" },
  { label: "Concrete Polishing", href: "https://ahteflooring.ae/service/concrete-polishing/" },
  { label: "PU Concrete Flooring System", href: "https://ahteflooring.ae/service/pu-concrete-flooring-system/" },
];

const footerLinkClass = "text-sm leading-relaxed text-[#d8d8d8] transition-colors hover:text-[#b9975b]";
const contactLinkClass = "text-sm leading-relaxed text-[#f5f5f0] transition-colors hover:text-[#b9975b]";

function SmartLink({ href, className, children }: { href: string; className: string; children: React.ReactNode }) {
  if (href.startsWith("http")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function MainWebsiteFooter() {
  return (
    <footer className="w-full bg-[#171717] text-[#f5f5f0]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-[1.35fr_1.05fr_0.8fr_1.15fr] lg:py-20">
        <div className="flex flex-col gap-6">
          <Link href="/" className="inline-flex flex-col leading-none" aria-label="A H T E Flooring LLC home">
            <span className="text-[30px] font-black uppercase tracking-[0.18em] text-white">
              A H T E
            </span>
            <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.42em] text-[#b9975b]">
              Flooring LLC
            </span>
          </Link>

          <p className="m-0 max-w-md text-sm leading-7 text-[#d8d8d8]">
            A H T E Flooring LLC is a premium flooring company based in Dubai, UAE, specializing in Terrazzo Flooring, Epoxy & PU Coatings, Self-Leveling Systems, Industrial Flooring, Heavy-Duty Floors, Sports Flooring, and Car Parking Flooring - delivering world-class results across every project.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/ahteflooring/"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#b9975b] hover:bg-[#b9975b]"
              aria-label="A H T E Flooring on Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/ahte-flooring/"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#b9975b] hover:bg-[#b9975b]"
              aria-label="A H T E Flooring on LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="m-0 text-sm font-bold uppercase tracking-[0.18em] text-white">Contact</h2>

          <div className="flex gap-3">
            <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#b9975b]" />
            <div>
              <h3 className="m-0 text-sm font-bold text-white">Address</h3>
              <p className="m-0 mt-2 text-sm leading-7 text-[#d8d8d8]">
                Warehouse 2, 364-11A ST, AI Quoz Ind 1st, PO BOX: 8854, Dubai U.A.E
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Phone className="mt-1 h-4 w-4 shrink-0 text-[#b9975b]" />
            <div>
              <h3 className="m-0 text-sm font-bold text-white">Call</h3>
              <div className="mt-2 flex flex-col gap-1">
                <a href="tel:+971501920298" className={contactLinkClass}>+971 50 1920298</a>
                <a href="tel:+971529234069" className={contactLinkClass}>+971 52 9234069</a>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Mail className="mt-1 h-4 w-4 shrink-0 text-[#b9975b]" />
            <div>
              <h3 className="m-0 text-sm font-bold text-white">Email</h3>
              <div className="mt-2 flex flex-col gap-1">
                <a href="mailto:hafeez@ahteflooring.ae" className={contactLinkClass}>hafeez@ahteflooring.ae</a>
                <a href="mailto:namish@ahteflooring.ae" className={contactLinkClass}>namish@ahteflooring.ae</a>
                <a href="mailto:info@ahteflooring.ae" className={contactLinkClass}>info@ahteflooring.ae</a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="m-0 text-sm font-bold uppercase tracking-[0.18em] text-white">Quick Links</h2>
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <SmartLink href={link.href} className={footerLinkClass}>{link.label}</SmartLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="m-0 text-sm font-bold uppercase tracking-[0.18em] text-white">Our Services</h2>
          <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:grid-cols-1">
            {SERVICE_LINKS.map((link) => (
              <li key={link.href}>
                <SmartLink href={link.href} className={footerLinkClass}>{link.label}</SmartLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-2 text-xs text-[#a8a8a8] sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0">© 2026 A H T E Flooring LLC. All rights reserved.</p>
          <Link href="/terrazzo" className="font-bold uppercase tracking-[0.16em] text-[#b9975b] transition-colors hover:text-white">
            Cost Estimation
          </Link>
        </div>
      </div>
    </footer>
  );
}