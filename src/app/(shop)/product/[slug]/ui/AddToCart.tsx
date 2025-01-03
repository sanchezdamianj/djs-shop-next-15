'use client'

import { QuantitySelector } from '@/components/product/quantity-selector/QuantitySelector'
import { SizeSelector } from '@/components/product/size-selector/SizeSelector'
import { CartProduct, Product, Size } from '@/interfaces/product.interface'
import { useCartStore } from '@/store/cart/cart-store'
import { useState } from 'react'



interface Props {
    product: Product
}


export const AddToCart = ({ product }: Props) => {

    const [ size, setSize ] = useState<Size | undefined>();
    const [ quantity, setQuantity ] = useState( 1 );
    const [posted, setPosted] = useState(false)

    const { addProductToCart } = useCartStore();

    const addToCart = () => {
        setPosted(true);
        if( !size ) return;
        const cartProduct: CartProduct = { 
            id: product.id,
            slug: product.slug,
            title: product.title,
            price: product.price,
            quantity,
            size,
            image: product.images[0]
        };
        addProductToCart( cartProduct );
        setPosted(false);
        setQuantity(1);
        setSize(undefined);
    }

  return ( 
  <>
  {
    posted && !size && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">Please select a size</span>
        </div>
    )
  }
    
    <SizeSelector
        selectedSize={ size }
        availableSizes={ product.sizes }
        onSizeChanged={ setSize }
    />

    <QuantitySelector 
        quantity={ quantity }
        onQuantityChanged={ setQuantity }
    />

    {/* Button */ }
    <button 
        className="btn-primary my-5"
        onClick={ addToCart }
    >
        Add to cart
    </button>
  </>
  )
}
