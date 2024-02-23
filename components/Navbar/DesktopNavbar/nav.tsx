"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { slideDownNav } from "@/Animations/Transitions/transitions";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import "../nav.css";
import { client, urlFor } from "@/app/lib/sanity";
import { NavbarCategory } from "@/types";
import axios from "axios";

interface Props {
  gender: string;
  data: Array<NavbarCategory>;
}
const Nav = ({ gender, data }: Props) => {
  // const data: NavbarCategory[] = await getProductImage();

  // console.log(data);
  return (
    <div className="submenu-item hidden lg:flex  justify-around px-5 h-full w-full items-center transition-all ">
      {data &&
        data.map((el, i) => (
          <Link
            href={`/collections/${el.categoryName}/${gender}`}
            key={i}
            className="box-1 w-[30vw] h-[30vh] xl:h-[40vh] xl:w-[40vh] "
          >
            <motion.div
              initial="initial"
              animate="animate"
              exit={"exit"}
              className="w-full h-full img-div overflow-hidden"
            >
              <motion.div className="w-full h-full">
                <Image
                  src={el.navImage}
                  alt="image"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full hover:scale-105 transition-all duration-200  object-center"
                />
              </motion.div>
            </motion.div>
            <div className="w-full h-fit  flex justify-between px-2 py-2 ">
              <div className="font-bold flex justify-center items-center tracking-tighter text-black dark:text-white">
                <h1>{el.categoryName}</h1>
              </div>
              <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#363636] text-white ">
                <ArrowRight size={20} />
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Nav;
