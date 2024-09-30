import Link from 'next/link'
import {notFound} from "next/navigation"


function Product() {

    if(true){
        notFound()
    }

  return (
    <>
    <div> I am Product page</div>

    <Link href={"/"}>Back to Home</Link>
    <br></br>
    <Link href={"/product1/nested-product"}>Go to Nested Product Page</Link>

    </>
  )
}

export default Product