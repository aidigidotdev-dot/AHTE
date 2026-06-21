export enum FlooringType {
  TERRAZZO = "Terrazzo",
  EPOXY = "Epoxy",
  INDUSTRIAL = "Industrial Coating",
  MICROCEMENT = "Microcement",
}

export interface FlooringService {
  id: string;
  name: string;
  type: FlooringType;
  description: string;
  features: string[];
  thickness: string;
  durabilityRating: string; // e.g. "Outstanding (Grade A)"
  image: string;
  pricePerSqmEstimate: number; // in AED
}

export interface GalleryProject {
  id: string;
  title: string;
  location: string;
  type: FlooringType;
  serviceId: string;
  image: string;
  description: string;
  area: string;
  year: string;
  specDetails: {
    baseColor: string;
    aggregateType?: string;
    finishLevel: string;
  };
}

export interface TerrazzoShade {
  id: string;
  name: string;
  code: string;
  image: string;
  baseColor: string;
  aggregates: string[];
  popularFor: string;
  tone: "light" | "medium" | "dark";
}

export interface QuoteRequest {
  fullName: string;
  email: string;
  phone: string;
  flooringType: FlooringType;
  areaSqm: number;
  projectType: "Residential" | "Commercial" | "Industrial" | "Retail";
  includeInlays: boolean;
  inlayMeters: number;
  shineFinish: "Matt" | "Satin" | "High-Gloss";
  notes?: string;
}
