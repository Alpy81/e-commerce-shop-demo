"use client";

import Link from "next/link";
import { useWishlist } from "@/hooks/useWishList";
import styles from "./CartIcon.module.css";

export default function WishlistIcon() {
  const { totalItems } = useWishlist();

  return (
    <Link href="/merkzettel" className={styles.button} aria-label="Merkzettel">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 21s-7-4.5-9.5-9C1 8.5 2.5 5 6 5c2 0 3.5 1 4 2 0.5-1 2-2 4-2 3.5 0 5 3.5 3.5 7-2.5 4.5-9.5 9-9.5 9z" />
      </svg>
      {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
    </Link>
  );
}
