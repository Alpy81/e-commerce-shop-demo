"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/products";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishList";
import { getProductImagePath } from "@/lib/productImages";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { toggleItem, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  return (
    <div className={styles.card}>
      <Link href={`/produkt/${product.slug}`} className={styles.imageLink}>
        <div className={styles.imageWrapper}>
          <Image
            src={getProductImagePath(product.imagePlaceholder)}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1440px) 25vw, 20vw"
            className={styles.image}
          />
        </div>
      </Link>

      <button
        type="button"
        className={`${styles.wishlistButton} ${inWishlist ? styles.wishlistActive : ""}`}
        onClick={() => toggleItem(product.id)}
        aria-label={
          inWishlist ? "Von Merkzettel entfernen" : "Zum Merkzettel hinzufügen"
        }
      >
        <svg
          viewBox="0 0 24 24"
          fill={inWishlist ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 21s-7-4.5-9.5-9C1 8.5 2.5 5 6 5c2 0 3.5 1 4 2 0.5-1 2-2 4-2 3.5 0 5 3.5 3.5 7-2.5 4.5-9.5 9-9.5 9z" />
        </svg>
      </button>

      <div className={styles.info}>
        <Link href={`/produkt/${product.slug}`} className={styles.name}>
          {product.name}
        </Link>
        <p className={styles.description}>{product.shortDescription}</p>
        <div className={styles.priceRow}>
          <span className={styles.price}>{product.price} €</span>
          {product.oldPrice && (
            <span className={styles.oldPrice}>{product.oldPrice} €</span>
          )}
        </div>
        <button
          type="button"
          className={styles.addButton}
          onClick={() =>
            addItem({
              productId: product.id,
              name: product.name,
              price: product.price,
              imagePlaceholder: product.imagePlaceholder,
            })
          }
        >
          In den Warenkorb
        </button>
      </div>
    </div>
  );
}
