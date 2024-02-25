import { client } from '@/app/lib/sanity'
import HeroPageSingleProduct from '@/components/singleProductPage/heroSection'
import { AllProducts } from '@/types'
import React from 'react'

type Props = {
    params: {
        slug: string
    }
}

const getAllProducts = async (slug : string) => {
    const query = `*[_type == 'products' && slug.current == "${slug}"]{
        _id,
          "model" : models->model,
          "slug" : slug.current,
          "gender": gender->gender,
          "category":category->category,
          name,
          "images" : images,
          "galleryImage" : galleryImages,
          description,
          price,
          "bannerImage" : banner
          
      }`
      const response = await client.fetch(query);
      return response;
}

const SingleProduct = async  ({params}: Props) => {
    const data : AllProducts[]  = await getAllProducts(params.slug)
    // console.log(data)
  return (
    <div className='min-h-screen w-full flex flex-col'>
        <HeroPageSingleProduct />
    </div>
  )
}

export default SingleProduct