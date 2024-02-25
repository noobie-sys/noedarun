import { client, urlFor } from '@/app/lib/sanity'
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
     
     {
      data.length === 0 ? (
        <div className='w-full h-[80vh] flex justify-center items-center text-5xl underline'>
            <h1 className='w-[50%] text-center'>I'm sorry, It's seems like we don't have what you need!</h1>
        </div>
      ) : data.map((el , i) => {
        console.log(el)
        return ( 
          
          <HeroPageSingleProduct key={el._id} bannerImage={urlFor(el.bannerImage).url()} name={el.name} model={el.model} price={el.price} />
        )
      })
     }
    </div>
  )
}

export default SingleProduct