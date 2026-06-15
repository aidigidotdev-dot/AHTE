"use client";

import { useRouter } from "next/navigation";
import HomeView from "../components/HomeView";

export default function HomePage() {
  const router = useRouter();

  const handleNavigate = (tab: string) => {
    if (tab === "home") {
      router.push("/");
    } else if (tab === "authority") {
      router.push("/authority");
    } else {
      router.push(`/${tab}`);
    }
  };

  return <HomeView onNavigate={handleNavigate} />;
}
