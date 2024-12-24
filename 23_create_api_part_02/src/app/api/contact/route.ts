import { NextRequest, NextResponse } from "next/server";




// example Get request1

// export function GET(request: NextRequest){  // 1 query parameter se naam aega.

//     // console.log("😁",request )

//     let tokenId = 100000000; // 4 wo id yahn set hogi

//     const userName = request.nextUrl.searchParams.get("name");  // 2 yahn save hoga

//     if(userName){  // 3 agr wo naam hua to usko aik random id milegi.
//         tokenId = tokenId + (Math.random() * 1 + 10)
//     }

//     return NextResponse.json({ message: `Welcom ${userName}, your token is ${tokenId}` })  // 5 uske bad ye line chalegi return ho kar.
// }


//<---------------------------------------------------END------------------------------------------------>
// example Get request 2 => SHow


export function GET(request: NextRequest){  // 1 query parameter se naam aega.

    const userName = request.nextUrl.searchParams.get("name");  // 2 yahn save hoga

    return NextResponse.json({ message: `Welcom ${userName}` })  // 3 uske bad ye line chalegi return ho kar.
}


//<---------------------------------------------------END------------------------------------------------>
// example POST request 1 => Add


// export function POST(request: NextRequest){  // query parameter se value aai

//     // console.log("😍", request);

//     const myName = request.nextUrl.searchParams.get("name")

//     return NextResponse.json({"message": "I am Post request", myName: `${myName}`});
// }


//<---------------------------------------------------END------------------------------------------------>
// example POST request 2 => Add

export async function POST(request: NextRequest){  // thunder se post request karte huy body se value aai.

    const body = await request.json()  // request ko jab ham json se readble bnaty hain usy lagta hai time isliye await lgaya.
    // const {name, age} = await request.json()  // direct destructre

    // console.log("😈 POST ki body", body)

    const {name, age, course, day, id} = body;  // destrucre

    return NextResponse.json(
        {
            "Id": id,
            "Student Name": name,
            "Age": age,
            "Course": course,
            "Day": day
        });
}


//<---------------------------------------------------END------------------------------------------------>
// example PUT request 1 => Update

export async function PUT(request: NextRequest){  // 1 value update karne ke liye aik json object aega name ka 

    let userName = ""  // 3 aik empty veriable  bnaya ya old name rakha
    const {name} = await request.json(); // 2 us json object ko destructure kar ke name ke veriable mein rakha.

    userName = name  // 4 destrcure kiyye huy name ko add kar diyya userName ke empty varibale mein.

    return NextResponse.json({userName})  // 5 yahn par us name ko retrun karwa ke show krwa diyya.
} 


//<---------------------------------------------------END------------------------------------------------>
// example Delete request 1 => Htana

// export function DELETE(){
//     return NextResponse.json({message: 'User Deleted Succesfully'})
// }