import { get_Api } from "@/services/getAPI";  // kisi or file se api ko mangwa rhy hain.
import Link from "next/link";



export default async function Home() {

// GET request


// // API Calling
// const response1 = await fetch("https://simple-books-api.glitch.me/books"); // fetch mein aya data by-default Get request mein hota hai

// const data1 = await response1.json();  //yahn par response aya fetch api se aye huy data ka or usy hamne (Json) mein convert kar ke readble bana diyya.
// console.log("😂 Home data", data1);  // yahn par hamne us data ko print krwa liya.




//<----------------------------------------------------------------------------------------------------------------------------------->
// Post submit order Request 


  // const accessToken = '5ac71ed356e0030a9e2e9a2e3756118d4d9c612acd1e144885f9bd59110f2bfa'  // authentication krwany ke bad hamen ye Token mila.

  // // API Calling
  // const response2 = await fetch("https://simple-books-api.glitch.me/orders", {
  //   method: "POST",  // request method
  //   headers: {      // isme ham bata rhy hain ye jo data hai isy (JSON) ki form mein hai hadnle kar lena.
  //     "Content-Type": "application/json",
  //     "Authorization": `Bearer ${accessToken}` 
  //   },

  //   body: JSON.stringify(   // ye jo object mein data hai isy ham (JSON) string bana kar send kar rhy hain.
  //     {
  //       "bookId": 5,
  //       "customerName": "Ajju"
  //     }
  //   )

  // });

  // const data2 = await response2.json();  //yahn par response aya fetch api se aye huy data ka or usy hamne (Json) mein convert kar ke readble bana diyya.
  // console.log("😂 Home data", data2);  // yahn par hamne us data ko print krwa liya.


//<----------------------------------------------------------------------------------------------------------------------------------->
// Get request for Order check 


// const accessToken2 = '5ac71ed356e0030a9e2e9a2e3756118d4d9c612acd1e144885f9bd59110f2bfa'  // authentication krwany ke bad hamen ye Token mila.

// // API Calling
// const response3 = await fetch("https://simple-books-api.glitch.me/orders/c-3kodLdlINsoHtJZAm8U", {

//   method: "GET",  // request method
//   headers: {      // isme ham bata rhy hain ye jo data hai isy (JSON) ki form mein hai hadnle kar lena.
//     "Content-Type": "application/json",
//     "Authorization": `Bearer ${accessToken2}` 
//   },

// });

// const data3 = await response3.json();  //yahn par response aya fetch api se aye huy data ka or usy hamne (Json) mein convert kar ke readble bana diyya.
// console.log("😂 Home data", data3);  // yahn par hamne us data ko print krwa liya.



// Order Result successfull

// Home data [
//   {
//     id: 'c-3kodLdlINsoHtJZAm8U',
//     bookId: 5,
//     customerName: 'Ajju',
//     createdBy: '2d442e770b2a1b275aea98965b9060ec6d65bcebafef0a888312f6a78e22e9eb',
//     quantity: 1,
//     timestamp: 1732803621626
//   }
// ]
//<----------------------------------------------------------------------------------------------------------------------------------->
// Patch Order update Request 

// patch request se order ki details se update karty huy hamen client se koi respose nahi milta lekin ye status code se hamen bata deta hai ke 
// hmara kaam hua ya nahi jese ke thunder client se ham patch kar ke check kar sakty hain.




// const accessToken3 = '5ac71ed356e0030a9e2e9a2e3756118d4d9c612acd1e144885f9bd59110f2bfa'  // authentication krwany ke bad hamen ye Token mila.

// try{  // is API ko hamne try catch mein rakha taky agr isme koi error aye to hamen pata chal jaye 
  
// // API Calling
// const response4 = await fetch("https://simple-books-api.glitch.me/orders/c-3kodLdlINsoHtJZAm8U", {

//   method: "PATCH",  // request method
//   headers: {      // isme ham bata rhy hain ye jo data hai isy (JSON) ki form mein hai hadnle kar lena.
//     "Content-Type": "application/json",
//     "Authorization": `Bearer ${accessToken3}` 
//   },

//     body: JSON.stringify(   // ye jo object mein data hai isy ham (JSON) string bana kar send kar rhy hain.
//       {
//         "customerName": "ABCXYZ"
//       }
//     )

// });

// if(!response4.ok){   // agr API se aya respose agr okay yani succesfull nahi hai to
//   throw new Error(`Response is Empty: ${response4.status}`)  // ye wala error chala kar hamen dikha do.
// }

// const data4 = await response4.json();  //yahn par response aya fetch api se aye huy data ka or usy hamne (Json) mein convert kar ke readble bana diyya.
// console.log("😂 Home data", data4);  // yahn par hamne us data ko print krwa liya.

 

// }catch (error){  // agr koi error aya to ye catch ka code exicute hoga.
//   console.log("This is my Error 🤬", error);
// }

// is pore code mein agr fetch se koi respose nahi ata to (if) wala code chalega or agr fetch ya us se neechy ke kisi code of line se hamen koi
// error milta hai to wo catch ka method run hoga.
// lekin hmare order ki details change ho chuki hain confrimation ke liye ham thunder client pe bhi check kar sakty hain.


// Print Result 

// 😂 Home data {
//   id: 'c-3kodLdlINsoHtJZAm8U',
//   bookId: 5,
//   customerName: 'ABCXYZ',   \<= name changed
//   createdBy: '2d442e770b2a1b275aea98965b9060ec6d65bcebafef0a888312f6a78e22e9eb',
//   quantity: 1,
//   timestamp: 1732803621626
// }
//  GET / 200 in 11836ms


//<----------------------------------------------------------------------------------------------------------------------------------->
// Delete Order request



// const accessToken4 = '5ac71ed356e0030a9e2e9a2e3756118d4d9c612acd1e144885f9bd59110f2bfa'  // authentication krwany ke bad hamen ye Token mila.

// try{  // is API ko hamne try catch mein rakha taky agr isme koi error aye to hamen pata chal jaye 
  
// // API Calling
// const response5 = await fetch("https://simple-books-api.glitch.me/orders", {

//   method: "DELETE",  // request method
//   headers: {      // isme ham bata rhy hain ye jo data hai isy (JSON) ki form mein hai hadnle kar lena.
//     "Content-Type": "application/json",
//     "Authorization": `Bearer ${accessToken4}` 
//   },

// });

// if(!response5.ok){   // agr API se aya respose agr okay yani succesfull nahi hai to
//   throw new Error(`Response is Empty: ${response5.status}`)  // ye wala error chala kar hamen dikha do.
// }

// // Delete karte waqt response nahi milta hamen. 
// const data4 = await response5.json();  //yahn par response aya fetch api se aye huy data ka or usy hamne (Json) mein convert kar ke readble bana diyya.
// console.log("😂 Home data", data4);  // yahn par hamne us data ko print krwa liya.

 

// }catch (error){  // agr koi error aya to ye catch ka code exicute hoga.
//   console.log("This is my Error 🤬", error);
// }


// Result Orders succesfully delete => 😂 Home data []





//<----------------------------------------------------------------------------------------------------------------------------------->
// import api from src component

  const apiData = await get_Api();

  return (
    <>

       {apiData.map((item: any, index: any)=>{
        return <Link href={`/${item.customerName}`}><h1 key={index}>Customer Name: {item.customerName}</h1></Link> 
        })}


    </>
  );
}


















/* NOTES

API => Application Programing Interface Fetch Method

api se ham 2 websites ke beech comunication krwa sakty hain bhaly aik website alag lamnguage pe bani hui ho or dosri
alag pe unke beech comunication Json ki form mein krwaty hain. 
hamne chrome pe aik url likh kar request bheji wo gai data base server ke pass or data base server ne check kiyya ye data mere 
pass hai to usne phir aik respose mein us data ko (Json Object) bana kar hamen dey diyya or hamne usy browser pe dekh liya.


Crud 
Http methods

1. Get request     => Read
2. Post request    => Create
3. PATCH request     => Update
4. Delete request  => Delete


Book API Link =>  https://simple-books-api.glitch.me
Product Order all Authentication process 


try{} catch(){}

jab hamen hmare API program mein koi response na mil rha ho to ham us pore code ko (try{}) (catch(){}) mein rakh denge.


 if(!response4.ok){   
    throw new Error(`Kuch to ghalat ho rha hai ${response4.status}`)  
  }

ye condition hamne khud se isliye bnai hai kiyun ke kabhi kabhi fetch se hamen wapas koi respose nahi milta status (200) successfully okay bhi hai 
to ye wala code run ho jaye.   



*/