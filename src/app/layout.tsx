import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../index.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "A H T E Flooring UAE | Seamless Terrazzo & Architectural Surfaces Dubai",
  description: "Specialist contractor for premium seamless terrazzo, metallic epoxy, polished concrete, polyurethane screeds, and microcement flooring across the UAE.",
  keywords: ["Terrazzo Flooring Dubai", "Epoxy Flooring UAE", "Polished Concrete Dubai", "Microcement Dubai", "A H T E Flooring"],
  authors: [{ name: "A H T E Flooring Team" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="flex flex-col min-h-screen bg-natural-bg overflow-x-hidden relative font-sans text-natural-dark antialiased selection:bg-primary-earth/30 selection:text-natural-dark">
        <Header />
        <main className="flex-grow overflow-x-hidden relative w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
