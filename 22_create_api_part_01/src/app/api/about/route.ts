import { NextResponse } from "next/server";


// example GET Request 1

// export function GET(){            // ye GET api wali rquest hai isliye is function ko bare alphabet mein likhna hoga.
//     return new NextResponse("Hello Shoaib") 
// }

// Output: string value simple hello world return hogi or browser par iska html aik pre tage mein rakha hua milega.



// example GET Request 2
export function GET(){            
    return NextResponse.json({"message": "I am get request"})  // API ki GET request pe iska output show hoga.
}


// Post request
export function POST(){
    return NextResponse.json({"message": "I am post request"})
}


// PUT request
export function PUT(){
    return NextResponse.json({"message": "I am put request"})
}


// DELETE request
export function DELETE(){
    return NextResponse.json({"message": "I am delete request"})
}