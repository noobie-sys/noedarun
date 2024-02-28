'use client' 
 
import { Button } from '@/components/ui/button'
import { Player } from '@lottiefiles/react-lottie-player'
import { useEffect } from 'react'
// import dataAnimation from '@/Animations/lottiAnim/failed.json'
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <h2>Something went wrong!</h2>
      {/* <Player
        src={dataAnimation}
        className="player w-full h-full"
        loop
        autoplay
      /> */}
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  )
}