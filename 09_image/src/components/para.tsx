import React from 'react'

function Para(props: {myName: string, func: (p: any)=>void }) { // (3)=> yahn par ham us function ko parameter mein receive kar rhy hain uski data-type ke sath.

    props.func("Hello Home Component. I am Your Child")  // (4)=> or yahn par ham us function ko get kar ke usy value assign kar ke chala rhy hain. Or ye value component se Home page mein bheji jaa rhi hai.

  return (
    <>
        <h1>I am {props.myName} </h1>
    </>
  )
}

export default Para
