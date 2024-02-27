import React from 'react'

interface Props {
    height : string
    width : string
    top : number
    left : number
}

const CustomCursor = () => {

    
  return (
    <div id='cursor' className={`bg-blend-difference absolute translate-x-[-50%] translate-y-[-50%] top-0 pointer-events-none z-[4345345354] left-0 w-10 scale-0 rounded-full h-10 bg-white`}>
        <span className={`text-[5px] font-[Neue Montreal]  flex justify-center items-center w-full h-full uppercase`}>
            Drag or Click
        </span>
    </div>
  )
}

export default CustomCursor