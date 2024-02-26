"use client";
import React from "react";
import { AccordionProductDetails } from "../AccordianDetails";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";

interface Props {
  images: Array<string>;
  descriptions: string;
}
const ProductDetails = ({ images, descriptions }: Props) => {
  const desc1 = descriptions.slice(0, 448);
  const desc2 = descriptions.slice(448);
//   console.log("------------", images, "hello there");
  return (
    <div className="w-full h-screen ">
      <div className="w-full h-full flex flex-col lg:flex-row justify-between  px-5">
        <div className="Imagegallery lg:w-1/2 h-fit flex flex-wrap gap-1">
          { 
            images.map((el, i ) => (
              <div
                key={i}
                className="w-[22vw] h-[32vh] bg-[#F4F4F4] overflow-hidden cursor-pointer"
              >
                <div className="w-full h-full overflow-hidden">
                  <Image
                    src={urlFor(el).url()}
                    alt="Shoes Detials"
                    width={500}
                    height={500}
                    className="w-full h-full object-contain object-center hover:scale-105 transition-all 300ms ease-linear"
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="w-[50vw]">
          <div className="w-full">
            <p className="text-2xl text-gray-500">{desc1}</p>
            <p className="text-2xl text-gray-500 mt-10">{desc2}</p>
            <p className="text-2xl mt-10 text-gray-500">
              Designed to prove that true sustainability is found in durability.
            </p>
          </div>
          <div className="mt-32">
            <AccordionProductDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
