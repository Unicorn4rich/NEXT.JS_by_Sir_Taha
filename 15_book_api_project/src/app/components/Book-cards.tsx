import { Card } from '@/components/ui/card'
import React from 'react'
import Image from "next/image"
import { Button } from '@/components/ui/button'
import { fetchBook } from '@/services/api'
import  Link from 'next/link'




async function BookCards() {

    const books = await fetchBook();
    // console.log("Data Aa gaya bacho 😂", books);

  return (
   <>

     <div className='grid grid-cols-3 gap-10'>

        {books.map((book: any, index:any)=>{ return( 


            <Card key={index} className='flex gap-6 hover:scale-[1.02] duration-200 overflow-hidden '>

                <Image src={`/book${book.id}.png`} alt="picture" width={100} height={100}></Image>

                <div className="flex flex-col gap-4 text-start relative w-full">
                    <h2 className='text-[24px] font-bold'>{book.name}</h2>
                    <p>{book.type}</p>

                    <p className={book.available ? 'text-green-500' : 'text-red-500' }>
                    {book.available ? 'Available' : "Not Available" }
                    </p>

                    <div className='absolute bottom-0 right-0 p-2 '>
                        <Link href={"/register"}><Button className='bg-blue-600 hover:bg-blue-700 text-white'>Place an Order</Button></Link> 
                    </div>
                </div>

            </Card>

        )})}

     </div>

   </>
  )
}

export default BookCards