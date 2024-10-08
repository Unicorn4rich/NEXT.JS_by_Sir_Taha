/** @type {import('next').NextConfig} */

const nextConfig = {  // By-default Create hua huwa hoga bas hamen iske andar ki sari property`s khud likhni hain.

    images: {                       // Ye (images) aik aisi property hai jo khud aik object hai.
      rePmoteatterns: [             // Ye (rePmoteatterns) aik array hai.
        {                           // Ye {} Empty Object hai.
          protocol: "https",        // Isme ham (https) ya (http) dono mein se jo Error ke andar (src props) ke agy likha hua hoga usy copy kar ke isme likh denge.
          hostname: "shorturl.at"   // hostname ke aagy double quations ke andar jo likha hua aa rha hoga usy copy kar ke yahn past kar denge.
        }
      ]    
    }        
};

export default nextConfig;
