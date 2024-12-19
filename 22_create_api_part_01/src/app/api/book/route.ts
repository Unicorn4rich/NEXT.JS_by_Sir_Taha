import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest){  // yahn pe url mein likha data get hoga or is parameter ka naam response rakha or iski data type khud next.js deta hai hamen.

   // console.log("😂", request);  // iske andar hamen multiple methods array objects or bohut extra data milta. 

   const url = request.nextUrl;     // isme se hamne (nextUrl) ko nikala
  // console.log("😎", url)        // isme hamen url ke bare mein details di jaengi.

// is url ke andar queryparameter hai jisy nikal kar ham dekh sakty hain or ye wahi parameter hai jise input se ley kar link tage ke href ke andar hamne url pe bheja tha phir us url ko hamne parameter mein get kiyya or us se (nexturl) nikala hai.
  const myName = url.searchParams.get("name") // ye aik query parameter hai jisko ham bol rhy hain ke tumhary search url mein jo name ke variable mein value aegi usy laa kar veriable mein store karo

  if(myName == "Shoaib"){
    return NextResponse.json({"message": "Hello Shoaib"})
  }
  else{
    return NextResponse.json({"Message": "Name is not correct"})
  }

//    return NextResponse.json({message: "I am  book get request", name: `${myName}` })  // API ki GET request pe iska output show hoga.
}


/* NOTES

const myName = url.searchParams.get("name") 

isme ham ye bol rhy hain ke get request jab hogi or uske url mein aik veriable bana kar jab bhi hamen koi naam bheje to
usy url se get kar ke aik veriable mein store karwa do or us veriable ko html mein dikha do => ${myName} or
url mein ham naam is tarhn likhenge => http://localhost:3000/api/book?name=azlaan


Is method yani query parameter ka sab se bara faida ye hai ke ham is se pehly waly page mein link ke andar input ka box
bana kar usme user se naam poch kar link se url mein bhej dety hain phir is url se ham us naam ko function parameter mein get kar ke
usy thora filter kar ke aik veriable mein store kar ke html mein dikhaa dety hain yani screen pe. 


*/