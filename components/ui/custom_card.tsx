'use client'
import { Products } from '@/types'
import Image from 'next/image'
import React from 'react'

import { motion } from 'framer-motion'
import { slideUpOpacity } from '@/Animations/Transitions/transitions'
import Link from 'next/link'



const Card = ({image, name, price , model ,slug , index} : Products) => {
  return (
    <motion.div variants={slideUpOpacity} custom={index} initial='initial' whileInView='animate' viewport={{once : true}}  className=' flex w-[45vw] h-[30vh] lg:w-[30vw] lg:h-[50vh] bg-[#F6F6F6] mx-2 p-2 rounded-lg'>
        <Link href={`/products/${slug}`} className='w-full flex flex-col justify-center items-center cursor-pointer'>
            <div className='images w-[40vw] h-[30vh] lg:w-[30vw] lg:h-[40vh] mb-5 overflow-hidden  '>
                <Image src={image} alt='Images' loading='lazy' width={500} height={500} className='w-full h-full object-contain object-center   hover:scale-105 transition-all duration-150' />
            </div>
            <div className='product preview w-full'>
                <div className='flex justify-between lg:px-10 w-full text-xl lg:text-2xl text-black'>
                    <div className='leading-none'>
                        <h1 className='font-bold uppercase tracking-tighter'>{model}</h1>
                        <h1 className='text-lg'>{name}</h1>
                    </div>
                    <div>
                        <p className='text-xl font-semibold'>${price} USD</p>
                    </div>
                </div>
            </div>
        </Link>
    </motion.div>
  )
}

export default Card