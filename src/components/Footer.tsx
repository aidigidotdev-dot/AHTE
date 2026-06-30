"use client";

import { useState } from "react";
import Link from "next/link";
import { Layers, Mail, Phone, MapPin, Award, CheckCircle, ChevronDown, HelpCircle, Instagram, Linkedin } from "lucide-react";
import { GENERAL_SPECS } from "../data";

export default function Footer() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How is architectural Terrazzo cleaned and maintained?",
      answer: "Architectural terrazzo requires simple PH-neutral stone cleaners and daily damp mopping. We recommend avoiding any harsh acidic cleansers, vinegars, or abrasive scrubbers which can strip the high-gloss protective lithium silicate seal. Standard mop cycles will preserve the pristine aggregate clarity indefinitely."
    },
    {
      question: "What is the typical timeline for a seamless floor installation?",
      answer: "Standard projects average 7 to 14 operational days depending on the structural layout complexity. The process involves substrate preparation, precise brass linear profiling, monolithic casting, a 30-day hydration cure window (for cementitious), followed by finishing and sealing."
    },
    {
      question: "What structural warranties cover A H T E Flooring systems?",
      answer: "We offer a 5-year structural warranty on residential and commercial epoxy and cementitious terrazzo systems. This warranty covers slab bonding adhesion, pigment UV colorfast stability under GCC heat, and localized micro-fracture prevention when installed according to approved site conditions."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* Architectural FAQ Section above the Footer */}
      <section className="bg-[#edebe1] text-[#1a1a1a] border-t border-[#e1e1d7] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:gap-16">
            <div className="lg:w-1/3 mb-10 lg:mb-0 space-y-3">
              <div className="flex items-center gap-2 text-[#5A5A40]">
                <HelpCircle className="w-5 h-5" />
                <span className="font-mono text-[10px] uppercase font-bold tracking-[0.2em] text-[#5A5A40]">
                  Client Support Desk
                </span>
              </div>
              <h4 className="font-serif font-bold text-2xl md:text-3xl text-[#1a1a1a] tracking-tight">
                Surface & Service FAQs
              </h4>
              <p className="text-sm text-[#5a5650] max-w-sm leading-relaxed font-sans">
                Review verified structural insights regarding our architectural flooring systems, curing procedures, and long-term structural warranties.
              </p>
            </div>
            
            <div className="lg:w-2/3 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div 
                    key={index} 
                    className="border border-[#e1e1d7] rounded-[24px] bg-white overflow-hidden transition-all shadow-sm"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#f5f5f0]/40 transition-colors cursor-pointer"
                    >
                      <span className="font-sans font-bold text-xs md:text-sm text-[#1a1a1a] pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown 
                        className={`w-4 h-4 text-[#5A5A40] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 border-t border-[#e1e1d7] text-xs md:text-sm text-[#5a5650] leading-relaxed font-sans">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-[#edebe1] border-t border-[#e1e1d7]/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#5A5A40] text-[#f5f5f0] font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-white tracking-tighter uppercase italic block">
                  A H T E Flooring
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#a09c94] block -mt-1 font-semibold">
                  Premium Architectural Floors
                </span>
              </div>
            </div>
            <p className="text-sm text-[#a09c94] leading-relaxed font-sans">
              Dubai's choice commercial & residential flooring contractor. Pioneering seamless Terrazzo and durable architectural flooring systems.
            </p>
            <div className="pt-2 flex flex-col gap-1.5 font-mono text-xs text-[#5A5A40]">
              <span className="text-[#a09c94]">Experience: <span className="text-white font-semibold">{GENERAL_SPECS.yearsInBusiness}</span></span>
              <span className="text-[#a09c94]">Portfolio: <span className="text-white font-semibold">{GENERAL_SPECS.projectsCompleted}</span></span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/a-h-t-e-flooring-llc-945936220"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="A H T E Flooring on LinkedIn"
                className="text-[#a09c94] hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/ahte_flooring_llc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="A H T E Flooring on Instagram"
                className="text-[#a09c94] hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Nav links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#f5f5f0] mb-4 border-b border-[#e1e1d7]/10 pb-2 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors cursor-pointer text-[#a09c94] text-left block"
                >
                  Home Showcase
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors cursor-pointer text-[#a09c94] text-left block"
                >
                  Flooring Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/terrazzo"
                  className="hover:text-white transition-colors cursor-pointer text-[#a09c94] text-left block"
                >
                  Seamless Terrazzo
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-white transition-colors cursor-pointer text-[#a09c94] text-left block"
                >
                  Completed Works
                </Link>
              </li>
              <li>
                <Link
                  href="/authority"
                  className="hover:text-white transition-colors cursor-pointer text-[#a09c94] text-left block"
                >
                  EEAT Technical Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#f5f5f0] mb-4 border-b border-[#e1e1d7]/10 pb-2 font-bold">
              Office & Showroom
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4.5 h-4.5 text-[#5A5A40] mt-0.5 shrink-0" />
                <span className="text-[#a09c94] font-sans leading-snug">
                  Warehouse 2, 364-11A ST, AI Quoz Ind 1st, PO BOX: 8854, Dubai U.A.E
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4.5 h-4.5 text-[#5A5A40] mt-0.5 shrink-0" />
                <div className="text-[#a09c94] font-mono leading-snug flex flex-col gap-1">
                  <a href="tel:+971501920298" className="hover:text-white transition-colors">
                    +971 50 1920298
                  </a>
                  <a href="tel:+971529234069" className="hover:text-white transition-colors">
                    +971 52 9234069
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4.5 h-4.5 text-[#5A5A40] mt-0.5 shrink-0" />
                <div className="text-[#a09c94] font-mono leading-snug flex flex-col gap-1">
                  <a href="mailto:hafeez@ahteflooring.com" className="hover:text-white transition-colors">
                    hafeez@ahteflooring.com
                  </a>
                  <a href="mailto:namish@ahteflooring.com" className="hover:text-white transition-colors">
                    namish@ahteflooring.com
                  </a>
                  <a href="mailto:info@ahteflooring.com" className="hover:text-white transition-colors">
                    info@ahteflooring.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Certifications and municipal codes */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#f5f5f0] mb-4 border-b border-[#e1e1d7]/10 pb-2 font-bold">
              Standards & Quality
            </h4>
            <ul className="space-y-2.5 text-xs text-[#a09c94] font-sans">
              {GENERAL_SPECS.certifications.map((cert, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{cert}</span>
                </li>
              ))}
              <li className="pt-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#5A5A40]" />
                <span className="font-mono text-[10px] uppercase text-[#5a5650] font-bold tracking-widest">
                  5 Years in Dubai UAE
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal footer rights */}
        <div className="border-t border-[#e1e1d7]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-[#5a5650]">
          <span>&copy; {new Date().getFullYear()} A H T E Flooring Contracting LLC. All rights reserved.</span>
          <div className="flex gap-6">
            <span className="hover:text-[#a09c94] transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-[#a09c94] transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#a09c94] transition-colors cursor-pointer">DM Approval Guidelines</span>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
