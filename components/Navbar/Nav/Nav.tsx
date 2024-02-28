"use client";
import React, { useState } from "react";
import { textSlideIn } from "@/Animations/Transitions/transitions";
import { motion } from "framer-motion";
import SideBarModal from "@/components/Modal/SideBarModal";
import Link from "next/link";
import { useSetRecoilState } from "recoil";
import { navbarModalState } from "@/context/navbarModalState";

const navLinks = [
  {
    name: "Men",
    link: "/collections/all-products/men",
  },
  {
    name: "Women",
    link: "/collections/all-products/women",
  },
  {
    name: "All",
    link: "/collections/all-products",
  },
];
// const navItems = [ "Shoes" , "Apparal" , "Accessories" , "Other"];

const MobileNav = () => {
  const [active , setActive ] = useState(false)
  const setOpenState = useSetRecoilState(navbarModalState)
  
  return (
    <SideBarModal>
      <div className="items flex flex-col gap-5 text-5xl pt-[108px] w-full h-full dark:text-black tracking-tighter">
        {navLinks.map((links, idx) => (
          <Link href={links.link}
            className="flex flex-col overflow-hidden  pl-4  cursor-pointer"
            key={idx}
            onClick={() => setOpenState((prev) => {
              return {
                ...prev,
                open: false
              }
            })}
          >
            <motion.h1
              variants={textSlideIn}
              initial="initial"
              animate="animate"
              exit={"exit"}
              custom={idx}
              onClick={() => setActive(!active)}
            >
              {links.name}
            </motion.h1>
           
            
          </Link>
        ))}
      </div>
    </SideBarModal>
  );
};

export default MobileNav;