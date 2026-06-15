"use client";

import { useRouter } from "next/navigation";
import SeoHubView from "../../components/SeoHubView";

export default function AuthorityPage() {
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

  return <SeoHubView onNavigate={handleNavigate} />;
}
