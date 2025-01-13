import ShipmentForm from "@/components/shipmentForm";
import { getReq, postReq } from "@/services/shipmentApi";

export default async function Home() {

//-----------------------------Get request function data------------------------------

  const res = await getReq() // fetch se aya jo bhi data hai wo isme save ho jaega.
  // console.log("😂", res)  // data get succesfully!

  // carrier_id
  const carrier_id = res.carriers[0].carrier_id // respose mein se single id get kar rhy hain.
 
  // service_code
  const services = res.carriers[0].services // array mila array
  const service_code_array = services.map((item: any) =>{return item.service_code}) // sirf service_code ke andar ki propertys nikai hain jo ke aik array bana hai.


//-----------------------------POST request function data------------------------------



  return (
   <>
     <ShipmentForm/>
   </>
  );
}



/** NOTES
 
1. after fetch make env.local in root directory and create variable with token.
2. acces env file token in fetch file => process.env.NEXT_PUBLIC_SHIPENGINE_API_KEY
3.post request mein jo body rakh kar bhejte hain uske hisab se haen formbhi genrate karna hai (Vo by vercel) se

propmt

make a form according to below json request body. make input fields, useSTate for every input fields, use colors, 
add icons according to fields, only use shadCn library. make Service Code as a dropdown menu having atleast one option.


Copy past Code => get errors

Shadcn Ui => npx shadcn@latest init
spacebar press and select what component want => npx shadcn@latest add

















*/
