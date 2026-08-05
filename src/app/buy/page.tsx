"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Check, ArrowRight, ShieldCheck, Sparkles, Star, Zap, Code, Database, 
  X, Globe, BadgeCheck, Users
} from "lucide-react";

export default function BuyPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Form states
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientCompany, setClientCompany] = useState("");

  const plans = [
    {
      id: "starter",
      name: "Starter Template",
      description: "Perfect for independent local flooring contractors looking to establish a professional digital presence.",
      monthlyPrice: 99,
      yearlyPrice: 79,
      features: [
        "Interactive Terrazzo Quote Estimator",
        "Fully Responsive Layout (Mobile / Tablet)",
        "Vanilla CSS Glassmorphism Design",
        "Email lead notifications",
        "Standard local SEO optimizations",
        "Self-hosted template code delivery"
      ],
      badge: "Self-Managed"
    },
    {
      id: "growth",
      name: "Growth Engine",
      description: "Our most popular plan. Outrank competitors, capture qualified bids, and store them securely in a database.",
      monthlyPrice: 199,
      yearlyPrice: 159,
      features: [
        "Everything in Starter Plan",
        "PostgreSQL Database Lead Integration",
        "Custom Shader & Color Swatch Setup",
        "Topical Google EEAT SEO Hub",
        "Standard cloud maintenance & updates",
        "Vercel SSL & global CDN hosting setup",
        "1-click PDF estimate export configuration"
      ],
      badge: "Most Popular",
      featured: true
    },
    {
      id: "enterprise",
      name: "Enterprise Authority",
      description: "For established regional contractors seeking customized layouts, dedicated servers, and managed growth campaigns.",
      monthlyPrice: 399,
      yearlyPrice: 319,
      features: [
        "Everything in Growth Plan",
        "Complete bespoke UI layout redesign",
        "Dedicated cloud database instance",
        "Monthly custom SEO content updates",
        "Weekly automated database backups",
        "24/7 dedicated developer support",
        "Custom branding & typography alignment"
      ],
      badge: "Fully Managed"
    }
  ];

  const handlePurchaseSubmit = async () => {
    if (!clientName || !clientEmail || !clientPhone || !selectedPlan) return;

    const planObj = plans.find(p => p.id === selectedPlan);
    const planPrice = billingPeriod === "monthly" ? planObj?.monthlyPrice : planObj?.yearlyPrice;

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
          company: clientCompany || "Independent Flooring Co.",
          flooringType: "SaaS Calculator Template",
          areaSqm: 0,
          projectSector: "SaaS Template Purchase",
          finishStyle: `${planObj?.name} (${billingPeriod.toUpperCase()})`,
          metalInlays: "N/A",
          underfloorHeating: false,
          estimatedPrice: planPrice || 0,
          leadType: "template_purchase"
        }),
      });

      if (response.ok) {
        setIsFormSubmitted(true);
      } else {
        const errData = await response.json();
        alert(`Error submitting request: ${errData.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit request. Please try again.");
    }
  };

  const activePlanObj = plans.find(p => p.id === selectedPlan);

  return (
    <div className="bg-[#f5f5f0] min-h-screen py-20 text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. Value Proposition Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#5A5A40] bg-[#5A5A40]/10 px-4 py-2 rounded-full inline-block">
            Flooring B2B SaaS Solution
          </span>
          <h1 className="font-serif font-light text-5xl md:text-6xl text-[#1a1a1a] leading-tight">
            Double Your Flooring Leads With <br />
            Our <span className="font-bold italic">Interactive Calculator</span> Site.
          </h1>
          <p className="text-[#5a5650] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Stop losing traffic to generic contact forms. Deliver instant, interactive estimates that qualify clients automatically. Standard-compliant, high-speed, and SEO-ready template.
          </p>
        </div>

        {/* 2. Toggle Switch Billing */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <span className={`text-xs font-mono font-bold uppercase tracking-wider ${billingPeriod === "monthly" ? "text-[#1a1a1a]" : "text-[#a09c94]"}`}>
            Monthly Billing
          </span>
          <button
            onClick={() => setBillingPeriod(prev => prev === "monthly" ? "yearly" : "monthly")}
            className="w-16 h-8 bg-white border border-[#e1e1d7] rounded-full p-1 relative transition-colors duration-300"
            aria-label="Toggle Billing Period"
          >
            <div className={`w-6 h-6 bg-[#5A5A40] rounded-full transition-all duration-300 absolute ${billingPeriod === "yearly" ? "left-9" : "left-1"}`} />
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-xs font-mono font-bold uppercase tracking-wider ${billingPeriod === "yearly" ? "text-[#1a1a1a]" : "text-[#a09c94]"}`}>
              Yearly Billing
            </span>
            <span className="text-[9px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 border border-emerald-100 rounded-full tracking-wider uppercase">
              Save 20%
            </span>
          </div>
        </div>

        {/* 3. Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {plans.map((plan) => {
            const currentPrice = billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
            return (
              <div 
                key={plan.id}
                className={`bg-white border rounded-[32px] overflow-hidden p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl relative ${
                  plan.featured 
                    ? "border-2 border-[#5A5A40] shadow-md scale-102" 
                    : "border-[#e1e1d7] shadow-sm hover:border-[#5A5A40]/30"
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-4 right-4 bg-[#5A5A40] text-white font-mono text-[9px] uppercase tracking-wider px-3.5 py-1 rounded-full border border-white/10 font-bold">
                    RECOMMENDED
                  </div>
                )}
                
                <div className="space-y-6">
                  <div>
                    <span className="font-mono text-[10px] text-[#a09c94] font-bold uppercase tracking-wider block">
                      {plan.badge}
                    </span>
                    <h3 className="font-serif font-bold text-2xl text-[#1a1a1a] mt-1">
                      {plan.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#5a5650] leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="py-4 border-t border-b border-[#f5f5f0]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-serif font-extrabold text-[#1a1a1a]">${currentPrice}</span>
                      <span className="text-xs font-mono text-[#a09c94] font-bold">/ Month</span>
                    </div>
                    <span className="text-[9px] font-mono text-[#a09c94] block mt-1.5 uppercase font-bold">
                      {billingPeriod === "yearly" ? `Billed $${currentPrice * 12}/Year` : "Billed monthly"}
                    </span>
                  </div>

                  <div className="space-y-3.5">
                    <span className="font-mono text-[9px] text-[#5A5A40] uppercase font-bold tracking-wider block">
                      Features Included:
                    </span>
                    <ul className="space-y-3 text-xs text-[#5a5650]">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#f5f5f0]">
                  <button
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`w-full py-4 text-center font-mono text-xs uppercase tracking-widest font-bold transition rounded-full cursor-pointer ${
                      plan.featured
                        ? "bg-[#5A5A40] text-white hover:bg-[#1a1a1a] shadow-md shadow-[#5A5A40]/15"
                        : "bg-[#f5f5f0] text-[#5A5A40] hover:bg-[#edebe1] border border-[#e1e1d7]"
                    }`}
                  >
                    Select Plan
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. Core Features & Capabilities */}
        <div className="border border-[#e1e1d7] bg-white rounded-[32px] p-8 md:p-12 shadow-sm mb-20">
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#5A5A40] block">
              Core Capabilities
            </span>
            <h2 className="font-serif font-bold text-3xl text-[#1a1a1a] tracking-tight">
              Engineered For Premium Flooring Businesses
            </h2>
            <p className="text-xs md:text-sm text-[#5a5650] leading-relaxed">
              We provide more than code. We establish a complete local authority and bid generation pipeline specifically built for the high-end flooring industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3 p-6 bg-[#f5f5f0]/40 border border-[#e1e1d7] rounded-[24px]">
              <div className="p-2.5 bg-white border border-[#e1e1d7] text-[#5A5A40] w-fit rounded-xl">
                <Code className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-[#1a1a1a]">Bespoke Swatches</h4>
              <p className="text-xs text-[#5a5650] leading-relaxed">
                Allow users to toggle between Crystalline, Terracotta, or Basalt monolithic shades. Easily swap color specs for your local stock list.
              </p>
            </div>
            <div className="space-y-3 p-6 bg-[#f5f5f0]/40 border border-[#e1e1d7] rounded-[24px]">
              <div className="p-2.5 bg-white border border-[#e1e1d7] text-[#5A5A40] w-fit rounded-xl">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-[#1a1a1a]">Secure Postgres Leads</h4>
              <p className="text-xs text-[#5a5650] leading-relaxed">
                Never lose a lead to server restarts. Bids are logged immediately into a PostgreSQL table for your sales reps to view and download.
              </p>
            </div>
            <div className="space-y-3 p-6 bg-[#f5f5f0]/40 border border-[#e1e1d7] rounded-[24px]">
              <div className="p-2.5 bg-white border border-[#e1e1d7] text-[#5A5A40] w-fit rounded-xl">
                <Globe className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-[#1a1a1a]">Authority SEO Hub</h4>
              <p className="text-xs text-[#5a5650] leading-relaxed">
                Rank high on Google search. Out-of-the-box local directories, structural specs solving logs, and structured EEAT articles.
              </p>
            </div>
          </div>
        </div>

        {/* 5. Trust Badges / Social Proof Ticker */}
        <div className="text-center space-y-6">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#a09c94] block font-bold">
            Trusted by premium architectural installers
          </span>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-55">
            <span className="font-serif font-extrabold text-lg text-[#1a1a1a] tracking-tight flex items-center gap-1.5 select-none">
              <BadgeCheck className="w-5 h-5 text-[#5A5A40]" /> DM APPROVED SPECS
            </span>
            <span className="font-serif font-extrabold text-lg text-[#1a1a1a] tracking-tight flex items-center gap-1.5 select-none">
              <Users className="w-5 h-5 text-[#5A5A40]" /> 150+ CONTRACTORS
            </span>
            <span className="font-serif font-extrabold text-lg text-[#1a1a1a] tracking-tight flex items-center gap-1.5 select-none">
              <Star className="w-5 h-5 text-[#5A5A40] fill-[#5A5A40]" /> 5.0 GOOGLE RATING
            </span>
          </div>
        </div>
      </div>

      {/* 6. Purchase Lead Sidebar Drawer (Modal overlay) */}
      <AnimatePresence>
        {selectedPlan && activePlanObj && (
          <div className="fixed inset-0 z-50 bg-[#1a1a1a]/60 backdrop-blur-sm flex justify-end">
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
              className="w-full max-w-lg bg-white h-screen overflow-y-auto p-8 shadow-2xl relative flex flex-col justify-between"
            >
              <div>
                {/* Close Button */}
                <button
                  onClick={() => {
                    setSelectedPlan(null);
                    setIsFormSubmitted(false);
                  }}
                  className="absolute top-6 right-6 p-2 text-[#a09c94] hover:text-[#1a1a1a] transition-colors cursor-pointer"
                  aria-label="Close panel"
                >
                  <X className="w-5 h-5" />
                </button>

                <span className="font-mono text-[10px] uppercase tracking-widest text-[#5A5A40] font-bold">
                  Purchase Configurator
                </span>
                <h3 className="font-serif font-bold text-2xl text-[#1a1a1a] mt-1">
                  Setup Your {activePlanObj.name}
                </h3>
                <p className="text-xs text-[#a09c94] mt-2 leading-relaxed">
                  Enter your business details to request your custom calculator domain. We configure database connections and launch within 48 working hours.
                </p>

                {!isFormSubmitted ? (
                  <div className="mt-8 space-y-5">
                    {/* Client fields */}
                    <div>
                      <label className="text-xs text-[#5a5650] block mb-1">Your Full Name</label>
                      <input
                        type="text"
                        placeholder="Abdullah Al Ghurair"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full border border-[#e1e1d7] rounded-lg p-2.5 text-sm text-[#1a1a1a] bg-[#f5f5f0]/30 focus:outline-none focus:border-[#5A5A40]"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-[#5a5650] block mb-1">Flooring Company Name</label>
                      <input
                        type="text"
                        placeholder="Dubai Epoxy Installations LLC"
                        value={clientCompany}
                        onChange={(e) => setClientCompany(e.target.value)}
                        className="w-full border border-[#e1e1d7] rounded-lg p-2.5 text-sm text-[#1a1a1a] bg-[#f5f5f0]/30 focus:outline-none focus:border-[#5A5A40]"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-[#5a5650] block mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="abdullah@dubaiepoxy.ae"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        className="w-full border border-[#e1e1d7] rounded-lg p-2.5 text-sm text-[#1a1a1a] bg-[#f5f5f0]/30 focus:outline-none focus:border-[#5A5A40]"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-[#5a5650] block mb-1">WhatsApp / Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+971 50 XXXXXXX"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        className="w-full border border-[#e1e1d7] rounded-lg p-2.5 text-sm text-[#1a1a1a] bg-[#f5f5f0]/30 focus:outline-none focus:border-[#5A5A40]"
                      />
                    </div>

                    <div className="bg-[#f5f5f0] border border-[#e1e1d7] p-5 rounded-2xl text-xs space-y-2.5 font-mono text-[#5a5650] mt-6">
                      <div className="flex justify-between">
                        <span>PLAN:</span>
                        <span className="font-bold text-[#1a1a1a]">{activePlanObj.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>BILLING:</span>
                        <span className="font-bold text-[#5A5A40]">{billingPeriod.toUpperCase()}</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-[#e1e1d7] text-[#1a1a1a] font-bold">
                        <span>TOTAL BID:</span>
                        <span>
                          ${billingPeriod === "monthly" ? activePlanObj.monthlyPrice : activePlanObj.yearlyPrice} / Month
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mt-12 text-center py-6 space-y-4">
                    <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif font-bold text-xl text-[#1a1a1a]">Order Registered!</h4>
                    <p className="text-sm text-[#5a5650] max-w-sm mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold text-stone-900">{clientName}</span>. We have logged your request. Our integration engineers will contact you on <span className="font-semibold text-stone-900">{clientPhone}</span> within 24 hours to organize your custom swatches and database connection.
                    </p>
                  </div>
                )}
              </div>

              {!isFormSubmitted ? (
                <div className="border-t border-[#e1e1d7] pt-6 mt-8">
                  <button
                    onClick={handlePurchaseSubmit}
                    disabled={!clientName || !clientEmail || !clientPhone}
                    className={`w-full py-4 text-center font-mono text-xs uppercase tracking-widest font-bold transition-all rounded-full ${
                      clientName && clientEmail && clientPhone
                        ? "bg-[#5A5A40] hover:bg-[#1a1a1a] text-white cursor-pointer shadow-md"
                        : "bg-[#f5f5f0] text-[#a09c94] cursor-not-allowed border border-[#e1e1d7]"
                    }`}
                  >
                    Confirm & Setup Template &rarr;
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setSelectedPlan(null);
                    setIsFormSubmitted(false);
                  }}
                  className="w-full py-4 bg-[#1a1a1a] text-white font-mono text-xs uppercase tracking-widest font-bold rounded-full hover:bg-[#5A5A40] transition cursor-pointer"
                >
                  Close Panel
                </button>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
