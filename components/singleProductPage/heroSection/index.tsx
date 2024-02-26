import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

interface Props {
    bannerImage : string,
    name : string,
    model : string,
    price : number
}

const HeroPageSingleProduct = ({bannerImage , name , model , price} : Props) => {
  return (
    <div className='w-full h-screen relative'>
        <div className='bannerImage absolute -top-[9rem] left-0 w-full h-full'>
            <Image src={bannerImage} alt='image' fill className='object-cover object-center' sizes='auto' priority />
        </div>
        <div className='w-full h-full gap-20  pb-[10rem] relative z-10 flex flex-col pr-10 justify-end items-end text-white'>
                <div className='flex w-full lg:w-[40rem] border-b border-b-slate-400 pb-10 px-1 justify-between text-[4rem] font-bold uppercase drop-shadow-lg flex-col lg:flex-row'>
                    <div>{model}</div>
                    <div>{name}</div>
                </div>
                <div className='lg:w-[40rem] w-full'>
                    <Button className='w-full text-black bg-white hover:bg-[#222222] hover:text-white uppercase font-bold' variant={'secondary'}>Add to Carts - $100USD</Button>
                </div>
        </div>

    </div>
  )
}

export default HeroPageSingleProduct