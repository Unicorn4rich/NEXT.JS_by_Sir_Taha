export const persnalInfo = {
    title: 'Persnal Information',  // All schema use in one section 
    name: 'pInfo',
    type: 'document',
    fields: [
      // name input box
      {
        title: 'Enter your Name',
        name: 'name',
        type: 'string'
      },
      // age input box
      {
        title: 'Enter your Age',
        name: 'age',
        type: 'number'
      },
      // image input box
      { 
        title: 'Profile Picture',
        name: 'picture',
        type: 'image'
      },
      // array mltuple values add in one box and create multiple boxes
      {
        title: 'Enter your Hobbies',
        name: 'hobbies',
        type: 'array',
        of: [{type: 'string'}]
      },
      // array tags is mein ham tags bana category ke data ko find kar sakty hain unpe click karne ke bad ye hamen data search karne mein helo karte hain
      {
        title: 'Tags',
        name: 'tags',
        type: 'array',
        of: [{type: 'string'}],
        options: {
          layout: 'tags',
        }
      },
      // Gender drop down menu list
      {
        title: 'Gender',
        name: 'gender',
        type: 'string',
        options: {
          list: [
            {title: 'Male', value: 'male'},
            {title: 'Female', value: 'female'},
            {title: 'Other', value: 'other'},
          ]
        }
      },
      // Block
      {
        title: 'Content', 
        name: 'content',
        type: 'array', 
        of: [{type: 'block'}]
      },
      // boolean
      {
        title: 'is alive?',
        name: 'active',
        type: 'boolean'
      },
      // Date
      {
        title: 'Release date',
        name: 'releaseDate',
        type: 'date'
      },
      // Object Adress
      {
        title: 'Address',
        name: 'address',
        type: 'object',
        fields: [            // 3 input box show honge
          {name: 'street', type: 'string', title: 'Street name'},
          {name: 'streetNo', type: 'string', title: 'Street number'},
          {name: 'city', type: 'string', title: 'City'}
        ]
      },
      // for refrence ye kisi dosry schema ka data options mein sho krwaega.
      {
        title: 'Select Nationality',
        name: 'national',
        type: 'reference',
        to: [{type: 'opt'}]  // opt.ts file ke andar jo schema bnaya tha us schema ka name yahn pass karenge.
      },
      // social url links
      {
        title: 'Social URL',
        name: 'FbUrl',
        type: 'url'
      }


    ]  // main field closing
  } // main object closing