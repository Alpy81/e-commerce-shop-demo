"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { categories } from "@/data/categories";
import MobileNavToggle from "./MobileNavToggle";
import styles from "./MobileNav.module.css";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  function closeMenu() {
    setIsOpen(false);
    setExpandedCategory(null);
  }

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeMenu();
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <MobileNavToggle
        isOpen={isOpen}
        onToggle={() => setIsOpen((prev) => !prev)}
      />

      {isOpen && (
        <>
          <div
            className={styles.overlay}
            onClick={closeMenu}
            aria-hidden="true"
          />
          <div
            className={styles.panel}
            role="dialog"
            aria-modal="true"
            aria-label="Hauptmenü"
          >
            <ul className={styles.list}>
              {categories.map((category) => (
                <li key={category.id} className={styles.item}>
                  <button
                    type="button"
                    className={styles.categoryButton}
                    onClick={() =>
                      setExpandedCategory((prev) =>
                        prev === category.id ? null : category.id,
                      )
                    }
                    aria-expanded={expandedCategory === category.id}
                  >
                    {category.name}
                    <span className={styles.chevron}>
                      {expandedCategory === category.id ? "−" : "+"}
                    </span>
                  </button>

                  {expandedCategory === category.id && (
                    <ul className={styles.subList}>
                      {category.subcategories.map((sub) => (
                        <li key={sub.id}>
                          <Link
                            href={`/kategorie/${category.slug}/${sub.slug}`}
                            className={styles.subLink}
                            onClick={closeMenu}
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}
