import React from 'react'
import Link from "next/link"

function Home() {
  return (
   <>

     <Link href={"/person"}><h1>Go to Person Page</h1></Link>

   </>
  )
}

export default Home



/* NOTES

Server_Component

(1) No "use client"
(2) Server give complete rendered code to browser
(3) server component mein 2 tarhn ki rendering hoti hai 1st static rendering 2nd dynamic rendering 
static ruki hui cheez matlab ke fix. dynamic chalta hui cheez matlab ke har bar change hoti hui cheez
(static) => pre-rendered matlab code aik dafa bana kar rakh liya phir usko hi bar bar dikhaa rha hai 
(dynamic) => rendering on demand matlab jab jab hamen koi new change rendered krwana ho to har bar dubara 
se code ko rendered kar ke dega. 


Client_Component

(1) "use client"
(2) server give initial html rendered code to browser
(2) remaining code will be deliverd to browser in the form of javascript browser completely ready HTML code with the help of DOM.


npm run dev

code likhty huy (HRM) feature new new add ki gai lines of code ko update karta rehta hai screen par.


npm run build

jab hmari website completly tayyar ho jati hai tab ham (npm run build) likh kar apni website ko as a user dekh akty hain ke
usme koi khrab ya error to nahi aega deploy ke bad. (npm run dev) ke douran agr code mein koi changes karenge  to (HRM) feature
un changes ko dikhata rhega lekin jab ham (npm run build) karte hain to hmara jo code hota hai uski aik static copy tayyar karli
jati hai (.next) ke folder mein jiski wajah se agr ham code mein koi changes karenge to build waly code pe koi assar nahi parega
wo wesa ka wesa hi rhega. 

person route

ye jo (app) ke andar person folder ka route bnaya hai ye static route hai.
(static rendering) => alag cheez hai or (static route) => alag cheez hai.
(dynamic rendering) => alag cheez hai pr (dynamic route) => alag cheez hai.
ye dono cheezen hamen build ke opar dikhti hain.


person sttaic route => [id] dynamic route

person ke static route ke andar hamne [id] naam se aik dynamic route bana diyya or broswer pe person ke segment ke bad dosra
kisi bhi naam se segment likhenge to hmara [id] folder wala dynamic page.tsx cghal jaega or apni value dikhaa dega.


npm run build => static route => dynamic route

npm run build se jab hmari pori website build ho rhi hoti hai to isme static route bhi build ho rha hota hai isliye bad mein ham jab
bhi static route ko chlaenge to server ne pehli dafa mein jo static route ko build kara hua tha wahi dikha dega.
lekin dynamic rendering mein aisa nahi hai isme ham jab jab dynamic page chlaenge to tab tab wo pora page dubara se render ho kar
hamen milta hai.  


Terminal =>
○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand

ye dono commands hamen (npm run build) karne ke bad (erminal) mein show hoti hain jisme server khud yahi keh rha hai ke
jab ap (Static) page ko chlaenge to mai apko pehly se render kar ke rakha hua code chala ke dunga lekin agr ap (Dynamic) page
ko chlaenge to mai apko har dafa dubara se apki demand ke mutabic code ko create kar ke chala ke dunga.  




















*/