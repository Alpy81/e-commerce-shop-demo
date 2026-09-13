"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import styles from "./CartIcon.module.css";

export default function CartIcon() {
  const { items, totalItems, totalPrice, removeItem } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <button
        type="button"
        className={styles.button}
        aria-label="Warenkorb öffnen"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 6h15l-1.5 9h-12z" />
          <path d="M6 6L4.5 3H2" />
          <circle cx="9" cy="20" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="17" cy="20" r="1.5" fill="currentColor" stroke="none" />
        </svg>
        {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          {items.length === 0 ? (
            <p className={styles.emptyText}>Dein Warenkorb ist noch leer.</p>
          ) : (
            <>
              <ul className={styles.itemList}>
                {items.map((item) => (
                  <li key={item.productId} className={styles.item}>
                    <div className={styles.itemInfo}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.itemMeta}>
                        {item.quantity} × {item.price} €
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.productId)}
                      className={styles.removeButton}
                      aria-label={`${item.name} entfernen`}
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
              <div className={styles.footer}>
                <span className={styles.total}>Gesamt: {totalPrice} €</span>
                <Link
                  href="/warenkorb"
                  className={styles.checkoutButton}
                  onClick={() => setIsOpen(false)}
                >
                  Zum Warenkorb
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
