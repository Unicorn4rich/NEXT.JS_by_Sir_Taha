"use client"
import {useState} from "react"


export default function Home() {

  // let myColor = true;  => Simple veriable

     let [myColor, setmyColor] = useState<boolean>(true)  // ye (boolean) data-type ki wajah se sirf (true) ya (false) ki values lega. 

  return (
     <>
       <h1>I am Home Page</h1>

       {/* <h1 className="bg-green-500" >{myColor ? "Green" : "Red" }</h1> */}


       {/* <h1 className={myColor ? "bg-green-500" : "bg-red-500"} > {myColor ? "Green" : "Red" } </h1> */}


      {myColor ? <h1 className={myColor ? "bg-green-500" : "bg-red-500"} > {myColor ? "Green" : "Red" } </h1>
       :<p className={myColor ? "bg-green-500" : "bg-red-500"} > {myColor ? "Green" : "Red" } </p>}
   

       <button onClick={()=>{setmyColor(!myColor)}} >Click Me</button>  

     </>
  );
}



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

















*/