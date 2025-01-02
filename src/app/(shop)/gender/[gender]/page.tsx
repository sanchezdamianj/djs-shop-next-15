

export const revalidate = 60;


import { getPaginationProductsWithImages } from "@/actions/products/product-pagination";
import { ProductGrid } from "@/components/products/product-grid/ProductGrid";
import { Pagination } from "@/components/ui/pagination/Pagination";
import { Title } from "@/components/ui/title/Title";
import { Gender } from "@prisma/client";
import { redirect } from "next/navigation";
// import { notFound } from "next/navigation";

// const seedProducts = initialData.products;

interface Props {
  params: {
    gender: string;
  },
  searchParams: {
    page?: string;
  }
}

export default async function GenderPage({params, searchParams}: Props) {

  const a = params;
  const  gender  = a.gender;

  // const { gender } =  params;

  const searchParamsTemp =  searchParams;

  const page = searchParamsTemp.page ? parseInt(searchParamsTemp.page) : 1;

  const data = await getPaginationProductsWithImages({
    page,
    gender: gender as Gender
  });

  const { products, totalPages } = data ?? { products: [], totalPages: 0 };
  
  if (products?.length === 0) {
    redirect(`/gender/${gender}`);
  }
  // const products = seedProducts.filter(
  //   product => product.gender === gender
  // );

  const labels: Record<string, string> = {
    men: 'Men',
    women: 'Women',
    kid: 'Kids',
    unisex: 'Unisex'
  }

  // const gender = id === 'men' ? 'Men' : id === 'women' ? 'Women' : 'Kids'

  return (
    <>
      <Title 
        title={`${gender}`}
        subTitle={`Choose your favorite product's ${labels[gender]}`}
        className="mb-2"
      />
      
      <ProductGrid products={products} />
      <Pagination 
        totalPages={ totalPages }
      />
    </>
  );
}

