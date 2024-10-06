import React from "react"                   // Node module waly import ki lines opar ki tarf rakhenge.
import Message from "@/components/Message"  // Or ye hmare khud ke folders ke imports neechy ki taraf rakhty hain.
// Node modules waly import ka pata aisy chalta hai usme (@) or (./) se nahi hota or ye dono cheezen sirf hmare khud ke folders ke import mein hoti hain.


export default function Home() {

   let arr = [1,2,3,5,8,0];

  return (
      <>
         <h1>I am Home Page</h1>

         {/* { arr.map((item, index) => {return <Message key={index} />}) } */}

         <Message/>

      </>
  );
}





/* NOTES 


package.json => line 5 [scripts tag]

"scripts": {
    "dev": "next dev",       => npm run dev likhenge to ye chalegi.
    "build": "next build",   => npm run build likhenge to ye chalegi.
    "start": "next start",   => npm start likhenge to ye chalegi.
    "lint": "next lint"      => iska sir ne btaya hi nahiiii.
},


"dev": "next dev",

terminal ke andar apna code (local host 300) pe chlany ke liye (npm run dev) likhty hain ye jo line hai wo scripts ke andar
line number 6 ["dev": "next dev",] ki wajah se chalti hai iska matlab ye hota hai ke mere develpment walay server mood ko
on kardo jese hi ham devepment wala server on karwaty hain to hmare projects ki files mein top pe (.next) ka folder create
ho jata hai or iske andar bohut sari cheezen moujood hoti hain. 
(npm run dev) karne se develepment server on hota hai jiska matlab hai abhi mai develepment kar rha hn or iske sath mein 
hamen aik feature bhi milta hai (H.R.M) ka wo bhi on ho jata hai or iska full form (Hot Reload Module) hai or iska kaam ye
hai ke Code likhty time hmary jo components hoty hain agr ham un mein koi changes karty hain misal ke tor pe agr us component
ke andar code mein (h1) ka new tag add kar ke usme mein kuch bhi likh dety hain to wo cheez hamen (local host 3000) ki screen
pe dikhti hai bagher Web-page ko refresh kiyye to ye sab hamen (H.R.M) ke feature ki wajah se dikhta hai. or ye feature khudi
new new code jo bhi  ham component mein likhty jaenge usy (Local Host 3000) ki screen pe update karta jaega kiyun ke ye baat
NEXT.JS ko pata hai ke abhi ham develpment kar rhy hain or hamen code ko bar bar check karna hota hai. 

 
"build": "next build",

is line ka matlab ye hai ke ham jo project bana rhy the wo pora complete kar chuky hain or ab ham terminal mein (npm run build)
kar ke ye dekhna chahty hain ke jab ham is website ko InterNet pe Deploye/Host karenge to ye User ko kesi dikhegi agr isme
sab kuch Set hai to ham isy Live kar denge or agr isme kuch error ya massla hai to usko pehly theek karenge phir dubara se
check kar ke isy live kar denge.
(npm run build) karne se pehly (.next) ka folder ham delete karenge jo (npm run dev) ne create kiyya tha uske bad ham aik new
terminal mein (npm run build) ki command chala denge jiski wajah se terminal ke andar (Creating an optimized production build ...) 
mein kafi sari cheezen aik hi time pe build ho rhi hongi jiska matlab hai saray ka sara HTML Yahn opar create ho rha hoga. 
jis ka (.next) ka folder dubara se create ho kar mil jaega or is bar iske andar or bhi kafi cheezen add hui hongi or is folder
ke andar jo code genrte huwa hoga wo minified form mein hoga matlab na to is code ko ham parh sakty hain or naa hi is code
mein kuch changes kar sakty hain ye code fix hoga.


"start": "next start",

is ka matlab hai (npm run build) karne ke bad hamen code ko build to krwa liya but ab hamen is code ko chlana bhi to hai isliye
(npm start) ki commad chalenge jiski wajah se hamen aik (local host 3000) milega jispe ham as a User dekh sakty hain jo project 
hmara build hua hai wo dikhta kesa hai. or agr isme koi ghalti nazar ati hai to ham is terminal ko rok kar apne code par jaa
kar usy theek karenge phir usy dubara se (npm run dev) pe jaa kar check kar lenge ke wo code theek hua ya nahi agr theek hai
to dubara terminal pe (npm run build) chala kar apne project ko dekhenge.


Server-Component + Client-Component => (Local Host 3000)

Server-component or Client-component mein defrence kya hai ? server-component apna pora HTML ka code khud tayyar kar ke lata
hai (local host 3000) mein jiski wajah se local host Browser pe itna load nahi parta.
Client-component javascript mein apna HTML ka thora sa code yani Boiler plate or baqi ka jitna code likha hota hai wo ley kar
ata hai (local host 3000) mein or ye sara code Javascript mein isliye kar ke lata hai kiyun ke Server ko or na Browser ko NEXT.js
Typscript ya koi or language samjh ati hai. inko sirf Javascript samjh ati hai isliye Browser pe javascript ko laya jata hai.
or jab Browser pr javascript ati hai to iske opar load parta hai jisme Browser javascript ko parhega or parh parh kar component 
bnaega or dikhaega. simple server-component code tayyar kar ke browser pe lata hai or client-component browser se hi mehnat krwata hai.


question? => ye sab hota kis tarhn hai

Server-Component 

jab ham bolty hain (npm run build) to ye jo hmara server-component hota hai wo jata hai server ke pass yani (Node.Js) ke pass
or usy apna sara code dey deta hai or (Node.js) jo bhi code hota hai [jsx,tsx,ts] usy parhta hai or HTML Javascript or baqi sari cheezo
mein code ko convert kar kar ke dey deta hai complete ready kar ke. uske bad ye sara ready hua huwa code jata hai (Local Host 3000) ke
Browser pe chlany ke liye. Jiski wajah se browser ko mehnat nahi karni parti is code pe.


Client-Component

Client-component bhi apna sara code ley kar (Node.Js) ke pass jata hai or Node.js is component ko aik initial code deta hai HTML ka
matlab sirf Boiler plate bana kar deta hai or iske ilawa Code ke andar TS TSX or baqi ke jitne code hoty hain unhy Javascript mein 
convert karta hai or (Local Host 3000) ko dey deta hai or ab local host ke pass sirf Boiler plate or javascript Aai hai jisko usy 
khud hi sara code parh kar ready karna parega or (Local Host 3000) ki screen pe chlana parega jiski wajah se uski perfomance pe 
assar parega.


question in dono mein Defrence kya hai ?

ye dono component aik hi hoty hain or chalty bhi browser par hain jab ham kisi component ke opar "use client" likhty hain to wo
aik Client-Component ban jata hai or jab ham kisi component pe "use client" nahi likhty to wo Server-Component hi rehta hai
or in dono ki rendering Node.js ke backend server par hi hoti hai.


Client-Component => ki khoobi kya hai ?

jab ham component pe "use client" likhty hain to uske andar (Hooks) ko use kar sakty hain or is mein hamen (state, effect, reducer) 
jese hooks milty hain or (UI) user interface mein koi bhi cheez change krwa sakty hain jese button click karne par ya kisi Event pe
iske ilawa ham browser ki (API) bhi use kar sakty hain jese (setTimeOut) ka function or setInterval ka function. 

 
Server-Component => ki khoobi kya hai ?

is component mein data (fetch) krwa sakty hain uske bad ye us data ko bnaye huy HTML mein ready karega or Browser ki tarf chala jaega
or (Backed) ka code bhi ham isme likhty hain (Sensitive) information bhi ham isi mein likhty hain jo cheez ham nahi chahty ke browser 
screen pe show ho or iske ilawa hmare pass koi large dependency hai usko bhi ham Server par rehty huy pora ready karte hain or Browser 
ke pass chaly jate hain taky hmare Browser pe load na pare or user ko bhi zada time wait nahi karna parega.


for loop + if else + .map

component mein return ke andar (TSX | JSX) mein ham (for loop) ka use nahi kar sakty kiyun ke ye work nahi karta. iske ilawa
(if else) ki condition bhi ham use nahi kar sakty lekin for loop ki jaga (.map) ka method use kar sakty hain (TSX | JSX) mein
or if else ki jagah (ternery) oprater use kar sakty hain.

let arr = [1,2,3]  =>     arr.map( (item) => {return <Message/>} )

.map value leta hai or or apna code exicute karta hai isme Array se aik value (item) ke andar aegi or (.map) return kar dega
(<Message/>) ke component ko jiski wajah se us component ka code screen pe chal jaega iske bad dubara dosri value item ke andar aegi
or ye method return kar dega (<Message/>) ko jis se dubara screen par is component ka code chal jaega is tarhn jitni bhi array ke andar
values hongi utni bar ye component chalega.


{ arr.map((item, index) => {return <Message key={index} />}) }

jab bhi array ki value item ke andar get hogi to to uske sath us value ko (index) number bhi assign kar diyya jaega jitni bhi values chalengi
utni bar index number diyya jaega har aik value ko alag index number milega 0 se ley kar jitni values hongi uske end tak sari values ko unqiue 
(key={index}) index milega iska faida ye hai ke ham index number ke zariye har aik value ko alag se get kar sakty hain or uspe functionality apply
kar sakty hain.

*/