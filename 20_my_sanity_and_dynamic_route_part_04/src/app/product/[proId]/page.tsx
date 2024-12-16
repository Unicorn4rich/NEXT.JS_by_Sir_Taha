import React from 'react'
import {data} from "@/constant/data"


// params dynamic Route =>

async function DynamicPage({params}: {params: Promise<{proId: number}>}) {     // ye params url mein pass hua huwa index number get kar rha hai jiski wajah se dynamic route chala.

  const {proId} = await params;   // params ko hamne aik varibale mein save krwa diyya or is params ke andar (proId) bhi aya tha jisko ham destructre kar ke save karenge ({proId}).

  const myData = data[proId];   // product ke cards jis data se chal rhy hain hamne us data ko yahn bhi bula liya or kaha params se jo bhi index [proId] number url se aa rha hai usy is data mein se dhondo or us object ko niakl kar aik new vaiable mein save karo jiska wo index hai. 

  const {name, gender} = myData // yahn par hamne dubara se destructre kiyya myData object mein jo values aa rhi hain unko chahen to ham isy destrcure na kar ke is tarhn hi use kar sakty hain (myData.name) or (myData.gender) 

  return (
    <div className="h-screen flex flex-col items-center justify-center text-[32px] font-semibold">
    
        <h1>{name}</h1>
        
        <h1>{gender}</h1>

    </div>
  )
}

export default DynamicPage


// <----------------------------------------------------END--------------------------------------------------->
// query parameter dynamic route


async function DynamicPage({searchParams}: any) {      // ye params bhi aik qisam ka promise hi hai. 

  const {name, gender} = await searchParams;

  return (
    <div className="h-screen flex flex-col items-center justify-center text-[32px] font-semibold">
    
    {name}
    <br/>
    {gender}

    </div>
  )
}

export default DynamicPage