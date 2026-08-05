"use client";

import { useState } from "react";
import Link from "next/link";
import { Laptop, PlusCircle, Sparkles, X, Edit, RotateCcw } from "lucide-react";
import { usePersonalization } from "../context/PersonalizationContext";
import { motion, AnimatePresence } from "motion/react";

export default function WhatsAppFloat() {
  const whatsappUrl = "https://wa.me/971589163867?text=Hi!%20I%20am%20interested%20in%20purchasing%20the%20Flooring%20Calculator%20Website%20Template.";

  const { 
    companyName, aboutText, locationText, contactText, inquiriesText, 
    isPersonalized, updatePersonalization, resetPersonalization 
  } = usePersonalization();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Form states
  const [formCompany, setFormCompany] = useState(companyName);
  const [formAbout, setFormAbout] = useState(aboutText);
  const [formLocation, setFormLocation] = useState(locationText);
  const [formContact, setFormContact] = useState(contactText);
  const [formInquiries, setFormInquiries] = useState(inquiriesText);

  // Synchronize form states when drawer opens
  const openDrawer = () => {
    setFormCompany(companyName);
    setFormAbout(aboutText);
    setFormLocation(locationText);
    setFormContact(contactText);
    setFormInquiries(inquiriesText);
    setIsDrawerOpen(true);
  };

  const handleApply = () => {
    updatePersonalization({
      companyName: formCompany,
      aboutText: formAbout,
      locationText: formLocation,
      contactText: formContact,
      inquiriesText: formInquiries
    });
    setIsDrawerOpen(false);
  };

  const handleReset = () => {
    resetPersonalization();
    // Reset form fields back to original defaults
    setFormCompany("Flooring Studio");
    setFormAbout("Interactive lead generation and dynamic quote estimation templates for premium architectural flooring contractors. Deliver custom sand shades, chip mixes, and flat gloss metrics seamlessly.");
    setFormLocation("Your Business Address, Dubai, UAE");
    setFormContact("+971 58 916 3867");
    setFormInquiries("sales@yourdomain.com");
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[90] flex flex-col gap-2.5 items-end max-w-[280px] sm:max-w-md animate-fade-in">
        
        {/* 1. Purple/Indigo Button: Personalize This Website for my Company */}
        <button
          onClick={openDrawer}
          className="flex items-center gap-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-103 group font-mono text-[9px] sm:text-xs uppercase tracking-wider font-extrabold cursor-pointer relative"
          title="Personalize Website Branding & Copy"
        >
          <Sparkles className="w-3.5 h-3.5 shrink-0 text-yellow-300 animate-pulse" />
          <span>Personalize for my Company</span>
        </button>

        {/* 2. Red Button: Buy This Website */}
        <Link
          href="/buy"
          className="flex items-center gap-2.5 bg-[#FF4C4C] hover:bg-[#E03A3A] text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-103 group font-mono text-[9px] sm:text-xs uppercase tracking-wider font-extrabold cursor-pointer"
          title="Buy This Full Website Template"
        >
          <Laptop className="w-3.5 h-3.5 shrink-0" />
          <span>Buy This Website</span>
        </Link>

        {/* 3. Orange Button: Add Calculator To Existing Website */}
        <Link
          href="/buy?plan=starter"
          className="flex items-center gap-2.5 bg-[#FF6B4A] hover:bg-[#E05230] text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-103 group font-mono text-[9px] sm:text-xs uppercase tracking-wider font-extrabold cursor-pointer text-right"
          title="Add Quote Calculator to Your Website"
        >
          <PlusCircle className="w-3.5 h-3.5 shrink-0" />
          <span className="hidden sm:inline">Add Calculator To Existing Website</span>
          <span className="sm:hidden">Add Calculator To Site</span>
        </Link>

        {/* 4. Green Button: WhatsApp Buy Website */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-103 group font-mono text-[9px] sm:text-xs uppercase tracking-wider font-extrabold cursor-pointer relative"
          title="Chat & Purchase on WhatsApp"
        >
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-60 pointer-events-none group-hover:hidden" />
          
          <svg
            className="w-4 h-4 fill-current shrink-0"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.579 2.022 14.12 1.0 11.99 1.0c-5.432 0-9.855 4.37-9.859 9.802-.001 1.76.471 3.478 1.367 4.981L2.47 21.03l5.177-1.876zm12.39-7.391c-.244-.122-1.44-.711-1.662-.792-.222-.081-.383-.122-.544.122-.161.243-.622.792-.763.953-.141.162-.282.182-.526.061-.244-.122-.931-.343-1.773-1.095-.655-.584-1.098-1.307-1.226-1.51-.128-.203-.014-.313.108-.434.11-.109.244-.284.366-.426.122-.142.163-.243.244-.406.081-.162.041-.304-.02-.426-.061-.122-.544-1.307-.746-1.794-.197-.474-.397-.41-.544-.417-.14-.007-.302-.008-.463-.008-.162 0-.424.061-.645.304-.222.244-.846.827-.846 2.016 0 1.189.866 2.336.987 2.5.121.163 1.706 2.605 4.133 3.65 1.77.763 2.502.83 3.393.698.487-.072 1.44-.588 1.642-1.157.202-.569.202-1.055.141-1.157-.061-.101-.222-.162-.466-.284z" />
          </svg>
          
          <span>WhatsApp: Buy Website</span>
        </a>

      </div>

      {/* Real-Time Personalization Sidebar Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <div className="fixed inset-0 z-[100] bg-[#1a1a1a]/60 backdrop-blur-sm flex justify-end">
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
                  onClick={() => setIsDrawerOpen(false)}
                  className="absolute top-6 right-6 p-2 text-[#a09c94] hover:text-[#1a1a1a] transition-colors cursor-pointer"
                  aria-label="Close panel"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-indigo-600 shrink-0" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-indigo-600 font-extrabold">
                    Interactive Live Demo
                  </span>
                </div>
                <h3 className="font-serif font-bold text-2xl text-[#1a1a1a] mt-1.5">
                  Personalize This Website
                </h3>
                <p className="text-xs text-[#a09c94] mt-2 leading-relaxed">
                  Enter your company's information below. The entire site layout, headers, footers, and brand name will update live in real-time.
                </p>

                <div className="mt-8 space-y-5">
                  {/* Inputs */}
                  <div>
                    <label className="text-xs font-semibold text-[#5a5650] block mb-1">Company / Brand Name</label>
                    <input
                      type="text"
                      value={formCompany}
                      onChange={(e) => setFormCompany(e.target.value)}
                      placeholder="e.g. Apex Flooring Group"
                      className="w-full border border-[#e1e1d7] rounded-lg p-2.5 text-sm text-[#1a1a1a] bg-[#f5f5f0]/30 focus:outline-none focus:border-indigo-500 font-sans"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#5a5650] block mb-1">About Us Description</label>
                    <textarea
                      value={formAbout}
                      onChange={(e) => setFormAbout(e.target.value)}
                      rows={3}
                      placeholder="A short sentence describing your architectural flooring systems and installations."
                      className="w-full border border-[#e1e1d7] rounded-lg p-2.5 text-sm text-[#1a1a1a] bg-[#f5f5f0]/30 focus:outline-none focus:border-indigo-500 font-sans resize-none leading-relaxed"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#5a5650] block mb-1">Office / Showroom Location</label>
                    <input
                      type="text"
                      value={formLocation}
                      onChange={(e) => setFormLocation(e.target.value)}
                      placeholder="e.g. Warehouse 12, Al Quoz 3, Dubai, UAE"
                      className="w-full border border-[#e1e1d7] rounded-lg p-2.5 text-sm text-[#1a1a1a] bg-[#f5f5f0]/30 focus:outline-none focus:border-indigo-500 font-sans"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#5a5650] block mb-1">Contact Phone Number</label>
                    <input
                      type="text"
                      value={formContact}
                      onChange={(e) => setFormContact(e.target.value)}
                      placeholder="e.g. +971 50 XXXXXXX"
                      className="w-full border border-[#e1e1d7] rounded-lg p-2.5 text-sm text-[#1a1a1a] bg-[#f5f5f0]/30 focus:outline-none focus:border-indigo-500 font-sans"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#5a5650] block mb-1">Inquiries Email Address</label>
                    <input
                      type="email"
                      value={formInquiries}
                      onChange={(e) => setFormInquiries(e.target.value)}
                      placeholder="e.g. contact@yourcompany.com"
                      className="w-full border border-[#e1e1d7] rounded-lg p-2.5 text-sm text-[#1a1a1a] bg-[#f5f5f0]/30 focus:outline-none focus:border-indigo-500 font-sans"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-[#e1e1d7] pt-6 mt-8 flex gap-3">
                {isPersonalized && (
                  <button
                    onClick={handleReset}
                    className="flex-1 py-3.5 text-center font-mono text-[10px] sm:text-xs uppercase tracking-widest font-extrabold transition rounded-full bg-white border border-[#e1e1d7] text-red-600 hover:bg-red-50 cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Reset
                  </button>
                )}
                <button
                  onClick={handleApply}
                  disabled={!formCompany || !formAbout || !formLocation || !formContact || !formInquiries}
                  className={`flex-[2] py-3.5 text-center font-mono text-[10px] sm:text-xs uppercase tracking-widest font-extrabold transition rounded-full flex items-center justify-center gap-1.5 ${
                    formCompany && formAbout && formLocation && formContact && formInquiries
                      ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-700 hover:to-indigo-700 cursor-pointer shadow-md"
                      : "bg-[#f5f5f0] text-[#a09c94] cursor-not-allowed border border-[#e1e1d7]"
                  }`}
                >
                  <Edit className="w-3.5 h-3.5" />
                  Apply Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
