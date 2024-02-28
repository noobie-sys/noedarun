'use client'
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";
import dataAnimation from '@/Animations/lottiAnim/success.json'
import Image from "next/image";


const Success = () => {
  return (
    <div className="success-page w-full h-screen justify-center items-center">
      {/* <Player src={dataAnimation}
       className="player w-[450px] h-[450px]"
       loop
       autoplay
      /> */}
      <div className=' flex justify-center items-center w-full'>
        <div className='w-[450px] h-[450px] overflow-hidden'>

        <Image src={'/assets/banner/success.webp'} alt='Not-found' width={450} height={450} className='object-cover object-center'  />
        </div>
      </div>
      <h1 className="w-full text-center">Payment Succesfull</h1>
      <h1 className="w-full text-center mt-4 underline">

      <Link href={'/'}>Continue Shopping</Link>
      </h1>
    </div>
  );
};

export default Success;
