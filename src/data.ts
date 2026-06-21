import { FlooringType, FlooringService, GalleryProject, TerrazzoShade } from "./types";

export const SERVICES: FlooringService[] = [
  {
    id: "terrazzo",
    name: "Terrazzo Flooring",
    type: FlooringType.TERRAZZO,
    description: "Our signature seamless resinous and cementitious aggregate-chip surfaces, finished to achieve an exquisite, glass-like sheen. Highly customizable with multi-colored architectural aggregates and dynamic brass metal dividers.",
    features: [
      "Completely seamless over expansive monolithic grids",
      "Dynamic patterns using custom water-jet metal divisions",
      "Exceptional compression strength and wear resistance",
      "Zero-VOC eco-friendly formulations",
      "Available in infinite base color hues and aggregate percentages"
    ],
    thickness: "8mm to 15mm",
    durabilityRating: "Supreme (Grade A+ | 50-Year Lifespan)",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhAUnoI7PD2t9CBEp6d2M6zGslEECHQHsjVOt_C0GNpDlLXa2RCDa7A6-tYLKQWdOhvuoIv03FaazZvimXYNGIv31DU2-wpp3Sa8H8uxmeAWOtzLJ-_uegSrxueBqxGxcBMTQ-RxZLY60ujZfp4FKkeVKSW8u2UD53tO7LNqswkvqzuJIBX1a4qIUkQjnkLpXYHveW3112xEjYMdgqmpVZpjoyyZ5TFSbh147fMnTM-AMRgPUzP2G7gseyDiqHZpa-UM5J9WOUQQY",
    pricePerSqmEstimate: 450 // AED per Sqm
  },
  {
    id: "epoxy",
    name: "Metallic & Decorative Epoxy",
    type: FlooringType.EPOXY,
    description: "Luxury self-leveling resins with pearlescent metallic micro-pigments that shift under ambient lighting. Designed for high-end residential interiors, luxury retail showrooms, and modern galleries requiring fluid, artistic expression.",
    features: [
      "Stunning liquid-metal visual depth and unique flowing pattern effects",
      "UV-stable aliphatic topcoat protection to prevent UV ambering",
      "Anti-bacterial, completely non-porous and hygienic",
      "Thermal shock resistance and flexibility",
      "Extremely simple cleaning protocol"
    ],
    thickness: "2mm to 4mm",
    durabilityRating: "Outstanding (Grade A | 15-Year Lifespan)",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-0sk4aRaMkH1nGNuFeXdthLB9hAr6OkdwbRkslKdDSOJr-6xKh8cGlaj6_timRs30GJnNwNTg_BdW-B553cA7gFKxO9F-CW-nVgHu4yDTpgoYQk9D1uE25UEoPqAf957yDkplSBsBnf203APhHOOMktUYE5UChIxWhZOPw3BBcrxqOnTF76xbD7xQwHoLtDRboVVkMSZ4pwBUhjwF3WZg7uCWS0_NBR9KE8Bsi20pAD0UnJrOn50dgTJLmNOI6XIlbriPNunJGNc",
    pricePerSqmEstimate: 280
  },
  {
    id: "industrial",
    name: "Industrial Polyurethane & Screeds",
    type: FlooringType.INDUSTRIAL,
    description: "Heavy-duty polyaspartic and polyurethane concrete floor overlays built for high-demand thermal, chemical, and mechanics load stresses. Preferred by high-spec aviation hangars, pharmaceutical cleanrooms, and automated logistics centers.",
    features: [
      "Withstands heavy forklift wheel stress and steel-wheel container loads",
      "Immune to aggressive acids, alkali chemicals, oils, and chemical spills",
      "Withstands high-pressure steam cleaning up to 130°C",
      "Ultra-fast dry formulas allowing rapid 12-hour walk-on reuse",
      "Textured anti-slip profiles tailored for damp work conditions"
    ],
    thickness: "6mm to 9mm",
    durabilityRating: "Industrial Grade (Extreme | 25-Year Lifespan)",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBewOCELN9cBrZtp1RU4hEDbw47OyMVr95KRCNQENN7HPRNuKzBi92v6chPHtG8QNhuQAXszf_yp1lsPxZvFYDf6jJj4Ixrzcju3PnbRRzDvVdZ64lIT34ydv7Vwj4m20w9a706i6RPiwUqE2-tAfsHt-z35k8mLOLbnHN8GkgSRu-_jAtAObnB-UKeOSEEjD_2UK-EFgNYNjRK3G6MUkACfsEYbFMtQIA2460XUTw6M4L0F-AvB-rrWlI76FcXz5fUK_XoFbI9no",
    pricePerSqmEstimate: 220
  },
  {
    id: "microcement",
    name: "Microcement & Decorative Screeds",
    type: FlooringType.MICROCEMENT,
    description: "A continuous, ultra-thin polymer-modified cement overlay designed for sleek minimalist layouts. Applicable directly onto existing wood, tile, or sub-slabs without the need for demolition. Beloved by premium architectural designers for its seamless concrete texture across floors, walls, and bespoke joinery.",
    features: [
      "Sleek continuous finish with a microscopic 2mm to 3mm thickness profile",
      "High adhesion factor directly applicable over existing ceramic tiles or timber",
      "100% waterproof and moisture resistant, absolute fit for wet rooms & spas",
      "Soft tactile satin touch paired with rich, subtle cloudy shades",
      "Zero expansion joint requirements in small-to-midscale architectural spaces"
    ],
    thickness: "2mm to 4mm",
    durabilityRating: "Superior (Grade A | 20-Year Lifespan)",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBm_IaKltN9Tp9WeBq_0w0FLRHRxitI9PfKffkw24FdcPissJhjyNnnpuOKL4eys0bzhb8vgnW2cb7fD2bdlm4mRIDYmpnKi4StixdPDc1P8IfAm6WApYUfIcMn559Zxws2UASKMpeAbX283tavcM2UuogibY-vaapRa5n4VdeJ6Ooki41e92asEiKYRhkgeTsQe60mroDhUmvVL634CVIcQzhN3et-2-24C7C5y9Rh45hCNzcKQTgwPriyP5q1jH2YM5sJ2SvwnSk",
    pricePerSqmEstimate: 320
  }
];

export const GALLERY: GalleryProject[] = [
  {
    id: "p1",
    title: "Commercial Grand Lobby",
    location: "Dubai Marina, Dubai",
    type: FlooringType.TERRAZZO,
    serviceId: "terrazzo",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLUDsAPVCvATOX65uzjix_jcJY8OfWVERef06Xj9qb0stcPXfr6OSS6OQopf_23e4RKuiTDqGsOwHOoT7SMmioqmorgKiWlvpG3KzCmmW-6-E5QEiG9ooqK6ZtpGO_saSwoHprFCGvv6tanzsCXESdvJwvn67oWLSON0XEWbeXgLImospoARBXvDOCP9PKgoihHCJiRLEsbOvNUK6Jfbr7TVQpQgWLfE2vkFmchQjbnj87gY3GjdQIA6rSfPqIrGYeYBLj_k70CR8",
    description: "A monumental 1,200 square meter seamless Terrazzo floor designed using White Alabaster resin and premium Carrara aggregate. Strategically positioned copper-inlay bands form concentric geometrical frames referencing classical waves.",
    area: "1,200 sqm",
    year: "2025",
    specDetails: {
      baseColor: "Pure Alabaster White",
      aggregateType: "Carrara Extra & Mother of Pearl",
      finishLevel: "800-Grit High-Gloss Mirror"
    }
  },
  {
    id: "p3",
    title: "Jumeirah Heights Atrium",
    location: "Jumeirah Heights, Dubai",
    type: FlooringType.TERRAZZO,
    serviceId: "terrazzo",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6RMLy0Q-h8BHNoo0-6nz3IMUNMTBizUsEUXU1es8RURMcW6Cedrj-q7ZNHTYjWyEl0AGn_Q9Vw0EfEHQzYGtB_Cl3_QMwCXWPDn1XYkD-7Pg4dfEAq_-c7mQAmScjlHAGS4BmOmDzWx-pbPedwSUW-kOE3pY9DAqdWidfdw-U2Bq752EZCBNIk69I-RW767d9fcxbRNDkpgNIaUwIUuvnF4VZvPwG8HmTUDYL4AU8YX_1Oal1S3qvMV15IiIuZF5Xlbf5Mrhqgb8",
    description: "A gorgeous modern atrium using seamless cementitious Terrazzo for durability and sophisticated visual allure. Incorporates light-grey matrix base with soft coral sand and basalt aggregates to establish warmth and high brightness.",
    area: "850 sqm",
    year: "2024",
    specDetails: {
      baseColor: "Warm Sand-Grey",
      aggregateType: "Basalt, Coral Chips & Quartzite",
      finishLevel: "400-Grit Satin Semi-Gloss"
    }
  },
  {
    id: "p6",
    title: "Downtown Penthouse Suite",
    location: "Downtown Boulevard, Dubai",
    type: FlooringType.TERRAZZO,
    serviceId: "terrazzo",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDy0X3m4TlEkr9SZKDgzDxOKUliF8iWdGWIOXOGuX_w9Lm6xB6bIDfWKL6RmoY6rA65SnoaKmIEVCxEL-pl_ZUXFAUS2u-eYjhXcq6Qgxthlzm3QS1z7gWzp-LIp862YgbMGbBiBpDOyLZbotC_yykll8EVSH6ITbc4Xy2tjwVRwc3cbKd9VuQb3pO8EaPKLKs-vyaU4eKfYM5K_kGN5tN145H73kzTHFmLzbWZd_N53UkssX3d6vUGe9sXJTYMu_P0KywrHb_VHMU",
    description: "Bespoke fine-chip seamless terrazzo integrated with high-gloss pearl Epoxy accents throughout a private high-floor luxury suite. High-contrast granite aggregate chips deliver rich architectural grain and depth.",
    area: "340 sqm",
    year: "2025",
    specDetails: {
      baseColor: "Muted Premium Charcoal",
      aggregateType: "Snowflake White Aggregate & Nero Marquina",
      finishLevel: "800-Grit Mirror Reflective"
    }
  },
  {
    id: "p2",
    title: "Exclusive Al Barsha Residential Villa",
    location: "Al Barsha, Dubai",
    type: FlooringType.EPOXY,
    serviceId: "epoxy",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-qUzQYBft1jMhfAh5tIY1TyOoNE8ipm7zOMPYIjNeA0YpoHXdcSMBWOutCFJRII71dETx57zSaDxaCP9PqWmR3zGqQD5DU9fR-jikENjXVFi7gOEm8u1Wk-aqXfQfvXN31V5k06Tv6alUVt9_ZBcyMAbCrm51dDrjGh9--Yw0lzK-wGylCSYhGBOB1r4-vnnnHsocLds48kxY-kZfgFRN5Hds4UQlouEAp3Notvch24U13zyaajXZZ20sFkFM9p6JkjwhBH5TaaQ",
    description: "Custom metallic epoxy floor featuring sweeping veins of bronze, copper, and active pearl dust over a dark backing. The highly reflective surface elevates the open-plan architecture and custom internal skylights.",
    area: "450 sqm",
    year: "2024",
    specDetails: {
      baseColor: "Obsidian Bronze Metallic",
      finishLevel: "Dynamic High-Reflection Gloss"
    }
  },
  {
    id: "p5",
    title: "Al Quoz Logistics & Distribution Hub",
    location: "Al Quoz Industrial Area, Dubai",
    type: FlooringType.INDUSTRIAL,
    serviceId: "industrial",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyHIWu7Nu2UWBOHm723PuqHgqQEOIO5DMp6_EQXVIf3kOKzsKf10Cp7kO13GcyuAUTR0f4gbZbkJu2is-VrRDrEFZhZvqlT6ebRXm6tGuF13DNws7u8QMZEQNygvNwV9AzPHBXbxzoxyTgAveJAFynA9wiCox_AUlrki4Y6DxJ_kZf7_FI1Y5Cfmp9vxKXmWWXSCqYK9DdLbCjGV9shNqqi7qak6hO2j29H6bsq3UX8lihbNmNZaQ5LphAsLK0PiDzZ7ItuTbLf9c",
    description: "High-load chemical-resistant polyurethane flooring installed over a large consolidated shipping sorting warehouse. Tailored to withstand heavy daily automated forklifts and chemical cleaner washdowns.",
    area: "4,500 sqm",
    year: "2024",
    specDetails: {
      baseColor: "High-Visibility Safety Grey",
      finishLevel: "Medium-Grit Anti-Slip Texture"
    }
  }
];

export const TERRAZZO_SHADES: TerrazzoShade[] = [
  {
    id: "shade-1a",
    name: "Crystalline Cream White",
    code: "TS-101A",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGaMha45ZQGrkg6pp-380iDuwH-SRiy3P-Bg2DRNyjX4UWBvITNSghSwET2cnXEun5yfZl4aMYzJuySYFXLJZPD2a1upLeQFNYXrOXpff7dDG7P8R9gxRJ9-C_whyBbFDALyLzO-2XSySaK8I0fX9CDPc7bWqAtohYfXrLcgPOMdKNBMF8gkDHg_lrhi2FcEEvkMsGqQNi2Td8vzg48YEV44U7AnlQhtp9F_dG032zM1pIwo68RPNHaDouI3kRNprItVblQNcSnyI",
    baseColor: "#FAF8F5",
    aggregates: ["Verona White Aggregate", "Carrara Quartz", "Clear Glass"],
    popularFor: "Luxury Villas, Art Galleries, Retail Boutiques",
    tone: "light"
  },
  {
    id: "shade-1b",
    name: "Mediterranean Coral Sand",
    code: "TS-102B",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBm_IaKltN9Tp9WeBq_0w0FLRHRxitI9PfKffkw24FdcPissJhjyNnnpuOKL4eys0bzhb8vgnW2cb7fD2bdlm4mRIDYmpnKi4StixdPDc1P8IfAm6WApYUfIcMn559Zxws2UASKMpeAbX283tavcM2UuogibY-vaapRa5n4VdeJ6Ooki41e92asEiKYRhkgeTsQe60mroDhUmvVL634CVIcQzhN3et-2-24C7C5y9Rh45hCNzcKQTgwPriyP5q1jH2YM5sJ2SvwnSk",
    baseColor: "#EAE2D5",
    aggregates: ["Terracotta Chips", "Warm Sienna Aggregate", "Basalt Dust"],
    popularFor: "Hotel Atriums, Residential Courtyards, Spas",
    tone: "medium"
  },
  {
    id: "shade-1c",
    name: "Basalt Monolithic Charcoal",
    code: "TS-103C",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFxpIwKkZeTcg_AX_yKnSN4aWJmBrKKILR1eJA1Q7fpRAD-Aet2fklOU35sFlJ3UwpCyGxi4bx9erMCnXepj5-k-pb8vJOScUyx5ubhlcPneJrbI2nxZ0JcVyRVSlAm6CMls2TBtwIhmPIZzR-fbrCoMPoVlT7urcXe9-jf3bnCGUmhHUylKiPd2jC1J12JEHuwkbrGTv0P1u6-2LB1xAnOdEwdPa5P2qKJKNro_CikrwAPX0TEDJ-hJwGdafxxFjZ2olOD6LYFcY",
    baseColor: "#2F3135",
    aggregates: ["Nero Marquina", "Snowflake White Aggregate", "Granite Sparkle"],
    popularFor: "Modern Offices, Penthouses, Cocktail Lounges",
    tone: "dark"
  }
];

export const GENERAL_SPECS = {
  yearsInBusiness: "5 Years",
  projectsCompleted: "450+ Major Projects across UAE",
  headquarters: "Al Quoz Industrial 3, Dubai, UAE",
  certifications: ["Dubai Municipality Quality Compliant"],
  averageTurnaround: "6-12 working days depending on surface area",
};
