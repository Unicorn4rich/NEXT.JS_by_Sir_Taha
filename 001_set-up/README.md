
NEXT.JS SET-Up 

install node 
install npm
install npx


Step 1: npx create-next-app@latest
Create karo Next ke app ke app ko jo ke latest ho.


Step 2: project named? ... folder-name  =>   koi sa bhi name likh sakty hain lekin choty alphabet mein.
apne project ka naam likhna hai jo ke bagher Capital alphabet latters or bagher space ke hona chahiye.


Step 3: TypeScript? ... => (Yes)
yahn pocha jaa rha hai kya ham Typescript ko Use karna chahty hain? agr haan to Yes karenge.


Step 4: ESLint? ...Yes

Kya Ham ESLint? ka use karna chahty hain apne Project mein? agr han to Yes karenge.
Ye standards ko set karta hai. (ESLint) ye best prectices or clean code likhwata hai ke production time standard ke 
hisab se agr kahi hmara code sahi tariqe se nahi likha hua to ye error dey dega jese Typescript deta tha. 

Step 5: Tailwind CSS? ... => (Yes)

Kya ham Tailwind css ka use karna chahty hain apne project mein? agr han to Yes karenge.


Stept 6: `src/` directory? » => (Yes)

ye poch rha hai ke ap jo bhi kaam karna chah rhy hain kya wo src ki darectory mein karna chahty hain ? => Yes


Step 7: App Router? (recommended) » => (Yes)

Kya ham apne project mein App Router? ko use karna chahty hain ? agr haan to Yes karenge.
route jo hota hai usy ham alag alag pages ko kehty hain or isme ham aik folder bnaty hain or iska page khud hi
Create ho jata hai. 


Step 8: import alias (@/*)? => (No)

Ye poch rha hai ke ham jo import export karte hain usme hamen (@) sign chahiye ya nahi ? agr to No karenge.
import alias ko agr yes karenge to hamen src likhna nahi parega jese hi @ lgaenge wo khudi samjh jaega ke ham
src folder ki baat kar rhy hain


Step 9: cd folder-name
change directory matlab ham pehly jahn bhi thy ye command likhne se helloworld naam ke folder mein aa jaenge.

Step 10: cd ..
is se ham wapas dubara se back aa jaenge us folder mein jahan ham thy.

Step 11: code -r folder-name
ye command hmare VS ko band karega khudi or usy darect helloword ke folder mein open kar dega.

Step 12: code -r folder-name
ye command darect VS code ko band kar ke usy (helloword) ke folder ke andar open kar degi.

Step 13: npm run dev
Terminal mein aik link bana hua aa jaega uspe ham control button + click karnge to wo hamen live server pe jaega jahn hamen hmara
content show hoga bana hua. or is coomand ke chlany se hmari files mein aik .next ka folder create ho kar aa jaega.

control + C

terminal agr chal rha hai to usy rokny ke liye ye 2no buttons aik sath press karen.


FOLDERS & FILE EXTENSIONS NAMES OR UNKA KAAM.....


node_modules

ham jo bhi packges install karte hain wo sary ke sary is (node_modules) folder ke andar aty hain
or is folder ko ham github pe bhi upload nahi karte .gitignore ki file mein rakh dety hain.

.gitignore

is file mein ham cheezen rakhty hain jo hamen github par upload nahi karni hoti jese => (node_modules)

package-lock.json + package.json

ye dono files dependencies wali hain (package.json) ke andar line number 11 pe jo [dependencies] hongi wo wahi hongi
jo hamne download ki hongi.
[devDependencies] => develper dependencies is section ke andar wahi dependencies hongi jo hamen code likhte waqt help karti hain.

package-lock.json

is file ke andar packages ke versions or dependencies lock ho jati hain matlab save ho jati hain isliye kiyun ke hamne in
versions ko use karte huy ye webpage bnaya tha ye aik record ki shakal mein save rehti hain hmesha.

package.json => script 4 lines

("dev": "next dev",)

package.json ke andar script ke andar line number 6 pe ye dependency hai jab bhi ham (npm run dev) karte hain script ke andar
is line ki wajah se hmara code chalta hai. is line ko agr ham hata den to ye command work nahi karegi.

"build": "next build",

is line ka matlab hai hmari jo web application hai usy production ke liye ready kardy.

"start": "next start",

is line ka matlab hai ke production server ko start kar dy.

"lint": "next lint"



postcss.json

ye file tailwind css ke time pe banti hai

README.MD

ye file hamen kuch cheezen read karne ke liye deti hain or isme ham kuch bhi likh kar rakh sakty hain.

tailwind.config.ts

ye file tailwind ki configration ki hoti hai is file ki zrorat hamen isliye pari kiyun ke (Tailwind CSS) ki compilation
normal (CSS) mein hoti hai. iske andar 3 cheezen bohut important hoti hain pehli line number 4 pe
[content] ka section hota hai dosra line number 9 pe [theme] ka or teesra line number 17 pe [plugins] ka.
content section => ke andar ham ye btaty hain ke hamen kon kon se folder mein tailwind css use karna hai 

(1) => "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",

iska matlab ye hai ke (./) hmare folder-name ke andar jo hamne bnaya hai uske andar jo (src) hai us ke bhi folder ke andar
(pages) ka jo folder hai uske andar (**) jitne bhi folder hain (*) uske andar jitne bhi folder hain un tamam ki tamam 
extensions pe {js,ts,jsx,tsx,mdx} tailwind css apply kardo.

(2) =>  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",

iska matlab hai ke jo folder hamne bnaya hoga uske andar src ka jo folder hai uske andar components ko jo folder hai usme
jitne bhi folders hain uske andar jitni bhi files or folders hain jinki extensions Javscript, Typescript, or baqi ki hain 
un sab pe Tailwind CSS apply kardo.


(3) => "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

iska bhi matlab wahi hai hmare bnaye huy folder ke andar jo src ka folder hai uske andar jo app ka folder hai usme
jitne bhi folders hain uske andar jitni bhi files or folders hain jinki {extensions Javscript, Typescript, etc..} baqi ki
hain un sab pe Tailwind CSS apply kardo.

tsconfig.json => "moduleResolution": "Node",

is file ke andar jaa kar line number 10 pe moduleResolution ke andar jo (bundler) hai usko hata kar (node) kar dena hai.
ye change isliye karte hain kiyun ke bundler ki settings compatible nahi hoti or jo node hai uski settings compatible hoti hain. 


SRC FOLDER => 

fonts

is folder ke andar ham fonts ko rakhty hain jinko download kar ke rakha hota hai website par use karne ke liye.


favicon.ico

is folder ke andar ham icons ko rakhty hain jinko ham website pae use karna chahty hain.


globals.css

is file ke nadar ham jo bhi CSS likhenge wo Tamam ki Taman jaghon par apply ho jaegi kiyun ye main file hai CSS ki
or isme ham simple (CSS) or (Tailwind CSS) dono apply kar sakty hain.

@tailwind base;        => jitni bhi CSS ki apni property`s hain un sab ko khatam kar do.
@tailwind components;  => Tailwind apply karo iske pass apni bohut sari property`s components ke pass hoti hain unko apply karo.
@tailwind utilities;   => ye utilities components ko support karne ke liye hoti hain matlab jab ham green color ya koi bhi color
                       apply kar rhy hoty hain to us green color ke alag alag colors hamen milty hain un verients ko utilities ley kar ati hai ye
                       matlab aik cheez jo components mein moujod hai uske alag alag verients hamen utilities ke zariye milty hain.


layout.tsx

ids file se hmari website ka (header) or (footer) fix rhega matlab jab bhi ham website ke andar kisi option ya button pe click
kar ke uske dosry page par jate hain to us page par bhi ye 2no header or footer fix rahenge. iska faida ye hai ke website ke har
aik page ke liye alag se unke liye header footer bnany ke liye code likhna nahi parega yahi same main page wala code hi har jaga chalega. 
  

page.tsx = (ts) typescript, (x) xmal =>  ye main file hai jisme ham apna sara kaam karenge.

is extension ke andar ham typescript or html dono ko aik sath likh sakty hain. or (tsx) ki file ke andar ham kuch bhi bnaenge to
wo aik component kehlaega jiska name hmesha (PascalCase) mein hoga (export default) ho rha hoga or ye (return) krwa rha
hoga (single HTML element) ko jiska matlab hai ye sirf aik hi element ko return karega uske ilawa jitne bhi ho kisi ko nahi. 







This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.




