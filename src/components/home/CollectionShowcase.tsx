import Image from "next/image";
import Link from "next/link";
import { collections } from "@/data/collections";
import styles from "./CollectionShowcase.module.css";

export default function CollectionShowcase() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Unsere Kollektionen</h2>
      <div className={styles.grid}>
        {collections.map((collection, index) => (
          <Link
            key={collection.id}
            href={`/kollektion/${collection.slug}`}
            className={styles.card}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={`/images/kollektionen/${collection.slug}.webp`}
                alt={collection.name}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1440px) 33vw, 20vw"
                className={styles.image}
                priority={index === 0}
              />
              <div className={styles.overlay} />
              <div className={styles.cardContent}>
                <h3 className={styles.name}>{collection.name}</h3>
                <p className={styles.description}>{collection.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
