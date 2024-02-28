import { client, urlFor } from "@/app/lib/sanity";
import FeatureProduct from "@/components/HomePage/FeatureProduct/FeatureProduct";
import Empty from "@/components/lottie/empty";
import ProductDetails from "@/components/singleProductPage/ProductDetailsPage/page";
import SliderGallery from "@/components/singleProductPage/gallerySlider";
import HeroPageSingleProduct from "@/components/singleProductPage/heroSection";
import { AllProducts } from "@/types";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

const getAllProducts = async (slug: string) => {
  const query = `*[_type == 'products' && slug.current == "${slug}"]{
        _id,
          "model" : models->model,
          "slug" : slug.current,
          "gender": gender->gender,
          "category":category->category,
          name,
         images,
          "galleryImages" : galleryImages,
          description,
          price,
          "bannerImage" : banner,
          "price_id": price_id
          
      }`;
  const response = await client.fetch(query);
  return response;
};

const SingleProduct = async ({ params }: Props) => {
  const data: AllProducts[] = await getAllProducts(params.slug);
  // console.log(data)

  return (
    <div className="min-h-screen w-full flex flex-col">
      {data.length === 0 ? (
        <div className="w-full h-screen flex justify-center items-center text-5xl underline">
          <Empty />
        </div>
      ) : (
        data.map((el, i) => {
          // console.log(el.images)
          return (
            <div className="w-full " key={el._id}>
              <HeroPageSingleProduct
                key={el._id}
                {...el}
              />

              <ProductDetails
                images={el.images}
                descriptions={el.description}
              />
              <SliderGallery  imageGallery={el.galleryImages}/>
              {/* <FeatureProduct /> */}
            </div>
          );
        })
      )}
    </div>
  );
};

export default SingleProduct;
