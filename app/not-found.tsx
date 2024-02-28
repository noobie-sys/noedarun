'use client'
import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import Link from 'next/link';
const NotFound = () => {
 

return (
  <div className='w-full h-screen justify-center flex-col items-center'>
     <Player
        src='https://lottie.host/2ad98f9a-b608-4c12-8ba5-ebfd006b0cd0/lA8yUxndev.json'
        className="player w-full h-full"
        loop
        autoplay
      />
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