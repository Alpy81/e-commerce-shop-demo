import Image from "next/image";
import Link from "next/link";
import MainNav from "./MainNav";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/images/raumwerk-logo-white-transparent-v3.png"
            alt="Raumwerk – Möbel & Interior Design"
            width={560}
            height={186}
            quality={100}
            priority
            className={styles.logo}
          />
        </Link>

        <MainNav />

        <div className={styles.actionsPlaceholder}>
          {/* Suche, Warenkorb, Account folgen in 6.4 / 6.6 */}
        </div>
      </div>
    </header>
  );
}
