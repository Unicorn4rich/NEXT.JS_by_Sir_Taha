
const accessToken = '5ac71ed356e0030a9e2e9a2e3756118d4d9c612acd1e144885f9bd59110f2bfa'  // authentication krwany ke bad hamen ye Token mila.


export async function get_Api(){
    // API Calling
const response = await fetch("https://simple-books-api.glitch.me/orders", {

    method: "GET",  // request method
    headers: {      // isme ham bata rhy hain ye jo data hai isy (JSON) ki form mein hai hadnle kar lena.
      "Authorization": `Bearer ${accessToken}` 
    },
  
  });

   return (
    await response.json()
  )
}







