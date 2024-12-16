import Link from "next/link"



export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center text-[32px] font-semibold">
    
        <Link href="/product"><h1>Taha</h1></Link>

    </div>
  );
}






/* NOTES

Get Started tab => command         existing p-ID
npm create sanity@latest -- --project 6vccy6wd                --dataset production --template clean

sanity ki website pe reh kar agr project create karenge to usy apne next.js mein aisy conect krwaenge uski ID=>(6vccy6wd) ke zariye.


manual typing => command       new project cresting
npm create sanity@latest -- --create-project "my new project" --dataset production --template clean

agr aik new project bnana hai wo bhi apne next.js ke folder ke terminal mein rehty huy to usy is tarhn bnaenge aik project naam dety huy (--create-project "my new project").


Project Num (1) name => sanity project
Project Num (2) name => ?



Dynamic Route

routes ham app ke folder ka andar bnaty hain or unhy link kar ke acces karte hain but ab hamne aik product folder ke andar
aik dynamic [proId] ke naam se folder bnaaya hai jiska data dynamicly change hoga 


href={`/product/${index}`}

product cards ke kisi bhi card pe click hoga to is refrence se hmara link (/) => (local-host-300) mein jaega phir (product) ke static
route ke andar jaega jis ke andar hamne click kiyya tha (/${index}) is se phir aik index pass hoga Dynamic route ko jo ke product ke andar hi
bana hua hai or is link ke andar ham index ke ilawa object data ki koi si bhi property ko likh sakty hain jese ke naam waghera ya kuch or. 


{params}: {params: Promise<{proId: number}>}

curly braces mein params ko destructre kiyya {params} uske bad (params:{}) khud aik object hai or ye object apne andar aik folder rakhta hai
(proId: number) or is folder ki jo data type hai wo number hai or iske bahar jo (Promise<>) likha wo isliye likha hai kiyun ke (proId: number)
ko any mein lagta hai time isliye ye params aik promise hai.


/product/proId?name=${item.name}

(/) => local-host-300 (/proId) uske andar dynamic page hai (?) query yani swal or yahn se hi query parameter start hota hai
name=${item.name} => name ke variable ke andar hamne object ke andar name ki jo value ha usy store krwa ke send kar diyyya href ke zarye.

isy query kehty hain hamne link href mein kaha product route ke andar jao or jab wahn kisi product pe click ho to (proId?) dynamic route chala do
question mark isliye lgaya kiyun ke ye aik query yani swal poch rha hai or hamne name ka variable bana ke usme object ka naam assign kar diyya => name=${item.name}
simply matlab ke hamne query paramter bana ke information send ki object name ki.


http://localhost:3000/product/proId?name=shoaib

query parameter ka use karne se hmare url mein jo params pass hua wo is tarhn ka hua => (name=shoaib) matlab ke ham
seedha seedha url mein apna object ka data pass kar rhy hain or url se hi us data ko nikal lenge
or ye sab ham isliye kar rhy hain kiyun ke index (params) mein ham click card ka index dynamic page mein bhejte thy or 
wahn pe 



searchParams

ye prop mutple data ley kar aa sakta hai props ke zariye lekin jo hmara (params) tha wo sirf single value ley kar ata hai.
simply ye ke agr hamen url mein koi lambi cheez yani koi bara data bhejna hai aik sath to ham (query?) ka use karty hain or agr 
hamen koi aik word bhejna hai to ham usy (params) mein bhej sakty hain








*/