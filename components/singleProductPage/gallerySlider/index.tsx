"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";

interface Props {
  imageGallery: Array<string>;
}

export default function SliderGallery({ imageGallery }: Props) {
  // console.log(imageGallery);



  if(!imageGallery) return;

  return (
    <div className="w-full lg:h-screen h-[60vh]  bg-black relative">
        <h1 className="text-white absolute top-20 lg:top-10 left-1 lg:left-20">Gallery</h1>
      {/* </div> */}

      <div className="w-full h-full lg:p-20 flex justify-center items-center ">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
        //   scrollbar={{ draggable: true, hide: true , dragClass: "swiper-scrollbar-drag" }}
        //   pagination={{ clickable: true ,  dynamicBullets: true }}
          modules={[ Pagination]}
          className="mySwiper"
          grabCursor={true}
          loop={false}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
        >
          {imageGallery && imageGallery.map((image, i) => (
            <SwiperSlide key={i} className="lg:w-full lg:h-full w-[50vw] h-[40vw] ">
              <div className="w-full h-full overflow-hidden">
                <Image
                  src={urlFor(image).url()}
                  alt="Shoes Detials"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover object-center "
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
          
        </Swiper>
      </div>
    </div>
  );
}
