"use client"  // sari import files ke top par likhenge to work karega.

import react from "react"
import {useState} from "react"
import Para from "@/components/para"


// Child Function Flow => 
function Home() {

  let [Value, setValue]= useState<string>("")  // (6)=> jab bhi new value Aegi component khud refresh hoga or hamen updated value show karega (Value) ke veriable mein.

  // function =>     componrnt ke andar aik dosra function bnany ke liye ham (function) ka keyword use nahi karty.

  let get_data = (p: any)=> {   // (1) ye function bana kar isko as a argument pass kar rhy hain taky dosry page se isko chlaya jaa saky.
      setValue(p)  // (5)=> child Comp. se jo value aa rhi hai paramter mein usy hamne (useState) ke veriable mein update krwa diyya.
  }

  return (
    <>
       <h1>I am Home Page</h1>

       <h1>{Value}</h1>     {/* (7)=> (useState) ke andar jo value [setValue()] function se update ho kar aegi wo yahn show hogi */}

       <Para myName={"Ahmed"} func={get_data} />    {/* (2)=> yahn par ham is function ko argument|props bana kar pass kar rhy hain. Or props ki value change hogi to component apne ap rerender hoga matlab refresh */}
         
    </>
  );
}

export default Home


// <------------------------------------------------END------------------------------------------------------>
// Download Image Work

import Image from "next/image" // NEXT.JS mein image ko lagany ke liye usy sab se pehly import krwaenge.

function Home2(){
  return(
    <>
    <h1>I am Home Page2</h1>

     <Image src={"/pic.png"} alt="Profile Picture" width={200} height={200} />    {/* <= Download Image Work */}

    <Image src={"https://shorturl.at/8t0pl"} alt="Imran Khan" width={200} height={200} />

    </>
  )
}

export default Home2





/* NOTES

Component ke andar jab bhi ham koi value update karte hain to screen refresh karne ke bad wo show hoti hai lekin agr ham
React Hook (useState) ka use karte hain to jitni bar bhi new value (useState) ke andar ati rhegi ye hook khud hi refresh karta rehta hai hmare component ko.


Download Image Work =>

(1) => Image in Next.Js => public folder

Sab se pehly apne project folder ke andar jaa kar aik (public) ka folder create karna hai or uske andar wo picture rakh deni hai jo lgana chahty hain.


(2) => import Image from "next/image" 

Image ko lagany ke liye usy sab se pehly import krwaenge us component ke opar jisme us image ko lgaya jaa rha hai.


(3) => <Image src={"/pic.png"} alt="Profile Picture" width={200} height={200} />   

Next.js mein pictures ko lgane ke liye iska khud ka tag use karty hain (<Image/>) agr ye tag pairs mein aye to isy khud self closing bana kar use kar sakty hain.
src={"/pic.png"} => ke andar double quation mein image ki location btaty hain (/) yani publick ke folder ke andar (pic.png) moujood hai usy get karo or lgao 
alt="Profile Picture" => ye attribute ham isliye lgate hain taky agrhmari imag load hony mein ley to ye Text show krwa do use ke ke ye image aik Profile Picture ki hai.
width={200} height={200} => is image ki width or height jitne pixel ki rakhni hai wo likh denge.
Is Image ke tag ke andar jitne bhi attribute likhy huy hain wo sab likhna zaroi hai is tag mein tab jaa kar ye tag work karega.


Internet Link Image Work =>

              link adress from Google
<Image src={"https://shorturl.at/8t0pl"} alt="Imran Khan" width={200} height={200} />

Google se direct image ko link kezariye lgane ke liye (Image) ke tag mein baqi sary attribute same rhenge lekin sirf (src={""}) ke andar google se picture ka link adress
copy kar ke past kar denge. agr wo link bara ho tu usy (link sortner) ki kisi bhi website se chota kar ke use kar sakty hain.


next.config.mjs => file extension

Image tag ke andar (src) mein link past kar ke or attribute likh kar bhi (picture) nahi chalegi usk liye hamen (next.config.mjs) ki configration file extension mein thora sa
Code likhna hoga tab jaa kar ye image chlaegi.


const nextConfig = {              =>  By-default Create hua huwa hoga bas hamen iske andar ki sari property`s khud likhni hain.

  images: {                       => Ye (images) aik aisi property hai jo khud aik object hai.
    rePmoteatterns: [             => Ye (rePmoteatterns) aik array hai.
      {                           => Ye {} Empty Object hai.
        protocol: "https",        => Isme ham (https) ya (http) dono mein se jo Error ke andar (src props) ke agy likha hua hoga usy copy kar ke isme likh denge.
        hostname: "shorturl.at"   => hostname ke aagy double quations ke andar jo likha hua aa rha hoga usy copy kar ke yahn past kar denge.
      }
    ]    
  }        
};

export default nextConfig;        =>  By-default


*/