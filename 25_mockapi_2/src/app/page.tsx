"use client"

import { client } from "@/sanity/lib/client";
import { fetchCardsData } from "@/services/api";
import Image from "next/image";
import { useEffect, useState } from "react";


interface IProduct {
  name: string;
  price: number;
  description: string;
  ratingCount: number;
  image: string;
  rating: number;
}


export default  function Home() {

  const [cards, setCards] = useState<IProduct[]>([])


  useEffect(()=> {

     const fetchData = async () => {

      const response: IProduct[] = await client.fetch(`  
        *[_type == "product"][]{name, price, description, ratingCount, 'image': image.asset->url, rating,}`)
        
        setCards(response)  // jo response aega usy useState mein set kardo

    

        if(!response || response.length === 0){ // ye condition isliye lgai ke agr respose na aye ya ya uski length khatm ho to ye data fetch karne ke liye request be saky
          await fetchData(); // api ka data sanity pe fetch karne ke liye
    
          const response: IProduct[] = await client.fetch(`
            *[_type == "product"][]{name, price, description, ratingCount, 'image': image.asset->url, rating,}`)
    
            setCards(response)  // jo response aega usy useState mein set kardo
           
        }
     }

     fetchData() // function call.

  },[cards])
 

  return (
   <>
     <section className="grid grid-cols-4 gap-4 gap-y-[25px] px-[20px]">

    {cards.map((item: IProduct, index: number)=> {
      return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-white hover:shadow-xl transition-shadow duration-300" key={index}>
        <Image
          src={item.image}
          alt={item.name}
          width={100}
          height={100}
          className="w-full h-60 object-cover"
        />
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2 text-gray-800 truncate">
            {item.name}
          </h2>
          <p className="text-gray-600 text-sm mb-4 line-clamp-4">
            {item.description}
          </p>
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold text-green-500">
              ${item.price.toFixed(2)}
            </span>
            <div className="flex items-center space-x-1">
              <span className="text-yellow-500">★ {item.rating.toFixed(1)}</span>
              <span className="text-gray-500 text-sm">({item.ratingCount} reviews)</span>
            </div>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
            View Details
          </button>
        </div>
      </div>
      )
    })}

     </section>
   </>
  );
}



/* NOTES


1- sanity project create ✅
2- create sanity dev. token ✅
3- connect sanity with next.js ✅
4- set token .env.local ✅
	//src/sanity/lib/client.ts ---> useCdn: false, 
					add token property
5- copy/paste provided schema in product.ts ✅
6- import product.ts into index.ts ✅
*7- npm run dev ✅
8- see JSON res. of card Data of provided API ✅ -> ("https://fakestoreapi.com/products")
9- make services folder in src✅
10- make api.ts file✅




"use server"

import { client } from "@/sanity/lib/client";


async function uploadImageToSanity(imageUrl: any){
  const response = await fetch(imageUrl)
  const blob = await response.blob()
  
  const asset = await client.assets.upload('image', blob);
  return asset; //asset reference
}



export async function fetchData(){
  const response = await fetch("https://fakestoreapi.com/products")
  const products = await response.json()

  for (const product of  products){

    const imageAsset = await uploadImageToSanity(product.image)

    const sanityProduct = {
      _id: `product-${product.id}`,
      _type: 'product',
      name: product.title,
      price: product.price,
      discountPercentage: product.discountPercentage || 0,
      tags: product.category ? [product.category] : [],
      
      image: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: imageAsset._id,
        },
      },

      description: product.description,
      rating: product.rating?.rate || 0,
      ratingCount: product.rating?.count || 0,

    }

    await client.createOrReplace(sanityProduct)
  }
}




*/