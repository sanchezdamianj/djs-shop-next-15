'use client'

import { Product } from "@/interfaces/product.interface"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
interface Props {
    product: Product
}
export const ProductGridItem = ({product}: Props) => {

  const [ displayImage, setDisplayImage ] = useState(product.images[0]);
  return (
    <div className="rounded-md overflow-hidden fadein">
      <Link href={`/product/${product.slug}`}>
        <Image 
            src={`/products/${displayImage}`}
            alt={product.title}
            className="w-full object-cover rounded"
            width={500}
            height={500}
            onMouseEnter={() => setDisplayImage(product.images[1])}
            onMouseLeave={() => setDisplayImage(product.images[0])}
            priority
        />
      </Link>

      <div className="p-4 flex flex-col">
          <Link 
            href={`/product/${product.slug}`}
            className="hover:text-blue-600"
          >
            <h3 className="text-sm font-semibold">{product.title}</h3>
          </Link>
        
         <p className="text-lg font-bold">${product.price}</p>
        </div>
    </div>
  )
}
