"use client";

import { useRouter } from "next/navigation";
import TerrazzoView from "../../components/TerrazzoView";

export default function TerrazzoPage() {
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

  return <TerrazzoView onNavigate={handleNavigate} />;
}
