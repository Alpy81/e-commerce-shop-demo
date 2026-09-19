import Hero from "@/components/home/Hero";
import CategoryGrid from "@/components/home/CategoryGrid";
import BrandStatement from "@/components/home/BrandStatement";
import CollectionShowcase from "@/components/home/CollectionShowcase";
import FeaturedProducts from "@/components/home/FeaturedProducts";

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoryGrid />
      <BrandStatement />
      <CollectionShowcase />
      <FeaturedProducts />
    </main>
  );
}
