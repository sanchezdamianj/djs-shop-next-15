export const revalidate = 604800 // refresh in 7days

import { QuantitySelector } from '@/components/product/quantity-selector/QuantitySelector';
import { SizeSelector } from '@/components/product/size-selector/SizeSelector';
import { ProductMobileSlideshow } from '@/components/product/sldeshow/ProductMobileSlideshow';
import { ProductSlideshow } from '@/components/product/sldeshow/ProductSlideshow';
import { titleFont } from '@/config/fonts';
import { notFound } from 'next/navigation';
// import { initialData } from '@/seed/seed';
import { getProductBySlug } from '@/actions/products/get-product-by-slug';
import { StockLabel } from '@/components/product/stock-label/StockLabel';


interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductSlugPage( { params }: Props ) {

  const { slug } = await params;
  // const product = initialData.products.find( product => product.slug === slug );

  const product = await getProductBySlug( slug );

  if ( !product ) {
    notFound();
  }



  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">

      {/* Slideshow */ }
      <div className="col-span-1 md:col-span-2 ">
        
        {/* Mobile Slideshow */}
        <ProductMobileSlideshow 
          title={ product.title }
          images={ product.images }
          className="block md:hidden"
        />
        
        {/* Desktop Slideshow */}
        <ProductSlideshow 
          title={ product.title }
          images={ product.images }
          className="hidden md:block"
        />

        
      </div>

      {/* Details */ }
      <div className="col-span-1 px-5">

        <StockLabel slug={ product.slug } />
        <h1 className={ ` ${ titleFont.className } antialiased font-bold text-xl` }>
          { product.title }
        </h1>
        <p className="text-lg mb-5">${ product.price }</p>

        <SizeSelector
          selectedSize={ product.sizes[ 1 ] }
          availableSizes={ product.sizes }
        />


        <QuantitySelector 
          quantity={ 2 }
        />


        {/* Button */ }
        <button className="btn-primary my-5">
          Add to cart
        </button>

        {/* Descriptionn */ }
        <h3 className="font-bold text-sm">Description</h3>
        <p className="font-light">
          { product.description }
        </p>

      </div>

    </div>
  );
}