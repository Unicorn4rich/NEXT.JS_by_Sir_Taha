import Image from "next/image";

export default function Home() {
  return (
   <></>
  );
}



/* NOTES
                                  To_Create
1. ShipENgine => signup
2. ShipENgine => login
3. Select free payment method
4. sendBox Api key => TEST_YriaSd1fj8Kh2OwBWCs3gIVs4U0omjyTDPefKfhZh6M
5. Thunder client => Get request
                    Method: Get
                    Url: https://api.shipengine.com/v1/carriers
                                     Headers
                       API-key          =        Your_api_key                
                      Content-Type      =        application/json        
 


                      To_Read

1. New thunder client Tab
               Method: POST
               Url: https://api.shipengine.com/v1/labels
                                     Headers
                       API-key          =        Your_api_key                
                      Content-Type      =        application/json  
                                      Body

                                      
Everything is changeble
{
  "shipment": {
    "carrier_id": "se-1587135",              => change id (se-1587135) from Get request method paste here
    "service_code": "usps_priority_mail",    => change sC (usps_priority_mail) from Get request method paste here
    "ship_to": {
      "name": "Shoaib",                      => Name change 
      "phone": "+1 444-444-4444",
      "address_line1": "525 S Winchester Blvd",
      "city_locality": "San Jose",
      "state_province": "CA",
      "postal_code": "95128",
      "country_code": "US",
      "address_residential_indicator": "yes"
    },
    "ship_from": {
      "name": "Alex bhatti",
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

visit for body code => Create a Shipping Label


*/
