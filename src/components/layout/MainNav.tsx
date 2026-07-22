"use client";

import { useState } from "react";
import Link from "next/link";
import { categories } from "@/data/categories";
import styles from "./MainNav.module.css";

export default function MainNav() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const active = categories.find((c) => c.id === activeCategory)  

  return (
    <nav
      className={styles.nav}
      onMouseLeave={() => setActiveCategory(null)}
    >
      <ul className={styles.list}>
        {categories.map((category) => (
          <li
            key={category.id}
            className={styles.item}
            onMouseEnter={() => setActiveCategory(category.id)}
          >
            <Link href={`/kategorie/${category.slug}`} className={styles.link}>
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