import BookCards from "./components/Book-cards";

export default function Home() {
  return (
    <>
    
    <h1 className=" text-center text-4xl font-bold mb-8 ">Welcome to Book Store</h1>

    <BookCards/>

    </>
  );
}


/* Notes

Lucide icons => icons website


useclint component ke andar ham async await use nahi kar sakty.
or client component se aya data yani name or email direct usi same compoent mein nahi rakh sakty.
 

Status: 201
request succesfully created 

acces token object ke andar ata hai.
{
  "accessToken": "48434a038f25d7087caff23b35ca24b06ffcc1112ad543be7fa0d8cc19b54f75"
}


Status: 409
already is detail se koi add hai apni details change kar dbara try karen.

{
  "error": "API client already registered. Try a different email."
}
 







*/