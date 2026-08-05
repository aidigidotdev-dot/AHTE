"use client";

import { MessageSquare } from "lucide-react";

export default function WhatsAppFloat() {
  const whatsappUrl = "https://wa.me/971589163867?text=Hi!%20I%20am%20interested%20in%20purchasing%20the%20Flooring%20Calculator%20Website%20Template.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3.5 bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group font-mono text-xs uppercase tracking-wider font-extrabold"
      title="Buy Template on WhatsApp"
    >
      {/* Pulse effect */}
      <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-60 pointer-events-none group-hover:hidden" />
      
      {/* Official WhatsApp SVG Icon */}
      <svg
        className="w-5 h-5 fill-current shrink-0"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.579 2.022 14.12 1.0 11.99 1.0c-5.432 0-9.855 4.37-9.859 9.802-.001 1.76.471 3.478 1.367 4.981L2.47 21.03l5.177-1.876zm12.39-7.391c-.244-.122-1.44-.711-1.662-.792-.222-.081-.383-.122-.544.122-.161.243-.622.792-.763.953-.141.162-.282.182-.526.061-.244-.122-.931-.343-1.773-1.095-.655-.584-1.098-1.307-1.226-1.51-.128-.203-.014-.313.108-.434.11-.109.244-.284.366-.426.122-.142.163-.243.244-.406.081-.162.041-.304-.02-.426-.061-.122-.544-1.307-.746-1.794-.197-.474-.397-.41-.544-.417-.14-.007-.302-.008-.463-.008-.162 0-.424.061-.645.304-.222.244-.846.827-.846 2.016 0 1.189.866 2.336.987 2.5.121.163 1.706 2.605 4.133 3.65 1.77.763 2.502.83 3.393.698.487-.072 1.44-.588 1.642-1.157.202-.569.202-1.055.141-1.157-.061-.101-.222-.162-.466-.284z" />
      </svg>
      
      <span className="hidden sm:inline">WhatsApp: Buy Website</span>
      <span className="sm:hidden">Buy Website</span>
    </a>
  );
}
