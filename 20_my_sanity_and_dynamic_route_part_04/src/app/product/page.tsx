import React from 'react'
import Link from "next/link"
import {data} from "@/constant/data"


// params dynamic Route =>

function ProductPage() {

  return (      // iske andar hamne map laga kar array ka sara data print krwa diyya.
    <div className="h-screen flex flex-col gap-[10px] items-center justify-center text-[32px] font-semibold">
    
       {data.map((item, index) => {
        return(
            <Link href={`/product/${index}`}>
                <h1 key={index}>{item.name}</h1>
            </Link>
        )
       })}

    </div>
  )
}

export default ProductPage


// <----------------------------------------------------END--------------------------------------------------->
// query parameter dynamic route


function ProductPage() {

  return (      // iske andar hamne map laga kar array ka sara data print krwa diyya.
    <div className="h-screen flex flex-col gap-[10px] items-center justify-center text-[32px] font-semibold">
    
       {data.map((item, index) => {
        return(
            <Link href={`/product/proId?name=${item.name}&gender=${item.gender}`}>
                <h1 key={index}>{item.name}</h1>
            </Link>
        )
       })}

    </div>
  )
}

export default ProductPage
