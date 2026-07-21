"use client";

import { useState } from "react";
import Link from "next/link";
import { categories } from "@/data/categories";
import styles from "./MainNav.module.css";

export default function MainNav() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {categories.map((category) => (
          <li
            key={category.id}
            className={styles.item}
            onMouseEnter={() => setActiveCategory(category.id)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <Link href={`/kategorie/${category.slug}`} className={styles.link}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}