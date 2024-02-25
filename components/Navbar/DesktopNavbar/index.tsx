import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import Nav from './nav';
import './navbar.css'




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
  return (
    <div className=" relative z-50  flex justify-center gap-10 text-lg items-center">
        <div className="flex  w-full parnt-div">
      {/* <div className='fixed overlay opacity-0  left-0 w-screen top-0  z-5 h-screen bg-[#f1f1f1]' /> */}
          <div className="relative px-7 link-hover w-full   ">
            <Link
              href="/collections/all-products/men"
              className="textHoverEffect relative z-10 mix-blend-mode "
              data-text="Men"
            >
              Men
            </Link>
            <motion.div className="submenu hidden lg:flex fixed top-0 left-0 w-full bg-[#f1f1f1] dark:bg-black dark:text-white h-[60vh] z-0 ">
              <Nav gender={"men"} data={data} />
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
            <motion.div className="submenu hidden lg:flex pointer-events-none fixed top-0 left-0 w-full z-0 bg-[#f1f1f1] dark:bg-black dark:text-white h-[60vh]">
              <Nav gender="women" data={data} />
            </motion.div>
          </div>
        </div>
      </div>
  )
}

export default NavbarDestop