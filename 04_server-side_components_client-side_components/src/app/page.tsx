import Component01 from "@/components/component01";

export default function Home() {
  return <>
         <h1>Hello I am Home Page</h1>

         <Component01/>
         </>
}






/* NOTES 

globals.css + layout.tsx

hamne global.css mein property`s likhi lekin wo hmary page pe apply nahi ho rhi uski wajah ye ho sakti hai ke hmari 
(globals.css) ko (layout.tsx) ki file mein import nahi krwaya gaya hoga. isliye ham isko (import "./globals.css") krwa
ke apni globals.css ki property`s ko code mein apply kar sakty hain.


Web-Page => (local-host 3000)

ham (page.tsx) file mein jo bhi code likhty hain wo directly web-page yani (local-host 3000) pe show nahi hota.
balke (page.tsx) ka code (layout.tsx) mein jata hai phir (layout.tsx) ka code (local-host 3000) mein ja kar show hota hai.
Assal mein hamne (page.tsx) ya dosry kisi bhi component mein na to css likhi hui hoti hai or na ham kisi component ko target
kar ke uspe css link krwa ke apply kar rhy hoty hain isliye hmary components (local-host 3000) mein direct show nahi hoty
balke jo (layout.tsx) ki file hai usme (gloabals.css) attached hoti hai matlab link hoti hai.
isliye hmary components jese ke (page.tsx) ho gaya wo pehly (layout.tsx) mein jate hain wahn unpe link hui huwi (CSS) apply 
hoti hai uske bad wo (local-host 3000) pe jaa kar show hoty hain apni css styling ke sath.


(layout.tsx) => ke andar ka code

layout.tsx ke andar line number 9 pe aik component bikhra hua tha (RootLayout) ke naam se usko hamne seedha kiyya or usko
ham step by step samjhty hain. (page.tsx) ki alag alg jitni bhi files hon wo sari ki sari (layout.tsx) se guzar kar hi  
(local-host 3000) mein jaa kar show hoti hain or agr hamne gloabals.css mein kisi font ka color ya size waghera change kar 
ke usy sari (page.tsx) ki files pe apply karna chahty hain to wo ho jaega kiyun ke sary pages layout.tsx mein aenge or wahn
un sab pe wo styling apply kar di jaegi. 



function RootLayout({children}:any) {
  
  return (

    <html lang="en">
      <body>

      <h1> I am Layout </h1>   =>  or yahn ham jo bhi likhenge wo gloabal.css ki tarhn sary ke sary pages pe constant rhega. 

      {children}  => hmara (page.tsx) hai. 

      <h1> again I am Layout </h1>  => ye bhi (page.tsx) mein har page pe constant rhega.
      
      </body>
    </html>

  )
}

export default RootLayout


return jo ham krwa rhy hain wo (HTML) tag ke andar (body) ka tag hai or uske andar (children) hai or ye jo component
ke andar {children} hai => ye (page.tsx) hi hai.
components ke folder se compoent files export ho kar (page.tsx) mein jati hain or (page.tsx) (layout.tsx) mein jata hai
or (layout.tsx) jata hai hmare (local-host 3000) ki screen pe.


RootLayout() => component from (layout.tsx) file.

is file ki HTML body ke andar jis children ko rakha gaya hai wo (page.tsx) ki file hai or iski limit bas is tak hi limited hoti hai
jab ke agr is children ke sath opar ya neechy (HTML, body) ke andar koi bhi code likh denge to wo sari ki sari (page.tsx) ki
files pe fix ho jaega kiyun ke jo code (layout.tsx) mein likhenge wo har page pe fix rhega jese ke (header) ya (footer) ho
gaya agr ham inko (layout.tsx) ke andar children => yani page.tsx ke sath likh denge to wo har page pe apne ap ap apply ho
jaenge bar bar code likhna nahi parega.   






*/