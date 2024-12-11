"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import BookCards from '../components/Book-cards'
import { placeOrders } from '@/services/order'

function OrderPage() {



     const btnFunc = async (bookid: any) =>{                                   // order submit karne wali api
      const token = localStorage.getItem("accessToken")       // regiter api mein jo user ke token ko store kara tha wo nikal rhy hain.
      const clientName = localStorage.getItem("clientName")    // regiter api mein jo user ke naam ko store kara tha wo nikal rhy hain.

      if(!token && !clientName){               // ye condition isliye lgai ke agr client ke pass token or uska username na ho to usy ye meeage show krwa do.
        alert("Missing token or alient name");
        return;
      }

     const data = await placeOrders(token, bookid, clientName);   // api se sara data aa kar yahn set hoga varibale mein.

     if (data !== "Failed to place order"){
        alert("Order placed successfully");
     }
     else{
      alert(data);
     }

     }





  return (
    <>
        <div className='flex justify-between items-center text-white mb-[20px] '>
        <h1 className=" text-center text-4xl font-bold mb-8 ">Confirm Your Order</h1>

        <div>
            <Button>Vew Your Orders</Button>
        </div>
        </div>


        <BookCards href={"!#"} func={btnFunc} />

    </>
  )
}

export default OrderPage