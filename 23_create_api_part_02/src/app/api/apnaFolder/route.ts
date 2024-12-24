import { NextRequest, NextResponse } from "next/server";


let All_data: any = [];

//<---------------------------------------------------END------------------------------------------------>
// example Get request 2 => SHow


export function GET(){  // 1 query parameter se naam aega.

    return NextResponse.json(All_data);  // 3 uske bad ye line chalegi return ho kar.
}


//<---------------------------------------------------END------------------------------------------------>
// example POST request 1 => Add

export async function POST(request: NextRequest){  // thunder se post request karte huy body se value aai.

    const body = await request.json()  // request ko jab ham json se readble bnaty hain usy lagta hai time isliye await lgaya.
    // const {name, age} = await request.json()  // direct destructre

    // console.log("😈 POST ki body", body)

    const {name, age, course, day, id} = body;  // destrucre

    const indexNumber = All_data.findIndex((user: any) => user.id == id);

    if(indexNumber == -1){

        All_data.push(body);
        return NextResponse.json(
            {
                "Id": id,
                "Student Name": name,
                "Age": age,
                "Course": course,
                "Day": day
            });
    }
    else{
        return NextResponse.json(`Your ${id} already Exsits`)
    }
}



//<---------------------------------------------------END------------------------------------------------>
// example PUT request 1 => Update

export async function PUT(request: NextRequest){  

    const {name, age, course, day, id} = await request.json()

    const indexNumber = All_data.findIndex((user: any) => user.id == id);
   
    if(indexNumber !== -1){
        if(name){
            All_data[indexNumber].name = name;
        }
        if(age){
            All_data[indexNumber].age = age;
        }
        if(course){
            All_data[indexNumber].course = course;
        }
        if(day){
            All_data[indexNumber].day = day;
        }
        if(id){
            All_data[indexNumber].id = id;
        }
    }


    return NextResponse.json(
        {
            "Id": id,
            "Student Name": name,
            "Age": age,
            "Course": course,
            "Day": day
        },
        // {
        //   "User Updated Succesfully"
        // }
    );
} 


//<---------------------------------------------------END------------------------------------------------>

export async function DELETE(request: NextRequest, {params}: {params: {id: number}}){

    const {id} = await request.json()

    const indexNumber = All_data.findIndex((user: any) => user.id == id);
   
    if(indexNumber !== -1){
        All_data.splice(indexNumber, 1)
        return NextResponse.json({message: 'User Deleted Succesfully', id})
    }
    else{
        return NextResponse.json({message: 'Not Found', id})
    }
    
}