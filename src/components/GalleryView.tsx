import { useState } from "react";
import Image from "next/image";
import { Search, SlidersHorizontal, Eye, X, Info, BadgeAlert, Layers, MapPin, Minimize2, MessageCircle, Linkedin, Instagram } from "lucide-react";
import { GALLERY } from "../data";
import { FlooringType } from "../types";

interface GalleryViewProps {
  onNavigate: (tab: string) => void;
}

export default function GalleryView({ onNavigate }: GalleryViewProps) {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<typeof GALLERY[0] | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Apply filters and searches
  const filteredProjects = GALLERY.filter((p) => {
    const matchesCategory =
      activeFilter === "ALL" ||
      p.type.toLowerCase().includes(activeFilter.toLowerCase()) ||
      (activeFilter === "INDUSTRIAL" && p.type === FlooringType.INDUSTRIAL);

    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#f5f5f0] min-h-screen py-16 text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Block */}
        <div className="max-w-3xl mb-12 space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#5A5A40] block">
            Contracting Showcases
          </span>
          <h1 className="font-serif font-light text-4xl md:text-5xl text-[#1a1a1a]">
            A Portfolio of Polished Spaces
          </h1>
          <p className="text-[#5a5650] text-sm md:text-base leading-relaxed">
            Take a comprehensive look at completed commercial high-rises, luxury residential villas, and heavy industrial hubs throughout the United Arab Emirates. Every space reflects our standard of quality.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-white border border-[#e1e1d7] rounded-[32px] p-6 mb-8 flex flex-col md:flex-row gap-6 justify-between items-center shadow-sm">
          {/* Categories */}
          <div className="flex flex-wrap gap-2.5 w-full md:w-auto">
            {[
              { label: "All Systems", value: "ALL" },
              { label: "Seamless Terrazzo", value: "Terrazzo" },
              { label: "Epoxy", value: "Epoxy" },
              { label: "Polished Concrete", value: "Concrete" },
              { label: "Industrial Coatings", value: "Industrial" }
            ].map((btn) => (
              <button
                key={btn.value}
                onClick={() => setActiveFilter(btn.value)}
                className={`px-4 py-2 font-mono text-[10px] uppercase tracking-widest font-bold rounded-full transition-all cursor-pointer ${
                  activeFilter === btn.value
                    ? "bg-[#5A5A40] text-white shadow-sm"
                    : "bg-[#f5f5f0] text-[#5A5A40] hover:bg-[#edebe1]"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Search bar input */}
          <div className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#a09c94]">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search by community (e.g. Palm Jumeirah)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-[#e1e1d7] rounded-full text-[#1a1a1a] bg-[#f5f5f0]/50 text-xs focus:outline-none focus:border-[#5A5A40] focus:bg-white transition-all font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-4.5 flex items-center text-xs text-[#a09c94] hover:text-[#1a1a1a] cursor-pointer font-mono font-semibold"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Project Grid count */}
        <div className="mb-6 font-mono text-xs text-[#a09c94] flex items-center justify-between font-bold">
          <span>SHOWING {filteredProjects.length} OF {GALLERY.length} PROJECTS</span>
          {activeFilter !== "ALL" && (
            <span>FILTERED BY: {activeFilter.toUpperCase()}</span>
          )}
        </div>

        {/* Main Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className="bg-white border border-[#e1e1d7] rounded-[32px] group cursor-pointer hover:shadow-2xl hover:border-[#5A5A40]/30 transition-all duration-300 overflow-hidden"
              >
                {/* Product image with metadata badge */}
                <div className="h-64 overflow-hidden relative">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                    fill
                    sizes="(max-w-7xl) 33vw, 100vw"
                  />
                  <div className="absolute top-4 left-4 bg-[#5A5A40]/90 text-white font-mono text-[9px] uppercase tracking-wider px-3 py-1 border border-[#e1e1d7]/20 rounded-full">
                    {proj.location}
                  </div>
                  {/* Hover icon */}
                  <div className="absolute inset-0 bg-[#1a1a1a]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-3 bg-white text-[#1a1a1a] font-bold shadow-lg flex items-center gap-1.5 uppercase tracking-widest text-[10px] font-mono rounded-full">
                      <Eye className="w-4 h-4 text-[#5A5A40]" />
                      <span>Explore Technical Specs</span>
                    </span>
                  </div>
                </div>

                {/* Info Text */}
                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[10px] uppercase font-bold text-[#5A5A40] tracking-widest">
                      {proj.type} Slabs
                    </span>
                    <span className="font-mono text-[10px] text-[#a09c94] font-bold">
                      Delivered {proj.year}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#1a1a1a] group-hover:text-[#5A5A40] transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-[#5a5650] line-clamp-2 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="pt-3.5 mt-2 border-t border-[#e1e1d7]/60 flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#a09c94] font-bold">
                      Share Showcase
                    </span>
                    <div className="flex gap-1.5">
                      {/* WhatsApp share */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const message = `Check out this amazing ${proj.type} flooring project: "${proj.title}" in ${proj.location} completed by A H T E Flooring!`;
                          const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message + " " + window.location.href)}`;
                          window.open(url, "_blank");
                        }}
                        title="Share via WhatsApp"
                        className="p-1.5 hover:bg-emerald-50 text-[#a09c94] hover:text-emerald-600 rounded-lg transition-colors cursor-pointer"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                      </button>

                      {/* LinkedIn share */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
                          window.open(url, "_blank");
                        }}
                        title="Share on LinkedIn"
                        className="p-1.5 hover:bg-sky-50 text-[#a09c94] hover:text-[#0077b5] rounded-lg transition-colors cursor-pointer"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                      </button>

                      {/* Instagram copy/open share details */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const text = `Check out "${proj.title}" in ${proj.location} completed by A H T E Flooring!`;
                          navigator.clipboard.writeText(window.location.href + "\n" + text).then(() => {
                            setCopiedId(proj.id);
                            setTimeout(() => setCopiedId(null), 2500);
                          });
                        }}
                        title="Copy specs for Instagram"
                        className="p-1.5 hover:bg-pink-50 text-[#a09c94] hover:text-[#e1306c] rounded-lg relative transition-colors cursor-pointer"
                      >
                        <Instagram className="w-3.5 h-3.5" />
                        {copiedId === proj.id && (
                          <span className="absolute bottom-8 right-0 bg-[#1a1a1a] text-[#edebe1] text-[8px] font-mono uppercase font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap z-30 tracking-wider">
                            Specs Copied!
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-[#e1e1d7] rounded-[32px]">
            <BadgeAlert className="w-12 h-12 text-[#a09c94] mx-auto mb-4" />
            <h3 className="font-serif font-bold text-lg text-[#1a1a1a]">No showcase matches found</h3>
            <p className="text-[#a09c94] text-xs mt-1">Try resetting the categoric tags or search terms to explore available records.</p>
            <button
              onClick={() => {
                setActiveFilter("ALL");
                setSearchQuery("");
              }}
              className="mt-6 px-6 py-3 bg-[#1a1a1a] hover:bg-[#5A5A40] text-white font-mono text-[10px] uppercase tracking-widest font-bold transition rounded-full cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* 3. Detailed Technical Spec Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-[#1a1a1a]/60 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl w-full border border-[#e1e1d7] rounded-[32px] overflow-hidden shadow-2xl relative grid grid-cols-1 md:grid-cols-12 max-h-[90vh]">
            
            {/* Close modal button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2.5 text-stone-100 md:text-[#5A5A40] bg-[#1a1a1a]/60 md:bg-[#f5f5f0]/80 hover:bg-[#5A5A40] hover:text-white rounded-full transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <Minimize2 className="w-4 h-4" />
            </button>

            {/* Left Col: Heavy high-res image */}
            <div className="md:col-span-12 lg:col-span-7 h-60 md:h-[550px] overflow-hidden relative">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                className="object-cover"
                fill
                sizes="(max-w-7xl) 60vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/85 via-transparent to-transparent md:hidden"></div>
              <div className="absolute bottom-4 left-4 text-white md:hidden">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#edebe1]" style={{ color: '#edebe1' }}>{selectedProject.type} System</span>
                <h4 className="font-bold text-base font-serif">{selectedProject.title}</h4>
              </div>
            </div>

            {/* Right Col: Technical Spec Sheet info */}
            <div className="md:col-span-12 lg:col-span-5 p-6 md:p-8 overflow-y-auto flex flex-col justify-between h-[350px] md:h-auto">
              <div className="space-y-6">
                <div>
                  <span className="font-mono text-[10px] uppercase font-bold text-[#5A5A40] tracking-widest block">
                    Completed Project Specs
                  </span>
                  <h3 className="font-serif font-bold text-xl md:text-2xl text-[#1a1a1a] mt-1 leading-snug">
                    {selectedProject.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[#a09c94] font-mono text-[10px] mt-1.5 font-semibold">
                    <MapPin className="w-3.5 h-3.5 shrink-0 text-[#5A5A40]" />
                    <span>{selectedProject.location}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#a09c94] block font-bold">
                    Description of work
                  </span>
                  <p className="text-xs leading-relaxed text-[#5a5650]">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Spec Table */}
                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#a09c94] block font-bold">
                    Technical Specifications
                  </span>
                  <div className="bg-[#f5f5f0] border border-[#e1e1d7] text-xs font-mono p-4 space-y-2.5 rounded-2xl">
                    <div className="flex justify-between border-b border-[#e1e1d7] pb-1.5">
                      <span className="text-[#a09c94] font-semibold">System Formula:</span>
                      <span className="font-bold text-[#1a1a1a]">{selectedProject.type} Matrix</span>
                    </div>
                    <div className="flex justify-between border-b border-[#e1e1d7] pb-1.5">
                      <span className="text-[#a09c94] font-semibold">Base Hue Color:</span>
                      <span className="font-bold text-[#1a1a1a]">{selectedProject.specDetails.baseColor}</span>
                    </div>
                    {selectedProject.specDetails.aggregateType && (
                      <div className="flex justify-between border-b border-[#e1e1d7] pb-1.5">
                        <span className="text-[#a09c94] font-semibold">Aggregate Type:</span>
                        <span className="font-bold text-[#1a1a1a] text-right max-w-[150px] truncate">{selectedProject.specDetails.aggregateType}</span>
                      </div>
                    )}
                    <div className="flex justify-between border-b border-[#e1e1d7] pb-1.5">
                      <span className="text-[#a09c94] font-semibold">Polishing Class:</span>
                      <span className="font-bold text-[#5A5A40]">{selectedProject.specDetails.finishLevel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#a09c94] font-semibold">Area Coverage:</span>
                      <span className="font-bold text-[#1a1a1a]">{selectedProject.area}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Configure system redirects */}
              <div className="pt-6 border-t border-[#e1e1d7] flex gap-3 self-stretch">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    if (selectedProject.serviceId === "terrazzo") {
                      onNavigate("terrazzo");
                    } else {
                      onNavigate("services");
                    }
                  }}
                  className="w-full py-4 bg-[#5A5A40] hover:bg-[#1a1a1a] text-white font-mono text-xs uppercase tracking-widest font-bold transition select-none cursor-pointer rounded-full text-center shadow-md shadow-[#5A5A40]/10"
                >
                  Configure Base shade
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
