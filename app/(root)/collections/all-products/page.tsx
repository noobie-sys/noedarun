import { client, urlFor } from "@/app/lib/sanity";
import ProductCard from "@/components/Products/All-products/page";
import Card from "@/components/ui/custom_card";
import { Products } from "@/types";
import React from "react";

const getProductDetails = async () => {
  const query = `*[_type == 'products']{
        _id,
          "Description":description,
          gender,
          "slug" : slug.current,
          "product_image" : images,
          "models" : models -> model,
          "category" : category->category,
          "BannerImages" : banner,
          "Gallery Images" : galleryImages,
          name,
          price
      }`;
  const response = await client.fetch(query);
  return response;
};

const getProducts = async () => {
  const query = `*[_type == 'products']{
        name,
        price,
        "model" : models->model,
        "image" : images[0],
        "slug" : slug.current
    }`;
  const response = await client.fetch(query);
  return response;
};

const AllProducts = async () => {
  const data : Products[] = await getProducts();
//   console.log(data)
  return (
    <div className="w-full lg:min-h-screen gap-2 flex flex-col  ">
        <div className="mb-10 pl-20 overflow-hidden">
            <h1 className="text-[5vw] font-bold ">Products</h1>
        </div>

        <div className="gap-4 flex  flex-wrap  justify-center  lg:gap-4 mb-10 ">

        {
            data && data.map((el , i ) => (
                <Card key={i} image={urlFor(el.image).url()} name={el.name} price={el.price} model={el.model} slug={el.slug} index={i} />
            ))
        }
        </div>

      
    </div>
  );
};

export default AllProducts;
