"use client";

import { useState } from "react";
import { products } from "@/data/products";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [mobileOpen, setMobileOpen] = useState(false);

  const results =
    query.trim().length > 0
      ? products
          .filter((p) =>
            p.name.toLowerCase().includes(query.trim().toLowerCase()),
          )
          .slice(0, 6)
      : [];

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (results.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev <= 0 ? results.length - 1 : prev - 1,
      );
    } else if (e.key === "Escape") {
      setQuery("");
      setHighlightedIndex(-1);
      setMobileOpen(false);
    } else if (e.key === "Enter" && highlightedIndex >= 0) {
      window.location.href = `/produkt/${results[highlightedIndex].slug}`;
    }
  }

  function renderResults() {
    return (
      results.length > 0 && (
        <ul className={styles.resultsList}>
          {results.map((product, index) => (
            <li
              key={product.id}
              className={`${styles.resultItem} ${
                index === highlightedIndex ? styles.resultItemActive : ""
              }`}
            >
              <span className={styles.resultName}>{product.name}</span>
              <span className={styles.resultPrice}>{product.price} €</span>
            </li>
          ))}
        </ul>
      )
    );
  }

  return (
    <>
      {/* Desktop-Suchfeld */}
      <div className={styles.wrapper}>
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setHighlightedIndex(-1);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Wonach suchst du?"
          className={styles.input}
          aria-label="Produktsuche"
        />
        {renderResults()}
      </div>

      {/* Mobiles Such-Icon */}
      <button
        type="button"
        className={styles.mobileIconButton}
        onClick={() => setMobileOpen(true)}
        aria-label="Suche öffnen"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>

      {/* Mobiles Such-Overlay */}
      {mobileOpen && (
        <div className={styles.mobileOverlay}>
          <button
            type="button"
            className={styles.mobileClose}
            onClick={() => setMobileOpen(false)}
            aria-label="Suche schließen"
          >
            ✕
          </button>

          <div className={`${styles.wrapper} ${styles.wrapperMobile}`}>
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setHighlightedIndex(-1);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Wonach suchst du?"
              className={styles.input}
              aria-label="Produktsuche"
              autoFocus
            />
            {renderResults()}
          </div>
        </div>
      )}
    </>
  );
}
