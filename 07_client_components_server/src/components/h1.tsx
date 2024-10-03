"use client"  // isko use karne ke liye sab se top pe likhna parega warna ye error dega.

import React from 'react'

// Example 1

// function H1(props: {name: string, last: string, middle: string }) {

//   return (
//     <div>
//         <h1>I am {props.name} {props.middle} {props.last} </h1>
//     </div>
//   )

// }

// export default H1



// // Example 2 

// function H1(props: {data: {firstName: string, middleName: string, lastName: string}}) {  // argument ke topr pe bheje gaye Object ko paramater mein receive kar rhy hain uski data type define kar ke. 

//   return (
//     <div>
//          <h1> {props.data.firstName} {props.data.middleName} {props.data.lastName} </h1>      {/* lekin yahn pe ham kafi lenthy tariqe se values ko get kar rhy hain. */}
//     </div>
//   )
  
// }

// export default H1



// Example 3

// function H1({data}: {data: {firstName?: string, middleName: string, lastName: string}}) { // props mein se data ko ham destructure kar rhy hain matlab nikal rhy hain. or iske parameter ko ham optional bhi bana sakty hain. 

//   return (
//     <div>
//          <h1> {data.firstName} {data.middleName} {data.lastName} </h1>      {/* yahn pe hamne code ko short karty huy props ko hata diyya kiyun ke data ki property destrutre ki hai jabi */}
//     </div>
//   )
  
// }

// export default H1



// example 4 

function H1() { 

//    console.log(data)   // server-side component check in backend Node.js terminal mein iski values print ho kar nazar aengi.
//    console.log(data)   // top par use client likhne ke bad ab ye component client componet ban gaya hai or iski values web-browser par show hongi.  

       let date = new Date()
          console.log(date.toLocaleString())  // ye component use client wala hai isliye hamen iska time web-Browser par time print hua dikhega. 

    return (
      <div>

           {/* <h1>{date.toLocaleString()}</h1>    */}

          <h1>I am Shoaib</h1>           

      </div>
    )
    
  }
  
  export default H1
  










/* NOTES


props: {name: string}

is line ka matlab hai (props) aik object hai or wo apne andar (name) ki property rakhta hai jiski data type (string) hai.
or is object ko ham ki tarhn get karenge.


{props.name} {props.midle} {props.last}

props object ki value ko component ki body mein agr name chahiye to uske liye {props.name} is tarhn props se value ko lenge
lekin ye kafi lenthy tariqa hai bar bar props object se values ko nikalna. 


props: {data: {firstName: string, middleName: string, lastName: string}}

(props) parameter ke andar hamen aik (data) mila hai or wo data khud aik Object hai uske andar jo Key value Pairs Aenge jese 
firstName ki data type string hogi or is tarhn baqi ki values ki bhi data type define ki jaegi unki keys ke sath.


{props.data.firstName}

(props) ke andar aik (data) hai or data ke andar (firstName) ki value ko get kar rhy hain or ye ham parameter ki values ko use kar rhy hain.


{data}: {data: {firstName: string, middleName: string, lastName: string}}

props mein se ({data}) ko destructure kar liya or iski data type define kar rhy hain jisme ham bata rhy hain ke ye props (:{}) aik
Object hai or iske andar hai (data) or data khud aik (: {}) object hai or object ke andar jo property`s hain wo keys ke sath unki data type
ke sath define karenge.



*/