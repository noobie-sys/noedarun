import { client, urlFor } from "@/app/lib/sanity";
import Card from "@/components/ui/custom_card";
import { Products } from "@/types";
import React from "react";

const getProducts = async (slug : string) => {
  const query = `*[_type == 'products' && (gender->gender == "${slug}" || gender->gender == "both")]{
    _id,
      gender,
      "slug" : slug.current,
      "image" : images[0],
      "models" : models -> model,
      name,
      price
  }`;
  const response = await client.fetch(query);
  return response;
}
const SingleProducts = async ({params} : {params : {slug : string}}) => {
  const slug = params.slug[0].toUpperCase() + params.slug.slice(1)
  console.log(slug , "Hello There")
  const data : Products[] = await getProducts(slug );
  // console.log(params.slug)
  return (
    <div className="w-full lg:min-h-screen gap-2 flex flex-col  ">
      <div className="mb-10 pl-20 overflow-hidden">
        <h1 className="text-[5vw] font-bold ">{slug} Products</h1>
      </div>

      <div className="gap-4 flex  flex-wrap  lg:px-10  lg:gap-4 mb-10 ">

        {
            data && data.map((el , i ) => (
                <Card key={i} image={urlFor(el.image).url()} name={el.name} price={el.price} model={el.model} slug={el.slug} index={i} />
            ))
        }
        </div>
    </div>
  );
};

export default SingleProducts;
