import Image from "next/image";
import { ArrowRight, Sparkles, Shield, Compass, Calendar, Award, Star, ExternalLink } from "lucide-react";
import { SERVICES, GALLERY, GENERAL_SPECS } from "../data";

interface HomeViewProps {
  onNavigate: (tab: string) => void;
}

const GOOGLE_REVIEWS = [
  {
    author: "Tariq Al Mansoori",
    role: "Villa Owner, Palm Jumeirah",
    rating: 5,
    date: "1 week ago",
    comment: "A H T E Flooring designed & laid a magnificent seamless white terrazzo floor for our new beach residential villa. The marble chips density and brass metal dividers are absolutely perfect. Truly an outstanding team of professional craftsmen in Dubai.",
    avatarBg: "bg-[#5A5A40]",
    avatarInitials: "TM"
  },
  {
    author: "Elena Petrova",
    role: "Lead Architect, Studio-D",
    rating: 5,
    date: "3 weeks ago",
    comment: "We specified A H T E's monolithic terrazzo system for a commercial art gallery in Al Quoz. The mirror gloss 800-grit finish exceeded expectations under gallery lighting. Highly responsive engineers who understand architectural drawings.",
    avatarBg: "bg-[#1a1a1a]",
    avatarInitials: "EP"
  },
  {
    author: "Faisal Al Marzooqi",
    role: "Operations Director, Al Rigga Group",
    rating: 5,
    date: "1 month ago",
    comment: "Highly efficient team. They polished 1,200 square meters of commercial concrete subflooring within a tight 10-day timeline. The finished floor is incredibly flat, reflective and easy to maintain. Recommended flooring specialists in UAE.",
    avatarBg: "bg-[#a09c94]",
    avatarInitials: "FM"
  }
];

export default function HomeView({ onNavigate }: HomeViewProps) {
  // Select top projects to preview on Home
  const featuredProjects = GALLERY.slice(0, 3);

  return (
    <div className="bg-[#f5f5f0] min-h-screen text-[#1a1a1a]">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-[#1a1a1a] text-white min-h-[85vh] flex items-center">
        {/* Background Image layer with Overlay & Blur */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOUKXdurU3-3dvyfOA_d5KftMKntK4bFcfFvPF8BhWOLaUw3ttl8vhvppc9RlZYZmPVzunvLOeuYIZfG956AetCu4MmsM0f6so4dIQO_VezDFZYZBxJJjVzK6RTsBkPBO9IkksbeyXthG6QDJ9yq4P7GUwnzzjpK4xvJeDaqu7C7xjm0fISTock-hNg4wyjhsCrQn7bBTI-f4ttOi99z-hVnOQGiv3JA5KZXy1FLwhIZ-JU0Sx9CCqD82UvC_sbQVN92KoGTxvi2U"
            alt="Bespoke Terrazzo Pattern Texture"
            className="object-cover opacity-25 filter grayscale"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/95 via-[#1a1a1a]/70 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 py-20 w-full">
          <div className="max-w-3xl">
            <span className="text-[#edebe1] text-xs font-bold uppercase tracking-[0.4em] bg-[#5A5A40] px-4 py-2 rounded-full inline-block mb-6 shadow-sm shadow-[#5A5A40]/30 select-none">
              Premium Surface Artisan
            </span>
            <h1 className="text-5xl md:text-7xl font-light mb-8 leading-[1.05]" style={{ fontFamily: "'Georgia', serif" }}>
              Timeless <br /><i className="font-light italic text-[#edebe1]">Terrazzo</i> &
              <br /><span className="font-bold">Stonework.</span>
            </h1>
            <p className="text-base md:text-lg text-[#a09c94] max-w-md mb-12 leading-relaxed">
              Specializing in high-end bespoke terrazzo installations and meticulous surface restoration for architectural excellence in GCC climates.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mt-4">
              <button
                onClick={() => onNavigate("services")}
                className="bg-[#5A5A40] text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-[#5A5A40]/20 hover:scale-105 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate("terrazzo")}
                className="text-[#f5f5f0] hover:text-white flex items-center gap-2 group text-xs font-bold uppercase tracking-widest px-10 py-5 rounded-full border border-white/20 hover:border-white hover:scale-105 transition-all cursor-pointer"
              >
                View Configurator
                <span className="w-8 h-[1px] bg-white group-hover:w-12 transition-all"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Highlight ticker at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#1a1a1a]/60 backdrop-blur-md border-t border-[#e1e1d7]/10 py-4 z-10 hidden lg:block">
          <div className="max-w-7xl mx-auto px-6 flex justify-between text-[10px] font-bold uppercase tracking-[0.25em] text-[#a09c94]">
            <span>HEADQUARTERS: AL QUOZ, DUBAI</span>
            <span>DUBAI MUNICIPALITY QUALITY COMPLIANT</span>
            <span>LEED REGISTERED SUSTAINABLE MATERIALS</span>
            <span>SEAMLESS WORK ACROSS UAE</span>
          </div>
        </div>
      </section>

      {/* 2. Key Metrics Showcase */}
      <section className="bg-white py-14 border-b border-[#e1e1d7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center md:text-left md:border-r border-[#e1e1d7] last:border-0 pr-4">
              <span className="font-serif font-bold text-4xl text-[#1a1a1a] block">
                {GENERAL_SPECS.yearsInBusiness}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5A5A40] block mt-1 font-bold">
                Operational in GCC
              </span>
            </div>
            <div className="text-center md:text-left md:border-r border-[#e1e1d7] last:border-0 pr-4">
              <span className="font-serif font-bold text-4xl text-[#1a1a1a] block">
                {GENERAL_SPECS.projectsCompleted}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5A5A40] block mt-1 font-bold">
                Completed Deliveries
              </span>
            </div>
            <div className="text-center md:text-left md:border-r border-[#e1e1d7] last:border-0 pr-4">
              <span className="font-serif font-bold text-4xl text-[#1a1a1a] block">
                100% Seamless
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5A5A40] block mt-1 font-bold">
                Monolithic Resin Design
              </span>
            </div>
            <div className="text-center md:text-left">
              <span className="font-serif font-bold text-4xl text-[#1a1a1a] block">
                ISO 9001
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5A5A40] block mt-1 font-bold">
                Certified Quality standard
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Section with Image */}
      <section className="py-20 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image content */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#5A5A40]/10 rounded-[32px] -z-10"></div>
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMW1_pARDFC642BvwKcqqM1wZ7FNJXNZJjRIImirjyRZnCb7ufIPwVrDVlETY0pVhcEpBSqciY902tUKTbet_vVZ0Vd6ot-YGOb_fA1fxk0VnRQFv3PGf8ngCgiyymYLSM0qEKGxDdUxJdwiLR3KXRmFf07j2jtdSAorVh8AHLXHONydxp_puqtFwUlrvk0wrM5mPmWFZfRzfCQYXX9Wfjevp1OAx3dy2k8IL5QKhpNarsDESlyYKFYAkjM__35qoymN1444EONfE"
                alt="A H T E Architectural Showroom Board"
                width={500}
                height={480}
                className="w-full h-[480px] object-cover rounded-[32px] border border-[#e1e1d7] shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl border border-[#e1e1d7] hidden sm:block shadow-lg">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#5A5A40] block font-bold">Head of Craft</span>
                <span className="font-serif font-semibold text-[#1a1a1a] block mt-1 text-sm italic">Dubai Master Polishing Team</span>
                <span className="font-mono text-xs text-[#5A5A40] block mt-1 font-bold">&#9733;&#9733;&#9733;&#9733;&#9733; Verified</span>
              </div>
            </div>

            {/* Paragraph content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#5A5A40] block">
                Our Heritage & Standards
              </span>
              <h2 className="font-serif font-light text-3xl md:text-5xl text-[#1a1a1a] tracking-tight leading-tight">
                Crafting Exceptional Architectural Foundations Since 2008 &mdash; Al Quoz Dubai.
              </h2>
              <p className="text-base text-[#5a5650] leading-relaxed">
                A H T E Flooring has designed and laid over 400,000 square meters of high-spec monolithic floors across commercial skyscrapers, palatial residential estates, and industrial hubs. Our team coordinates every stage from base grinding to underfloor heating integration, water-jet brass linear inlay design, and ultimate mirror gloss stages.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                <div className="flex gap-3">
                  <div className="p-2 bg-[#edebe1] text-[#5A5A40] h-fit rounded-lg">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#1a1a1a] text-sm">Bespoke Formulating</h4>
                    <p className="text-xs text-[#a09c94] mt-0.5">Custom cement colors and locally sourced marble chip blending ratios.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="p-2 bg-[#edebe1] text-[#5A5A40] h-fit rounded-lg">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#1a1a1a] text-sm">Under-Floor Safe</h4>
                    <p className="text-xs text-[#a09c94] mt-0.5">High thermal mass flexibility preventing micro-fracture formations.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="p-2 bg-[#edebe1] text-[#5A5A40] h-fit rounded-lg">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#1a1a1a] text-sm">Brass & Metal Inlays</h4>
                    <p className="text-xs text-[#a09c94] mt-0.5">Incorporate geometric linear arrays matching luxury hospitality standards.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="p-2 bg-[#edebe1] text-[#5A5A40] h-fit rounded-lg">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#1a1a1a] text-sm">Rapid Turnaround</h4>
                    <p className="text-xs text-[#a09c94] mt-0.5">State-of-the-art multi-head planetary grinds keeping deadlines fast.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate("services")}
                  className="bg-[#5A5A40] hover:bg-[#1a1a1a] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md transition-all cursor-pointer"
                >
                  Explore services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Elite Floor systems overview */}
      <section className="bg-[#edebe1] py-20 border-t border-b border-[#e1e1d7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#5A5A40] block mb-2">
                Flooring Solutions
              </span>
              <h2 className="font-serif font-light text-3xl md:text-5xl text-[#1a1a1a] tracking-tight">
                Our Signature Flooring Systems
              </h2>
            </div>
            <button
              onClick={() => onNavigate("services")}
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#5A5A40] hover:text-[#1a1a1a] transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Technical Specifications</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="bg-white border border-[#e1e1d7] rounded-[32px] overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group"
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <Image
                      src={srv.image}
                      alt={srv.name}
                      width={300}
                      height={192}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 font-mono text-[9px] uppercase font-bold text-[#5A5A40] border border-[#e1e1d7] rounded-full">
                      {srv.type}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif font-bold text-lg text-[#1a1a1a] group-hover:text-[#5A5A40] transition-colors">
                      {srv.name}
                    </h3>
                    <p className="text-xs text-[#a09c94] mt-2.5 line-clamp-3 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="border-t border-[#e1e1d7] pt-4 flex justify-between items-center text-[11px] font-mono text-[#a09c94] font-semibold">
                    <span>Est. Price:</span>
                    <span className="text-[#1a1a1a] font-bold">{srv.pricePerSqmEstimate} AED/Sqm</span>
                  </div>
                  <button
                    onClick={() => {
                      if (srv.id === "terrazzo") {
                        onNavigate("terrazzo");
                      } else {
                        onNavigate("services");
                      }
                    }}
                    className="w-full bg-[#f5f5f0] group-hover:bg-[#5A5A40] group-hover:text-white text-[#5A5A40] py-3 mt-4 text-xs font-mono uppercase tracking-[0.1em] font-bold border border-[#e1e1d7] group-hover:border-[#5A5A40] transition-colors text-center block cursor-pointer rounded-full"
                  >
                    Configure System
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Highlight Projects Slider / Grid */}
      <section className="py-20 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#5A5A40] block mb-2">
                Dubai Case Studies
              </span>
              <h2 className="font-serif font-light text-3xl md:text-5xl text-[#1a1a1a] tracking-tight">
                Refining Landmark Spaces
              </h2>
            </div>
            <button
              onClick={() => onNavigate("gallery")}
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#5A5A40] hover:text-[#1a1a1a] transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Complete Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((p) => (
              <div
                key={p.id}
                className="group cursor-pointer"
                onClick={() => onNavigate("gallery")}
              >
                <div className="h-64 overflow-hidden border border-[#e1e1d7] rounded-[32px] relative mb-4">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={400}
                    height={256}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 text-[#5A5A40] font-mono text-[9px] uppercase tracking-wider px-3 py-1 border border-[#e1e1d7] rounded-full">
                    {p.location}
                  </div>
                </div>
                <div className="space-y-1.5 px-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#5A5A40] font-bold">
                    {p.type} Project ({p.year})
                  </span>
                  <h3 className="font-serif font-bold text-lg text-[#1a1a1a] group-hover:text-[#5A5A40] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#a09c94] line-clamp-2 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.5 Google Customer Reviews Section */}
      <section className="py-20 bg-white border-t border-b border-[#e1e1d7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#5A5A40]">
                  Verified Google Reviews
                </span>
              </div>
              <h2 className="font-serif font-light text-3xl md:text-5xl text-[#1a1a1a] tracking-tight">
                Trusted by Top Developers & Architects
              </h2>
            </div>

            {/* Google Rating Badge */}
            <div className="bg-[#f5f5f0] border border-[#e1e1d7] p-5 rounded-[24px] flex items-center gap-5 shrink-0 self-start lg:self-auto shadow-sm">
              <div className="w-12 h-12 bg-white rounded-full border border-[#e1e1d7] flex items-center justify-center font-bold text-xl italic font-serif text-[#1a1a1a] select-none shadow-sm">
                G
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4a373] text-[#d4a373]" />
                  ))}
                  <span className="font-mono text-xs font-bold text-[#1a1a1a] ml-1.5">5.0 / 5.0</span>
                </div>
                <div className="font-sans text-xs text-[#5a5650] mt-1 font-semibold">
                  Based on <span className="text-[#1a1a1a] font-bold">148+ verified reviews</span>
                </div>
                <a
                  href="https://share.google/ku42UQ6Khc2BvBuyu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] uppercase tracking-wider text-[#5A5A40] font-bold hover:text-[#1a1a1a] flex items-center gap-1 mt-1.5 transition-colors"
                >
                  <span>View on Google Search</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Grid of Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GOOGLE_REVIEWS.map((review, idx) => (
              <div
                key={idx}
                className="bg-[#f5f5f0]/40 border border-[#e1e1d7] rounded-[32px] p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Rating & Date */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#d4a373] text-[#d4a373]" />
                      ))}
                    </div>
                    <span className="font-mono text-[10px] text-[#a09c94] font-bold uppercase tracking-wider">
                      {review.date}
                    </span>
                  </div>

                  {/* Comment */}
                  <p className="text-xs md:text-sm text-[#5a5650] leading-relaxed italic">
                    "{review.comment}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3.5 mt-8 border-t border-[#e1e1d7]/60 pt-5">
                  <div className={`w-10 h-10 ${review.avatarBg} text-white font-mono text-xs font-bold rounded-full flex items-center justify-center select-none`}>
                    {review.avatarInitials}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#1a1a1a] text-sm">
                      {review.author}
                    </h4>
                    <span className="font-mono text-[9px] text-[#a09c94] uppercase tracking-widest block mt-0.5 font-bold">
                      {review.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action button beneath reviews */}
          <div className="mt-12 text-center">
            <a
              href="https://share.google/ku42UQ6Khc2BvBuyu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a1a] text-white hover:bg-[#5A5A40] font-mono text-xs uppercase tracking-widest font-bold rounded-full transition-all shadow-md shadow-black/10 hover:shadow-lg"
            >
              <span>Verify Reviews on Google</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 6. Dynamic Call to Action */}
      <section className="bg-[#1a1a1a] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 top-0 opacity-10">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc_Tg7xY2U68DGcoBT515e5qcwlkeCAxSxxz2SGRM0bENjY_2XYvFDt7BonKofXAbT0bAGKd_q8KTgtpyLJTPrkHDwp54FMkdC9qiFry7yfQ9N9ueFzjL5hwVNTvyIy6ccXDELij-yOOB2OY98uPq226gU-I4U3Oi_FpTR_dNPfDm5Ck1ztRtL3VH_MmGviSze44TRL_MPzNHPDwqdnKnmRG92kb-cu85KXRBZYhMHkIw9TQ5EehPuxYL7p9TiHya6eRRT3bT6cWg"
            alt="Terrazzo texture backdrop"
            className="object-cover filter grayscale"
            fill
            sizes="100vw"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10 space-y-6">
          <h2 className="font-serif font-light text-3xl md:text-5xl text-white tracking-tight">
            Ready to design your bespoke monolithic floor?
          </h2>
          <p className="text-[#a09c94] text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Input your dimensions into our proprietary estimator to download a structured specification proposal outlining marble density, grit parameters, and accurate UAE market pricing estimates.
          </p>
          <div className="pt-4 animate-bounce">
            <button
              onClick={() => onNavigate("terrazzo")}
              className="bg-[#5A5A40] text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-[#5A5A40]/35 hover:bg-[#edebe1] hover:text-[#1a1a1a]"
            >
              <span>Instant Quote Estimator</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
