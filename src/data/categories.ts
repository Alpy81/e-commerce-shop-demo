import { Category } from "@/types/category";

export const categories: Category[] = [
  {
    id: "notebooks",
    name: "Notebooks",
    slug: "notebooks",
    subcategories: [
      { id: "gaming-notebooks", name: "Gaming-Notebooks", slug: "gaming-notebooks" },
      { id: "business-notebooks", name: "Business-Notebooks", slug: "business-notebooks" },
      { id: "ultrabooks", name: "Ultrabooks", slug: "ultrabooks" },
      { id: "chromebooks", name: "Chromebooks", slug: "chromebooks" },
      { id: "convertibles", name: "2-in-1 Convertibles", slug: "convertibles" },
    ],
  },
  {
    id: "smartphones",
    name: "Smartphones",
    slug: "smartphones",
    subcategories: [
      { id: "iphones", name: "iPhones", slug: "iphones" },
      { id: "android-smartphones", name: "Android-Smartphones", slug: "android-smartphones" },
      { id: "budget-smartphones", name: "Budget-Smartphones", slug: "budget-smartphones" },
    ],
  },
  {
    id: "tablets",
    name: "Tablets",
    slug: "tablets",
    subcategories: [
      { id: "ipads", name: "iPads", slug: "ipads" },
      { id: "android-tablets", name: "Android-Tablets", slug: "android-tablets" },
      { id: "windows-tablets", name: "Windows-Tablets", slug: "windows-tablets" },
    ],
  },
  {
    id: "wearables",
    name: "Smartwatches & Wearables",
    slug: "wearables",
    subcategories: [
      { id: "smartwatches", name: "Smartwatches", slug: "smartwatches" },
      { id: "fitness-tracker", name: "Fitness-Tracker", slug: "fitness-tracker" },
    ],
  },
  {
    id: "pc-systeme",
    name: "PC-Systeme",
    slug: "pc-systeme",
    subcategories: [
      { id: "gaming-pcs", name: "Gaming-PCs", slug: "gaming-pcs" },
      { id: "office-pcs", name: "Office-PCs", slug: "office-pcs" },
      { id: "business-pcs", name: "Business-PCs", slug: "business-pcs" },
      { id: "mini-pcs", name: "Mini-PCs", slug: "mini-pcs" },
    ],
  },
  {
    id: "workstations",
    name: "Workstations",
    slug: "workstations",
    subcategories: [
      { id: "cad-workstations", name: "CAD/3D-Workstations", slug: "cad-workstations" },
      { id: "render-workstations", name: "Render-Workstations", slug: "render-workstations" },
    ],
  },
  {
    id: "monitore-tv",
    name: "Monitore & TV",
    slug: "monitore-tv",
    subcategories: [
      { id: "gaming-monitore", name: "Gaming-Monitore", slug: "gaming-monitore" },
      { id: "office-monitore", name: "Office-Monitore", slug: "office-monitore" },
      { id: "curved-monitore", name: "Curved-Monitore", slug: "curved-monitore" },
      { id: "fernseher", name: "Fernseher", slug: "fernseher" },
    ],
  },
  {
    id: "drucker",
    name: "Drucker & Scanner",
    slug: "drucker",
    subcategories: [
      { id: "tintenstrahldrucker", name: "Tintenstrahldrucker", slug: "tintenstrahldrucker" },
      { id: "laserdrucker", name: "Laserdrucker", slug: "laserdrucker" },
      { id: "3d-drucker", name: "3D-Drucker", slug: "3d-drucker" },
      { id: "scanner", name: "Scanner", slug: "scanner" },
    ],
  },
  {
    id: "zubehoer",
    name: "Zubehör & Kabel",
    slug: "zubehoer",
    subcategories: [
      { id: "tastaturen-maeuse", name: "Tastaturen & Mäuse", slug: "tastaturen-maeuse" },
      { id: "kabel-adapter", name: "Kabel & Adapter", slug: "kabel-adapter" },
      { id: "taschen-huellen", name: "Taschen & Hüllen", slug: "taschen-huellen" },
      { id: "ladegeraete", name: "Ladegeräte & Powerbanks", slug: "ladegeraete" },
    ],
  },
  {
    id: "netzwerk",
    name: "Netzwerktechnik",
    slug: "netzwerk",
    subcategories: [
      { id: "router", name: "Router", slug: "router" },
      { id: "repeater", name: "WLAN-Repeater", slug: "repeater" },
      { id: "switches", name: "Switches", slug: "switches" },
      { id: "nas", name: "NAS-Systeme", slug: "nas" },
    ],
  },
];