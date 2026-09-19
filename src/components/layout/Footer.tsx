"use client";

import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import styles from "./Footer.module.css";

const footerCategories = categories.slice(0, 6);

const tickerItems = [
  "Bleib inspiriert",
  "Neue Kollektionen",
  "Exklusive Angebote",
  "Handverlesenes Design",
  "Einzigartige Modelle",
  "Hochqualitative Verarbeitung",
];

const socialLinks = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Pinterest",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M9.5 17c1-3 1.5-5 1.5-6.5a2.2 2.2 0 0 1 4.3-.6c.3 1.2-.4 3.1-1.9 3.1-1 0-1.6-.7-1.4-1.6" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M14 9h2V6h-2c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14V9z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.newsletterBanner}>
        <div className={styles.ticker} aria-hidden="true">
          <div className={styles.tickerTrack}>
            {Array(6)
              .fill(tickerItems)
              .flat()
              .map((item, index) => (
                <span key={index} className={styles.tickerItem}>
                  {item}
                </span>
              ))}
          </div>
        </div>

        <div className={styles.newsletterInner}>
          <h2 className={styles.newsletterHeadline}>Newsletter abonnieren</h2>
          <p className={styles.newsletterSubtext}>
            Neue Kollektionen, Einrichtungsideen und exklusive Angebote – direkt
            in Ihrem Postfach.
          </p>
          <form
            className={styles.newsletterForm}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Deine E-Mail-Adresse"
              className={styles.newsletterInput}
              aria-label="E-Mail-Adresse für Newsletter"
            />
            <button type="submit" className={styles.newsletterButton}>
              Anmelden
            </button>
          </form>
        </div>
      </div>

      <div className={styles.inner}>
        <div className={styles.brandColumn}>
          <Image
            src="/images/raumwerk-logo-dark-transparent-v5.png"
            alt="Raumwerk – Möbel & Interior Design"
            width={330}
            height={43}
            className={styles.footerLogo}
          />
          <p className={styles.tagline}>Wohnen, das Charakter zeigt.</p>
          <p className={styles.brandText}>
            Hochwertige, designorientierte Möbel für dein Zuhause – zeitlos
            gestaltet, sorgfältig ausgewählt.
          </p>
          <div className={styles.socialRow}>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className={styles.socialIcon}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Kategorien</h3>
          <ul className={styles.linkList}>
            {footerCategories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/kategorie/${category.slug}`}
                  className={styles.link}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Service</h3>
          <ul className={styles.linkList}>
            <li>
              <Link href="/versand" className={styles.link}>
                Versand & Lieferung
              </Link>
            </li>
            <li>
              <Link href="/rueckgabe" className={styles.link}>
                Rückgabe & Umtausch
              </Link>
            </li>
            <li>
              <Link href="/zahlungsarten" className={styles.link}>
                Zahlungsarten
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className={styles.link}>
                Kontakt
              </Link>
            </li>
            <li>
              <Link href="/faq" className={styles.link}>
                Häufige Fragen
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Unternehmen</h3>
          <ul className={styles.linkList}>
            <li>
              <Link href="/ueber-uns" className={styles.link}>
                Über uns
              </Link>
            </li>
            <li>
              <Link href="/nachhaltigkeit" className={styles.link}>
                Nachhaltigkeit
              </Link>
            </li>
            <li>
              <Link href="/karriere" className={styles.link}>
                Karriere
              </Link>
            </li>
            <li>
              <Link href="/presse" className={styles.link}>
                Presse
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomBarTop}>
          <p className={styles.disclaimer}>
            Dies ist ein Demonstrationsprojekt zu Portfolio-Zwecken. Kein echter
            Onlineshop, keine reale Verkaufsabsicht.
          </p>
        </div>
        <div className={styles.bottomBarBottom}>
          <p className={styles.copyright}>
            © 2026 Raumwerk. Alle Rechte vorbehalten.
          </p>
          <div className={styles.legalLinks}>
            <Link href="/impressum" className={styles.legalLink}>
              Impressum
            </Link>
            <Link href="/datenschutz" className={styles.legalLink}>
              Datenschutz
            </Link>
            <Link href="/agb" className={styles.legalLink}>
              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
