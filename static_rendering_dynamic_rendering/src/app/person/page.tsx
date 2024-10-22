import Link from 'next/link'
import React from 'react'

async function PersonPage() {

// (API) => Call  

// API ko any mein time lagta hai jabhi await laga kar bola hai ke jab tak data mil na jaye tab tak aagy ke code ko rok kar rakhy chalny na dey.
    const data = await fetch("https://fakerapi.it/api/v1/persons?_locale=en_US&_quantity=1")

//  console.log(data) // Api ka data direct use nahi kar sakty kiyun ke wo readble form mein nahi hota

    const person = await data.json() // Yahn par fetch data ko readble form mein convert kar rhy hain oriske sath bhi await lazim lagta hai.

//  console.log(person) // person Data object mein readble form mein successfully aa gaya. 
    
//  console.log(person.data) // person ke andar se data ka array of object get kar rhy hain.

    console.log(person.data[0].firstname) // person ke andar data ki zero index pe rakhi hui value mein se firstname ki property nikal kar do
//  property get hui ya nahi iske liye browser ko refresh kar ke terminal mein dekhenge.



  return (
   <>
     {/* <Link href={`/person/1234`}><h1>{person.data[0].firstname}</h1></Link> */}

     <Link href={`/person/${person.data[0].firstname}`}> 
           <h1> I am {person.data[0].firstname} of Static route</h1> 
     </Link>

   </>
  )
}

export default PersonPage



/* NOTES

JSON formater Website

ye aik website hai jisme ham Api ka url dey kar us se get kiyye huy data ko Tree ke format mein kar ke alag alag har aik 
property ko check kar sakty hain step by step 


href={"/person/1234"}

dynmic page ke andar likhy huy naam pe link laga kar ham ye keh rhy hain ke jab bhi us naam pe click ho to (/) local host 3000
ke andar (person/) ke static folder ke andar aik dynamic segment (1234) dey diyya kisi bhi naam se to iski wajah se [id] ka dynamic
folder ke andar likha code chal jaega. 


<Link href={`/person/${person.data[0].firstname}`}> 
      <h1>{person.data[0].firstname}</h1> 
</Link>

jab bhi koi h1 ke andar likhy naam ke opar click kary to to usy (href) andar back tiks laga kar uske zariye (/) local host 300 
ke andar (person) ke andar ${person.data[0].firstname} isi naam ka browser pe segment bana kar dynamic page ke andar likha code chala do. 






*/