import { get_Api } from '@/services/getAPI';
import React from 'react'
import { FaBook } from "react-icons/fa";




async function page({params}: {params: Promise<{id: string}>}) {

    const {id} = await params;

    const response = await get_Api();

    const data = response.filter((obj: any)=>{
        return obj.customerName == id
    })

    console.log(data)




  return (
    <>
    
       {/* {data.map((item: any, index: any)=>{ return(

        <div key={index} className="ml-[400px] mt-[100px] bg-black text-white w-[600px] p-[20px] ">
        <h1>CustomerName: {item.customerName}</h1>
        <h1>id: {item.id}</h1>
        <h1>bookId: {item.bookId}</h1>
        <h1>createdBy: {item.createdBy}</h1>
        <h1>quantity: {item.quantity}</h1>
        <h1>timestamp: {item.timestamp}</h1>
        <br/>
        </div>

       )})} */}





       <div className='main'>

       {data.map((item: any, index: any)=>{ return(

       <section className='dynamic_sec'>
        <div className='book'><FaBook size={200} color='white'/></div>

        <div className='text_div'>
          <h1>Customer Name: <span className='span2'>{item.customerName}</span></h1>
          <h3>ID: <span className='span2'>{item.id}</span></h3>
          <h3>Quantity: <span className='span2'>{item.quantity}</span></h3>
          <h3>BookID: <span className='span2'>{item.bookId}</span></h3>
          <h3>Timestamp: <span className='span2'>{item.timestamp}</span></h3>
          <p>CreatedBy: {item.createdBy}</p>
        </div>
       </section>
     )})}

       </div>




    </>
  )
}

export default page



