
import prisma from "../lib/prisma";
import { initialData } from './seed';



async function main(  ) {
    
    //avoid deleting data in production
    if(process.env.NODE_ENV === 'production') {
        return;
    }
    
    // delete data from database
    await prisma.product.deleteMany();
    await prisma.productImage.deleteMany();
    await prisma.category.deleteMany();
  
    // insert categories into database
    const { categories } = initialData;
    const categoriesData = categories.map((name) => ({ name }));

    await prisma.category.createMany({ data: categoriesData });

    const categoriesDB = await prisma.category.findMany();
    
    const categoriesMap = categoriesDB.reduce((map, category) => {
        map[category.name.toLowerCase()] = category.id;

        return map;
    }, {} as Record<string, string>);


    // insert products into database
    const { products } = initialData;
    products.forEach(async(product) => {
       const  { type, images, ...rest } = product;
       const dbProduct = await prisma.product.create({
           data: {
               ...rest,
               categoryId: categoriesMap[type.toLowerCase()],
               },
           });
        
        const imagesData = images.map(image => ({ url: image, productId: dbProduct.id }));
        await prisma.productImage.createMany({ 
                data: imagesData 
        });
    })
       
}

(()=>{
    main();
})();