'use client';
import { urlFor } from "@/app/lib/sanity";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { textAnimation, textAnimationLoop } from "@/Animations/textAnimation";

const Stories = ({ data }: any) => {
  const details =
    "We couldn&apos;t find a trail shoe that was tough enough, light enough or fast enough to take us where we wanted to go. So we created it.".split(
      " "
    );
  return (
    <div className="w-full relative h-full mt-32 ">
      <div className="image">
        <div>
          <div>
            <Image
              src={urlFor(data[0].image2).url()}
              alt="image"
              width={400}
              height={400}
              className="w-full h-screen object-cover object-center"
            />
          </div>
        </div>
      </div>
      <div className="text absolute top-0 flex flex-col h-full justify-between w-full left-0">
        <div>
          <p className="lg:text-[3vw] text-[8vw] mt-8 lg:mt-20 pl-2 lg:pl-9  lg:w-[45vw] gap-4 text-white flex flex-wrap leading-none relative">
            {details.map((el, i) => (
              <motion.span variants={textAnimationLoop} initial="initial" whileInView="animate" viewport={{once : true}} custom={i } key={i} className="leading-none">
                <span className="leading-none p-0">{el}</span>
              </motion.span>
            ))}
          </p>
        </div>
        <div className="lg:text-[2vw] text-[4vw] mt-20 pr-9 tracking-tighter text-white pb-10  flex px-10 relative">
            <motion.div variants={textAnimation} initial="initial"  whileInView={"animate"} viewport={{once : true}} custom={1} className="relative">

            <Link href="/stories" className="textHoverEffect flex  justify-center items-center gap-4 ">Discover our missions
            <ArrowRight />
            </Link>
            </motion.div>
        </div>
      </div>
      
    </div>
  );
};

export default Stories;
