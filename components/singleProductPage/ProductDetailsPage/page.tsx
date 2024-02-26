"use client";
import React from "react";
import { AccordionProductDetails } from "../AccordianDetails";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

interface Props {
  images: Array<string>;
  descriptions: string;
}
const ProductDetails = ({ images, descriptions }: Props) => {
  const desc1 = descriptions.slice(0, 448);
  const desc2 = descriptions.slice(448);
  //   console.log("------------", images, "hello there");
  return (
    <div className="w-full min-h-screen ">
      <div className="w-full h-full flex flex-col lg:flex-row justify-between  px-5">
        <div className="hidden Imagegallery lg:w-1/2 h-fit lg:flex flex-wrap gap-1">
          {images.map((el, i) => (
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
                  priority
                  className="w-full h-full object-contain object-center hover:scale-105 transition-all 300ms ease-linear"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="lg:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            effect={"coverflow"}
            grabCursor={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
           
          >
            {images && images.map((el, i) => (
              <SwiperSlide key={i} className=" overflow-hidden  lg:w-[50vw] w-full h-full bg-[#F4F4F4]">
                <div
                  key={i}
                  className="w-full h-full bg-[#F4F4F4] overflow-hidden cursor-pointer"
                >
                  <div className="w-full h-full overflow-hidden">
                    <Image
                      src={urlFor(el).url()}
                      alt="Shoes Detials"
                      width={500}
                      height={500}
                      priority
                      className="w-full h-full object-contain object-center hover:scale-105 transition-all 300ms ease-linear"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:w-[50vw] h-full">
          <div className="w-full mt-10 lg:mt-0">
            <p className="lg:text-2xl text-gray-500">{desc1}</p>
            <p className="lg:text-2xl text-gray-500 mt-10">{desc2}</p>
            <p className="text-2xl mt-10 text-gray-500">
              Designed to prove that true sustainability is found in durability.
            </p>
          </div>
          <div className="lg:mt-32 mt-10 mb-20">
            <AccordionProductDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
