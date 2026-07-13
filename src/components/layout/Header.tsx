import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/images/technova-logo-primary.png"
            alt="TechNova – Technology for Life"
            width={240}
            height={54}
            priority
            className={styles.logo}
          />
        </Link>

        <div className={styles.navPlaceholder}>
          {/* Hauptnavigation folgt in Schritt 6.3 */}
        </div>

        <div className={styles.actionsPlaceholder}>
          {/* Suche, Warenkorb, Account folgen in 6.4 / 6.6 */}
        </div>
      </div>
    </header>
  );
}