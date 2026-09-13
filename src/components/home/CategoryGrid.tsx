import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import styles from "./CategoryGrid.module.css";

const categoryImages: Record<string, string> = {
  wohnzimmer: "Wohnzimmer",
  schlafzimmer: "Schlafzimmer",
  "matratzen-lattenroste": "Matratzen",
  esszimmer: "Esszimmer",
  "buero-arbeiten": "Buero",
  kueche: "Kueche",
  "flur-garderobe": "Flur",
  kinderzimmer: "Kinderzimmer",
  "outdoor-garten": "Garten",
  beleuchtung: "Beleuchtung",
};

export default function CategoryGrid() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Unsere Kategorien</h2>
      <div className={styles.grid}>
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/kategorie/${category.slug}`}
            className={styles.tile}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={`/images/hauptkategorie/${categoryImages[category.id]}.webp`}
                alt={category.name}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1440px) 25vw, 20vw"
                className={styles.image}
              />
            </div>
            <span className={styles.name}>{category.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
