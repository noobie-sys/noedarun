export default {
  name: 'products',
  title: 'Products',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
        name : 'images',
        title : 'Product Images',
        type : 'array',
        of : [{type : 'image'}]
    },
    {
        name : 'galleryImages',
        title : 'Gallery Images',
        type : 'array',
        of : [{type : 'image'}]
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
        name : 'price_id',
        title : 'Stripe Id',
        type : 'string'
    },
    // genders
    {
        name : 'gender',
        type : 'reference',
        to : [{type : 'gender'}]
    },
    // category
    {
        name : 'category',
        type : 'reference',
        to : [{type : 'category'}]
    },

    // Shoes Models
    {
        name : 'models',
        type : 'reference',
        to : [{type : 'models'}]
    },
    // banner Image 
    {
        name : 'banner',
        type : 'image',
        title : 'Banner Image',
        options : {
            hotspot : true
        }
    }
  ],
}
