"use server"  // isko hamne server component isliye bnaya kiyun ke ye client compoent se data aa rha hai or client component
// ka data direct ham server par nahi bhej sakty usy pehly server compoent bana kar phir server par wo data bheje gay.  


export async function registerClient(clientName: any, clientEmmail: any){  // ye function use se get kiyye huy (name) or (email) ko yahn laa kar api mein registerd krwa rha hai.

    const response = await fetch("https://simple-books-api.glitch.me/api-clients", {   // ural request for signupt with end point
        method: "POST",  // post method jo ke api main jaa kar data create karega. 
        headers: {      
            "Content-Type": "application/json",  // isme ham api server ko btatay hain ke ham jo data bhej rhy hain wo json string mein hai to tum usy json samjh kar hi handle kar lena.
        },

        body: JSON.stringify(  // data ko json string mein convert kar ke bhej rhy hain
            {
             "clientName": clientName,     // input ke andar use ne jo name enter kiyya tha ye wahi name yahn laa kar registerd krwa rhy hain api main.
             "clientEmail": clientEmmail,  // input ke andar use ne jo email enter kiyya tha ye wahi email yahn laa kar registerd krwa rhy hain api mein.
            }
        )

    })


    if(response.status === 409){   // agr response mein hamen 409 ka erorr mily to ye code run krwa do.
        return ("Client already exists with this email")
    }

    if(!response.ok){    // agr api se response hamen succesfull koi jawab nahi milta to ye condition run krwa do.
        return ("Failed to register client")
    }

    const data = await response.json();  // input se name or email ka data post karne ke bad jo hamen accesToken milega wo yahn aa kar milega.
    return data.accessToken      // yahn par ham data ke andar jo accesToken hamen milega hoga usy nikal kar retrun karwa rhy hain taky is function ke bahar ham isy use kar saken. or isme hamen token object mke andar nahi milega balke uski pure value milegi.
}