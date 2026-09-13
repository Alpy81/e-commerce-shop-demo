export const productImageMap: Record<string, string> = {
  wohnzimmer: "Wohnzimmer",
  schlafzimmer: "Schlafzimmer",
  esszimmer: "Esszimmer",
  buero: "Buero",
  kueche: "Kueche",
  flur: "Flur",
  kinderzimmer: "Kinderzimmer",
  outdoor: "Garten",
  beleuchtung: "Beleuchtung",
};

export function getProductImagePath(imagePlaceholder: string): string {
  const fileName = productImageMap[imagePlaceholder] ?? "Wohnzimmer";
  return `/images/hauptkategorie/${fileName}.webp`;
}
