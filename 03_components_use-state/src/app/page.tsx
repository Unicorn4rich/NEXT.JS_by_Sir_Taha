import Addition from "@/components/addition";

import Image from "next/image";

function Home() {

// Typescript ka code 
 let myName = "Shoaib"

// Ye Jo HTML return krwa rha hai isy ham JSX return krwana kehty hain. 
  return <> 
           <h1>I am Home Page</h1>

           {/* <h1>My Name is {myName} </h1> */} 

           {/* <h1>{2 + 3}</h1> */}

           <Addition/>   
         </>
}

export default Home

/* NOTES 

src => app + components

(app) ka folder hamen bana hua milta hai or (components) ka folder hamen bnana parta hai or isme ham bohut sary components
bana kar rakhty hain or react se related cheezen bhi ham components ke folder mein rakhty hain. or (app) ka folder Routing 
ke liye hota hai matlab ke alag alag (pages) hoty hain jese page.tsx hai wesy iske andar jitna zada pages bnana chahen 
bana sakty hain or unke liye utne zada rout bhi bnana parenge.

Component
Typescript
return <> HTML </>

return ke tag ke andar to ham HTML ka code likhty hain or agr hamen HTML ke beech mein Typscript ka code likhna hai to usy bhi 
ham return ke opar or component ke andar likh sakty hain curly braces {} laga kar. or component ke bahar bhi likh sakty hain
opar ki tarf Typescript ka code isliye likhty hain taky veriable, array ya kuch or bana kar usy Ham HTML mein laa kar use kar saken 


<h1>My Name is {myName} </h1>

Component ke andar HTML ke andar ham Typescript ko use kar rhy hain curly braces {} laga ke or isme ham pora ka pora 
typescript bhi use kar sakty hain. <h1> {2 + 3} </h1> same is HTML tag mein typscript ki functionality ko use kar rhy hain.


Click + f12

main file mein import huy component ke self-closing tag ke jese hi f12 button press karenge to wo hamen us component ki
origenal file pe ley jaega jahn usy create kiyya gaya hoga.




































*/
