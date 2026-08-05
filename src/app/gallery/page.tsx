"use client";

import GalleryView from "../../components/GalleryView";
import { useRouter } from "next/navigation";

export default function GalleryPage() {
  const router = useRouter();

  const handleNavigate = (tab: string) => {
    if (tab === "home" || tab === "") {
      router.push("/");
    } else {
      router.push(`/${tab}`);
    }
  };

  return <GalleryView onNavigate={handleNavigate} />;
}
