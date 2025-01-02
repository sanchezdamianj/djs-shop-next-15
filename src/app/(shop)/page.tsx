export const revalidate = 60;


import { getPaginationProductsWithImages } from "@/actions/products/product-pagination";
import { ProductGrid } from "@/components/products/product-grid/ProductGrid";
import { Pagination } from "@/components/ui/pagination/Pagination";
import { Title } from "@/components/ui/title/Title";
import { redirect } from "next/navigation";

// const products = initialData.products;

interface Props {
  searchParams: Promise<{
    page?: string;
    take?: string;
  }>
}

export default async function HomePage({ searchParams  }: Props) { 

  const resolvedSearchParams = await searchParams;

  const page = resolvedSearchParams.page ? parseInt(resolvedSearchParams.page) : 1;
  const take = resolvedSearchParams.take ? parseInt(resolvedSearchParams.take) : 12;

  const data = await getPaginationProductsWithImages({ page, take });
  

  if (!data?.products?.length) {
    redirect('/');
  }

  const { products,  totalPages } = data;

return (
    <>
      <Title title="Shop" subTitle="All products" className="mb-1" />
      {/* <ProductGrid products={products} /> */}
      <ProductGrid products={products} />
      <Pagination 
        totalPages={ totalPages }
      />
    </>
  );
}


  