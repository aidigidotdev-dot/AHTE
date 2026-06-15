import { useState, useRef } from "react";
import Image from "next/image";
import { TERRAZZO_SHADES, SERVICES } from "../data";
import { Sparkles, ShieldCheck, Ruler, Coins, FileText, Download, Check, Settings, Info, InfoIcon, Info as InfoIconLucide } from "lucide-react";

interface TerrazzoViewProps {
  onNavigate: (tab: string) => void;
}

export default function TerrazzoView({ onNavigate }: TerrazzoViewProps) {
  const [selectedShade, setSelectedShade] = useState(TERRAZZO_SHADES[0]);
  const [areaInSqm, setAreaInSqm] = useState<number>(120);
  const [useSqft, setUseSqft] = useState<boolean>(false); // toggle sqm vs sqft

  // Interactive customizable options
  const [chipDensity, setChipDensity] = useState<number>(75); // 70% to 85%
  const [shineFinish, setShineFinish] = useState<string>("Mirror-Gloss (800-Grit)");
  const [includeUnderfloorHeating, setIncludeUnderfloorHeating] = useState<boolean>(false);
  const [metalInlaysType, setMetalInlaysType] = useState<string>("Concentric Linear Bands");

  // Lead inquiry forms
  const [clientName, setClientName] = useState("");
  const [clientCompany, setClientCompany] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [proposalReady, setProposalReady] = useState(false);

  // Constants
  const basePricePerSqm = 450; // AED standard base
  const premiumShadeFactor = selectedShade.id === "shade-1a" ? 1.05 : selectedShade.id === "shade-1c" ? 1.1 : 1.0;

  // Calculators
  const areaSqmNormal = useSqft ? Math.round(areaInSqm / 10.76) : areaInSqm;
  const areaSqftNormal = useSqft ? areaInSqm : Math.round(areaInSqm * 10.76);

  const calculateSubtotal = () => {
    let price = basePricePerSqm * premiumShadeFactor * areaSqmNormal;
    // Add density factor
    if (chipDensity > 80) price += 40 * areaSqmNormal;
    // Shine level
    if (shineFinish.includes("800-Grit")) price += 35 * areaSqmNormal;
    return Math.round(price);
  };

  const calculateInlayCost = () => {
    switch (metalInlaysType) {
      case "Concentric Linear Bands":
        return Math.round(areaSqmNormal * 25);
      case "Diamond Grid Layout":
        return Math.round(areaSqmNormal * 45);
      case "Bespoke Geometrical Circles":
        return Math.round(areaSqmNormal * 65);
      default:
        return 0;
    }
  };

  const calculateHeatingSurcharge = () => {
    return includeUnderfloorHeating ? Math.round(areaSqmNormal * 80) : 0;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateInlayCost() + calculateHeatingSurcharge();
  };

  const triggerExportSimulation = async () => {
    if (!clientName || !clientPhone) return;

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: clientName,
          company: clientCompany,
          phone: clientPhone,
          flooringType: `Terrazzo (${selectedShade.name})`,
          areaSqm: areaSqmNormal,
          projectSector: "General",
          finishStyle: shineFinish,
          metalInlays: metalInlaysType,
          underfloorHeating: includeUnderfloorHeating,
          estimatedPrice: calculateTotal(),
          leadType: "terrazzo_proposal",
        }),
      });

      if (response.ok) {
        setProposalReady(true);
      } else {
        const errData = await response.json();
        alert(`Error generating spec sheet: ${errData.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit request. Please try again.");
    }
  };

  return (
    <div className="bg-[#f5f5f0] min-h-screen py-16 text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Intro */}
        <div className="max-w-3xl mb-12 space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#5A5A40] block">
            Bespoke Flooring Configurator
          </span>
          <h1 className="font-serif font-light text-4xl md:text-5xl text-[#1a1a1a]">
            Terrazzo Flooring Studio
          </h1>
          <p className="text-[#5a5650] text-sm md:text-base leading-relaxed">
            Configure seamless resinous terrazzo specifications. Browse authorized physical sample bases, customize marble chip aggregate ratios, toggle linear metal partitions, and compute immediate GCC estimations.
          </p>
        </div>

        {/* Studio Workspace Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: Designer & customizer options (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Base Shade selection */}
            <div className="bg-white border border-[#e1e1d7] rounded-[32px] p-8 shadow-sm">
              <span className="font-mono text-[10px] uppercase text-[#5A5A40] font-bold block mb-4">
                01. Authorize Aggregate Shade Base
              </span>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {TERRAZZO_SHADES.map((shade) => {
                  const isSelected = selectedShade.id === shade.id;
                  return (
                    <div
                      key={shade.id}
                      onClick={() => setSelectedShade(shade)}
                      className={`border overflow-hidden cursor-pointer transition-all rounded-[20px] ${
                        isSelected
                          ? "border-[#5A5A40] bg-[#f5f5f0] ring-1 ring-[#5A5A40]"
                          : "border-[#e1e1d7] hover:border-[#5A5A40] bg-white"
                      }`}
                    >
                      <div className="h-40 overflow-hidden relative">
                        <Image
                          src={shade.image}
                          alt={shade.name}
                          className={`object-cover transition-all ${isSelected ? 'scale-102' : 'hover:scale-101'}`}
                          fill
                          sizes="(max-w-7xl) 33vw, 100vw"
                        />
                        {isSelected && (
                          <div className="absolute top-2 right-2 bg-[#5A5A40] text-white p-1 rounded-full border border-white/20">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        )}
                      </div>
                      <div className="p-4 font-mono">
                        <span className="text-[10px] text-[#a09c94] font-bold block">{shade.code}</span>
                        <h4 className="font-serif font-bold text-sm text-[#1a1a1a] mt-1 line-clamp-1">
                          {shade.name}
                        </h4>
                        <div className="flex items-center gap-1.5 mt-2">
                          <span
                            className="w-3.5 h-3.5 border border-[#e1e1d7] block shrink-0 rounded-sm"
                            style={{ backgroundColor: shade.baseColor }}
                          ></span>
                          <span className="text-[10px] text-[#a09c94] uppercase font-bold">Base hue matched</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Selection details */}
              <div className="mt-6 bg-[#f5f5f0] border border-[#e1e1d7] p-5 rounded-[20px] space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-mono text-[9px] uppercase text-[#a09c94] font-bold">Selected Aggregate Specs</span>
                    <h4 className="font-serif font-bold text-[#1a1a1a] mt-0.5">{selectedShade.name}</h4>
                  </div>
                  <span className="font-mono text-xs text-[#5A5A40] font-bold bg-[#5A5A40]/10 px-3 py-1 rounded-full border border-[#5A5A40]/10">
                    {selectedShade.tone.toUpperCase()} TONE
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#5a5650] mt-2">
                  <div>
                    <strong className="text-[#1a1a1a] block text-[10px] font-mono uppercase font-bold tracking-wider">Authorized Chips:</strong>
                    <span>{selectedShade.aggregates.join(", ")}</span>
                  </div>
                  <div>
                    <strong className="text-[#1a1a1a] block text-[10px] font-mono uppercase font-bold tracking-wider">Popular Use Designs:</strong>
                    <span>{selectedShade.popularFor}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Custom specifications */}
            <div className="bg-white border border-[#e1e1d7] rounded-[32px] p-8 shadow-sm space-y-6">
              <span className="font-mono text-[10px] uppercase text-[#5A5A40] font-bold block">
                02. Fine-Tune Material Variables
              </span>

              {/* Sliding Aggregate Percent Density */}
              <div className="space-y-2">
                <div className="flex justify-between font-mono text-xs text-[#1a1a1a] font-bold">
                  <span>AGGREGATE EXPOSURE DENSITY (%)</span>
                  <span className="text-[#5A5A40] font-bold">{chipDensity}% Coverage</span>
                </div>
                <input
                  type="range"
                  min="70"
                  max="85"
                  step="5"
                  value={chipDensity}
                  onChange={(e) => setChipDensity(parseInt(e.target.value))}
                  className="w-full h-2 bg-[#f5f5f0] accent-[#5A5A40] rounded-lg cursor-pointer"
                />
                <span className="font-mono text-[9px] text-[#a09c94] block leading-tight">
                  High-density layout (80%+) delivers rich architectural terrazzo textures with minimized cement exposure gaps.
                </span>
              </div>

              {/* Shine level finish options */}
              <div className="space-y-2.5">
                <span className="font-mono text-xs text-[#1a1a1a] block font-bold">
                  STAGE-POLISH GLOSS CLASS
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { label: "Matt (200-Grit)", desc: "Mineral flat modern vibe" },
                    { label: "Satin Semi-Gloss", desc: "400-Grit low luster slip-safe" },
                    { label: "Mirror-Gloss (800-Grit)", desc: "High reflectiveness glass-gloss (+35 AED/sqm)" }
                  ].map((sOption) => (
                    <button
                      key={sOption.label}
                      type="button"
                      onClick={() => setShineFinish(sOption.label)}
                      className={`p-4 border text-left cursor-pointer transition-all rounded-2xl ${
                        shineFinish === sOption.label
                          ? "border-[#5A5A40] bg-[#5A5A40] text-white"
                          : "border-[#e1e1d7] hover:border-[#5A5A40] bg-[#edebe1]/20 text-[#5a5650]"
                      }`}
                    >
                      <span className="block font-sans font-bold text-xs">{sOption.label}</span>
                      <span className={`block text-[10px] mt-1 ${shineFinish === sOption.label ? 'text-[#edebe1]' : 'text-[#a09c94]'}`}>
                        {sOption.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Inlay grids divider layout */}
              <div className="space-y-2.5">
                <span className="font-mono text-xs text-[#1a1a1a] block font-bold">
                  METAL INLAYS DIVIDER PATTERNING
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { title: "Concentric Linear Bands", rate: "25 AED/sqm", desc: "Elegant rectangular frames" },
                    { title: "Diamond Grid Layout", rate: "45 AED/sqm", desc: "Classic structural checks" },
                    { title: "Bespoke Geometrical Circles", rate: "65 AED/sqm", desc: "Custom avant-garde water-jet" },
                    { title: "No Dividers (Monolithic Raw)", rate: "0 AED/sqm", desc: "Seamless continuous fields" }
                  ].map((inlay) => (
                    <button
                      key={inlay.title}
                      type="button"
                      onClick={() => setMetalInlaysType(inlay.title)}
                      className={`p-4 border text-left cursor-pointer transition-all rounded-2xl ${
                        metalInlaysType === inlay.title
                          ? "border-[#5A5A40] bg-[#edebe1] text-[#1a1a1a] font-bold border-l-4 border-l-[#5A5A40]"
                          : "border-[#e1e1d7] hover:border-[#5A5A40] bg-white text-[#5a5650]"
                      }`}
                    >
                      <span className="block font-sans text-xs">{inlay.title}</span>
                      <div className="flex justify-between text-[10px] text-[#a09c94] mt-1 font-semibold">
                        <span>{inlay.desc}</span>
                        <span className="font-bold text-[#1a1a1a]">{inlay.rate}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Underfloor heating safe */}
              <div className="p-4 border border-[#e1e1d7] bg-[#f5f5f0]/80 flex items-center justify-between rounded-2xl">
                <div className="flex gap-3 items-start max-w-sm">
                  <input
                    id="heating"
                    type="checkbox"
                    checked={includeUnderfloorHeating}
                    onChange={(e) => setIncludeUnderfloorHeating(e.target.checked)}
                    className="w-4 h-4 text-[#1a1a1a] accent-[#5A5A40] border-[#e1e1d7] mt-1 cursor-pointer"
                  />
                  <div>
                    <label htmlFor="heating" className="font-sans font-bold text-xs text-[#1a1a1a] cursor-pointer block">
                      Underfloor Heating Compatibility (+80 AED/sqm)
                    </label>
                    <span className="font-sans text-[10px] text-[#a09c94] block">
                      Requires specialized glass-fiber flexible latex additives within cement mixes to tolerate thermal expansions safely.
                    </span>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-[#5A5A40] bg-white px-2.5 py-1 border border-[#e1e1d7] rounded-full">{includeUnderfloorHeating ? "ENABLED" : "DISABLED"}</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Budget calculator & Proposal Generator (5 cols) */}
          <div className="lg:col-span-5 space-y-8 sticky top-28">
            
            {/* Real-time calculator panel */}
            <div className="bg-[#1a1a1a] text-white p-6 shadow-xl border border-[#e1e1d7]/10 rounded-[32px] space-y-6 overflow-hidden">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#a09c94] block pb-2 border-b border-[#e1e1d7]/10 font-bold">
                Area Dimensions & Real-Time Estimate
              </span>

              {/* Size input toggles */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="font-bold text-[#edebe1]">SPECIFY COVER SURFACE AREA</span>
                  <div className="flex border border-white/10 bg-black/30 rounded-full p-0.5">
                    <button
                      type="button"
                      onClick={() => {
                        if (useSqft) {
                          setAreaInSqm(Math.round(areaInSqm / 10.76));
                          setUseSqft(false);
                        }
                      }}
                      className={`px-3 py-1 text-[10px] rounded-full cursor-pointer transition-colors ${!useSqft ? 'bg-[#5A5A40] text-white font-bold' : 'text-[#a09c94] hover:text-white'}`}
                    >
                      Sqm
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (!useSqft) {
                          setAreaInSqm(Math.round(areaInSqm * 10.76));
                          setUseSqft(true);
                        }
                      }}
                      className={`px-3 py-1 text-[10px] rounded-full cursor-pointer transition-colors ${useSqft ? 'bg-[#5A5A40] text-white font-bold' : 'text-[#a09c94] hover:text-white'}`}
                    >
                      Sqft
                    </button>
                  </div>
                </div>

                {/* Number input and slider */}
                <div className="flex gap-4 items-center">
                  <input
                    type="number"
                    min="20"
                    max="5000"
                    value={areaInSqm}
                    onChange={(e) => setAreaInSqm(Math.max(20, parseInt(e.target.value) || 0))}
                    className="w-28 bg-black/40 border border-[#e1e1d7]/10 text-white font-mono p-2.5 text-center text-sm focus:outline-none focus:border-[#5A5A40] rounded-xl"
                  />
                  <div className="text-xs text-[#a09c94] font-sans leading-snug">
                    Equivalent sizing metric:<br />
                    <span className="text-white font-bold font-mono">
                      {useSqft ? `${areaSqmNormal} Sqm` : `${areaSqftNormal} Sqft`}
                    </span>
                  </div>
                </div>

                <input
                  type="range"
                  min={useSqft ? "200" : "20"}
                  max={useSqft ? "5000" : "500"}
                  step={useSqft ? "100" : "10"}
                  value={areaInSqm}
                  onChange={(e) => setAreaInSqm(parseInt(e.target.value))}
                  className="w-full h-1 bg-[#edebe1]/10 accent-white rounded-lg cursor-pointer mt-1"
                />
              </div>

              {/* Estimate Calculation Table */}
              <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs font-mono text-[#a09c94]">
                <div className="flex justify-between">
                  <span>Base Terrazzo Rate:</span>
                  <span className="text-white">AED {basePricePerSqm} /Sqm</span>
                </div>
                {premiumShadeFactor > 1.0 && (
                  <div className="flex justify-between">
                    <span>Aggregate Hue Surcharge:</span>
                    <span className="text-white bg-[#5A5A40] px-2 py-0.5 rounded-full text-[9px]">
                      + {Math.round((premiumShadeFactor - 1.0) * 100)}%
                    </span>
                  </div>
                )}
                {chipDensity > 80 && (
                  <div className="flex justify-between">
                    <span>Density Coefficient (85%):</span>
                    <span className="text-white bg-[#5A5A40] px-2 py-0.5 rounded-full text-[9px]">+ AED 40 /Sqm</span>
                  </div>
                )}
                {shineFinish.includes("800-Grit") && (
                  <div className="flex justify-between">
                    <span>800-Grit Mirror Polishing Class:</span>
                    <span className="text-white bg-[#5A5A40] px-2 py-0.5 rounded-full text-[9px]">+ AED 35 /Sqm</span>
                  </div>
                )}
                {metalInlaysType !== "No Dividers (Monolithic Raw)" && (
                  <div className="flex justify-between">
                    <span>{metalInlaysType}:</span>
                    <span className="text-white font-bold">AED {calculateInlayCost().toLocaleString()}</span>
                  </div>
                )}
                {includeUnderfloorHeating && (
                  <div className="flex justify-between">
                    <span>Glass-fiber flexible add-on:</span>
                    <span className="text-white font-bold">AED {calculateHeatingSurcharge().toLocaleString()}</span>
                  </div>
                )}
                
                <div className="flex justify-between text-white border-t border-white/10 pt-4 text-sm font-semibold">
                  <span className="font-sans font-bold">PROJECT ESTIMATED BID:</span>
                  <span className="text-white bg-[#5A5A40] px-3.5 py-1 text-lg font-mono rounded-full">{calculateTotal().toLocaleString()} AED</span>
                </div>
                <span className="text-[9px] text-stone-500 uppercase block text-right mt-1">* Subject to site inquiry review & VAT 5%</span>
              </div>

              {/* Contact Lead Details for PDF Generation */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#a09c94] font-bold block">
                  Assignee Authority Form (For Proposal Generics)
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Representative Name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 p-2.5 text-xs text-white rounded-xl placeholder-stone-600 focus:outline-[#5A5A40]"
                  />
                  <input
                    type="text"
                    placeholder="Company name / Property Lot"
                    value={clientCompany}
                    onChange={(e) => setClientCompany(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 p-2.5 text-xs text-white rounded-xl placeholder-stone-600 focus:outline-[#5A5A40]"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="+971 Call Representative"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 p-2.5 text-xs text-white rounded-xl placeholder-stone-600 focus:outline-[#5A5A40]"
                />

                <button
                  type="button"
                  onClick={triggerExportSimulation}
                  disabled={!clientName || !clientPhone}
                  className={`w-full py-4 font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition rounded-full ${
                    clientName && clientPhone
                      ? "bg-[#5A5A40] hover:bg-white hover:text-[#1a1a1a] text-white cursor-pointer shadow-md"
                      : "bg-[#252520] text-stone-500 cursor-not-allowed border border-[#e1e1d7]/5"
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  <span>Generate Specs Sheet Proposal</span>
                </button>
                {!clientName && (
                  <span className="text-[9px] text-[#a09c94] font-mono block text-center mt-1">
                    * Enter representative details to unlock proposal specs
                  </span>
                )}
              </div>
            </div>

            {/* Generated spec proposal box */}
            {proposalReady && (
              <div className="bg-white border-2 border-dashed border-[#5A5A40]/30 p-6 rounded-[32px] space-y-4 shadow-sm animate-fade-in text-[#1a1a1a]">
                <div className="flex justify-between items-center text-xs font-mono text-[#a09c94] pb-2 border-b border-[#e1e1d7]">
                  <span>AHTE FLOORING SPECIFICATION SHEET</span>
                  <span className="text-emerald-600 font-bold">&#10003; READY TO LODGE</span>
                </div>

                <div className="space-y-2 text-xs font-sans text-[#5a5650] leading-relaxed">
                  <p>
                    <strong>Issued To:</strong> {clientName} ({clientCompany || "Private Client"})
                  </p>
                  <p>
                    <strong>Floor Base Style:</strong> {selectedShade.name} ({selectedShade.code})
                  </p>
                  <p>
                    <strong>Total Area coverage:</strong> {areaSqmNormal} Sqm ({areaSqftNormal} Sqft)
                  </p>
                  <p>
                    <strong>Dividers Layout:</strong> {metalInlaysType} system
                  </p>
                  <p>
                    <strong>Underfloor Thermal integration:</strong> {includeUnderfloorHeating ? "Yes (Add-on active)" : "No"}
                  </p>
                  <p>
                    <strong>Polished level:</strong> {shineFinish}
                  </p>
                  <p className="border-t border-[#e1e1d7] pt-2 text-[#1a1a1a]">
                    <strong>Net Dubai Contracting Rate:</strong> <span className="text-sm font-bold font-mono text-[#5A5A40]">{calculateTotal().toLocaleString()} AED</span>
                  </p>
                </div>

                <button
                  onClick={() => alert("Specification sheet PDF downloaded successfully. AHTE engineers notified!")}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs uppercase tracking-widest font-bold transition flex items-center justify-center gap-2 cursor-pointer rounded-full"
                >
                  <Download className="w-4 h-4" />
                  <span>Export Official Quote & PDF</span>
                </button>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
}
