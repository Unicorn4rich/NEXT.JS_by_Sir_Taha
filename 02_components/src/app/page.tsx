// check components folder

import Shoaib from "@/components/Shoaib"

function Home(){   // 1st ye Component chalega 
  return <>        
         <h1>I am Web-page</h1> 
         <Shoaib name={"Shoaib Ahmed"} lastName={"Bashir"} /> 
         </>  

};

export default Home   // Exporting


// Component Rules
// function ka naam Pascal case mein hona chahiye.
// function ko export default kiyya jaega.
// function sirf aik single Element hi return karega. 



/* NOTES 
 

npx create-next-app@latest .

is command ke end mein agr ham dot lgaenge to ye hamse new folder bnanay ka nahi kahega or baqi ki darect usi folder mein
sari files download kar lega but wo folder Capital latter mein ya uske beech space nahi hona chahiye warna error aega.

React Components

Ye aik components base library hai iske andar jo kuch bhi hota hai component kehlata hai.

(ts) extension => (tsx) extension

ts extension ki file andar sirf ham typscript ka code likh sakty hain agr isme HTML ka code likhenge to ye usy parh nahi
paegi or error degi is problem ko hall karne ke liye ham tsx => yani Typescript xmal file iske andar ham HTML or Typescript
2no ka code aik sath likh sakty hain.

(B) Browser ye hmara ending point hai jahn hamen apni cheezen nazar ati hain or use se pehly hamen wo cheezen milti hain
(L) Layout ki file se or layout ki file ke andar hmara (page.tsx) chal rha hota hai. simple hamen aik baat yad rakhni hai
(page.tsx) ke andar jo ham likhty hain wo (Layout) ke andar dikhta hai or layout ke andar jo ham likhty hain wo Browser ke andar dikhta hai.

Routing => matlab hmara web Page

Routing jo hoti hai wo hoti hai hmare src ke andar (app) ke folder mein or ham aik Rout bnaty hain uske andar
page.tsx bnaty hain taky hamen hmara page nazar aye.

return <div></div>  

component 2 ya is se zada ho to HTML elements ko return nahi karega or return ka keyword without brackets sirf single line
yani ke uske samny wali line mein jo likhenge wo return hoga warna return ki line ke neechy ya opar kuch likhenge to wo
return nahi paega uske liye hamen brackets () lgana parengi. 

<> </>

inhy ham react ke fragment ya empty element bhi kehty hain inka use tab karty hain jab ham single element return krwany ke
liye div nahi bnana chahty to same wahi kaam hoga but div ko hata diyya jaega code mein se.

 .ts       .tsx
Taha() => <Taha/> 

function ko ham alag tariqe se chlaty the or ab ham components ko alag tariqe se chlaenge self-closing tag ki tarhn use karenge.



<Shoaib name={"Shoaib Ahmed"} lastName={"Bashir"} /> 

components mein Argument is tarhn pass honge or ye jo values ham isme pass karenge wo Object ki (key value pair) ban kar 
parameter ko milengi.

function Shoaib(props: any){}  
is parameter mein wo key value recived hongi kiyun ke ye parameter aik object hai or is Props ke object or bhi bohut sari property`s hoti hain. 

{props.name} {props.lastName}

(Props) => parameter object se component body ke andar values ham object name ke sath dot laga kar use karenge jese object mein karty thy.
lekin agr is chezz se bachna chahty hain or ham dot ke bagher values get karna chahty hain to ham aik tecniqe ka use karenge jiska naam hai 


Destructure => Matlab Torna

function Shoaib( {name, lastName}: any) {}

hamne component ke argument ki values ko distruture technique se recived kiyya paramters ko curly braces {} ke andar likha
or direct un parameters ko exact name ke sath body mein use kiyya isme hamen (object) ke sath dot laga kar values ko get karne ki zrorat nahi pari.

src = app + components

src folder ke andar 2 folder banenge aik (app) ka jo already bana hua hoga or dosra components ka jisko ham create karenge 
or us folder ke andar ham (tsx) file extension mein dosry components bana kar rakhenge. 


import Shoaib from "@/components/Shoaib"

component ko dosri file se get kar rhy hain (import) => yani lao (Shoaib) is component ko (from) yahn se (@/) src folder ke
andar jo (components) ka folder hai (/) uske bhi andar (Shoaib) naam ki extension file ke andar se get kar ke data laao.































*/
