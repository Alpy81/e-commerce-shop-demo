"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { categories } from "@/data/categories";
import styles from "./MainNav.module.css";

export default function MainNav() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setActiveCategory(null);
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const active = categories.find((c) => c.id === activeCategory);

  return (
    <nav className={styles.nav} onMouseLeave={() => setActiveCategory(null)}>
      <ul className={styles.list}>
        {categories.map((category) => (
          <li
            key={category.id}
            className={styles.item}
            onMouseEnter={() => setActiveCategory(category.id)}
            onFocus={() => setActiveCategory(category.id)}
          >
            <Link
              href={`/kategorie/${category.slug}`}
              className={styles.link}
              aria-expanded={activeCategory === category.id}
              aria-haspopup="true"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>

      {active && (
        <div className={styles.megaPanel}>
          <div className={styles.megaPanelInner}>
            <p className={styles.megaPanelTitle}>{active.name}</p>
            <ul className={styles.subList}>
              {active.subcategories.map((sub) => (
                <li key={sub.id}>
                  <Link
                    href={`/kategorie/${active.slug}/${sub.slug}`}
                    className={styles.subLink}
                  >
                    {sub.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
