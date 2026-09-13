import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import styles from "./FeaturedProducts.module.css";

const featuredIds = [
  "sofa-oslo",
  "esstisch-milano",
  "bett-alva",
  "buerostuhl-ergo",
  "deckenleuchte-halo",
  "loungeset-ibiza",
  "kuechenbuffet-porto",
  "garderobe-tromso",
];

export default function FeaturedProducts() {
  const featured = products.filter((p) => featuredIds.includes(p.id));

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Ausgewählte Produkte</h2>
      <div className={styles.grid}>
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
