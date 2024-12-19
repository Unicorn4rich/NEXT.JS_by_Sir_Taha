"use client"

import Link from "next/link";
import { useState } from "react";

export default function Home() {


  // const res = await fetch("http://localhost:3000/about", {
  //      method: "PUT",
  // })

  // const data = await res.json()

  // console.log(data);


const [name, setName] = useState("")


  return (
    <div className="h-screen flex flex-col justify-center items-center text-[32px] font-semibold gap-[10px]">
    
       <h1>I am Home Page</h1>
       <input type="text" placeholder="Enter your Name" onChange={(e)=>{setName(e.target.value)}}  className="border-[1px] border-black"/>

       <Link href={`/api/book?name=${name}`}><button className="border-[1px] border-black">Click me</button></Link>

    </div>
  );
}



/* NOTES


Url browser request jese => google.com

userInter face ye hmara browser hota hai jo hamen screen par dikhta hai or jise ham client bhi kehty hain iske andar jab
ham url likh kar koi request bhejete hain to wo request aik get request hoti matlab sirf data laa kar deny wali request jese
hi ye rquest ham browser pe likh kar bhejte hain to ye server par jati hai or agr us request ke mutabiq server par data hota hai
to server hamen response bhejta hai or us response mein wo html ka code bhjeta jese hi wo html ka code hmare pass ata hai to browser
us html ke code ko (userInter face) ki shakal mein convert kar ke hamen dikha deta hai ye sara kaam browser khud karta hai.


Route page.tsx

next.js ke app folder ke andar ham aik route bnaty hain jese about ka uske andar aik page.tsx ki file bana kar uske compoenent mein
koi code likh dety hain phir ham browser pe jaa kar url mein us route ko likh kar jab search karte hain to brwoser hmare next.js ke server
ko get request bhejta hai us route ki ke mujhe do phir hmara server us route ke code ko html mein backend pe hi compile kar ke
browser ko bhej deta hai phir jese hi browser ko wo html milta hai wo uski shakal bana kar hamen screen par dikhaa deta hai or ye sirf 
server side component ke liye hota hai.
Or agr browser jo route ki request bhejta hai wo client compoent hota hai to hmara next.js ka server us client component ko backend pe sirf
boiler plate genrate kar ke dey deta hai or baqi ka javascript mein convert kar ke browser pe bhej deta hai phir browser khud us code ko
html mein compile kar ke screen par dikhaa deta hai.


app => about => route.ts

hamne app ke folder ke andar aik about ka route bana kar usme page.tsx ki file na bana kar apni marzi ki file bana di
(route.ts) or usme kuch code likh diyya jese hi ham (about) ke route ko url se access karenge to hamen route.ts keandar
likha hua code run ho kar kar milega. lekin aik about ke folder mein aik sath (page.tsx) or (route.ts) dono aik sath nahi chal sakty.


Client => brwoser + fetch + thunder client

browser sirf get request kar pata hai fetch or thunder sary request kar paty hain.


API route create best pretice => app => api => about => route.ts

api ka route ham direct nahi bnaty balke ke app ke andar api ke naam se alag folder create karte hain phir route wala
folder usme rakhty hain jese about ka hai. 


http://localhost:3000/api/book

ham aik se ziyada bhi route ke folder bana kar unme route.ts ka data likh sakty hain or unhy acces bhi kar ke dekh sakty hain


Create API

app ke folder ke andar (api) ka folder bnaen uske andar about ya kisi or naam se koi bhi folder bana den phir us folder
ke andar aik route.ts ki file extension banaen or usme functions ke methods bana den (GET, POST, PUT, DELETE) or usnme unke hisab
se data likh den.








*/