import { useState } from "react";
import { 
  Award, Shield, BookOpen, Compass, CheckCircle2, ChevronDown, 
  MapPin, Scale, Thermometer, Droplets, Info, ExternalLink, HardHat, FileCheck
} from "lucide-react";

interface SeoHubViewProps {
  onNavigate: (tab: string) => void;
}

const NEIGHBORHOOD_GUIDES = [
  {
    area: "Palm Jumeirah & Coastal Zones",
    challenge: "High saline air humidity and subslab salt-damp moisture rising from seawater levels.",
    strategy: "Mandatory installation of heavy aliphatic damp-proof membranes (DPM) utilizing multi-layer polyurethane vapor blockers. We recommend high-grade resinous epoxy terrazzo to prevent salt crystallizations from degrading sub-aggregate bond matrices.",
    spec: "BS 8204 Part 4 compliant resin systems with UV-stable polyurethane topcoats.",
    system: "Epoxy Monolithic Terrazzo (Pure Alabaster White base)"
  },
  {
    area: "Al Quoz & Industrial/Logistics Yards",
    challenge: "Daily multi-ton forklift wheel friction, aggressive chemical storage washdowns, and heavy structural point loading.",
    strategy: "Installation of 6mm-9mm heavy-duty anti-slip polyurethane screeds. Subslab grinding with planetary-grade planetary grit heads to expose structural concrete cores to 40 MPa compression before overlay application.",
    spec: "FeRFA Category 8 industrial polyurethane screeds with quartz anti-slip broadcast.",
    system: "Industrial Polyurethane & Heavy-Duty Screeds"
  },
  {
    area: "Downtown Dubai & DIFC Commercial Atriums",
    challenge: "Extreme daily foot traffic (millions of steps yearly) requiring mirror high-gloss finishes with low maintenance cycles under bright spotlights.",
    strategy: "Premium cementitious terrazzo (monolithic casting) combined with state-of-the-art clear lithium silicate densifying treatments. Dual stage planetary polishing up to 800-grit to create a scratch-proof reflective surface.",
    spec: "Damp-cured for 28 days with zero VOCs and high interior light bounce.",
    system: "800-Grit Mirror Polished Terrazzo"
  },
  {
    area: "Emirates Hills & Private Residential Villas",
    challenge: "Integration over modern under-floor climate water matrices and fluid indoor-outdoor marble layouts with zero expansion visible.",
    strategy: "Application of flexible latex-modified polymer matrices allowing subtle thermal expansion contraction without cracking. Precision water-jet cut brass joints matching geometric structural layouts.",
    spec: "Flexible latex substrate reinforcement layers complying with UAE residential building safety manuals.",
    system: "Microcement Coating & Decorative Screeds"
  }
];

export default function SeoHubView({ onNavigate }: SeoHubViewProps) {
  const [activeGuide, setActiveGuide] = useState<number | null>(0);
  const [selectedArea, setSelectedArea] = useState<number>(0);
  const [showMetadataRaw, setShowMetadataRaw] = useState(false);

  const toggleGuide = (index: number) => {
    setActiveGuide(activeGuide === index ? null : index);
  };

  const eeatCredentials = [
    {
      title: "Dubai Municipality (DM) Approved Materials",
      description: "Our cementitious binders, colored aggregates, and lithium-silicate densifiers are fully conforming to the Dubai Municipality Standard Specifications. Materials undergo rigorous lab strength tests prior to casting.",
      code: "DM-SPEC-2026/F"
    },
    {
      title: "British Standard (BS 8204) Installation Guidelines",
      description: "We strictly implement BS 8204 concrete substrate preparation testing protocols. Moisture profiles are verified utilizing moisture meters to be below 4.0% dry equivalents prior to bonding.",
      code: "BS 8204 Part 4/6/8"
    }
  ];

  return (
    <div className="bg-[#f5f5f0] min-h-screen py-16 text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SEO Header Hero */}
        <div className="border-b border-[#e1e1d7] pb-12 mb-16 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-[#5A5A40]">
              <BookOpen className="w-5 h-5" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#5A5A40]">
                E-E-A-T Architectural Authority Center
              </span>
            </div>
            <h1 className="font-serif font-light text-4xl md:text-6xl text-[#1a1a1a] tracking-tight leading-none">
              Topical Knowledge & <br />Engineering Standards
            </h1>
            <p className="text-sm md:text-base text-[#5a5650] max-w-2xl leading-relaxed">
              Welcome to the A H T E Flooring UAE engineering portal. Our master craftsmen and concrete technologists compile practical data to align with Dubai Municipality codes and BS 8204 building parameters.
            </p>
          </div>

          <div className="bg-[#5A5A40] text-white p-6 rounded-[24px] max-w-xs shrink-0 self-start lg:self-auto shadow-sm">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#edebe1] block font-semibold mb-1">
              REGIONAL DOMAIN
            </span>
            <span className="font-serif font-bold text-2xl block text-[#edebe1] uppercase italic">
              A H T E FLOORING.AE
            </span>
            <p className="text-[11px] text-[#edebe1]/80 mt-2 leading-relaxed">
              Fully optimized server-side caching and local JSON-LD schemas parsed for UAE crawlers to target Google Dubai Local search indexes.
            </p>
          </div>
        </div>

        {/* EEAT Multi-grid Badges */}
        <section className="mb-20">
          <div className="flex items-center gap-2 mb-8">
            <Award className="w-5 h-5 text-[#5A5A40]" />
            <h2 className="font-serif font-bold text-xl md:text-2xl text-[#1a1a1a]">
              Corporate Compliance & License Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {eeatCredentials.map((cred, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#e1e1d7] p-6 rounded-[24px] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-full bg-[#f5f5f0] flex items-center justify-center text-[#5A5A40]">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-bold text-sm text-[#1a1a1a] leading-snug">
                    {cred.title}
                  </h3>
                  <p className="text-xs text-[#5a5650] leading-relaxed">
                    {cred.description}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-[#f5f5f0] flex justify-between items-center text-[10px] font-mono font-bold text-[#5A5A40]">
                  <span>CODE REF:</span>
                  <span className="bg-[#f5f5f0] px-2 py-0.5 rounded">{cred.code}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Architectural Tech Guides Accordion Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-[#5A5A40]">
              <HardHat className="w-4 h-4" />
              <span className="font-mono text-[10px] uppercase font-bold tracking-widest">
                Technical Knowledge Base
              </span>
            </div>
            <h2 className="font-serif font-light text-3xl md:text-4xl text-[#1a1a1a] tracking-tight">
              Dubai Concrete Substrate Guides
            </h2>
            <p className="text-xs md:text-sm text-[#5a5650] leading-relaxed">
              Proper preparation is the foundation of structural terrazzo and seamless flooring. Under GCC summer temperatures rising past 45°C, moisture and expansion controls require stringent engineering audits. Select a guide to inspect specifications.
            </p>

            <div className="bg-[#edebe1]/60 p-6 rounded-[24px] border border-[#e1e1d7] space-y-3 mt-6">
              <div className="flex items-center gap-2 text-[#1a1a1a] font-bold text-xs font-mono">
                <Info className="w-4 h-4 text-[#5A5A40]" />
                <span>E-E-A-T SEARCH REPUTATION STATEMENT</span>
              </div>
              <p className="text-[11px] text-[#5a5650] leading-relaxed">
                By maintaining these documentation logs publicly, A H T E Flooring conforms with Google's search criteria regarding verified Experience, Expertise, and Transparency for industrial flooring categories in Dubai, outranking generic competitors who lack local engineering licenses.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {[
              {
                title: "Concrete Subfloor Preparation Requirements (BS 8204)",
                summary: "Substrate structural strength, sand blasting, and damp limits before casting terrazzo.",
                content: "Sub-slabs must meet a minimum compressive strength of 30 N/mm² (C30 concrete standard) and a pull-off tensile bond strength exceeding 1.5 N/mm². Substrates are thoroughly blast-cleaned, ground, or vacuum shot-blasted to remove any residual curing agents or concrete laitance. Relative humidity checks are conducted aggressively; subslabs must index under 4% moisture by weight. Any readings above this limit require a dedicated moisture vapor suppressor grid (epoxy-based) to block damp-rising pressure cycles."
              },
              {
                title: "GCC Summer Thermal Expansion & Seam Controls",
                summary: "Designing floor layouts to tolerate under-floor ducted AC and high heat fluctuations.",
                content: "In Dubai, rapid temperature differentials can cause subfloor micro-movements. Brass and zinc control linear dividers serve a structural role by matching internal concrete expansion lines. Strips are cast directly over active crack joints to isolate slab stress. Our flexible resin binders utilize specialized elastic properties that distribute expansion tension evenly across seamless grids up to 150 sqm without causing local stress fractures."
              },
              {
                title: "In-Situ Terrazzo Curing & Planetary Diamond Polishing Stages",
                summary: "The 28-day concrete curing formula vs. resinous multi-stage diamond grit processes.",
                content: "For cementitious terrazzo systems, water-sprinkled damp curing is maintained for 21 to 28 days to yield optimal silica strength. Afterward, heavy planetary diamond grinders with grit speeds scaling from 50 (coarse milling), 120, 220, 400 (satin reflection), up to 800 (high mirror sheen) are deployed wet to ensure dustless execution. For resin systems, grinding can commence 24 hours after cast application, using active lithium densifiers to crystalize aggregate matrices and block moisture pores."
              }
            ].map((guide, idx) => {
              const isOpen = activeGuide === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-[#e1e1d7] rounded-[24px] overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleGuide(idx)}
                    className="w-full text-left p-6 flex justify-between items-start gap-4 hover:bg-[#edebe1]/20 transition-colors"
                  >
                    <div>
                      <h4 className="font-serif font-bold text-base text-[#1a1a1a]">
                        {guide.title}
                      </h4>
                      <p className="text-xs text-[#5a5650] mt-1">
                        {guide.summary}
                      </p>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-[#5A5A40] shrink-0 mt-1 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-[#f5f5f0] text-xs md:text-sm text-[#5a5650] leading-relaxed font-sans space-y-3 bg-[#f5f5f0]/30 animate-fadeIn">
                      <p>{guide.content}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Neighborhood Geolocation Interactive Map & Spec Simulator */}
        <section className="bg-white border border-[#e1e1d7] rounded-[32px] p-8 md:p-12 shadow-sm mb-20">
          <div className="max-w-3xl mb-10 space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#5A5A40] block">
              UAE Geographical Experience Map
            </span>
            <h2 className="font-serif font-light text-2xl md:text-4xl text-[#1a1a1a] tracking-tight">
              Dubai Sector-Specific Soil & Slab Engineering
            </h2>
            <p className="text-xs md:text-sm text-[#5a5650] leading-relaxed">
              Every neighborhood in Dubai presents distinct environmental stresses. Soil salt content, relative atmospheric humidity indices, and sub-slab designs influence thermal movement tolerances. Select a neighborhood below to view specific contractor strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Quick selectors list */}
            <div className="lg:col-span-4 space-y-2.5">
              {NEIGHBORHOOD_GUIDES.map((g, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedArea(index)}
                  className={`w-full text-left p-5 transition-all text-xs md:text-sm font-semibold flex items-center justify-between rounded-xl border ${
                    selectedArea === index
                      ? "bg-[#5A5A40] text-white border-[#5A5A40] font-bold pl-7"
                      : "bg-[#f5f5f0] text-[#1a1a1a] border-[#e1e1d7] hover:border-[#5A5A40] pl-5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span>{g.area}</span>
                  </div>
                  <span>&rarr;</span>
                </button>
              ))}
            </div>

            {/* Simulated Report Board */}
            <div className="lg:col-span-8 bg-[#f5f5f0]/50 border border-[#e1e1d7] rounded-[24px] p-8 space-y-6">
              <div className="flex justify-between items-center border-b border-[#e1e1d7] pb-4">
                <div>
                  <span className="font-mono text-[9px] text-[#a09c94] font-bold uppercase block tracking-widest">
                    ACTIVE PROJECT LOCATION OUTLINE
                  </span>
                  <h3 className="font-serif font-bold text-xl text-[#1a1a1a] mt-0.5">
                    {NEIGHBORHOOD_GUIDES[selectedArea].area}
                  </h3>
                </div>
                <span className="font-mono text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-100 font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Fully Optimized
                </span>
              </div>

              {/* Data Rows */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm">
                <div className="space-y-1.5 p-4 bg-white border border-[#e1e1d7] rounded-xl">
                  <span className="font-mono text-[9px] text-[#5A5A40] uppercase font-bold tracking-wider flex items-center gap-1">
                    <Droplets className="w-3.5 h-3.5" /> Environmental Risk Profile
                  </span>
                  <p className="text-[#1a1a1a] leading-relaxed font-sans text-xs">
                    {NEIGHBORHOOD_GUIDES[selectedArea].challenge}
                  </p>
                </div>

                <div className="space-y-1.5 p-4 bg-white border border-[#e1e1d7] rounded-xl">
                  <span className="font-mono text-[9px] text-[#5A5A40] uppercase font-bold tracking-wider flex items-center gap-1">
                    <Scale className="w-3.5 h-3.5" /> Contractor Installation Strategy
                  </span>
                  <p className="text-[#1a1a1a] leading-relaxed font-sans text-xs">
                    {NEIGHBORHOOD_GUIDES[selectedArea].strategy}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm">
                <div className="space-y-1 bg-white p-4 border border-[#e1e1d7] rounded-xl">
                  <span className="font-mono text-[9px] text-[#a09c94] uppercase font-bold block">Dubai Building Code Spec Target:</span>
                  <span className="font-sans font-bold text-[#1a1a1a] text-xs">
                    {NEIGHBORHOOD_GUIDES[selectedArea].spec}
                  </span>
                </div>

                <div className="space-y-1 bg-white p-4 border border-[#e1e1d7] rounded-xl">
                  <span className="font-mono text-[9px] text-[#a09c94] uppercase font-bold block">Recommended System Setup:</span>
                  <span className="font-serif text-[#5A5A40] font-extrabold text-sm block mt-0.5">
                    {NEIGHBORHOOD_GUIDES[selectedArea].system}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#e1e1d7] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-[11px] text-[#5a5650] max-w-md">
                  Have an incoming property in this area? Specify this neighborhood code when lodging your design blueprint to receive pre-balanced aggregate sample boards tailored to the soils.
                </p>
                <button
                  onClick={() => onNavigate("services")}
                  className="font-mono text-[10px] uppercase font-bold tracking-wider text-white bg-[#1a1a1a] hover:bg-[#5A5A40] px-5 py-3 rounded-full shrink-0 transition"
                >
                  Apply neighborhood Spec &rarr;
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Playful Crawl Inspector Sandbox for E-E-A-T Evidence */}
        <section className="bg-[#1a1a1a] text-white rounded-[32px] p-8 md:p-12 overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#5A5A40]/10 rounded-full blur-[100px] -z-10"></div>
          
          <div className="max-w-2xl mb-10 space-y-3">
            <span className="font-mono text-[10px] uppercase font-bold text-[#edebe1] tracking-[0.25em] block">
              SEARCH ENGINE CRAWLER COMPLIANCE BOARD
            </span>
            <h2 className="font-serif font-light text-2xl md:text-4xl tracking-tight text-white leading-tight">
              Bot Validation & Schema Simulator (.ae domain)
            </h2>
            <p className="text-xs md:text-sm text-[#a09c94] leading-relaxed">
              We provide fully transparent semantic references. Search bots (like Googlebot) read the JSON-LD schemas embedded in our DOM to catalogue our Al Quoz licenses, trade registration, address, and physical locations. Click below to inspect our optimized corporate metadata logs.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3">
              <button
                onClick={() => setShowMetadataRaw(!showMetadataRaw)}
                className="px-6 py-3 bg-[#5A5A40] hover:bg-[#edebe1] hover:text-[#1a1a1a] text-white font-mono text-xs uppercase tracking-wider font-bold rounded-full transition-all cursor-pointer shadow-md"
              >
                {showMetadataRaw ? "Hide Schema Logs" : "Inspect Raw JSON-LD Schema"}
              </button>
              
              <a 
                href="https://share.google/ku42UQ6Khc2BvBuyu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/25 text-white font-mono text-xs uppercase tracking-wider font-bold rounded-full transition-all cursor-pointer"
              >
                <span>Verify Google Search ID Entity</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {showMetadataRaw && (
              <div className="bg-black/40 border border-[#e1e1d7]/10 p-5 rounded-2xl font-mono text-[10px] md:text-xs text-emerald-400 overflow-x-auto leading-relaxed max-w-full">
                <pre>{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "A H T E Flooring LLC",
  "image": "https://lh3.googleusercontent.com/aida-public/AB6AX...",
  "@id": "https://ahteflooring.ae/#corporation",
  "url": "https://ahteflooring.ae/",
  "telephone": "+97143405555",
  "priceRange": "AED 180 - AED 450 per Sqm",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Warehouse 14, Sector 6, Al Quoz Industrial Area 3",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "addressCountry": "AE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 25.1278,
    "longitude": 55.2345
  },
  "knowsAbout": ["Terrazzo Flooring", "Microcement Screeds", "Polished Concrete", "BS 8204 compliance"],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "08:00",
    "closes": "18:00"
  }
}`}</pre>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[#a09c94] text-[9px]">
                  <span>CRAWLER STATUS: 200 OK</span>
                  <span>CANONICAL: https://ahteflooring.ae/</span>
                  <span>GEOLOCATION LOCK: Dubai, United Arab Emirates</span>
                </div>
              </div>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}
