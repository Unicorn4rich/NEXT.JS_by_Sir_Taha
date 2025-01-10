"use server"

import { client } from "@/sanity/lib/client";


async function UploadImageToSanity(imageUrl: any){

    const res = await fetch(imageUrl);
    const blob = await res.blob()

   const asset = await client.assets.upload('image', blob);
   return asset;
}



export async function fetchCardsData(){

    const res = await fetch("https://fakestoreapi.com/products");
    const products =  await res.json(); 

    for (const product of products){

       const imageAsset = await UploadImageToSanity(product.image);

        const SanitySend_Object = {
            _id: `product-${product.id}`,
            _type: "product",
            name: product.title,
            price: product.price,
            discountPercentage: product.discountPercentage || 0,
            tags: product.category ? [product.category] : [],
            image: {
                _type: 'image',
                asset: {
                  _type: 'reference',
                  _ref: imageAsset._id,  // imageAsset variable mein jourl ko convert kiyya hai normal wo ab isme pass kar rhy hain.
                },
              },

              description: product.description,
              rating: product.rating?.rate || 0,
              ratingCount: product.rating?.count || 0,
        }


        await client.createOrReplace(SanitySend_Object)

    }
}