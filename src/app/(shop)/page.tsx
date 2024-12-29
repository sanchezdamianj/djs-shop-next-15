import { ProductGrid } from "@/components/products/product-grid/ProductGrid";
import { Title } from "@/components/ui/title/Title";
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function Home() {
  return (
    <>
      <Title title="Shop" subTitle="All products" className="mb-1" />
      <ProductGrid products={products} />
    </>
  );
}


  