'use client'

import { QuantitySelector } from "@/components/product/quantity-selector/QuantitySelector";
import { useCartStore } from "@/store/cart/cart-store";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const ProductsInCart = () => {
  const productsInCart = useCartStore( state => state.cart );
  const udpateProductQuantity = useCartStore( state => state.updateProductQuantity );
  const removeProduct = useCartStore( state => state.removeProduct );

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if( !loaded ) return <p>...</p>;

  return (
    <>
    {
        productsInCart.map( product => (

          <div key={`${ product.slug }-${ product.size }`} className="flex mb-5">
            <Image
              src={ `/products/${ product.image}` }
              width={ 100 }
              height={ 100 }
              style={{
                width: '100px',
                height: '100px'
              }}
              alt={ product.title }
              className="mr-5 rounded"
            />

            <div>
              <Link href={`/product/${ product.slug }`} className="hover:text-blue-600 cursor-pointer ">  
                  <p>{ product.title }</p>
              </Link>
              <p>${ product.price }</p>
              <QuantitySelector 
                    quantity={ product.quantity }  
                    onQuantityChanged={ (quantity) => udpateProductQuantity(  product, quantity ) }/>

              <button 
                onClick={ () => removeProduct( product ) }
                type="button"
                className="underline mt-3 hover:text-red-600">
                Remove
              </button>
            </div>

          </div>


        ) )
      }
    </>
    
  )
}
