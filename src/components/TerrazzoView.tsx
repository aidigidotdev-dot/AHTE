"use client";

import { useState } from "react";
import { Coins, FileText, Ruler } from "lucide-react";

const COST_ESTIMATOR_SERVICES = [
  { service: "Epoxy Flooring", minimumArea: 1000, minimumAed: 60 },
  { service: "Kitchen Flooring", minimumArea: 100, minimumAed: 280 },
  { service: "Terrazzo Flooring", minimumArea: 100, minimumAed: 580 },
  { service: "Microcement", minimumArea: 200, minimumAed: 220 },
  { service: "MMA Flooring", minimumArea: 50, minimumAed: 480 },
  { service: "Microconcrete", minimumArea: 200, minimumAed: 395 },
];

export default function TerrazzoView() {
  const [areaInSqm, setAreaInSqm] = useState<number>(120);
  const [useSqft, setUseSqft] = useState<boolean>(false);
  const [selectedCostService, setSelectedCostService] = useState("Terrazzo Flooring");
  const [clientName, setClientName] = useState("");
  const [clientCompany, setClientCompany] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const activeCostService =
    COST_ESTIMATOR_SERVICES.find((item) => item.service === selectedCostService) || COST_ESTIMATOR_SERVICES[2];
  const minimumProjectArea = activeCostService.minimumArea;
  const areaSqmNormal = useSqft ? Math.round(areaInSqm / 10.76) : areaInSqm;
  const areaSqftNormal = useSqft ? areaInSqm : Math.round(areaInSqm * 10.76);
  const billableAreaSqm = Math.max(areaSqmNormal, minimumProjectArea);
  const estimatedTotal = Math.round(activeCostService.minimumAed * billableAreaSqm);
  const canSubmitLead = !!clientEmail.trim() || !!clientPhone.trim();

  const submitEstimateLead = async () => {
    if (!canSubmitLead) return;

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: clientName || "Website Lead",
          email: clientEmail,
          company: clientCompany,
          phone: clientPhone,
          flooringType: activeCostService.service,
          areaSqm: areaSqmNormal,
          estimatedPrice: estimatedTotal,
          leadType: "calculator_estimate",
        }),
      });

      if (response.ok) {
        setLeadSubmitted(true);
      } else {
        const errData = await response.json();
        alert(`Error submitting estimate request: ${errData.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit request. Please try again.");
    }
  };

  return (
    <div className="bg-[#f5f5f0] min-h-screen py-16 text-[#1a1a1a]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-3xl mb-12 space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#5A5A40] block">
            Dubai Flooring Cost Estimation
          </span>
          <h1 className="font-serif font-light text-4xl md:text-5xl text-[#1a1a1a]">
            Flooring Cost Estimator
          </h1>
          <p className="text-[#5a5650] text-sm md:text-base leading-relaxed">
            Select a flooring system, enter the area, and share a mobile number or email so the team can follow up.
          </p>
        </div>

        <div className="bg-white border border-[#e1e1d7] rounded-[32px] shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-3 p-6 md:p-8 space-y-6">
              <div className="flex items-start gap-3 pb-5 border-b border-[#e1e1d7]">
                <div className="w-10 h-10 rounded-full bg-[#5A5A40] text-white flex items-center justify-center shrink-0">
                  <Coins className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#5A5A40] font-bold">
                    Cost Estimator
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-[#1a1a1a] mt-1">
                    Simple Project Estimate
                  </h2>
                </div>
              </div>

              <label className="space-y-2 block">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#5a5650] font-bold">
                  Flooring System
                </span>
                <select
                  value={selectedCostService}
                  onChange={(event) => {
                    const selected = COST_ESTIMATOR_SERVICES.find((item) => item.service === event.target.value);
                    setSelectedCostService(event.target.value);
                    setLeadSubmitted(false);
                    if (selected) {
                      setUseSqft(false);
                      setAreaInSqm(selected.minimumArea);
                    }
                  }}
                  className="w-full bg-[#f5f5f0] border border-[#e1e1d7] p-3 text-sm text-[#1a1a1a] rounded-xl focus:outline-none focus:border-[#5A5A40]"
                >
                  {COST_ESTIMATOR_SERVICES.map((item) => (
                    <option key={item.service} value={item.service}>
                      {item.service}
                    </option>
                  ))}
                </select>
              </label>

              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#5a5650] font-bold">
                    Project Area
                  </span>
                  <div className="flex border border-[#e1e1d7] bg-[#f5f5f0] rounded-full p-0.5 w-fit">
                    <button
                      type="button"
                      onClick={() => {
                        if (useSqft) {
                          setAreaInSqm(Math.max(minimumProjectArea, Math.round(areaInSqm / 10.76)));
                          setUseSqft(false);
                        }
                      }}
                      className={`px-4 py-1.5 text-[10px] rounded-full cursor-pointer transition-colors ${!useSqft ? "bg-[#5A5A40] text-white font-bold" : "text-[#5a5650] hover:text-[#1a1a1a]"}`}
                    >
                      Sqm
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (!useSqft) {
                          setAreaInSqm(Math.round(Math.max(minimumProjectArea, areaInSqm) * 10.76));
                          setUseSqft(true);
                        }
                      }}
                      className={`px-4 py-1.5 text-[10px] rounded-full cursor-pointer transition-colors ${useSqft ? "bg-[#5A5A40] text-white font-bold" : "text-[#5a5650] hover:text-[#1a1a1a]"}`}
                    >
                      Sqft
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-4 items-center">
                  <input
                    type="number"
                    min={useSqft ? Math.round(minimumProjectArea * 10.76) : minimumProjectArea}
                    max="5000"
                    value={areaInSqm}
                    onChange={(e) => {
                      const minArea = useSqft ? Math.round(minimumProjectArea * 10.76) : minimumProjectArea;
                      setAreaInSqm(Math.max(minArea, parseInt(e.target.value) || minArea));
                      setLeadSubmitted(false);
                    }}
                    className="w-full bg-[#f5f5f0] border border-[#e1e1d7] text-[#1a1a1a] font-mono p-3 text-center text-sm focus:outline-none focus:border-[#5A5A40] rounded-xl"
                  />
                  <div className="text-xs text-[#5a5650] font-sans leading-snug flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-[#5A5A40]" />
                    <span>
                      Equivalent area:{" "}
                      <strong className="text-[#1a1a1a] font-mono">
                        {useSqft ? `${areaSqmNormal} Sqm` : `${areaSqftNormal} Sqft`}
                      </strong>
                    </span>
                  </div>
                </div>

                <input
                  type="range"
                  min={useSqft ? Math.round(minimumProjectArea * 10.76).toString() : minimumProjectArea.toString()}
                  max={useSqft ? "5000" : "500"}
                  step={useSqft ? "100" : "10"}
                  value={areaInSqm}
                  onChange={(e) => {
                    setAreaInSqm(parseInt(e.target.value));
                    setLeadSubmitted(false);
                  }}
                  className="w-full h-1 bg-[#e1e1d7] accent-[#5A5A40] rounded-lg cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="border border-[#e1e1d7] rounded-2xl p-4 bg-[#f5f5f0]/60">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#5a5650] font-bold block">
                    Rate
                  </span>
                  <strong className="font-serif text-lg text-[#1a1a1a]">AED {activeCostService.minimumAed}</strong>
                  <span className="text-xs text-[#5a5650]"> / sqm</span>
                </div>
                <div className="border border-[#e1e1d7] rounded-2xl p-4 bg-[#f5f5f0]/60">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#5a5650] font-bold block">
                    Billable Area
                  </span>
                  <strong className="font-serif text-lg text-[#1a1a1a]">{billableAreaSqm.toLocaleString()}</strong>
                  <span className="text-xs text-[#5a5650]"> sqm</span>
                </div>
                <div className="border border-[#1a1a1a] rounded-2xl p-4 bg-[#1a1a1a] text-white">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#a09c94] font-bold block">
                    Estimated Cost
                  </span>
                  <strong className="font-serif text-lg">{estimatedTotal.toLocaleString()} AED</strong>
                </div>
              </div>

              <p className="text-[10px] text-[#5a5650] leading-relaxed">
                Above costs are for Dubai based projects only. Terms and Conditions Apply.
              </p>
            </div>

            <div className="lg:col-span-2 bg-[#1a1a1a] text-white p-6 md:p-8 space-y-5">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#a09c94] font-bold">
                  Lead Details
                </span>
                <h3 className="font-serif text-2xl font-bold mt-1">Request Follow-Up</h3>
                <p className="text-xs text-[#a09c94] mt-2 leading-relaxed">
                  Add either a mobile number or email address so the team can contact you.
                </p>
              </div>

              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={clientName}
                  onChange={(e) => {
                    setClientName(e.target.value);
                    setLeadSubmitted(false);
                  }}
                  className="w-full bg-black/40 border border-white/10 p-3 text-xs text-white rounded-xl placeholder-stone-500 focus:outline-[#5A5A40]"
                />
                <input
                  type="text"
                  placeholder="Company / Project"
                  value={clientCompany}
                  onChange={(e) => {
                    setClientCompany(e.target.value);
                    setLeadSubmitted(false);
                  }}
                  className="w-full bg-black/40 border border-white/10 p-3 text-xs text-white rounded-xl placeholder-stone-500 focus:outline-[#5A5A40]"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={clientEmail}
                  onChange={(e) => {
                    setClientEmail(e.target.value);
                    setLeadSubmitted(false);
                  }}
                  className="w-full bg-black/40 border border-white/10 p-3 text-xs text-white rounded-xl placeholder-stone-500 focus:outline-[#5A5A40]"
                />
                <input
                  type="tel"
                  placeholder="+971 Phone Number"
                  value={clientPhone}
                  onChange={(e) => {
                    setClientPhone(e.target.value);
                    setLeadSubmitted(false);
                  }}
                  className="w-full bg-black/40 border border-white/10 p-3 text-xs text-white rounded-xl placeholder-stone-500 focus:outline-[#5A5A40]"
                />
              </div>

              <button
                type="button"
                onClick={submitEstimateLead}
                disabled={!canSubmitLead}
                className={`w-full py-4 font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition rounded-full ${
                  canSubmitLead
                    ? "bg-[#5A5A40] hover:bg-white hover:text-[#1a1a1a] text-white cursor-pointer shadow-md"
                    : "bg-[#252520] text-stone-500 cursor-not-allowed border border-[#e1e1d7]/5"
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Submit Estimate Request</span>
              </button>

              {!canSubmitLead && (
                <span className="text-[9px] text-[#a09c94] font-mono block text-center">
                  * Enter mobile number or email address to submit.
                </span>
              )}

              {leadSubmitted && (
                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-xs text-emerald-100 leading-relaxed">
                  Thank you. Your estimate request has been received and the team will follow up shortly.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
