import Image from "next/image";

export default function Home() {
  return (
    <></>
  );
}



/* NOTES

API => Application Programing Interface

api se ham 2 websites ke beech comunication krwa sakty hain bhaly aik website alag lamnguage pe bani hui ho or dosri
alag pe unke beech comunication Json ki form mein krwaty hain. 
hamne chrome pe aik url likh kar request bheji wo gai data base server ke pass or data base server ne check kiyya ye data mere 
pass hai to usne phir aik respose mein us data ko (Json Object) bana kar hamen dey diyya or hamne usy browser pe dekh liya.


Crud 
Http methods

1. Get request     => Read
2. Post request    => Create
3. Put request     => Update
4. Delete request  => Delete
5. Patch request   => 


Book API Link =>  https://simple-books-api.glitch.me
Product Order all Authentication process 


1. Get request url => https://simple-books-api.glitch.me/books/6

Is request mein endpoint laga kar hamne books ke data mein se book number 6 ko dekha apni screen par.


2. Post request url => https://simple-books-api.glitch.me/api-clients

Is request ko Post par bhej kar hamne Authentication mein khud ko registerd krwaya Body ke andar Json box mein apna (Name) or (Email) dey kar
or jese hi hamne khud ko registerd hamen aik unique token mila purchasing ke liye Token => "accessToken" = sirf ye number chahiye honge (0061a504d46c7bdf8f6ff0564e4707e86491d8fa664c62c073890707ef8f0bf3) 


3. Post request url => https://simple-books-api.glitch.me/orders

Is request se ham order kar rhy hain apna product order send karne se pehly iske (Auth) option ke => (Bearer Token) ke box ke andar token paste kar
denge wo wala jo hamen Authentication mein mila tha. or usje sath waly (Body) ke option ke andar json box mein ham apna (Name) or book ka (Id) number 
denge jo hamen khreedni hai => 

{
"bookId": 6,
  "customerName": "Ajju"
}  

result order created succesfully =>

{
  "created": true,
  "orderId": "ecH6z8P6xC5KzIl3el1cB"
}


Ab ham Get request se apna order dekhenge jo hamne kiyya hai.

4. Get request url => https://simple-books-api.glitch.me/orders

ab ham Get mein ye url dey kar or (Auth) ke andar => (Bearer) mein token code past kar denge => (0061a504d46c7bdf8f6ff0564e4707e86491d8fa664c62c073890707ef8f0bf3) or
send request karenge to hamen result mein hmare name se diyya hua order hamen show ho jaega.

Order details result =>

[
  {
    "id": "ecH6z8P6xC5KzIl3el1cB",
    "bookId": 6,
    "customerName": "Ajju",
    "createdBy": "1828ed12e8dc1359b5c2e7b9197cb46a162403ade096590db333bb261392e13d",
    "quantity": 1,
    "timestamp": 1732719679115
  }
]


multiple orders bhi kar sakty hain thundar tab 2 pe  aa kar wahn (Post) url bhi dala hua hoga (Auth) mein Token bhi already moujod hoga  iska ilawa
(Body) ke andar jo hamne book id or apna name likha hoga wahn jaa kar book id wo likh deni hai jo book chahiye phir dubara se (Send) request kar deni hai
or 3rd waly thunder mein Get request kar ke us url ko chala denge or result mein hamen 2sra order bhi show ho jaega.

result =>

[
  {
    "id": "ecH6z8P6xC5KzIl3el1cB",
    "bookId": 6,
    "customerName": "Mithoo",
    "createdBy": "1828ed12e8dc1359b5c2e7b9197cb46a162403ade096590db333bb261392e13d",
    "quantity": 1,
    "timestamp": 1732719679115
  },
  {
    "id": "TCco2g6o7jwhBGzF7nkjE",
    "bookId": 1,
    "customerName": "Ajju",
    "createdBy": "1828ed12e8dc1359b5c2e7b9197cb46a162403ade096590db333bb261392e13d",
    "quantity": 1,
    "timestamp": 1732722469811
  }
]


agr hamen multiple orders mein se kisi aik specific order ko dekhna ho aisy dekhenge

Get request url mein order ke sath product id ko dey kar send karenge or (Auth) ke (barear) mein token ko likh denge to hamen sirf aik specific
product show hoga => https://simple-books-api.glitch.me/orders/TCco2g6o7jwhBGzF7nkjE


ab ham apne diyye huy order ko update karenge

Patch rquest url => https://simple-books-api.glitch.me/orders/ecH6z8P6xC5KzIl3el1cB

apne product ki deatis ko update karne ke liye ham patch url mein orders ke sath us product ki id likh denge jise update karna hai or (Auth) ke
(barear) ke andar token bhi laga hona chahiye iske bad ham (Body) ke option mein aa kar aik object mein new name create karna hai jis se ham replace
karna chahty hain phir send request uske bad (Get) request kar ke dekh lenge product mein se name update hua ya nahi. 


ab ham apne product order ko delete karna seekhenge

Delete rquest url => https://simple-books-api.glitch.me/orders/ecH6z8P6xC5KzIl3el1cB

Is url base url ke andar hamne orders ke sath product id dey di jis product ko hamne delete karna hai (Auth) ke (Barear) mein token lgana lazim hai
uske bad Send request kar deni hai phir base url ke sath orders ko laga kar (Get) kar ke dekh lenge ke hmara product order delete hua ya nahi. 


*/