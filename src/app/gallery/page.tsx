"use client";

import { useRouter } from "next/navigation";
import GalleryView from "../../components/GalleryView";

export default function GalleryPage() {
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

  return <GalleryView onNavigate={handleNavigate} />;
}
