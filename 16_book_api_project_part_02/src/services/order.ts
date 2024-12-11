"use server"


export async function placeOrders(token: any, bookid: any, clientName: any ){

    const response = await fetch("https://simple-books-api.glitch.me/orders", {  // await use kiyya jabhi aik async function mein code ko rakhna para.
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    
        body: JSON.stringify(
            {
                "bookId": bookid,
                "customerName": clientName
            }
        )
    })


    if(response.status !== 201){
        return ("Failed to place order");
    }

   const data = await response.json();
   return data;

}

