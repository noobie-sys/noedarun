import { client, urlFor } from '@/app/lib/sanity';
import Card from '@/components/ui/custom_card';
import { Products } from '@/types';
import React from 'react'

const getProductDetail = async (slug : string , product : string) => {
    let genderForAccerssories = slug === 'accessories' ? 'both' : product
    // console.log(genderForAccerssories)
    const query = `*[_type == 'products' && category->category == "${slug}" && gender->gender == "${genderForAccerssories}"]{
        _id,
          gender,
          "slug" : slug.current,
          "image" : images[0],
          "models" : models -> model,
          name,
          price
      }`

      const response = await client.fetch(query);
      return response;
}

const Product = async ({params} : {params : {slug : string , product : string}}) => {
    const genderSlug = params.product[0].toUpperCase() + params.product.slice(1)

    const data : Products[] = await getProductDetail(params.slug , genderSlug)
    // console.log(data)
  return (
    <div className='w-full lg:min-h-screen gap-2 flex flex-col '>
        <div className="mb-10 pl-20 overflow-hidden">
        <h1 className="text-[5vw] font-bold "> {params.slug.toUpperCase()}</h1>
      </div>
        <div className='gap-4 flex  flex-wrap px-4   lg:gap-4 mb-10'>

        {
            data.length === 0 ? (
                <div className='w-full h-[80vh] flex justify-center items-center text-5xl underline'>
                    <h1 className='w-[50%] text-center'>I'm sorry, It&apos;s seems like we don't have what you need!</h1>
                </div>
            ) : data.map((el , i) => (
                <Card key={i} image={urlFor(el.image).url()} name={el.name} price={el.price} model={el.model} slug={el.slug} index={i} />
            ))
        }
        </div>
    </div>
  )
}

export default Product