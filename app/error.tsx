'use client' 
 
import { Button } from '@/components/ui/button'
import { Player } from '@lottiefiles/react-lottie-player'
import { useEffect } from 'react'
 
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
      <Player
        src='https://lottie.host/85705511-0aea-4843-87d0-78aa04a45f31/vt3CWbidta.json'
        className="player w-full h-full"
        loop
        autoplay
      />
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