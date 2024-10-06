

function Message(){

     let array = ["Apple", "Orrange", "Banana",];  // yahn ham looping kar rhy hain.

    return(
        <>

        <h1>I am Message Component</h1>

        {/* <h1>Taha</h1>
        <h1>Ahmed</h1> */}


{/*    <ul>                    =>      yahn par hamen khud se har aik li likhna par rha hai  
            <li>Apple</li>
            <li>Orrange</li>
            <li>Banana</li>
        </ul>      
                                                                                       */}

         <ul>     {/* yahn par hamne aik aik value ko array se get kiyya usko index number diyya or li ke andar un values ko return krwaya  */}
        { array.map((item, index) => {return <li key={index} > {item} </li> }) }   {/*  or li ke starting tag mein un values ko aik aik unique index assign krwa diyya  */}
        </ul>                                          
        
        </>
    )
}

export default Message





/* NOTES 

{ array.map((item, index) => {return <li key={index} > {item} </li> }) }

array mein se aik aik value ko alag alag (item) get kiyya or har aik value ko aik unique (index) number dety gaye or unko {item}
<li></li> mein rakh kar return krwaty gaye ( key={index} ) Next.js ko difrenciat krwany ke li ke opening tag mein key ke andar
hmne props pass kar diyya index number ka taky next.js har value ko alag se bhi acces kar saky. 

*/