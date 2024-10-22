import React from 'react'

// hane is dynamic page ko jis naam ke segment se chlaya wo naam iske props ke andar aa kar save ho jaega.
function DynamicPage(props: {params: {id: string}}) {

  return (
    <div> I am {props.params.id} of Dynamic route </div>
  )

}

export default DynamicPage



/* NOTES

dynamic folder ko jab ham kisi bhi segment se chalaty hain to wo jo segment hai wo dynamic component ke paramater ke andar
laa lar store krwa sakty hain. 


props: { params: { id: string } }

(props:{}) khud aik object hai or iske andar hai (params:{}) jo khud bhi aik object hai or iske andar hai (id:string) ye jo
(id) hai ye dynamic folder ka naam likha hai jiske andar string ki value aegi  

*/