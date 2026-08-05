"use client";

import ServicesView from "../../components/ServicesView";
import { useRouter } from "next/navigation";

export default function ServicesPage() {
  const router = useRouter();

  const handleNavigate = (tab: string) => {
    if (tab === "home" || tab === "") {
      router.push("/");
    } else {
      router.push(`/${tab}`);
    }
  };

  return <ServicesView onNavigate={handleNavigate} />;
}
