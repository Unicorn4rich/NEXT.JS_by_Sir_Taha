"use client"

import { useState } from "react";  // importing for useState

function Addition(){

    // let num: any = 0; old veriable method

//                 update    
//        2      9 => again             1
   let [myValue, setMyValue] = useState(0)    // new speacial veriable method

    return(
        <>
{/*            3                                                                                                         */}
        <h1>{myValue}</h1>
 
{/*                4      5       6          8            7                                                              */}
        <button onClick={ ()=>{ setMyValue(myValue = myValue + 1) } }> Add</button>
        </>
    )
};

export default Addition // exporting in main file (page.tsx)




/* NOTES 


let [myValue, setMyValue] = useState(0)

ye aik speacial type ka veriable hai ye aik array return karta hai or array ke andar 2 cheezen laa kar deta hai pehli (myValue) 
iski khud ki currunt value jo iske andar moujod hai or dosri (setMyValue) ye value jo update krwaegi pehli wali value ko or
useState(0) ye aik hook kehlata hai jiske andar error aa rha hoga or wo error isliye ata hai kiyun ke isko import krwana prta 
hai react se iske error par click kar ke first waly quick option ko import krwany ke liye okay kar denge.


useState(0) => ki return values ke naam ham khud se set kar sakty hain jo currunt value ka naam likhenge same usi value ka
nam dosri value mein likh kar us se pehly (set) likh denge


<button onClick={   ()=>{ setMyValue(myValue = myValue + 1) }}   > Add</button>

button par click karne se ()=>{} arrow function chalega or jese hi arrow function chalega uske andar setMyValue() method 
chalega or ye method (myValue) veriable mein + 1 ka incriment krwa ke dubara usi (myValue) veriable mein update krwa dega. 


useState(0)

useState se jab ham value change karwaty hain to wo hmare pore component ko rerender krwa deta hai matlab dubara se 
component ko chala deta hai jese hi aik value ko add karenge to wo dubara se pore component ko chala dega us value ki wajah 
se isi tarhn jab jab value update hogi tab tab ye component dubara chalega. rerender isliye kiyya jata hai component ko taky
useState(1) updated value ko web-page pe dikhaya jaa saky warna iski purani value hamen show hoti rehti or ye jo updated
value ye sirf component ke refresh hony se mil rhi hai pora ka pora web-Page refresh nahi ho rha.


*/