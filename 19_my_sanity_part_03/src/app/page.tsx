import { client } from "@/sanity/lib/client";
import Image from "next/image"

export default async function Home() {

  const response = await client.fetch('*[_type == "hero"]{"alt": image.alt, heading, desc,"image": image.asset->url,}');

  // const {} = response[]
 
 return (
  <>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">

    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
   
       {/* Card */}
      {response.map((item: any, index: any) => {  // bad mein any ki jagah interface bana denge.
        return(

          <div className="p-4 md:w-1/3 sm:mb-0 mb-6" key={index}>
             <div className="rounded-lg h-64 overflow-hidden relative">
               <Image alt={item.alt} className="object-cover object-center h-full w-full" layout="fill" src={item.image}/>
             </div>
               <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{item.heading}</h2>
               <p className="text-base leading-relaxed mt-2">{item.desc}</p>
          </div>
          
        )
      })}

    </div>

  </div>
</section>
  
  </>
 );
}






/*  NOTES 



create project command

npm create sanity@latest -- --project 6vccy6wd --dataset production --template clean 


sanity schema 

jab tak hamen schema yad nahi ho jata tab tak ham google se ye search kar ke usy dekh bnaenge.


*[_type == 'hero']

type agr brbar hai hero ke to pore hero section ke Database ke andar jo jo store hai wo dikhao but ye kuch extra code bhi dikhata hai. 


*[_type == 'hero']{heading, desc, alt,}

sanity ko bol rhy hain ke tumhary andar hero naam ke schema mein jo (heading) input ke andar jo text likha tha (desc) input mein
jo text likha tha or (alt) input mein jo text likha tha wo sab laa kar dey do.



sanity presenting image => google and get =>  "imageUrl": image.asset->url

sanity ke image docs se hamen ye code mila => ("imageUrl": image.asset->url) image ko sanity Database se get karne ke liye
but is line mein ham apni image object ka naam replace karenge jo bhi naam rakha tha => ("image": image.asset->url)


*[_type == 'hero']{heading, desc, alt, "image": image.asset->url}          => check from vision tab

is line mein masla ye aa rha hai ke ye hamen DataBase se sab kuch laa kar dey rhi hai lekin sirf (alt) ko nahi laa kar dey rhi
iski wajah ye hai ke ye direct hero schema ka child nahi hai nexted object hai jahn hamne schema code lika hai uske image ke objecct 
ke andar aik or field bana kar usme hamne (alt) text ka input bnaya tabhi parent direct apne grand child ko acces nahi kar paa rha.


*[_type == 'hero']{"alt": image.alt}         => check from vision tab

is tarhn groq query likhne se hamen data mil gaya kiyun ke ab hamne step by step data ko acces kiyya ("alt":) ki property
hamen (image.alt) ke andar se milegi isliye usy ley kar ao.


*[_type == "hero"]{"alt": image.alt, heading, desc,"image": image.asset->url,}

ye bilkul sahi wali query hai jo heading descrption image or uske andar nested (alt) ko ley kar ati hai succesfully.





*/