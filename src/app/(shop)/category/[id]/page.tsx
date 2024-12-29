import { ProductGrid } from "@/components/products/product-grid/ProductGrid";
import { Title } from "@/components/ui/title/Title";
import { Category } from "@/interfaces/product.interface";
import { initialData } from "@/seed/seed";
// import { notFound } from "next/navigation";

const seedProducts = initialData.products;

interface Props {
  params: {
    id: Category;
  }
}

export default async function CategoryPage({params}: Props) {

  const { id } = await params;

  const products = seedProducts.filter(
    product => product.gender === id
  );

  const labels: Record<Category, string> = {
    men: 'Men',
    women: 'Women',
    kid: 'Kids',
    unisex: 'Unisex'
  }

  const gender = id === 'men' ? 'Men' : id === 'women' ? 'Women' : 'Kids'


  return (
    <>
      <Title 
        title={gender}
        subTitle={`Choose your favorite product's ${labels[id]}`}
        className="mb-2"
      />
      
      <ProductGrid products={products} />
    </>
  );
}

