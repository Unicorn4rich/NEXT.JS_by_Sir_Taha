import Link from "next/link"


function NestedProduct() {

  return (
    <>
    <div>I am Nested Product page</div>
    <Link href={"/product1"} replace> Back</Link>
    </>
  )
}

export default NestedProduct