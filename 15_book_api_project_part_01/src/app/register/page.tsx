"use client"

import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { UserRound } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { registerClient } from '@/services/auth';
// import { redirect } from 'next/dist/server/api-utils';
import { redirect } from 'next/navigation';


function RegiterdPage() {

// react hooks    
   const [name, setName] = useState("")      // input se aya name yahn aa kar save hoga.
   const [email, setEmail] = useState("");   // email se aai value yahn aa kar save hogi.


// typscript file se chalne wala function   
   const btnFunc = async () =>{             // ye function (auth.ts) ki file mein data bhejta hai or wahi pe chalta hai ham yahn isy bas call krwaty hain.
    const response = await registerClient(name, email)  // isme jo paramater diyye hain wo useState ki values hain.
    // console.log(response);

    
    if(response !== "Client already exixsts with this email" && response !== "Failed to register client" ){ // api se jo response aya hai wo agr in dono error mein se na ho to usy aik varible mein store krwa do
        const token = response;                         // is varible mein token aa kar save ho gaya.

        localStorage.setItem("accessToken", token);     // yahn par token ko hamne localStorage mein store krwa taky ham is data alag alag pages mein get kar ke use kar saken or ye brwoser mein save hota hai or browser khud isy yad rakhta hai.
       // console.log(localStorage.getItem("accessToken"))  // token ko web brwoser comnsole mein check kar rhy hain ke token genrate ho rha hai ya nahi.
        localStorage.setItem("clientName", name);      // or isme ham user ka name bhi brwoser ke andar store krwa rhy hain.

        alert("Successfully registered")

    } 
    else{
        alert(response); // or agr opar waly 2 errors mein se koi bhi error ata hai to yahn par uske response ko dikha do.
    }

   }


// html code yahn se start   
  return (
    <div className='text-white flex flex-col gap-6 '>
    
    <h1 className='text-center text-4xl font-bold mb-[20px]'>Create and Account</h1>


    <div className='flex gap-4 m-auto' >

    <UserRound size={30} />
    <Input className='w-[350px] bg-slate-600 ' placeholder='Enter your name'
     onChange={(e)=> setName(e.target.value)}  // jab jab koi word inpur mein aega tab tab us value ko nikal kar useState mein set kardi jaegi.
     value={name}                              // or useState mein set ki gai value yahn laa kar dubara input ke andar dikhai jaegi.
    /> 

    </div>


    <div className='flex gap-4 m-auto' >
    <Mail size={30} />
    <Input className='w-[350px] bg-slate-600 ' placeholder='Enter your email'
     onChange={(e)=> setEmail(e.target.value)}
     value={email}
    />
    </div>


    <Button className='py-5 px-10 text-[20px] font-base m-auto'
     onClick={btnFunc}
    >Registerd</Button>


    </div>
  )
}

export default RegiterdPage