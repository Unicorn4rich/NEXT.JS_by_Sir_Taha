export const hero = {
    title: 'Hero wala schema',
    name: 'hero',
    type: 'document',
    fields: [                  // main field start
      {   // input for text
        title: 'Heading',
        name: 'heading',
        type: 'string'
      },
      {   // input for text
        title: 'Description',
        name: 'desc',
        type: 'string'
      },

      {  // input for image
        title: 'Card Image',
        name: 'image',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        },
        fields: [  // ye feild sirf alternative text ke liye bani hai warna image get karne ke liye opar wali field kafi thi.
            {
              title: 'Picture caption',
              name: 'alt',
              type: 'string',
            },
        ]   
      },
      {  // input for image 2
        title: 'Card Image 2',
        name: 'imageTwo',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        },
        fields: [  // ye feild sirf alternative text ke liye bani hai warna image get karne ke liye opar wali field kafi thi.
            {
              title: 'Picture caption',
              name: 'alt2',
              type: 'string',
            },
        ]   
      }

    ]  // main field end

}