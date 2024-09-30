
//                 segment
function ProductId({params}: any) {  // isko Static Route kehty hain 
    return(
        <>
        <div>I am Product {params.id} page</div>
        </>
    )
}

export default ProductId


/* NOTES 

Dynamic Route => segment => (localhost:3000/product/product15)

(app) ke folder ke andar (product) ka folder hai or uske andar hamne dynamic Route bnany ke liye aik [id] ka folder bnaya hai
or iske andar aik (page.tsx) bnaya hai or iske andar hamne kuch bhi likh diyya. ab agr (local host 3000) ki screen par jaa kar
1st (/product) folder ke route ko acces karenge phir (/) laga kar ham koi sa bhi segment likh denge to hamen (local host 3000) ki 
screen pe wo code milega jo [id] ke folder ke andar likha tha. 

Dynamic Segment => Store (/product15)

product ke bad (/) laga kar ham kuch bhi segment likhenge wo hmare [id] ke folder ke andar page.tsx ke parameter mein aa kar 
save ho jaega or us parameter ko ham uske component ki body ke andar Destruture kar ke use karenge ({params}: any)  to hamen 
(local host 3000) ki screen pe wo segment print hua milega {params.id} ki wajah se. Result => [I am Product product15 page]
or agr ham [id] folder ka naam kuch or likh dety jese (shoaib) to hamen usi naam se {params.shoaib} likhne se segment ki value milti.


localhost:3000/product/laptop/revew/rating/stars

hmare pass sirf product ke bad aik hi dynamic route tha jisko hamne (/laptop) ke segment se acces kiyya lekin uske bad ke jo 
segments hain (/revew/rating/stars) inke routes hamne nahi bnaye huy lekin ham inhy local host pe search kar rhy hain jiski
wajah se hamen error mil rha hai kiyun ke inke routes hamne create hi nahi kary or agr create karenge to hamne step by step
sab ka route bnana parega (ratig,revew,stars) but ham chahty kuch aisa karen jis se hamen har aik route alag se create karna
na pary or jitne bhi extra segment the wo bhi chal jaen.


All segment => [...revews]

sary segments work karenge bagher unka route bnaye is folder ki wajah se => [...revews] or iske andar page.tsx ki file hai
ab ham local host pe route chala kar dekhty hain ye wala (localhost:3000/product/1000/revew) => (revew) segment add kiyya 
to uske andar page.tsx ki file ka code chal gaya jisme likha tha (I am All Segment Route) or ab ham muiltple segments likh 
kar dekhty hain => (localhost:3000/product/1000/revew/revew1/rating/stars) ye jitne bhi extra segment likhy hain un sab ka 
result screen pe bagher error ke wahi aya hai => (I am All Segment Route) 


({params}: any)  =>  {params.revews}

jitne bhi hamne extra segments search kiyye honge [...revews] is Dynamic route ki wajah se wo sary ke sary segments iske
component ke parameter mein aa jaenge distrutre ho kar local host screen pe print ho jaenge is [...revews] ke pager.tsx
ke code ke andar. results => (I am All Segment Route of revewrevew1ratingstars)     

Group Route => Alphabetical Order

hmare jo Routes hoty hain (app) ke folder ke andar wo bikhry huy hoty hain Alphabetical Order mein matlab (home) ka route 
kahn (about) ka kahn or baqi ke routes kahn lekin hamen inko group kar ke rakhna hai jese ke 3 routes apas mein conected hain
unko ham Alphabatical order mein dhondny mein preshani ho. 
ham aik folder bnaenge (app) ke andar jis mein printhices laga kar koi naam likh denge [(route-maneger)] or us folder ke andar 
wo Routes ke folder daal denge jis se hmare pass aik Group Route ka folder create ho jaega.

Folder => login,registerd,forget 

in 3een routes ka apas mein conention hain lekin ye alphabetical order ki wajah opar neechy apne apne alphbet ki series mein
aenge but ham inhy app mein (route-maneger) ke folder mein rakh group kar sakty hain taky hamen dhondny mein asaani ho or 
multiple routes ko manage kar sakty hain cleanly.  
or haan jab bhi hamen local host screen pe in 3eeno (login,registerd,forget) mein se kisi ko bhi segment mein acces karna 
hai to us se pehly hamen (group-route) folder ka segment likhny ki zrorat nahi hogi. ham direct (app) folder ke andar
(localhost:3000/login) likh kar acces karenge.


(group-route)

or agr ham is folder ke andar page.tsx ki file bana kar usme code likh kar local host par jaa lar isy routing ke zariye chlany
ki kohsish karen to ye nahi chalega kiyun ke is folder kaam sirf folders ko group karna hai apne andar koi file rakh kar usy 
run krwana nahi.






*/