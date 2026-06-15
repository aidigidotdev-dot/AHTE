"use client";

import { useRouter } from "next/navigation";
import ServicesView from "../../components/ServicesView";

export default function ServicesPage() {
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

  return <ServicesView onNavigate={handleNavigate} />;
}
