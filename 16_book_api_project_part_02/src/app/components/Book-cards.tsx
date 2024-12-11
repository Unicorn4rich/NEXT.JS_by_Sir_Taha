"use client"

import { Card } from '@/components/ui/card'
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import { Button } from '@/components/ui/button'
import { fetchBook } from '@/services/api'
import  Link from 'next/link'



function BookCards({href, func}: any) {

    const [books, setBooks] = useState([])

    useEffect(()=> {                                     // ye component sirf aik dafa chalega wo bhi tab jab first time ye page load hoga.
        const fetchData = async () =>{
          const books = await fetchBook();
          setBooks(books)                        // fetch ke bad jo bhi data aye usy useState ke variable mein save kar dena.
        }
        
        fetchData()
    },[])
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

                        <Link href={href}>
                        <Button onClick={()=> {func(book.id)}}  // jab bhi order button pe click hoga to ye function chalega.
                        className='bg-blue-600 hover:bg-blue-700 text-white'>Place an Order</Button>
                        </Link> 

                    </div>
                </div>

            </Card>

        )})}

     </div>

   </>
  )
}

export default BookCards