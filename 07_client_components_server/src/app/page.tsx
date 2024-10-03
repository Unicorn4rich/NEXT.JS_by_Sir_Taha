import Image from "next/image"; // jo cheezen node_modules se import ho kar engi wo opar ki line mein rakhenge 
//                                node_modules wali cheezo ka pata is tarhn chalta hai ke unke starting mein (@) ya (./) nahi.

import H1 from "@/components/h1" // (@) or (./) waly imports ki lines neechy likha karenge.



// export default function Home() {
//   return (
//     <>

//      /* <H1 name={"Shoaib"} middle={"kuch bhi"} last={"Ahmed"} />           /*  arguments ko ham Props kehty hain. */

//     </>
//   );
// }



export default function Home2() {
  return (
    <>
     <H1 data={{                       // Object ki shakal mein aik hi Data ya props ley kar jaa rha hai apne andar multiple values ko rakh kar.
                firstName: "Shoaib",
                middleName: "Shobi",
                lastName: "Ahmed"
               }} 
             
      />

    </>
  );
}





/*

NOTES

(components)

ka aik hi folder bana kar usme alag alag content ki file extension bana lenge or unhi file extensions ko import export kar 
ke use karenge apne page.tsx ke folder mein jo (app) ke andar hai.


(component) => repeat

components kin kin cheezo ke liye bnaya jaye pehla to repeat hony wali cheezon ke liye bnaya jata hai jese button ya koi bhi
aisi cheez jo repeat hogi uska ham component bana lenge.


(components) => Section + Side

section ka bhi compoent bana sakty hain jisme footer ya navbar bana sakty hain or (side) matlab ke aisi cheez jo website mein
constant rhegi baqi ke pages change honge but wo side fix rhegi usko bhi ham component mein rakh sakty hain.


(components) => (UI) => User-Interface

user-interface ka bhi ham component bana sakty hain matlab ke wo page jisme koi bhi value change hoti hai uska bhi component banega.


name={"Shoaib"} => props

arguments ko ham props kehty hain or argument ki value component ke parameter mein object ki key value pairs ki shakal mein
jati hai or wo jo props naam ka parameter hota hai wo aik object hai. or ham single parameter (props) mein mutilple argument dey sakty hain.


<H1  data={ {firstName: "Shoaib"} }  />

isme data aik object hai or uske andar bhi ham aik object bana kar argument pass kar rhy hain. (data={}) apni curly braces mein ye batata
hai ke ham Typescript ko likh rhy hain or {firstName: "Shoaib"} aki curly braces ye btati hain ke ham aik object likhne jaa rhy hain
simple (data) ki curly braces bata rhi hain ke ham HTML mein Typescript ka kaam likh rhy hain or uske andar (firstName) ki curly
braces ye bata rhi hain ke ham aik object likh rhy hain. 


React Hooks

hooks components ko rerender karne ke liye bnaye gaye hain. matlab ye ke hmara jo HTML hai wo hmare Web-page par bar bar 
load hota hai misal ke tor pe aik website hai jisme ham kuch bhi change karty hain ya kisi button pe bhi click karenge to 
us pori website ka HTML code dubara se Browser par load hoga us changing ko apne andar exicute karne ke liye jis se hmari
website ka user Experince khrab hoga. iski jagah agr ham React ke Hooks ko use karte hain website bnany ke liye to us website
mein agr koi bhi changing hogi ya button click hoga etc.. to us changing ki wajah se hmari pori website ka Code dubara se load
nahi hoga sirf wahi component load hoga jisme wo changing hui hogi.   


Components => Server-Side Rendering + Client-Side Rendering

component 2 tarhn ka hota hai aik (Server-Side Component) or dosra (Client-Side Component) matlab aik hi component ko ham
ya to server-side (Node.js) terminal par use kar sakty hain ya client-side Web-browser par use kar sakty hain. or ye 2no
tariqo se ham khud define karty hain ke component ko server par kab chlana hai or Web-page pe kab chlana hai.
server-side hook nahi chlata or client-side hook chlata hai.


Server-Side => Node.Js 

Server-Side rendering mein hmara component pehly Node.js yani backend pe complete hoga uske bad Screen par dikhega. or 
server-side component wo hota hai jiske opar "use client" nahi likha hota.


Clinet-Side => Local host 300 Browser console

client-side rendering mein hmara component direct Browser ko diyya jata hai sirf Boiler plate bana kar or baqi ki cheezen
currunt time pe hi Browser pe create hoo rhi hoti hain. or client-side component wo hota hai jiske opar "use client" likha hota hai.
agr hamne react ke Hooks use karna hai to "use client" lazim likhna parega.

Server Component Node.js ke andar backend pe apna sara HTML ka Code completly create kar ke phir usy Browser pe bhej deta hai or Browser usy load kar ke Web-page Screen pe chala deta hai.
Client Component Web-page pe aona thora sa HTML Boiler plate ley jaa kar usi ka Browser use kar ke apna sara HTML ka code run time pe complete karta hai browser ke andar or usy Screen pe load kar ke chala deta hai.

in sab cheezo ka matlab ye hai ke console Browsers hmare pass 2 hoty hain or Screen aik. 
server-side component yani Node.js ke andar backend pe jo HTML create hoga wo bhi end the end Screen par hi jaa kar show hoga
or client-side component bhi apna HTML Browser ke console mein jaa kar create karta hai uske bad screen par show krwa deta hai. 
























*/