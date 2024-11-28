import { get_Api } from '@/services/getAPI';
import React from 'react'

async function page({params}: {params: Promise<{id: string}>}) {

    const {id} = await params;

    const response = await get_Api();

    const data = response.filter((obj: any)=>{
        return obj.customerName == id
    })

    console.log(data)




  return (
    <>
    
       {data.map((item: any, index: any)=>{ return(
        <div key={index} className="ml-[400px] mt-[100px]">
        <h1>customerName: {item.customerName}</h1>
        <h1>id: {item.id}</h1>
        <h1>bookId: {item.bookId}</h1>
        <h1>createdBy: {item.createdBy}</h1>
        <h1>quantity: {item.quantity}</h1>
        <h1>timestamp: {item.timestamp}</h1>
        <br/>
        </div>
       )})}

    </>
  )
}

export default page



