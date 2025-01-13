"use server"


//-------------------------------------Get request function------------------------------------
export async function getReq(){
   const Response = await fetch("https://api.shipengine.com/v1/carriers", {
    method: "GET",
    headers: {
        "API-key" : process.env.NEXT_PUBLIC_SHIPENGINE_API_KEY as string,
        "Content-Type": "application/json"
    }
   })

   const data = await Response.json()
   return data;  // fetch kiyya hua data return karega function ko jahn pe chal rha hoga.

  // console.log("🤑", data); ceck data fetch wala
}




//-------------------------------------Post request function----------------------------------------

interface Data {
    to_name: string,
    to_phone: string,
    to_address: string,
    to_city: string,
    to_state: string,
    to_postal: string,
    to_country: string,
    to_residential: string,
}

export async function postReq(item: Data){

    const {to_name, to_phone, to_address, to_city, to_state, to_postal, to_country, to_residential} = item

    const Response2 = await fetch("https://api.shipengine.com/v1/labels", {
        method: "POST",
        headers: {
            "API-key" : process.env.NEXT_PUBLIC_SHIPENGINE_API_KEY as string,
            "Content-Type": "application/json"
        },

        body: JSON.stringify(  // body ko json string mein bana kar bheja hai.
            {
                "shipment": {
                  "carrier_id": "se-1587135",
                  "service_code": "usps_priority_mail",
                  "ship_to": {
                    "name": to_name,
                    "phone": to_phone,
                    "address_line1": to_address,
                    "city_locality": to_city,
                    "state_province": to_state,
                    "postal_code": to_postal,
                    "country_code": to_country,
                    "address_residential_indicator": to_residential,
                  },
                  "ship_from": {
                    "name": "Shoaib Ahmed",
                    "company_name": "Example Corp",
                    "phone": "+1 555-555-5555",
                    "address_line1": "4301 Bull Creek Rd",
                    "city_locality": "Austin",
                    "state_province": "TX",
                    "postal_code": "78731",
                    "country_code": "US",
                    "address_residential_indicator": "no"
                  },
                  "packages": [
                    {
                      "weight": {
                        "value": 20,
                        "unit": "ounce"
                      },
                      "dimensions": {
                        "height": 6,
                        "width": 12,
                        "length": 24,
                        "unit": "inch"
                      }
                    }
                  ]
                }
              }
        )
    })



    const data2 = await Response2.json()
    console.log("👨‍👩‍👧‍👦", data2) // succesfully fetched
}