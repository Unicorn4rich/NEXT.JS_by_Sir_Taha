import Image from "next/image";

function Home() {
  return <>
          <h1>I am Home Page</h1>
  </>
}

export default Home



/* NOTES 


Static Routing

routing ki help se ham pages bnaa sakty hain or (Route) ko chahiye 2 cheezen 1st aik folder 2nd us folder ke andar (page.tsx) 
ki file ye 2no cheezen mil ke Route bnati hain or agr Route bana to iska matlab hai aik (page) ban ke mila. or jo bhi ham 
Routes bnaty hain wo (app) ke folder ke andar bnaty hain.
simple si baat hai Route bnana hai to (app) ke folder ke andar aik folder bnana hai or uske andar aik page.tsx ki file create 
karni hai or uske andar koi na koi component zror bnana hai warna ye Routing nahi chalegi


Static Routing Check

routing ho rhi hai ya nahi ye check karne ke liye (local host 3000) screen pe jaenge wahn par search bar mein (localhost:3000) ye
likha hoga jo (app) ke folder mein by-default (page.tsx) bana hua mila tha wo hai to ham iske agay (/) laga kar app folder ke andar us folder
ka naam likh denge jiske andar hamne page.tsx ki file rakhi hogi matlab is tarhn (localhost:3000/about) likhenge to hmara Route chal jaega 
is tarhn about ke folder ke andar wala page (local host 3000) pe chal jaega. iske ilawa ham (app) folder ke andar multiple folders bana kar unpe 
Routing kar sakty hain (/) laga kar. or har routing waly folder mein file (page.tsx) ke naam se bnani hai agr dosry naamo se bnai to error aega.


Nested Route

matlab aik Route ke andar dosry Route ka hona sab se pehly hamne (app) ke folder ke andar aik about ka folder bnaya or uske
andar aik (page.tsx) ki file bnai or usko succesfuly chlaya bhi ab ham isi about ke folder ke andar aik or folder bana rhy hain
jiska naam (about2) rakha hai or iske andar bhi aik (page.tsx) ki file bana ke isko Routing ke liye ready kar diyya but ye
static nahi Nested-Routing kehlaegi jisko ham aisy acces karenge (localhost:3000/about/about2) segment => is line ko samjhty hain
(localhost:3000) => ye app folder ke andar main file (page.tsx) hai jo by-default genrate hui huwi milti hai.
(/) matlab local host wali file ke folder ke andar aik (about/) ka folder hai uske bhi andar aik (about2) ka folder hai jiski
(page.tsx) wali file ko local host screen pe chala do  



Dynamic Route

ye aik speacial Route hai jisko bnany se hamen aik speacial page milta hai misal ke tor pe (Amazon ya Daraz) jesi website pe
jab ham shopping karne jate hain to wahn hamen lakhon ki tadad mein (Main-Page) pe product dikhty hain un mein se kisi bhi 
product pe click karenge to hamen us product ka aik route milega matlab us product ka khud ka page jisme uski picture details
or baqi cheezen likhi hongi. 
farz karen ham aik amazon jesi website bana rhy hain or uske andar lakho product ke liye har aik product ke liye
alag se route bnany to nahi beth sakty kiyun ke isme bohut time lagega or ye bohut ziyada mushkil sa kaam hai isliye ham
aik speacial (Dynamic) page layout bnaty hain kiyun ke ham chahty hain ke un lakhon product mein se kisi bhi product pe
click kiyya jaye to wo product jis page mein show hogi wo page har aik product ke liye same rhega bas uske andar alag alag
product ke hisab se pictures details or baqi cheezen hange ho kar show hongi lekin us page ka layout har aik product ke liye 
same rhega. jab ke hamen Static Routing mein har aik Route ke liye khud se page bnana parta hai.   


Dynamic Route Creating => Segment mean URL CHanges

dynamic Route bnany ke liye sab se pehly app ke folder mein aik folder create karenge jo squire brackets mein hoga => [id] uske andar
aik page.tsx ki file create karenge or us file ke andar ham kuch bhi likh denge ye sab karne ke bad jab ham local host ki screen
pe jaenge or wahn (localhost:3000/product/product15) likhenge to hamen product ke Route ke andar jo [id] ka folder bana tha uske
page.tsx mein kuch bhi hoga to apne ap open ho jaega bhaly end waly (product15) route ka naam ham kuch bhi den (product50) tab bhi
[id] folder ke andar wala page.tsx ka page open hoga. but static mein hamen Route ke folder ka exact naam likhna parta tha tab ja 
kar wo open hota tha. 











*/