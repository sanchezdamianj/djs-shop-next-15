'use server';

import prisma from "@/lib/prisma";


export const getStockBySlug = async (slug: string): Promise<number | null> => {
   
   try{
       const product = await prisma.product.findUnique({
            where: {
                 slug
            },
            select: {
                inStock: true
            }
       })
   
       if(!product) {
           return null;
       }
   
       return product.inStock;

   } catch(error) {
       throw new Error(`Product not found ${error}`)
   }
}   