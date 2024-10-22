// "use client"
// import React, {useRef} from "react"

import { Button } from "@/components/ui/button"


// export default function Home() {

//   // let num = useRef<number>(0)

//   let btn_ref = useRef(null)  // useRef bana kar aik veriable mein store krwa diyya or isko ham DOM manipulation ke use karenge.
//   let home_ref = useRef(null) 

//   return (
//     <>

//       <h1 ref={home_ref}>I Am Home Page</h1>

// {/* useRef mein value rakh rhy hain */}

//      {/* <h1>{num.current}</h1>  {/*useRef ki value direct uske naam se nahi milti balke uske sath (.current) laga kar access karty hain. */}

//      {/* <button onClick={()=>{ num.current = num.current + 1; console.log(num.current) }}>Click</button> */}


//     <h1 ref={btn_ref}>I am Shoaib</h1>      {/* H1 ke tag mein (btn_ref) likhny se (useRef) conect ho gaya (h1) se. */}

//      {/* <button onClick={()=>{

//             console.log(btn_ref.current!.background);  {/* backgrounf color apply karne se pehly undefined show hoga
//             btn_ref.current!.background = "blue"; 
//             console.log(btn_ref.current!.background)   {/* background color apply karne ke bad color ka naam show hoga broswer console mein

//       }} >Click</button> */}


// {/* useRef se DOM manipulation kar rhy hain. */}

//     <button onClick={()=>{btn_ref.current!.style.color = "red"}} >Click</button>

//     <button onClick={()=>{home_ref.current.style.color = "red"}} >Home</button>

//     </>
//   );
// }


// <----------------------------------------------------END----------------------------------------------------->
// Shadcn Library


function Home2(){

  return(
    <>

       <h1>I am HOme Page2</h1>

       <Button variant={"default"} size={"default"} >Click</Button>
       <Button variant={"shoaibBtn"} size={"icon"} >Click</Button>
       
    </>
  )

}

export default Home2








/* NOTES


useRef Hook

useRef ke andar ham koi value rakhen or usko change bhi kar den tab bhi ye component ko re-render nahi hoga or isko ham 2
cheeze ke liye use kar sakty hain aik value rakhny ke liye dosra DOM manipulation bhi kar saktay hain manipulation karne 
ke liye useRef ke andar (null) likh kar karenge or ye aik time pe sirf aik hi element pe manipulation karega sab pe nahi.


<button onClick={()=>{ num.current = num.current + 1; console.log(num.current) }}>Click</button>

button ko click karne se arrow function ke andar (num.current) ke veriable ko 1 value dey kar update kar dega lekin ye
component ko refresh nahi karega jiski wajah se screen pe hamen purani value show hogi lekin backend pe is veriable
ki values chalti rhengi browser console par.


btn_ref.current!.background = "blue"

btn_ref. ke andar current. value ke andar background laga do blue color lekin ye hamen screen pe nahi terminal pe sho ho rha hoga.


Shadcn/ui 

ye aik library hai jiske pass already bany bnaye component moujod hoty hain jinhe ham copy kar ke apne project mein
use kar sakty hain.

installation => npx shadcn@latest init

1 => New York
2 => Slate
3 => yes

select button components => installtion => npx shadcn@latest add
  
is command se hamen multiple cheezeon ke components milty hain jinhe ham space button ke sath select kar ke install kar 
sakty hain jitni cheezo ko chahen.

Button

install karne ke bad is button ko jahn use karna hai wahn pe jaa kar button ka tag bana denge or quick fix se isko import
bhi krwa lenge.

src\components\ui\button.tsx

(src) folder ke andar (components) ke folder ke andar (ui) folder ke andar (button.tsx) wali file extension ko install kar
ke rakha hai or iske andar muiltiple verients bhi moujood honge button ke jinko ham use kar sakty hain. 

<Button variant={"destructive"} size={"icon"} >Click</Button>

agr hamen buttons ke baqi ke variants ko bhi use karna chahta hain to button ke starting tag mein variant={""} likh ka uske 
control + space button press kar suggestion se baqi ke variants bhi select kar ke use kar sakty hain. iske ilawa ham inka size
bhi dey sakty hain size={""} laga kar phir se suggestion mein jaa kar dekh lenge jo size chahiye ho usy select kar lenge.


variant={"shoaibBtn"} => khud ka button bhi create kar sakty hain.

agr hamen khud ka button bnana hai to button ki file mein jaa kar variants ke sath aik pr variant bana denge kisi bhi naam se
phir uske andar Tailwind ko use karte huy apne tariqe se styling kar sakty hain.





*/