"use client";

import { getProductBySlug } from "@/actions/products/get-product-by-slug";
import { getStockBySlug } from "@/actions/products/get-stock-by-slug";
import { titleFont } from "@/config/fonts";

import type { Metadata } from 'next';
import { useEffect, useState } from "react";



interface Props {
      slug: string;
}


 
// type Props = {
//   params: Promise<{ id: string }>
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>
// }
 
export async function generateMetadata(
  { slug }: Props,
//   parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = slug
 
  // fetch data
//   const product = await fetch(`https://.../${id}`).then((res) => res.json())
 const product = await getProductBySlug(id);
 
  // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || []


 
  return {
    title: product?.title || '',
    description: product?.description || '',
    openGraph: {
      title: product?.title || '',
      description: product?.description || '',
      // url completed, first part of url is in .env and then complete the rest, because it must be the production url complete.
    //   images: [`${process.env.NEXT_PUBLIC_URL}/products/${product?.images[0]}`],
    images: [`/products/${product?.images[1]}`],
    },
  }
}

export const StockLabel = ({ slug }: Props) => {
  const [stock, setStock] = useState<number | null>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getStock();
  }, []);

  const getStock = async () => {
    const stock = await getStockBySlug( slug );
    setStock(stock);
    setIsLoading(false);
  };

  return (

    <>
        
        {
          isLoading ?
            <h1 className={` ${titleFont.className} antialiased font-bold text-lg bg-gray-200 animate-pulse`}>
            Stock: ...
            </h1>
            :
        <h1 className={` ${titleFont.className} antialiased font-bold text-lg`}>
        Stock: {stock}
        </h1>

        }
    </>
  );
};
