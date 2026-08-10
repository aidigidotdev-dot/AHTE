import type { Metadata } from "next";
import Header from "../components/Header";
import MainWebsiteFooter from "../components/MainWebsiteFooter";
import { PersonalizationProvider } from "../context/PersonalizationContext";
import PersonalizationBanner from "../components/PersonalizationBanner";
import "../index.css";


export const metadata: Metadata = {
  title: "Flooring Cost Calculator | Flooring Studio",
  description: "Estimate flooring costs for terrazzo, epoxy, microcement, MMA, kitchen flooring, and microconcrete projects.",
  keywords: ["Flooring Cost Calculator", "Flooring Estimate Template", "Terrazzo Cost Calculator", "Flooring Studio"],
  authors: [{ name: "Flooring Template Team" }],
};

import PersonalizationStyles from "../components/PersonalizationStyles";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-natural-bg overflow-x-hidden relative font-sans text-natural-dark antialiased selection:bg-primary-earth/30 selection:text-natural-dark">
        <PersonalizationProvider>
          <PersonalizationStyles />
          <PersonalizationBanner />
          <Header />
          <main className="flex-grow overflow-x-hidden relative w-full">
            {children}
          </main>
          <MainWebsiteFooter />
        </PersonalizationProvider>
      </body>
    </html>
  );
}
