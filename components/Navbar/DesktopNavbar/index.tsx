'use client'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import Nav from './nav';
import './navbar.css'
import { useParams, usePathname } from 'next/navigation';




const data = [
    {
        categoryName : "Shoes",
        navImage : "/assets/banner/shoes.webp",
    },
    {
        categoryName : "Accessories",
        navImage : "/assets/banner/acc.webp",
    },
    {
        categoryName : "Apparel",
        navImage : "/assets/banner/apparel.webp",
    },
    {
        categoryName : "View All",
        navImage : "/assets/banner/other.webp",
    }
]




const NavbarDestop =  () => {
    // const  data : NavbarCategory[] = await getProductImage()
    // console.log(data)
    const pathname = usePathname()
    const params = useParams()
  return (
    <div className=" relative z-50  flex justify-center gap-10 text-lg items-center">
        <div className={`flex  w-full parnt-div ${pathname === "/products/"+params.slug ? "text-white" : "text-color"}`}>
      {/* <div className='fixed overlay opacity-0  left-0 w-screen top-0  z-5 h-screen bg-[#f1f1f1]' /> */}
          <div className="relative px-7 link-hover w-full   ">
            <Link
              href="/collections/all-products/men"
              className={`textHoverEffect relative z-10  `}
              data-text="Men"
            >
              Men
            </Link>
            <motion.div className="submenu hidden lg:flex fixed top-0 left-0 w-full  h-[60vh] z-0 bg-black ">
              <div className={`flex justify-between w-full bg-[#f1f1f1] dark:bg-black dark:text-white`}>

              <Nav gender={"men"} data={data} />
              </div>
            </motion.div>
          </div>
          <div className="relative px-7  link-hover ">
            <Link
              href="/collections/all-products/women"
              className="textHoverEffect relative z-10 "
              data-text="Women"
            >
              Women
            </Link>
            <motion.div className="submenu hidden lg:flex pointer-events-none fixed top-0 left-0 w-full z-0  h-[60vh]">
              <div className={`flex justify-between w-full bg-[#f1f1f1] dark:bg-black dark:text-white`}>

              <Nav gender="women" data={data} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
  )
}

export default NavbarDestop