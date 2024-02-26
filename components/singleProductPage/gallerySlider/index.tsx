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

  return (
    <div className="w-full h-screen  bg-black relative">
        <h1 className="text-white absolute top-10 left-20">Gallery</h1>
      {/* </div> */}

      <div className="w-full h-full p-20 ">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          scrollbar={{ draggable: true, hide: true }}
          modules={[Scrollbar, Navigation]}
          className="mySwiper w-full h-full"
          grabCursor={true}
          loop={false}
        >
          {imageGallery.map((image, i) => (
            <SwiperSlide key={i} className="w-full h-full ">
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
          {/* <SwiperSlide className="bg-green-500">
            <div className="">
                slide 1
            </div>
        </SwiperSlide>
        <SwiperSlide className="bg-red-500 w-[40vw]">Slide 2</SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
}
