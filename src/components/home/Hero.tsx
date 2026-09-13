import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/hauptkategorie/hero-image.webp"
        alt="Modernes, stilvoll eingerichtetes Wohnzimmer"
        fill
        priority
        quality={90}
        className={styles.image}
        sizes="100vw"
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p className={styles.eyebrow}>Raumwerk Kollektion 2026</p>
        <h1 className={styles.headline}>Wohnen, das Charakter zeigt</h1>
        <p className={styles.subtext}>
          Hochwertige Möbel für jeden Raum – zeitlos designt, für dein Zuhause
          gemacht.
        </p>
        <Link href="/kategorie/wohnzimmer" className={styles.cta}>
          Jetzt entdecken
        </Link>
      </div>
    </section>
  );
}
