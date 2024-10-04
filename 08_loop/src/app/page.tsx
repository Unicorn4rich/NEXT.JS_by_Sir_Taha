import React from "react"                   // Node module waly import ki lines opar ki tarf rakhenge.
import Message from "@/components/Message"  // Or ye hmare khud ke folders ke imports neechy ki taraf rakhty hain.
// Node modules waly import ka pata aisy chalta hai usme (@) or (./) se nahi hota or ye dono cheezen sirf hmare khud ke folders ke import mein hoti hain.


export default function Home() {
  return (
      <>
         <h1>I am Home Page</h1>

         <Message/>
      </>
  );
}





/* NOTES 


package.json => line 5 [scripts tag]

"scripts": {
    "dev": "next dev",       => npm run dev likhenge to ye chalegi.
    "build": "next build",   => npm run build likhenge to ye chalegi.
    "start": "next start",   => npm run start likhenge to ye chalegi.
    "lint": "next lint"
},


"dev": "next dev",

terminal mein apna code (local host 300) pe chlany ke liye (npm run dev) likhty hain ye jo line hai wo scripts ke andar
line number 6 ["dev": "next dev",] ki wajah se chalti hai iska matlab ye hota hai ke mere develpment wala mood wala server
on kardo jese hi ham devepment wala server on karwaty hain to hmare projects ki files mein top pe (.next) ka folder create
ho jata hai or iske andar bohut sari cheezen moujood hoti hain. 
(npm run dev) karne se develepment server on hota hai jiska matlab hai abhi mai develepment kar rha hn or iske sath mein 
hamen aik feature bhi milta hai (H.R.M) ka wo bhi on ho jata hai or iska full form (Hot Reload Module) hai or iska kaam ye
hai ke Code likhty time hmary components hoty hain agr ham un mein koi changes karty hain misal ke tor pe agr us component
ke andar code mein (h1) ka new tag add kar ke usme mein kuch bhi likh dety hain to wo cheez hamen (local host 3000) ki screen
pe dikhti hai bagher Web-page ko refresh kiyye to ye sab hamen (H.R.M) ke feature ki wajah se dikhta hai. or ye feature khudi
new new code jo bhi  ham component mein likhty jaenge usy (Local Host 3000) ki screen pe update karta jaega kiyun ke ye baat
NEXT.JS ko pata hai ke abhi ham develpment kar rhy hain or hamen code ko bar bar check karna hota hai. 

 
"build": "next build",

is line ka matlab ye hai ke ham jo project bana ry the wo pora complete kar chuky hain or ab ham terminal mein (npm run build)
kar ke ye dekhna chahty hain ke jab ham is website ko InterNet pe Deploye/Host karenge to ye User ko kesi dikhegi agr isme
sab kuch Set hai to ham isy Live kar denge or agr isme kuch error ya massla hai to usko pehly theek karenge phir dubara se
check kar ke isy live kar denge.
(npm run build) karne se pehly (.next) ka folder ham delete karenge jo (npm run dev) ne create kiyya tha uske bad ham aik new
terminal mein (npm run build) ki command chala denge jiski wajah terminal ke andar (Creating an optimized production build ...) 
mein kafi sari cheezen aik hi time pe build ho rhi hongi jiska matlab hai saray ka sara HTML Yahn opar create ho rha hoga. 
jis ki (.next) ka folder dubara se create ho kar mil jaega or is bar iske andar or bhi kafi cheezen add hui hongi or is folder
ke andar jo code genrte hua huwa hoga wo minified form mein hoga matlab na to is code ko ham parh sakty hain or naa hi is code
mein ham kuch change kar sakty hain ye code fix hoga.


"start": "next start",

is ka matlab hai (npm run build) karne ke bad hamen code ko build to krwa liya but ab hamen is code ko chlana bhi to hai isliye
(npm start) ki commad chalenge jiski wajah se hamen aik (local host 3000) milega jispe ham as a User dekh sakty hain jo project 
hmara build hua hai wo dikhta kesa hai. or agr isme koi ghalti nazar ati hai to ham is terminal ko rok kar apne code par jaa
kar usy theek karenge phir usy dubara se (npm run dev) pe jaa kar check kar lenge ke wo code theek hua ya nahi agr theek hai
to dubara terminal pe (npm run build) chala kar apne project ko dekhenge.


Server-Component + Client-Component => (Local Host 3000)

Cerver-component or Client-component mein defrence kya hai ? server-component apna pora HTML ka code khud tayyar kar ke lata
hai (local host 3000) mein jiski wajah se local host Browser pe itna load nahi ata.
Client-component javascript mein apna HTML ka thora sa code yani Boiler plate or baqi ka jitna code likha hota hai wo ley kar
ata hai (local host 3000) mein or ye sara code Javascript mein isliye kar ata hai kiyun ke na Server ko or na Browser ko NEXT.js
Typscript ya koi or language samjh ati hai. inko sirf Javascript samjh ati hai isliye Browser pe javascript ko laya jata hai.
or jab Browser pr javascript ati hai to iske opar load parta hai jisme Browser javascript ko parhega or parh parh kar component 
bnaega or dikhaega. simple server-component code tayyar kar ke lata hai browser pe or client-component browser se hi mehnat krwata hai.


question? => ye sab hota kis tarhn hai

Server-Component 

jab ham bolty hain (npm run build) to ye jo hmara server-component hota hai wo jata hai server ke pass yani (Node.Js) ke pass
or usy apna sara code dey deta hai or (Node.js) jo bhi code hota hai [jsx,tsx,ts] usy parhta hai or HTML Javascript or sari cheezo
mein convert kar kar ke dey deta hai complete code ready kar ke. uske bad ye sara ready hua huwa code jata hai (Local Host 3000) ke
Browser pe chlany ke liye jiski wajah se browser ko mehnat nahi karni parti is code pe. 





















*/