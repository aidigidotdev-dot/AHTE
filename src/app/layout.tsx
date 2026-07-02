import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import MainWebsiteFooter from "../components/MainWebsiteFooter";
import "../index.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Flooring Cost Calculator Dubai | A H T E Flooring",
  description: "Estimate flooring costs in Dubai for terrazzo, epoxy, microcement, MMA, kitchen flooring, and microconcrete projects.",
  keywords: ["Flooring Cost Calculator Dubai", "Flooring Estimate UAE", "Terrazzo Cost Dubai", "A H T E Flooring"],
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
        <MainWebsiteFooter />
      </body>
    </html>
  );
}
