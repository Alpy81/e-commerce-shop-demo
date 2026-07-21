import { Collection } from "@/types/brand";

export const collections: Collection[] = [
  {
    id: "nordic-line",
    name: "Nordic Line",
    slug: "nordic-line",
    description: "Skandinavisch, hell und minimalistisch – klare Formen, helle Hölzer.",
    categoryIds: ["wohnzimmer", "schlafzimmer", "esszimmer", "buero-arbeiten"],
  },
  {
    id: "milano-selection",
    name: "Milano Selection",
    slug: "milano-selection",
    description: "Italienisch inspiriert, elegant, hochwertige Materialien.",
    categoryIds: ["wohnzimmer", "esszimmer", "beleuchtung"],
  },
  {
    id: "studio-basics",
    name: "Studio Basics",
    slug: "studio-basics",
    description: "Zeitlos, funktional, ideal für jedes Budget.",
    categoryIds: ["buero-arbeiten", "kinderzimmer", "flur-garderobe", "kueche"],
  },
  {
    id: "heritage-collection",
    name: "Heritage Collection",
    slug: "heritage-collection",
    description: "Klassisch, warme Naturmaterialien, Massivholz.",
    categoryIds: ["wohnzimmer", "schlafzimmer", "esszimmer"],
  },
  {
    id: "urban-loft",
    name: "Urban Loft",
    slug: "urban-loft",
    description: "Industrial-Stil, Kombination aus Metall und Holz.",
    categoryIds: ["wohnzimmer", "buero-arbeiten", "beleuchtung"],
  },
  {
    id: "comfort-plus",
    name: "Comfort+",
    slug: "comfort-plus",
    description: "Fokus auf Wohnkomfort – Sofas, Sessel, Betten.",
    categoryIds: ["wohnzimmer", "schlafzimmer", "matratzen-lattenroste"],
  },
];