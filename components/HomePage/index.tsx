"use client";
import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { textAnimation } from "@/Animations/textAnimation";

const HomePage = ({ data }: any) => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      // markers : true,
      start: "top",
      scrub: true,
      trigger: bannerRef.current,
      animation: gsap
        .timeline()
        .to(imageRef.current, { scale: 1.2, duration: 1 }),
    });
  }, []);
  return (
    <motion.div

      ref={bannerRef}
      className="hero-section w-full  px-1 lg:pt-100 lg:px-10 xl:pl-16 "
    >
      <div className="xl:mt-16 mt-7  tracking-tight text-[4rem] lg:text-[5rem] xl:text-[6rem] 2xl:text-[7rem]  leading-none overflow-hidden">
        <div className="w-full overflow-hidden ">
          <motion.h1 variants={textAnimation} initial="initial" animate="animate" custom={1} className=" leading-none ">INSPIRED BY </motion.h1>
        </div>
        <div className="w-full overflow-hidden">
          <motion.h1 variants={textAnimation} initial="initial" animate="animate" custom={1.1} className="">CANADA&apos;S TOUGHEST</motion.h1>
        </div>
        <div className="w-full overflow-hidden">
          <motion.h1 variants={textAnimation} initial="initial" animate="animate" custom={1.3} className="">CONDITIONS. </motion.h1>
        </div>
        <div className="bannerImage w-screen lg:h-screen  relative  mt-14 lg:mt-32 xl:mt-40 overflow-hidden">
          <motion.div variants={textAnimation} initial="initial" animate="animate" custom={1.4} className="w-full overflow-hidden">
            <Image
              src={urlFor(data[0].image1).url()}
              alt="Image"
              width={500}
              height={400}
              priority
              className=" h-full w-full object-cover object-center scale-150 lg:scale-110"
              ref={imageRef}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
