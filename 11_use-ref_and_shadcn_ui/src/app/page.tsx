"use client"
import React, {useRef} from "react"


export default function Home() {

  // let num = useRef<number>(0)

  let btn_ref = useRef(null)  // useRef bana kar aik veriable mein store krwa diyya or isko ham DOM manipulation ke use karenge.

  return (
    <>
      <h1>I Am Home Page</h1>

     {/* <h1>{num.current}</h1>  {/*useRef ki value direct uske naam se nahi milti balke uske sath (.current) laga kar access karty hain. */}

     {/* <button onClick={()=>{ num.current = num.current + 1; console.log(num.current) }}>Click</button> */}


    <h1 ref={btn_ref}>I am Shoaib</h1>      {/* H1 ke tag mein (btn_ref) likhny se (useRef) conect ho gaya (h1) se. */}

     <button onClick={()=>{btn_ref.current!.background = "blue"; console.log(btn_ref.current!.background)}} >Click</button>

    </>
  );
}



/* NOTES


useRef Hook

ham isko use kar sakty hain aik aisi value ko store karne ke liye jo change ho saky or ye hmare component ko rerender nahi
karegi jab value change ho jaye.


<button onClick={()=>{ num.current = num.current + 1; console.log(num.current) }}>Click</button>

button ko click karne se arrow function ke andar (num.current) ke veriable ko 1 value dey kar update kar dega lekin ye
component ko refresh nahi karega jiski wajah se screen pe hamen purani value show hogi lekin backend pe is veriable
ki values chalti rhengi browser console par.


btn_ref.current!.background = "blue"

btn_ref. ke andar current. value ke andar background laga do blue color lekin ye hamen screen pe nahi terminal pe sho ho rha hoga.









*/