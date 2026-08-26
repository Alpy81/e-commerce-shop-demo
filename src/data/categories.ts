import { Category } from "@/types/category";

export const categories: Category[] = [
  {
    id: "wohnzimmer",
    name: "Wohnzimmer",
    slug: "wohnzimmer",
    subcategories: [
      { id: "sofas-couches", name: "Sofas & Couches", slug: "sofas-couches" },
      { id: "sessel", name: "Sessel", slug: "sessel" },
      { id: "couchtische", name: "Couchtische", slug: "couchtische" },
      { id: "tv-moebel", name: "TV-Möbel", slug: "tv-moebel" },
      { id: "wohnwaende", name: "Wohnwände", slug: "wohnwaende" },
      {
        id: "regale-buecherregale",
        name: "Regale & Bücherregale",
        slug: "regale-buecherregale",
      },
      { id: "teppiche", name: "Teppiche", slug: "teppiche" },
    ],
  },
  {
    id: "schlafzimmer",
    name: "Schlafzimmer",
    slug: "schlafzimmer",
    subcategories: [
      { id: "betten", name: "Betten", slug: "betten" },
      {
        id: "kleiderschraenke",
        name: "Kleiderschränke",
        slug: "kleiderschraenke",
      },
      { id: "nachttische", name: "Nachttische", slug: "nachttische" },
      { id: "kommoden", name: "Kommoden", slug: "kommoden" },
      {
        id: "schlafzimmerprogramme",
        name: "Schlafzimmerprogramme",
        slug: "schlafzimmerprogramme",
      },
    ],
  },
  {
    id: "matratzen-lattenroste",
    name: "Matratzen",
    slug: "matratzen-lattenroste",
    subcategories: [
      { id: "matratzen", name: "Matratzen", slug: "matratzen" },
      { id: "lattenroste", name: "Lattenroste", slug: "lattenroste" },
      { id: "topper", name: "Topper", slug: "topper" },
      {
        id: "bettdecken-kissen",
        name: "Bettdecken & Kissen",
        slug: "bettdecken-kissen",
      },
    ],
  },
  {
    id: "esszimmer",
    name: "Esszimmer",
    slug: "esszimmer",
    subcategories: [
      { id: "esstische", name: "Esstische", slug: "esstische" },
      { id: "stuehle-baenke", name: "Stühle & Bänke", slug: "stuehle-baenke" },
      { id: "sideboards", name: "Sideboards", slug: "sideboards" },
      { id: "vitrinen", name: "Vitrinen", slug: "vitrinen" },
    ],
  },
  {
    id: "buero-arbeiten",
    name: "Büro & Arbeiten",
    slug: "buero-arbeiten",
    subcategories: [
      { id: "schreibtische", name: "Schreibtische", slug: "schreibtische" },
      { id: "buerostuehle", name: "Bürostühle", slug: "buerostuehle" },
      { id: "aktenschraenke", name: "Aktenschränke", slug: "aktenschraenke" },
      { id: "regalsysteme", name: "Regalsysteme", slug: "regalsysteme" },
    ],
  },
  {
    id: "kueche",
    name: "Küche",
    slug: "kueche",
    subcategories: [
      { id: "kuechenbuffets", name: "Küchenbuffets", slug: "kuechenbuffets" },
      { id: "kuechenregale", name: "Küchenregale", slug: "kuechenregale" },
      { id: "barhocker", name: "Barhocker", slug: "barhocker" },
    ],
  },
  {
    id: "flur-garderobe",
    name: "Flur & Garderobe",
    slug: "flur-garderobe",
    subcategories: [
      { id: "garderoben", name: "Garderoben", slug: "garderoben" },
      { id: "schuhschraenke", name: "Schuhschränke", slug: "schuhschraenke" },
      { id: "kleinmoebel", name: "Kleinmöbel", slug: "kleinmoebel" },
      { id: "spiegel-flur", name: "Spiegel", slug: "spiegel-flur" },
    ],
  },
  {
    id: "kinderzimmer",
    name: "Kinderzimmer",
    slug: "kinderzimmer",
    subcategories: [
      { id: "kinderbetten", name: "Kinderbetten", slug: "kinderbetten" },
      {
        id: "kinderschraenke",
        name: "Kinderschränke",
        slug: "kinderschraenke",
      },
      {
        id: "kinderschreibtische",
        name: "Kinderschreibtische",
        slug: "kinderschreibtische",
      },
    ],
  },
  {
    id: "outdoor-garten",
    name: "Outdoor & Garten",
    slug: "outdoor-garten",
    subcategories: [
      {
        id: "gartenmoebel-sets",
        name: "Gartenmöbel-Sets",
        slug: "gartenmoebel-sets",
      },
      { id: "loungemoebel", name: "Loungemöbel", slug: "loungemoebel" },
      { id: "sonnenschirme", name: "Sonnenschirme", slug: "sonnenschirme" },
    ],
  },
  {
    id: "beleuchtung",
    name: "Beleuchtung",
    slug: "beleuchtung",
    subcategories: [
      { id: "deckenleuchten", name: "Deckenleuchten", slug: "deckenleuchten" },
      { id: "stehlampen", name: "Stehlampen", slug: "stehlampen" },
      { id: "tischlampen", name: "Tischlampen", slug: "tischlampen" },
    ],
  },
  {
    id: "deko-accessoires",
    name: "Deko & Accessoires",
    slug: "deko-accessoires",
    subcategories: [
      { id: "spiegel-deko", name: "Spiegel", slug: "spiegel-deko" },
      { id: "bilderrahmen", name: "Bilderrahmen", slug: "bilderrahmen" },
      { id: "vasen", name: "Vasen", slug: "vasen" },
      { id: "kissen", name: "Kissen", slug: "kissen" },
    ],
  },
];
