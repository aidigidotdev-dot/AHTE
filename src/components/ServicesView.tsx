import { useState } from "react";
import Image from "next/image";
import { 
  Check, ClipboardList, Clock, ShieldAlert, BadgeCheck, HelpCircle, 
  ArrowRight, X, Layers, Coins, Activity, Droplets, Leaf, Sliders, Sparkles,
  Wrench, Hammer, Calendar, ChevronRight
} from "lucide-react";
import { SERVICES, GENERAL_SPECS } from "../data";

interface ServicesViewProps {
  onNavigate: (tab: string) => void;
}

const COMPARISON_DATA = [
  {
    id: "terrazzo",
    name: "Terrazzo Flooring",
    thickness: "8mm to 15mm",
    durability: "Supreme (50-Year Lifespan)",
    basePrice: 450,
    finish: "Custom Gloss (400 to 800 Grit)",
    moistureResist: "Excellent (With DPM membrane)",
    sustainabilityNote: "Maximum (Natural local stone)",
    dubaiApproved: "Yes (Fully Certified DM-SPEC-2026)",
    vocStatus: "Low-VOC (Al Sa'fat Compliant)",
    installCrew: "Specialist Contractor Required",
    suitability: {
      "Residential Villa": "Exceptional (Premium Living Areas & Entryways)",
      "Commercial": "Exceptional (High-traffic Atriums & Malls)",
      "Industrial Facility": "Moderate (Requires thick heavy-duty aggregate)"
    }
  },
  {
    id: "epoxy",
    name: "Metallic & Decorative Epoxy",
    thickness: "2mm to 4mm",
    durability: "Outstanding (15-Year Wear)",
    basePrice: 280,
    finish: "High-Gloss Liquid Pearlescent Glaze",
    moistureResist: "Absolute (Seamless resinous skin)",
    sustainabilityNote: "Medium (Low-VOC polymers)",
    dubaiApproved: "Yes (Fully Certified DM-SPEC-2026)",
    vocStatus: "Low-VOC (Al Sa'fat Compliant)",
    installCrew: "Specialist Contractor Required",
    suitability: {
      "Residential Villa": "Excellent (Feature interiors / Playful spaces)",
      "Commercial": "Excellent (High-end retail showrooms & galleries)",
      "Industrial Facility": "Moderate (Susceptible to heavy steel scratch)"
    }
  },
  {
    id: "industrial",
    name: "Industrial Polyurethane & Screeds",
    thickness: "6mm to 9mm",
    durability: "Extreme (25-Year industrial resilience)",
    basePrice: 220,
    finish: "Medium-Grit Slip-Resistant Texture",
    moistureResist: "Absolute (Vapor dry options standard)",
    sustainabilityNote: "Medium (Zero VOC, decreases replacement costs)",
    dubaiApproved: "Yes (Fully Certified DM-SPEC-2026)",
    vocStatus: "Low-VOC (Al Sa'fat Compliant)",
    installCrew: "Specialist Contractor Required",
    suitability: {
      "Residential Villa": "Low (Aesthetic profile is industrial grey)",
      "Commercial": "Moderate (Commercial back of house & coolers)",
      "Industrial Facility": "Exceptional (Heavy machinery, warehouses, airports)"
    }
  },
  {
    id: "microcement",
    name: "Microcement Coating & Screeds",
    thickness: "2mm to 4mm",
    durability: "Superior (20-Year Lifespan)",
    basePrice: 320,
    finish: "Soft-Satin Cloudy Slate Texture",
    moistureResist: "100% Waterproof (Bath & spa sealer specs)",
    sustainabilityNote: "High (Low volume overlay, no quarry extraction)",
    dubaiApproved: "Yes (Fully Certified DM-SPEC-2026)",
    vocStatus: "Low-VOC (Al Sa'fat Compliant)",
    installCrew: "Specialist Contractor Required",
    suitability: {
      "Residential Villa": "Exceptional (Bespoke baths, fireplace walls, floors)",
      "Commercial": "Excellent (Boutique coffee shops & boutique studios)",
      "Industrial Facility": "Low (Not engineered for multi-ton heavy forklift)"
    }
  }
];

const TIMELINE_STEPS: Record<string, {
  systemName: string;
  duration: string;
  steps: {
    stage: string;
    title: string;
    description: string;
    specText: string;
    equipment: string;
    gccMitigation: string;
    status: string;
  }[];
}> = {
  terrazzo: {
    systemName: "Terrazzo Flooring",
    duration: "7 - 14 Days Active (excluding 28-day hydration cure if cementitious)",
    steps: [
      {
        stage: "01",
        title: "Subfloor Evaluation & Damp Proofing",
        description: "Verify substrate compressive strength conforms to C30 guidelines (>30 N/mm²). Grind away weak paste and test moisture levels. Apply multi-layer epoxy vapor suppressors.",
        specText: "BS 8204 Part 4 compliance; Relative Humidity < 4%",
        equipment: "Planetary Shot-Blasters, Tramex Moisture Meters",
        gccMitigation: "Seals porous subslab against high coastal water columns in Dubai Jumeirah soils.",
        status: "Substrate Preparation"
      },
      {
        stage: "02",
        title: "Brass Joint System Profiling",
        description: "Adhere custom solid brass or zinc divider profiles directly over the concrete joint matrix layout to direct structural thermal shift and define aggregations.",
        specText: "Anti-crack joints configured to match active deflection axes.",
        equipment: "Laser Leveling Guides, High-bond Polymer Adhesives",
        gccMitigation: "Compensates for minor concrete movements caused by underfloor water climate cooling.",
        status: "Thermal Joints"
      },
      {
        stage: "03",
        title: "Monolithic Aggregate Casting",
        description: "Combine select aggregate combinations with high-strength binders (white cementitious mix or pure aliphatic resins) and pour seamlessly.",
        specText: "High-density aggregates distributed at uniform 70% ratios.",
        equipment: "Monolithic Mixing Drums, Trowel Levelers",
        gccMitigation: "Aggressive humidity control maintained to ensure the matrix doesn't dry prematurely.",
        status: "Structural Pouring"
      },
      {
        stage: "04",
        title: "Controlled Curing Profile",
        description: "Allow cementitious matrices to hydrate under water spray cycles for 14-28 strength peaks. Synthetic resin bases are stable for diamond grinding within 24 hours.",
        specText: "Moist cure hydration conforming to DM standards.",
        equipment: "Moisture-retaining Blankets, Controlled Ventilation Guards",
        gccMitigation: "Wet blankets prevent early water evaporation and cracking under high Dubai ambient air.",
        status: "Hydration Control"
      },
      {
        stage: "05",
        title: "Final Surface Finishing",
        description: "Incorporate high-speed grinding heads with diamond grits ranging from 50 (coarse levels) scaling progressively upwards to 400 (honed satin) or 800 (high key mirror). Treat with lithium densifiers.",
        specText: "Finished to project specification and sealed with silicate crystalizers.",
        equipment: "3-Phase Surface Preparation & Finishing Units",
        gccMitigation: "Wet-vacuum systems capture 100% of silica particulate, maintaining Al Sa'fat air indexes.",
        status: "Exposing Aggregate"
      }
    ]
  },
  epoxy: {
    systemName: "Metallic & Decorative Epoxy",
    duration: "4 - 5 Operational Days",
    steps: [
      {
        stage: "01",
        title: "Mechanical Laitance Extraction",
        description: "Mechanically prepare subfloor to generate a concrete surface profile (CSP) of 3. Clear existing laitance, opening the capillary matrix of the concrete core.",
        specText: "Exposes raw aggregates for structural polymer bonding.",
        equipment: "Heavy Duty Diamond Grinders, Industrial Vacuums",
        gccMitigation: "Ensures any active dust from desert air draft does not weaken the polymer adhesion.",
        status: "Slab Grinding"
      },
      {
        stage: "02",
        title: "Moisture-Rejecting Primer Coat",
        description: "Squeegee a specialized 100% solids epoxy damp-barrier primer that flows deep into concrete pores, blocking rising gases that cause blistering.",
        specText: "Vapor-tight sealing stage prevents future pinhole release.",
        equipment: "Medium-nap squeegees, High-pressure airless rollers",
        gccMitigation: "Restricts subsoil moisture expansion during peak midday heat cycles.",
        status: "Vapor Blocking"
      },
      {
        stage: "03",
        title: "Metallic Pigmentation & Infusion Flow",
        description: "Cast a heavy pearlescent buildcoat with specialized organic metallic powders. Skilled installers draw swirled vectors to form a custom stone mineral layout.",
        specText: "Self-leveling chemical distribution at 2mm thickness.",
        equipment: "Toothed spatulas, Air-vent spiked rollers, Solvents",
        gccMitigation: "Mixed in air-conditioned environments to prevent flash-curing or solvent bubbling.",
        status: "Artistic Pouring"
      },
      {
        stage: "04",
        title: "Polyurethane Scratch Wear Guard",
        description: "Roll out a clear premium aliphatic polyurethane skin, locking the pearlescent colors in. Ensures UV-stable high clarity and micro-scratch resistance.",
        specText: "Scratch-resistant satin/gloss topcoat layer.",
        equipment: "Microfiber rollers, Precision spray mutes",
        gccMitigation: "Blocks UAE intense ambient solar radiation from disfiguring or yellowing clear resins.",
        status: "Protective Shield"
      }
    ]
  },
  industrial: {
    systemName: "Industrial Polyurethane Screeds",
    duration: "3 - 5 Days Active",
    steps: [
      {
        stage: "01",
        title: "Shear Anchor Key-Cutting",
        description: "Chisel keyways (chases) twice the width of the system thickness around all concrete slab perimeter edges, columns, and gutters to direct tensile load.",
        specText: "Crucial physical anchors for high heavy machinery shear stresses.",
        equipment: "Chasing Cutters, Hand-held Demolition Shovels",
        gccMitigation: "Preempts hot concrete substrate expansion from shearing off edge bonds.",
        status: "Structural Keys"
      },
      {
        stage: "02",
        title: "Priming with Aligned Damp Barriers",
        description: "Prime the concrete slab with a scratch coat polyurethane damp block to seal capillaries and ensure optimal crossgroup adhesion.",
        specText: "Waterproof sealing stage for extreme wet factory washes.",
        equipment: "Trowels, notched scrapers",
        gccMitigation: "Forms a rigid vapor barricade against ground-water level shifts.",
        status: "Adhesives"
      },
      {
        stage: "03",
        title: "Heavy Polyurethane Aggregate Screeding",
        description: "Rake down multi-pack polyurethane cementitious hybrid screeds embedded with aggregate quartz profiles at 6mm to 9mm scope. Compact firmly.",
        specText: "Conforms to highest FeRFA category standards (up to Class 8).",
        equipment: "Pin rakes, heavy hand trowels, screeding boards",
        gccMitigation: "Mixed in precise weight metrics; climate sheltered to maintain optimal binder fluid flow.",
        status: "Screed Casting"
      },
      {
        stage: "04",
        title: "Hydro-thermal Slip-Satin Grouting",
        description: "Apply specialized thermal-shock pigment sealers, creating a seamless high-friction profile that resists temperature swings and extreme washdowns.",
        specText: "Withstands boiling temperatures up to 120 degrees Celsius.",
        equipment: "High-grade rollers, thick nap squeegees",
        gccMitigation: "Ensures warehouse kitchens and food plants maintain 100% sterile DM compliance.",
        status: "Thermal Cure"
      }
    ]
  },
  microcement: {
    systemName: "Microcement Decorative Screeds",
    duration: "5 - 6 Days Active",
    steps: [
      {
        stage: "01",
        title: "Fiberglass Mat Bonding",
        description: "Bond synthetic high-elastic fiberglass fiber mesh over the substrate boundaries (tiles, boards) with adhesion promoter primers to bridge joint motion.",
        specText: "Prevents subfloor tile movements from transferring to the surface.",
        equipment: "Mesh cutters, composite binding rollers, epoxy primers",
        gccMitigation: "Minimizes structural movements inside private villas undergoing climate transitions.",
        status: "Mesh Stabilization"
      },
      {
        stage: "02",
        title: "Base-Polymers Structural screed",
        description: "Apply the first thick polymer aggregates to flatten minor discrepancies, establish deep cohesion, and provide structural reinforcement.",
        specText: "Provides high-load support across all microcement coats.",
        equipment: "Serrated steel hawk/spatulas, planetary orbital sanders",
        gccMitigation: "Slow-set polymers used during peak midday hours to keep the overlay active.",
        status: "Levelling Coarse"
      },
      {
        stage: "03",
        title: "Cloudy Satin Pigmented Overlay",
        description: "Trowel down ultra-fine mineral powders enriched with color aggregates. Installer applies micro circular motion strokes to form natural mineral shadows.",
        specText: "Precision 1.5mm architectural finish, highly satin to touch.",
        equipment: "Exquisite Venetian flexible metal trowels, hand sanders",
        gccMitigation: "Expert hand movements guarantee custom texture shadows, achieving high aesthetic density.",
        status: "Aesthetic Coat"
      },
      {
        stage: "04",
        title: "Hydrophobic Polyurethane Impregnation",
        description: "Soak the microcement deep with polyurethane sealer resins. Blocks microscopic pores, providing high resistance to water drop staining.",
        specText: "100% chemical tight sealing stage; meets humid wet spa specs.",
        equipment: "Fine-milled short-nap foam rollers, micro-applicators",
        gccMitigation: "Protects bathroom floors and walls against hot salt steam and local moisture spots.",
        status: "Vapor Protection"
      }
    ]
  }
};

export default function ServicesView({ onNavigate }: ServicesViewProps) {
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string | null>(null);
  const [areaSquareMeters, setAreaSquareMeters] = useState<number>(150);
  const [finishStyle, setFinishStyle] = useState<string>("Satin 400-Grit");
  const [projectSector, setProjectSector] = useState<string>("Commercial");
  const [isQuoteSubmitted, setIsQuoteSubmitted] = useState(false);
  const [selectedTimelineSystem, setSelectedTimelineSystem] = useState("terrazzo");
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);
  const [highlightDifferences, setHighlightDifferences] = useState(false);

  // Helper helper to dynamically check if a property is identical across all five flooring systems
  const isFeatureIdentical = (key: string) => {
    if (COMPARISON_DATA.length === 0) return false;
    const firstVal = COMPARISON_DATA[0][key as keyof typeof COMPARISON_DATA[0]];
    if (key === "suitability") {
      const firstSuit = COMPARISON_DATA[0].suitability[projectSector as keyof typeof COMPARISON_DATA[0]["suitability"]];
      return COMPARISON_DATA.every(sys => sys.suitability[projectSector as keyof typeof sys["suitability"]] === firstSuit);
    }
    return COMPARISON_DATA.every(sys => sys[key as keyof typeof sys] === firstVal);
  };

  // Form states
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");

  const calculateServiceCost = (pricePerSqm: number) => {
    let base = areaSquareMeters * pricePerSqm;
    if (projectSector === "Commercial") base *= 1.1; // commercial premium layout
    if (finishStyle.includes("800-Grit")) base *= 1.15; // mirror finish add-on
    return Math.round(base);
  };

  const handleQuoteSubmit = async () => {
    if (!clientName || !clientEmail || !activeServiceObj) return;

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: clientName,
          email: clientEmail,
          phone: clientPhone,
          flooringType: activeServiceObj.name,
          areaSqm: areaSquareMeters,
          projectSector: projectSector,
          finishStyle: finishStyle,
          estimatedPrice: calculateServiceCost(activeServiceObj.pricePerSqmEstimate),
          leadType: "general_quote",
        }),
      });

      if (response.ok) {
        setIsQuoteSubmitted(true);
      } else {
        const errData = await response.json();
        alert(`Error submitting quote request: ${errData.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit request. Please try again.");
    }
  };

  const activeServiceObj = SERVICES.find(s => s.id === selectedServiceForQuote);

  return (
    <div className="bg-[#f5f5f0] min-h-screen py-16 text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#5A5A40] block">
            Integrated Systems Specifications
          </span>
          <h1 className="font-serif font-light text-4xl md:text-5xl text-[#1a1a1a] leading-tight">
            High-Performance Architectural Flooring Systems
          </h1>
          <p className="text-[#5a5650] text-base md:text-lg leading-relaxed">
            Engineered exclusively to withstand the extreme climate cycles of the GCC. Our seamless cement and epoxy matrices are installed with professional planetary-grinding tools to certify a durable finish.
          </p>
        </div>

        {/* Services Detail List */}
        <div className="space-y-16">
          {SERVICES.map((srv, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={srv.id}
                className="bg-white border border-[#e1e1d7] rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Image panel */}
                <div className={`lg:col-span-6 relative h-[380px] lg:h-auto overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <Image
                    src={srv.image}
                    alt={srv.name}
                    className="object-cover"
                    fill
                    sizes="(max-w-7xl) 50vw, 100vw"
                  />
                  <div className="absolute top-4 left-4 bg-[#5A5A40]/90 text-white font-mono text-[9px] uppercase tracking-wider px-3 py-1.5 border border-[#e1e1d7]/20 rounded-full">
                    SYSTEM {srv.id.toUpperCase()}-DXB
                  </div>
                </div>

                {/* Info and detail actions panel */}
                <div className={`lg:col-span-6 p-8 md:p-12 flex flex-col justify-between ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="space-y-6">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <span className="font-mono text-xs text-[#5A5A40] font-bold tracking-wider uppercase block">
                          Architectural {srv.type}
                        </span>
                        {/* Direct xpath match header and sibling requirement */}
                        {srv.id === "terrazzo" ? (
                          <div className="mt-1">
                            <h3 className="font-serif font-bold text-2xl md:text-3xl text-[#1a1a1a]">
                              Terrazzo Flooring
                            </h3>
                            <a
                              href="#terrazzo-details"
                              onClick={(e) => {
                                e.preventDefault();
                                onNavigate("terrazzo");
                              }}
                              className="inline-flex items-center gap-2 mt-3 text-xs font-mono font-bold uppercase tracking-[0.1em] text-[#5A5A40] hover:text-[#1a1a1a] transition-colors border-b border-[#5A5A40] pb-0.5 cursor-pointer"
                            >
                              Configure Terrazzo Flooring Matrix &rarr;
                            </a>
                          </div>
                        ) : (
                          <h3 className="font-serif font-bold text-2xl md:text-3xl text-[#1a1a1a] mt-1">
                            {srv.name}
                          </h3>
                        )}
                      </div>
                      <div className="font-mono text-right shrink-0">
                        <span className="text-[10px] text-[#a09c94] block uppercase font-bold tracking-wider">Estimate Scale</span>
                        <span className="text-[#1a1a1a] font-bold text-lg block">{srv.pricePerSqmEstimate} AED/Sqm</span>
                      </div>
                    </div>

                    <p className="text-sm md:text-base text-[#5a5650] leading-relaxed">
                      {srv.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2.5">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#5A5A40] block font-bold">
                        System Properties
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-[#5a5650]">
                        {srv.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Specifications badges */}
                    <div className="pt-4 border-t border-[#e1e1d7] grid grid-cols-3 gap-4 font-mono text-[11px] text-[#a09c94]">
                      <div>
                        <span className="uppercase text-[#a09c94] block font-bold">Thickness Scope</span>
                        <span className="text-[#1a1a1a] font-bold">{srv.thickness}</span>
                      </div>
                      <div>
                        <span className="uppercase text-[#a09c94] block font-bold">Durability Class</span>
                        <span className="text-[#1a1a1a] font-bold">{srv.durabilityRating}</span>
                      </div>
                      <div>
                        <span className="uppercase text-[#a09c94] block font-bold">Lead Time</span>
                        <span className="text-[#1a1a1a] font-bold">{GENERAL_SPECS.averageTurnaround}</span>
                      </div>
                    </div>
                  </div>

                  {/* Quote action button */}
                  <div className="mt-8 pt-6 border-t border-[#e1e1d7] flex gap-4">
                    <button
                      onClick={() => setSelectedServiceForQuote(srv.id)}
                      className="px-6 py-3 bg-[#1a1a1a] hover:bg-[#5A5A40] text-white font-mono text-xs uppercase tracking-widest font-bold rounded-full transition cursor-pointer"
                    >
                      Request Quote
                    </button>
                    {srv.id === "terrazzo" && (
                      <button
                        onClick={() => onNavigate("terrazzo")}
                        className="px-6 py-3 bg-[#edebe1] hover:bg-[#dcd9ce] text-[#5A5A40] font-mono text-xs uppercase tracking-widest font-bold rounded-full transition cursor-pointer"
                      >
                        Bespoke Shader
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic & Interactive Installation Timeline Diagram */}
        <div id="installation-timeline" className="mt-20 border border-[#e1e1d7] bg-[#fdfdfb] rounded-[32px] p-8 md:p-12 shadow-sm animate-fadeIn">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#5A5A40] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#5A5A40]" /> Dynamic Engineering Process
            </span>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#1a1a1a] tracking-tight">
              On-Site Installation Timeline & Stages
            </h2>
            <p className="text-xs md:text-sm text-[#5a5650] leading-relaxed">
              Explore our precise, stage-by-stage physical workflows from raw substrate preparation to the final sealed finish. Select a system below to inspect climate-mitigated execution steps.
            </p>
          </div>

          {/* System Selection Bar */}
          <div className="flex flex-wrap gap-2.5 mb-10 border-b border-[#e1e1d7] pb-6">
            {[
              { id: "terrazzo", name: "Terrazzo System", icon: Layers },
              { id: "epoxy", name: "Pearlescent Epoxy", icon: Sparkles },
              { id: "industrial", name: "Industrial Polyurethane", icon: Hammer },
              { id: "microcement", name: "Microcement Overlay", icon: Activity }
            ].map((system) => {
              const isActive = selectedTimelineSystem === system.id;
              const Icon = system.icon;
              return (
                <button
                  key={system.id}
                  onClick={() => {
                    setSelectedTimelineSystem(system.id);
                    setSelectedStepIndex(0);
                  }}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full font-mono text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                    isActive 
                      ? "bg-[#5A5A40] text-white shadow-md font-extrabold scale-102" 
                      : "bg-[#f5f5f0] text-[#1a1a1a] hover:bg-[#edebe1] border border-[#e1e1d7]"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{system.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active System Timeline Progress Indicator */}
          {(() => {
            const activeData = TIMELINE_STEPS[selectedTimelineSystem as keyof typeof TIMELINE_STEPS] || TIMELINE_STEPS.terrazzo;
            const steps = activeData.steps;
            const currentStep = steps[selectedStepIndex] || steps[0];

            return (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* Visual Step-by-Step Vertical Path / Navigation Menu */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="font-mono text-[10px] text-[#a09c94] uppercase tracking-widest font-bold pb-2 border-b border-[#e1e1d7]">
                    SYSTEM TIMELINE &bull; TIMING: {activeData.duration}
                  </div>
                  
                  <div className="relative pl-4 space-y-4 pt-4">
                    {/* Continuous decorative line */}
                    <div className="absolute left-7 top-4 bottom-4 w-[2px] bg-[#e1e1d7] -z-10"></div>
                    
                    {steps.map((step, idx) => {
                      const isStepActive = selectedStepIndex === idx;
                      return (
                        <button
                          key={idx}
                          onClick={() => setSelectedStepIndex(idx)}
                          className={`w-full text-left p-4 rounded-2xl transition-all flex items-start gap-4 relative cursor-pointer border ${
                            isStepActive 
                              ? "bg-white border-[#e1e1d7] shadow-sm pl-6 font-bold" 
                              : "bg-transparent border-transparent hover:bg-[#f5f5f0]/50"
                          }`}
                        >
                          {/* Circle indicator */}
                          <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center font-mono text-xs font-bold transition-all ${
                            isStepActive
                              ? "bg-[#5A5A40] text-white ring-4 ring-[#edebe1]"
                              : "bg-[#e1e1d7] text-[#5a5650]"
                          }`}>
                            {step.stage}
                          </div>

                          <div className="space-y-0.5">
                            <span className="font-mono text-[9px] uppercase font-bold text-[#5A5A40] block">
                              {step.status}
                            </span>
                            <h4 className="font-serif font-bold text-[#1a1a1a] text-sm leading-tight">
                              {step.title}
                            </h4>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Highly detailed active step interactive dashboard/report card */}
                <div className="lg:col-span-7 bg-white border border-[#e1e1d7] rounded-3xl p-8 shadow-sm space-y-8 min-h-[460px] flex flex-col justify-between">
                  <div className="space-y-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#f5f5f0] pb-6">
                      <div>
                        <span className="font-mono text-[10px] text-[#5A5A40] font-bold uppercase tracking-widest flex items-center gap-1.5">
                          <Activity className="w-3.5 h-3.5" /> Stage {currentStep.stage} of {steps.length} &bull; {currentStep.status}
                        </span>
                        <h3 className="font-serif font-bold text-xl text-[#1a1a1a] mt-1.5">
                          {currentStep.title}
                        </h3>
                      </div>
                      <span className="font-mono text-[10px] align-middle bg-[#f5f5f0] border border-[#e1e1d7] text-[#5A5A40] px-3.5 py-1.5 rounded-full uppercase tracking-wider font-extrabold shrink-0 self-start sm:self-auto">
                        {selectedTimelineSystem.toUpperCase()} SPEC
                      </span>
                    </div>

                    {/* Primary description action block */}
                    <div className="space-y-3">
                      <span className="font-mono text-[9px] text-[#a09c94] uppercase font-bold tracking-wider block">
                        Core Operations Procedure
                      </span>
                      <p className="text-xs md:text-sm text-[#5a5650] leading-relaxed font-sans">
                        {currentStep.description}
                      </p>
                    </div>

                    {/* Specification grid (Standards, Equipment, GCC Climate) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[#f5f5f0]">
                      {/* Specification / Standards */}
                      <div className="space-y-1.5 p-4 bg-[#f5f5f0]/30 border border-[#e1e1d7] rounded-xl flex flex-col justify-between">
                        <div className="space-y-1">
                          <span className="font-mono text-[9px] text-[#5A5A40] uppercase font-bold tracking-wider flex items-center gap-1">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Technical Standards
                          </span>
                          <p className="text-[11px] text-[#1a1a1a] font-semibold leading-relaxed">
                            {currentStep.specText}
                          </p>
                        </div>
                      </div>

                      {/* Industrial Equipment */}
                      <div className="space-y-1.5 p-4 bg-[#f5f5f0]/30 border border-[#e1e1d7] rounded-xl flex flex-col justify-between">
                        <div className="space-y-1">
                          <span className="font-mono text-[9px] text-[#5A5A40] uppercase font-bold tracking-wider flex items-center gap-1">
                            <Wrench className="w-3.5 h-3.5 text-[#5A5A40] shrink-0" /> Equipment Tools
                          </span>
                          <p className="text-[11px] text-[#1a1a1a] font-semibold leading-relaxed">
                            {currentStep.equipment}
                          </p>
                        </div>
                      </div>

                      {/* GCC Climate & Site Mitigation */}
                      <div className="space-y-1.5 p-4 bg-amber-50/20 border border-amber-100 rounded-xl flex flex-col justify-between">
                        <div className="space-y-1">
                          <span className="font-mono text-[9px] text-amber-800 uppercase font-bold tracking-wider flex items-center gap-1">
                            <ShieldAlert className="w-3.5 h-3.5 text-amber-600 shrink-0" /> GCC Mitigation
                          </span>
                          <p className="text-[11px] text-[#1a1a1a] font-semibold leading-relaxed">
                            {currentStep.gccMitigation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions to move forwards or backwards in the timeline */}
                  <div className="pt-6 border-t border-[#f5f5f0] flex items-center justify-between">
                    <button
                      disabled={selectedStepIndex === 0}
                      onClick={() => setSelectedStepIndex(prev => Math.max(0, prev - 1))}
                      className="font-mono text-[10px] uppercase font-bold tracking-wider bg-[#f5f5f0] hover:bg-[#edebe1] text-[#1a1a1a] disabled:opacity-40 disabled:cursor-not-allowed border border-[#e1e1d7] px-4 py-2 rounded-full transition cursor-pointer"
                    >
                      &larr; Prev Stage
                    </button>
                    
                    <button
                      disabled={selectedStepIndex === steps.length - 1}
                      onClick={() => setSelectedStepIndex(prev => Math.min(steps.length - 1, prev + 1))}
                      className="font-mono text-[10px] uppercase font-bold tracking-wider bg-[#1a1a1a] hover:bg-[#5A5A40] text-white disabled:opacity-40 disabled:cursor-not-allowed px-4 py-2 rounded-full transition cursor-pointer"
                    >
                      Next Stage &rarr;
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Dynamic side-by-side Material Comparison Section */}
        <div id="material-comparison" className="mt-20 border border-[#e1e1d7] bg-white rounded-[32px] p-8 md:p-12 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 pb-6 border-b border-[#e1e1d7]">
            <div className="max-w-2xl space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#5A5A40] flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#5A5A40]" /> Dynamic Specification Tool
              </span>
              <h3 className="font-serif font-bold text-2xl md:text-3xl text-[#1a1a1a]">
                High-Performance System Comparison Matrix
              </h3>
              <p className="text-xs md:text-sm text-[#5a5650] leading-relaxed">
                Adjust key project features to dynamically compare physical traits, estimated total costs, and architectural credentials of the five primary systems side-by-side.
              </p>
            </div>

            {/* Live Interactive Inputs (Synced globally with the estimator) */}
            <div className="bg-[#f5f5f0] p-6 rounded-[24px] border border-[#e1e1d7] flex flex-col gap-5 shrink-0 lg:max-w-lg w-full">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between font-mono text-[10px] text-[#1a1a1a] font-bold">
                    <span>SPEC AREA</span>
                    <span className="text-[#5A5A40] font-bold">{areaSquareMeters} Sqm</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="2000"
                    step="25"
                    value={areaSquareMeters}
                    onChange={(e) => setAreaSquareMeters(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-[#e1e1d7] accent-[#5A5A40] rounded-lg cursor-pointer"
                  />
                </div>

                <div className="flex-1 space-y-2">
                  <span className="font-mono text-[10px] text-[#1a1a1a] block uppercase font-bold tracking-wider">
                    PROJECT SECTOR
                  </span>
                  <select
                    value={projectSector}
                    onChange={(e) => setProjectSector(e.target.value)}
                    className="w-full font-mono text-xs border border-[#e1e1d7] bg-white rounded-lg p-2 focus:outline-none focus:border-[#5A5A40] cursor-pointer"
                  >
                    <option value="Residential Villa">Residential Villa</option>
                    <option value="Commercial">Commercial Project</option>
                    <option value="Industrial Facility">Industrial Facility</option>
                  </select>
                </div>
              </div>

              {/* Unique Highlights Toggle Switch */}
              <div className="pt-3 border-t border-[#e1e1d7] flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="font-mono text-[10px] text-[#1a1a1a] font-bold uppercase tracking-wider block">
                    HIGHLIGHT DIFFERENCES
                  </span>
                  <p className="text-[9px] text-[#5a5650] leading-tight">
                    Dims features that are identical across all five flooring systems
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setHighlightDifferences(!highlightDifferences)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    highlightDifferences ? "bg-[#5A5A40]" : "bg-[#dcd9ce]"
                  }`}
                  role="switch"
                  title="Highlight unique characteristics by dimming identical properties"
                  aria-checked={highlightDifferences}
                >
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                      highlightDifferences ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Table Container with horizontal scrolling on mobile/tablet, full grid on desktop */}
          <div className="overflow-x-auto -mx-8 md:-mx-12 px-8 md:px-12">
            <div className="min-w-[800px]">
              <div className="grid grid-cols-4 gap-6">
                {COMPARISON_DATA.map((sys) => {
                  const srvPrice = sys.basePrice;
                  // Dynamic display calculation matching the single quote tool exactly
                  let displayUnitPrice = srvPrice;
                  if (projectSector === "Commercial") displayUnitPrice = Math.round(srvPrice * 1.1);

                  const displayTotalPrice = displayUnitPrice * areaSquareMeters;

                  const activeSuitability = sys.suitability[projectSector as keyof typeof sys.suitability] || "Moderate";
                  const isLow = activeSuitability.toLowerCase().startsWith("low");
                  const isExc = activeSuitability.toLowerCase().startsWith("exceptional") || activeSuitability.toLowerCase().startsWith("excellent");

                  return (
                    <div 
                      key={sys.id}
                      className="bg-[#f5f5f0]/30 border border-[#e1e1d7] rounded-3xl p-6 flex flex-col justify-between hover:border-[#5A5A40] hover:bg-white transition-all duration-300 shadow-sm"
                    >
                      <div className="space-y-6">
                        {/* Title and Badge */}
                        <div className="space-y-1">
                          <span className="font-mono text-[9px] text-[#a09c94] font-bold uppercase tracking-wider block">
                            System Spec-{sys.id.toUpperCase()}
                          </span>
                          <h4 className="font-serif font-bold text-base text-[#1a1a1a] leading-tight min-h-[40px]">
                            {sys.name}
                          </h4>
                        </div>

                        {/* Estimated dynamic cost */}
                        <div className="p-4 bg-white border border-[#e1e1d7] rounded-2xl">
                          <span className="font-mono text-[9px] text-[#a09c94] uppercase font-bold block">
                            ESTIMATED RATE
                          </span>
                          <div className="flex items-baseline gap-1 mt-0.5">
                            <span className="font-serif font-bold text-lg text-[#1a1a1a]">
                              {displayUnitPrice}
                            </span>
                            <span className="font-mono text-[9px] text-[#5a5650] font-bold">AED/Sqm</span>
                          </div>
                          <div className="mt-2 pt-2 border-t border-[#f5f5f0] flex justify-between items-baseline">
                            <span className="font-mono text-[9px] text-[#a09c94] block uppercase font-bold">TOTAL EST:</span>
                            <span className="font-serif font-extrabold text-[#5A5A40] text-sm">
                              {displayTotalPrice.toLocaleString()} AED
                            </span>
                          </div>
                        </div>

                        {/* Technical Features Specs */}
                        <div className="space-y-4 text-xs font-sans">
                          {/* Thickness */}
                          <div className={`space-y-1 transition-all duration-300 ${
                            highlightDifferences && isFeatureIdentical("thickness") 
                              ? "opacity-25 grayscale scale-98" 
                              : "opacity-100"
                          }`}>
                            <span className="font-mono text-[9px] text-[#5A5A40] uppercase font-bold tracking-wider flex items-center justify-between">
                              <span className="flex items-center gap-1.5">
                                <Layers className="w-3.5 h-3.5" /> Thickness Profile
                              </span>
                              {highlightDifferences && !isFeatureIdentical("thickness") && (
                                <span className="text-[8px] font-bold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded tracking-wider uppercase">Unique</span>
                              )}
                            </span>
                            <p className="text-[#1a1a1a] font-semibold">{sys.thickness}</p>
                          </div>

                          {/* Durability */}
                          <div className={`space-y-1 transition-all duration-300 ${
                            highlightDifferences && isFeatureIdentical("durability") 
                              ? "opacity-25 grayscale scale-98" 
                              : "opacity-100"
                          }`}>
                            <span className="font-mono text-[9px] text-[#5A5A40] uppercase font-bold tracking-wider flex items-center justify-between">
                              <span className="flex items-center gap-1.5">
                                <Activity className="w-3.5 h-3.5" /> Durability & Lifespan
                              </span>
                              {highlightDifferences && !isFeatureIdentical("durability") && (
                                <span className="text-[8px] font-bold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded tracking-wider uppercase">Unique</span>
                              )}
                            </span>
                            <p className="text-[#1a1a1a] font-semibold">{sys.durability}</p>
                          </div>

                          {/* Ideal finish */}
                          <div className={`space-y-1 transition-all duration-300 ${
                            highlightDifferences && isFeatureIdentical("finish") 
                              ? "opacity-25 grayscale scale-98" 
                              : "opacity-100"
                          }`}>
                            <span className="font-mono text-[9px] text-[#5A5A40] uppercase font-bold tracking-wider flex items-center justify-between">
                              <span className="flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5" /> Ideal Surface Finish
                              </span>
                              {highlightDifferences && !isFeatureIdentical("finish") && (
                                <span className="text-[8px] font-bold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded tracking-wider uppercase">Unique</span>
                              )}
                            </span>
                            <p className="text-[#5a5650] text-[11px] leading-relaxed italic">"{sys.finish}"</p>
                          </div>

                          {/* Moisture */}
                          <div className={`space-y-1 transition-all duration-300 ${
                            highlightDifferences && isFeatureIdentical("moistureResist") 
                              ? "opacity-25 grayscale scale-98" 
                              : "opacity-100"
                          }`}>
                            <span className="font-mono text-[9px] text-[#5A5A40] uppercase font-bold tracking-wider flex items-center justify-between">
                              <span className="flex items-center gap-1.5">
                                <Droplets className="w-3.5 h-3.5" /> Moisture Resistance
                              </span>
                              {highlightDifferences && !isFeatureIdentical("moistureResist") && (
                                <span className="text-[8px] font-bold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded tracking-wider uppercase">Unique</span>
                              )}
                            </span>
                            <p className="text-[#1a1a1a] text-[11px] font-semibold">{sys.moistureResist}</p>
                          </div>

                          {/* Sustainability criteria */}
                          <div className={`space-y-1 transition-all duration-300 ${
                            highlightDifferences && isFeatureIdentical("sustainabilityNote") 
                              ? "opacity-25 grayscale scale-98" 
                              : "opacity-100"
                          }`}>
                            <span className="font-mono text-[9px] text-[#5A5A40] uppercase font-bold tracking-wider flex items-center justify-between">
                              <span className="flex items-center gap-1.5">
                                <Leaf className="w-3.5 h-3.5" /> Sustainability Notes
                              </span>
                              {highlightDifferences && !isFeatureIdentical("sustainabilityNote") && (
                                <span className="text-[8px] font-bold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded tracking-wider uppercase">Unique</span>
                              )}
                            </span>
                            <p className="text-[#1a1a1a] text-[11px] font-medium">{sys.sustainabilityNote}</p>
                          </div>

                          {/* Dubai Approved (Identical Baseline Feature) */}
                          <div className={`space-y-1 transition-all duration-300 ${
                            highlightDifferences && isFeatureIdentical("dubaiApproved") 
                              ? "opacity-25 grayscale scale-98" 
                              : "opacity-100"
                          }`}>
                            <span className="font-mono text-[9px] text-[#5A5A40] uppercase font-bold tracking-wider flex items-center justify-between">
                              <span className="flex items-center gap-1.5">
                                <BadgeCheck className="w-3.5 h-3.5 text-[#5A5A40]" /> Municipal Licensing
                              </span>
                              {highlightDifferences && !isFeatureIdentical("dubaiApproved") && (
                                <span className="text-[8px] font-bold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded tracking-wider uppercase">Unique</span>
                              )}
                            </span>
                            <p className="text-[#1a1a1a] text-[11px] font-semibold">{sys.dubaiApproved}</p>
                          </div>

                          {/* VOC Status (Identical Baseline Feature) */}
                          <div className={`space-y-1 transition-all duration-300 ${
                            highlightDifferences && isFeatureIdentical("vocStatus") 
                              ? "opacity-25 grayscale scale-98" 
                              : "opacity-100"
                          }`}>
                            <span className="font-mono text-[9px] text-[#5A5A40] uppercase font-bold tracking-wider flex items-center justify-between">
                              <span className="flex items-center gap-1.5">
                                <Leaf className="w-3.5 h-3.5 text-[#5A5A40]" /> VOC Safety Standard
                              </span>
                              {highlightDifferences && !isFeatureIdentical("vocStatus") && (
                                <span className="text-[8px] font-bold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded tracking-wider uppercase">Unique</span>
                              )}
                            </span>
                            <p className="text-[#1a1a1a] text-[11px] font-semibold">{sys.vocStatus}</p>
                          </div>

                          {/* Install Crew (Identical Baseline Feature) */}
                          <div className={`space-y-1 transition-all duration-300 ${
                            highlightDifferences && isFeatureIdentical("installCrew") 
                              ? "opacity-25 grayscale scale-98" 
                              : "opacity-100"
                          }`}>
                            <span className="font-mono text-[9px] text-[#5A5A40] uppercase font-bold tracking-wider flex items-center justify-between">
                              <span className="flex items-center gap-1.5">
                                <Wrench className="w-3.5 h-3.5 text-[#5A5A40]" /> Deployment Crew
                              </span>
                              {highlightDifferences && !isFeatureIdentical("installCrew") && (
                                <span className="text-[8px] font-bold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded tracking-wider uppercase">Unique</span>
                              )}
                            </span>
                            <p className="text-[#1a1a1a] text-[11px] font-semibold">{sys.installCrew}</p>
                          </div>

                          {/* Dynamic Sector Suitability Badge */}
                          <div className={`space-y-1 pt-4 border-t border-[#e1e1d7] transition-all duration-300 ${
                            highlightDifferences && isFeatureIdentical("suitability") 
                              ? "opacity-25 grayscale scale-98" 
                              : "opacity-100"
                          }`}>
                            <span className="font-mono text-[9px] text-[#a09c94] uppercase font-bold tracking-wider flex items-center justify-between">
                              <span>SUITABILITY - {projectSector.toUpperCase()}</span>
                              {highlightDifferences && !isFeatureIdentical("suitability") && (
                                <span className="text-[8px] font-bold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded tracking-wider uppercase">Unique</span>
                              )}
                            </span>
                            <span className={`inline-block px-2.5 py-1 rounded text-[10px] font-bold font-mono mt-1 ${
                              isLow 
                                ? "bg-rose-50 text-rose-800 border-rose-100 border text-center" 
                                : isExc 
                                  ? "bg-emerald-50 text-emerald-800 border-emerald-100 border text-center"
                                  : "bg-[#edebe1] text-[#1a1a1a] border text-center"
                            }`}>
                              {activeSuitability}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Action buttons inside columns */}
                      <div className="mt-8 pt-4 border-t border-[#e1e1d7] space-y-2">
                        <button
                          onClick={() => setSelectedServiceForQuote(sys.id)}
                          className="w-full py-2.5 bg-[#1a1a1a] hover:bg-[#5A5A40] text-white font-mono text-[10px] uppercase tracking-wider font-bold rounded-xl transition cursor-pointer"
                        >
                          Request Quote
                        </button>
                        {sys.id === "terrazzo" && (
                          <button
                            onClick={() => onNavigate("terrazzo")}
                            className="w-full py-2.5 bg-[#edebe1] hover:bg-[#dcd9ce] text-[#5A5A40] font-mono text-[10px] uppercase tracking-wider font-bold rounded-xl transition cursor-pointer"
                          >
                            Bespoke Shader
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Informative Spec Guide / FAQs */}
        <div className="mt-20 border border-[#e1e1d7] bg-white rounded-[32px] p-8 md:p-12 shadow-sm">
          <h3 className="font-serif font-bold text-2xl text-[#1a1a1a] mb-6 flex items-center gap-3">
            <ClipboardList className="w-6 h-6 text-[#5A5A40]" />
            <span>Dubai Municipal Flooring Specification Solver</span>
          </h3>
          <p className="text-[#5a5650] mb-8 text-sm md:text-base leading-relaxed">
            Need alignment on which flooring system is authorized for your particular development category? Select a project focus below to receive our technical engineer recommendations instantly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-[#e1e1d7] bg-[#f5f5f0] rounded-[24px]">
              <span className="font-mono text-[10px] uppercase font-bold text-[#5A5A40] tracking-wider">Hospitality & Luxury Residential</span>
              <h4 className="font-serif font-bold text-[#1a1a1a] mt-2">Bespoke Monolithic Terrazzo</h4>
              <p className="text-xs text-[#5a5650] mt-2 lines-clamp-3 leading-relaxed">
                Seamless cementitious terrazzo provides continuous flow from lobby elevators into balconies, allowing brass dividers to control subslab expansion joints while improving aesthetic index.
              </p>
            </div>
            <div className="p-6 border border-[#e1e1d7] bg-[#edebe1]/60 rounded-[24px]">
              <span className="font-mono text-[10px] uppercase font-bold text-[#5A5A40] tracking-wider">Commercial & Retail Areas</span>
                    <h4 className="font-serif font-bold text-[#1a1a1a] mt-2">Microcement & Decorative Screeds</h4>
              <p className="text-xs text-[#5a5650] mt-2 lines-clamp-3 leading-relaxed">
                    Continuous microcement offers a durable, modern surface finish for retail, boutique, and residential interior applications.
              </p>
            </div>
            <div className="p-6 border border-[#e1e1d7] bg-[#dcd9ce]/40 rounded-[24px]">
              <span className="font-mono text-[10px] uppercase font-bold text-[#5a5650] tracking-wider">Factories & Industrial Areas</span>
              <h4 className="font-serif font-bold text-[#1a1a1a] mt-2">Heavy-Duty Polyurethane Screeds</h4>
              <p className="text-xs text-[#5a5650] mt-2 lines-clamp-3 leading-relaxed">
                Extreme chemical resilience prevents oils and heavy machine washdowns from eroding the substrate steel rebar, adhering strictly to safety laws.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Request Quote Sidebar Drawer (Modal overlay) */}
      {selectedServiceForQuote && activeServiceObj && (
        <div className="fixed inset-0 z-50 bg-[#1a1a1a]/60 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-lg bg-white h-screen overflow-y-auto p-8 shadow-2xl relative flex flex-col justify-between">
            <div>
              {/* Close pin */}
              <button
                onClick={() => {
                  setSelectedServiceForQuote(null);
                  setIsQuoteSubmitted(false);
                }}
                className="absolute top-6 right-6 p-2 text-[#a09c94] hover:text-[#1a1a1a] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="font-mono text-[10px] uppercase tracking-widest text-[#5A5A40] font-bold">
                Project Quote Estimator
              </span>
              <h3 className="font-serif font-bold text-2xl text-[#1a1a1a] mt-1">
                {activeServiceObj.name}
              </h3>
              <p className="text-xs text-[#a09c94] mt-2 leading-relaxed">
                Configure your estimated flooring parameters to receive a technical summary. Final custom quotes are generated based on local site checkups.
              </p>

              {!isQuoteSubmitted ? (
                <div className="mt-8 space-y-6">
                  {/* Slider for Area size */}
                  <div className="space-y-2">
                    <div className="flex justify-between font-mono text-xs text-[#1a1a1a] font-bold">
                      <span>PROJECT SQUARE METERS (Sqm)</span>
                      <span className="text-[#5A5A40] font-bold">{areaSquareMeters} Sqm</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="2000"
                      step="25"
                      value={areaSquareMeters}
                      onChange={(e) => setAreaSquareMeters(parseInt(e.target.value))}
                      className="w-full h-2 bg-[#f5f5f0] accent-[#5A5A40] rounded-lg cursor-pointer"
                    />
                    <span className="font-mono text-[9px] text-[#a09c94] block">
                      Range: 50 sqm to 2,000 sqm (Residential / Commercial layout scale)
                    </span>
                  </div>

                  {/* Surface Finish Grade */}
                  <div className="space-y-2">
                    <span className="font-mono text-xs text-[#1a1a1a] block uppercase font-bold tracking-wider">
                      Finish Preference
                    </span>
                    <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                      {[
                        { label: "Satin 400-Grit", desc: "Elegant semi-matte" },
                        { label: "Mirror 800-Grit", desc: "Reflective glaze (+15%)" }
                      ].map((style) => (
                        <button
                          key={style.label}
                          type="button"
                          onClick={() => setFinishStyle(style.label)}
                          className={`p-4 border text-left cursor-pointer transition-all rounded-xl ${
                            finishStyle === style.label
                              ? "border-[#5A5A40] bg-[#5A5A40] text-white"
                              : "border-[#e1e1d7] text-stone-800 hover:border-[#5A5A40] bg-[#f5f5f0]/50"
                          }`}
                        >
                          <span className="block font-bold">{style.label}</span>
                          <span className={`block text-[10px] mt-0.5 ${finishStyle === style.label ? 'text-[#edebe1]' : 'text-[#a09c94]'}`}>
                            {style.desc}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sector specification */}
                  <div className="space-y-2">
                    <span className="font-mono text-xs text-[#1a1a1a] block uppercase font-bold tracking-wider">
                      Development Sector Location
                    </span>
                    <div className="flex flex-wrap gap-2.5">
                      {["Residential Villa", "Commercial", "Industrial Facility"].map((pType) => (
                        <button
                          key={pType}
                          type="button"
                          onClick={() => setProjectSector(pType)}
                          className={`px-4 py-2 border text-xs font-mono rounded-full cursor-pointer transition-all ${
                            projectSector === pType
                              ? "border-[#5A5A40] bg-[#5A5A40] text-white font-bold"
                              : "border-[#e1e1d7] text-[#5a5650] hover:border-[#5A5A40] bg-[#f5f5f0]/30"
                          }`}
                        >
                          {pType}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="space-y-3 pt-4 border-t border-[#e1e1d7]">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#a09c94] block font-bold">
                      Contact Information
                    </span>
                    <div>
                      <label className="text-xs text-[#5a5650] block mb-1">Your Full Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Abdullah Al Maktoum"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full border border-[#e1e1d7] rounded-lg p-2.5 text-sm text-[#1a1a1a] bg-[#f5f5f0]/30 focus:outline-none focus:border-[#5A5A40]"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs text-[#5a5650] block mb-1">Email Address</label>
                        <input
                          type="email"
                          placeholder="abdullah@domain.ae"
                          value={clientEmail}
                          onChange={(e) => setClientEmail(e.target.value)}
                          className="w-full border border-[#e1e1d7] rounded-lg p-2.5 text-sm text-[#1a1a1a] bg-[#f5f5f0]/30 focus:outline-none focus:border-[#5A5A40]"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-[#5a5650] block mb-1">Phone Number</label>
                        <input
                          type="tel"
                          placeholder="+971 5XX XXXXXX"
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          className="w-full border border-[#e1e1d7] rounded-lg p-2.5 text-sm text-[#1a1a1a] bg-[#f5f5f0]/30 focus:outline-none focus:border-[#5A5A40]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-12 text-center py-6 space-y-4">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                    <BadgeCheck className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif font-bold text-xl text-[#1a1a1a]">Specification Lodged!</h4>
                  <p className="text-sm text-[#5a5650] max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-stone-900">{clientName || "Estimator Guest"}</span>. We have generated your estimated project budget. Our head engineer will follow up within 24 hours to organize an on-site sample board testing session.
                  </p>

                  <div className="bg-[#f5f5f0] p-6 border border-[#e1e1d7] text-left space-y-3 font-mono text-xs text-[#5a5650] rounded-2xl max-w-sm mx-auto">
                    <div className="flex justify-between">
                      <span>SYSTEM CODE:</span>
                      <span className="font-bold text-[#1a1a1a]">{activeServiceObj.id.toUpperCase()}-DXB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>COVERAGE AREA:</span>
                      <span className="font-bold text-[#1a1a1a]">{areaSquareMeters} Sqm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>FINISH:</span>
                      <span className="font-bold text-[#5A5A40]">{finishStyle}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-[#e1e1d7] text-[#1a1a1a] font-bold">
                      <span>EST. BUDGET TOTAL:</span>
                      <span className="text-sm text-[#1a1a1a] font-serif">
                        {calculateServiceCost(activeServiceObj.pricePerSqmEstimate).toLocaleString()} AED
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Calculate display footer summary */}
            {!isQuoteSubmitted ? (
              <div className="border-t border-[#e1e1d7] pt-6 mt-8">
                <div className="flex justify-between items-end mb-4 font-mono">
                  <div>
                    <span className="text-[10px] text-[#a09c94] block uppercase font-bold">Projected Bid Estimate</span>
                    <span className="text-2xl font-bold font-serif text-[#1a1a1a]">
                      {calculateServiceCost(activeServiceObj.pricePerSqmEstimate).toLocaleString()} AED
                    </span>
                  </div>
                  <span className="text-[#a09c94] text-[10px]">Excluding 5% VAT</span>
                </div>
                <button
                  onClick={handleQuoteSubmit}
                  disabled={!clientName || !clientEmail}
                  className={`w-full py-4 text-center font-mono text-xs uppercase tracking-widest font-bold transition-all rounded-full ${
                    clientName && clientEmail
                      ? "bg-[#5A5A40] hover:bg-[#1a1a1a] text-white cursor-pointer shadow-md"
                      : "bg-[#f5f5f0] text-[#a09c94] cursor-not-allowed border border-[#e1e1d7]"
                  }`}
                >
                  Submit specification Request &rarr;
                </button>
                {!clientName && (
                  <span className="font-mono text-[9px] text-[#a09c94] block text-center mt-2.5">
                    * Please enter your name to authenticate estimates
                  </span>
                )}
              </div>
            ) : (
              <button
                onClick={() => {
                  setSelectedServiceForQuote(null);
                  setIsQuoteSubmitted(false);
                }}
                className="w-full py-4 bg-[#1a1a1a] text-white font-mono text-xs uppercase tracking-widest font-bold rounded-full border border-[#1a1a1a] hover:bg-[#5A5A40] transition cursor-pointer"
              >
                Close Panel
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
