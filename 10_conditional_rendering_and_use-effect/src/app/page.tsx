"use client"
import {useState} from "react"


export default function Home() {

  // let myColor = true;  => Simple veriable

     let [myColor, setmyColor] = useState<boolean>(true)  // ye (boolean) data-type ki wajah se sirf (true) ya (false) ki values lega. 
     let [Value, setValue] = useState<string>("") //   words input ke liye
     let [MyName, setMyName] = useState<string>("") // Name in put

  return (
     <>
       <h1>I am Home Page</h1>

       <h1 className="bg-green-500" >{myColor ? "Green" : "Red" }</h1>



       <h1 className={myColor ? "bg-green-500" : "bg-red-500"} > {myColor ? "Green" : "Red" } </h1>



      {myColor ? <h1 className={myColor ? "bg-green-500" : "bg-red-500"} > {myColor ? "Green" : "Red" } </h1>
       :<p className={myColor ? "bg-green-500" : "bg-red-500"} > {myColor ? "Green" : "Red" } </p>}
   


   {myColor ? <h1 className={MyName ? "bg-green-500" : "bg-red-500"} > 
    {MyName == "shoaib" ? "Name is Correct" : "Name is Invalid" } </h1>

       :<p className={myColor ? "bg-green-500" : "bg-red-500"} > {myColor ? "Green" : "Red" } </p>}



       <button onClick={()=>{setmyColor(!myColor)}} >Click Me</button>  


       <input type="text" onChange={ (e)=>{ setMyName(e.target.value) }} />
       <h1>{Value}</h1>


     </>  
  );
}


// <------------------------------------------------END---------------------------------------------------->
// useEfect Hook 
// is Hook mein 2 parameter pass kar sakty hain or dosra wala optional hai,

"use client"
import React, { useEffect, useState } from 'react'  // (useEffect ko chlany ke liye is line ko import karna lazim hai)


function Home2() {


  let [Value, setValue] = useState<number>(0)  // 3 numbar waly useEffect ka hai.

  let [MyName, setMyName] = useState<string>("")  // ye shoaib name ko get kar rha hai.


// Ye (useEffect) component jab bhi rerender hoga tab tab chalega.

   // (1) No Dependence passes: => Har re-render(refresh) hony par chalega. 
   useEffect(()=>{  // ye component sirf pehli pehli dafa hi render hoga uske bad jab screen refresh karenge to render hoga warna khud se nahi hoga.
    console.log("I am No dependency useEfect 😁 huihui");
   })


 
// Ye (useEffect) component ke sirf aik hi bar rerender hony pe chalega phir kabhi nahi chalega.

   // (2) An empty array:
   useEffect(()=>{  // ye zindagi mein aik hi dafa chalega jab component render hoga uske bad kabhi nahi chalega. 
    console.log("I will run only one time in a life on initial render.")
    }, []) // second parameter empty array.
// ye wala (useState) bhi dependent hain lekin kisi pe nahi kiyun ke array empty hai isliye ye dubara nahi chal paega kabhi.    



// Ye (useEffect) sirf tab chalega jab iske array ke andar wali value rerender hogi baqi iska component se koi taluq nahi wo rerender ho bhijaye to ye nahi chalega.

   // (3) I am dependent on array element: 
   useEffect(()=>{
    console.log("I am dependent on array element")
   }, [Value] )  // array ke andar aik aisa element dena hai jo jab jab apni value change kary tab tab ye (useEffect) chalta rhega.
//                  iske andar hamne useState ki value dey di ab ye (useEffect) dependent ho gaya is value ka. 
//  ye wala (useState) component ko render karne se nahi chal rha balke jab tak iske array ki value nahi chalegi tab tak ye nahi chalega.



  return (
    <>
      <h1>I am Home Page2</h1>

      <button onClick={ ()=>{setValue(Value = Value + 1) }}> Increase</button> 

       <button onClick={ ()=>{ setMyName(MyName = "shoaib") }}> Shoaib Btn</button>   {/*Button pe jab click karenge to useState ko (shoaib) ki value mil jaegi. */}

       <h1>{MyName}</h1>

    </>
  )
}

export default Home2


/* NOTES

(C)=> Conditional (R)=> Rendering

(JSX) ke andar (if else) ki condition kaam nahi karti iski jagah ham (Ternery) oprater Use karte hain.
lekin agr (if else) ko use karna chahen to JSX ke (return) ke opar use kar sakty hain lekin iske andar use nahi kar sakty.


False values

(1) false  =>  ye value print nahi hogi.
(2) null   =>  ye value print nahi hogi.
(3) undefined => ye value print nahi hogi.
(4)  0     =>  ye value print nahi hogi.
(5) -0     =>  ye value print nahi hogi.
(6) NaN    =>  ye value print nahi hogi.
(7) ""     =>  ye value print nahi hogi.

Y sari (false) ki values hain inke ilawa jo bhi values hoti hain wo (truth) ki hoti hain.


{myColor ? "Green" : "Red" }

myColor ka veriable ki value true ho to (Green) print ho or agr false ho to (Red) print ho.


let myColor = true;
<h1 className={myColor ? "bg-green-500" : "bg-red-500"} > {myColor ? "Green" : "Red" } </h1>

myColor veriable ki value true hogi to (Green) print hoga or (className={}) ke andar bhi tailwind CSS ko ternery oprater 
mein use kar rhy hain agr (myColor) ki value false hogi to (h1) tag ke text ka background (Red) kar dega or agr (true) hui to (Green)
kar dega.


onClick={()=>{setmyColor(!myColor)}

button par jese hi click ho ye arrow function chal jaega or iski body mein rakha code bhi chal jaega jiske andar setmyColor()
function rakha hua hai jo ke (useState) ki values ko update karta hai or iske andar (!myColor) ka veriable rakha hua hai or iske
starting mein (!) not ka sign laga kar ham ye keh rhy hain ke jab bhi button pe click ho to iski value agr (true) ho to (flase) kar do
or agr (false) ho to (true) kar do.


{ myColor ? <h1 className={myColor ? "bg-green-500" : "bg-red-500"} > {myColor ? "Green" : "Red" } </h1>
       :<p className={myColor ? "bg-green-500" : "bg-red-500"} > {myColor ? "Green" : "Red" } </p> }

myColor veriable ki value (true) hogi to (h1) ka tag print hoga or uske andar jo jo cheezen rakhi hui hain wo sab bhi print hongi
or agr iski value (false) hui to (p) ka tag print hogaor uski values.


<input type="text" onChange={ (e)=>{ console.log(e.target.value) }} />

jab bhi input ke andar aik aik word likhenge to ye (onChange) ka Event chalta rhega or isme ye apni (e) ki muktiple propertys mein se (target) ki
property ko get kar ke laega jab bhi isme koi word likhenge or ye target mein khud ka element dhond kar laa kar deta hai or agr 
(target.value) bhi likh denge te ye is input element ke andar jo jo word put ho rha hoga usy dikhata jaega.


<input type="text" onChange={ (e)=>{ setValue(e.target.value) }} />

input box mein ham jab jab aik aik latter likhenge to (onChange) ka event chalega or (e) ki bohut sari propertys mein se
(e.target.value) apne input element ke andar ki value ko nikale or setValue() function ke zariye (useState) mein set kardy
or useState ki currunt value ko aik (h1) tag ke andar show krwata jaega kiyun ke component bar bar refresh ho rha hai 
(useState) ki wajah se.  


<h1 className={MyName ? "bg-green-500" : "bg-red-500"} > 
    {MyName == "shoaib" ? "Name is Correct" : "Name is Invalid" } </h1>

MyName ki value agr true hogi to (bg-green-500) color apply ho jaega (Name is Correct) pe or agr MyName ki value false hui
to (bg-red-500) apply ho jaega (Name is Invalid) ke text pe.


useEfect Hook

Jab bhi Component render hoga (useEfect) tab chal jaega or ye (useState) ki tarhn khud component ko render nahi krwata har new value pe.
ye sirf tab chalta hai jab component refresh karte hain.

*/