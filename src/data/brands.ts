import { Brand } from "@/types/brand";

export const brands: Brand[] = [
  // Geräte-Hersteller
  { id: "apple", name: "Apple", slug: "apple", categoryIds: ["notebooks", "smartphones", "tablets", "wearables", "monitore-tv"] },
  { id: "samsung", name: "Samsung", slug: "samsung", categoryIds: ["smartphones", "tablets", "wearables", "monitore-tv"] },
  { id: "hp", name: "HP", slug: "hp", categoryIds: ["notebooks", "pc-systeme", "workstations", "drucker"] },
  { id: "dell", name: "Dell", slug: "dell", categoryIds: ["notebooks", "pc-systeme", "workstations", "monitore-tv"] },
  { id: "lenovo", name: "Lenovo", slug: "lenovo", categoryIds: ["notebooks", "pc-systeme", "tablets"] },
  { id: "acer", name: "Acer", slug: "acer", categoryIds: ["notebooks", "pc-systeme", "monitore-tv"] },
  { id: "asus", name: "ASUS", slug: "asus", categoryIds: ["notebooks", "pc-systeme", "workstations", "monitore-tv", "netzwerk"] },
  { id: "msi", name: "MSI", slug: "msi", categoryIds: ["notebooks", "pc-systeme", "monitore-tv"] },
  { id: "microsoft", name: "Microsoft", slug: "microsoft", categoryIds: ["notebooks", "tablets"] },
  { id: "lg", name: "LG", slug: "lg", categoryIds: ["monitore-tv"] },
  { id: "gigabyte", name: "Gigabyte", slug: "gigabyte", categoryIds: ["pc-systeme", "workstations", "monitore-tv"] },

  // Zubehör/Peripherie
  { id: "logitech", name: "Logitech", slug: "logitech", categoryIds: ["zubehoer"] },
  { id: "razer", name: "Razer", slug: "razer", categoryIds: ["zubehoer", "notebooks"] },
  { id: "corsair", name: "Corsair", slug: "corsair", categoryIds: ["zubehoer", "pc-systeme"] },

  // Drucker
  { id: "canon", name: "Canon", slug: "canon", categoryIds: ["drucker"] },
  { id: "epson", name: "Epson", slug: "epson", categoryIds: ["drucker"] },
  { id: "brother", name: "Brother", slug: "brother", categoryIds: ["drucker"] },

  // Netzwerktechnik
  { id: "tp-link", name: "TP-Link", slug: "tp-link", categoryIds: ["netzwerk"] },
  { id: "netgear", name: "Netgear", slug: "netgear", categoryIds: ["netzwerk"] },
];