import Image from "next/image";
import Link from "next/link";
import MainNav from "./MainNav";
import SearchBar from "./SearchBar";
import MobileNav from "./MobileNav";
import CartIcon from "./CartIcon";
import WishlistIcon from "./WishlistIcon";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
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

        <div className={styles.searchSlot}>
          <SearchBar />
        </div>

        <div className={styles.iconsGroup}>
          <Link
            href="/konto"
            className={styles.accountLink}
            aria-label="Mein Konto"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.5-7 8-7s8 3 8 7" />
            </svg>
          </Link>
          <WishlistIcon />
          <CartIcon />
        </div>

        <MobileNav />
      </div>

      <div className={styles.bottomRow}>
        <div className={styles.bottomRowInner}>
          <div className={styles.navSection}>
            <MainNav />
          </div>
          <div className={styles.authLinks}>
            <Link href="/anmelden" className={styles.authLink}>
              Anmelden
            </Link>
            <span className={styles.authDivider}>/</span>
            <Link href="/registrieren" className={styles.authLink}>
              Registrieren
            </Link>
            <Link href="/ueber-uns" className={styles.authLink}>
              Über uns
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
