import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {

  types: [   // by-default iske andar ham jitne chahen schema bana sakty hain

    // for simple name change

    // {
    //   title: 'Hero Schema',  // screen pe show hony wala naam jo ke identify karne mein hmari help karega ke ye input schema section hai kis cheez ka.
    //   name: 'hero',   // sanity is schema ko is naam se pehchany ga ke konsa schema section hai.
    //   type: 'document', // ye input box ki help se document ready karta hai jis se hamen fields milti hain.
    //   fields: [         // ye field input box hai isme ham jitne input box bnana chahen bana sakty hain.
    //     {
    //       title: 'Enter Your Name',  // input box ki heading
    //       name: 'userValue',            // sanity is input box ke andar any wali value ko is naam se pehchan kar nikalega.
    //       type: 'string'             // input ke andar string data type ki value aa sakti hai.
    //     }
    //   ]       
    // }


//<----------------------------------------------------END------------------------------------------------>    

// for text schema
   {
      title: 'Hero Schema',  
      name: 'hero',   
      type: 'document', 
      fields: [
        {
          title: 'heading',  
          name: 'userHeading',           
          type: 'string'             
        },
        {
          title: 'Description',  
          name: 'desc',           
          type: 'string'             
        },
        {
          title: 'Button 1 Text',  
          name: 'btnOne',           
          type: 'string'             
        },
        {
          title: 'Button 2 Text',  
          name: 'btnTwo',           
          type: 'string'             
        },  

        {  // for image schema in field
          title: 'Poster',
          name: 'poster',
          type: 'image',
          options: {
            hotspot: true // <-- Defaults to false
          },
          fields: [
            {
              name: 'attribution',
              type: 'string',
              title: 'Atribute',
            },
          ]
        }


      ]       
    },


// for image schema
  //  {
  //   title: 'Hero Picture',
  //   name: 'heroPic',
  //   type: 'image',
  //   options: {
  //     hotspot: true // <-- Defaults to false
  //   },
  //   fields: [
  //     {
  //       name: 'caption',
  //       type: 'string',
  //       title: 'Caption',
  //     },
  //  ]
  // }



]

}
