
//              object
function Shoaib({name, lastName}: any): JSX.Element {   // is component ka parameter jo argument ki values recived karega wo aik object ki tarhn apne andar key value pairs bana kar rakhega. 
    return <h1>My Name is {name} {lastName} </h1>     // is parameter ki values aik object mein band milegi isliye ham isme se object ki tarhn value nikalenge.
  }
  

  export default Shoaib  // is Component ko bana kar hamne export kar diyya ab dosri file mein jaa kar jahn hamen is code
// ko use karna hai jese (page.tsx) mein import krwa lenge to is file ka code us dosri file ke code ke sath attaechd ho jaega. 


  // Typescript ka function or Next.js ka function 2no same hain or apas mein kzn lagte hain bas thora bohut faraq hai inmen.
  
  // Send => Argument  => <Taha arg={"Taha"} argument ki values object ki values ki tarhn key value pairs mein bani hui send hongi => {arg: "Taha"} aisy.
  // rec  => Parameter => Props => Ye aik Object hai
  // use  => Call