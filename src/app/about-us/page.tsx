"use client";

import Link from "next/link";
import { Award, Shield, ThumbsUp, Users, ArrowRight, Zap, Target } from "lucide-react";

export default function AboutUsPage() {
  const stats = [
    { value: "15+", label: "Years in UAE" },
    { value: "500k+", label: "Sqm Installed" },
    { value: "100%", label: "DM Compliant" },
    { value: "50+", label: "Bespoke Swatches" },
  ];

  const coreValues = [
    {
      icon: Award,
      title: "Master Craftsmanship",
      desc: "Our installers carry multi-decade expertise in monolithic, cementitious, and epoxy terrazzo applications, blending precise marble aggregation with hand-polished finishes."
    },
    {
      icon: Shield,
      title: "Engineered Durability",
      desc: "Every installation adheres to ASTM/BS testing parameters and Dubai Municipality green regulations (Al Sa'fat), ensuring high-traffic longevity and eco-friendliness."
    },
    {
      icon: ThumbsUp,
      title: "Tailored Architecture",
      desc: "We work directly with architects and design firms to formulate unique aggregates, bespoke glass/metal divider layout schemes, and custom gloss level finishes."
    }
  ];

  return (
    <div className="bg-[#f5f5f0] min-h-screen py-20 text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#5A5A40] bg-[#5A5A40]/10 px-4 py-2 rounded-full inline-block">
              Architectural Legacy
            </span>
            <h1 className="font-serif font-light text-5xl md:text-6xl text-[#1a1a1a] leading-tight">
              Crafting Seamless <br />
              <span className="font-bold italic">Terrazzo Surfaces</span> in the UAE.
            </h1>
            <p className="text-[#5a5650] text-sm md:text-base leading-relaxed max-w-lg">
              A H T E Flooring is Dubai’s premier installer of heavy-duty seamless terrazzo, commercial epoxy coatings, and premium architectural micro-cements. We bring structural durability and luxury designs to life across residential villas, commercial lobbies, and public pavilions.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/terrazzo"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#5A5A40] hover:bg-[#1a1a1a] text-white font-mono text-xs uppercase tracking-widest font-bold rounded-full transition-all duration-300 shadow-md shadow-[#5A5A40]/15"
              >
                Cost Calculator <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#5A5A40] hover:bg-[#5a5a40]/5 text-[#5A5A40] font-mono text-xs uppercase tracking-widest font-bold rounded-full transition-all duration-300"
              >
                View Gallery
              </Link>
            </div>
          </div>
          
          {/* Aesthetic Info Panel */}
          <div className="bg-white border border-[#e1e1d7] rounded-[32px] p-8 md:p-12 shadow-sm space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#5A5A40]/5 rounded-bl-[100px]" />
            <h3 className="font-serif font-bold text-2xl text-[#1a1a1a]">Who We Are</h3>
            <p className="text-xs text-[#5a5650] leading-relaxed">
              Founded on the principles of Italian craftsmanship and modern Gulf architecture, A H T E Flooring specializes in formulating custom aggregates (using regional white marble, black basalt, mother-of-pearl, and colored silica glass) bound in premium cementitious or epoxy matrixes.
            </p>
            <p className="text-xs text-[#5a5650] leading-relaxed">
              We own and operate state-of-the-art planetary grinding and polishing equipment, guaranteeing flat, seamless, monolithic floors with chemical-resistant gloss levels ranging from matte to 800-grit high-sheen reflection.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white border border-[#e1e1d7] rounded-[32px] p-8 shadow-sm">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-4 border-r border-[#f5f5f0] last:border-0">
              <span className="block font-serif font-black text-4xl text-[#5A5A40] tracking-tight">
                {stat.value}
              </span>
              <span className="block font-mono text-[9px] text-[#a09c94] uppercase font-bold tracking-wider mt-1.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Core Values Section */}
        <div className="space-y-12">
          <div className="max-w-2xl space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#5A5A40] block">
              Our Principles
            </span>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#1a1a1a]">
              The Benchmarks of Our Installations
            </h2>
            <p className="text-xs md:text-sm text-[#5a5650] leading-relaxed">
              We execute every contract with military precision, focusing on optimal concrete base preparation, crack isolation membranes, and dust-free polishing techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="bg-white border border-[#e1e1d7] rounded-[24px] p-8 space-y-4 hover:shadow-md transition-shadow">
                  <div className="p-3 bg-[#f5f5f0] text-[#5A5A40] w-fit rounded-2xl border border-[#e1e1d7]/50">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-[#1a1a1a]">
                    {val.title}
                  </h4>
                  <p className="text-xs text-[#5a5650] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="bg-[#1a1a1a] text-[#edebe1] rounded-[32px] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute inset-0 bg-[#5A5A40]/10 pointer-events-none" />
          <div className="space-y-3 z-10 text-center md:text-left">
            <h3 className="font-serif font-bold text-2xl md:text-3xl text-white">
              Ready to calculate your surface specifications?
            </h3>
            <p className="text-xs text-[#a09c94] max-w-xl">
              Determine immediate custom pricing estimates for your residential or commercial terrazzo floors in Dubai, Abu Dhabi, or Sharjah.
            </p>
          </div>
          <Link
            href="/terrazzo"
            className="z-10 px-8 py-4 bg-[#5A5A40] text-white hover:bg-white hover:text-[#1a1a1a] font-mono text-xs uppercase tracking-widest font-bold rounded-full transition-all duration-300 shrink-0"
          >
            Launch Calculator &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
