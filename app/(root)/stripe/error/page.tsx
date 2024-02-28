'use client'

import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";
import dataAnimation from '@/Animations/lottiAnim/error.json'
import Image from "next/image";

const ErrorPage = () => {
  return (
    <div className="success-page w-full h-screen justify-center items-center">
      <div className=' flex justify-center items-center w-full'>
        <div className='w-[400px] h-[400px] overflow-hidden'>

        <Image src={'/assets/banner/error.png'} alt='Not-found' width={400} height={400} className='object-cover object-center'  />
        </div>
      </div>
      <h1 className="w-full text-center">Payment Cancel</h1>
      <h1 className="w-full text-center mt-4 underline">

      <Link href={'/'}>Continue Shopping</Link>
      </h1>
    </div>
  );
};

export default ErrorPage;
