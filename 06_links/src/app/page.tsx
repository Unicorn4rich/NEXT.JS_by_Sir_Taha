import Link from "next/link";

/* props ={                   // ye aik object hai
        name: string
        children: ReacrNode;
        params: {             // ye props ki property hai lekin ye khud bhi aik objet hota hai
        id: string;           // Dynamic ka segment jab ham get karte hain to wo props.params.id ke andar hota hai or ye id hmara folder tha [] wala
        }

        destrutre kar ke use karte hain ham params ki property curly braces {params} mein warna hamne props.params.folder-name likhna
        parega
*/


export default function Home(props: any) {
  return (
    <>
     <h1>I am Home Page</h1>

     <Link href={"/product1"}>Product</Link>

    </>
  );
}



/* NOTES

download (React + ES7) Extension from VS CODE

is extension se hamen (rfce) likhne se automatic bana bnaya component mil jata hai.


<Link></Link> => import Link from "next/link";

link ko chlany ke liye (Link) ko import karna zarori hai warna link kaam nai karega.


<Link  href={"/product1"}  >Product</Link>

Link ke andar href laga kar usme (/) lgaenge to Link khudi samh jaega ke (app) ke folder ke andar jana hai. or uske bad
(product1) likhenge jo ke (app) folder ke andar aik routing ka folder hai ab ham is link se ye keh rhy hain tum par jab bhi
click ho tumne (app) ke folder ke andar se (product1) ke folder ke andar wali page.tsx ki file ka code chaka dena hai.

<Link href={"/"}  >Back to Home</Link>

is link par click kar ke (/) ki wajah se ham back aa jaenge (app) folder mein or iske main wali (page.tsx) ki file pe wapas
aa jaenge.


href={"/product1/nested-product"}

link par click karne se mujhe (/) app ke folder ke andar ley jao or uske andar jo (product1) ka folder hai (/) uske bhi 
andar ley jao or usme (nested-product) ka jo folder hai usy chala do.


<Link href={"/product1"} replace> Back</Link>

jab jab ham link ke andar koi adress dey kar uspe click karte hain us file pe jane ke liye to tab tab browser mein history
create ho jati hai ke hamne kuvh new search kiyya browser pe matlab aik page se dosry page pe gaye lekin agr (replace) ka
atrribute laga den jis link pe to us link pe click karne se new history dubara nai banegi balke hmari purani wali history
se hamen wo page khol ke diyya jaega.

about => _about

app ke folder ke andar about ka folder bana kar uspe routing kar sakty hain lekin agr us folder ke naam se pehly 
underscore ( _ ) likh denge to us folder ko ham (local host 3000) pe nahi chala paenge kiyun ke ab wo folder private ban chuka hai.
iska use aksar ham tab karte hain jab app ke folder ke andar component bana kar use karna chahty hain lekin usy routing mein 
shamil nahi karna chahty.


app => (not-found.tsx)

ye jo by-default Error mag ata hai (404 etc...) usko ham custimize kar ke apna khud ka error msg bhi bana sakty hain jab
bhi local host pe koi aisi activity hogi jispe error aega to wo error hmara bnaya hua show hoga har jaga. to us error ko
bnany ke liye app ke folder ke andar aik (not-found.tsx) ki extension bana denge uske andar aik component bana kar usme
msg likh denge jo show krwana chahty hain to wahi msg show hua karega.


product1 => (not-found.tsx)

jab bhi product ke andar kisi aisy route ko search kyya jaega jo ke uske andar hai hi nahi to user ko jo error dikhana chahty
hain wo sirf isi (product1) waly route ke andar jitne bhi routes hain or files hain un sab ke error msg mein yahi error show hoga
or is error msg ko create karne ke liye ham is folder ke andar aa kar (not-found.tsx) ki extension bana kar
usme component create kar ke uske andar error msg likh denge jo ham show krwana chahty honge jab bhi product route se related
kuch masla aye.
but agr kisi speecific route ke folder ke liye error msg bana rhy hain to uske liye 2 cheezen or add karna hongi 
1st (import {notFound} from "next/navigation") 2nd us component ke andar ye likh denge if(true){notFound()}
 

Nested layout.tsx

ye file ham route ke liye alag se bhi bana sakty hain or ye jis route mein bnaenge sirf usi mein kaam karegi or uske andar
moujod baqi jitne bhi children honge unke liye kaam karegi. main wali layout ki file se sirf RootLayout() ka component copy
kar ke new layout.tsx mein rakhenge. 


*/
