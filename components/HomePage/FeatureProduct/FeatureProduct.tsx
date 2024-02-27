"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { textAnimation } from "@/Animations/textAnimation";
import { imageAnimation } from "@/Animations/imageAnimation";

const FeatureProduct = ({ data }: any) => {
  return (
    <div className="w-full h-full relative px-3">
      <div className="w-full h-full relative">
        <div className="text-div pt-6 tracking-tighter leading-[46px] lg:leading-none font-[400]">
          <motion.h1
            variants={textAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={1}
            className="w-full text-[40px] lg:pl-10 lg:text-[5vw] "
          >
            Featured
          </motion.h1>
        </div>
        <motion.div
          variants={imageAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={1.1}
          className="card mt-10"
        >
          <div className="image w-full  ">
            <div className="image-slider flex lg:px-12 px-0">
              <Swiper
                slidesPerView={2}
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
                {data &&
                  data.map((el: any, i: number) => {
                    return (
                      <SwiperSlide
                        key={i}
                        className=" overflow-hidden  lg:w-[50vw] w-full h-full bg-[#F4F4F4]"
                      >
                        <Link
                          href={`/products/${data[i].slug}`}
                          className="overflow-hidden relative h-[50vh]  "
                        >
                          <Image
                            src={urlFor(data[i].bannerImage).url()}
                            alt="Image"
                            width={500}
                            height={500}
                            className=" w-full h-full object-cover object-center hover:scale-110 transition-scale duration-1000 delay-100 "
                          />
                        </Link>
                        <div className="w-full lg:px-12 px-4 absolute bottom-0 left-0 text-black lg:py-10 py-5 flex justify-between ">
                          <div className="text-3xl">
                            <div>
                              <h1>{data[i].model}</h1>
                            </div>
                            <div>
                              <h1>{data[i].name}</h1>
                            </div>
                          </div>
                          <div className="text-3xl text-end flex justify-end items-end ">
                            <h1>${data[i].price} USD</h1>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
          </div>
        </motion.div>
        <div className="links flex justify-end absolute z-[50] lg:top-16 lg:right-0 lg:w-full lg:h-fit -bottom-12 left-0  gap-10 lg:px-12 text-[20px]  ">
          <Link
            href={"/collections/all-products/men"}
            className="flex justify-center items-center relative  h-fit "
          >
            <motion.div variants={textAnimation} initial="initial" whileInView="animate" custom={1.1} viewport={{ once: true }} className="textHoverEffect flex justify-center items-center gap-10 ">
              <h1 className="">Men Products</h1>
              <ArrowRight />
            </motion.div>
          </Link>
          <Link
            href={"/collections/all-products/women"}
            className="flex justify-center items-center h-fit relative "
          >
            <motion.div variants={textAnimation} initial="initial" whileInView="animate" custom={1.1} viewport={{ once: true }} className="textHoverEffect flex justify-center items-center gap-10">
              <h1>Women Products</h1>
              <ArrowRight />
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
