'use client'
import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import Link from 'next/link';
import dataAnimation from '@/Animations/lottiAnim/_404.json'
import 'react-lottie'
import Image from 'next/image';
const NotFound = () => {
 
  // const animation = "https://lottie.host/469d34d2-f046-479d-a364-0df0fa3affca/zFx4xK61OR.json"

return (
  <div className='w-full h-screen justify-center flex-col items-center relative' >
     {/* <Player
        src={dataAnimation}
        className="player w-full h-full"
        loop
        autoplay
      /> */}

      <div className=' flex justify-center items-center w-full'>
        <div className='w-[450px] h-[450px] overflow-hidden'>

        <Image src={'/_404.webp'} alt='Not-found' width={450} height={450} className='object-cover object-center'  />
        </div>
      </div>
      
      <div className='w-full flex justify-center text-xl text-gray-500 uppercase'>
        <p>You seem lost <span className='text-red-500'>somewhere</span></p>
      </div>
      <div className='w-full flex justify-center'>

      <Link href={'/'} className='w-full text-center underline'>Back to home</Link>
      </div>
  </div>
);
}

export default NotFound