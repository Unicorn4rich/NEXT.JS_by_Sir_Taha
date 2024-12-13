import { client } from "@/sanity/lib/client";
import Image from "next/image"



// Only for name change 

// export default async function Home() {

//    const response = await client.fetch("*[_type == 'hero']{userValue}")  // ab is fetch ko url nahi sirf (GROQ-query) chahiye.

//   return (
//    <div classNameName="w-full h-screen flex gap-[10px] flex-col items-center justify-center text-[30px] font-semibold">
    
//       <h1> My Name is: {response[0].userValue}</h1>
   
//    </div>
//   );
// }

//<-------------------------------------------END------------------------------------------>

export default async function Home() {
 
// sanity DataBase mein store kiyya hua schema wapas laa rhy hain (red) veriable mein Groq langauge use kar ke taky ham is data ko dynamicly use kar saken.
  const res = await client.fetch('*[_type == "hero"]{"poster": poster.asset->url, userHeading, desc, btnOne, btnTwo}')

  // aik hi veriable mein store kiyye huy sary data ko alag alag destructre kar rhy hain.
  const {poster, userHeading, desc, btnOne, btnTwo} = await res[1]


 return (
  <>

   <section className="text-gray-600 body-font m-auto">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{userHeading}</h1>

          <p className="mb-8 leading-relaxed">{desc}</p>

          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">{btnOne}</button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">{btnTwo}</button>
          </div>

      </div>

        <div className="md:w-1/2 w-5/6">
          <Image className="object-center rounded" width={300} height={300} alt="hero" src={poster}/>
        </div>


     </div>
  </section>
  
  </>
 );
}






/*  NOTES 


sanity.io => website => Backend CMS => Content Management System


purana bana hua project check karne ke liye =>
right side pe dp ka icon hoga uspe click karen phir usme (manage projects) pe click karen.


Already sanity pe bany huy project ko next.js ke new fresh folder mein conect kese karenge =>

sanity website mein us project pe click karen jisko ap concect krwana chahty hain phir wo apko (Overvew) tab ke andar 
aik command hogi (Next steps) box ke andar usy copy karen or next.js folder mein jaa kar terminal mein paste kar ke run kar den. 


Sanity project Initialize question answer 

1. Would you like to add configuration files for a Sanity project in this Next.js folder? => (Yes)
2. Do you want to use TypeScript? => (Yes)
3. Would you like an embedded Sanity Studio? => (Yes)
4. What route do you want to use for the Studio? => /studio
5. Select project template to use? => (Clean project with no predefined schema types)
6. Would you like to add the project ID and dataset to your .env.local file? => (Yes)


src => sanity => lib => client.ts => (client)
in folders ke andar jo aik client ka code hai wo (client) hi sanity se hmara data ley kar ata hai.


src => sanity => schemaTypes => index.ts => (types: [],)
in folders ke andar jaa kar jo hamen types ka empty array (types: [...]) milta hai usme ham apna schema define karte hain.


src => app => studio => [[...tool]]

ye aik route hai or ye wo route hai jisko acces kar ke ham apne next.js mein content daal sakty hain but isy har koi open
nahi kar ssakta ye authentication mangta hai. isme [env.local] file mein aik product id hoti hai wo is se conenct hoti hai
or us id ka jitne members honge sirf wahi is route ko manuplate kar skata hai.


Schema

isko ham aik hero section ki tarhn samjh sakty hain jese ham next.js mein section bana kar usme content likhty hain heading,
images, waghera wesy hi ham aik sanity mein schema section bana kar usme bohut sary inputs bana sakty hain jo heading, images waghera 
ko input box ke zariye lega or usy next.js ke zariye brwoser par dikhaega dynamicly. 
Simply ye ke next.js mein ham code mein likh kar content ko browser pe display krwaty thy but ab ham aik schema bana kar input ke zariye
wo sara data ley kar usy browser pe show krwaenge.


Schema ko likhenge kese ? 

search on google sanity schema wahn par hamen aik object milega document type ka jisme code likha hoga usi code ki tarhn schema banega. 
src => sanity => schemaTypes => index.ts => (types: [],) in folders mein jaa kar type ke array ko open kar ke usme schema likhenge.


types: [   // by-default iske andar ham jitne chahen schema bana sakty hain

    {
      title: 'Hero Schema',   // screen pe show hony wala naam jo ke identify karne mein hmari help karega ke ye input schema section hai kis cheez ka.
      name: 'hero',          // sanity is schema ko is naam se pehchany ga ke konsa schema section hai.
      type: 'document',     // ye input box ki help se document ready karta hai jis se hamen fields milti hain.
      fields: [            // ye field input box hai isme ham jitne input box bnana chahen bana sakty hain.
        {
          title: 'Enter Your Name',      // input box ki heading
          name: 'userValue',            // sanity is input box ke andar any wali value ko is naam se pehchan kar nikalega.
          type: 'string'               // input ke andar string data type ki value aa sakti hai.
        }
      ]       
    }

],

ye hai aik complete schema jis ke andar hamne aik input box bnaya hai jo string ki value lega or us value ko ham 
name change karwany ke liye use karenge..  


http://localhost:3000/studio/structure

schema bnany ke bad ham studio route ko chlaenge local-host pe or hamen is (Hero Schema) title name se aik file milegi
jis par click karenge to aik or window khul kar milegi jo ke empty hogi but uske top right pe aik plus (+) ka icon milega
us par ham click karenge to hamen aik 3sri window khul kar mil jaegi jiske andar input box hoga.

Write name in input box

ab ham us input box mein apna naam likhenge or usy bottom right pe aik button hoga (Publish) ka us se save kar denge naam
ko sanity ke data base mein.


next.js get data from sanity dataBase

sanity ke databse mein hmara naam save ho chuka hai ab ham next.js ko bolenge wo sanity se us naam ke data ko ley or browser
pe dikha dey. ab ham  in folders mein jaa kar "src => sanity => lib => client.ts => (client)" => client name ko copy kar ke
apne page.tsx mein aa kar component ke return se opar aik veriable bana denge.
veriable =>  const response = await client.fetch() 
ye error dega isliye ham iske client name ko import karenge => import { client } from "@/sanity/lib/client";


const response = await client.fetch()  

Next.js ke fetch ke andar (GROQ-query) likhenge to DataBase ko samjh aegi ke ham mang kya rhy hain. 
is fetch ko url nahi sirf (GROQ-query) chahiye or ye GROQ-query aik language hai jo sanity DataBase mein se hamen cheezen
nikal kar laa kar deti hai matlab ye GROQ-query DataBase or Nex.js ko apas mein baat krwati hai. 
studio ke route page mein hamen 3 options show hoty hain. 1=> (Structure) 2=> (Vision) 3=> (Schedules)
ham (Vision) par click karenge to hamen aik page open ho kar milega jahn test kar sakty hain ke (GROQ-query) likhne se 
jo hamen data milega wo kesa hoga.


*[condition]{projection} => examlple

(*) => jitne bhi mere schemas hain.  [condition] => jo meri underScore type hai wo brbar hai (_type == hero) ke.  
{projection} => hamen konsi property chahiye => isko ham schema ki (name) ki property dey denge.


*[_type == 'hero']{userValue} => GROQ-query language

(*) jitne bhi schema hain. jis bhi schema ka jo naam hai (_type) type se yahn ham schema name ko dhonty hain jo chahiye
hai wo brabar hai schema name ke (_type == 'hero') to us schema mein se {userValue} is object mein moujod value ko nikal 
kar ley aao. ye sab same wahi cheezen likh rhy hain (GROQ-query) language mein jo hamne schema object bnaty huy us objext 
mein likhi thi data ko sanity database mein bhejne ke liye or ab ham usi data ko wapas next.js mein laa rhy hain un naamo 
se jin se hamne store krwaya tha. 


const response = await client.fetch("*[_type == 'hero']{userValue}")
GROQ-query language fetch mein likh kar ham sanity DataBase mein store kiyya huwa name wapas apne Next.js mein get kar rhy hain.

<h1> My Name is: {response[0].userValue}</h1>
phir us fetch se aye huy response data ko ham browser mein print krwa rhy hain (response) aik array hai jiske zero [0] index pe
jo aik object hai ().userValue) uske andar jo ye value hai usy laa kar do.



       {  
          title: 'Poster',
          name: 'poster',
          type: 'image',
          options: {
            hotspot: true // <-- Defaults to false
          },
          fields: [
            {
              name: 'attribution',
              type: 'string',
              title: 'Atribute',
            },
          ]
        }

is tarhn ham aik image ka schema bana sakty hain or usme image upload kar sakty hain but ye image simple hogi url mein nahi.
sanity Presenting Images googlr par likhenge to hamen image ko sanity database se get karne ka tariqa mil jaega.
*[_type == 'hero']{"poster": poster.asset->url} ye groq query vision mein likhenge to hamen hmari image ka url show ho jaega.


*[_type == 'hero']{"poster": poster.asset->url, userHeading, desc, btnOne, btnTwo}

is Groq query language se ham sanity dataBase se baat kar ke usme aone hero section schema mein rakhi sari property1s ko 
vision mein dekh sakty hain. 
(*) =>                        =>  all schemas
[_type == 'hero']             =>  jis schema ka naam (hero) hai
{"poster": poster.asset->url, =>  meri image ko laa kar do jo maine schema mein (poster) ke naam se save krwai thi or ye naam ham 2 dafa likhenge image ka url ke sath bhi.
userHeading,                  =>  jo maine heading naam ke input mein text likha tha wo bhi laa kar do
desc,                         =>  jo maine descrption naam ke input mein text likha tha wo bhi laa kar do
btnOne,                       =>  jo maine btnOne naam ke input mein text likha tha wo bhi laa kar do
btnTwo,                       =>  jo maine btnTwo naam ke input mein text likha tha wo bhi laa kar do



 images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',  => add manully
          port: '',
          pathname: '**',             => add manully
        },
      ],
    },

image ko dataBase se fetch karne ke bad browser pe error aega wo image ki wajah se code show nahi karega uske liye ham 
next.config.ts ki file mein jaa kar (nextConfig) ke object mein ye code past kar denge or ye code hamen google pe 
(next.js image optmize) likhne se milega    


Sanity Website Options => project => Acces tab

Members check karne ke liye sanity project ke andar (access) tab mein jaa kar check kar sakty hain or wahn ham dosry
members ko apni marzi ke mutabiq project ka jitna or jis tarhn ka acces dena chahendey sakty hain.

Project => Member tab

isme jaa kar ham dekh sakty hain kitne members ke pass is project ke content ko acces karne ki authority hai or yahi se
ham kisi bhi member ko add bhi kar sakty hain or delete bhi kar sakty hain.


Project => Setting tab
isme jaa kar ham project ko rename ys delete bhi kar sakty hain.


Project => Api tab

is project ko kahn kahn se request aye to ye jawab dey sakta hai wo sab isme likha hota hai or isme ham apni marzi se bhi 
request accept karne ke liye api configration bana sakty hain.























*/