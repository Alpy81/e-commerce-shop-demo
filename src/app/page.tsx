import Hero from "@/components/home/Hero";
import CategoryGrid from "@/components/home/CategoryGrid";
import CollectionShowcase from "@/components/home/CollectionShowcase";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import TrustBar from "@/components/home/TrustBar";

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoryGrid />
      <CollectionShowcase />
      <FeaturedProducts />
      <TrustBar />
    </main>
  );
}
