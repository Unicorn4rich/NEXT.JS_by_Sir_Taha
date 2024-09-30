"use client"

import { useState } from "react"

function Component01(){

//    console.log("Taha Ahmed"); // Ye Server-Side component print ho kar sirf VS console mein dikhega Browser console mein nahi.

    let [value, setvalue] = useState("Component-01") // HOOK => ye ban gaya hmara use client speacial type ka veriable

    console.log("Alex bhatti")

    return(
        <div>I am {value}😁</div>
    )
}

export default Component01


/* NOTES


Client-Side Rendering + Server-Side Rendering  =>  Components

ye 2no cheezen components se related hain or ye component 2 tariqo se chalta hai (Client-Component) ke tor pe bhi or 
(Server-Component) ke tor pe bhi chalta hai. 

(Client-Side) 

ye Hooks ko samjhta hai or isko ham frontend ki designing ke liye use karte hain or iske pass hai Browser ka (console) jo
Client-Component ko samjhta hai 


(Server-Side)

ye Hooks ko nahi samjhta or isko ham Backend mein use karty hain or iske pass hai Visual Studio ke andar (Node.js) ka (console) jo
Server-Component ko samjhta hai

"use client"

Server-Side component print ho kar sirf VS Code ke console mein apni value ko dikhaega Browser console mein nahi isliye ham
("use client") ko likh kar is component ko Client-Side pe bhi chala sakty hain matlab ye Browser console pe bhi chalega or
iske andar chahen to (Hooks) bhi use kar sakty hain


let [value, setvalue] = useState("Component-01")

(useState) badly mein aik array return karta hai jiske andar 1st pe aik veriable hai jiska naam (value) ya kuch bhi likh sakty hain or ye currunt value
hoti hai or dosri value (setvalue) aik function hota hai jo useState("Component-01") ke andar ki value ko change krwa sakta hai










*/
