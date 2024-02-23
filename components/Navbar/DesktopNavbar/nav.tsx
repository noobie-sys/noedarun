import React from "react";
import { motion } from "framer-motion";
import { slideDownNav } from "@/Animations/Transitions/transitions";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="submenu-item flex gap-4 justify-around px-5 h-full w-full items-center transition-all ">
      <Link href='/' className="box-1 w-[30vw] h-[30vh] xl:h-[40vh] xl:w-[40vh] ">
        <motion.div initial={{translateY : "-100%"}} whileInView={{translateY : 0}} transition={{duration : 1}} className="w-full h-full ">
          <Image
            src={"/assets/banner/Homepage.webp"}
            alt="image"
            width={400}
            height={400}
            className="object-cover w-full h-full  object-center"
          />
        </motion.div>
        <div className="w-full h-fit  flex justify-between px-2 py-2 ">
          <div className="font-bold flex justify-center items-center tracking-tighter text-white">
            <h1>Shoes</h1>
          </div>
          <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#363636] text-white ">
            <ArrowRight size={20} />
          </div>
        </div>
      </Link>
    
    </div>
  );
};

export default Nav;
